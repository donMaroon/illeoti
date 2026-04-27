import api from "../lib/api";
import type { Wishlist } from "../types";

const BASE = "/orderservice/v1.0/rest/api/app/wishlist";

export const wishlistService = {
  getWishlist: (): Promise<Wishlist> => api.get(BASE).then((r) => r.data),

  toggleWishlist: (productId: string): Promise<Wishlist> =>
    api.post(`${BASE}/toggle`, { productId }).then((r) => r.data),
};
