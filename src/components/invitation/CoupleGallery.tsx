import { Reveal } from "@/components/wedding/Section";

import palaceJpeg from "@/assets/couple-palace.jpeg";
import palaceWebp from "@/assets/couple-palace.webp";
import sunflowerJpeg from "@/assets/couple-sunflower.jpeg";
import sunflowerWebp from "@/assets/couple-sunflower.webp";
import cityJpeg from "@/assets/couple-city.jpeg";
import cityWebp from "@/assets/couple-city.webp";

type GalleryImage = {
  jpeg: string;
  webp: string;
  alt: string;
  caption?: string;
};

const images: GalleryImage[] = [
  {
    jpeg: sunflowerJpeg,
    webp: sunflowerWebp,
    alt: "Comal and Sarabjot in a sunflower field at sunset — traditional attire",
    caption: "Sunflower fields at golden hour",
  },
  {
    jpeg: palaceJpeg,
    webp: palaceWebp,
    alt: "Comal and Sarabjot sitting on grass before a palace",
    caption: "An afternoon on the greens",
  },
  {
    jpeg: cityJpeg,
    webp: cityWebp,
    alt: "Comal and Sarabjot in the city at dusk",
    caption: "Evening in the city",
  },
];

function GalleryCard({ img, priority = false }: { img: GalleryImage; priority?: boolean }) {
  return (
    <div className="card-soft overflow-hidden p-1.5 sm:p-2">
      <div className="overflow-hidden rounded-[2px]">
        <picture>
          <source srcSet={img.webp} type="image/webp" />
          <img
            src={img.jpeg}
            alt={img.alt}
            width={800}
            height={1200}
            className="h-auto w-full object-cover"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
          />
        </picture>
      </div>
      {img.caption && (
        <p className="px-2 pb-2 pt-3 text-center text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground/70 sm:text-[0.62rem]">
          {img.caption}
        </p>
      )}
    </div>
  );
}

export function CoupleGallery({
  variant = "main",
}: {
  variant?: "main" | "compact";
}) {
  if (variant === "compact") {
    // For sub-pages — single image, small
    return (
      <section className="bg-background px-6 py-6 sm:px-8" aria-label="Couple portrait">
        <Reveal>
          <div className="mx-auto max-w-[560px]">
            <GalleryCard img={images[0]} priority={false} />
            <p className="mt-4 text-center font-display text-[1.15rem] italic tracking-wide text-primary">
              Comal &amp; Sarabjot
            </p>
          </div>
        </Reveal>
      </section>
    );
  }

  // Main — featured sunflower + 2-column grid for other two
  return (
    <section className="bg-background px-6 py-8 sm:px-8 sm:py-10" aria-label="Comal and Sarabjot — moments">
      <Reveal>
        <div className="mx-auto max-w-[560px] text-center">
          <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            Comal &amp; Sarabjot
          </p>
          <h2 className="mt-3 font-display text-[1.85rem] leading-tight text-foreground sm:text-[2.05rem]">
            Our moments
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-primary/40">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/25 sm:w-16" />
            <span className="font-display text-[0.72rem] italic tracking-wide text-primary/60">—</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/25 sm:w-16" />
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 max-w-[560px] space-y-4">
        <Reveal delay={30}>
          <GalleryCard img={images[0]} priority={false} />
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          <Reveal delay={70}>
            <GalleryCard img={images[1]} />
          </Reveal>
          <Reveal delay={110}>
            <GalleryCard img={images[2]} />
          </Reveal>
        </div>

        <Reveal delay={150}>
          <p className="text-center text-[0.58rem] leading-relaxed tracking-wide text-muted-foreground/60 px-2">
            A glimpse of our journey — from sunflowers to city lights. Your presence will make the celebration complete.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
