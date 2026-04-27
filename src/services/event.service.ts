import api from "../lib/api";

export type BookEventPayload = {
  serviceType: "CORPORATE" | "BULK";
  deliveryMethod: string;
  address: string;
  eventDate?: string;
  guestCount?: number;
  needsBartender: boolean;
  needsMenuCuration: boolean;
  notes?: string;
  fileUrl?: string;
  guestEmail?: string;
  guestName?: string;
};

const BASE = "/orderservice/v1.0/rest/api/app";

export async function bookEvent(data: BookEventPayload) {
  const { data: res } = await api.post(`${BASE}/events/book`, data);
  return res;
}
