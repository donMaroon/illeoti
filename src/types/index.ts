export interface ProductImage {
  id: string;
  url: string;
  isPrimary: boolean;
  sortOrder: number;
}

export interface ProductTag {
  id: string;
  tag: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string | null;
  isActive: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  categoryId: string;
  category: Category;
  price: string | number;
  discountedPrice?: string | number | null;
  discountStart?: string | null;
  discountEnd?: string | null;
  stockQuantity: number;
  allowBackorders: boolean;
  stockStatus: "IN_STOCK" | "OUT_OF_STOCK";
  isPublished: boolean;
  isFeatured: boolean;
  images: ProductImage[];
  tags: ProductTag[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  user: { id: string; firstName?: string | null; lastName?: string | null; email: string };
  rating: number;
  body: string;
  createdAt: string;
}

export interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  product: Pick<Product, "id" | "name" | "slug" | "price" | "discountedPrice" | "discountStart" | "discountEnd" | "stockStatus" | "stockQuantity" | "allowBackorders" | "images">;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
}

export interface WishlistItem {
  id: string;
  wishlistId: string;
  productId: string;
  product: Pick<Product, "id" | "name" | "slug" | "price" | "discountedPrice" | "discountStart" | "discountEnd" | "stockStatus" | "images">;
  createdAt: string;
}

export interface Wishlist {
  id: string;
  userId: string;
  items: WishlistItem[];
}

export interface Address {
  id: string;
  userId: string;
  type: "SHIPPING" | "BILLING";
  fullName: string;
  address: string;
  city: string;
  state: string;
  zip?: string | null;
  country: string;
  phone: string;
  isDefault: boolean;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
  product?: { id: string; name: string; slug: string; images?: ProductImage[] };
}

export interface OrderStatusHistory {
  id: string;
  status: string;
  note?: string | null;
  changedBy?: string | null;
  createdAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  paymentStatus: string;
  subtotal: number;
  discountAmount: number;
  total: number;
  discountCodeId?: string | null;
  discountCode?: { code: string; discountType: string; value: number } | null;
  giftBoxId?: string | null;
  giftBox?: { id: string; name: string; price: number } | null;
  giftMessage?: string | null;
  shippingName: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZip?: string | null;
  shippingCountry: string;
  shippingPhone: string;
  paystackRef?: string | null;
  paidAt?: string | null;
  createdAt: string;
  updatedAt: string;
  statusHistory: OrderStatusHistory[];
}

export type OrderStatus =
  | "PENDING"
  | "AWAITING_PAYMENT"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "REFUNDED"
  | "SUBMITTED"
  | "CONFIRMED";

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
