import { cn } from "@/lib/utils";
import { OrnateDividerMotif } from "@/components/ui/motifs";

type GoldDividerProps = {
  className?: string;
  ornate?: boolean;
};

export function GoldDivider({ className, ornate = false }: GoldDividerProps) {
  if (ornate) {
    return (
      <div className={cn("flex items-center gap-3", className)} aria-hidden="true">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/50" />
        <OrnateDividerMotif className="h-4 w-[90px] shrink-0 text-gold-400/70" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/50" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent",
        className,
      )}
    />
  );
}
