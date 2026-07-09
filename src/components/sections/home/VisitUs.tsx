import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant-info";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DarkMap } from "@/components/maps/DarkMap";

export function VisitUs() {
  return (
    <section className="relative bg-charcoal-950 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <RevealOnScroll className="lg:col-span-5" y={30}>
          <SectionHeading eyebrow="Visit Us" title="Find your table." />
          <ul className="mt-8 flex flex-col gap-6 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
              <span className="text-stone-300">{restaurantInfo.address.full}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={restaurantInfo.phoneHref} className="text-stone-300 hover:text-gold-300">
                {restaurantInfo.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="text-stone-300 hover:text-gold-300"
              >
                {restaurantInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
              <div className="flex flex-col gap-1 text-stone-300">
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
          <DarkMap className="h-full min-h-80" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
