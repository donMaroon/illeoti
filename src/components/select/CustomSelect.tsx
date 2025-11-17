import { useState } from "react";
import { ImagesAndIcons } from "../../shared/images-icons/ImagesAndIcons";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
  label?: string
}

const CustomSelect = ({ options, placeholder = "Select...", onChange, label }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <div className="relative w-full">
      {/* Select button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white border border-[#D8D8D8] rounded-lg px-4 py-3 w-full text-left flex justify-between items-center duration-200"
      >
        <div className="flex gap-1 flex-col">
        <p className="text-xs text-[#9B9B9B] font-medium">{label}</p>
        <span className="text-base font-medium text-black">{selected ? selected.label : placeholder}</span>
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
        <img src={ImagesAndIcons.arrowDownBg} alt="" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-10 max-h-48 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer text-xs font-medium hover:bg-[#F4EEEE] ${
                selected?.value === option.value ? "bg-[#F4EEEE] font-semibold text-[#80011D]" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
