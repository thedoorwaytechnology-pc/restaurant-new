"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { signatureDishImages } from "@/data/images";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { NO_PREFERENCE_QUERY, ease } from "@/lib/animation";
import { SectionHeading } from "@/components/ui/SectionHeading";

const dishes = [
  {
    key: "pizzas",
    title: "Handcrafted Pizzas",
    description: "Slow-fermented dough, wood-fired to a blistered, smoky crust.",
  },
  {
    key: "curries",
    title: "Authentic Indian Curries",
    description: "Time-honored recipes built on hand-ground spice and slow simmering.",
  },
  {
    key: "chefSpecials",
    title: "Chef Specials",
    description: "Rotating dishes shaped by season and the chef's own instincts.",
  },
  {
    key: "freshIngredients",
    title: "Fresh Ingredients",
    description: "Sourced daily — nothing sits, nothing is rushed.",
  },
  {
    key: "houseFavorites",
    title: "House Favorites",
    description: "The dishes our regulars order before they've opened the menu.",
  },
] as const;

export function SignatureDishes() {
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!listRef.current) return;
      const rows = Array.from(listRef.current.children);
      const mm = gsap.matchMedia();

      mm.add(NO_PREFERENCE_QUERY, () => {
        rows.forEach((row, i) => {
          // alternating entrance direction, as though each dish were set
          // down from a different side of the table
          const fromX = i % 2 === 0 ? -48 : 48;
          gsap.set(row, { opacity: 0, x: fromX, y: 16 });
          gsap.to(row, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: ease.out,
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: listRef },
  );

  return (
    <section className="relative bg-charcoal-900 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="From Our Kitchen"
              title="Signature dishes worth returning for."
              subtitle="Five pillars of the menu, each built with the same obsessive attention — whether it's a pizza crust or a curry that's simmered for hours."
            />
            <Link
              href="/menu"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-gold-300"
            >
              View Full Menu
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        <div ref={listRef} className="flex flex-col gap-6 lg:col-span-7">
          {dishes.map((dish) => {
            const image = signatureDishImages[dish.key];
            return (
              <div
                key={dish.key}
                className="group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-950/60 p-4 transition-colors duration-300 hover:border-gold-500/40 sm:p-6"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-36 sm:w-36">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-light text-ivory-100 sm:text-3xl">
                    {dish.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-400">
                    {dish.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
