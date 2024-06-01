import React from "react";
import Home from "../asset/icons/Home";

const HomeButton = ({ handleButtonClick = () => {} }) => {
  return (
    <div className="h-12 w-full">
      <div
        className="bg-[#3CACA5] rounded-full w-14 h-14 right-4 bottom-2 absolute flex justify-center items-center cursor-pointer z-10"
        onClick={() => handleButtonClick("home")} 
      >
        <Home className="w-10 h-10 text-white" />
      </div>
    </div>
  );
};

export default HomeButton;
