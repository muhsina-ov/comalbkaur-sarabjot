import { createFileRoute } from "@tanstack/react-router";
import { WeddingInvitation } from "@/components/invitation/WeddingInvitation";
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
 * THIRD LINK (/comal-sarabjot/13)
 * Uses the exact same invitation template as main link (Link 1).
 * Displays events: Anand Karaj (13th), Lunch (13th), Reception (13th).
 * Venues: Gurudwara, Essentia Luxury Hotel & Convention, Nagpur, Lamba Celebrations.
 */
function Page13() {
  const filter = (ev: WeddingEvent) =>
    ev.id === "anand-karaj" ||
    ev.id === "lunch" ||
    ev.id === "reception";

  return (
    <WeddingInvitation
      eventFilter={filter}
      venueKeys={["gurudwara", "essentia", "reception"]}
    />
  );
}
