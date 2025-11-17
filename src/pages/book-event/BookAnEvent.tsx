import { Checkbox, Upload, UploadProps } from "antd";
import Footer from "../../components/footer/Footer";
import CustomInput from "../../components/input/CustomInput";
import Navbar from "../../components/navbar/Navbar";
import CustomSelect from "../../components/select/CustomSelect";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Button from "../../components/btns/Button";
import { useState } from "react";

const BookAnEvent = () => {
  const { Dragger } = Upload;
  const [orderService, setOrderService] = useState("cooperate")
  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: `${
      import.meta.env.VITE_BASE_URL
    }/authenticationservice/v1.0/rest/api/app/image/file/upload`,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file.response.data.filePath);
      }
      if (status === "done") {
        console.log(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    onDrop() {},
  };

  const styles = {
    active: `py-3.5 px-12 bg-white rounded-2xl text-primary text-base font-semibold`,
    inActive: `py-3.5 px-12 rounded-2xl text-white text-base font-semibold`
  }

  return (
    <div>
      <Navbar />
      <div className="bg-primary py-7">
        <div className="max-w-270 w-[90%] mx-auto ">
          <div className="flex justify-center w-full items-center">
            <button onClick={() => setOrderService("cooperate")} className={orderService === "cooperate" ? styles.active: styles.inActive  }>Event & Corporate Services</button>
            <button onClick={() => setOrderService("bulk")} className={orderService === "bulk" ? styles.active: styles.inActive  }>Bulk Ordering</button>
          </div>
        </div>
      </div>
      <div className="w-180 mx-auto flex flex-col gap-5 my-12">
        <h4 className="text-3xl font-bold mb-4">Book an Event or Corporate Service</h4>
        <div className="flex gap-4">
          <CustomSelect
            options={[
              { value: "Delivery", label: "Delivery" },
              { value: "Pickup", label: "Pickup" },
            ]}
            placeholder="Select Delivery Method"
            label="Select Country"
          />
          <CustomSelect
            options={[
              { value: "Delivery", label: "Delivery" },
              { value: "Pickup", label: "Pickup" },
            ]}
            placeholder="Select Delivery Method"
            label="Select Country"
          />
        </div>
        <div className="flex gap-4">
          <CustomInput label="Address" placeholder="Enter your full address" />
          <CustomInput label="Address" placeholder="Enter your full address" />
        </div>
        <div className="flex gap-4">
          <CustomInput label="Address" placeholder="Enter your full address" />
          <CustomInput label="Address" placeholder="Enter your full address" />
        </div>
        <div className="flex gap-4">
          <CustomInput label="Address" placeholder="Enter your full address" />
          <CustomInput label="Address" placeholder="Enter your full address" />
        </div>
        <Dragger
          style={{
            backgroundColor: "white",
            width: "100%",
            borderColor: "#E5E7EB",
          }}
          showUploadList={false}
          {...props}
        >
          <div className="bg-white  rounded-lg w-full text-left flex justify-between items-center duration-200">
            <div className="flex gap-1 flex-col">
              <p className="text-xs text-[#9B9B9B] font-medium">
                More Information
              </p>
              <span className="text-base font-medium text-black">
                Enter More Information
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-primary font-medium text-base underline">
                Upload File
              </p>
              <img src={ImagesAndIcons.documentUpload} alt="" />
            </div>
          </div>
        </Dragger>
        <div className="flex gap-4">
          <div className="bg-white border border-[#D8D8D8] rounded-lg px-4 py-3 w-full text-left flex justify-between items-center duration-200">
            <div className="flex gap-1 flex-col">
              <p className="text-xs text-[#9B9B9B] font-medium">Bartender</p>
              <span className="text-base font-medium text-black">
                Add Bartender
              </span>
            </div>
            <Checkbox />
          </div>
          <div className="bg-white border border-[#D8D8D8] rounded-lg px-4 py-3 w-full text-left flex justify-between items-center duration-200">
            <div className="flex gap-1 flex-col">
              <p className="text-xs text-[#9B9B9B] font-medium">
                Menu Curated Services
              </p>
              <span className="text-base font-medium text-black">
                Menu Service
              </span>
            </div>
            <Checkbox />
          </div>
        </div>
        <Button
          type="red"
          label="Request Quote"
          className="lg:py-6 text-base lg:text-xl py-3 font-semibold rounded-[55px]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default BookAnEvent;
