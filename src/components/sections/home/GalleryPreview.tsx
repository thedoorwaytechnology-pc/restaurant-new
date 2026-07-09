import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "@/data/images";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

const preview = galleryImages.slice(0, 6);

export function GalleryPreview() {
  return (
    <section className="relative bg-charcoal-950 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse inside White Tiger."
            className="max-w-xl"
          />
          <Link
            href="/gallery"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-gold-300"
          >
            View Full Gallery
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <RevealOnScroll
          variant="stagger"
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {preview.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 16vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-950/0 transition-colors duration-500 group-hover:bg-charcoal-950/20" />
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
