import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { SignatureDishes } from "@/components/sections/home/SignatureDishes";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { CateringPromo } from "@/components/sections/home/CateringPromo";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { GalleryPreview } from "@/components/sections/home/GalleryPreview";
import { CateringCTA } from "@/components/sections/home/CateringCTA";
import { VisitUs } from "@/components/sections/home/VisitUs";

export const metadata: Metadata = {
  title: "Premium Pizza & Indian Curry in Toronto",
  description:
    "White Tiger Pizza & Curry brings together handcrafted pizzas, authentic curries, premium ingredients, and warm hospitality in the heart of Toronto.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <WhyChooseUs />
      <CateringPromo />
      <Testimonials />
      <GalleryPreview />
      <CateringCTA />
      <VisitUs />
    </>
  );
}
