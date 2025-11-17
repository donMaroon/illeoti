import { ChangeEvent } from "react";

interface CustomInputTypes {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  placeholder?: string;
}

const CustomInput = ({
  label,
  value,
  onChange,
  icon,
  placeholder,
}: CustomInputTypes) => {
  return (
    <div className="bg-white border border-[#D8D8D8] rounded-lg px-4 py-3 w-full text-left flex justify-between items-center duration-200">
      <div className="flex gap-1 w-[90%] flex-col">
        <p className="text-xs text-[#9B9B9B] font-medium">{label}</p>
        <input
          className="border-none outline-none w-full"
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg> */}
      <img src={icon} alt="" />
    </div>
  );
};

export default CustomInput;
