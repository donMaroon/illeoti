import { Modal } from "antd";
import { useState } from "react";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Button from "../btns/Button";

const GetExclusiveAccessModal = () => {
  const [open, setOpen] = useState(false);
  const dataArray = [
    { name: "VIP Access", img: ImagesAndIcons.vipAccess },
    { name: "Event Priority", img: ImagesAndIcons.eventPriority },
    { name: "Quaterly Gift Boxes", img: ImagesAndIcons.quaterlyGiftsBoxes },
    { name: "Exclusive Discounts", img: ImagesAndIcons.exclusiveDiscounts },
  ];
  return (
    <div>
      <Button handleClick={() => setOpen(true)} type="white" label="Join Membership" className="text-xs py-2" />
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={890}
        centered
        closable={false}
      >
        <div className="p-10">
          <div className="flex justify-end">
            <button>
              <img src={ImagesAndIcons.xIcon} alt="" />
            </button>
          </div>
          <div className="flex mb-14 items-center justify-center gap-11">
            <img src={ImagesAndIcons.joinIlleotiBadge} alt="" />
            <h2 className="text-5xl font-bold text-primary  mt-6 mb-4">
              Join <br />
              Ile-Oti Premium <br /> Membership
            </h2>
          </div>
          <div className="flex items-center justify-between">
            {dataArray.map((data, index) => (
              <div
                key={index}
                className="flex w-45 h-45 border border-[#D8D8D8] rounded-2xl flex-col items-center justify-center gap-5"
              >
                <img src={data.img} alt="" />
                <p className="text-xl text-primary text-center font-bold">{data.name}</p>
              </div>
            ))}
          </div>
                    <Button
            type="red"
            label="Get Started"
            className="font-semibold  rounded-[55px] py-6 text-xl mt-11"
          />
        </div>
      </Modal>
    </div>
  );
};

export default GetExclusiveAccessModal;
