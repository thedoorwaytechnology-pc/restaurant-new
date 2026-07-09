import Image from "next/image";
import { visitUsImage } from "@/data/images";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { restaurantInfo } from "@/data/restaurant-info";

export function CateringCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src={visitUsImage.src}
          alt={visitUsImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/45 to-charcoal-950/60" />
      </div>
      <GrainOverlay />

      <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <span className="eyebrow">Two Traditions, One Table</span>
        <h2 className="mt-5 font-display text-4xl font-light leading-tight text-ivory-100 sm:text-5xl lg:text-6xl text-balance">
          Ready to pull up a chair?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-300">
          Whether it&rsquo;s dinner tonight or an event worth celebrating,
          we&rsquo;ll have something worth the trip.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={restaurantInfo.orderOnlineHref}
            className="inline-flex items-center rounded-full bg-gold-500 px-9 py-4 text-sm font-semibold tracking-wide text-charcoal-950 transition-colors hover:bg-gold-400"
          >
            Order Online
          </MagneticButton>
          <MagneticButton
            href="/catering"
            className="inline-flex items-center rounded-full border border-ivory-200/30 px-9 py-4 text-sm font-medium tracking-wide text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            Inquire About Catering
          </MagneticButton>
        </div>
      </RevealOnScroll>
    </section>
  );
}
