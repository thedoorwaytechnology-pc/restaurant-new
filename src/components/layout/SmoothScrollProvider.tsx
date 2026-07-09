"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import { REDUCED_MOTION_QUERY } from "@/lib/animation";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Web fonts and below-the-fold images can finish loading after GSAP's
    // initial ScrollTrigger measurement, shifting content and leaving
    // trigger positions stale (a reveal animation can end up permanently
    // un-fired). Recompute once everything has actually settled.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready?.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      return;
    }

    // Recreated on every route change (dependency on `pathname` below)
    // rather than kept alive across navigations. Lenis's resize-observer
    // approach proved unreliable at picking up route-driven height changes
    // in practice (`<html>` is pinned to viewport height via the `h-full`
    // class in layout.tsx, and even pointing the observer at `<body>`
    // still left desktop wheel-scroll capped short of the real bottom on
    // some pages). A full teardown + fresh instance always measures the
    // current page's true height at construction time, which is the one
    // case that reliably worked (the very first page load).
    const lenis = new Lenis({
      content: document.body,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
