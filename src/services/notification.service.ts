import api from "../lib/api";

const BASE = "/orderservice/v1.0/rest/api/app/notifications";

export type NotificationRow = {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

export type NotificationsPage = {
  data: NotificationRow[];
  total: number;
  page: number;
  limit: number;
  unreadCount: number;
};

export async function getNotifications(page = 1, limit = 20) {
  const { data } = await api.get<NotificationsPage>(BASE, {
    params: { page, limit },
  });
  return data;
}

export async function markAsRead(id: string) {
  const { data } = await api.patch(`${BASE}/${id}/read`);
  return data;
}

export async function markAllAsRead() {
  const { data } = await api.patch(`${BASE}/read-all`);
  return data;
}
