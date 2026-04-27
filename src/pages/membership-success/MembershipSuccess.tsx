import { useSearchParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { MembershipSuccessBody } from "../../components/get-exclusive-access-modal/MembershipUpgradeSuccessful";

export default function MembershipSuccess() {
  const [params] = useSearchParams();
  const reference =
    params.get("reference") ?? params.get("trxref") ?? undefined;

  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto py-12">
        <MembershipSuccessBody paystackReference={reference} />
      </div>
      <Footer />
    </div>
  );
}
