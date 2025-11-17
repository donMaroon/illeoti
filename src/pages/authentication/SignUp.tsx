import { Modal } from "antd";
import { useState } from "react";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import CustomInput from "../../components/input/CustomInput";
import Button from "../../components/btns/Button";
import OtpLogin from "./OtpLogin";

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-xl font-bold text-black"
      >
        Sign Up
      </button>
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
        <div className="py-9 lato px-8">
          <div className="flex mb-11 items-center justify-between ">
            <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
            <button onClick={handleCancel}>
              <img src={ImagesAndIcons.xIcon} alt="" />
            </button>
          </div>
          <CustomInput
            label="Email Address"
            placeholder="Enter Email Address"
          />
          <Button
            type="red"
            label="Sign Up"
            className="font-semibold  rounded-[55px] py-6 text-xl my-11"
            handleClick={() => setIsModalOpenTwo(true)}
          />
          <div className="flex items-center justify-center">
          <div className="w-[145px] h-[58px]  rounded-[22px] bg-[#D9D9D9]"></div>
          </div>
        </div>
      </Modal>
      <OtpLogin isModalOpen={isModalOpenTwo} handleCancel={() => setIsModalOpenTwo(false)} />
    </div>
  );
};

export default SignUp;
