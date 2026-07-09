import type { MenuItem } from "@/data/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-charcoal-700 bg-charcoal-900/60 p-6 transition-colors duration-300 hover:border-gold-500/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-light text-ivory-100">
          {item.name}
        </h3>
        <span className="shrink-0 font-display text-lg text-gold-300">
          {item.price}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-stone-400">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gold-500/30 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-gold-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
