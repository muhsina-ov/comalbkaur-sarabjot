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

export const Route = createFileRoute("/comal-sarabjot/13")({
  head: () => ({
    meta: [
      { title: og.r13.title },
      { name: "description", content: og.r13.description },
      { property: "og:title", content: og.r13.title },
      { property: "og:description", content: og.r13.description },
      { property: "og:url", content: og.r13.url },
      { property: "og:image", content: og.r13.imageAbsolute },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: og.r13.title },
      { name: "twitter:description", content: og.r13.description },
      { name: "twitter:image", content: og.r13.imageAbsolute },
    ],
  }),
  component: Page13,
});

/**
 * RECEPTION PAGE (Link 3)
 * Dec 13 events: Anand Karaj, Lunch, AND Reception
 * Reception is ONLY shown on this page
 */
function Page13() {
  // Only Dec 13 events including reception
  const filter = (ev: WeddingEvent) =>
    ev.id === "anand-karaj" ||
    ev.id === "lunch" ||
    ev.id === "reception";

  return (
    <PageShell>
      <OpeningBlessing />
      <Monogram size="small" />

      <section className="bg-background px-6 pb-4 pt-2 text-center sm:px-8">
        <Reveal>
          <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            Wedding Day &amp; Reception
          </p>
          <h1 className="mt-3 font-display text-[2.2rem] leading-tight text-foreground sm:text-[2.5rem]">
            13 December
          </h1>
          <p className="mt-1 font-display text-[1.05rem] uppercase tracking-[0.18em] text-primary">
            Sunday
          </p>
          <p className="mt-3 text-sm text-foreground/70">
            Comal Kaur <span className="script text-primary">weds</span> Sarabjot Singh Lamba
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-primary/20" />
        </Reveal>
      </section>

      <CoupleGallery variant="compact" />

      <EventTimeline filter={filter} overline="Wedding Day" title="13 December 2026" />

      {/* All 13 Dec venues including reception */}
      <LocationButtons
        include={["gurudwara", "essentia", "reception"]}
        title="Wedding Day venues"
      />

      {/* Link back to main + events */}
      <section className="bg-background px-6 py-6 sm:px-8">
        <div className="mx-auto grid max-w-[560px] gap-3">
          <Reveal>
            <Link
              to="/comal-sarabjot"
              className="press card-soft flex min-h-[64px] items-center justify-between px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[72px] sm:px-8"
              aria-label="View main invitation"
            >
              <div className="text-left">
                <p className="font-display text-[1.15rem] leading-none text-foreground sm:text-[1.25rem]">
                  Main Invitation
                </p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Full details &amp; countdown
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/20 bg-secondary/40 text-primary sm:h-11 sm:w-11">
                <span aria-hidden="true" className="text-[1.1rem] leading-none">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <Link
              to="/comal-sarabjot/12-13"
              className="press card-soft flex min-h-[64px] items-center justify-between px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[72px] sm:px-8"
              aria-label="View Events — 12th & 13th December"
            >
              <div className="text-left">
                <p className="font-display text-[1.15rem] leading-none text-foreground sm:text-[1.25rem]">
                  View Events
                </p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  12 &amp; 13 December
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/20 bg-secondary/40 text-primary sm:h-11 sm:w-11">
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
