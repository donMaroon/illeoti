import api from "../lib/api";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

const BOOK = "/orderservice/v1.0/rest/api/app/events/book";

/** Uses public event booking as a stand-in until a dedicated contact endpoint exists. */
export async function submitContact(data: ContactPayload) {
  const notes = [
    `Contact form`,
    `From: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : "",
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n")
    .slice(0, 4900);

  const { data: res } = await api.post(BOOK, {
    serviceType: "CORPORATE",
    deliveryMethod: "N/A (contact inquiry)",
    address: "N/A (contact inquiry)",
    needsBartender: false,
    needsMenuCuration: false,
    notes,
    guestEmail: data.email,
    guestName: data.name,
  });
  return res;
}
