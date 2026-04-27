import { Modal } from "antd";
import Button from "../../components/btns/Button";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import type { MembershipPlan } from "../../services/membership.service";
import { formatNGN } from "../../lib/format";

function perksList(perks: unknown): string[] {
  if (Array.isArray(perks)) {
    return perks.map((p) => String(p));
  }
  if (perks && typeof perks === "object") {
    return Object.values(perks as Record<string, unknown>).map((v) =>
      String(v),
    );
  }
  return [];
}

type MembershipMoreInfoProps = {
  open: boolean;
  onClose: () => void;
  plan: MembershipPlan | null;
};

const MembershipMoreInfo = ({
  open,
  onClose,
  plan,
}: MembershipMoreInfoProps) => {
  const perks = perksList(plan?.perks);
  const priceNum =
    typeof plan?.price === "string" ? Number(plan.price) : Number(plan?.price ?? 0);

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={onClose}
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
          <button type="button" onClick={onClose}>
            <img src={ImagesAndIcons.xIcon} alt="" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={ImagesAndIcons.upgradeMembership} alt="" />
        </div>
        <div className="flex items-center justify-between my-6">
          <div>
            <p className="text-base font-normal">
              With this upgrade you can enjoy:
            </p>
            <ul className="list-disc list-inside mt-4 text-base font-bold space-y-2">
              {(perks.length ? perks : ["VIP-style benefits from this plan"]).map(
                (p, i) => (
                  <li key={i}>{p}</li>
                ),
              )}
            </ul>
          </div>
          <div className="bg-primary p-6 rounded-3xl w-1/2 text-white">
            Plan fee:
            <h3 className="text-3xl font-bold mt-2 text-white">
              {plan ? formatNGN(priceNum) : "—"}
            </h3>
            {plan?.name ? (
              <p className="text-sm mt-2 opacity-90">{plan.name}</p>
            ) : null}
          </div>
        </div>
        <Button
          type="red"
          label="Upgrade Membership"
          className="font-semibold  rounded-[55px] py-6 text-xl my-11"
          handleClick={onClose}
        />
      </div>
    </Modal>
  );
};

export default MembershipMoreInfo;
