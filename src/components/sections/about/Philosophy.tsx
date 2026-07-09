import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SpiceMotif } from "@/components/ui/motifs";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-28 lg:py-36">
      <SpiceMotif className="pointer-events-none absolute -left-10 bottom-10 h-[240px] w-[240px] text-copper-500/[0.06]" />
      <SpiceMotif className="pointer-events-none absolute -right-10 top-10 h-[240px] w-[240px] rotate-180 text-copper-500/[0.06]" />

      <RevealOnScroll className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="eyebrow">Our Philosophy</span>
        <GoldDivider className="mx-auto mt-6 max-w-24" />
        <p className="mt-10 font-display text-3xl font-light italic leading-snug text-ivory-100 sm:text-4xl lg:text-5xl text-balance">
          &ldquo;We don&rsquo;t choose between tradition and craft — every
          dish carries both, or it doesn&rsquo;t leave the kitchen.&rdquo;
        </p>
        <p className="mx-auto mt-8 max-w-xl text-sm uppercase tracking-[0.2em] text-stone-400">
          The kitchen team, White Tiger Pizza & Curry
        </p>
      </RevealOnScroll>
    </section>
  );
}
