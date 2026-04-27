import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/btns/Button";
import { routes } from "../../shared/routes/routes";

export default function PaymentFailed() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto py-16 px-5 text-center lato">
        <h1 className="text-3xl font-bold text-black mb-4">
          Payment was not completed. Please try again.
        </h1>
        <Button
          type="red"
          label="Try Again"
          className="py-4 px-8 rounded-[55px] text-base font-semibold mt-8"
          handleClick={() => navigate(routes.cart)}
        />
      </div>
      <Footer />
    </div>
  );
}
