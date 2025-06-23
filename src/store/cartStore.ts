import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItemType, Product } from "../types";

type CartState = {
  cartItem: CartItemType[];
  addToCart: (product: Product) => void;
  handleQuantityChange: (id: number, newQty: number) => void;
  onDelete: (id: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItem: [],

      // Add to cart logic
      addToCart: (product) => {
        const existing = get().cartItem.find((item) => item.id === product.id);
        let updatedCart;
        if (existing) {
          updatedCart = get().cartItem.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedCart = [...get().cartItem, { ...product, quantity: 1 }];
        }
        set({ cartItem: updatedCart });
      },

      // Quantity change logic
      handleQuantityChange: (id, newQty) => {
        if (newQty === 0) {
          // Remove item
          set({
            cartItem: get().cartItem.filter((item) => item.id !== id),
          });
        } else {
          // Update item quantity
          set({
            cartItem: get().cartItem.map((item) =>
              item.id === id ? { ...item, quantity: newQty } : item
            ),
          });
        }
      },
      onDelete: (id) => {
        set({
          cartItem: get().cartItem.filter((item) => item.id !== id),
        });
      },
    }),
    {
      name: "my-cart-storage", // 👈 persist key
    }
  )
);
