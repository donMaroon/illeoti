import api from "../lib/api";
import type { Category, PaginatedResponse, Product, Review } from "../types";

const BASE = "/productservice/v1.0/rest/api/app";

export interface ProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
  sortBy?: string;
}

export const productService = {
  getProducts: (params?: ProductsParams): Promise<PaginatedResponse<Product>> =>
    api.get(`${BASE}/products`, { params }).then((r) => r.data),

  getProduct: (id: string): Promise<Product> =>
    api.get(`${BASE}/products/${id}`).then((r) => r.data),

  getFeaturedProducts: (): Promise<PaginatedResponse<Product>> =>
    api.get(`${BASE}/products/featured`).then((r) => r.data),

  getCategories: (): Promise<Category[]> =>
    api.get(`${BASE}/categories`).then((r) => r.data),

  getReviews: (
    productId: string,
    page = 1,
  ): Promise<PaginatedResponse<Review>> =>
    api
      .get(`${BASE}/products/${productId}/reviews`, { params: { page } })
      .then((r) => r.data),

  submitReview: (
    productId: string,
    data: { rating: number; body: string },
  ): Promise<Review> =>
    api.post(`${BASE}/products/${productId}/reviews`, data).then((r) => r.data),
};
