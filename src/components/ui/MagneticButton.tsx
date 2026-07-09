"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  strength?: number;
  disabled?: boolean;
};

export function MagneticButton({
  href,
  onClick,
  children,
  className,
  type = "button",
  ariaLabel,
  strength = 0.35,
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const content = href ? (
    <Link href={href} className={cn(className)} aria-label={ariaLabel}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(className, "disabled:pointer-events-none disabled:opacity-70")}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {content}
    </motion.div>
  );
}
