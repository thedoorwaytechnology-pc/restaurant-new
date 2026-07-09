WHITE TIGER PIZZA & CURRY – Premium Restaurant Website Generation Prompt

Design and develop a premium multi-page restaurant website for White Tiger Pizza & Curry using Next.js (App Router), TypeScript, Tailwind CSS, and modern React libraries where appropriate (Framer Motion, React Hook Form, Swiper, Lucide React, GSAP).

Primary Design Reference (Highest Priority)

The website should take heavy inspiration from the visual quality, elegance, layout philosophy, interactions, and premium craftsmanship of:
https://whitetigerva.com/

Do not copy the website directly. Use it as the primary creative direction and design benchmark.

The final website should evoke:


Premium
Luxurious
Sophisticated
Editorial
Modern
Spacious
High-end
Confident
Memorable


When someone visits the website, it should immediately feel like a professionally crafted website worth thousands of dollars — not a typical restaurant template. Every detail should feel intentional and custom-designed.

Design Direction (Mandatory)

The website must combine Modern Luxury, Editorial Design, and Boutique Hospitality aesthetics.

Imagine blending:


Premium hospitality websites
Luxury hotel branding
Michelin-star restaurant websites
Modern lifestyle brands
High-end editorial magazines


Avoid:


Generic restaurant templates
Overly colorful sections
Cheap-looking gradients
Clipart / cartoon food illustrations
Basic UI components
Excessive borders
Busy layouts
Outdated restaurant website styling
Flat, plain, "safe" section layouts (especially header and footer)


Visual Identity & Dark Aesthetic (Mandatory)

This is a dark, moody, editorial aesthetic — not pure black, not flat black. Think dim ambient restaurant lighting, warm shadow, depth, and richness rather than a stark #000000 background.

Palette:


