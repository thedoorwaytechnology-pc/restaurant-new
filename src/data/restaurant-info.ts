export const restaurantInfo = {
  name: "White Tiger Pizza & Curry",
  shortName: "White Tiger",
  tagline: "Bold Flavors. Timeless Hospitality. Unforgettable Dining.",
  description:
    "White Tiger Pizza & Curry brings together handcrafted pizzas, authentic curries, premium ingredients, and warm hospitality to create a dining experience that's both comforting and unforgettable.",
  address: {
    line1: "482 King Street West",
    line2: "Toronto, ON M5V 1K4",
    full: "482 King Street West, Toronto, ON M5V 1K4",
  },
  phone: "(416) 555-0142",
  phoneHref: "tel:+14165550142",
  email: "hello@whitetigerpizzacurry.com",
  hours: [
    { days: "Monday – Thursday", time: "11:30 AM – 10:00 PM" },
    { days: "Friday – Saturday", time: "11:30 AM – 11:30 PM" },
    { days: "Sunday", time: "12:00 PM – 9:00 PM" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=482+King+Street+West+Toronto+ON&output=embed",
  mapDirectionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=482+King+Street+West+Toronto+ON",
  social: [
    { label: "Instagram", id: "instagram", href: "https://instagram.com" },
    { label: "Facebook", id: "facebook", href: "https://facebook.com" },
    { label: "TikTok", id: "tiktok", href: "https://tiktok.com" },
  ],
  orderOnlineHref: "/menu",
} as const;
