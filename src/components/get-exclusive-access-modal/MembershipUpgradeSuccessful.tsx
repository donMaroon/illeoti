import { useNavigate } from "react-router-dom";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Button from "../btns/Button";
import { routes } from "../../shared/routes/routes";

/** Shared success UI (full page at `/membership/success` or embeddable). */
export function MembershipSuccessBody({
  paystackReference,
}: {
  paystackReference?: string | null;
}) {
  const navigate = useNavigate();

  return (
    <div className="py-9 px-8 lato max-w-lg mx-auto">
      <div className="flex items-center justify-center">
        <img src={ImagesAndIcons.membershipUpgradeSuccessful} alt="" />
      </div>
      <h2 className="text-2xl text-center font-semibold my-6">
        Membership payment received
      </h2>
      {paystackReference ? (
        <p className="text-center text-sm text-[#585858] mb-4">
          Reference: <span className="font-mono">{paystackReference}</span>
        </p>
      ) : null}
      <p className="text-center text-base text-[#585858] mb-8">
        Thank you. Your membership will update once payment is confirmed.
      </p>
      <Button
        type="red"
        label="Go To Dashboard"
        className="font-semibold  rounded-[55px] py-6 text-xl my-4"
        handleClick={() => navigate(routes.dashboard)}
      />
    </div>
  );
}
