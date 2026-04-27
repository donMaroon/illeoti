import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { TimelineStep } from "./components/OrderStatusTimeline";
import RightHandSideOrderDetail from "./components/RightHandSide";
import { routes } from "../../../shared/routes/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { orderService } from "../../../services/order.service";
import { cartService } from "../../../services/cart.service";
import { useCartStore } from "../../../store/cart.store";
import { message } from "antd";

const STATUS_ORDER = [
  "SUBMITTED",
  "CONFIRMED",
  "PAID",
  "PROCESSING",
  "ON_ITS_WAY",
  "OUT_FOR_DELIVERY",
  "SHIPPED",
  "DELIVERED",
];

const STATUS_LABEL: Record<string, string> = {
  SUBMITTED:        "Order Submitted",
  AWAITING_PAYMENT: "Awaiting Payment",
  CONFIRMED:        "Order Confirmed",
  PAID:             "Payment Received",
  PROCESSING:       "Processing",
  ON_ITS_WAY:       "Order on its way",
  OUT_FOR_DELIVERY: "Out for delivery",
  SHIPPED:          "Shipped",
  DELIVERED:        "Delivered",
  CANCELLED:        "Cancelled",
  REFUNDED:         "Refunded",
};

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const setCart = useCartStore((s) => s.setCart);

  const { data: order, isLoading, isError } = useQuery({
    queryKey: ["order", id],
    queryFn: () => orderService.getOrder(id!),
    enabled: !!id,
  });

  const buyAgainMutation = useMutation({
    mutationFn: async () => {
      if (!order) return;
      let lastCart = null;
      for (const item of order.items) {
        lastCart = await cartService.addToCart(item.productId, item.quantity);
      }
      return lastCart;
    },
    onSuccess: (cart) => {
      if (cart) setCart(cart);
      void qc.invalidateQueries({ queryKey: ["cart"] });
      void message.success("Items added to cart");
      navigate(routes.cart);
    },
    onError: () => void message.error("Could not add items to cart"),
  });

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="max-w-285 mx-auto py-10">
          <div className="w-full h-96 rounded-3xl bg-[#F4EEEE] animate-pulse" />
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div>
        <Navbar />
        <div className="max-w-285 mx-auto py-20 text-center text-red-600">
          Failed to load order.
        </div>
        <Footer />
      </div>
    );
  }

  // Build timeline from statusHistory + fill in remaining statuses
  const historyMap = new Map(
    (order.statusHistory ?? []).map((h) => [h.status, h])
  );

  // Determine which statuses to show in the timeline
  const timelineStatuses = order.status === "CANCELLED" || order.status === "REFUNDED"
    ? [...STATUS_ORDER.slice(0, STATUS_ORDER.indexOf("DELIVERED") + 1), order.status]
    : STATUS_ORDER;

  const timelineData = timelineStatuses
    .map((status) => {
      const hist = historyMap.get(status);
      const label = STATUS_LABEL[status] ?? status;
      const isUpdated = !!hist || status === order.status ||
        STATUS_ORDER.indexOf(status) <= STATUS_ORDER.indexOf(order.status);
      const date = hist
        ? new Date(hist.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        : "";
      return {
        title: label,
        note: hist?.note ?? "",
        date: date ? `Updated ${date}` : "",
        updated: isUpdated,
      };
    })
    .reverse();

  const orderDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-285 mx-auto py-10">
        <div className="w-full flex mb-7 items-center justify-between">
          <div onClick={() => navigate(routes.orders)} className="flex cursor-pointer items-start gap-3">
            <p className="mt-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1992 8.99922L1.79922 8.99922M1.79922 8.99922L8.09922 15.2992M1.79922 8.99922L8.09922 2.69922"
                  stroke="black"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <p className="text-[#707070] font-normal text-sm">
              <span className="text-2xl font-normal text-black">
                Order #{order.orderNumber}
              </span>
              <br /> {orderDate}
            </p>
          </div>
          <button
            className="px-12.5 py-4 bg-transparent text-primary text-sm font-normal rounded-[55px] border border-[#DEDEDE] hover:bg-[#F4EEEE] transition-all disabled:opacity-50"
            onClick={() => buyAgainMutation.mutate()}
            disabled={buyAgainMutation.isPending}
          >
            {buyAgainMutation.isPending ? "Adding..." : "Buy again"}
          </button>
        </div>

        <div className="flex items-start gap-5.5">
          <div className="max-w-162">
            <div className="rounded-3xl w-full bg-[#F5F5F5] p-5">
              <h4 className="text-xl font-semibold">
                {order.status === "DELIVERED" ? `Arrived ${orderDate}` : STATUS_LABEL[order.status] ?? order.status}
              </h4>
              {order.paystackRef && (
                <p className="text-sm font-normal text-black">
                  Ref: <span className="text-primary">{order.paystackRef}</span>
                </p>
              )}
              <TimelineStep data={timelineData} />
              <p className="text-sm font-normal mt-5 text-black">
                Haven't received your delivery?
                <span className="text-primary"> Let us know</span>
              </p>
            </div>

            <div className="rounded-3xl w-full bg-[#F5F5F5] mt-6.5 p-5">
              <h4 className="text-base font-normal mb-5.5">Order Details</h4>
              <div className="flex justify-between flex-row-reverse">
                <div className="w-1/2">
                  <h5 className="text-[#707070] mb-2.5 text-sm font-normal">Payment</h5>
                  <p className="text-sm font-normal">
                    {order.paymentStatus} {order.paidAt ? `— paid ${new Date(order.paidAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}` : ""}
                  </p>
                </div>
                <div className="w-1/2">
                  <h5 className="text-[#707070] mb-2.5 text-sm font-normal">Contact information</h5>
                  <p className="text-sm font-normal">
                    {order.shippingName} <br />
                    {order.shippingPhone}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div className="w-1/2">
                  <h5 className="text-[#707070] mb-2.5 text-sm font-normal">Shipping address</h5>
                  <p className="text-sm w-2/3 font-normal">
                    {order.shippingName} {order.shippingAddress}, {order.shippingCity}{" "}
                    {order.shippingState} {order.shippingZip ?? ""} {order.shippingCountry}
                  </p>
                </div>
                <div className="w-1/2">
                  <h5 className="text-[#707070] mb-2.5 text-sm font-normal">Billing address</h5>
                  <p className="text-sm w-2/3 font-normal">
                    {order.shippingName} {order.shippingAddress}, {order.shippingCity}{" "}
                    {order.shippingState} {order.shippingZip ?? ""} {order.shippingCountry}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <RightHandSideOrderDetail
            items={order.items}
            subtotal={order.subtotal}
            total={order.total}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderDetails;
