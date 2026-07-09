import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant-info";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { ReservationForm } from "@/components/forms/ReservationForm";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve your table at White Tiger Pizza & Curry — request a date, time, and party size and we'll confirm your booking.",
};

export default function ReservationsPage() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 pb-28 pt-40 lg:pb-36 lg:pt-48">
      <GrainOverlay />
      <AmbientGlow color="gold" className="left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 -translate-y-1/3" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <RevealOnScroll className="lg:col-span-5" y={30}>
          <span className="eyebrow">Reservations</span>
          <h1 className="mt-6 font-display text-5xl font-light leading-[1.1] text-ivory-100 sm:text-6xl text-balance">
            Reserve your table.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone-300">
            Tell us when you&rsquo;d like to join us and how many will be at
            the table. We&rsquo;ll confirm your reservation shortly after.
          </p>

          <GoldDivider className="my-10 max-w-xs" />

          <ul className="flex flex-col gap-5 text-sm text-stone-300">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
              {restaurantInfo.address.full}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={restaurantInfo.phoneHref} className="hover:text-gold-300">
                {restaurantInfo.phone}
              </a>{" "}
              — for parties larger than 20
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
        </RevealOnScroll>

        <RevealOnScroll className="lg:col-span-7" y={30} delay={0.1}>
          <div className="rounded-3xl border border-charcoal-700 bg-charcoal-900/40 p-6 sm:p-10">
            <ReservationForm />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
