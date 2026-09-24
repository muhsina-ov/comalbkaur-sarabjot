import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { MusicPlayer } from "@/components/invitation/MusicPlayer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="max-w-lg text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        {/* Debug info — visible in production to diagnose 500; remove after fix */}
        <details className="mt-4 rounded-md border border-border bg-muted/30 p-3 text-left">
          <summary className="cursor-pointer text-xs font-medium text-muted-foreground">
            Error details (for debugging)
          </summary>
          <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap break-words text-[11px] leading-relaxed text-foreground/80">
            {error?.message || String(error)}
            {error?.stack ? `\n\n${error.stack}` : ""}
          </pre>
        </details>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Comal Kaur Weds Sarabjot Singh Lamba — 13 December 2026" },
      {
        name: "description",
        content:
          "Join us in celebrating the wedding of Comal Kaur and Sarabjot Singh Lamba — Sangeet 11 Dec, Engagement Ceremony 12 Dec, Wedding Day 13 Dec 2026.",
      },
      { property: "og:title", content: "Comal Kaur Weds Sarabjot Singh Lamba" },
      {
        property: "og:description",
        content:
          "Join us in celebrating the wedding of Comal Kaur and Sarabjot Singh Lamba.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Comal Kaur Weds Sarabjot Singh Lamba" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: "https://comalbkaur-sarabjot.invitingyou.top/comal-sarabjot/" },
      { property: "og:image", content: "https://comalbkaur-sarabjot.invitingyou.top/og/comal-sarabjot.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "Comal Kaur Weds Sarabjot Singh Lamba — 13 December 2026" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Comal Kaur Weds Sarabjot Singh Lamba" },
      { name: "twitter:description", content: "Join us in celebrating the wedding of Comal Kaur and Sarabjot Singh Lamba." },
      { name: "twitter:image", content: "https://comalbkaur-sarabjot.invitingyou.top/og/comal-sarabjot.jpg" },
      { name: "twitter:image:alt", content: "Comal Kaur Weds Sarabjot Singh Lamba" },
      { name: "theme-color", content: "#fdf8ee" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@300;400;500&family=Petit+Formal+Script&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Ik Onkar is LCP — handled via fetchPriority="high" + import hashing; no manual preload needed (Vite hashes assets)
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      {/* Persistent floating music — survives route transitions */}
      <MusicPlayer />
    </QueryClientProvider>
  );
}
