import Image from "next/image";
import { cateringImage } from "@/data/images";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

const events = [
  "Weddings",
  "Corporate Events",
  "Birthday Parties",
  "Family Gatherings",
  "Festivals",
  "Private Events",
];

export function CateringPromo() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src={cateringImage.src}
          alt={cateringImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-charcoal-950/55" />
      </div>

      <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Catering & Private Events"
          title="Bring White Tiger to your next occasion."
          subtitle="From intimate gatherings to full-scale celebrations, our catering team builds a menu around your moment."
          className="mx-auto"
        />

        <ul className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-3">
          {events.map((event) => (
            <li
              key={event}
              className="rounded-full border border-gold-500/30 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold-200"
            >
              {event}
            </li>
          ))}
        </ul>

        <MagneticButton
          href="/catering"
          className="mt-10 inline-flex items-center rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-charcoal-950 transition-colors hover:bg-gold-400"
        >
          Inquire About Catering
        </MagneticButton>
      </RevealOnScroll>
    </section>
  );
}
