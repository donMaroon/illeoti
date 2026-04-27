import { Modal } from "antd";
import { Dispatch, SetStateAction, useState, type ChangeEvent } from "react";
import Button from "../btns/Button";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";
import CustomInput from "../input/CustomInput";

interface PersonalMessageModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onSubmitMessage?: (message: string) => void;
}

const PersonalMessageModal = ({
  open,
  setOpen,
  onSubmitMessage,
}: PersonalMessageModalProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");

  const handleSubmit = () => {
    const parts = [
      title.trim() && `Title: ${title.trim()}`,
      body.trim() && body.trim(),
      recipient.trim() && `To: ${recipient.trim()}`,
      sender.trim() && `From: ${sender.trim()}`,
    ].filter(Boolean);
    const combined = parts.join("\n\n");
    onSubmitMessage?.(combined || body.trim());
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width={650}
      centered
      closable={false}
    >
      <div className="p-10 lato">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <img src={ImagesAndIcons.giftBox} alt="" /> Personal Message
          </h2>
          <button type="button" onClick={() => setOpen(false)}>
            <img src={ImagesAndIcons.xIcon} alt="" />
          </button>
        </div>
        <p className="text-base font-bold max-w-[423px] mb-11">
          This message will be handwritten in an Ile-Oti Note Card and Sent with the
          Package.{" "}
        </p>

        <div className="flex flex-col gap-2 mb-11">
          <CustomInput
            label="Message Title"
            placeholder="Enter Message Title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
          <CustomInput
            label="Message"
            placeholder="Enter Message"
            value={body}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBody(e.target.value)
            }
          />
          <CustomInput
            label="Recipient Name (Optional)"
            placeholder="Add the recipient’s name"
            value={recipient}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRecipient(e.target.value)
            }
          />
          <CustomInput
            label="Sender Name (Optional)"
            placeholder="Specify who this message should be from"
            value={sender}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSender(e.target.value)
            }
          />
        </div>
        <Button
          label="Submit"
          type="red"
          className="py-6 text-xl rounded-[55px] font-semibold"
          handleClick={handleSubmit}
        />
      </div>
    </Modal>
  );
};

export default PersonalMessageModal;
