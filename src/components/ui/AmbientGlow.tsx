import { cn } from "@/lib/utils";

type AmbientGlowProps = {
  className?: string;
  color?: "gold" | "copper" | "ember";
};

const colorMap = {
  gold: "bg-gold-500/20",
  copper: "bg-copper-500/20",
  ember: "bg-ember-500/15",
};

export function AmbientGlow({ className, color = "gold" }: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px]",
        colorMap[color],
        className,
      )}
    />
  );
}
