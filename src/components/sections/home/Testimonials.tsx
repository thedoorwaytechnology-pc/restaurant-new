"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="relative bg-charcoal-900 py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <RevealOnScroll>
          <SectionHeading
            align="center"
            eyebrow="Guest Stories"
            title="What our guests are saying."
            className="mx-auto"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={32}
            loop
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <figure className="flex flex-col items-center gap-6 px-4 text-center sm:px-16">
                  <Quote className="h-8 w-8 text-gold-500/60" aria-hidden="true" />
                  <blockquote className="font-display text-2xl font-light leading-relaxed text-ivory-100 sm:text-3xl text-balance">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex flex-col items-center gap-1">
                    <span className="text-sm font-medium text-gold-300">
                      {testimonial.name}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-stone-400">
                      {testimonial.detail}
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-10 flex items-center justify-center gap-2" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