Deep charcoal / espresso black (e.g. #100D0C–#1A1614 range) as the dominant background — never pure #000000
Warm off-black with subtle brown/red undertone (like dim restaurant lighting, not a code editor)
Ivory / warm white for primary text
Soft gold and rich copper accents for highlights, dividers, and hover states
Stone grey and muted bronze for secondary text and UI chrome
Occasional deep burgundy or ember-orange accent, used sparingly, echoing tandoor fire and spice


Background Texture & Art (Mandatory):
The background should never be a flat solid color. Layer in subtle art and texture throughout every section:


Faint large-scale illustrative line art or etched motifs (e.g. tiger silhouette, flame, spice patterns, wheat/grain motifs) rendered at very low opacity as background elements — never competing with foreground content
Subtle grain/noise texture overlay for a premium, tactile, "printed editorial" feel
Soft radial glows and ambient light gradients (warm gold/copper) behind key sections, hero, and CTAs to simulate candlelight/restaurant ambiance
Blurred, darkened food/interior photography as section backdrops with gradient overlays for text legibility
Decorative fine-line dividers (gold/copper) between sections instead of plain borders
Background art should shift subtly per section (not one repeated pattern site-wide) so each page feels art-directed rather than templated


Typography (Premium, Not Generic):


Headlines: a high-end editorial serif with strong character — something in the spirit of Canela, Söhne Breit, GT Sectra, Reckless, or Freight Display (choose/self-host a comparable premium serif, not default Playfair/Georgia)
Body/UI: a refined modern sans-serif with excellent readability at small sizes — something like Neue Montreal, General Sans, or Söhne (not default system fonts, not Inter used plainly — customize tracking/weight for a bespoke feel)
Use large, confident type scale, generous letter-spacing on labels/eyebrows, and mixed-weight pairing (thin/light headlines against medium-weight body) for editorial contrast
Every heading treatment should feel deliberately designed — no default browser/UI-kit type styling anywhere


Everything should feel bespoke rather than assembled from UI components.

Premium Motion & Interaction (GSAP + Framer Motion)

Motion is a core pillar of this design, not decoration. Use GSAP (with ScrollTrigger) for complex scroll-driven sequences and Framer Motion for component-level and micro-interactions.

Include:


Cinematic hero entrance (staggered text reveal, slow background zoom/parallax, fade-in ambient glow)
Scroll-triggered reveals on every section (staggered fade/slide-up for text, images, cards — using GSAP ScrollTrigger scrub or toggleActions for smooth, tied-to-scroll motion rather than simple on-load fades)
Background art/texture parallax — line-art motifs and glows should drift at a different scroll speed than foreground content for depth
Image parallax on food/interior photography
Pinned/sticky scroll moments for signature sections (e.g. "Signature Dishes" or "Our Story") where content transitions as the user scrolls without the section itself scrolling away
Subtle zoom effects on hover and on scroll-into-view
Magnetic buttons for primary CTAs ("Order Online," "Reserve a Table")
Elegant hover interactions (underline draws, image reveal masks, gold accent line grows)
Premium card interactions (tilt/lift on hover, staggered entrance in grids)
Smooth page transitions between routes
Smooth scrolling (Lenis or equivalent) site-wide
Micro-interactions throughout (cursor states, button fills, icon morphs)
Animated section dividers/counters where relevant (e.g. numbers counting up in "Why Choose White Tiger")


Animation quality should feel like Apple, Linear, Stripe, Framer, and the White Tiger VA inspiration site. Never flashy or gimmicky — always refined, purposeful, and smooth (ease curves like power3.out / expo.out, no default linear easing).

Technology Stack


Next.js (Latest App Router)
TypeScript
Tailwind CSS
GSAP + ScrollTrigger (primary driver for scroll-based storytelling)
Framer Motion (component transitions, hover/tap states, page transitions)
React Hook Form
Swiper
Lucide React
Lenis (or similar) for smooth scroll
Responsive Design
SEO Optimized
Accessibility (WCAG) — respect prefers-reduced-motion and provide reduced-motion fallbacks for all GSAP/Framer sequences
Production-ready architecture


Website Structure

Create the following pages, maintaining a consistent dark luxury visual language across every one:


Home
About
Menu
Gallery
Reservations
Contact


Navigation (Creative — Not Plain)

Avoid a plain, boxy nav bar. Design something intentional:


Sticky, transparent-to-solid transition on scroll (starts fully transparent over the hero, transitions to a dark glass/blurred charcoal bar with a fine gold hairline bottom border as the user scrolls)
Consider an off-canvas full-screen menu overlay on open (dark background, large staggered serif nav links, subtle background art/texture, animated in with GSAP) rather than a plain dropdown
Animated logo mark (e.g. subtle tiger-stripe or flame icon that reacts on hover/scroll)
Underline/accent-line hover animations on nav links (gold, drawn in on hover, not just a color change)
Include: Home, About, Menu, Gallery, Reservations, Contact
Highlight the primary CTA "Order Online" as a distinct pill/button with a magnetic hover effect


Floating Order Online Button

Display a floating premium CTA on every page.


Text: Order Online
Magnetic hover animation, subtle pulsing glow (gold/copper) to draw the eye without being intrusive
Responsive placement (bottom-right on desktop, adapted for thumb reach on mobile)
Always visible but recedes in visual weight when a modal/menu is open


Footer (Creative — Not Plain)

Avoid a plain, flat, link-list-only footer. Design it as a final editorial "closing statement" section:


Full-width dark section with its own background art layer (faint large-scale tiger/flame motif or texture, distinct from other sections) and a soft ambient glow
Large-scale serif statement or tagline treatment before the utility links (e.g. a closing line echoing the hero, given real typographic weight — not small print)
Multi-column layout: Restaurant info, Quick links, Opening hours, Contact info, Social media (with custom icon hover animations, not default icon-only links)
Embedded/styled Google Maps treatment consistent with the dark theme (custom dark map style, not default Google styling)
Scroll-reveal animation as the footer enters viewport
Fine gold hairline divider separating the statement area from the utility/link grid
Copyright line treated as a quiet, minimal closing detail — not the visual anchor of the footer


Homepage

Include, each with alternating editorial layouts (not repetitive stacked identical sections):


Full-screen cinematic hero (headline: "Bold Flavors. Timeless Hospitality. Unforgettable Dining."; supporting copy: "White Tiger Pizza & Curry brings together handcrafted pizzas, authentic curries, premium ingredients, and warm hospitality to create a dining experience that's both comforting and unforgettable."; primary CTAs: Order Online, Reserve a Table)
Restaurant introduction / Our Story
Signature dishes showcase (Handcrafted Pizzas, Authentic Indian Curries, Chef Specials, Fresh Ingredients, House Favorites)
Why Choose White Tiger (premium ingredients, fresh preparation, authentic recipes, exceptional service, welcoming atmosphere)
Catering promotion (Weddings, Corporate Events, Birthday Parties, Family Gatherings, Festivals, Private Events)
Customer testimonials (premium carousel)
Gallery preview
Reservation CTA (large luxury section)
Visit Us (business details + beautifully integrated dark-styled Google Map)
Footer


About

Include:


Our Story
Philosophy
Passion for authentic cuisine
Fresh ingredients
Hospitality
Craftsmanship
Beautiful storytelling with editorial layouts and strong imagery, background art motifs woven in


Menu

Create premium menu sections for:


Signature Pizzas
Traditional Pizzas
Indian Curries
Tandoori
Appetizers
Momos
Rice & Biryani
Vegetarian
Kids Menu
Desserts
Drinks


Use elegant dark-themed cards with placeholder pricing and subtle scroll-triggered stagger as sections come into view.

Gallery

Immersive masonry gallery featuring:


Signature pizzas
Curries
Restaurant interiors
Guests dining
Fresh ingredients
Kitchen craftsmanship
Lifestyle imagery


Include premium lightbox animations (GSAP/Framer-driven, smooth scale + fade transitions).

Reservations

Premium booking experience including:


Name, Email, Phone, Date, Time, Guests, Occasion, Special Requests
Elegant success state after submission, animated in


Contact

Display:


Restaurant address, Phone, Email, Business hours
Google Maps (dark-styled)
Contact form
Call button, Directions, Email button
(Use placeholders that can easily be updated later.)


Performance & Code Quality


Fast loading
Image optimization, lazy loading
SEO metadata
Accessibility (WCAG), including reduced-motion support for all animations
Reusable architecture
Production-ready code
Responsive across all devices


Final Quality Standard (Most Important)

Do not build a generic restaurant website. Every section should feel like it was custom-designed by a top-tier digital agency — dark, elegant, art-directed, and alive with motion. The overall experience should match the level of craftsmanship found on premium hospitality and luxury lifestyle websites: immersive, refined, emotionally engaging, with exceptional typography, spacing, background artwork, imagery, and GSAP/Framer Motion animations throughout.

The benchmark is https://whitetigerva.com/. While the content, branding, and identity must be unique to White Tiger Pizza & Curry, the overall quality, premium dark aesthetic, and attention to detail should meet or exceed that standard.

---

## Implementation Checklist

Tracked against this spec. Checked off as each requirement is implemented and verified (build + lint + tests passing).

### Tech stack & foundation
- [x] Next.js App Router + TypeScript + Tailwind CSS scaffold
- [x] GSAP + ScrollTrigger, Framer Motion, React Hook Form, Swiper, Lucide React, Lenis installed
- [x] Premium self-hosted serif (Fraunces) + refined sans (Plus Jakarta Sans) via `next/font/google`, custom tracking/weights
- [x] Dark charcoal/gold/copper/burgundy/ember color tokens (never pure #000000)
- [x] Vitest + React Testing Library test setup
- [x] Lenis smooth scroll wired site-wide, GSAP-ticker driven, reduced-motion bypass
- [x] `gsap.matchMedia()` reduced-motion gating pattern established for all scroll animations
- [x] Grain/noise overlay, ambient radial glows, SVG line-art motifs (tiger/flame/spice/wheat) as reusable components
- [x] Responsive, accessible (WCAG), SEO metadata, image optimization

### Navigation
- [x] Sticky nav, transparent-to-solid glass transition on scroll with gold hairline
- [x] Off-canvas full-screen menu overlay (serif links, staggered Framer Motion entrance, background art)
- [x] Animated logo mark
- [x] Gold underline-draw hover animation on nav links
- [x] Home / About / Menu / Gallery / Reservations / Contact links present
- [x] "Order Online" pill CTA with magnetic hover

### Floating Order Online button
- [x] Present on every page, magnetic hover, pulsing gold/copper glow
- [x] Responsive placement, recedes when modal/menu open

### Footer
- [x] Full-width dark section, distinct background art + ambient glow
- [x] Large serif closing statement/tagline
- [x] Multi-column: restaurant info, quick links, hours, contact, social (animated icon hovers)
- [x] Dark-styled embedded Google Map
- [x] Scroll-reveal entrance, gold hairline divider, quiet copyright line

### Homepage
- [x] Cinematic hero (staggered reveal, parallax, ambient glow, headline/copy/CTAs as specified)
- [x] Our Story intro
- [x] Signature dishes showcase (Pizzas, Curries, Chef Specials, Fresh Ingredients, House Favorites) — sticky/pinned heading column while cards reveal
- [x] Why Choose White Tiger (5 pillars + animated counters)
- [x] Catering promotion (Weddings, Corporate, Birthdays, Family, Festivals, Private Events)
- [x] Testimonials premium carousel (Swiper)
- [x] Gallery preview
- [x] Reservation CTA (large luxury section)
- [x] Visit Us (details + dark-styled map)
- [x] Sections use alternating editorial layouts, not repetitive stacking

### About page
- [x] Our Story, Philosophy, Passion for authentic cuisine, Fresh ingredients, Hospitality, Craftsmanship — editorial layout with imagery + background motifs

### Menu page
- [x] All 11 categories present (Signature Pizzas, Traditional Pizzas, Indian Curries, Tandoori, Appetizers, Momos, Rice & Biryani, Vegetarian, Kids Menu, Desserts, Drinks)
- [x] Dark themed cards, placeholder pricing, scroll-triggered stagger

### Gallery page
- [x] Masonry layout across all listed categories
- [x] Premium lightbox with GSAP/Framer scale+fade transitions, keyboard/focus accessible

### Reservations page
- [x] Form fields: Name, Email, Phone, Date, Time, Guests, Occasion, Special Requests
- [x] Elegant animated success state

### Contact page
- [x] Address, phone, email, hours displayed
- [x] Dark-styled Google Map
- [x] Contact form
- [x] Call / Directions / Email action buttons

### Motion & interaction
- [x] Cinematic hero entrance
- [x] Scroll-triggered reveals on every section
- [x] Background art/texture parallax at different scroll speed than foreground (hero bg)
- [x] Image parallax on photography
- [x] Pinned/sticky scroll moment (signature section)
- [x] Hover/scroll-into-view zoom effects
- [x] Magnetic primary CTAs
- [x] Underline-draw / image-reveal-mask hover interactions
- [x] Card tilt/lift + staggered grid entrance
- [x] Smooth page transitions between routes
- [x] Site-wide smooth scrolling
- [x] Cursor/button/icon micro-interactions
- [x] Animated counters

### Performance, SEO & accessibility (final pass)
- [x] `next/image` used throughout with lazy loading + preload hero image, dynamic `import()` for below-the-fold Swiper carousel
- [x] Per-page SEO metadata, `sitemap.ts`, `robots.ts`, JSON-LD Restaurant schema
- [x] WCAG pass: skip link, focus-visible states, aria-labels, keyboard nav (menu/lightbox/carousel), contrast audit (fixed `stone-500` text failing AA, moved to `stone-400`), reduced-motion fallbacks verified via `prefers-reduced-motion` emulation (fixed a real SSR/hydration mismatch in `template.tsx` found during this pass)
- [x] Final `pnpm build` / `pnpm lint` / `pnpm test` all green (16 test files, 32 tests)

**Known, deliberate simplifications** (documented, not oversights):
- Imagery is curated free Unsplash stock photography (visually verified against each caption), not real photos of the restaurant — swap `src/data/images.ts` when real photography is available.
- Fonts are free equivalents (Fraunces + Plus Jakarta Sans) in place of the spec's named paid fonts (Canela/GT Sectra/Neue Montreal etc.), matching character per the spec's "or comparable" allowance.
- Reservations/Contact forms validate and respond with success but aren't wired to a real email/CRM/booking backend — `src/app/api/reservations/route.ts` and `src/app/api/contact/route.ts` are the integration points.
- "Order Online" links to `/menu` as a placeholder pending a real ordering platform.
- Google Maps uses the key-less embed + CSS dark filter (no Maps API key available), not the Maps JavaScript API's native dark map styling.