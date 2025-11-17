import { useState } from "react";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";

interface SmallCardCarttyp {
  isCart: boolean;
}

const SmallCardCart = ({ isCart }: SmallCardCarttyp) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex items-center gap-4 pb-4 border-b border-b-[#D8D8D8]">
      <img
        className="w-21 h-[90px]"
        src={ImagesAndIcons.furasgnBottle}
        alt=""
      />
      <div>
        <h4 className="text-base font-normal ">
          Art De Vivre, Blanc, Gerard Bertrand Dry White Wine
        </h4>
        <p className="text-xs text-[#9B9B9B] font-normal">Quantity:0</p>
        <div className="flex items-center justify-between">
          <p className="text-base font-bold">N35,000</p>
          <div className="flex items-center gap-3">
            {isCart ? (
              <button onClick={() => setLiked(!liked)}>
                <img
                  src={
                    liked
                      ? ImagesAndIcons.lovelySmFilled
                      : ImagesAndIcons.lovelySmOutlined
                  }
                  alt=""
                />
              </button>
            ) : (
              <div className="flex items-center">
                <p
                  className={`text-primary transition-opacity duration-300 text-xs font-normal ${
                    liked ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Added to cart
                </p>
                <button onClick={() => setLiked(!liked)}>
                  <img
                    src={
                      liked
                        ? ImagesAndIcons.cartSmFilled
                        : ImagesAndIcons.cartSmOutlined
                    }
                    alt=""
                  />
                </button>
              </div>
            )}
            <button>
              <img src={ImagesAndIcons.trashSm} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCardCart;
