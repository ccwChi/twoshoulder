import { Route, Routes, useLocation } from "react-router-dom";
import FeedDetail from "./pages/FeedDetail/FeedDetail";
import FeedRecord from "./pages/FeedRecord/FeedRecord";
import Home from "./pages/Home/Home";
import Empty from "./pages/Empty";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './App.css'; // Import the CSS file for animations

function App() {
  const location = useLocation();
  return (
    <div className="bg-[#DEE7EE] w-full h-screen flex items-center justify-center overflow-y-hidden">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 500, exit: 500 }}
          className="h-full flex flex-col w-full"
        >
          <Routes location={location}>
            <Route path="/" element={<FeedRecord />} />
            <Route path="/detail" element={<FeedDetail />} />
            <Route path="/home" element={<Home />} />
            <Route path="/empty" element={<Empty />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;