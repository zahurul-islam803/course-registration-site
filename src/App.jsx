import "./App.css";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <div className="pb-[84px]">
      <h1 className="text-3xl text-[#1C1B1B] font-bold mt-12 mb-8 text-center">
        Course Registration
      </h1>
      <Courses></Courses>
    </div>
  );
}

export default App;
