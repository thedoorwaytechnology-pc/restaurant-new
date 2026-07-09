"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { NO_PREFERENCE_QUERY, ease } from "@/lib/animation";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: "block" | "stagger";
  y?: number;
  x?: number;
  /** Starting scale (element settles to 1) — a slow "camera pulling back"
   * feel for imagery, rather than a hard cut into place. */
  scaleFrom?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  scrub?: boolean;
};

export function RevealOnScroll({
  children,
  className,
  as: Tag = "div",
  variant = "block",
  y = 40,
  x = 0,
  scaleFrom = 1,
  delay = 0,
  stagger = 0.12,
  start = "top 82%",
  scrub = false,
}: RevealOnScrollProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      const els =
        variant === "stagger"
          ? Array.from(container.current.children)
          : [container.current];
      if (!els.length) return;

      const mm = gsap.matchMedia();
      mm.add(NO_PREFERENCE_QUERY, () => {
        gsap.set(els, { opacity: 0, y, x, scale: scaleFrom });
        gsap.to(els, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: ease.out,
          delay,
          stagger,
          scrollTrigger: {
            trigger: container.current,
            start,
            toggleActions: "play none none reverse",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: container, dependencies: [variant, y, x, scaleFrom, delay, stagger, start, scrub] },
  );

  const Component = Tag as ElementType;
  return (
    <Component ref={container} className={cn(className)}>
      {children}
    </Component>
  );
}

export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  amount = 60,
) {
  useGSAP(
    () => {
      if (!ref.current) return;
      const mm = gsap.matchMedia();
      mm.add(NO_PREFERENCE_QUERY, () => {
        gsap.fromTo(
          ref.current,
          { y: -amount },
          {
            y: amount,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
      return () => mm.revert();
    },
    { dependencies: [amount] },
  );
}

export { ScrollTrigger };
