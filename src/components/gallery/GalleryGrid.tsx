"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { CuratedImage } from "@/data/images";
import { galleryCategories } from "@/data/images";
import { Lightbox } from "@/components/gallery/Lightbox";
import { useUIState } from "@/components/layout/UIStateProvider";
import { cn } from "@/lib/utils";

type GalleryImage = CuratedImage & { id: string; category: string };

const aspectRatios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-square"];

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { setLightboxOpen } = useUIState();

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? images
        : images.filter((image) => image.category === activeCategory),
    [images, activeCategory],
  );

  useEffect(() => {
    setLightboxOpen(lightboxIndex !== null);
  }, [lightboxIndex, setLightboxOpen]);

  function handleCategoryChange(category: (typeof galleryCategories)[number]) {
    setActiveCategory(category);
    setLightboxIndex(null);
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors",
              activeCategory === category
                ? "border-gold-500 bg-gold-500 text-charcoal-950"
                : "border-stone-500/30 text-stone-300 hover:border-gold-500/50 hover:text-gold-300",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={cn(
              "group relative mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid",
              aspectRatios[index % aspectRatios.length],
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal-950/0 transition-colors duration-500 group-hover:bg-charcoal-950/25" />
          </button>
        ))}
      </div>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
