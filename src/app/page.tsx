import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/home/Hero";
import { OurStoryIntro } from "@/components/sections/home/OurStoryIntro";
import { SignatureDishes } from "@/components/sections/home/SignatureDishes";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { CateringPromo } from "@/components/sections/home/CateringPromo";
import { GalleryPreview } from "@/components/sections/home/GalleryPreview";
import { ReservationCTA } from "@/components/sections/home/ReservationCTA";
import { VisitUs } from "@/components/sections/home/VisitUs";

// Swiper pulls in a fair amount of client JS for a below-the-fold carousel —
// deferred so it doesn't weigh down the initial homepage bundle.
const Testimonials = dynamic(
  () => import("@/components/sections/home/Testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => <div className="h-[520px] bg-charcoal-900" aria-hidden="true" />,
  },
);

export const metadata: Metadata = {
  title: "Premium Pizza & Indian Curry in Toronto",
  description:
    "White Tiger Pizza & Curry brings together handcrafted pizzas, authentic curries, premium ingredients, and warm hospitality in the heart of Toronto.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurStoryIntro />
      <SignatureDishes />
      <WhyChooseUs />
      <CateringPromo />
      <Testimonials />
      <GalleryPreview />
      <ReservationCTA />
      <VisitUs />
    </>
  );
}
