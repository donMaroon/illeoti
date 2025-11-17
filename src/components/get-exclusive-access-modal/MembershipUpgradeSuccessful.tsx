import { Modal } from "antd";
import { useState } from "react";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Button from "../../components/btns/Button";

const MembershipUpgradeSuccessful = () => {
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
            <img src={ImagesAndIcons.membershipUpgradeSuccessful} alt="" />
          </div>
          <h2 className="text-2xl text-center font-semibold my-11">Log In</h2>
          <Button
            type="red"
            label="Go To Dashboard"
            className="font-semibold  rounded-[55px] py-6 text-xl my-11"
          />
        </div>
      </Modal>
  );
};

export default MembershipUpgradeSuccessful;
