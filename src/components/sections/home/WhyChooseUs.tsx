import { ChefHat, Clock, HandHeart, Sparkles, UtensilsCrossed } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
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
  return (
    <section className="relative bg-charcoal-950 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Why Choose White Tiger"
          title="Every detail, considered."
          className="mx-auto max-w-2xl"
        />

        <RevealOnScroll
          variant="stagger"
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-700 sm:grid-cols-2 lg:grid-cols-5"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col gap-4 bg-charcoal-900 p-8 transition-colors duration-300 hover:bg-charcoal-800"
            >
              <pillar.icon
                className="h-6 w-6 text-gold-400 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-light text-ivory-100">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </RevealOnScroll>

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
