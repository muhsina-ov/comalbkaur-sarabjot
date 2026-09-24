import { Reveal } from "@/components/wedding/Section";

export type TimelineEvent = {
  dateLabel: string;
  dayLabel?: string;
  title: string;
  time: string;
  venue?: string;
  note?: string;
};

// Central per spec — used for MAIN overview and filtered for 12-13 / 13 pages
export const allEvents: TimelineEvent[] = [
  { dateLabel: "11 DECEMBER 2026", title: "SANGEET", time: "8:30 PM onwards" },
  { dateLabel: "12 DECEMBER 2026", title: "RING CEREMONY", time: "8:30 PM onwards" },
  { dateLabel: "13 DECEMBER 2026", dayLabel: "SUNDAY", title: "BARAT ARRIVAL", time: "10:30 AM" },
  {
    dateLabel: "13 DECEMBER 2026",
    title: "LAVAN",
    time: "Gurudwara Guru Nanak Darbar\nGurunankpura, Nagpur",
    venue: "Gurudwara Guru Nanak Darbar, Gurunankpura, Nagpur",
  },
  { dateLabel: "13 DECEMBER 2026", title: "FOLLOWED BY LUNCH", time: "ESSENTIA", venue: "ESSENTIA" },
  { dateLabel: "13 DECEMBER 2026", title: "RECEPTION", time: "9:00 PM", venue: "Lamba Celebrations" },
];

function EventCard({ ev, index }: { ev: TimelineEvent; index: number }) {
  return (
    <Reveal delay={index * 45}>
      <article className="card-soft press relative overflow-hidden px-5 py-6 text-center sm:px-7 sm:py-7">
        {/* Subtle top accent */}
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <p className="text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.62rem]">
          {ev.dateLabel}
        </p>
        {ev.dayLabel && (
          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.18em] text-primary/75">
            {ev.dayLabel}
          </p>
        )}
        <h3 className="mt-3 font-display text-[1.7rem] leading-none tracking-[0.06em] text-foreground sm:text-[2rem]">
          {ev.title}
        </h3>
        <p className="mt-3 whitespace-pre-line font-body text-[0.78rem] leading-relaxed tracking-[0.08em] text-foreground/80 sm:text-[0.84rem]">
          {ev.time}
        </p>
        {ev.venue && ev.title !== "LAVAN" && (
          <p className="mt-1 text-[0.68rem] tracking-wide text-muted-foreground">
            {ev.venue}
          </p>
        )}
        {/* Fine hairline for wedding day grouping */}
        <span aria-hidden="true" className="mx-auto mt-4 block h-px w-12 bg-primary/20" />
      </article>
    </Reveal>
  );
}

export function EventTimeline({
  filter,
  overline = "When & where",
  title = "Celebrations",
}: {
  filter?: (ev: TimelineEvent) => boolean;
  overline?: string;
  title?: string;
}) {
  const events = filter ? allEvents.filter(filter) : allEvents;
  return (
    <section id="celebrations" className="bg-background px-6 py-10 sm:px-8 sm:py-14" aria-label="Event overview">
      <Reveal>
        <div className="text-center">
          <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">{overline}</p>
          <h2 className="mt-3 font-display text-[1.95rem] leading-tight text-foreground sm:text-[2.2rem]">
            {title}
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-primary/60">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/35 sm:w-16" />
            <span className="text-[0.62rem] tracking-[0.2em]">❦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/35 sm:w-16" />
          </div>
        </div>
      </Reveal>

      <ul className="mx-auto mt-8 max-w-[560px] space-y-4">
        {events.map((ev, i) => (
          <li key={`${ev.title}-${i}`}>
            <EventCard ev={ev} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}
