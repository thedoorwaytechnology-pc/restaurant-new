import type { Metadata } from "next";
import { galleryImages } from "@/data/images";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual look inside White Tiger Pizza & Curry — signature pizzas, curries, restaurant interiors, guests dining, fresh ingredients, and kitchen craftsmanship.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal-950 pb-16 pt-40 lg:pb-20 lg:pt-48">
        <GrainOverlay />
        <AmbientGlow color="gold" className="left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 -translate-y-1/3" />

        <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-6 font-display text-5xl font-light leading-[1.1] text-ivory-100 sm:text-6xl text-balance">
            A glimpse inside White Tiger.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-300">
            Food, craft, and atmosphere — a closer look at what happens in
            our kitchen and dining room.
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-charcoal-950 pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
