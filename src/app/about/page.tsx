import type { Metadata } from "next";
import { aboutImages } from "@/data/images";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { EditorialBlock } from "@/components/sections/about/EditorialBlock";
import { Philosophy } from "@/components/sections/about/Philosophy";
import { CraftsmanshipClose } from "@/components/sections/about/CraftsmanshipClose";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, philosophy, and craftsmanship behind White Tiger Pizza & Curry — where handcrafted pizza and authentic Indian curry share one kitchen.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <EditorialBlock
        eyebrow="Our Story"
        title="Born from two kitchens, one obsession."
        copy={[
          "White Tiger Pizza & Curry opened with an unusual premise: that a wood-fired pizza oven and a slow-simmered curry pot could share the same kitchen without compromising either.",
          "What started as a late-night idea between two chefs — one trained in Neapolitan pizza, the other in North Indian curry — became a restaurant built entirely around that tension, and the craft it demands.",
        ]}
        image={aboutImages.story}
      />

      <Philosophy />

      <EditorialBlock
        eyebrow="Passion"
        title="A passion for authentic cuisine."
        copy={[
          "Every recipe on our menu is rooted in tradition — hand-ground spice blends, slow fermentation, tandoor-fired heat. We don't chase trends; we chase the version of a dish that earns its place on the table.",
        ]}
        image={aboutImages.passion}
        reverse
      />

      <EditorialBlock
        eyebrow="Fresh Ingredients"
        title="Nothing sits. Nothing is rushed."
        copy={[
          "Produce, meat, and spice arrive daily. Our dough ferments on its own schedule and our curries simmer for as long as they need to — never shortcut for the sake of speed.",
        ]}
        image={aboutImages.ingredients}
      />

      <EditorialBlock
        eyebrow="Hospitality"
        title="A room built to make you feel expected."
        copy={[
          "Great food deserves a room that matches it. Warm light, unhurried service, and a team that remembers your name — hospitality here is a craft in its own right, not an afterthought.",
        ]}
        image={aboutImages.hospitality}
        reverse
      />

      <CraftsmanshipClose />
    </>
  );
}
