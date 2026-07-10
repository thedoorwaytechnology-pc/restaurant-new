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

// Provided asset layers (public/hero/) — all share one 1408x768 stage except
// hero-table.webp, which is a wider standalone backdrop. Positions below are
// hand-matched to the hero-scene.webp reference composite.
const HERO = "/hero";

// Each dish is two nested elements: the outer wrapper carries the
// scroll-driven position (the "camera" moving through the scene), the
// inner wrapper carries the idle breathing motion and mouse parallax —
// kept on separate elements so the two animations never fight over the
// same transform properties.
export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // const eyebrowRef = useRef<HTMLSpanElement>(null);
  // const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  // const ctaRef = useRef<HTMLDivElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const revealTextRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const steamRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  const pizzaOuterRef = useRef<HTMLDivElement>(null);
  const pizzaInnerRef = useRef<HTMLDivElement>(null);
  const pizzaSteamRef = useRef<HTMLDivElement>(null);
  const curryOuterRef = useRef<HTMLDivElement>(null);
  const curryInnerRef = useRef<HTMLDivElement>(null);
  const naanOuterRef = useRef<HTMLDivElement>(null);
  const naanInnerRef = useRef<HTMLDivElement>(null);
  const naanSteamRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(NO_PREFERENCE_QUERY, () => {
        // Set hidden synchronously before the timeline plays — these tweens
        // start at a later timeline position, so without this the element
        // would render at its natural (visible) opacity until the playhead
        // reaches them, and would be stuck visible if the timeline is ever
        // interrupted before that point.
        gsap.set(
          [
            glowRef.current,
            tableRef.current,
            pizzaSteamRef.current,
            steamRef.current,
            naanSteamRef.current,
          ],
          { opacity: 0 },
        );
        gsap.set(revealTextRef.current, { opacity: 0, y: 16 });

        // ---- Entrance: plate is set, dishes are placed one by one (~2.5s) ----
        const tl = gsap.timeline({ defaults: { ease: ease.out } });

        tl.fromTo(
          glowRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.6 },
          0,
        )
          .fromTo(
            tableRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.1 },
            0.1,
          )
          .fromTo(
            pizzaOuterRef.current,
            { opacity: 0, x: -36, y: 10, rotate: -4 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              duration: 0.9,
              ease: ease.expo,
            },
            0.5,
          )
          .fromTo(
            curryOuterRef.current,
            { opacity: 0, y: -22, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: ease.expo },
            0.75,
          )
          .fromTo(
            naanOuterRef.current,
            { opacity: 0, x: 30, y: 8 },
            { opacity: 1, x: 0, y: 0, duration: 0.8, ease: ease.expo },
            1,
          )
          .fromTo(
            pizzaSteamRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            1.3,
          )
          .fromTo(
            steamRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            1.4,
          )
          .fromTo(
            naanSteamRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            1.5,
          )
          // .fromTo(
          //   eyebrowRef.current,
          //   { opacity: 0, y: 16 },
          //   { opacity: 1, y: 0, duration: 0.7 },
          //   0.4,
          // )
          // .fromTo(
          //   [line1Ref.current, line2Ref.current, line3Ref.current],
          //   { opacity: 0, y: 40 },
          //   { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          //   0.55,
          // )
          .fromTo(
            copyRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            1.05,
          );
        // .fromTo(
        //   ctaRef.current,
        //   { opacity: 0, y: 20 },
        //   { opacity: 1, y: 0, duration: 0.8 },
        //   1.2,
        // );

        // Idle "breathing" — a slow, gentle scale pulse, not a float. The
        // food has just been served; nothing should look like it's hovering.
        gsap.to(
          [pizzaInnerRef.current, curryInnerRef.current, naanInnerRef.current],
          {
            scale: 1.015,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.6,
          },
        );

        // Continuous rising steam — staggered so the three don't pulse in
        // lockstep
        gsap.to(
          [pizzaSteamRef.current, steamRef.current, naanSteamRef.current],
          {
            y: -10,
            opacity: 0.6,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            stagger: 0.4,
            ease: "sine.inOut",
          },
        );

        // ---- Scroll-driven cinematic sequence ----
        // The table stays put, the camera moves toward the plate, then the
        // dishes separate — pizza left, curry right, naan settles centered
        // — before the scene hands off into Signature Dishes. Pinned on all
        // viewports (including mobile): scroll holds the section in place
        // while the sequence plays, then releases into Signature Dishes
        // once it's finished — the dish movement is just scaled down a
        // notch on narrow screens.
        const isMobile = window.innerWidth < 640;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=220%",
              scrub: 0.4,
              pin: true,
              anticipatePin: 1,
            },
          })
          .to(
            sceneRef.current,
            {
              scale: isMobile ? 1.15 : 1.3,
              y: isMobile ? -10 : -16,
              duration: 1,
            },
            0,
          )
          .to(
            pizzaOuterRef.current,
            {
              x: isMobile ? -10 : -80,
              y: isMobile ? -10 : -18,
              rotate: isMobile ? -4 : -5,
              duration: 1,
            },
            0,
          )
          .to(
            curryOuterRef.current,
            {
              x: isMobile ? 12 : 20,
              y: isMobile ? -8 : -14,
              rotate: isMobile ? 4 : 5,
              duration: 1,
            },
            0,
          )
          .to(
            naanOuterRef.current,
            {
              y: isMobile ? -18 : -30,
              scale: isMobile ? 1.04 : 1.06,
              duration: 1,
            },
            0,
          )
          .to(textColumnRef.current, { opacity: 0, y: -40, duration: 0.4 }, 0)
          .to(revealTextRef.current, { opacity: 1, y: 0, duration: 0.3 }, 0.32)
          .to(tableRef.current, { opacity: 0, duration: 0.35 }, 0.4)
          .to(
            [
              pizzaOuterRef.current,
              curryOuterRef.current,
              naanOuterRef.current,
              pizzaSteamRef.current,
              steamRef.current,
              naanSteamRef.current,
              glowRef.current,
              revealTextRef.current,
            ],
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
    gsap.to(pizzaInnerRef.current, {
      xPercent: nx * -3,
      yPercent: ny * -2,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
    gsap.to(curryInnerRef.current, {
      xPercent: nx * -5,
      yPercent: ny * -3,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
    gsap.to(naanInnerRef.current, {
      xPercent: nx * -2,
      yPercent: ny * -1.5,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  }

  function resetParallax() {
    gsap.to(
      [pizzaInnerRef.current, curryInnerRef.current, naanInnerRef.current],
      {
        xPercent: 0,
        yPercent: 0,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
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
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/85 to-charcoal-950" />
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
          {/* <span ref={eyebrowRef} className="eyebrow">
            {restaurantInfo.shortName}
          </span> */}
          <h1 className="mt-20 font-display text-4xl font-light leading-[1.05] text-ivory-100 sm:text-6xl lg:text-7xl">
            {/* <span ref={line1Ref} className="block">
              Bold Flavors.
            </span> */}
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
          {/* <div
            ref={ctaRef}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
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
          </div> */}
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
          label) is wide enough to sit right under the curry/naan dishes. */}
      <div
        ref={sceneRef}
        className="pointer-events-none absolute inset-x-0 -bottom-4 md:bottom-0 h-[170px] sm:bottom-0 sm:h-[220px] md:h-[250px] lg:h-[300px]"
        aria-hidden="true"
      >
        {/* wide table backdrop, spanning the full hero width */}
        <div ref={tableRef} className="absolute inset-x-0 bottom-0 h-full">
          <Image
            src={`${HERO}/hero-table.png`}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* the scene stage — each dish already carries its own board/bowl/
            plate in its source image, so they sit straight on the table,
            spread out, rather than sharing one plate underneath them.
            Height is locked to the same breakpoint values as the table
            image below (rather than derived from an aspect-ratio), so the
            dishes' percentage positions always land against the same
            visible slice of the table — otherwise the two drift apart at
            viewport widths the composition wasn't hand-tuned for. */}
        <div className="absolute bottom-0 left-1/2 h-[170px] w-[92%] max-w-[820px] -translate-x-1/2 translate-y-6 sm:h-[220px] md:h-[250px] lg:h-[300px]">
          {/* naan — its own plate, clear of the pizza and curry footprints,
              with a light wisp of oven-fresh steam sized to its own box */}
          <div
            ref={naanOuterRef}
            className="absolute left-[75%] md:left-[82%] top-[32%] md:top-[52%] w-[19%] -translate-x-1/2"
          >
            <div ref={naanInnerRef} className="relative aspect-[1408/768]">
              <Image
                src={`${HERO}/hero-naan.png`}
                alt="Fresh-baked naan on its own plate"
                fill
                className="object-cover"
              />
            </div>
            <div
              ref={naanSteamRef}
              className="pointer-events-none absolute -top-[45%] left-1/2 flex w-[130%] -translate-x-1/2 items-end justify-center opacity-80 mix-blend-screen"
            >
              <div className="relative -mr-4 aspect-[1408/768] w-[55%] -rotate-6">
                <Image
                  src={`${HERO}/hero-steam.png`}
                  alt=""
                  fill
                  sizes="90px"
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1408/768] w-[55%] translate-y-1 rotate-6 opacity-70">
                <Image
                  src={`${HERO}/hero-steam.png`}
                  alt=""
                  fill
                  sizes="90px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* pizza — its own board, hero of the composition, with its own
              rising steam scaled to its larger size */}
          <div
            ref={pizzaOuterRef}
            className="absolute left-[30%] xs:left-[10%] border xs:border-red-500 l:left-[28%] top-[25%] md:top-[35%] w-[38%] -translate-x-1/2"
          >
            <div ref={pizzaInnerRef} className="relative aspect-[1408/768]">
              <Image
                src={`${HERO}/hero-pizza.png`}
                alt="Wood-fired margherita pizza on a wooden board"
                fill
              />
            </div>
            <div
              ref={pizzaSteamRef}
              className="pointer-events-none absolute -top-[30%] left-1/2 flex w-[130%] -translate-x-1/2 items-end justify-center mix-blend-screen"
            >
              <div className="relative -mr-2 aspect-[1408/768] w-[55%] -rotate-6">
                <Image
                  src={`${HERO}/hero-steam.png`}
                  alt=""
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1408/768] w-[55%] translate-y-1 rotate-6 opacity-70">
                <Image
                  src={`${HERO}/hero-steam.png`}
                  alt=""
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* curry — its own copper bowl, with rising steam sized to its
              smaller bowl */}
          <div
            ref={curryOuterRef}
            className="absolute left-[55%] md:left-[60%] top-[30%] md:top-[54%] w-[20%] -translate-x-1/2"
          >
            <div ref={curryInnerRef} className="relative aspect-[1408/768]">
              <Image
                src={`${HERO}/hero-curry-bowl.png`}
                alt="Butter chicken in a copper bowl"
                fill
                sizes="800px"
                className="object-cover"
              />
            </div>
            <div
              ref={steamRef}
              className="pointer-events-none absolute -top-[40%] left-1/2 flex w-[130%] -translate-x-1/2 items-end justify-center mix-blend-screen"
            >
              <div className="relative -mr-10 aspect-[1408/768] w-[55%] -rotate-6">
                <Image
                  src={`${HERO}/hero-steam.png`}
                  alt=""
                  fill
                  sizes="90px"
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1408/768] w-[55%] translate-y-1 rotate-6 opacity-70">
                <Image
                  src={`${HERO}/hero-steam.png`}
                  alt=""
                  fill
                  sizes="90px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
