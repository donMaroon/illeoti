import api from "../lib/api";
import type { Order, PaginatedResponse } from "../types";

const BASE = "/orderservice/v1.0/rest/api/app/orders";
const DISCOUNT_BASE = "/orderservice/v1.0/rest/api/app/discounts";

export interface CreateOrderPayload {
  addressId: string;
  discountCode?: string;
  giftBoxId?: string;
  giftMessage?: string;
}

export interface ValidateDiscountResponse {
  id: string;
  code: string;
  discountType: "PERCENTAGE" | "FIXED";
  value: number;
  minOrderAmount?: number | null;
}

export const orderService = {
  listOrders: (page = 1, limit = 20): Promise<PaginatedResponse<Order>> =>
    api.get(BASE, { params: { page, limit } }).then((r) => r.data),

  getOrder: (id: string): Promise<Order> =>
    api.get(`${BASE}/${id}`).then((r) => r.data),

  createOrder: (data: CreateOrderPayload): Promise<Order> =>
    api.post(BASE, data).then((r) => r.data),

  initializePayment: (orderId: string): Promise<{ authorizationUrl: string; reference: string }> =>
    api.post(`${BASE}/${orderId}/pay`).then((r) => r.data),

  validateDiscount: (code: string): Promise<ValidateDiscountResponse> =>
    api.post(`${DISCOUNT_BASE}/validate`, { code }).then((r) => r.data),
};
