import { Rate } from "antd";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../components/btns/Button";
import Lovelyred from "../../assets/icons/lovelyred";
import { useState } from "react";
import RightHandSideProductDetail from "./component/RightHand";
import ProductCardCart from "../../components/card/ProductCardCart";
import ProductCard from "../../components/card/ProductCard";
import RefundPolicy from "./component/RefundPolicy";
import ReviewsModal from "./component/ReviewsModal";

export default function ProductDetailsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    const handleCancelTwo = () => {
    setOpen(false);
  };
  const dataPage = [2, 3, 4];
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto">
        <p className="text-base text-black font-semibold mt-10">
          Home {">"} Products {">"} Art De Vivre{" "}
        </p>
        <div className=" py-9 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <RightHandSideProductDetail />
            <p className="hidden lg:block text-3xl text-black font-bold mt-9 mb-6">
              You may also like
            </p>
            <div className="hidden lg:flex flex-col gap-6">
              {[1, 2, 3].map((i) => (
                <ProductCardCart i={i} />
              ))}
            </div>
            <div className="mt-8 hidden lg:block">
              <Button type="lightRed" label="View More" />
            </div>
          </div>
          {/* RIGHT SIDE - PRODUCT INFO */}
          <div className="w-[90%] mx-auto lg:max-w-125">
            <div className="flex items-start justify-between">
              <h2 className="text-[40px] leading-12 font-bold max-w-107 text-gray-900 ">
                Art De Vivre, Blanc, Gerard Bertrand Dry White Wine
              </h2>
              <button>
                <Lovelyred width="56" height="56" rx="28" />
              </button>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Rate disabled defaultValue={5} />
              <span className="text-gray-600 text-sm">(148)</span>
            </div>

            <p className="text-3xl font-semibold text-black mt-3">₦35,000.00</p>
            <p className="text-black text-xl font-semibold mt-1">
              Product Category: Rum
            </p>

            {/* Quantity + Buttons */}
            <div className="mt-9 flex items-center justify-between">
              <p className="font-semibold text-2xl text-[#585858]">Quantity</p>
              <div className="bg-[#F4EEEE] rounded-[55px] px-4 py-2 flex gap-2 font-semibold text-2xl ">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <Button
              type="red"
              label="Buy Now"
              className="py-6 mt-9 text-base rounded-[55px]"
            />
            {/* Secondary Buttons */}
            <div className="mt-4 flex gap-4">
              <Button type="outlineRed" className="py-6" label="Add To Cart" />
              <Button
                type="outlineRed"
                className="py-6"
                label="Create Gift Box"
              />
            </div>

            <div className="flex-col lg:hidden">
              <p className="font-bold text-base mt-6 text-black">
                You May Also Like
              </p>
              <div className="flex gap-4 overflow-x-auto">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i}>
                    <ProductCard />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Description</h3>
              <p className="text-[#585858] font-bold text-base">
                Dry White Wine | France | 750ml
              </p>
              <p className="bg-[#F4EEEE] rounded-2xl p-6 mt-2 text-xl font-normal text-[#585858]">
                Celebrate the Mediterranean lifestyle with Art De Vivre Blanc, a
                refined expression of Gérard Bertrand’s commitment to
                sustainable winemaking and cultural heritage. Housed in a
                beautifully crafted clay-inspired bottle, this wine is more than
                a drink—it’s an experience of elegance, tradition, and terroir.
              </p>
            </div>
            <div className="mt-8">
              <Button
                handleClick={() => setIsModalOpen(true)}
                type="lightRed"
                label="Refund Policy"
              />
            </div>
            <h4 className="font-bold text-2xl mt-8 mb-4 text-black">
              Reviews(148)
            </h4>
            {dataPage.map((item, index) => (
              <div key={index} className="border-b border-[#F0F0F0] mt-4 pb-4">
                <p className="text-2xl font-bold text-black ">Janice</p>
                <div className="flex items-center gap-2">
                  <Rate disabled defaultValue={item} />
                  <p className="text-[#585858] text-base font-medium">
                    Nov 24, 2025
                  </p>
                </div>
                <p className="font-medium text-xl text-black">
                  Celebrate the Mediterranean lifestyle with Art De Vivre Blanc,
                  a refined expression of Gérard Bertrand’s commitment to...
                </p>
              </div>
            ))}
            <div className="mt-8">
              <Button handleClick={() => setOpen(true)} type="lightRed" label="Read More Reviews" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <RefundPolicy isModalOpen={isModalOpen} handleCancel={handleCancel}/>
      <ReviewsModal open={open} handleCancel={handleCancelTwo} />
    </div>
  );
}
