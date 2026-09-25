import { MapPinned, ExternalLink } from "lucide-react";
import { locations } from "@/lib/wedding";

type LocationItem = {
  key: keyof typeof locations;
  label: string;
  sub: string;
  href: string;
};

const all: LocationItem[] = [
  {
    key: "gurudwara",
    label: "Gurudwara Guru Nanak Darbar",
    sub: "Gurunankpura, Nagpur — Anand Karaj",
    href: locations.gurudwara,
  },
  {
    key: "essentia",
    label: "Essentia Luxury Hotel & Convention, Nagpur",
    sub: "Events Venue",
    href: locations.essentia,
  },
  {
    key: "reception",
    label: "Lamba Celebrations",
    sub: "Reception — 9:00 PM",
    href: locations.reception,
  },
];

export function LocationButtons({
  include,
  title = "Venue locations",
}: {
  include?: Array<keyof typeof locations>;
  title?: string;
}) {
  const items = include ? all.filter((i) => include.includes(i.key)) : all;

  return (
    <section id="locations" className="bg-background px-6 py-8 sm:px-8" aria-label="Venue locations">
      <div className="mx-auto max-w-[560px]">
        <h2 className="text-center font-display text-[1.4rem] leading-none tracking-wide text-foreground sm:text-[1.55rem]">
          {title}
        </h2>
        <p className="mt-2 text-center text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
          Open in Google Maps
        </p>

        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${item.label} on Google Maps`}
                className="press card-soft flex min-h-[64px] items-center gap-4 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[68px] sm:px-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/20 bg-secondary/60 text-primary">
                  <MapPinned className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block truncate font-display text-[1.05rem] leading-none text-foreground sm:text-[1.12rem]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {item.sub}
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center text-[0.58rem] leading-relaxed text-muted-foreground/70">
          Maps will open in Google Maps. Addresses as supplied by the family.
        </p>
      </div>
    </section>
  );
}
