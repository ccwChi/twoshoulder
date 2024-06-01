import React from "react";
import Home from "../asset/icons/Home";
import { NavLink } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="h-12 relative w-full">
      <NavLink
        to="/home"
        className="bg-[#3CACA5] rounded-full w-14 h-14 right-4 bottom-2 absolute flex justify-center items-center cursor-pointer z-20"
      >
        <Home className="w-10 h-10 text-white" />
      </NavLink>
    </div>
  );
};

export default HomeButton;
