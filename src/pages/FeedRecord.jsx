import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTrasition";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import FeedRecordContain from "../components/FeedRecordContain";
import HomeButton from "../components/HomeButton";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const FeedRecord = () => {
  const [direction,setDirection] = useState("left")
  const [showOverlay, setShowOverlay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    setShowOverlay(true);
    setTimeout(() => setIsVisible(true), 0);
    if (path === "home") {
      setDirection("right")
      navigate("/home");
    }else if (path === "detail"){
      navigate('/detail')
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
      <TitleBar title={"餵養紀錄"} />
      <SearchBar />
      <FeedRecordContain handleButtonClick={handleButtonClick}/>
      <HomeButton handleButtonClick={handleButtonClick}/>
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

export default FeedRecord;
