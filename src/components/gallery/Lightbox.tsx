"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CuratedImage } from "@/data/images";

type LightboxProps = {
  images: CuratedImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || index === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index! + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index! - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, index, images.length, onClose, onNavigate]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.05 : 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 p-4 sm:p-10"
          onClick={onClose}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-stone-500/40 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index! - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-500/40 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index! + 1) % images.length);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-500/40 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.96 }}
            transition={{ duration: reducedMotion ? 0.05 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative aspect-[4/5] w-full max-w-2xl overflow-hidden rounded-2xl sm:aspect-[3/2]"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 640px) 700px, 100vw"
              className="object-cover"
            />
          </motion.div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-stone-400">
            {index! + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
