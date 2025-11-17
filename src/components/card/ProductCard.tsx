import { Rate } from "antd";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import { useNavigate } from "react-router-dom";
import { routes } from "../../shared/routes/routes";

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${routes.products}/2`)} className="border border-transparent lg:hover:border-[#80011D] lg:hover:bg-[#F4EEEE] p-2 rounded-3xl transition-all duration-300 ease-in-out">
      <div
        style={{
          backgroundImage: `url(${ImagesAndIcons.furasgnBottle})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="lg:w-[246px] lg:h-[306px] w-40 h-49  mb-3 rounded-2xl"
      >
        <div className="p-2 flex items-center justify-end">
          <button>
            <img src={ImagesAndIcons.lovelyRed} alt="" />
          </button>
        </div>
      </div>
      <p className="text-sm lg:text-xl mb-0.5 font-medium text-black">
        Deanston 12 Year Old
      </p>
      <p className="text-[10px] lg:text-xs mb-0.5 text-[#585858] font-medium">
        70 Cl/46.3% ABV
      </p>
      <div className="mb-0.5 flex items-center gap-2">
        <Rate defaultValue={4} />
        <p className="text-[10px] lg:text-xs text-[#585858] font-medium">
          102 Reviews
        </p>
      </div>
      <p className="text-sm lg:text-xl mb-3 font-medium text-black">
        NGN 40,000.00
      </p>
      <div className="flex gap-2 items-center">
        <button className="text-xs text-white bg-primary rounded-[56px] px-6 lg:px-[50px] py-2 lg:py-4">
          Add To Cart
        </button>
        <button className="lg:h-12 h-8 w-8 lg:w-12 rounded-full flex justify-center items-center border border-[#80011D]">
          <img src={ImagesAndIcons.giftBox} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
