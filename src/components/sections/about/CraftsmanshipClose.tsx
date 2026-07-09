import Image from "next/image";
import { aboutImages } from "@/data/images";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CraftsmanshipClose() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src={aboutImages.craftsmanship.src}
          alt={aboutImages.craftsmanship.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/82" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
      </div>

      <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Craftsmanship"
          title="Every plate is a small act of discipline."
          subtitle="From dough fermentation to spice tempering, nothing on the menu is rushed. Our kitchen team trains for years to earn the trust behind every dish that leaves it."
          className="mx-auto"
        />
      </RevealOnScroll>
    </section>
  );
}
