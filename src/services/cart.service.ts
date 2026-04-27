import api from "../lib/api";
import type { Cart } from "../types";

const BASE = "/orderservice/v1.0/rest/api/app/cart";

export const cartService = {
  getCart: (): Promise<Cart> => api.get(BASE).then((r) => r.data),

  addToCart: (productId: string, quantity: number): Promise<Cart> =>
    api.put(`${BASE}/items`, { productId, quantity }).then((r) => r.data),

  updateCartItem: (productId: string, quantity: number): Promise<Cart> =>
    api.put(`${BASE}/items`, { productId, quantity }).then((r) => r.data),

  removeFromCart: (productId: string): Promise<Cart> =>
    api.delete(`${BASE}/items/${productId}`).then((r) => r.data),
};
