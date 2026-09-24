import { useState, useEffect } from "react";
import csMonoJpeg from "@/assets/cs-monogram.jpeg";
import csMonoWebp from "@/assets/cs-monogram.webp";

const SESSION_KEY = "comal-sarabjot-opened";

/**
 * Door-opening intro animation.
 * Customer requirement: "Where is the door that opens up like in the template?"
 * Two ornate doors slide apart to reveal the invitation behind them.
 */
export function DoorOpener({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem(SESSION_KEY) === "true";
    if (alreadyOpened) return;
    setVisible(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function openDoors() {
    if (opened) return;
    setOpened(true);
    sessionStorage.setItem(SESSION_KEY, "true");
    // After the door animation finishes, fade out and remove
    window.setTimeout(() => setClosing(true), 1200);
    window.setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, 2200);
  }

  if (!visible) return <>{children}</>;

  return (
    <>
      {/* Invitation content behind doors */}
      <div style={{ opacity: opened ? 1 : 0, transition: "opacity 0.8s ease 0.4s" }}>
        {children}
      </div>

      {/* Door overlay */}
      <div
        className={`fixed inset-0 z-[100] ${closing ? "pointer-events-none" : ""}`}
        style={{
          opacity: closing ? 0 : 1,
          transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        role="dialog"
        aria-label="Open wedding invitation"
      >
        {/* Left door */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.983 0.014 92) 0%, oklch(0.94 0.024 96) 50%, oklch(0.92 0.032 88) 100%)",
            borderRight: "1px solid oklch(0.72 0.075 78 / 0.3)",
            transform: opened ? "translateX(-100%)" : "translateX(0)",
            transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Ornate pattern on left door */}
          <div className="flex h-full flex-col items-end justify-center pr-4">
            <svg viewBox="0 0 80 400" className="h-[60vh] w-auto opacity-[0.12]" aria-hidden="true">
              <path d="M70 0 Q80 50 60 100 Q40 150 70 200 Q100 250 60 300 Q20 350 70 400" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
              <path d="M50 20 Q60 70 40 120 Q20 170 50 220 Q80 270 40 320 Q0 370 50 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-primary" />
              {/* Floral accents */}
              <circle cx="60" cy="100" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="40" cy="200" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="60" cy="300" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </svg>
          </div>
        </div>

        {/* Right door */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
          style={{
            background: "linear-gradient(225deg, oklch(0.983 0.014 92) 0%, oklch(0.94 0.024 96) 50%, oklch(0.92 0.032 88) 100%)",
            borderLeft: "1px solid oklch(0.72 0.075 78 / 0.3)",
            transform: opened ? "translateX(100%)" : "translateX(0)",
            transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Ornate pattern on right door */}
          <div className="flex h-full flex-col items-start justify-center pl-4">
            <svg viewBox="0 0 80 400" className="h-[60vh] w-auto opacity-[0.12]" aria-hidden="true">
              <path d="M10 0 Q0 50 20 100 Q40 150 10 200 Q-20 250 20 300 Q60 350 10 400" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
              <path d="M30 20 Q20 70 40 120 Q60 170 30 220 Q0 270 40 320 Q80 370 30 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-primary" />
              <circle cx="20" cy="100" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="40" cy="200" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="20" cy="300" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </svg>
          </div>
        </div>

        {/* Centre seam decoration */}
        <div
          className="absolute inset-y-0 left-1/2 z-10 -translate-x-1/2"
          style={{
            opacity: opened ? 0 : 1,
            transition: "opacity 0.6s ease",
          }}
        >
          <div className="flex h-full w-px flex-col items-center justify-center bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Centre content — "Tap to open" */}
        {!opened && (
          <button
            type="button"
            onClick={openDoors}
            className="absolute inset-0 z-20 flex w-full flex-col items-center justify-center focus-visible:outline-none"
            aria-label="Tap to open the wedding invitation"
          >
            {/* Monogram */}
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-primary/30 bg-white/80 shadow-[0_10px_28px_-18px_oklch(0.5_0.06_75_/_0.5)] sm:h-24 sm:w-24">
              <picture>
                <source srcSet={csMonoWebp} type="image/webp" />
                <img
                  src={csMonoJpeg}
                  alt=""
                  aria-hidden="true"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-center"
                />
              </picture>
              <span className="pointer-events-none absolute inset-[6px] rounded-full border border-primary/15" />
            </div>

            <p className="mt-5 font-display text-[1.4rem] tracking-wide text-foreground sm:text-[1.6rem]">
              Comal &amp; Sarabjot
            </p>

            <p className="mt-2 text-[0.58rem] uppercase tracking-airy text-muted-foreground">
              13 December 2026
            </p>

            <span
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/60 px-6 py-2.5 text-[0.62rem] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm"
              style={{ animation: "shimmer-line 3s ease-in-out infinite" }}
            >
              Tap to open
            </span>
          </button>
        )}
      </div>
    </>
  );
}
