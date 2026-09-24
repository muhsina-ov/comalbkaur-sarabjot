import { createFileRoute } from "@tanstack/react-router";
import { OpeningBlessing } from "@/components/invitation/OpeningBlessing";
import { Monogram } from "@/components/invitation/Monogram";
import { EventTimeline, allEvents } from "@/components/invitation/EventTimeline";
import { LocationButtons } from "@/components/invitation/LocationButtons";
import { ShareButton } from "@/components/invitation/ShareButton";
import { InvitationFooter } from "@/components/invitation/InvitationFooter";
import { PageShell } from "@/components/invitation/PageShell";
import { Reveal } from "@/components/wedding/Section";
import { og } from "@/lib/wedding";

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

function Page12_13() {
  // Filter: only 12th Ring + 13th Barat/Lavan/Lunch/Reception
  const filter = (ev: (typeof allEvents)[number]) =>
    ev.title === "RING CEREMONY" ||
    ev.title === "BARAT ARRIVAL" ||
    ev.title === "LAVAN" ||
    ev.title === "FOLLOWED BY LUNCH" ||
    ev.title === "RECEPTION";

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
            Ring Ceremony &amp; Wedding Day
          </p>
          <p className="mt-3 text-sm text-foreground/70">
            Comal Kaur <span className="script text-primary">weds</span> Sarabjot Singh Lamba
          </p>
        </Reveal>
      </section>

      {/* Filtered timeline — 12th + 13th only */}
      <EventTimeline
        filter={filter}
        overline="Your invitation"
        title="12th & 13th December"
      />

      {/* Only relevant locations */}
      <LocationButtons
        include={["gurudwara", "essentia", "reception"]}
        title="Wedding venues"
      />

      <ShareButton />
      <InvitationFooter />
    </PageShell>
  );
}
