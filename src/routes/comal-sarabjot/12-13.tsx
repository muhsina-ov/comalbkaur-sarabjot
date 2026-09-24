import { createFileRoute, Link } from "@tanstack/react-router";
import { OpeningBlessing } from "@/components/invitation/OpeningBlessing";
import { Monogram } from "@/components/invitation/Monogram";
import { CoupleGallery } from "@/components/invitation/CoupleGallery";
import { EventTimeline } from "@/components/invitation/EventTimeline";
import { LocationButtons } from "@/components/invitation/LocationButtons";
import { ShareButton } from "@/components/invitation/ShareButton";
import { InvitationFooter } from "@/components/invitation/InvitationFooter";
import { PageShell } from "@/components/invitation/PageShell";
import { Reveal } from "@/components/wedding/Section";
import { og, type WeddingEvent } from "@/lib/wedding";

export const Route = createFileRoute("/comal-sarabjot/12-13")({
  head: () => ({
    meta: [
      { title: og.r12_13.title },
      { name: "description", content: og.r12_13.description },
      { property: "og:title", content: og.r12_13.title },
      { property: "og:description", content: og.r12_13.description },
      { property: "og:url", content: og.r12_13.url },
      { property: "og:image", content: og.r12_13.imageAbsolute },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: og.r12_13.title },
      { name: "twitter:description", content: og.r12_13.description },
      { name: "twitter:image", content: og.r12_13.imageAbsolute },
    ],
  }),
  component: Page12_13,
});

/**
 * EVENTS PAGE (Link 2)
 * Dec 12: Engagement Ceremony — 8:30 PM onwards — Essentia
 * Dec 13: Anand Karaj — 11:00 AM–12:00 PM — Gurudwara
 * Dec 13: Lunch — 1:30 PM — Essentia
 * Does NOT include reception (that's Link 3 only)
 */
function Page12_13() {
  // Filter: Engagement Ceremony (12th) + Anand Karaj + Lunch (13th) — no reception, no sangeet
  const filter = (ev: WeddingEvent) =>
    ev.id === "engagement" ||
    ev.id === "anand-karaj" ||
    ev.id === "lunch";

  return (
    <PageShell>
      {/* Opening blessing — still required, but compact */}
      <OpeningBlessing />
      <Monogram size="small" />

      {/* Page header — minimal for sub-invitation */}
      <section className="bg-background px-6 pb-4 pt-2 text-center sm:px-8">
        <Reveal>
          <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            You are invited
          </p>
          <h1 className="mt-3 font-display text-[1.95rem] leading-tight text-foreground sm:text-[2.2rem]">
            12<span className="mx-2 font-script text-[1.45rem] text-primary">&amp;</span>13 December
          </h1>
          <p className="mt-2 text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
            Engagement Ceremony &amp; Wedding Day
          </p>
          <p className="mt-3 text-sm text-foreground/70">
            Comal Kaur <span className="script text-primary">weds</span> Sarabjot Singh Lamba
          </p>
        </Reveal>
      </section>

      <CoupleGallery variant="compact" />

      {/* Filtered timeline — 12th + 13th only, no reception */}
      <EventTimeline
        filter={filter}
        overline="Your invitation"
        title="12th & 13th December"
      />

      {/* Only relevant locations — gurudwara + essentia, no reception venue */}
      <LocationButtons
        include={["gurudwara", "essentia"]}
        title="Event venues"
      />

      {/* Link to reception */}
      <section className="bg-background px-6 py-6 sm:px-8">
        <div className="mx-auto max-w-[560px]">
          <Reveal>
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
      </section>

      <ShareButton />
      <InvitationFooter />
    </PageShell>
  );
}
