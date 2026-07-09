import type { MenuItem } from "@/data/menu";
import { CornerFlourishMotif } from "@/components/ui/motifs";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group relative flex flex-col gap-3 border border-gold-500/15 bg-charcoal-900/60 p-6 transition-colors duration-300 hover:border-gold-500/35">
      <CornerFlourishMotif className="absolute -left-px -top-px h-6 w-6 text-gold-400/40 transition-opacity duration-300 group-hover:text-gold-400/70" />
      <CornerFlourishMotif className="absolute -right-px -top-px h-6 w-6 -scale-x-100 text-gold-400/40 transition-opacity duration-300 group-hover:text-gold-400/70" />
      <CornerFlourishMotif className="absolute -bottom-px -left-px h-6 w-6 -scale-y-100 text-gold-400/40 transition-opacity duration-300 group-hover:text-gold-400/70" />
      <CornerFlourishMotif className="absolute -bottom-px -right-px h-6 w-6 -scale-x-100 -scale-y-100 text-gold-400/40 transition-opacity duration-300 group-hover:text-gold-400/70" />

      <div className="flex items-baseline gap-3">
        <h3 className="whitespace-nowrap font-display text-xl font-light text-ivory-100">
          {item.name}
        </h3>
        <span
          aria-hidden="true"
          className="mb-1 flex-1 border-b border-dotted border-gold-500/35"
        />
        <span className="shrink-0 font-display text-lg italic text-gold-300">
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
