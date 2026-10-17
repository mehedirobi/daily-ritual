
export const menuCategories = [
  "All",
  "Coffee",
  "Cold Coffee",
  "Tea",
  "Bakery",
];

export const menuItems = [
  {
    id: 1,
    name: "Signature Latte",
    category: "Coffee",
    price: 280,
    description: "Smooth espresso with silky steamed milk.",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Classic Cappuccino",
    category: "Coffee",
    price: 250,
    description: "Rich espresso topped with delicate milk foam.",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Caramel Cold Brew",
    category: "Cold Coffee",
    price: 320,
    description: "Slow-steeped coffee with a caramel finish.",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Iced Americano",
    category: "Cold Coffee",
    price: 230,
    description: "Bold espresso, chilled and refreshingly simple.",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Masala Chai",
    category: "Tea",
    price: 150,
    description: "Black tea simmered with warming spices.",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Butter Croissant",
    category: "Bakery",
    price: 180,
    description: "Flaky, golden layers baked fresh every morning.",
    tag: "Fresh baked",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
  },
];

export const formatPrice = (price) =>
  `৳${price.toLocaleString("en-BD")}`;
