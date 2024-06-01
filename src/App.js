import FeedDetail from "./pages/FeedDetail/FeedDetail";
import FeedRecord from "./pages/FeedRecord/FeedRecord";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="bg-[#DEE7EE] w-full h-screen flex items-center  justify-center overflow-y-hidde">
      <div className="container h-full flex flex-col w-full  items-center overflow-y-hidden">
        <FeedDetail />
        {/* <FeedRecord /> */}
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
