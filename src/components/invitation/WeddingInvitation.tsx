import { InvitationOpener } from "@/components/wedding/InvitationOpener";
import { MusicPlayer } from "@/components/invitation/MusicPlayer";
import { SeashellHero } from "@/components/wedding/SeashellHero";
import { Countdown } from "@/components/wedding/Countdown";
import { Reveal } from "@/components/wedding/Section";
import { InvitationVignette } from "@/components/wedding/InvitationVignette";
import { SeashellEventTimeline } from "@/components/wedding/SeashellEventTimeline";
import { WishLantern } from "@/components/wedding/WishLantern";
import { SeashellVenue } from "@/components/wedding/SeashellVenue";
import { AddToCalendar } from "@/components/wedding/AddToCalendar";
import { WeddingFooter } from "@/components/wedding/WeddingFooter";
import { couple, type WeddingEvent, type LocationKey } from "@/lib/wedding";

interface WeddingInvitationProps {
  eventFilter: (ev: WeddingEvent) => boolean;
  venueKeys: Array<LocationKey>;
}

/**
 * SEASHELL VOWS WEDDING INVITATION TEMPLATE
 * Complete theme integration matching https://seashell-vows.invitestory.in/
 * Shared by all three routes:
 * 1. /comal-sarabjot (Main invitation — Sangeet, Engagement, Anand Karaj, Lunch)
 * 2. /comal-sarabjot/12-13 (12th & 13th events invitation)
 * 3. /comal-sarabjot/13 (13th & Reception invitation)
 */
export function WeddingInvitation({
  eventFilter,
  venueKeys,
}: WeddingInvitationProps) {
  return (
    <>
      {/* 1 — Seashell Vows Opening Gate Screen */}
      <InvitationOpener />

      <main className="mx-auto min-h-screen max-w-xl bg-background text-foreground shadow-2xl">
        {/* 3 — Seashell Watercolor Beach Hero */}
        <SeashellHero />

        {/* 4 — 3D Flip Countdown Timer */}
        <section className="bg-background px-6 py-8 sm:px-8 sm:py-10">
          <Reveal>
            <p className="text-center text-[0.62rem] uppercase tracking-airy text-muted-foreground">
              Counting down to the wedding day
            </p>
            <p className="mt-1 text-center text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground/70">
              {couple.dateLabel}
            </p>
            <div className="mx-auto mt-6 max-w-[420px]">
              <Countdown iso={couple.weddingISO} />
            </div>
          </Reveal>
        </section>

        {/* 5 — Sikh Blessing, Grandparents Invitation Wording & Rings Vignette */}
        <InvitationVignette />

        {/* 6 — Route-Filtered Events Timeline with Badges */}
        <SeashellEventTimeline filter={eventFilter} />

        {/* 7 — Interactive Sky Lantern Release ("Send them a wish") */}
        <WishLantern />

        {/* 8 — Venue Map Artwork & Route-Specific Google Maps Links */}
        <SeashellVenue include={venueKeys} />

        {/* 9 — Save Our Date .ics / Calendar Export */}
        <AddToCalendar />

        {/* 10 — Ambient Seaside Watercolor Footer with Copy Link */}
        <WeddingFooter />
      </main>
    </>
  );
}
