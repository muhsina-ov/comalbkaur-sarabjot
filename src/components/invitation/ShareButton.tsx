import { useState } from "react";
import { Share2, Link2, Check } from "lucide-react";
import { sharePayload } from "@/lib/wedding";

export function ShareButton() {
  const [status, setStatus] = useState<string>("Share invitation");

  async function handleShare() {
    const url = window.location.href;
    const data = { title: sharePayload.title, text: sharePayload.text, url };

    // Web Share API
    if (navigator.share) {
      try {
        await navigator.share(data);
        setStatus("Shared");
        window.setTimeout(() => setStatus("Share invitation"), 2600);
        return;
      } catch (err) {
        // user cancelled or failed — fall through to clipboard
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }
      }
    }

    // Fallback — clipboard
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Link copied — share on WhatsApp");
    } catch {
      setStatus("Copy link from address bar");
    }
    window.setTimeout(() => setStatus("Share invitation"), 3200);
  }

  return (
    <section id="share" className="bg-background px-6 py-8 sm:px-8" aria-label="Share invitation">
      <div className="mx-auto max-w-[560px]">
        <div className="card-soft px-5 py-6 text-center sm:px-7 sm:py-7">
          <p className="script text-[1.15rem] text-primary sm:text-[1.25rem]">Share the joy</p>
          <p className="mt-1 text-sm text-muted-foreground">Send this invitation on WhatsApp</p>

          <button
            type="button"
            onClick={handleShare}
            className="press mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 text-[0.68rem] uppercase tracking-[0.16em] text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
            Share invitation
          </button>

          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(window.location.href);
                setStatus("Link copied");
              } catch {
                setStatus("Copy link from address bar");
              }
              window.setTimeout(() => setStatus("Share invitation"), 2600);
            }}
            className="press mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm border border-primary/25 bg-secondary/40 px-6 text-[0.68rem] uppercase tracking-[0.14em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Link2 className="h-4 w-4" aria-hidden="true" />
            Copy link
          </button>

          <p
            aria-live="polite"
            aria-atomic="true"
            className="mt-3 flex min-h-[20px] items-center justify-center gap-1.5 text-xs text-muted-foreground"
          >
            {status !== "Share invitation" && <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />}
            {status}
          </p>
        </div>
      </div>
    </section>
  );
}
