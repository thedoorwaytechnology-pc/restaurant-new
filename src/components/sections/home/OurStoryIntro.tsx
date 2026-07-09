import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ourStoryImage } from "@/data/images";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WheatMotif } from "@/components/ui/motifs";

export function OurStoryIntro() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-28 lg:py-36">
      <WheatMotif className="pointer-events-none absolute -left-10 top-1/2 h-[420px] w-[200px] -translate-y-1/2 text-gold-500/[0.05]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <RevealOnScroll className="lg:col-span-6 lg:col-start-1" y={20} scaleFrom={1.08}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={ourStoryImage.src}
              alt={ourStoryImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="lg:col-span-5 lg:col-start-8" y={30} delay={0.1}>
          <SectionHeading
            eyebrow="Our Story"
            title="A table where two traditions meet."
            subtitle="White Tiger Pizza & Curry began with a simple idea: handcrafted pizza and authentic Indian curry don't have to live on separate menus. Two culinary traditions, one kitchen, one uncompromising standard of craft."
          />
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-gold-300"
          >
            Learn Our Story
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
