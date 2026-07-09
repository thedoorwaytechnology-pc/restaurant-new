import { cn } from "@/lib/utils";

type MotifProps = {
  className?: string;
};

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
