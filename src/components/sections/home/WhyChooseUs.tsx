"use client";

import { useRef } from "react";
import { ChefHat, Clock, HandHeart, Sparkles, UtensilsCrossed } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { NO_PREFERENCE_QUERY, ease } from "@/lib/animation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { GoldDivider } from "@/components/ui/GoldDivider";

const pillars = [
  {
    icon: Sparkles,
    title: "Premium Ingredients",
    description: "Sourced for flavor first, never for convenience.",
  },
  {
    icon: Clock,
    title: "Fresh Preparation",
    description: "Made to order, every time, without shortcuts.",
  },
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    description: "Rooted in tradition, refined through generations.",
  },
  {
    icon: UtensilsCrossed,
    title: "Exceptional Service",
    description: "Attentive without ever being intrusive.",
  },
  {
    icon: HandHeart,
    title: "Welcoming Atmosphere",
    description: "A room designed to make every guest feel like a regular.",
  },
];

const stats = [
  { to: 15, suffix: "+", label: "Years of Craft" },
  { to: 50, suffix: "+", label: "Signature Dishes" },
  { to: 100, suffix: "%", label: "Fresh Daily" },
  { to: 5, suffix: "★", label: "Hospitality" },
];

export function WhyChooseUs() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;
      const columns = Array.from(gridRef.current.children);
      const mm = gsap.matchMedia();

      mm.add(NO_PREFERENCE_QUERY, () => {
        columns.forEach((col) => {
          const line = col.querySelector<HTMLElement>("[data-reveal-line]");
          const rest = col.querySelectorAll<HTMLElement>("[data-reveal-fade]");

          gsap.set(col, { opacity: 0, y: 28 });
          if (line) gsap.set(line, { scaleX: 0 });
          if (rest.length) gsap.set(rest, { opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: col,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });

          tl.to(col, { opacity: 1, y: 0, duration: 0.8, ease: ease.out });
          if (line) {
            tl.to(line, { scaleX: 1, duration: 0.6, ease: ease.out }, "-=0.5");
          }
          if (rest.length) {
            tl.to(rest, { opacity: 1, duration: 0.6, ease: ease.out, stagger: 0.06 }, "-=0.35");
          }
        });
      });

      return () => mm.revert();
    },
    { scope: gridRef },
  );

  return (
    <section className="relative bg-charcoal-950 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Why Choose White Tiger"
          title="Every detail, considered."
          className="mx-auto max-w-2xl"
        />

        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-4">
              <pillar.icon className="h-6 w-6 text-gold-400" aria-hidden="true" />
              <div
                data-reveal-line
                className="h-px w-full origin-left bg-gradient-to-r from-gold-500/70 to-transparent"
              />
              <h3 data-reveal-fade className="font-display text-xl font-light text-ivory-100">
                {pillar.title}
              </h3>
              <p data-reveal-fade className="text-sm leading-relaxed text-stone-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <GoldDivider className="my-16" />

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter
                to={stat.to}
                suffix={stat.suffix}
                className="font-display text-4xl font-light text-gold-300 sm:text-5xl"
              />
              <p className="eyebrow mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
