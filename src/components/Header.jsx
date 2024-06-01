import { NavLink, useLocation } from "react-router-dom";
import AngleLeft from "../asset/icons/AngleLeft";
import ArrowRight from "../asset/icons/ArrowRight";
import Bell from "../asset/icons/Bell";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <div className="bg-[#3CACA5] w-full h-14 flex items-center justify-between">
      {!isHome ? (
        <NavLink className="ps-2" to={"/detail"}>
          <AngleLeft className="w-9 h-9 text-white cursor-pointer" />
        </NavLink>
      ) : (
        <div></div>
      )}
      <div className="flex gap-x-6 pe-2">
        <div className="relative">
          <Bell className="w-9 h-9 text-white cursor-pointer" />
          <div className="w-4 h-4 rounded-full absolute top-0 left-4 flex items-center justify-center bg-red-600">
            <p className="text-white text-[10px]">1</p>
          </div>
        </div>
        <ArrowRight className="w-9 h-9 text-white cursor-pointer" />
        <div className="relative flex rounded-full items-center justify-center bg-white w-9 h-9 overflow-hidden cursor-pointer">
          <p className="text-[14px] text-[#3CACA5] font-bold">小明</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
