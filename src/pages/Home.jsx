import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTrasition";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Plus from "../asset/icons/Plus";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [direction, setDirection] = useState("right");
  const [selectedButton, setSelectedButton] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    setDirection("left");
    if (index === 3 || index === 4 || index === 5) {
      navigate("/record");
      setShowOverlay(true);
      setTimeout(() => setIsVisible(true), 0);
    }
  };

  useEffect(() => {
    if (showOverlay) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setShowOverlay(false), 300);
    }
  }, [showOverlay]);

  return (
    <PageTransition direction={direction}>
      <Header />
      <TitleBar title={""} />
      <div className=" relative w-full flex flex-col flex-1 items-center overflow-hidden z-0 p-3">
        <div className="  relative w-full flex flex-col flex-1 items-center overflow-hidden z-0 py-3 bg-[#213E40] rounded-md">
          <div className=" flex flex-wrap justify-center w-full  overflow-y-scroll gap-y-2 p-3 pb-3 bg-[#213E40]">
            <p className="w-full text-white font-extrabold text-right text-2xl pe-4 pt-10 ">
              星期一
            </p>
            <div className="w-full flex h-fit ">
              <div className="w-full flex h-full items-end justify-start">
                <div className="bg-[#3CACA5] rounded-full w-12 h-12 flex justify-center items-center cursor-pointer shadow-[2px_3px_2px_0px_rgba(0,0,0,0.15)]">
                  <Plus className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex   w-full  justify-end items-end ">
                <p className="text-white bottom-0 w-full text-right  text-lg font-extrabold">
                  十一月廿九
                </p>
              </div>
              <p className="text-white font-extrabold text-6xl w-full text-right pe-2">
                01/01
              </p>
            </div>
            <div className="w-full bg-slate-200 h-fit p-2 text-gray-400 font-extrabold rounded-md">
              <p>2022/01/01 11:00</p>
              <p>昨晚所放的飼料都有吃完，水色正常</p>
            </div>
            <div className="w-full bg-slate-200 h-fit p-2 text-gray-400 font-extrabold rounded-md">
              <p>2022/01/01 09:00</p>
              <p>需要預購聯豐蝦粉,</p>
              <p>特價只到01/10預購10包</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  sm:max-w-xs relative">
        <div className=" w-full h-0 pb-[100%]"></div>
        <div className="absolute top-0 left-0 w-full h-full  p-4">
          <div className="absolute top-0 left-0 w-full h-full p-4 grid grid-cols-3 gap-2">
            {homeList.map((data, index) => (
              <div
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`flex justify-center items-center aspect-square cursor-pointer rounded-md shadow-[2px_2px_2px_1px_rgba(0,0,0,0.2)] ${
                  selectedButton === index ? "bg-[#C13231]" : "bg-gray-200"
                }`}
              >
                {data.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-8"></div>
      {showOverlay && (
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 ${
            isVisible ? "opacity-50" : "opacity-0"
          }`}
        ></div>
      )}
    </PageTransition>
  );
};

export default Home;

const homeList = [
  { title: "遠程監控" },
  { title: "進水排水" },
  { title: "養水消毒" },
  { title: "批次紀錄" },
  { title: "放苗紀錄" },
  { title: "隨機紀錄" },
  { title: "量測記錄" },
  { title: "收成紀錄" },
  { title: "包裝紀錄" },
];
