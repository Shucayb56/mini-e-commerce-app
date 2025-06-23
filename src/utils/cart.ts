import type { CartItemType } from "../types";

// export type Products = {
//   id: number;
//   img: string;
//   name: string;
//   price: number;
//   size: string;
//   originalPrice: number;
//   quantity: number;
// };


export function calculateRetailPrice(cartItems: CartItemType[]): number {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

export function calculateEstimatedPrice(retaiPrice: number, discount: number): number {
  return retaiPrice - discount;
}
