import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/wedding/Section";

export function NavCards() {
  return (
    <section className="bg-background px-6 py-8 sm:px-8 sm:py-10">
      <Reveal>
        <p className="text-center text-[0.62rem] uppercase tracking-airy text-muted-foreground">
          Additional invitations
        </p>
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-[560px] gap-4">
        <Reveal delay={30}>
          <Link
            to="/comal-sarabjot/12-13"
            className="press card-soft group flex min-h-[88px] items-center justify-between px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[96px] sm:px-8"
            aria-label="View Events — Engagement Ceremony and Wedding Day"
          >
            <div className="text-left">
              <p className="font-display text-[1.35rem] leading-none tracking-wide text-foreground sm:text-[1.5rem]">
                View Events
              </p>
              <p className="mt-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                12<span className="mx-1 text-primary/40">·</span>13 December
              </p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/25 text-primary transition-colors group-hover:border-primary/45 group-hover:bg-primary/5 sm:h-11 sm:w-11">
              <span aria-hidden="true" className="text-[1.1rem] leading-none">
                →
              </span>
            </span>
          </Link>
        </Reveal>

        <Reveal delay={90}>
          <Link
            to="/comal-sarabjot/13"
            className="press card-soft group flex min-h-[88px] items-center justify-between bg-primary px-6 py-5 text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[96px] sm:px-8"
            aria-label="View Reception — 13th December"
          >
            <div className="text-left">
              <p className="font-display text-[1.35rem] leading-none tracking-wide sm:text-[1.5rem]">
                Reception
              </p>
              <p className="mt-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-primary-foreground/80">
                13 December · 9:00 PM
              </p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary-foreground/30 bg-white/10 text-primary-foreground sm:h-11 sm:w-11">
              <span aria-hidden="true" className="text-[1.1rem] leading-none">
                →
              </span>
            </span>
          </Link>
        </Reveal>
      </div>

      {/* VIEW LOCATION & SHARE — elegant secondary CTAs, not corporate */}
      <div className="mx-auto mt-6 grid max-w-[560px] grid-cols-2 gap-3">
        <a
          href="#locations"
          className="press flex min-h-[48px] items-center justify-center rounded-sm border border-primary/25 bg-secondary/50 px-4 text-[0.62rem] uppercase tracking-[0.14em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          View location
        </a>
        <a
          href="#share"
          className="press flex min-h-[48px] items-center justify-center rounded-sm bg-primary px-4 text-[0.62rem] uppercase tracking-[0.14em] text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Share invitation
        </a>
      </div>
    </section>
  );
}
