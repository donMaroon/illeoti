import { Modal } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../btns/Button";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";

interface GiftItem {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

interface giftBoxModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleAddPersonalMessage: () => void;
}

const GiftBoxModal = ({ open, setOpen, handleAddPersonalMessage }: giftBoxModalProps) => {
  // set to false in real use
  const [items, setItems] = useState<GiftItem[]>([
    {
      id: 1,
      image: "https://res.cloudinary.com/demo/image/upload/sample.webp",
      name: "Tanqueray London Dry Gin",
      category: "Gin",
      price: 35000,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/demo/image/upload/sample.webp",
      name: "Deanston 10 Year Old",
      category: "Whisky",
      price: 32000,
      quantity: 2,
    },
  ]);

  const increment = (id: number) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrement = (id: number) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width={650}
      centered
      closable={false}
    >
      <div className="p-10 lato">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <img src={ImagesAndIcons.giftBox} alt="" /> Your Gift Box
          </h2>
          <button onClick={() => setOpen(false)}>
            <img src={ImagesAndIcons.xIcon} alt="" />
          </button>
        </div>
        <div className="bg-[#F4EEEE] rounded-2xl overflow-auto  p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold">Box Content</h3>
            <span className="bg-[#80011D] text-white text-xs px-6 py-2 rounded-full">
              {items.length} Items
            </span>
          </div>

        <div className="flex items-center lato gap-4 overflow-auto no-scrollbar my-6">
            {
              items.map((item) => (
          <div key={item.id} className="rounded-2xl whitespace-nowrap min-w-117 flex items-center gap-4 bg-white px-8 py-6">
            <img
              className="w-34 h-40"
              src={ImagesAndIcons.softDrinkBottle}
              alt=""
            />
            <div className=" flex items-start flex-auto justify-between">
              <div className="flex flex-col">
                <p className="text-xl text-black mb-1 font-bold max-w-59">
                  Tanqueray London Dry Gin
                </p>
                <p className="text-sm font-normal mb-4 text-[#585858]">
                  Category: Gin
                </p>
                <p className="text-xl leading-8 mb-1 text-black font-bold max-w-59">
                  N35,000.00
                </p>
                <div className="flex">
                  <div className="bg-[#F4EEEE] rounded-[12px] px-4 py-2 flex gap-2 font-semibold text-xl ">
                    <button onClick={() => decrement(item.id)}>-</button>
                    <span>1</span>
                    <button onClick={() => increment(item.id)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
              ))  
            }
        </div>


          <div className="text-center">
            <button className="text-[#80011D] underline font-semibold text-sm">
              Shop More Items
            </button>
          </div>
        </div>
        <div className="flex items-center text-xl mb-4 justify-between">
          <span className="font-bold ">Total:</span>
          <span className="font-bold ">₦{total.toLocaleString()}.00</span>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            label="Add Personal Message"
            type="outlineRed"
            className="py-6 text-xl rounded-[55px] font-semibold"
            icon={ImagesAndIcons.messages}
            handleClick={handleAddPersonalMessage}
          />
          <Button
            label="Proceed To Check Out"
            type="red"
            className="py-6 text-xl rounded-[55px] font-semibold"
          />
        </div>
      </div>
    </Modal>
  );
};

export default GiftBoxModal;
