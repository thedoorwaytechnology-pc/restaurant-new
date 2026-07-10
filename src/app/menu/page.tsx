import type { Metadata } from "next";
import { menuCategories } from "@/data/menu";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { WheatMotif } from "@/components/ui/motifs";
import { MenuCategoryNav } from "@/components/menu/MenuCategoryNav";
import { MenuSection } from "@/components/menu/MenuSection";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full menu at White Tiger Pizza & Curry — signature and traditional pizzas, authentic Indian curries, tandoori, momos, biryani, and more.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal-950 pb-16 pt-40 lg:pb-20 lg:pt-48">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.10]"
          style={{
            backgroundImage: "url('/menu-pattern-tiger.png')",
            backgroundSize: "480px 320px",
          }}
        />
        <GrainOverlay />
        <AmbientGlow
          color="copper"
          className="left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 -translate-y-1/3"
        />
        <WheatMotif className="pointer-events-none absolute -right-8 top-10 h-[260px] w-[130px] text-gold-500/[0.06]" />

        <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="eyebrow">The Menu</span>
          <h1 className="mt-6 font-display text-5xl font-light leading-[1.1] text-ivory-100 sm:text-6xl text-balance">
            Two kitchens. One table.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-300">
            From wood-fired pizza to slow-simmered curry, every section of this
            menu is built with the same standard. Pricing shown is current as of
            your visit.
          </p>
        </RevealOnScroll>
      </section>

      <MenuCategoryNav />

      {menuCategories.map((category, index) => (
        <MenuSection
          key={category.id}
          category={category}
          tone={index % 2 === 0 ? "charcoal-950" : "charcoal-900"}
          // tone="charcoal-950"
        />
      ))}
    </>
  );
}
