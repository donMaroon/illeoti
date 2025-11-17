import { Modal } from "antd";
import { useState } from "react";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Button from "../../components/btns/Button";

const MembershipMoreInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "542px",
          xl: "542px",
          xxl: "542px",
        }}
        centered
        closable={false}
        style={{
          borderRadius: 24,
        }}
      >
        <div className="py-9 px-8 lato">
          <div className="flex mb-11 items-center justify-between ">
            <h2 className="text-2xl font-semibold mb-2">Log In</h2>
            <button onClick={handleCancel}>
              <img src={ImagesAndIcons.xIcon} alt="" />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img src={ImagesAndIcons.upgradeMembership} alt="" />
          </div>
          <div className="flex items-center justify-between my-6">
            <div>
              <p className="text-base font-normal">
                With this upgrade you can enjoy:
              </p>
              <ul className="list-disc list-inside mt-4 text-base font-bold space-y-2">
                <li>VIP Access</li>
                <li>Event Priority</li>
                <li>Quarterly Boxes</li>
                <li>Exclusive Discounts </li>
              </ul>
            </div>
            <div className="bg-primary p-6 rounded-3xl w-1/2">
              Quaterly Fee of:
              <h3 className="text-3xl font-bold mt-2">N300,000</h3>
            </div>
          </div>
          <Button
            type="red"
            label="Upgrade Membership"
            className="font-semibold  rounded-[55px] py-6 text-xl my-11"
          />
        </div>
      </Modal>
  );
};

export default MembershipMoreInfo;
