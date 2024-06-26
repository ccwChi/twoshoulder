import ArrowDown from "../asset/icons/ArrowDown";
import ArrowUp from "../asset/icons/ArrowUp";
import Pen from "../asset/icons/Pen";
import { feedRecordData } from "../pages/data";

const FeedRecordContain = ({ handleButtonClick = () => {} }) => {
  return (
    <div className="relative w-full flex flex-col flex-1 items-center overflow-hidden z-0">
      <ArrowUp className="h-14 w-14 text-[#bed3d3] absolute top-3 right-0 cursor-pointer" />
      <ArrowDown className="h-14 w-14 text-[#bed3d3] absolute bottom-10 right-0 cursor-pointer" />

      <div className="flex flex-wrap justify-center w-full  overflow-y-scroll no-scrollbar gap-y-8 py-6 ">
        {/* 記錄框 */}
        {feedRecordData.map((data, i) => (
          <div
          onClick={() => handleButtonClick("detail")}
            key={i}
            className="relative w-2/3 aspect-[6/5] bg-[#FF8787] rounded-3xl p-4 cursor-pointer
                            shadow-[5px_5px_20px_5px_rgba(0,0,0,0.3)] flex flex-col"
          >
            <Pen className="absolute text-white w-8 h-8 right-4 cursor-pointer" />
            <p className="text-white font-medium text-2xl mb-2">
              {data.number}
            </p>
            <p className="text-white font-semibold text-2xl h-20">
              {data.title}
            </p>
            <p className="text-white font-medium text-xl">{data.describe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedRecordContain;
