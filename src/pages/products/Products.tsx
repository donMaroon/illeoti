import { Checkbox } from "antd";
import Button from "../../components/btns/Button";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import DropDown from "../../components/dropdown/DropDown";
import ProductCard from "../../components/card/ProductCard";
import Pagination from "../../shared/pagination/Pagination";
import { useState } from "react";
import MakeAGiftboxModal from "../../components/gift-box-modal/MakeAGiftboxModal";
import GiftBoxModal from "../../components/gift-box-modal/GiftboxModal";
import PersonalMessageModal from "../../components/gift-box-modal/PersonalMessageModal";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const [openGiftBox, setOpenGiftBox] = useState(false);
  const [openGiftBoxTwo, setOpenGiftBoxTwo] = useState(false);
  const [addPersonalMessage, setAddPersonalMessage] = useState(false)
  return (
    <section>
      <Navbar />
      <div className="bg-primary py-7">
        <div className="max-w-270 w-[90%] mx-auto ">
          <p className="font-bold text-2xl lg:text-[40px] text-white">
            Explore our products
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-y-4 mx-auto items-center py-6 max-w-270 w-[90%]">
        <div className="hidden lg:flex gap-4">
          <Button
            type="outlinedIcon"
            icon={ImagesAndIcons.filterSearch}
            justIcon={true}
          />
          <DropDown
            icons={ImagesAndIcons.arrowDownSquare}
            content={
              <div className="border border-[#D9D9D9] bg-white  p-6  rounded-2xl flex flex-col gap-4">
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Alcoholic
                </div>
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Non Alcoholic
                </div>
              </div>
            }
            btnLabel=" Alcoholic  & Non Alcoholic"
          />
          <DropDown
            icons={ImagesAndIcons.arrowDownSquare}
            content={
              <div className="border border-[#D9D9D9] bg-white  p-6  rounded-2xl flex flex-col gap-4">
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Social Gathering
                </div>
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Gifts
                </div>
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Weddings
                </div>
              </div>
            }
            btnLabel={`Occasion: All`}
          />
          <DropDown
            icons={ImagesAndIcons.arrowDownSquare}
            content={
              <div className="border border-[#D9D9D9] bg-white  p-6  rounded-2xl flex flex-col gap-4">
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> 0 - N100,000
                </div>
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> 101,000 - N500,000
                </div>
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> 501,000 - N1,000,000
                </div>
              </div>
            }
            btnLabel={`Price Range: All`}
          />
          <DropDown
            icons={ImagesAndIcons.arrowDownSquare}
            content={
              <div className="border border-[#D9D9D9] bg-white  p-6  rounded-2xl flex flex-col gap-4">
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Alcoholic
                </div>
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Non Alcoholic
                </div>
              </div>
            }
            btnLabel={`Flavor Profile: All`}
          />
          <DropDown
            icons={ImagesAndIcons.arrowDownSquare}
            content={
              <div className="border border-[#D9D9D9] bg-white  p-6  rounded-2xl flex flex-col gap-4">
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Alcoholic
                </div>
                <div className="text-xs font-medium flex items-center gap-2">
                  <Checkbox /> Non Alcoholic
                </div>
              </div>
            }
            btnLabel={`Sort By`}
          />
        </div>
        <div className="block lg:hidden">
          <DropDown
            icons={ImagesAndIcons.filterSearch}
            content={
              <div className=" bg-primary rounded-[0px_24px_24px_24px] p-6 flex flex-col gap-4">
                <button className="py-2 px-4 border border-white text-white flex items-center gap-2 rounded-lg text-xs font-medium">
                  Alcoholic & Non Alcoholic{" "}
                  <img src={ImagesAndIcons.arrowdownWhite} alt="" />
                </button>
                <button className="py-2 px-4 border border-white text-white flex items-center gap-2 rounded-lg text-xs font-medium">
                  Occasion: All{" "}
                  <img src={ImagesAndIcons.arrowdownWhite} alt="" />
                </button>
                <button className="py-2 px-4 border border-white text-white flex items-center gap-2 rounded-lg text-xs font-medium">
                  Price Range: All{" "}
                  <img src={ImagesAndIcons.arrowdownWhite} alt="" />
                </button>
                <button className="py-2 px-4 border border-white text-white flex items-center gap-2 rounded-lg text-xs font-medium">
                  Flavour Profile: All{" "}
                  <img src={ImagesAndIcons.arrowdownWhite} alt="" />
                </button>
                <button className="py-2 px-4 border border-white text-white flex items-center gap-2 rounded-lg text-xs font-medium">
                  Sort by <img src={ImagesAndIcons.arrowdownWhite} alt="" />
                </button>
              </div>
            }
            btnLabel="Filter"
          />
        </div>
        <div className="w-38">
          <Button
            type="red"
            icon={ImagesAndIcons.giftboxWhite}
            label="Gift Box"
            className="py-2 md:py-[14px] text-xs font-medium rounded-3xl"
            handleClick={() => setOpenGiftBox(true)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-4 max-w-270 mx-auto w-[90%] gap-y-14 gap-x-1 justify-center">
        {Array.from({ length: 16 }, (_, i) => i + 1).map((n) => (
          <div key={n}>
            <ProductCard />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-16">
        <Pagination numberOfPages={30} setpage={setCurrentPage} page={currentPage} />
      </div>
      <Footer />
      <MakeAGiftboxModal handleStartGiftBox={() => {setOpenGiftBoxTwo(true); setOpenGiftBox(false)}} isModalOpen={openGiftBox} handleCancel={() => setOpenGiftBox(false)} />
      <GiftBoxModal handleAddPersonalMessage={() => setAddPersonalMessage(true)} open={openGiftBoxTwo} setOpen={setOpenGiftBoxTwo}/>
      <PersonalMessageModal open={addPersonalMessage} setOpen={setAddPersonalMessage}/>
    </section>
  );
};

export default Products;
