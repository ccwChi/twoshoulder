import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import SearchBar from "../components/SearchBar";
import FeedRecordContain from "../components/FeedRecordContain";
import Home from "../asset/icons/Home";

const FeedRecord = () => {
  return (
    <>
      <Header />
      <TitleBar title={"餵養紀錄"} />
      <SearchBar />
      <FeedRecordContain />
      <div className="h-8 relative w-full">
        <div className="bg-[#3CACA5] rounded-full w-14 h-14 right-4 bottom-2 absolute flex justify-center items-center cursor-pointer">
          <Home className="w-10 h-10 text-white" />
        </div>
      </div>
    </>
  );
};

export default FeedRecord;
