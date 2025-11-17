import { Popover } from "antd";
import { useState } from "react";
import { ImagesAndIcons } from "../../../shared/images-icons/ImagesAndIcons";
import Button from "../../../components/btns/Button";
import SmallCardCart from "../../../components/card/SmallCardCart";
import Lovelyred from "../../../assets/icons/lovelyred";

const FavouritesDropDown = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={
        <div className="w-98 pt-9 lato border border-[#D9D9D9] bg-white rounded-3xl">
          <div className="flex px-8 items-center justify-between">
            <p className="text-xl font-bold ">Favourites</p>
            <button  onClick={() => setOpen(false)}>
              <img src={ImagesAndIcons.xIcon} alt="" />
            </button>
          </div>
          <div className="flex px-8 flex-col gap-6 mt-6">
            <SmallCardCart isCart={false} />
            <SmallCardCart isCart={false} />
            <SmallCardCart isCart={false} />
          </div>
          <div className="bg-[#F4EEEE] px-8 w-full rounded-[0px_0px_24px_24px] py-6 flex flex-col">
            <div className="mt-4">
              <Button
                type="red"
                label="View Cart"
                className="w-full py-6 rounded-[55px] text-base font-semibold"
              />
            </div>
            <p className="mt-3.5 text-primary font-semibold text-base underline text-center">
              View All
            </p>
          </div>
        </div>
      }
      trigger="click"
      placement="bottom"
      open={open}
      onOpenChange={handleOpenChange}
      style={{
        padding: 0,
        borderRadius: 8,
        background: "red",
      }}
    >
      <div className="border border-transparent flex justify-center items-center rounded-full  hover:border-[#80011D] transition-all duration-300 p-0.5 ">
        <button className="w-10 h-10 rounded-full ml-[0.5px] overflow-hidden ">
          <Lovelyred width="40" height="40" rx="20" />
        </button>
      </div>
    </Popover>
  );
};

export default FavouritesDropDown;
