import { Modal } from "antd";
import { ImagesAndIcons } from "../../../shared/images-icons/ImagesAndIcons";

interface RefundPolicyTyp {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const RefundPolicy = ({ isModalOpen, handleCancel }: RefundPolicyTyp) => {
  return (
    <Modal
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "948px",
        xxl: "948px",
      }}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      closable={false}
      style={{
        borderRadius: 24,
      }}
    >
      <div className="px-10 py-8 ">
        <div className="flex items-center mb-11 justify-between">
          <p className="text-2xl text-black font-bold">Refund Policy</p>
          <button onClick={handleCancel}>
            <img src={ImagesAndIcons.xIcon} alt="" />
          </button>
        </div>
        <div className="font-medium text-base text-[#585858] flex flex-col gap-4">
          <p>
            Celebrate the Mediterranean lifestyle with Art De Vivre Blanc, a
            refined expression of Gérard Bertrand’s commitment to sustainable
            winemaking and cultural heritage. Housed in a beautifully crafted
            clay-inspired bottle, this wine is more than a drink—it’s an
            experience of elegance, tradition, and terroir. Celebrate the
            Mediterranean lifestyle with Art De Vivre Blanc, a refined
            expression of Gérard Bertrand’s commitment to sustainable winemaking
            and cultural heritage. Housed in a beautifully crafted clay-inspired
            bottle, this wine is more than a drink—it’s an experience of
            elegance, tradition, and terroir.Celebrate the Mediterranean
            lifestyle with Art De Vivre Blanc, a refined expression of Gérard
          </p>
          <div>
            Bertrand’s commitment to sustainable winemaking and cultural
            heritage. Housed in a beautifully crafted clay-inspired bottle, this
            wine is more than a drink—it’s an experience of elegance, tradition,
            and terroir.Celebrate the Mediterranean lifestyle with Art De Vivre
            Blanc, a refined expression of Gérard Bertrand’s commitment to
            sustainable winemaking and cultural heritage. Housed in a
            beautifully crafted clay-inspired bottle, this wine is more than a
            drink—it’s an experience of elegance, tradition, and
            terroir.Celebrate the Mediterranean lifestyle with Art De Vivre
            Blanc, a refined expression of Gérard Bertrand’s commitment to
            sustainable winemaking and cultural heritage. Housed in a
            beautifully crafted clay-inspired bottle, this wine is more than a
            drink—it’s an experience of elegance, tradition, and
            terroir.Celebrate the
          </div>
          <p>
            Mediterranean lifestyle with Art De Vivre Blanc, a refined
            expression of Gérard Bertrand’s commitment to sustainable winemaking
            and cultural heritage. Housed in a beautifully crafted clay-inspired
            bottle, this wine is more than a drink—it’s an experience of
            elegance, tradition, and terroir.Celebrate the Mediterranean
            lifestyle with Art De Vivre Blanc, a refined expression of Gérard
            Bertrand’s commitment to sustainable winemaking and cultural
            heritage. Housed in a beautifully crafted clay-inspired bottle, this
            wine is more than a drink—it’s an experience of elegance, tradition,
            and terroir.Celebrate the Mediterranean lifestyle with Art De Vivre
            Blanc, a refined expression of Gérard Bertrand’s commitment to
            sustainable winemaking and cultural heritage. Housed in a
            beautifully crafted clay-inspired bottle, this wine is more than a
            drink—it’s an experience of elegance, tradition, and terroir.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default RefundPolicy;
