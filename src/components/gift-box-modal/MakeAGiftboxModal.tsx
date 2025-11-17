import { Modal } from "antd";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import Button from "../btns/Button";

interface MakeAgiftBoxModalProps {
    isModalOpen: boolean;
    handleCancel: () => void;
    handleStartGiftBox?: () => void;
    handleCustomiseGiftBox?: () => void;
}

const MakeAGiftboxModal = ({ isModalOpen, handleCancel, handleStartGiftBox, handleCustomiseGiftBox }: MakeAgiftBoxModalProps) => {
  return (
    <Modal
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "563px",
        xl: "563px",
        xxl: "563px",
      }}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      closable={false}
      style={{
        borderRadius: 24,
      }}
    >
      <div className="px-10 py-11 lato">
        <div className="flex items-center mb-6 justify-between">
          <p className="text-2xl text-black font-bold">Refund Policy</p>
          <button onClick={handleCancel}>
            <img src={ImagesAndIcons.xIcon} alt="" />
          </button>
        </div>
        <div className="flex items-center justify-center mb-11">
            <img src={ImagesAndIcons.christmasBox} alt="" />
        </div>
        <h3 className="text-base font-bold text-center mb-2">About Our Gift</h3>
        <p className="text-base font-normal text-center pb-8 border-b border-b-[#D8D8D8]">Turn any product into part of a personalised gift box. Curate your favourite items, customise them with special touches, and send everything in a beautifully packaged box.</p>

        <Button handleClick={handleStartGiftBox} label="Start Gift Box" type="red" className="py-6 text-xl rounded-[55px] font-semibold mt-8 mb-4"/>
        <Button handleClick={handleCustomiseGiftBox} label="Customise Gift Box" type="outlineRed" className="py-6 text-xl rounded-[55px] font-semibold"/>
      </div>
    </Modal>
  );
};

export default MakeAGiftboxModal;
