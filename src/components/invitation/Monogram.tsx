import csMono from "@/assets/cs-monogram.jpeg";
import csMonoWebp from "@/assets/cs-monogram.webp";

/**
 * CS monogram — small/subtle, generous whitespace, never competing with Ik Onkar.
 * Spec: Near the top, small/subtle, never as full-page background.
 */
export function Monogram({ size = "default" }: { size?: "small" | "default" | "hero" }) {
  const sizeClass =
    size === "small"
      ? "w-14 h-14 sm:w-16 sm:h-16"
      : size === "hero"
        ? "w-20 h-20 sm:w-24 sm:h-24"
        : "w-16 h-16 sm:w-20 sm:h-20";

  return (
    <div className="flex flex-col items-center bg-background px-6 py-4 sm:py-6">
      <div
        className={`relative ${sizeClass} overflow-hidden rounded-full border border-primary/25 bg-white/80 shadow-[0_10px_28px_-18px_oklch(0.5_0.06_75_/_0.5)]`}
        aria-hidden="true"
      >
        <picture>
          <source srcSet={csMonoWebp} type="image/webp" />
          <img
            src={csMono}
            alt=""
            aria-hidden="true"
            width={200}
            height={200}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </picture>
        {/* Delicate inner ring */}
        <span className="pointer-events-none absolute inset-[6px] rounded-full border border-primary/15" />
      </div>
      <p className="mt-3 text-[0.56rem] uppercase tracking-[0.24em] text-muted-foreground/80">
        C &amp; S
      </p>
    </div>
  );
}
