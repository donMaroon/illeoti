import { create } from "zustand";
import type { CartItem } from "../types";

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  setCart: (cart: { items: CartItem[] }) => void;
  clearCart: () => void;
}

function computeTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    const price = Number(item.product?.price ?? 0);
    return sum + price * item.quantity;
  }, 0);
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  itemCount: 0,
  setCart: (cart) =>
    set({
      items: cart.items,
      total: computeTotal(cart.items),
      itemCount: cart.items.reduce((s, i) => s + i.quantity, 0),
    }),
  clearCart: () => set({ items: [], total: 0, itemCount: 0 }),
}));
