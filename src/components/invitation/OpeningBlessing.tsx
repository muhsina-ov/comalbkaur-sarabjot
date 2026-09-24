import ikOnkar from "@/assets/ik-onkar.jpeg";
import ikOnkarWebp from "@/assets/ik-onkar.webp";

/**
 * Opening blessing — Sikh Ik Onkar symbol + Gurbani lines as text.
 * Customer requirement: "I wanted the lines written there not a photo pasted."
 * The Ik Onkar image is the sacred symbol; the Gurbani lines are rendered as text.
 */
export function OpeningBlessing() {
  return (
    <section
      aria-label="Opening blessing"
      className="flex flex-col items-center bg-background px-6 pb-6 pt-10 sm:pb-8 sm:pt-14"
    >
      {/* Fine hairline above — editorial */}
      <span
        aria-hidden="true"
        className="mb-8 h-px w-12 bg-primary/40 sm:mb-10 sm:w-16"
        style={{ animation: "shimmer-line 3s ease-in-out infinite" }}
      />

      {/* ੴ Symbol */}
      <p className="font-display text-[2.8rem] leading-none text-primary sm:text-[3.4rem]" aria-label="Ik Onkar">
        ੴ
      </p>

      {/* Gurbani lines rendered as text, NOT as image */}
      <div className="mt-6 max-w-[22rem] text-center">
        <p className="font-display text-[0.82rem] leading-[2] tracking-[0.08em] text-foreground/85 sm:text-[0.88rem]">
          ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ
        </p>
        <p className="mt-1 font-display text-[0.82rem] leading-[2] tracking-[0.08em] text-foreground/85 sm:text-[0.88rem]">
          ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ
        </p>
      </div>

      <span
        aria-hidden="true"
        className="mt-8 h-px w-12 bg-primary/40 sm:mt-10 sm:w-16"
        style={{ animation: "shimmer-line 3s ease-in-out infinite", animationDelay: "1.5s" }}
      />
      <p className="mt-6 text-center text-[0.58rem] uppercase tracking-airy text-muted-foreground sm:text-[0.62rem]">
        With Waheguru&apos;s blessings
      </p>
    </section>
  );
}
