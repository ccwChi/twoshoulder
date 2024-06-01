import { useState } from "react";
import ArrowDown from "../../asset/icons/ArrowDown";
import ArrowUp from "../../asset/icons/ArrowUp";
import Home from "../../asset/icons/Home";
import Header from "../../components/Header";
import TitleBar from "../../components/TitleBar";
import { SwiperSlide, Swiper } from "swiper/react";
import TrashBin from "../../asset/icons/TrashBin";
import Calendar from "../../asset/icons/Calendar";
import FeedModal from "./FeedModal";

import Plus from "../../asset/icons/Plus";
import Button from "../../components/Button";
import { recordDetailData } from "./data";

const FeedDetail = () => {
  return (
    <>
      <Header />
      <TitleBar title={"01 白蝦池"} />
      <DateSelectBar />
      <FeedDetailContain />
      <div className="h-12 relative w-full">
        <div className="bg-[#3CACA5] rounded-full w-14 h-14 right-4 bottom-2 absolute flex justify-center items-center cursor-pointer z-20">
          <Home className="w-10 h-10 text-white" />
        </div>
      </div>
    </>
  );
};

export default FeedDetail;

const FeedDetailContain = () => {
  return (
    <div className="relative w-full flex flex-col flex-1 overflow-hidden px-4">
      <ArrowUp className="h-14 w-14 text-[#bed3d3] absolute top-4 right-0 cursor-pointer" />
      <ArrowDown className="h-14 w-14 text-[#bed3d3] absolute bottom-6 right-0 cursor-pointer" />
      <p className="text-left text-lg text-gray-400 font-semibold">
        目前共 {`${recordDetailData.length}`.padStart(2, "0")} 筆資料
      </p>
      <div className=" flex flex-wrap w-full  overflow-y-scroll no-scrollbar gap-y-4 py-2 ">
        {recordDetailData.map((row, i) => (
          <SwiperSlideWrapper key={i} data={row} />
        ))}
      </div>
    </div>
  );
};

const SwiperSlideWrapper = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [page, setPage] = useState(1);
  const toggleModal = () => {
    if (page === 2) {
      setPage(1);
      setSelectedItem(null);
    } else if (page === 1) {
      setShowModal(!showModal);
    }
  };
  return (
    <div
      className="relative w-5/6"
      onClick={(e) => {
        e.preventDefault();
        toggleModal();
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
        className="h-10 bg-[#E2EDF4] rounded-full 
        text-sm py-2.5 inline-flex justify-between items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]"
      >
        <SwiperSlide className="block w-full h-full ">
          <div className="flex w-full h-full items-center">
            <p className="text-left text-base text-gray-400  font-semibold truncate px-4">
              {data.date} {data.title}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-fit h-full !flex !justify-center !items-center transition-transform duration-500 p-1">
          <button className="bg-[#F57E7E] w-9 h-9 m1 text-white rounded-full flex justify-center items-center">
            <TrashBin className="h-7 w-7" />
          </button>
        </SwiperSlide>
      </Swiper>
      <FeedModal
        showModal={showModal}
        setShowModal={setShowModal}
        toggleModal={toggleModal}
        deliverInfo={data}
        page={page}
        setPage={setPage}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
};

const DateSelectBar = () => {
  return (
    <div className="flex w-full mt-4 h-24">
      <div className="w-full flex flex-col gap-y-2">
        <div className="flex ps-4 items-center gap-x-4">
          <Button className="w-64">
            <p className="text-left text-lg text-gray-400 font-semibold">
              2022/01/20 00:00
            </p>
            <Calendar className="w-6 h-6 text-[#3CACA5]" />
          </Button>
          <span className="text-gray-600 font-bold text-3xl pe-4"> ~ </span>{" "}
        </div>
        <div className="flex justify-end">
          <Button className="w-64">
            <p className="text-left text-lg text-gray-400  font-semibold">
              2022/01/20 00:00
            </p>
            <Calendar className="w-6 h-6 text-[#3CACA5]" />
          </Button>
        </div>
      </div>
      {/* 裝新增按鈕的空間 */}
      <div className="w-20 relative">
        <div className="bg-[#3CACA5] rounded-full w-14 h-14 right-4 top-0 absolute flex justify-center items-center cursor-pointer shadow-[2px_3px_2px_0px_rgba(0,0,0,0.15)]">
          <Plus className="w-10 h-10 text-white" />
        </div>
      </div>
    </div>
  );
};
