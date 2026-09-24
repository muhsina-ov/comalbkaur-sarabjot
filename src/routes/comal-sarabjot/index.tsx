import { createFileRoute } from "@tanstack/react-router";
import { OpeningBlessing } from "@/components/invitation/OpeningBlessing";
import { Monogram } from "@/components/invitation/Monogram";
import { CoupleHeader } from "@/components/invitation/CoupleHeader";
import { CoupleGallery } from "@/components/invitation/CoupleGallery";
import { EventTimeline } from "@/components/invitation/EventTimeline";
import { NavCards } from "@/components/invitation/NavCards";
import { LocationButtons } from "@/components/invitation/LocationButtons";
import { ShareButton } from "@/components/invitation/ShareButton";
import { InvitationFooter } from "@/components/invitation/InvitationFooter";
import { PageShell } from "@/components/invitation/PageShell";
import { Countdown } from "@/components/wedding/Countdown";
import { Reveal } from "@/components/wedding/Section";
import { couple, og } from "@/lib/wedding";

export const Route = createFileRoute("/comal-sarabjot/")({
  head: () => ({
    meta: [
      { title: og.main.title },
      { name: "description", content: og.main.description },
      { property: "og:title", content: og.main.title },
      { property: "og:description", content: og.main.description },
      { property: "og:url", content: og.main.url },
      { property: "og:image", content: og.main.imageAbsolute },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: og.main.title },
      { name: "twitter:description", content: og.main.description },
      { name: "twitter:image", content: og.main.imageAbsolute },
    ],
  }),
  component: MainInvitation,
});

function MainInvitation() {
  return (
    <PageShell>
      {/* 1 — Opening Sikh artwork — standalone, generous whitespace, not background */}
      <OpeningBlessing />

      {/* 2 — CS Monogram — small/subtle */}
      <Monogram />

      {/* 3-5 — Grandparents wording + Couple + Parents */}
      <CoupleHeader />

      {/* Couple moments — from assets, where suitable */}
      <CoupleGallery variant="main" />

      {/* 6 — Countdown — elegant minimal to 13 Dec 2026 */}
      <section className="bg-background px-6 py-8 sm:px-8 sm:py-10">
        <Reveal>
          <p className="text-center text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            Counting down to the wedding day
          </p>
          <p className="mt-1 text-center text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground/70">
            13 December 2026
          </p>
          <div className="mx-auto mt-6 max-w-[420px]">
            <Countdown iso={couple.weddingISO} />
          </div>
        </Reveal>
      </section>

      {/* 7 — Complete event overview */}
      <EventTimeline />

      {/* 8 — Elegant navigation cards — not corporate */}
      <NavCards />

      {/* 9 — Location buttons — all relevant */}
      <LocationButtons />

      {/* Share */}
      <ShareButton />

      {/* 10-11 — Closing family + Event Manager */}
      <InvitationFooter />
    </PageShell>
  );
}
