"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { restaurantInfo } from "@/data/restaurant-info";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useUIState } from "@/components/layout/UIStateProvider";
import { cn } from "@/lib/utils";

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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-500",
        scrolled || isMenuOpen
          ? "bg-charcoal-950/90 backdrop-blur-md"
          : "bg-charcoal-950/30 backdrop-blur-[2px]",
      )}
    >
      {/* brand row — logo is perfectly centered via a 3-column grid, with
          the CTA/menu toggle anchored to the right column regardless of
          its own width */}
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
        <span aria-hidden="true" />

        <Link
          href="/"
          aria-label={restaurantInfo.shortName}
          className="flex items-center justify-center py-2.5"
        >
          <Image
            src="/logo-header.png"
            alt={restaurantInfo.shortName}
            width={400}
            height={220}
            priority
            className={cn(
              "w-auto transition-[height] duration-500",
              scrolled ? "h-12" : "h-20",
            )}
          />
        </Link>

        <div className="flex items-center justify-end gap-4">
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
      </div>

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto hidden max-w-7xl items-center justify-center gap-9 px-6 transition-[height] duration-500 lg:flex lg:px-10",
          scrolled ? "h-10" : "h-12",
        )}
      >
        <ul className="flex items-center gap-9">
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
      </nav>
    </header>
  );
}
