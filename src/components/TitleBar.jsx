import React from "react";
import DropdownButton from "./DropdownButton";

const TitleBar = ({title}) => {
  return (
    <div className="w-full h-16 bg-blac inline-flex justify-between px-3 pt-3">
      <p className="text-gray-500 text-2xl m-0.5 font-semibold">{title}</p>
      <DropdownButton />
    </div>
  );
};

export default TitleBar;
