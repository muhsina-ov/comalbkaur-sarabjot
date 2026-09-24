import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="paper min-h-[100svh] overflow-x-hidden">
      {/* Content constraint — luxury printed card feel on desktop, full bleed on mobile */}
      <div className="mx-auto min-h-[100svh] max-w-[640px] bg-background shadow-[0_18px_60px_-32px_oklch(0.5_0.06_75_/_0.55)] sm:border-x sm:border-primary/10">
        {children}
      </div>
    </main>
  );
}
