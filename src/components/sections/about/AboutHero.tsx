import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { TigerStripesMotif } from "@/components/ui/motifs";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 pb-20 pt-40 lg:pb-28 lg:pt-48">
      <GrainOverlay />
      <AmbientGlow color="gold" className="left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/3" />
      <TigerStripesMotif className="pointer-events-none absolute -right-16 top-16 h-[300px] w-[320px] text-gold-500/[0.05]" />

      <RevealOnScroll className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="eyebrow">About White Tiger</span>
        <h1 className="mt-6 font-display text-5xl font-light leading-[1.1] text-ivory-100 sm:text-6xl lg:text-7xl text-balance">
          Two traditions, one kitchen, one standard.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
          White Tiger Pizza & Curry was built on a simple belief: that
          craftsmanship, hospitality, and authenticity shouldn&rsquo;t be
          confined to a single cuisine. This is the story of how we bring
          both traditions to your table.
        </p>
      </RevealOnScroll>
    </section>
  );
}
