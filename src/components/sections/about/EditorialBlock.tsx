import Image from "next/image";
import type { CuratedImage } from "@/data/images";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type EditorialBlockProps = {
  eyebrow: string;
  title: string;
  copy: string[];
  image: CuratedImage;
  reverse?: boolean;
  tone?: "charcoal-950" | "charcoal-900";
  children?: React.ReactNode;
};

const toneClasses = {
  "charcoal-950": "bg-charcoal-950",
  "charcoal-900": "bg-charcoal-900",
} as const;

export function EditorialBlock({
  eyebrow,
  title,
  copy,
  image,
  reverse = false,
  tone = "charcoal-950",
  children,
}: EditorialBlockProps) {
  return (
    <section className={cn("relative overflow-hidden py-24 lg:py-32", toneClasses[tone])}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <RevealOnScroll
          y={30}
          className={cn("lg:col-span-6", reverse ? "lg:order-2 lg:col-start-7" : "lg:col-start-1")}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll
          y={30}
          delay={0.1}
          className={cn(
            "lg:col-span-5",
            reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-8",
          )}
        >
          <SectionHeading eyebrow={eyebrow} title={title} />
          <div className="mt-6 flex flex-col gap-4">
            {copy.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-stone-300">
                {paragraph}
              </p>
            ))}
          </div>
          {children}
        </RevealOnScroll>
      </div>
    </section>
  );
}
