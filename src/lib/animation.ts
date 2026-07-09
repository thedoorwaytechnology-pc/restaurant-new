export const ease = {
  out: "power3.out",
  inOut: "power2.inOut",
  expo: "expo.out",
} as const;

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
export const NO_PREFERENCE_QUERY = "(prefers-reduced-motion: no-preference)";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
