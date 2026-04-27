import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Lovelyred from "../../assets/icons/lovelyred";
import Button from "../btns/Button";
import type { CartItem } from "../../types";
import { effectivePrice, formatNGN, primaryImage } from "../../lib/format";

interface ProductCardCartProps {
  /** Legacy prop kept for backward compatibility */
  i?: number;
  /** Real cart item from API */
  item?: CartItem;
  onRemove?: (productId: string) => void;
  onUpdateQuantity?: (productId: string, quantity: number) => void;
  onToggleWishlist?: (productId: string) => void;
}

const ProductCardCart = ({
  i,
  item,
  onRemove,
  onUpdateQuantity,
  onToggleWishlist,
}: ProductCardCartProps) => {
  const name = item?.product?.name ?? "Tanqueray London Dry Gin";
  const category = item?.product
    ? (item.product as { category?: { name?: string } }).category?.name ?? "Product"
    : "Gin";
  const image = item?.product?.images
    ? primaryImage(item.product.images, ImagesAndIcons.furasgnBottle)
    : ImagesAndIcons.furasgnBottle;
  const price = item?.product ? effectivePrice(item.product) : 35000;
  const quantity = item?.quantity ?? 1;
  const productId = item?.productId;

  return (
    <div key={i ?? item?.id}>
      <div className="flex gap-8 items-center">
        <img className="w-55 h-55 rounded-3xl" src={image} alt={name} />
        <div className="flex items-start flex-auto justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-2xl leading-8 text-black font-bold max-w-59">{name}</p>
            <p className="text-xl font-normal text-[#585858]">Category: {category}</p>
            <div className="flex items-center gap-4">
              <button
                className="w-8 h-8 rounded-full overflow-hidden"
                onClick={() => productId && onToggleWishlist?.(productId)}
              >
                <Lovelyred width="32" height="32" rx="16" />
              </button>
              <button onClick={() => productId && onRemove?.(productId)}>
                <img src={ImagesAndIcons.trashSm} alt="Remove" />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-42">
                <Button
                  type="red"
                  label="Add To Cart"
                  className="py-3 text-base rounded-[55px]"
                />
              </div>
              <div className="bg-[#F4EEEE] rounded-[55px] px-4 py-2 flex gap-2 font-semibold text-2xl">
                <button
                  onClick={() =>
                    productId &&
                    quantity > 1 &&
                    onUpdateQuantity?.(productId, quantity - 1)
                  }
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() =>
                    productId && onUpdateQuantity?.(productId, quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <h4 className="text-2xl leading-8 text-black font-normal">
            {formatNGN(price)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
