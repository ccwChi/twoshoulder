import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import AngleLeft from "../asset/icons/AngleLeft";
import AngleRight from "../asset/icons/AngleRight";
import { modalPageOneData, modalPageTwoData } from "../pages/data";
import Button from "./Button";
import TrashBin from "../asset/icons/TrashBin";


const FeedModal = ({
  showModal,
  deliverInfo,
  toggleModal,
  page,
  setPage,
  selectedItem,
  setSelectedItem,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [currentPage, setCurrentPage] = useState(page || "1");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [showModal]);

  useEffect(() => {
    if (page !== currentPage) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsAnimating(false);
      }, 150); // Match the duration of the animation
    }
  }, [page]);

  return (
    <div>
      {shouldRender && (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className={`fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-hidden bg-black bg-opacity-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="relative py-16 px-4 w-full max-w-full max-h-full"
            onClick={() => {
              toggleModal();
            }}
          >
            <div
              className="flex flex-col bg-[#D8E0EE] rounded-lg h-[80vh] shadow-[4px_4px_1px_0px_rgba(0,0,0,0.2)]"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className={`relative flex flex-col h-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {currentPage === 1 && (
                  <ModalPageOne
                    deliverInfo={deliverInfo}
                    setPage={setPage}
                    setSelectedItem={setSelectedItem}
                  />
                )}
                {currentPage === 2 && (
                  <ModalPageTwo
                    deliverInfo={deliverInfo}
                    selectedItem={selectedItem}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FeedModal;

const ModalPageOne = ({ deliverInfo, setPage, setSelectedItem }) => {
  return (
    <div className="relative flex flex-col h-full">
      <div className="bg-red-0 relative w-full p-3">
        <p className="text-left text-lg text-gray-400  font-semibold truncate ">
          餵養紀錄
        </p>
        <p className="text-left text-lg text-gray-400  font-semibold truncate ">
          第3批次-01白蝦池
        </p>
        <p className="text-left text-lg text-gray-400  font-semibold p-3">
          {deliverInfo.date}
        </p>
        <div className="bg-blue-30 absolute flex gap-x-4 top-0 right-0 px-4 py-2">
          <div className="bg-[#3CACA5] rounded-full w-6 h-6 right-4 bottom-2  flex justify-center items-center cursor-pointer shadow-[2px_2px_1px_0px_rgba(0,0,0,0.2)] ">
            <AngleLeft className=" text-white" />
          </div>{" "}
          <div className="bg-[#3CACA5] rounded-full w-6 h-6 right-4 bottom-2  flex justify-center items-center cursor-pointer shadow-[2px_2px_1px_0px_rgba(0,0,0,0.2)] ">
            <AngleRight className=" text-white" />
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col flex-1 items-center overflow-hidden">
        <div className="flex flex-wrap justify-center w-full  overflow-y-scroll no-scrollbar gap-y-[2px] p-2">
          {/* 記錄框 */}
          {modalPageOneData.map((data, i) => (
            <SwiperSlideWrapper
              key={i}
              data={data}
              setPage={setPage}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      </div>
      <div className="h-20 flex justify-end px-14 items-center">
        <Button className="bg-[#213E40] h-9">
          <p className="text-gray-400 text-lg py-1">確定</p>
        </Button>
      </div>
    </div>
  );
};

const SwiperSlideWrapper = ({ data, setPage, setSelectedItem }) => {
  return (
    <div
      className="relative w-full"
      onClick={(e) => {
        e.preventDefault();
        setPage(2);
        setSelectedItem(data);
      }}
    >
      <Swiper
        slidesPerView={"auto"}
        onSlideChange={(swiper) => {
          if (swiper.activeIndex === 1) {
            swiper.slideTo(1);
          } else {
            swiper.slideTo(0);
          }
        }}
        className="relative w-full rounded-lg p-4 cursor-pointer h-full
        border border-gray-800 flex flex-col"
      >
        <SwiperSlide className="block w-full h-full ">
          <div className="flex w-full h-full flex-col">
            <p className="text-left text-lg text-gray-400  font-semibold truncate p-2">
              {data?.time || ""}
            </p>
            <div>
              {data.content.map((cdata, i) => (
                <div className="flex py-2" key={"cdata" + i}>
                  <p className="text-left text-lg text-gray-400 flex-grow-[3] font-semibold truncate px-2">
                    {cdata?.name  || ""}
                  </p>
                  <p className="text-left text-lg text-gray-400 flex-grow-[1] font-semibold truncate px-2">
                    {cdata?.amount  || ""} {cdata?.unit  || ""}
                  </p>
                  <p className="text-left text-lg text-gray-400 flex-grow-[1] pe-6 flex justify-end font-semibold truncate px-2 ">
                    {cdata?.price  || ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-fit h-full !flex transition-transform duration-500 p-1 items-center">
          <button className="bg-[#F57E7E] w-9 h-9 m1 text-white rounded-full flex justify-center items-center">
            <TrashBin className="h-7 w-7" />
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const ModalPageTwo = ({ deliverInfo, selectedItem }) => {
  const [activeButton, setActiveButton] = useState("feed");
  const [selectedButton, setSelectedButton] = useState(0);

  const handleSelectButtonClick = (index) => {
    setSelectedButton(index);
  };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="relative flex flex-col h-full">
      <div className="bg-red-0 relative w-full p-3">
        <p className="text-left text-lg text-gray-400  font-semibold truncate ">
          餵養紀錄
        </p>
        <p className="text-left text-lg text-gray-400  font-semibold truncate ">
          第3批次-01白蝦池
        </p>
        <p
          className="text-left text-lg text-gray-400  font-semibold p-3"
        >
          {deliverInfo?.date || ""}&nbsp;&nbsp;{selectedItem?.time || ""}
        </p>
      </div>
      <div className="flex gap-x-3 p-4">
        <Button
          className={`w-full px-0 ${
            activeButton === "feed" ? "bg-[#213E40]" : "bg-[#E3EAF2]"
          }`}
          onClick={() => handleButtonClick("feed")}
        >
          <p className="text-lg w-full truncate text-gray-400 font-semibold">
            飼料
          </p>
        </Button>
        <Button
          className={`w-full px-0 ${
            activeButton === "supplements" ? "bg-[#213E40]" : "bg-[#E3EAF2]"
          }`}
          onClick={() => handleButtonClick("supplements")}
        >
          <p className="text-lg w-full truncate text-gray-400 font-semibold">
            營養品
          </p>
        </Button>
        <Button
          className={`w-full px-0 ${
            activeButton === "medicine" ? "bg-[#213E40]" : "bg-[#E3EAF2]"
          }`}
          onClick={() => handleButtonClick("medicine")}
        >
          <p className="text-lg w-full truncate text-gray-400 font-semibold">
            藥品
          </p>
        </Button>
        <Button
          className={`w-full px-0 ${
            activeButton === "additives" ? "bg-[#213E40]" : "bg-[#E3EAF2]"
          }`}
          onClick={() => handleButtonClick("additives")}
        >
          <p className="text-lg w-full truncate text-gray-400 font-semibold">
            添加品
          </p>
        </Button>
      </div>
      <div className="relative w-full flex flex-col flex-1 items-center overflow-hidden">
        <div className="flex flex-wrap justify-center w-full  overflow-y-scroll no-scrollbar gap-y-[2px] p-2">
          {modalPageTwoData.map((data, i) => (
            <div className="flex w-full gap-x-2 p-4" key={"selectItem" + i}>
              <button
                className={`h-10 w-full rounded-full text-sm px-4 py-2.5 inline-flex justify-center items-center text-gray-400 ${
                  selectedButton === i &&
                  "bg-[#213E40]   shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]"
                }`}
                type="button"
                onClick={() => handleSelectButtonClick(i)}
              >
                <p className="text-lg w-full truncate font-semibold">
                  {data.title}
                </p>
              </button>
              <div className="h-10 w-full relative bg-[#E3EAF2] font-semibold rounded-full text-lg py-2.5 inline-flex justify-center items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]">
                <input
                  type="number"
                  className="block text-center w-full pl-3 pr-14 py-2 bg-transparent focus:outline-none text-gray-400"
                  defaultValue={i === 0 ? "5" : ""}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-400 text-lg">公斤</span>
                </div>
              </div>
              <div className="h-10 w-full relative bg-[#E3EAF2] font-semibold rounded-full text-lg py-2.5 inline-flex justify-center items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]">
                <input
                  type="number"
                  className="block text-center w-full pl-2 pr-16 py-2 bg-transparent focus:outline-none text-gray-400"
                  defaultValue={i === 0 ? "5" : ""}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                  <span className="text-gray-400 text-lg">元/公斤</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-20 flex justify-between px-14 items-center">
        <Button className="bg-[#3CACA5] h-9">
          <p className="text-[#A7DFE3] text-lg py-1">取消</p>
        </Button>
        <Button className="bg-[#213E40] h-9">
          <p className="text-gray-400 font-bold text-lg py-1">確定</p>
        </Button>
      </div>
    </div>
  );
};
