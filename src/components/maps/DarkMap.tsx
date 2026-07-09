import { ArrowUpRight } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant-info";
import { cn } from "@/lib/utils";

export function DarkMap({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "dark-map group relative overflow-hidden rounded-2xl border border-gold-500/20",
        className,
      )}
    >
      <iframe
        src={restaurantInfo.mapEmbedSrc}
        title={`Map showing the location of ${restaurantInfo.name}`}
        loading="lazy"
        className="h-full min-h-64 w-full grayscale-0"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent" />
      <a
        href={restaurantInfo.mapDirectionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-gold-500/50 bg-charcoal-950/85 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold-300 backdrop-blur transition-colors hover:bg-gold-500 hover:text-charcoal-950"
      >
        Get Directions
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}
