"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const DISSOLVE_INTERVAL = 6000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, DISSOLVE_INTERVAL);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const current = testimonials[index];

  return (
    <section className="relative bg-charcoal-900 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <RevealOnScroll>
          <SectionHeading
            align="center"
            eyebrow="Guest Stories"
            title="What our guests are saying."
            className="mx-auto"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-16">
          <div className="flex flex-col items-center gap-8">
            {/* fixed "portrait" — a quiet monogram mark that stays put while quotes dissolve behind it */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/30 bg-charcoal-950/60">
              <span className="font-display text-xl font-light text-gold-300">
                {current.name.charAt(0)}
              </span>
            </div>

            <Quote className="h-7 w-7 text-gold-500/50" aria-hidden="true" />

            <div className="relative flex min-h-[220px] w-full items-start justify-center sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current.id}
                  initial={reducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-x-0 flex flex-col items-center gap-6 text-center"
                >
                  <blockquote className="font-display text-2xl font-light leading-relaxed text-ivory-100 sm:text-3xl text-balance">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex flex-col items-center gap-1">
                    <span className="text-sm font-medium text-gold-300">{current.name}</span>
                    <span className="text-xs uppercase tracking-widest text-stone-400">
                      {current.detail}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-current={i === index}
                  className={
                    i === index
                      ? "h-1.5 w-5 rounded-full bg-gold-400 transition-all duration-500"
                      : "h-1.5 w-1.5 rounded-full bg-stone-500/50 transition-all duration-500"
                  }
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
