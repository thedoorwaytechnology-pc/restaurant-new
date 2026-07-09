import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M13.5 21v-7h2.2l.3-2.6h-2.5V9.7c0-.75.2-1.26 1.27-1.26H16V6.1c-.28-.04-1.2-.12-2.28-.12-2.25 0-3.8 1.37-3.8 3.9v2.53H7.7v2.6h2.2v7" />
    </IconBase>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M13 3v11.5a3 3 0 1 1-2.4-2.94" />
      <path d="M13 3c.4 2.2 2 3.9 4.2 4.2" />
    </IconBase>
  );
}
