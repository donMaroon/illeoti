import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Topbar from "../top-bar/Topbar";
import OrderTabs from "./components/OrderTabs";
import { useState } from "react";
import OrderCompleted from "./OrderCompleted";
import OrderActive from "./OrderActive";
import { useQuery } from "@tanstack/react-query";
import { orderService } from "../../../services/order.service";
import { useAuthStore } from "../../../store/auth.store";
import type { Order } from "../../../types";

const ACTIVE_STATUSES = new Set([
  "SUBMITTED", "CONFIRMED", "AWAITING_PAYMENT", "PAID",
  "PROCESSING", "SHIPPED", "ON_ITS_WAY", "OUT_FOR_DELIVERY", "PENDING",
]);

export default function Orders() {
  const [activeTab, setActiveTab] = useState("Active");
  const isAuthenticated = useAuthStore((s) => Boolean(s.accessToken));

  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => orderService.listOrders(1, 100),
    enabled: isAuthenticated,
  });

  const allOrders: Order[] = data?.data ?? [];
  const activeOrders = allOrders.filter((o) => ACTIVE_STATUSES.has(o.status));
  const completedOrders = allOrders.filter((o) => !ACTIVE_STATUSES.has(o.status));

  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto py-10">
        <Topbar />

        <OrderTabs
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          activeCount={activeOrders.length}
          completedCount={completedOrders.length}
        />

        {activeTab === "Active" && (
          <OrderActive orders={activeOrders} isLoading={isLoading} />
        )}

        {activeTab === "Completed" && (
          <OrderCompleted orders={completedOrders} isLoading={isLoading} />
        )}

        <div className="text-sm border-[#DEDEDE] border-t pt-5 text-primary mt-10 space-x-4">
          <a href="#">Refund Policy</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
