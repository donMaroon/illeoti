import { useSearchParams, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/btns/Button";
import { routes } from "../../shared/routes/routes";

export default function PaymentSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const reference =
    params.get("reference") ?? params.get("trxref") ?? undefined;

  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto py-16 px-5 text-center lato">
        <h1 className="text-3xl font-bold text-black mb-4">
          Payment successful! Your order has been placed.
        </h1>
        {reference ? (
          <p className="text-lg text-[#585858] mb-8">
            Order reference:{" "}
            <span className="font-mono font-semibold">{reference}</span>
          </p>
        ) : (
          <p className="text-lg text-[#585858] mb-8">
            You will receive a confirmation email shortly.
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            type="red"
            label="Continue Shopping"
            className="py-4 px-8 rounded-[55px] text-base font-semibold"
            handleClick={() => navigate(routes.products)}
          />
          <Button
            type="outlineRed"
            label="View Orders"
            className="py-4 px-8 rounded-[55px] text-base font-semibold"
            handleClick={() => navigate(routes.orders)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
