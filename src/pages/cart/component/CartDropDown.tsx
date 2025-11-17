import { Popover } from "antd";
import { useState } from "react";
import { ImagesAndIcons } from "../../../shared/images-icons/ImagesAndIcons";
import Button from "../../../components/btns/Button";
import SmallCardCart from "../../../components/card/SmallCardCart";

const CartDropDown = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={
        <div className="w-98 pt-9 bg-white border border-[#D9D9D9] lato rounded-3xl">
          <div className="flex px-8 items-center justify-between">
            <p className="text-xl font-bold ">Cart</p>
            <button onClick={() => setOpen(false)}>
              <img src={ImagesAndIcons.xIcon} alt="" />
            </button>
          </div>
          <div className="flex px-8 flex-col gap-6 mt-6">
            <SmallCardCart isCart={true} />
            <SmallCardCart isCart={true} />
            <SmallCardCart isCart={true} />
          </div>
          <div className="bg-[#F4EEEE] px-8 w-full rounded-[0px_0px_24px_24px] py-6 flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold">Subtotal</p>
              <p className="text-base font-normal">N35,000.00</p>
            </div>
            <div className="flex mt-2 items-center justify-between">
              <p className="text-base font-semibold">Subtotal</p>
              <p className="text-base font-normal">N35,000.00</p>
            </div>
            <div className="flex mt-6 items-center justify-between">
              <p className="text-base font-semibold">Total</p>
              <p className="text-base font-normal">N35,000.00</p>
            </div>
            <div className="mt-4">
              <Button
                type="red"
                label="Checkout"
                className="w-full py-6 rounded-[55px] text-base font-semibold"
              />
            </div>
            <p className="mt-3.5 text-primary font-semibold text-base underline text-center">
              View Cart
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
      <button className="border border-transparent  hover:border-[#80011D] transition-all duration-300 p-0.5 rounded-full">
        <img className="ml-[0.5px]" src={ImagesAndIcons.cartRed} alt="" />
      </button>
    </Popover>
  );
};

export default CartDropDown;
