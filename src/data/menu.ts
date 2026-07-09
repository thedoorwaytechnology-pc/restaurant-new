export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "signature-pizzas",
    title: "Signature Pizzas",
    description: "Original recipes born in our own kitchen — the ones that built our name.",
    items: [
      { name: "White Tiger Special", description: "Tandoori chicken, charred onion, cilantro-mint drizzle, mozzarella.", price: "$22", tags: ["Chef's Pick"] },
      { name: "Ember & Copper", description: "Spiced lamb sausage, roasted red pepper, smoked chili oil.", price: "$24", tags: ["Spicy"] },
      { name: "Saffron Fig", description: "Fig jam, prosciutto, saffron cream, arugula, aged parmesan.", price: "$23" },
      { name: "Paneer Tikka Pie", description: "Paneer tikka, bell pepper, red onion, mint chutney swirl.", price: "$21", tags: ["Vegetarian"] },
      { name: "Smoked Tandoor Meat", description: "Tandoori beef, pickled onion, garlic naan crust, curry oil.", price: "$25", tags: ["Chef's Pick"] },
    ],
  },
  {
    id: "traditional-pizzas",
    title: "Traditional Pizzas",
    description: "The classics, made the slow way — hand-stretched dough, wood-fired heat.",
    items: [
      { name: "Margherita", description: "San Marzano tomato, fresh mozzarella, basil, olive oil.", price: "$18", tags: ["Vegetarian"] },
      { name: "Pepperoni", description: "Double pepperoni, mozzarella, San Marzano tomato sauce.", price: "$19" },
      { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, aged parmesan.", price: "$20", tags: ["Vegetarian"] },
      { name: "Prosciutto & Arugula", description: "Prosciutto di Parma, arugula, shaved parmesan, olive oil.", price: "$22" },
      { name: "Vegetariana", description: "Zucchini, roasted pepper, mushroom, red onion, olives.", price: "$19", tags: ["Vegetarian"] },
    ],
  },
  {
    id: "indian-curries",
    title: "Indian Curries",
    description: "Slow-simmered, hand-ground spice — recipes passed down, not shortcuts taken.",
    items: [
      { name: "Butter Chicken", description: "Tandoori chicken in a velvet tomato-butter gravy.", price: "$21", tags: ["Chef's Pick"] },
      { name: "Lamb Rogan Josh", description: "Kashmiri chili, slow-braised lamb, aromatic whole spice.", price: "$24", tags: ["Spicy"] },
      { name: "Chicken Vindaloo", description: "Goan-style, vinegar-chili heat, potato.", price: "$22", tags: ["Spicy"] },
      { name: "Paneer Makhani", description: "House paneer in a rich tomato-cashew gravy.", price: "$20", tags: ["Vegetarian"] },
      { name: "Dal Tadka", description: "Yellow lentils, cumin-garlic tempering, ghee.", price: "$17", tags: ["Vegetarian"] },
      { name: "Goat Curry", description: "Bone-in goat, black cardamom, slow braise.", price: "$26" },
    ],
  },
  {
    id: "tandoori",
    title: "Tandoori",
    description: "Fired in a traditional clay tandoor for smoke, char, and depth.",
    items: [
      { name: "Tandoori Chicken (Half)", description: "Yogurt-marinated, char-grilled, served with mint chutney.", price: "$19" },
      { name: "Seekh Kebab", description: "Spiced minced lamb skewers, charred over open flame.", price: "$20", tags: ["Spicy"] },
      { name: "Tandoori Prawns", description: "Jumbo prawns, Kashmiri chili marinade, lemon.", price: "$26" },
      { name: "Paneer Tikka", description: "Charred paneer, bell pepper, onion, tikka masala rub.", price: "$19", tags: ["Vegetarian"] },
      { name: "Tandoori Platter", description: "Chicken, seekh kebab, paneer tikka, mint chutney — built to share.", price: "$38", tags: ["Chef's Pick"] },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    description: "Small plates to start the table off right.",
    items: [
      { name: "Vegetable Samosas", description: "Spiced potato and pea, crisp pastry, tamarind chutney.", price: "$9", tags: ["Vegetarian"] },
      { name: "Chicken 65", description: "Crisp fried chicken, curry leaf, chili.", price: "$14", tags: ["Spicy"] },
      { name: "Garlic Naan Bites", description: "Torn naan, garlic butter, nigella seed.", price: "$8", tags: ["Vegetarian"] },
      { name: "Onion Bhaji", description: "Crisp onion fritters, mint yogurt.", price: "$10", tags: ["Vegetarian"] },
      { name: "Calamari Fritti", description: "Lightly fried calamari, lemon, chili aioli.", price: "$16" },
    ],
  },
  {
    id: "momos",
    title: "Momos",
    description: "Steamed or pan-fried dumplings, served with house chili sauce.",
    items: [
      { name: "Chicken Momos", description: "Steamed chicken dumplings, sesame chili oil.", price: "$13" },
      { name: "Vegetable Momos", description: "Cabbage, carrot, and onion, steamed.", price: "$12", tags: ["Vegetarian"] },
      { name: "Pan-Fried Pork Momos", description: "Crisp-bottomed, spiced pork filling.", price: "$14" },
      { name: "Paneer Momos", description: "House paneer, herb filling, chili garlic dip.", price: "$13", tags: ["Vegetarian"] },
    ],
  },
  {
    id: "rice-biryani",
    title: "Rice & Biryani",
    description: "Layered, slow-cooked, and finished with saffron.",
    items: [
      { name: "Chicken Biryani", description: "Basmati, saffron, fried onion, mint, boiled egg.", price: "$21", tags: ["Chef's Pick"] },
      { name: "Lamb Biryani", description: "Slow-braised lamb, whole spice, saffron rice.", price: "$24" },
      { name: "Vegetable Biryani", description: "Seasonal vegetables, cashew, saffron basmati.", price: "$18", tags: ["Vegetarian"] },
      { name: "Jeera Rice", description: "Basmati tempered with cumin and ghee.", price: "$8", tags: ["Vegetarian"] },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    description: "Full-flavored, meat-free dishes built with the same care as everything else.",
    items: [
      { name: "Baingan Bharta", description: "Fire-roasted eggplant, tomato, onion, hand-ground spice.", price: "$17", tags: ["Vegetarian"] },
      { name: "Chana Masala", description: "Chickpeas, tomato, garam masala.", price: "$16", tags: ["Vegetarian"] },
      { name: "Palak Paneer", description: "House paneer in a silky spinach gravy.", price: "$19", tags: ["Vegetarian"] },
      { name: "Vegetable Korma", description: "Mixed vegetables in a mild cashew-coconut gravy.", price: "$18", tags: ["Vegetarian"] },
    ],
  },
  {
    id: "kids-menu",
    title: "Kids Menu",
    description: "Smaller portions, gentler spice, built for younger guests.",
    items: [
      { name: "Kids Cheese Pizza", description: "Mozzarella, San Marzano tomato, personal size.", price: "$11", tags: ["Vegetarian"] },
      { name: "Mild Butter Chicken & Rice", description: "A gentler take on our signature curry.", price: "$12" },
      { name: "Chicken Tenders & Fries", description: "Crisp tenders, hand-cut fries.", price: "$11" },
      { name: "Mac & Cheese", description: "Classic, creamy, comfort-first.", price: "$10", tags: ["Vegetarian"] },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "A sweet close to the meal, made in-house.",
    items: [
      { name: "Gulab Jamun", description: "Warm milk dumplings in cardamom-rose syrup.", price: "$8", tags: ["Vegetarian"] },
      { name: "Pistachio Kulfi", description: "Traditional Indian ice cream, pistachio, cardamom.", price: "$9", tags: ["Vegetarian"] },
      { name: "Tiramisu", description: "Espresso-soaked ladyfingers, mascarpone.", price: "$10", tags: ["Vegetarian"] },
      { name: "Chocolate Fondant", description: "Warm chocolate cake, molten center, vanilla gelato.", price: "$11", tags: ["Vegetarian"] },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    description: "Something to sip alongside the meal.",
    items: [
      { name: "Mango Lassi", description: "Yogurt, mango, cardamom.", price: "$7", tags: ["Vegetarian"] },
      { name: "Masala Chai", description: "Slow-steeped black tea, whole spice, milk.", price: "$5", tags: ["Vegetarian"] },
      { name: "House Red or White Wine", description: "Ask your server for today's selection.", price: "$12" },
      { name: "Craft Cocktail", description: "Rotating seasonal cocktail — ask your server.", price: "$15" },
      { name: "Sparkling Lime Soda", description: "Fresh lime, mint, soda.", price: "$6", tags: ["Vegetarian"] },
    ],
  },
];
