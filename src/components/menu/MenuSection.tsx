import Image from "next/image";
import type { MenuCategory } from "@/data/menu";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { MenuCard } from "@/components/menu/MenuCard";

export function MenuSection({ category, tone }: { category: MenuCategory; tone: "charcoal-950" | "charcoal-900" }) {
  return (
    <section
      id={category.id}
      className={`scroll-mt-36 py-20 lg:py-24 ${
        tone === "charcoal-950" ? "bg-charcoal-950" : "bg-charcoal-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <GoldDivider ornate className="mb-12" />
        <RevealOnScroll className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-2xl sm:aspect-[3/1]">
          <Image
            src={category.image.src}
            alt={category.image.alt}
            fill
            sizes="(min-width: 1024px) 1120px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h2 className="font-display text-3xl font-light leading-[1.1] text-ivory-100 sm:text-4xl lg:text-5xl text-balance">
              {category.title}
            </h2>
          </div>
        </RevealOnScroll>

        <p className="max-w-xl text-base leading-relaxed text-stone-300">{category.description}</p>
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
