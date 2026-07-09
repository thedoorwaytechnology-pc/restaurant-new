import type { Metadata } from "next";
import { fraunces, jakarta } from "@/lib/fonts";
import { restaurantInfo } from "@/data/restaurant-info";
import { UIStateProvider } from "@/components/layout/UIStateProvider";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { OffCanvasMenu } from "@/components/layout/OffCanvasMenu";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = "https://whitetigerpizzacurry.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${restaurantInfo.name} | Premium Pizza & Indian Curry, Toronto`,
    template: `%s | ${restaurantInfo.name}`,
  },
  description: restaurantInfo.description,
  keywords: [
    "White Tiger Pizza & Curry",
    "premium pizza Toronto",
    "authentic Indian curry",
    "fine dining pizza restaurant",
    "tandoori Toronto",
    "restaurant reservations",
  ],
  openGraph: {
    title: `${restaurantInfo.name} | ${restaurantInfo.tagline}`,
    description: restaurantInfo.description,
    url: siteUrl,
    siteName: restaurantInfo.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurantInfo.name} | ${restaurantInfo.tagline}`,
    description: restaurantInfo.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurantInfo.name,
  description: restaurantInfo.description,
  telephone: restaurantInfo.phone,
  email: restaurantInfo.email,
  servesCuisine: ["Pizza", "Indian", "Curry"],
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurantInfo.address.line1,
    addressLocality: "Toronto",
    addressRegion: "ON",
  },
  openingHoursSpecification: restaurantInfo.hours.map((row) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: row.days,
    opens: row.time.split(" – ")[0],
    closes: row.time.split(" – ")[1],
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal-950 font-body text-ivory-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-charcoal-950"
        >
          Skip to content
        </a>
        <UIStateProvider>
          <SmoothScrollProvider>
            <Navbar />
            <OffCanvasMenu />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingOrderButton />
          </SmoothScrollProvider>
        </UIStateProvider>
      </body>
    </html>
  );
}
