import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={cn(
          "font-display text-4xl font-light leading-[1.1] text-ivory-100 text-balance sm:text-5xl lg:text-6xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed text-stone-300",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
