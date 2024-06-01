import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import FeedDetail from "./pages/FeedDetail";
import FeedRecord from "./pages/FeedRecord";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

const App = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-screen flex flex-col  items-center overflow-hidden">
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<FeedDetail />} />
          <Route path="/record" element={<FeedRecord />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
