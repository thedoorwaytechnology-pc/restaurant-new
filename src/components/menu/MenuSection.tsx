import type { MenuCategory } from "@/data/menu";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuCard } from "@/components/menu/MenuCard";

export function MenuSection({ category, tone }: { category: MenuCategory; tone: "charcoal-950" | "charcoal-900" }) {
  return (
    <section
      id={category.id}
      className={`scroll-mt-36 border-t border-charcoal-700 py-20 lg:py-24 ${
        tone === "charcoal-950" ? "bg-charcoal-950" : "bg-charcoal-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading title={category.title} subtitle={category.description} />
        <RevealOnScroll
          variant="stagger"
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {category.items.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
