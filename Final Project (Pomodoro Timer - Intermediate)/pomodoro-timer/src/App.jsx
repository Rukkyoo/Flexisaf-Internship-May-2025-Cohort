import { RiRestartLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 px-2 text-center mt-5">
        FIP Final Project (Pomodoro Timer - Intermediate)
      </h1>
      <div className="bg-gray-200 h-92 w-[80vw] rounded-lg p-1">

        {/* Session Indicator */}
        <div className="flex justify-between flex-row items-center px-3 py-1 mt-5 rounded-t-lg">
          <span className="bg-slate-300 rounded-md px-3 py-1">Work</span>
          <span className="bg-slate-300 rounded-md px-3 py-1">Short Break</span>
          <span className="bg-slate-300 rounded-md px-3 py-1">Long Break</span>
        </div>

        {/* Timer Display */}
        <div>
          <h2 className="text-7xl mt-10 font-bold text-center mb-4 font-inconsolata">25:00</h2>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-8 items-center mt-10">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            <span className="flex items-center gap-2">
              {" "}
              <CiPlay1 />
              Start
            </span>
          </button>
          <button className="bg-slate-400 text-white px-4 py-2 rounded-lg">
            <RiRestartLine />
          </button>
        </div>

        {/* Session Counter */}
        <div className="flex flex-row items-center mt-7 justify-center p-4">
          <p className="flex items-center gap-2">
            <IoMdCheckmarkCircleOutline color="green"/>
            Completed Work Sessions: <span className="font-bold">0</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
