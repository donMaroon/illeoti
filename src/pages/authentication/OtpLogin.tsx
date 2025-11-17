import { Input, Modal } from "antd";

import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Button from "../../components/btns/Button";

interface OtpLoginProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const OtpLogin = ({isModalOpen, handleCancel}: OtpLoginProps) => {

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
          <div className="flex mb-2 items-center justify-between ">
            <h2 className="text-2xl font-semibold mb-2">Confirm it's you</h2>
            <button onClick={handleCancel}>
              <img src={ImagesAndIcons.xIcon} alt="" />
            </button>
          </div>
          <p className="text-base pb-4 border-b mb-4 border-b-[#D8D8D8] text-[#9B9B9B] font-normal">
            Enter the code sent to your email, <br/> Jsmith.jaggger@gmail.com
          </p>
          <div className="flex items-center mb-4 justify-between">
            <p className="font-normal text-base ">malik@yopmail.com</p>
            <p className=" text-primary font-semibold text-base underline">
              Change
            </p>
          </div>
          <Input.OTP length={6} />

          <Button
            type="red"
            label="Sign Up"
            className="font-semibold  rounded-[55px] py-6 text-xl my-8"
          />
          <div className="flex items-center justify-center">
            <button className="w-[145px] h-[58px]  rounded-[22px] bg-[#D9D9D9]"></button>
          </div>
        </div>
      </Modal>
  );
};

export default OtpLogin;
