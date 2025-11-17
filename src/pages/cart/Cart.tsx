import Button from "../../components/btns/Button";
import ProductCardCart from "../../components/card/ProductCardCart";
import Footer from "../../components/footer/Footer";
import CustomInput from "../../components/input/CustomInput";
import Navbar from "../../components/navbar/Navbar";

const Cart = () => {
  return (
    <section>
      <Navbar />
      <div className="max-w-300 w-[90%] flex flex-col-reverse lg:flex-row mx-auto gap-12 pt-12 pb-20">
        <div className="w-full lg:w-180 flex-col flex gap-6">
          <h4 className="text-3xl font-bold">Cart</h4>
          {[1, 2, 3].map((i) => (
            <div>
              <ProductCardCart i={i} />
              <div className="w-full border mt-6 border-[#D8D8D8]"></div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-115">
          <h4 className="text-3xl font-bold">Summary</h4>
          <div className="flex flex-col gap-2 mt-8">
            <div className="flex justify-between ">
              <p className="text-base lg:text-xl font-bold text-black">
                Subtotal
              </p>
              <p className="text-2xl font-normal text-black">N70,000.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base lg:text-xl font-bold text-black">
                Estimated Shipping
              </p>
              <p className="text-2xl font-normal text-black">N0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base lg:text-xl font-bold text-black">
                Estimated Tax
              </p>
              <p className="text-2xl font-normal text-black">N0.00</p>
            </div>
          </div>
          <div className="flex justify-between border-y-2 mb-6 mt-4 border-[#F0F0F0] py-4">
            <p className="text-base lg:text-xl font-bold text-black">Total</p>
            <p className="text-2xl font-normal text-black">N70,000.00</p>
          </div>
          <CustomInput label="Discount Code" placeholder="XXXXXXXXXX"/>
                        <Button
                type="red"
                label="Send"
                className="font-semibold  rounded-[55px] py-6 text-xl mt-6"
              />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Cart;
