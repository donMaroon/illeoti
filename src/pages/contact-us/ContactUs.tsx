import Button from "../../components/btns/Button";
import Footer from "../../components/footer/Footer";
import CustomInput from "../../components/input/CustomInput";
import Navbar from "../../components/navbar/Navbar";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";

const ContactUs = () => {
  return (
    <section>
      <Navbar />
      <div className="max-w-300 mx-auto w-[90%] py-11">
        <h3 className="text-3xl text-black font-bold mb-6">Contact Us</h3>
        <div className="flex gap-11">
          <div className="w-1/2">
            <div className="flex items-center gap-4 w-full pb-8 border-b border-b-[#F0F0F0]">
              <img
                className="h-10 w-10 rounded-full"
                src={ImagesAndIcons.cartRed}
                alt=""
              />
              <div>
                <p className="text-base font-normal">John Smith Jagger</p>
                <p className="text-xs text-[#9B9B9B] font-normal">
                  Jsmith.jaggger@gmail.com
                </p>
              </div>
            </div>
            <h3 className="text-3xl mt-8 mb-6 text-black font-bold">
              Leave us an email
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
                <CustomInput
                  label="First Name"
                  placeholder="Enter First Name"
                />
                <CustomInput label="Last Name" placeholder="Enter Last Name" />
              </div>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
                <CustomInput
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                />
                <CustomInput
                  label="Email Address"
                  placeholder="Enter Email Address"
                />
              </div>
              <CustomInput label="Subject" placeholder="Enter Subject" />
              <CustomInput
                label="Description"
                placeholder="Give Us More Information"
              />
              <Button
                type="red"
                label="Send"
                className="font-semibold  rounded-[55px] py-6 text-xl my-8"
              />
            </div>
          </div>
          <div className="w-1/2">
            <img src={ImagesAndIcons.contactUsImage} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
