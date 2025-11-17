import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Lovelyred from "../../assets/icons/lovelyred";
import Button from "../btns/Button";

interface ProductCardCarttyp {
  i: number;
}

const ProductCardCart = ({ i }: ProductCardCarttyp) => {
  return (
    <div key={i}>
      <div className="flex gap-8 items-center ">
        <img
          className="w-55 h-55 rounded-3xl"
          src={ImagesAndIcons.furasgnBottle}
          alt=""
        />
        <div className=" flex items-start flex-auto justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-2xl leading-8 text-black font-bold max-w-59">
              Tanqueray London Dry Gin
            </p>
            <p className="text-xl font-normal text-[#585858]">Category: Gin</p>
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 rounded-full overflow-hidden">
                <Lovelyred width="32" height="32" rx="16" />
              </button>
              <button>
                <img src={ImagesAndIcons.trashSm} alt="" />
              </button>
            </div>
            <div className="flex gap-4 items-center">
                            {/* <div className="w-42">
                <Button
                  type="red"
                  label="Add To Cart"
                  className="py-3 text-base rounded-[55px]"
                  // icon={ImagesAndIcons.c}
                />
              </div> */}
              <div className="w-42">
                <Button
                  type="red"
                  label="Add To Cart"
                  className="py-3 text-base rounded-[55px]"
                />
              </div>
              <div className="bg-[#F4EEEE] rounded-[55px] px-4 py-2 flex gap-2 font-semibold text-2xl ">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
          <h4 className="text-2xl leading-8 text-black font-normal">N35,000</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
