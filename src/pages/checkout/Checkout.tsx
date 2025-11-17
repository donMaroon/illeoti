import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CustomSelect from "../../components/select/CustomSelect";
import CustomInput from "../../components/input/CustomInput";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Button from "../../components/btns/Button";

const Checkout = () => {
  return (
    <section>
      <Navbar />
      <div className="max-w-300 w-[90%] flex flex-col-reverse lg:flex-row mx-auto gap-12 pt-12 pb-20">
        <div className="w-full lg:w-180 flex-col flex gap-6">
          <p className="hidden lg:block font-normal text-2xl">Checkout</p>
          <h4 className="text-3xl font-bold">Delivery</h4>
          <CustomSelect
            options={[
              { value: "Delivery", label: "Delivery" },
              { value: "Pickup", label: "Pickup" },
            ]}
            placeholder="Select Delivery Method"
            label="Select Country"
          />
          <div className="flex gap-4 flex-col lg:flex-row items-center">
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
          <CustomInput
            label="Address"
            placeholder="Enter your full address"
            icon={ImagesAndIcons.mapIcon}
          />
          <div className="flex gap-4 flex-col lg:flex-row items-center">
            <CustomSelect
              options={[
                { value: "Delivery", label: "Delivery" },
                { value: "Pickup", label: "Pickup" },
              ]}
              placeholder="Select city"
              label="City"
            />
            <CustomSelect
              options={[
                { value: "Delivery", label: "Delivery" },
                { value: "Pickup", label: "Pickup" },
              ]}
              placeholder="Select state"
              label="State"
            />
            <CustomInput label="Zip" placeholder="Enter Zip" />
          </div>
          <CustomInput
            label="Address"
            placeholder="Enter your full address"
            icon={ImagesAndIcons.mapIcon}
          />

          <Button
            type="red"
            label="Next: Payment Method"
            className="lg:py-6 text-base lg:text-xl py-3 font-semibold rounded-[55px]"
          />
        </div>
        <div className="w-full lg:w-115">
          <h4 className="text-3xl font-bold ">Your Order</h4>
          <div className="flex  flex-col gap-4 mt-6">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4 items-center">
                <img
                  className="w-34 h-40 rounded-2xl"
                  src={ImagesAndIcons.softDrinkBottle}
                  alt=""
                />
                <div>
                  <p className="text-base lg:text-xl font-bold">Tanqueray London Dry Gin</p>
                  <p className="text-[#585858] text-xs lg:text-base font-normal mb-6">
                    Category: Gin
                  </p>
                  <p className="text-base lg:text-xl font-bold">N35,000</p>
                  <p className="text-[#585858] text-xs lg:text-base font-normal">
                    Quantity: 2
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h4 className="text-3xl font-bold mt-10">Summary</h4>
          <div className="flex flex-col gap-2 mt-8">
            <div className="flex justify-between ">
              <p className="text-base lg:text-xl font-bold text-black">Subtotal</p>
              <p className="text-2xl font-normal text-black">N70,000.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base lg:text-xl font-bold text-black">Estimated Shipping</p>
              <p className="text-2xl font-normal text-black">N0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base lg:text-xl font-bold text-black">Estimated Tax</p>
              <p className="text-2xl font-normal text-black">N0.00</p>
            </div>
          </div>
          <div className="flex justify-between border-y-2 mt-4 border-[#F0F0F0] py-4">
            <p className="text-base lg:text-xl font-bold text-black">Total</p>
            <p className="text-2xl font-normal text-black">N70,000.00</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Checkout;
