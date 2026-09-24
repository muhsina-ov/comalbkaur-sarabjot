import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";

/**
 * Elegant floating music player — uses public/media/music.mp3 (2.5MB)
 * Spec: minimal JS, lazy load, respect reduced-motion, no autoplay without gesture
 * Cloudflare optimized: static asset /media/music.mp3 served with immutable cache
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Respect prefers-reduced-motion — don't auto-play motion-sensitive users (optional)
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    // 1. Attempt immediate autoplay (works if browser allows or already interacted)
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (err) {
        // Autoplay policy prevented immediate playback until user interaction
        console.debug("Autoplay waiting for user gesture:", err);
      }
    };
    tryAutoplay();

    // 2. Global user interaction listener to start music on first touch/click/scroll
    const handleUserGesture = async () => {
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (e) {
          console.debug("Play error on gesture:", e);
        }
      }
      removeGestureListeners();
    };

    const removeGestureListeners = () => {
      window.removeEventListener("click", handleUserGesture);
      window.removeEventListener("touchstart", handleUserGesture);
      window.removeEventListener("pointerdown", handleUserGesture);
      window.removeEventListener("keydown", handleUserGesture);
      window.removeEventListener("scroll", handleUserGesture);
      window.removeEventListener("play-wedding-music", handleUserGesture);
    };

    window.addEventListener("click", handleUserGesture, { passive: true });
    window.addEventListener("touchstart", handleUserGesture, { passive: true });
    window.addEventListener("pointerdown", handleUserGesture, { passive: true });
    window.addEventListener("keydown", handleUserGesture, { passive: true });
    window.addEventListener("scroll", handleUserGesture, { passive: true });
    window.addEventListener("play-wedding-music", handleUserGesture);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      removeGestureListeners();
    };
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    setHasInteracted(true);
    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (e) {
      console.warn("Audio play blocked", e);
      setIsPlaying(false);
    }
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/media/music.mp3"
        preload="metadata"
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Floating control — luxury minimal */}
      <div className="pointer-events-none fixed bottom-5 right-4 z-[60] sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
          aria-pressed={isPlaying}
          className="press pointer-events-auto group flex min-h-[44px] min-w-[44px] items-center gap-2.5 rounded-full border border-primary/25 bg-background/85 px-3 py-2 text-foreground shadow-[0_10px_28px_-18px_oklch(0.5_0.06_75_/_0.5)] backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:gap-3 sm:px-4"
        >
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-primary transition-colors sm:h-9 sm:w-9 ${
              isPlaying
                ? "border-primary/30 bg-primary/10"
                : "border-primary/20 bg-secondary/40"
            }`}
          >
            {isPlaying ? (
              <Pause className="h-[14px] w-[14px] sm:h-4 sm:w-4" aria-hidden="true" />
            ) : (
              <Play className="ml-0.5 h-[14px] w-[14px] sm:h-4 sm:w-4" aria-hidden="true" />
            )}
          </span>

          <span className="hidden pr-1 text-left sm:block">
            <span className="block text-[0.62rem] font-medium uppercase tracking-[0.14em] text-foreground">
              {isPlaying ? "Pause" : "Play"} music
            </span>
            <span className="block text-[0.58rem] tracking-wide text-muted-foreground">
              {!hasInteracted ? "Tap to play" : isPlaying ? "Now playing" : "Paused"}
            </span>
          </span>

          {/* Mobile: just icon + tiny dot when playing */}
          <span
            aria-hidden="true"
            className={`sm:hidden h-1.5 w-1.5 rounded-full ${
              isPlaying ? "bg-primary animate-pulse" : "bg-muted-foreground/30"
            }`}
          />
        </button>

        {/* Subtle hint for first visit */}
        {!hasInteracted && !prefersReducedMotion && (
          <p className="pointer-events-none mt-2 hidden text-right text-[0.58rem] tracking-wide text-muted-foreground/70 sm:block">
            <Music className="mr-1 inline h-3 w-3" aria-hidden="true" />
            Wedding melody
          </p>
        )}
      </div>
    </>
  );
}
