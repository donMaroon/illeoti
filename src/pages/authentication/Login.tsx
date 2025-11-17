import { Modal } from "antd";
import { useState } from "react";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import CustomInput from "../../components/input/CustomInput";
import Button from "../../components/btns/Button";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-lg bg-[#80011D] text-base font-medium text-white py-3.5 px-[45px] hover:bg-[#66001D]"
      >
        Log In
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
        <div className="py-9 px-8 lato">
          <div className="flex mb-11 items-center justify-between ">
            <h2 className="text-2xl font-semibold mb-2">Log In</h2>
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
            label="Log In"
            className="font-semibold  rounded-[55px] py-6 text-xl my-11"
          />
          <div className="flex items-center justify-center">
          <button className="w-[145px] h-[58px]  rounded-[22px] bg-[#D9D9D9]"></button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
