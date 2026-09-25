import { Reveal } from "@/components/wedding/Section";
import { events, type WeddingEvent } from "@/lib/wedding";
import bougainvillea from "@/assets/bougainvillea-divider.png";

// Central per customer spec — used for MAIN overview and filtered for 12-13 / 13 pages
export const allEvents: WeddingEvent[] = events;

/** Event badge icons matching the Seashell Vows aesthetic */
const eventIcons: Record<string, string> = {
  sangeet: "❋",
  engagement: "❁",
  "anand-karaj": "✧",
  lunch: "☀",
  reception: "❖",
};

function EventCard({ ev, index }: { ev: WeddingEvent; index: number }) {
  const icon = eventIcons[ev.id] ?? "❖";

  return (
    <Reveal delay={index * 60}>
      <article className="card-soft press p-5">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/30 text-primary">
            {icon}
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-display text-2xl">{ev.name}</h3>
            <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
              {ev.dateLabel} · {ev.time}
            </p>
          </div>
        </div>
        {ev.venue && (
          <p className="mt-4 whitespace-pre-line text-sm text-foreground/80">{ev.venue}</p>
        )}
        {ev.note && (
          <p className="mt-1 text-xs italic text-muted-foreground">{ev.note}</p>
        )}
      </article>
    </Reveal>
  );
}

export function SeashellEventTimeline({
  filter,
  overline = "Days of celebration",
  title = "Celebrations",
}: {
  filter?: (ev: WeddingEvent) => boolean;
  overline?: string;
  title?: string;
}) {
  const displayed = filter ? allEvents.filter(filter) : allEvents;

  return (
    <section className="relative px-6 pb-16" aria-label="Event overview">
      {/* Bougainvillea divider */}
      <img
        src={bougainvillea}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={2172}
        height={724}
        className="pointer-events-none mx-auto mb-8 w-full max-w-md opacity-80"
      />

      <Reveal>
        <div className="text-center">
          <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            {overline}
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-tight text-foreground">{title}</h2>
          <div className="flex items-center justify-center gap-3 py-6 text-primary/70">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-[0.7rem] tracking-airy">❖</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </Reveal>

      <ul className="space-y-4">
        {displayed.map((ev, i) => (
          <li key={`${ev.id}-${i}`}>
            <EventCard ev={ev} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}
