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

function Page13() {
  // Only wedding day — 13 Dec
  const filter = (ev: (typeof allEvents)[number]) => ev.dateLabel === "13 DECEMBER 2026";

  return (
    <PageShell>
      <OpeningBlessing />
      <Monogram size="small" />

      <section className="bg-background px-6 pb-4 pt-2 text-center sm:px-8">
        <Reveal>
          <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            Wedding Day
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

      <EventTimeline filter={filter} overline="Wedding Day" title="13 December 2026" />

      <LocationButtons
        include={["gurudwara", "essentia", "reception"]}
        title="Wedding Day venues"
      />

      <ShareButton />
      <InvitationFooter />
    </PageShell>
  );
}
