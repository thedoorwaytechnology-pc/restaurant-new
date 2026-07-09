import { cn } from "@/lib/utils";

type MotifProps = {
  className?: string;
};

export function FlameMotif({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 200 270"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <path d="M100 10C64 58 44 104 60 146C42 138 24 158 24 190C24 232 58 260 100 260C142 260 176 232 176 190C176 156 152 132 138 112C146 140 136 158 118 168C130 136 122 88 100 10Z" />
    </svg>
  );
}

export function SpiceMotif({ className }: MotifProps) {
  const seeds = [
    [30, 24], [58, 12], [86, 30], [22, 58], [50, 52],
    [78, 66], [104, 44], [16, 96], [44, 92], [72, 100],
  ];
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <path d="M150 40C180 26 206 48 198 82C193 102 168 116 148 108C160 96 158 70 138 58" />
      <path d="M138 58C118 48 96 60 92 84C88 104 104 122 124 118" />
      {seeds.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}

export function TigerStripesMotif({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 240 260"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <path d="M10 30 Q120 -5 230 30" />
      <path d="M0 82 Q120 42 240 82" />
      <path d="M6 134 Q120 90 234 134" />
      <path d="M16 184 Q120 144 224 184" />
      <path d="M32 230 Q120 192 208 230" />
    </svg>
  );
}

/**
 * Single corner-bracket flourish (top-left orientation). Flip with
 * `-scale-x-100` / `-scale-y-100` / `scale-x-[-1] scale-y-[-1]` utility
 * classes to place it in the other three corners of a card or frame.
 */
export function CornerFlourishMotif({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <path d="M2 20 V6 Q2 2 6 2 H20" />
      <path d="M2 12 Q10 12 12 20" opacity="0.8" />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Small centered flourish glyph, meant to sit inline between two
 * gold hairline rules (see GoldDivider's `ornate` variant) to mark a
 * menu-page-style section boundary.
 */
export function OrnateDividerMotif({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 90 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <path d="M20 10 Q30 2 40 10" opacity="0.85" />
      <path d="M70 10 Q60 2 50 10" opacity="0.85" />
      <path d="M45 4 L45 16" />
      <path d="M40 10 L50 10" />
      <circle cx="45" cy="10" r="2.2" fill="currentColor" stroke="none" />
      <path d="M15 10 Q10 10 8 6" opacity="0.6" />
      <path d="M75 10 Q80 10 82 6" opacity="0.6" />
    </svg>
  );
}

export function WheatMotif({ className }: MotifProps) {
  const grains = Array.from({ length: 9 }, (_, i) => 26 + i * 22);
  return (
    <svg
      viewBox="0 0 120 280"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <path d="M60 20V260" />
      {grains.map((y, i) => (
        <g key={y}>
          <ellipse
            cx={i % 2 === 0 ? 44 : 76}
            cy={y}
            rx="14"
            ry="7"
            transform={`rotate(${i % 2 === 0 ? -28 : 28} ${i % 2 === 0 ? 44 : 76} ${y})`}
          />
        </g>
      ))}
    </svg>
  );
}
