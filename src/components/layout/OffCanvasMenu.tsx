"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/data/nav-links";
import { restaurantInfo } from "@/data/restaurant-info";
import { TigerStripesMotif } from "@/components/ui/motifs";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { useUIState } from "@/components/layout/UIStateProvider";

export function OffCanvasMenu() {
  const { isMenuOpen, setMenuOpen } = useUIState();
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (isMenuOpen) {
      root.style.overflow = "hidden";
      panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    } else {
      root.style.overflow = "";
    }
    return () => {
      root.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [setMenuOpen]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.05 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 flex flex-col justify-center overflow-hidden bg-charcoal-950/98"
        >
          <GrainOverlay />
          <TigerStripesMotif className="absolute -right-24 top-1/2 h-[520px] w-[480px] -translate-y-1/2 text-gold-500/[0.06]" />
          <FlameGlow />

          <nav className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-3 px-8">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
                  transition={{
                    duration: reducedMotion ? 0.05 : 0.5,
                    delay: reducedMotion ? 0 : 0.08 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-4 font-display text-5xl font-light text-ivory-100 transition-colors hover:text-gold-300 sm:text-7xl"
                  >
                    <span className="text-sm text-stone-400 font-body tracking-widest">
                      0{index + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reducedMotion ? 0 : 0.4, duration: reducedMotion ? 0.05 : 0.6 }}
            className="relative mx-auto mb-10 flex w-full max-w-3xl flex-col gap-2 px-8 text-sm text-stone-400"
          >
            <p>{restaurantInfo.address.full}</p>
            <p>
              <a href={restaurantInfo.phoneHref} className="hover:text-gold-300">
                {restaurantInfo.phone}
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FlameGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]"
    />
  );
}
