import { createFileRoute } from "@tanstack/react-router";
import { WeddingInvitation } from "@/components/invitation/WeddingInvitation";
import { og, type WeddingEvent } from "@/lib/wedding";

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

/**
 * MAIN INVITATION (Link 1 — /comal-sarabjot)
 * Displays events: Sangeet, Engagement, Anand Karaj, Lunch
 * Venues: Gurudwara, Essentia Luxury Hotel & Convention, Nagpur
 */
function MainInvitation() {
  const mainFilter = (ev: WeddingEvent) => ev.id !== "reception";

  return (
    <WeddingInvitation
      eventFilter={mainFilter}
      venueKeys={["gurudwara", "essentia"]}
    />
  );
}
