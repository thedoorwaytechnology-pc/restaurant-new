"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";

type CounterProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reducedMotion = useReducedMotion();
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView || !ref.current) return;

    if (reducedMotion) {
      ref.current.textContent = `${prefix}${to}${suffix}`;
      return;
    }

    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(value)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, reducedMotion, to, suffix, prefix, duration, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
