import ikOnkar from "@/assets/ik-onkar.jpeg";
import ikOnkarWebp from "@/assets/ik-onkar.webp";

/**
 * Opening blessing — Sikh religious artwork as standalone element.
 * Spec: "Use the SIGN/SYMBOL/ARTWORK itself. Do NOT use its original background as website background.
 *  Do NOT stretch/distort/crop. Preserve proportions. Place elegantly near top/center with generous whitespace."
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
      <div className="relative">
        {/* Subtle gold glow behind artwork — paper isolated, not background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle at 50% 50%, var(--color-primary), transparent 68%)",
            transform: "scale(1.35)",
          }}
        />
        <picture>
          <source srcSet={ikOnkarWebp} type="image/webp" />
          <img
            src={ikOnkar}
            alt="Ik Onkar — Sikh opening blessing"
            width={560}
            height={560}
            // Client said "Please use this at the start" — standalone, preserve aspect, generous whitespace
            className="block h-auto w-[200px] max-w-[72vw] object-contain sm:w-[240px] md:w-[260px]"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
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
