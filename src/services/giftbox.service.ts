import api from "../lib/api";

export type GiftBoxLineItem = { productId: string; quantity: number };

export type CreateGiftBoxPayload = {
  items: GiftBoxLineItem[];
  personalMessage?: string;
};

const BASE = "/orderservice/v1.0/rest/api/app";

export async function createGiftBox(data: CreateGiftBoxPayload) {
  const { data: res } = await api.post(`${BASE}/gift-box`, data);
  return res;
}

export async function getGiftBoxes() {
  const { data } = await api.get(`${BASE}/gift-boxes`);
  return data;
}
