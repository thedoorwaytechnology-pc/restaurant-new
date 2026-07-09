import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
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
