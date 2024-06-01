import { Route, Routes, useLocation } from "react-router-dom";
import FeedDetail from "./pages/FeedDetail/FeedDetail";
import FeedRecord from "./pages/FeedRecord/FeedRecord";
import Home from "./pages/Home/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="bg-[#DEE7EE] w-full h-screen flex items-center  justify-center overflow-y-hidde">
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FeedRecord />} />
          <Route path="/detail" element={<FeedDetail />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

// {/* <FeedDetail /> */}
// {/* <FeedRecord /> */}
// {/* <Home /> */}
