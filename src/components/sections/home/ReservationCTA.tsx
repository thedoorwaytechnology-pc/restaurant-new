import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { FlameMotif } from "@/components/ui/motifs";

export function ReservationCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-32 lg:py-40">
      <GrainOverlay />
      <AmbientGlow color="ember" className="left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2" />
      <FlameMotif className="pointer-events-none absolute right-10 top-1/2 hidden h-[380px] w-[300px] -translate-y-1/2 text-copper-500/[0.06] lg:block" />

      <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <span className="eyebrow">Reserve Your Table</span>
        <h2 className="mt-5 font-display text-4xl font-light leading-tight text-ivory-100 sm:text-5xl lg:text-6xl text-balance">
          An evening worth setting time aside for.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-300">
          Whether it&rsquo;s a quiet dinner for two or a celebration with the
          whole table, we&rsquo;ll have your seat ready.
        </p>
        <MagneticButton
          href="/reservations"
          className="mt-10 inline-flex items-center rounded-full bg-gold-500 px-9 py-4 text-sm font-semibold tracking-wide text-charcoal-950 transition-colors hover:bg-gold-400"
        >
          Reserve a Table
        </MagneticButton>
      </RevealOnScroll>
    </section>
  );
}
