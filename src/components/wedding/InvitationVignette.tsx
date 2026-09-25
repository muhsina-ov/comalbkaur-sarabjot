import { Reveal } from "@/components/wedding/Section";
import { family, couple } from "@/lib/wedding";

import floral from "@/assets/floral-spray.png";
import ringsVignette from "@/assets/rings-seashell-vignette.png";
import csMono from "@/assets/cs-monogram.jpeg";
import csMonoWebp from "@/assets/cs-monogram.webp";

/**
 * Seashell Vows "Our invitation" vignette — editorial wording section
 * with floral accent, CS monogram logo, family invitation text, and decorative rings illustration.
 */
export function InvitationVignette() {
  return (
    <section className="relative px-7 pb-16">
      {/* Floating floral accent */}
      <img
        src={floral}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -right-16 -top-6 w-40 opacity-40"
      />

      <Reveal>
        {/* Customer's Selected CS Monogram Logo */}
        <div className="mb-6 flex flex-col items-center">
          <div className="relative h-18 w-18 overflow-hidden rounded-full border border-primary/25 bg-white/80 shadow-[0_10px_28px_-18px_oklch(0.5_0.06_75_/_0.5)] sm:h-20 sm:w-20">
            <picture>
              <source srcSet={csMonoWebp} type="image/webp" />
              <img
                src={csMono}
                alt="Comal & Sarabjot Monogram"
                aria-hidden="true"
                width={200}
                height={200}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </picture>
            <span className="pointer-events-none absolute inset-[5px] rounded-full border border-primary/15" />
          </div>
          <p className="mt-2 text-[0.56rem] uppercase tracking-[0.24em] text-muted-foreground/80">
            C &amp; S
          </p>
        </div>

        <div className="text-center">
          <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            Our invitation
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-tight text-foreground">
            A love written in the stars
          </h2>
          <div className="flex items-center justify-center gap-3 py-6 text-primary/70">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-[0.7rem] tracking-airy">❖</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Sikh Opening Blessing — ੴ */}
        <div className="mb-6 flex flex-col items-center">
          <p className="font-display text-[2.4rem] leading-none text-primary" aria-label="Ik Onkar">
            ੴ
          </p>
          <div className="mt-4 max-w-[22rem] text-center">
            <p className="font-display text-[0.82rem] leading-[2] tracking-[0.08em] text-foreground/85">
              ਧਰ ਜੀਅਰੇ ਇਕ ਟੇਕ ਤੂ ਲਾਹਿ ਬਿਡਾਨੀ ਆਸ
            </p>
            <p className="mt-1 font-display text-[0.82rem] leading-[2] tracking-[0.08em] text-foreground/85">
              ਨਾਨਕ ਨਾਮੁ ਧਿਆਈਐ ਕਾਰਜੁ ਆਵੈ ਰਾਸਿ
            </p>
          </div>
          <p className="mt-4 text-[0.58rem] uppercase tracking-airy text-muted-foreground">
            With Waheguru&apos;s blessings
          </p>
        </div>

        {/* Family invitation wording */}
        <p className="text-center font-display text-[1.18rem] leading-[1.85] text-foreground/90">
          {family.grandparentsInvitation.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        {/* Couple names */}
        <div className="mt-6 text-center">
          <h1 className="font-display text-[2.55rem] font-light leading-[0.95] tracking-[0.04em] text-foreground">
            {couple.brideLine1}
          </h1>
          <p className="script my-3 text-[1.35rem] leading-none text-primary">
            {couple.tagline}
          </p>
          <h2 className="font-display text-[2.05rem] font-light leading-[0.95] tracking-[0.04em] text-foreground">
            {couple.groomLine1}
          </h2>
        </div>

        {/* Parents */}
        <p className="mx-auto mt-5 max-w-[22rem] text-center text-[0.66rem] leading-relaxed tracking-[0.12em] text-muted-foreground">
          {family.brideParents}
        </p>

        <p className="mt-6 script text-center text-lg text-primary">Two souls, one destiny</p>

        {/* Watercolor rings & seashell vignette */}
        <img
          src={ringsVignette}
          alt="Watercolor wedding rings, jasmine and a seashell"
          loading="lazy"
          width={1536}
          height={1024}
          className="mx-auto mt-7 w-60 object-contain"
        />
      </Reveal>
    </section>
  );
}
