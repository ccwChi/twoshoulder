import React, { useRef } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Calendar from "../components/Calendar";
import Home from "../asset/icons/Home";
import Plus from "../asset/icons/Plus";
import TrashBin from "../asset/icons/TrashBin";
import { Swiper, SwiperSlide } from "swiper/react";

const FeedDetail = () => {
  return (
    <>
      <Header />
      <TitleBar title={"01 白蝦池"} />
      <div className="flex w-full flex-1 ">
        {/* 左邊欄 這邊再分成日期欄 資料欄 留白欄 */}
        <div className="w-10/12 bg-blue-00 ">
          {/* 日期欄 */}
          <div className="h-fit w-full flex flex-col gap-y-2 mt-2">
            <div className="flex ps-4 items-center gap-x-4">
              <button
                className="h-10  bg-[#E2EDF4] rounded-full 
                         text-sm px-4 py-2.5 w-64  inline-flex justify-between items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]"
                type="button"
              >
                <p className="text-left text-lg text-gray-400  font-semibold">
                  2022/01/01 00:00
                </p>
                <Calendar className="w-6 h-6 text-[#3CACA5]" />
              </button>
              <span className="text-gray-600 font-bold text-3xl pe-4"> ~ </span>{" "}
            </div>
            <div className="flex justify-end">
              <button
                className="h-10  bg-[#E2EDF4] rounded-full 
                         text-sm px-4 py-2.5 w-64  inline-flex justify-between items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)]"
                type="button"
              >
                <p className="text-left text-lg text-gray-400  font-semibold">
                  2022/01/20 00:00
                </p>
                <Calendar className="w-6 h-6 text-[#3CACA5]" />
              </button>
            </div>
          </div>
          {/* 資料欄 */}
          <div className="flex flex-col ps-4 py-4">
            <p className="text-left text-lg text-gray-400  font-semibold">
              目前共09筆資料
            </p>
            <div className="flex w-full flex-col py-2 gap-y-4">
              {recordDetailData.map((row, i) => (
                <SwiperSlideWrapper key={i} data={row} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="bg-[#3CACA5] rounded-full w-14 h-14 right-4 top-0 absolute flex justify-center items-center cursor-pointer shadow-[2px_3px_2px_0px_rgba(0,0,0,0.15)]">
            <Plus className="w-10 h-10 text-white" />
          </div>
          <div className="bg-[#3CACA5] rounded-full w-14 h-14 right-4 bottom-2 absolute flex justify-center items-center cursor-pointer shadow-[2px_3px_2px_0px_rgba(0,0,0,0.15)]">
            <Home className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedDetail;

const recordDetailData = [
  { date: "2022/01/20", title: "第三批次餵養紀錄" },
  { date: "2022/01/18", title: "第三批次餵養紀錄" },
  { date: "2022/12/15", title: "第三批次餵養紀錄" },
  { date: "2022/12/14", title: "第三批次餵養紀錄" },
  { date: "2022/12/10", title: "第三批次餵養紀錄" },
  { date: "2022/12/07", title: "第三批次餵養紀錄" },
  { date: "2022/12/05", title: "第三批次餵養紀錄" },
  { date: "2022/12/04", title: "第三批次餵養紀錄" },
  { date: "2022/12/01", title: "第三批次餵養紀錄" },
  { date: "2022/12/01", title: "第三批次餵養紀錄" },
  { date: "2022/12/01", title: "第三批次餵養紀錄" },
];

const SwiperSlideWrapper = ({ data }) => {
  return (
    <div className="relative">
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
          <div className="flex w-full h-full items-center ps-4">
            <p className="text-left text-base text-gray-400  font-semibold">
              {data.date} {data.title}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-fit h-full !flex !justify-center !items-center transition-transform duration-500 p-1">
          <button className="bg-[#F57E7E] w-9 h-9 m1 text-white rounded-full flex justify-center items-center">
            <TrashBin />
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// import React, { useRef } from "react";

// export const SwipeToDelete = () => {
//   const rows = [{ title: "1" }, { title: "2" }, { title: "3" }, { title: "4" }];
//   return (
//     <div className="w-4/5 border overflow-hidden">
//       {rows.map((row, i) => (
//         <Item key={i}>
//           <p className="flex-1">{row.title}</p>
//           <button className="bg-red-500 text-darkblue px-3 py-1 rounded hidden">Delete</button>
//         </Item>
//       ))}
//     </div>
//   );
// };

// const Item = ({ children }) => {
//   const ref = useRef();
//   let downX;

//   const onPointerMove = (e) => {
//     const newX = e.clientX;

//     if (newX - downX < -30) {  // 當滑動距離大於30px時
//       ref.current.style.transform = "translateX(-55px)";  // 元素左移55px，顯示刪除按鈕
//     } else {
//       ref.current.style.transform = "translateX(0px)";  // 元素保持原位
//     }
//   };

//   const onPointerDown = (e) => {
//     downX = e.clientX;  // 記錄起始點
//     ref.current.addEventListener("pointermove", onPointerMove);  // 綁定滑動事件
//   };

//   const onPointerUp = () => {
//     ref.current.removeEventListener("pointermove", onPointerMove);  // 解除滑動事件
//   };

//   return (
//     <div
//       className="flex bg-gray-200 my-1 transition-transform duration-500"
//       onPointerDown={onPointerDown}
//       onPointerUp={onPointerUp}
//       ref={ref}
//     >
//       {children}
//     </div>
//   );
// };

// export default SwipeToDelete;
