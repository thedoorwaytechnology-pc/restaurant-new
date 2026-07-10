import { menuCategories } from "@/data/menu";

export function MenuCategoryNav() {
  return (
    <div className="sticky top-[97px] z-20 border-b border-charcoal-700 bg-charcoal-950/95 backdrop-blur">
      <nav
        aria-label="Menu categories"
        className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4 lg:px-10"
      >
        {menuCategories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="shrink-0 whitespace-nowrap text-xs font-medium uppercase tracking-widest text-stone-400 transition-colors hover:text-gold-300"
          >
            {category.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
