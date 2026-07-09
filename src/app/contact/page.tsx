import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant-info";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DarkMap } from "@/components/maps/DarkMap";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with White Tiger Pizza & Curry — address, phone, email, business hours, and a contact form.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 pb-28 pt-40 lg:pb-36 lg:pt-48">
      <GrainOverlay />
      <AmbientGlow color="copper" className="left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 -translate-y-1/3" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <RevealOnScroll className="max-w-2xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 font-display text-5xl font-light leading-[1.1] text-ivory-100 sm:text-6xl text-balance">
            We&rsquo;d love to hear from you.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone-300">
            Questions, feedback, or planning something special? Reach out
            directly or send us a message below.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <RevealOnScroll className="lg:col-span-5" y={30} delay={0.05}>
            <ul className="flex flex-col gap-5 text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                {restaurantInfo.address.full}
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <a href={restaurantInfo.phoneHref} className="hover:text-gold-300">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-gold-300">
                  {restaurantInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  {restaurantInfo.hours.map((row) => (
                    <span key={row.days}>
                      <span className="text-ivory-200">{row.days}:</span> {row.time}
                    </span>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href={restaurantInfo.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-gold-300 transition-colors hover:bg-gold-500 hover:text-charcoal-950"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Call
              </MagneticButton>
              <MagneticButton
                href={restaurantInfo.mapDirectionsHref}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-gold-300 transition-colors hover:bg-gold-500 hover:text-charcoal-950"
              >
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Directions
              </MagneticButton>
              <MagneticButton
                href={`mailto:${restaurantInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-gold-300 transition-colors hover:bg-gold-500 hover:text-charcoal-950"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                Email
              </MagneticButton>
            </div>

            <GoldDivider className="my-10" />

            <DarkMap className="h-72" />
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-7" y={30} delay={0.1}>
            <div className="rounded-3xl border border-charcoal-700 bg-charcoal-900/40 p-6 sm:p-10">
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
