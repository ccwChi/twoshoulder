
import FeedRecord from "./pages/FeedRecord";
import FeedDetail from "./pages/FeedDetail";

function App() {
  return (
    <div className="bg-[#DEE7EE] w-full h-screen flex items-center  justify-center overflow-y-hidde">
      <div className="container h-full flex flex-col w-full  items-center overflow-y-hidden">
        <FeedDetail />
        {/* <FeedRecord /> */}
      </div>
    </div>
  );
}

export default App;
