"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  // `initial` must stay identical between server and client render (the
  // reduced-motion preference isn't known until after hydration), so only
  // the transition duration is gated — the result is an instant snap
  // instead of a mismatch warning.
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
