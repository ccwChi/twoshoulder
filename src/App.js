import { useState } from "react";
import Header from "./components/Header";
import AngleDown from "./asset/icons/AngleDown";
import Search from "./asset/icons/Search";

function App() {
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
    <div className="bg-[#DEE7EE] w-full h-screen flex items-center  justify-center overflow-y-hidde">
      <div className="container h-full flex flex-col w-full  items-center overflow-y-hidden">
        <Header />
        <div className="w-full h-12 flex justify-between p-3">
          {" "}
          <p className="text-gray-500 text-2xl m-0.5 font-semibold">餵養紀錄</p>
          <DropdownButton />
        </div>
        <div className="relative h-fit w-full flex justify-end p-3 mt-3 ">
          <input
            type="search"
            className="h-10  bg-white font-semibold rounded-full 
          text-lg px-2 py-2.5 w-5/6  inline-flex justify-between items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]"
            placeholder="請輸入關鍵字查詢"
          />
          <Search className="w-6 h-6 text-[#3CACA5] absolute top-5 right-5 bg-white rounded-full " />
        </div>

          <div className="w-full flex flex-col flex-1 items-center overflow-hidden bg-red-500 z-50">
            <div className="flex flex-col justify-center items-center w-full  overflow-y-scroll">
              {feedRecordData.map((data, i) => (
                <div
                  key={i}
                  className="w-64 aspect-square bg-[#FF8787] rounded-3xl p-4 
                                shadow-[5px_5px_20px_5px_rgba(0,0,0,0.3)] flex flex-col"
                >
                  <p className="text-white font-medium text-xl mb-2">
                    {data.number}
                  </p>
                  <p className="text-white font-semibold text-xl h-20">
                    {data.title}
                  </p>
                  <p className="text-white font-medium text-lg">
                    {data.describe}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="h-12"></div>
      </div>
    </div>
  );
}

export default App;

const DropdownButton = ({ selectedOption, setSelectedOption, contryData }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        className="h-10  bg-white font-semibold rounded-full 
        text-sm px-2 py-2.5 w-40  inline-flex justify-between items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]"
        type="button"
      >
        <p className="text-left text-lg text-gray-400">屏東歸來廠</p>
        <AngleDown className="w-6 h-6 text-[#3CACA5]" />
      </button>
      {isOpen && (
        <div className="z-10 absolute h-52 mt-1 w-36  overflow-y-scroll bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
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
    <div className="overflow-y-hidden bg-slate-600">
      <div className="flex flex-col justify-center items-center w-full h-full  gap-y-6 p-4">
        {feedRecordData.map((data, i) => (
          <div
            key={i}
            className="w-64 h-56 bg-[#FF8787] rounded-3xl p-4 
                                shadow-[5px_5px_20px_5px_rgba(0,0,0,0.3)] flex flex-col"
          >
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
