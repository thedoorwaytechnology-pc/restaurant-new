"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
// import { ChevronDown } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import {
  NO_PREFERENCE_QUERY,
  ease,
  prefersReducedMotion,
} from "@/lib/animation";
import { restaurantInfo } from "@/data/restaurant-info";
import { heroImage } from "@/data/images";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

const HERO = "/hero";
const LATEST = "/hero/latest";

// Each dish is two nested elements: the outer wrapper carries the
// scroll-driven position (the "camera" moving through the scene), the
// inner wrapper carries the idle breathing motion and mouse parallax —
// kept on separate elements so the two animations never fight over the
// same transform properties. Each dish's aspect ratio matches its own
// cropped source image (these five are individual cutout photos, not
// slices of one shared composite), so `object-contain` renders them
// undistorted.
const DISHES = [
  {
    key: "chicken",
    alt: "Crispy fried chicken wings with fries and dipping sauce",
    src: `${LATEST}/chicken-cutout.png`,
    aspect: "889/535",
    left: "10%",
    top: "55%",
    width: "20%",
    steamSize: "90px",
  },
  {
    key: "biryani",
    alt: "Biryani rice in a clay bowl",
    src: `${LATEST}/biryani-cutout.png`,
    aspect: "941/683",
    left: "29%",
    top: "48%",
    width: "20%",
    steamSize: "100px",
  },
  {
    key: "pizza",
    alt: "Wood-fired margherita pizza",
    src: `${LATEST}/pizza-cutout.png`,
    aspect: "1251/766",
    left: "51%",
    top: "35%",
    width: "29%",
    steamSize: "150px",
  },
  {
    key: "naan",
    alt: "Butter chicken curry with fresh-baked naan",
    src: `${LATEST}/naan-cutout.png`,
    aspect: "1218/742",
    left: "72%",
    top: "52%",
    width: "22%",
    steamSize: "110px",
  },
  {
    key: "momo",
    alt: "Steamed momo dumplings with dipping sauce",
    src: `${LATEST}/momo-cutout.png`,
    aspect: "1118/558",
    left: "91%",
    top: "60%",
    width: "19%",
    steamSize: "90px",
  },
] as const;

