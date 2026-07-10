import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { restaurantInfo } from "@/data/restaurant-info";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { FlameMotif } from "@/components/ui/motifs";
import { DarkMap } from "@/components/maps/DarkMap";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
} as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-500/10 bg-charcoal-900">
      <GrainOverlay />
      <AmbientGlow
        color="copper"
        className="left-1/2 top-0 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/3"
      />
      <FlameMotif className="pointer-events-none absolute -left-16 bottom-0 h-[440px] w-[340px] text-copper-500/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10 lg:px-10">
        <p className="max-w-3xl font-display text-3xl font-light leading-tight text-ivory-100 sm:text-4xl lg:text-5xl text-balance">
          Bold flavors, timeless hospitality — pull up a chair and stay a while.
        </p>

        <GoldDivider className="mt-14" />

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="font-display text-xl text-ivory-100">
              {restaurantInfo.name}
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-stone-400">
              {restaurantInfo.tagline}
            </p>
            <div className="mt-2 flex items-center gap-3">
              {restaurantInfo.social.map((item) => {
                const Icon = socialIcons[item.id as keyof typeof socialIcons];
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-stone-500/30 text-stone-300 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow">Quick Links</span>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-300 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow">Opening Hours</span>
            <ul className="flex flex-col gap-2.5">
              {restaurantInfo.hours.map((row) => (
                <li key={row.days} className="text-sm text-stone-300">
                  <span className="block text-ivory-200">{row.days}</span>
                  <span className="text-stone-400">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow">Contact</span>
            <ul className="flex flex-col gap-3 text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
                  aria-hidden="true"
                />
                <span>{restaurantInfo.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="h-4 w-4 shrink-0 text-gold-400"
                  aria-hidden="true"
                />
                <a
                  href={restaurantInfo.phoneHref}
                  className="hover:text-gold-300"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 shrink-0 text-gold-400"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="hover:text-gold-300"
                >
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <DarkMap className="mt-14 h-64" />

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-charcoal-700 pt-6 text-xs text-stone-400 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights
            reserved.
          </p>
          <p>Crafted with care in Toronto.</p>
        </div>
      </div>
    </footer>
  );
}
