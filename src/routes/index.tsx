import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  // Server + client redirect — "/" may be shared, so canonical is /comal-sarabjot/
  beforeLoad: () => {
    throw redirect({ to: "/comal-sarabjot", statusCode: 301 } as never);
  },
  head: () => ({
    meta: [
      { title: "Comal Kaur Weds Sarabjot Singh Lamba" },
      {
        name: "description",
        content:
          "Join us in celebrating the wedding of Comal Kaur and Sarabjot Singh Lamba.",
      },
      { property: "og:title", content: "Comal Kaur Weds Sarabjot Singh Lamba" },
      {
        property: "og:description",
        content:
          "Join us in celebrating the wedding of Comal Kaur and Sarabjot Singh Lamba.",
      },
      { property: "og:url", content: "https://YOURDOMAIN.com/comal-sarabjot/" },
      { property: "og:image", content: "https://YOURDOMAIN.com/og/comal-sarabjot.jpg" },
    ],
  }),
  // Fallback component is never shown due to redirect, but required for type
  component: () => null,
});
