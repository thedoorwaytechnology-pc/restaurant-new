"use client";

import { ShoppingBag } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant-info";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useUIState } from "@/components/layout/UIStateProvider";
import { cn } from "@/lib/utils";

export function FloatingOrderButton() {
  const { isOverlayOpen } = useUIState();

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-30 transition-all duration-300 sm:bottom-8 sm:right-8",
        isOverlayOpen
          ? "pointer-events-none translate-y-3 opacity-0"
          : "translate-y-0 opacity-100",
      )}
    >
      <MagneticButton
        href={restaurantInfo.orderOnlineHref}
        className="motion-safe:animate-pulse-glow flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3.5 text-sm font-semibold tracking-wide text-charcoal-950 shadow-lg shadow-black/40 transition-colors hover:bg-gold-400 sm:px-6 sm:py-4"
        ariaLabel="Order online"
      >
        <ShoppingBag className="h-4 w-4" aria-hidden="true" />
        <span>Order Online</span>
      </MagneticButton>
    </div>
  );
}
