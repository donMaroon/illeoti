export function formatNGN(amount: number | string | null | undefined): string {
  if (amount == null) return "₦0.00";
  return `₦${Number(amount).toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/** Returns the effective selling price (discounted if active, otherwise regular). */
export function effectivePrice(product: {
  price: string | number;
  discountedPrice?: string | number | null;
  discountStart?: string | null;
  discountEnd?: string | null;
}): number {
  const now = Date.now();
  if (
    product.discountedPrice != null &&
    product.discountStart != null &&
    product.discountEnd != null &&
    now >= new Date(product.discountStart).getTime() &&
    now <= new Date(product.discountEnd).getTime()
  ) {
    return Number(product.discountedPrice);
  }
  return Number(product.price);
}

export function primaryImage(
  images?: { url: string; isPrimary: boolean }[],
  fallback?: string,
): string {
  if (!images?.length) return fallback ?? "";
  return images.find((i) => i.isPrimary)?.url ?? images[0]?.url ?? fallback ?? "";
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
