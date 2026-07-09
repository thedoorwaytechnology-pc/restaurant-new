"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { restaurantInfo } from "@/data/restaurant-info";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useUIState } from "@/components/layout/UIStateProvider";
import { cn } from "@/lib/utils";

function LogoMark() {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className="h-8 w-8 text-gold-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      whileHover="hover"
      initial="rest"
    >
      <motion.circle
        cx="20"
        cy="20"
        r="17"
        variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      />
      <motion.path
        d="M6 15 Q20 6 34 15"
        variants={{ rest: { pathLength: 0.85 }, hover: { pathLength: 1 } }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.path
        d="M4 22 Q20 14 36 22"
        variants={{ rest: { pathLength: 0.85 }, hover: { pathLength: 1 } }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      />
      <motion.path
        d="M8 29 Q20 22 32 29"
        variants={{ rest: { pathLength: 0.85 }, hover: { pathLength: 1 } }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      />
    </motion.svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isMenuOpen, setMenuOpen } = useUIState();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
        scrolled || isMenuOpen
          ? "border-b border-gold-500/20 bg-charcoal-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-lg tracking-wide text-ivory-100"
        >
          <LogoMark />
          <span className="hidden sm:inline">{restaurantInfo.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative py-2 text-sm font-medium uppercase tracking-[0.14em] text-ivory-200/90 transition-colors hover:text-gold-300"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <MagneticButton
            href={restaurantInfo.orderOnlineHref}
            className="hidden items-center rounded-full border border-gold-500/70 px-6 py-2.5 text-sm font-medium tracking-wide text-gold-300 transition-colors hover:bg-gold-500 hover:text-charcoal-950 sm:inline-flex"
          >
            Order Online
          </MagneticButton>

          <button
            type="button"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-500/40 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
