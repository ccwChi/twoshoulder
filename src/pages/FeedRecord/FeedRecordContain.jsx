import ArrowDown from "../../asset/icons/ArrowDown";
import ArrowUp from "../../asset/icons/ArrowUp";
import Pen from "../../asset/icons/Pen";

const FeedRecordContain = () => {
  const feedRecordData = [
    {
      number: "01",
      title: "白蝦池",
      describe: "第 4 批次",
    },
    {
      number: "03",
      title: "龍膽石斑魚池",
      describe: "第 3 批次",
    },
    {
      number: "04",
      title: "白蝦池",
      describe: "第 4 批次",
    },
    {
      number: "05",
      title: "白蝦池",
      describe: "第 4 批次",
    },
  ];

  return (
    <div className="relative w-full flex flex-col flex-1 items-center overflow-hidden">
      <ArrowUp className="h-14 w-14 text-[#bed3d3] absolute top-3 right-0 cursor-pointer" />
      <ArrowDown className="h-14 w-14 text-[#bed3d3] absolute bottom-10 right-0 cursor-pointer" />
      
      <div className="flex flex-wrap justify-center w-full  overflow-y-scroll no-scrollbar gap-y-8 py-6 ">

        {/* 記錄框 */}
        {feedRecordData.map((data, i) => (
          <div
            key={i}
            className="relative w-2/3 aspect-[6/5] bg-[#FF8787] rounded-3xl p-4 cursor-pointer
                            shadow-[5px_5px_20px_5px_rgba(0,0,0,0.3)] flex flex-col"
          >
            <Pen className="absolute text-white w-8 h-8 right-4 cursor-pointer" />
            <p className="text-white font-medium text-xl mb-2">{data.number}</p>
            <p className="text-white font-semibold text-xl h-20">
              {data.title}
            </p>
            <p className="text-white font-medium text-lg">{data.describe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedRecordContain;
