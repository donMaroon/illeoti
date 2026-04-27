import api from "../lib/api";

const BASE = "/membershipservice/v1.0/rest/api/app/membership";

export type MembershipPlan = {
  id: string;
  name: string;
  price: string | number;
  interval: string;
  perks: unknown;
  paystackPlanCode?: string | null;
};

export type SubscribeResponse = {
  authorizationUrl: string;
  reference: string;
};

export async function getPlans() {
  const { data } = await api.get<MembershipPlan[]>(`${BASE}/plans`);
  return data;
}

export async function getMembershipStatus() {
  const { data } = await api.get(`${BASE}/status`);
  return data as
    | {
        status: string;
        expiresAt?: string | null;
        plan?: MembershipPlan | null;
      }
    | { status: "NONE" };
}

export async function subscribeToPlan(planId: string) {
  const { data } = await api.post<{
    authorizationUrl?: string;
    authorization_url?: string;
    reference: string;
  }>(`${BASE}/subscribe`, { planId });
  const url = data.authorizationUrl ?? data.authorization_url;
  if (!url) {
    throw new Error("No payment URL returned from server.");
  }
  return { authorizationUrl: url, reference: data.reference };
}

export async function cancelMembership() {
  const { data } = await api.post(`${BASE}/cancel`);
  return data;
}