// Per-dish entrance motion and idle/parallax/scroll tuning — varied so the
// five dishes don't all move in lockstep. Roughly: outer items enter from
// their own side and get more parallax/scroll travel, the centered pizza
// (hero of the composition) moves the least.
const DISH_MOTION = {
  chicken: {
    entranceFrom: { x: -32, y: 10, rotate: -4 },
    parallax: { x: -4, y: -2.5 },
    breatheStagger: 0,
    scroll: { x: -70, y: -16, rotate: -5 },
    scrollMobile: { x: -26, y: -9, rotate: -3 },
  },
  biryani: {
    entranceFrom: { y: -20, scale: 0.9 },
    parallax: { x: -3, y: -2 },
    breatheStagger: 0.3,
    scroll: { x: -30, y: -14, rotate: -2 },
    scrollMobile: { x: -12, y: -7, rotate: -1 },
  },
  pizza: {
    entranceFrom: { y: 14, scale: 0.94 },
    parallax: { x: -2, y: -1.5 },
    breatheStagger: 0.6,
    scroll: { x: 0, y: -20, scale: 1.05 },
    scrollMobile: { x: 0, y: -10, scale: 1.03 },
  },
  naan: {
    entranceFrom: { y: -18, scale: 0.9 },
    parallax: { x: -3, y: -2 },
    breatheStagger: 0.9,
    scroll: { x: 30, y: -14, rotate: 2 },
    scrollMobile: { x: 12, y: -7, rotate: 1 },
  },
  momo: {
    entranceFrom: { x: 32, y: 10, rotate: 4 },
    parallax: { x: -5, y: -3 },
    breatheStagger: 1.2,
    scroll: { x: 70, y: -16, rotate: 5 },
    scrollMobile: { x: 26, y: -9, rotate: 3 },
  },
} as const;

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const revealTextRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  const outerRefs = {
    chicken: useRef<HTMLDivElement>(null),
    biryani: useRef<HTMLDivElement>(null),
    pizza: useRef<HTMLDivElement>(null),
    naan: useRef<HTMLDivElement>(null),
    momo: useRef<HTMLDivElement>(null),
  };
  const innerRefs = {
    chicken: useRef<HTMLDivElement>(null),
    biryani: useRef<HTMLDivElement>(null),
    pizza: useRef<HTMLDivElement>(null),
    naan: useRef<HTMLDivElement>(null),
    momo: useRef<HTMLDivElement>(null),
  };
  const steamRefs = {
    chicken: useRef<HTMLDivElement>(null),
    biryani: useRef<HTMLDivElement>(null),
    pizza: useRef<HTMLDivElement>(null),
    naan: useRef<HTMLDivElement>(null),
    momo: useRef<HTMLDivElement>(null),
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(NO_PREFERENCE_QUERY, () => {
        const allSteam = DISHES.map((d) => steamRefs[d.key].current);
        const allOuter = DISHES.map((d) => outerRefs[d.key].current);

        // Set hidden synchronously before the timeline plays — these tweens
        // start at a later timeline position, so without this the element
        // would render at its natural (visible) opacity until the playhead
        // reaches them, and would be stuck visible if the timeline is ever
        // interrupted before that point.
        gsap.set([glowRef.current, tableRef.current, ...allSteam], {
          opacity: 0,
        });
        gsap.set(revealTextRef.current, { opacity: 0, y: 16 });

        // ---- Entrance: plate is set, dishes are placed one by one (~2.5s) ----
        const tl = gsap.timeline({ defaults: { ease: ease.out } });

        tl.fromTo(
          glowRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.6 },
          0,
        ).fromTo(
          tableRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.1 },
          0.1,
        );

        DISHES.forEach((dish, i) => {
          const from = DISH_MOTION[dish.key].entranceFrom;
          tl.fromTo(
            outerRefs[dish.key].current,
            { opacity: 0, ...from },
            {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
              duration: 0.85,
              ease: ease.expo,
            },
            0.5 + i * 0.2,
          );
        });

        DISHES.forEach((dish, i) => {
          tl.fromTo(
            steamRefs[dish.key].current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            1.5 + i * 0.1,
          );
        });

        tl.fromTo(
          copyRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          2.1,
        );

        // Idle "breathing" — a slow, gentle scale pulse, not a float. The
        // food has just been served; nothing should look like it's hovering.
        DISHES.forEach((dish) => {
          gsap.to(innerRefs[dish.key].current, {
            scale: 1.015,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: DISH_MOTION[dish.key].breatheStagger,
          });
        });

        // Continuous rising steam — staggered so the five don't pulse in
        // lockstep
        gsap.to(allSteam, {
          y: -10,
          opacity: 0.6,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          stagger: 0.3,
          ease: "sine.inOut",
        });

        // ---- Scroll-driven cinematic sequence ----
        // The table stays put, the camera moves toward the plate, then the
        // dishes separate outward — before the scene hands off into
        // Signature Dishes. Pinned on all viewports (including mobile):
        // scroll holds the section in place while the sequence plays, then
        // releases into Signature Dishes once it's finished — the dish
        // movement is just scaled down a notch on narrow screens.
        const isMobile = window.innerWidth < 640;

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=220%",
            scrub: 0.4,
            pin: true,
            anticipatePin: 1,
          },
        });

        scrollTl.to(
          sceneRef.current,
          {
            scale: isMobile ? 1.15 : 1.3,
            y: isMobile ? -10 : -16,
            duration: 1,
          },
          0,
        );

        DISHES.forEach((dish) => {
          const motion = isMobile
            ? DISH_MOTION[dish.key].scrollMobile
            : DISH_MOTION[dish.key].scroll;
          scrollTl.to(
            outerRefs[dish.key].current,
            { ...motion, duration: 1 },
            0,
          );
        });

        scrollTl
          .to(textColumnRef.current, { opacity: 0, y: -40, duration: 0.4 }, 0)
          .to(revealTextRef.current, { opacity: 1, y: 0, duration: 0.3 }, 0.32)
          .to(tableRef.current, { opacity: 0, duration: 0.35 }, 0.4)
          .to(
            [...allOuter, ...allSteam, glowRef.current, revealTextRef.current],
            { opacity: 0, duration: 0.35 },
            0.72,
          );

        return () => {
          tl.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion() || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const ny = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    DISHES.forEach((dish) => {
      const { x, y } = DISH_MOTION[dish.key].parallax;
      gsap.to(innerRefs[dish.key].current, {
        xPercent: nx * x,
        yPercent: ny * y,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }

  function resetParallax() {
    DISHES.forEach((dish) => {
      gsap.to(innerRefs[dish.key].current, {
        xPercent: 0,
        yPercent: 0,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetParallax}
      className="relative flex h-[100svh] min-h-[680px] w-full items-start overflow-hidden bg-charcoal-950 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/85 to-charcoal-950" /> */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[55%] h-[560px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[170px]"
      />
      <GrainOverlay />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div
          ref={textColumnRef}
          className="max-w-2xl text-center sm:mx-auto sm:text-center lg:mx-0 lg:text-left"
        >
          <h1 className="mt-20 font-display text-4xl font-light leading-[1.05] text-ivory-100 sm:text-6xl lg:text-7xl">
            <span ref={line2Ref} className="block italic text-gold-300">
              Timeless Hospitality.
            </span>
            <span ref={line3Ref} className="block">
              Unforgettable Dining.
            </span>
          </h1>
          <p
            ref={copyRef}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg lg:mx-0"
          >
            {restaurantInfo.description}
          </p>
        </div>
      </div>

      {/* stands in for the intro copy once it scrolls away, during the
          pinned scroll-cinematic sequence (all viewports) — bridges into
          the menu-focused section that follows, and repeats the primary
          CTAs so they're still reachable without scrolling back up.
          Centered in the viewport rather than pinned near the top, so
          there's no dead space above it. Because the section itself is
          pinned for the whole sequence, this stays viewport-centered the
          entire time; opacity starts at 0 via the gsap.set above and is
          driven by the scroll timeline. */}
      <div
        ref={revealTextRef}
        className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-6 px-6 text-center"
      >
        <div>
          <p className="font-display text-3xl font-light leading-tight text-ivory-100 lg:text-5xl">
            Two traditions.{" "}
            <span className="italic text-gold-300">One table.</span>
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone-300 sm:text-base">
            Explore the menu where wood-fired pizza meets slow-simmered curry.
          </p>
        </div>
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={restaurantInfo.orderOnlineHref}
            className="inline-flex items-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-charcoal-950 transition-colors hover:bg-gold-400"
          >
            Order Online
          </MagneticButton>
          <MagneticButton
            href="/catering"
            className="inline-flex items-center rounded-full border border-ivory-200/30 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            Catering
          </MagneticButton>
        </div>
      </div>

      {/* the table scene — a small, grounded accent at the very bottom of
          the hero, not a dominant element. Lifted clear of the fixed
          WhatsApp button on small screens, where its full pill (icon +
          label) is wide enough to sit right under the dishes. */}
      <div
        ref={sceneRef}
        className="pointer-events-none absolute inset-x-0 -bottom-4 h-[170px] sm:bottom-0 sm:h-[220px] md:h-[250px] lg:h-[300px]"
        aria-hidden="true"
      >
        {/* wide table backdrop, spanning the full hero width */}
        {/* <div ref={tableRef} className="absolute inset-x-0 bottom-0 h-full">
          <Image
            src={`${HERO}/hero-table4.png`}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div> */}

        {/* the scene stage — dishes are individually cut-out photos (not
            slices of one shared composite), spread out across the table,
            each with its own steam sized to its own box. Height is locked
            to the same breakpoint values as the table image above (rather
            than derived from an aspect-ratio), so the dishes' percentage
            positions always land against the same visible slice of the
            table — otherwise the two drift apart at viewport widths the
            composition wasn't hand-tuned for. */}
        <div className="absolute bottom-0 left-1/2 h-[170px] w-[94%] max-w-[960px] -translate-x-1/2 translate-y-6 sm:h-[220px] md:h-[250px] lg:h-[300px]">
          {DISHES.map((dish) => (
            <div
              key={dish.key}
              ref={outerRefs[dish.key]}
              className="absolute -translate-x-1/2"
              style={{ left: dish.left, top: dish.top, width: dish.width }}
            >
              <div
                ref={innerRefs[dish.key]}
                className="relative"
                style={{ aspectRatio: dish.aspect }}
              >
                <Image
                  src={dish.src}
                  alt={dish.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, 40vw"
                  className="object-contain"
                />
              </div>
              <div
                ref={steamRefs[dish.key]}
                className="pointer-events-none absolute -top-[35%] left-1/2 flex w-[130%] -translate-x-1/2 items-end justify-center mix-blend-screen"
              >
                <div className="relative -mr-2 aspect-[1408/768] w-[55%] -rotate-6">
                  <Image
                    src={`${HERO}/hero-steam.png`}
                    alt=""
                    fill
                    sizes={dish.steamSize}
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-[1408/768] w-[55%] translate-y-1 rotate-6 opacity-70">
                  <Image
                    src={`${HERO}/hero-steam.png`}
                    alt=""
                    fill
                    sizes={dish.steamSize}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
