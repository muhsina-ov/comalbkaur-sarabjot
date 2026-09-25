import { Reveal } from "@/components/wedding/Section";
import { MapPinned, ExternalLink } from "lucide-react";
import { locations, locationLabels, type LocationKey } from "@/lib/wedding";

import venueMap from "@/assets/venue-map.jpg";

type LocationItem = {
  key: LocationKey;
  label: string;
  href: string;
};

function buildItems(include?: LocationKey[]): LocationItem[] {
  const keys = include ?? (Object.keys(locations) as LocationKey[]);
  return keys.map((key) => ({
    key,
    label: locationLabels[key],
    href: locations[key],
  }));
}

export function SeashellVenue({
  include,
}: {
  include?: LocationKey[];
}) {
  const items = buildItems(include);

  return (
    <section className="px-6 pb-16" aria-label="Venue locations">
      <Reveal>
        <div className="text-center">
          <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            Find your way
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-tight text-foreground">
            The venue
          </h2>
          <div className="flex items-center justify-center gap-3 py-6 text-primary/70">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-[0.7rem] tracking-airy">❖</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.key} className="card-soft overflow-hidden">
              <img
                src={venueMap}
                alt={`Map illustration for ${item.label}`}
                loading="lazy"
                width={1024}
                height={768}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-2xl">{item.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Nagpur, Maharashtra</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.label} in Google Maps`}
                  className="press mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-primary px-5 text-[0.68rem] uppercase tracking-airy text-primary-foreground"
                >
                  <MapPinned className="h-4 w-4" aria-hidden="true" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
