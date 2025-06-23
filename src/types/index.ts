export type Product = {
  id: number;
  img: string;
  name: string;
  price: number;
  size: string;
  originalPrice: number;
  color: string; // ✅ now a color name (e.g., "Blue")
  soldOut: number | string; // ✅ union type (correct usage!)
};

export type CartItemType = Product & {
  quantity: number;
};
