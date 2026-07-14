function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop`;
}

export type CuratedImage = {
  src: string;
  alt: string;
};

export const heroImage: CuratedImage = {
  src: "/hero/hero-table5.png",
  alt: "Dimly lit, warm interior of White Tiger Pizza & Curry with ambient candlelight",
};

export const heroDishImages = {
  pizza: {
    src: unsplash("1513104890138-7c749659a591"),
    alt: "Wood-fired pizza, fresh from the oven",
  },
  curry: {
    src: unsplash("1631452180519-c014fe946bc7"),
    alt: "Butter chicken curry in a copper bowl, with rice and naan",
  },
  naan: {
    src: unsplash("1565557623262-b51c2513a641"),
    alt: "Fresh-baked naan bread",
  },
  table: {
    src: unsplash("1684846100473-f08fc22f5286"),
    alt: "Close-up of a dark walnut wood dining table",
  },
} satisfies Record<string, CuratedImage>;

export const ourStoryImage: CuratedImage = {
  src: unsplash("1577219491135-ce391730fb2c"),
  alt: "Chef hand-crafting a dish in an open kitchen",
};

export const signatureDishImages: Record<string, CuratedImage> = {
  pizzas: {
    src: unsplash("1513104890138-7c749659a591"),
    alt: "Handcrafted wood-fired pizza fresh from the oven",
  },
  curries: {
    src: unsplash("1585937421612-70a008356fbe"),
    alt: "Rich, authentic Indian curry served in a copper bowl",
  },
  chefSpecials: {
    src: unsplash("1590947132387-155cc02f3212"),
    alt: "A fresh pizza, one of the chef's evolving seasonal specials",
  },
  freshIngredients: {
    src: unsplash("1775433205046-86e060feff06"),
    alt: "Sacks of vibrant whole spices at the market",
  },
  houseFavorites: {
    src: unsplash("1594007654729-407eedc4be65"),
    alt: "One of our most-ordered house favorites, fresh from the oven",
  },
};

export const cateringImage: CuratedImage = {
  src: unsplash("1778694277039-5cbf0b9a1fcf"),
  alt: "Guests gathered around a candlelit table for a private celebration",
};

export const visitUsImage: CuratedImage = {
  src: unsplash("1552566626-52f8b828add9"),
  alt: "Warm, moody dining room at White Tiger Pizza & Curry",
};

export const aboutImages = {
  story: {
    src: unsplash("1414235077428-338989a2e8c0"),
    alt: "Elegantly set fine-dining table in warm low light",
  },
  philosophy: {
    src: unsplash("1773067752070-e1d3923caf71"),
    alt: "Moody, low-lit restaurant kitchen at service",
  },
  passion: {
    src: unsplash("1601050690597-df0568f70950"),
    alt: "Crisp samosas, a favorite starter",
  },
  ingredients: {
    src: unsplash("1596040033229-a9821ebd058d"),
    alt: "Fresh garlic, tomatoes, and whole spices ready for the kitchen",
  },
  hospitality: {
    src: unsplash("1590846406792-0adc7f938f1d"),
    alt: "Warmly lit restaurant interior with intimate seating",
  },
  craftsmanship: {
    src: unsplash("1577219491135-ce391730fb2c"),
    alt: "Chef carefully preparing a signature dish",
  },
} satisfies Record<string, CuratedImage>;

export const galleryImages: (CuratedImage & {
  category: string;
  id: string;
})[] = [
  {
    id: "g1",
    category: "Signature Pizzas",
    src: unsplash("1513104890138-7c749659a591"),
    alt: "Wood-fired signature pizza fresh from the oven",
  },
  {
    id: "g2",
    category: "Curries",
    src: unsplash("1585937421612-70a008356fbe"),
    alt: "Authentic Indian curry in a copper serving bowl",
  },
  {
    id: "g3",
    category: "Restaurant Interiors",
    src: unsplash("1517248135467-4c7edcad34c4"),
    alt: "Moody, candlelit dining room interior",
  },
  {
    id: "g4",
    category: "Guests Dining",
    src: unsplash("1598284444079-ab715eed2b88"),
    alt: "Guests gathered around a long table for a wine dinner",
  },
  {
    id: "g5",
    category: "Fresh Ingredients",
    src: unsplash("1775433205046-86e060feff06"),
    alt: "Sacks of vibrant whole spices at the market",
  },
  {
    id: "g6",
    category: "Kitchen Craftsmanship",
    src: unsplash("1773067752070-e1d3923caf71"),
    alt: "Moody, low-lit restaurant kitchen at service",
  },
  {
    id: "g7",
    category: "Signature Pizzas",
    src: unsplash("1594007654729-407eedc4be65"),
    alt: "A whole pizza fresh from the oven, ready to slice",
  },
  {
    id: "g8",
    category: "Curries",
    src: unsplash("1631515243349-e0cb75fb8d3a"),
    alt: "Fragrant Indian dish, plated and ready to serve",
  },
  {
    id: "g9",
    category: "Restaurant Interiors",
    src: unsplash("1552566626-52f8b828add9"),
    alt: "Warm, low-lit dining room",
  },
  {
    id: "g10",
    category: "Lifestyle",
    src: unsplash("1778694277039-5cbf0b9a1fcf"),
    alt: "Guests gathered around a candlelit table for a private celebration",
  },
  {
    id: "g11",
    category: "Fresh Ingredients",
    src: unsplash("1596040033229-a9821ebd058d"),
    alt: "Fresh garlic, tomatoes, and whole spices ready for the kitchen",
  },
  {
    id: "g12",
    category: "Lifestyle",
    src: unsplash("1600891964599-f61ba0e24092"),
    alt: "A shared spread across the table",
  },
  {
    id: "g13",
    category: "Signature Pizzas",
    src: unsplash("1571066811602-716837d681de"),
    alt: "Pizza topped with fresh vegetables and herbs",
  },
  {
    id: "g14",
    category: "Kitchen Craftsmanship",
    src: unsplash("1577219491135-ce391730fb2c"),
    alt: "Chef carefully preparing a signature dish",
  },
  {
    id: "g15",
    category: "Restaurant Interiors",
    src: unsplash("1590846406792-0adc7f938f1d"),
    alt: "Intimate restaurant seating with ambient lighting",
  },
  {
    id: "g16",
    category: "Curries",
    src: unsplash("1772730064970-a7b2735c93b9"),
    alt: "Butter chicken curry with fresh naan bread",
  },
];

export const galleryCategories = [
  "All",
  "Signature Pizzas",
  "Curries",
  "Restaurant Interiors",
  "Guests Dining",
  "Fresh Ingredients",
  "Kitchen Craftsmanship",
  "Lifestyle",
] as const;
