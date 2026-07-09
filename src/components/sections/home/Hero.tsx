"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { NO_PREFERENCE_QUERY, ease } from "@/lib/animation";
import { heroImage } from "@/data/images";
import { restaurantInfo } from "@/data/restaurant-info";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(NO_PREFERENCE_QUERY, () => {
        const tl = gsap.timeline({ defaults: { ease: ease.out } });

        tl.fromTo(imageRef.current, { scale: 1.18 }, { scale: 1, duration: 2.6 })
          .fromTo(glowRef.current, { opacity: 0 }, { opacity: 1, duration: 1.8 }, 0.2)
          .fromTo(eyebrowRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.6)
          .fromTo(
            [line1Ref.current, line2Ref.current, line3Ref.current],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
            0.75,
          )
          .fromTo(copyRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 1.25)
          .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 1.4);

        gsap.to(imageRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        return () => {
          tl.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-charcoal-950"
    >
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          preload
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-charcoal-950/40" />
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/15 blur-[160px] opacity-0"
      />
      <GrainOverlay />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span ref={eyebrowRef} className="eyebrow opacity-0">
            {restaurantInfo.shortName}
          </span>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] text-ivory-100 sm:text-6xl lg:text-7xl">
            <span ref={line1Ref} className="block opacity-0">
              Bold Flavors.
            </span>
            <span ref={line2Ref} className="block opacity-0 italic text-gold-300">
              Timeless Hospitality.
            </span>
            <span ref={line3Ref} className="block opacity-0">
              Unforgettable Dining.
            </span>
          </h1>
          <p ref={copyRef} className="mt-7 max-w-xl text-base leading-relaxed text-stone-300 opacity-0 sm:text-lg">
            {restaurantInfo.description}
          </p>
          <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4 opacity-0">
            <MagneticButton
              href={restaurantInfo.orderOnlineHref}
              className="inline-flex items-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-charcoal-950 transition-colors hover:bg-gold-400"
            >
              Order Online
            </MagneticButton>
            <MagneticButton
              href="/reservations"
              className="inline-flex items-center rounded-full border border-ivory-200/30 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              Reserve a Table
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone-400 sm:flex">
        <span className="eyebrow text-[10px] text-stone-400">Scroll</span>
        <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
