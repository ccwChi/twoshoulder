import { useState } from "react";
import AngleDown from "../asset/icons/AngleDown";

const DropdownButton = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contryData = [{ value: "屏東歸來廠" }, { value: "屏東歸來廠" }];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="h-10  bg-white rounded-full 
          text-sm px-2 py-2.5 w-40  inline-flex justify-between items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]"
        type="button"
      >
        <p className="text-left text-lg text-gray-400  font-semibold">
          屏東歸來廠
        </p>
        <AngleDown className="w-6 h-6 text-[#3CACA5]" />
      </button>
      {isOpen && (
        <div className="z-10 absolute h-fit mt-1 w-fit max-w-40 no-scrollbar  overflow-y-scroll bg-white divide-y divide-gray-100 rounded-xl border border-gray-200 shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)] ">
          <ul
            className="text-lg text-gray-400  font-semibold"
            aria-labelledby="dropdownDefaultButton"
          >
            {contryData.map((item, index) => (
              <li key={index}>
                <div className="block px-4 py-2">{item.value}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
