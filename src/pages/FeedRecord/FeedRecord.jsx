import Home from "../../asset/icons/Home";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import TitleBar from "../../components/TitleBar";
import FeedRecordContain from "./FeedRecordContain";


const FeedRecord = () => {

  return (
    <>
      {/* Header h-14 */}
      <Header />
       {/* TitleBar h-14 */}
      <TitleBar title={"餵養紀錄"} />
       {/* SearchBar h-14 */}
      <SearchBar />
      <FeedRecordContain />
      <div className="h-8 relative w-full">
        <div className="bg-[#3CACA5] rounded-full w-14 z-20 h-14 right-4 bottom-2 absolute flex justify-center items-center cursor-pointer">
          <Home className="w-10 h-10 text-white" />
        </div>
      </div>
    </>
  );
};

export default FeedRecord;
