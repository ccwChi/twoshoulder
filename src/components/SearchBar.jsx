import React from "react";
import Search from "../asset/icons/Search";

const SearchBar = () => {
  return (
    <div className="relative h-fit w-full flex justify-end px-3 py-1 ">
      <input
        type="search"
        className="h-10  bg-white font-semibold rounded-full 
          text-lg px-2 py-2.5 w-5/6  inline-flex justify-between items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]"
        placeholder="請輸入關鍵字查詢"
      />
      <Search className="w-6 h-6 text-[#3CACA5] absolute top-3 right-5 bg-white rounded-full cursor-pointer" />
    </div>
  );
};

export default SearchBar;
