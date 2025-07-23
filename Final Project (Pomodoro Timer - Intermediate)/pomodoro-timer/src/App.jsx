import { RiRestartLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CiPause1 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(1500);
  const [session, setSession] = useState("Work");
  const [completedSessions, setCompletedSessions] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [settings, setSettings] = useState(false);
  const [workSession, setWorkSession] = useState(1500);
  const [shortBreak, setShortBreak] = useState(300);
  const [longBreak, setLongBreak] = useState(900);

  // Effect to handle the timer countdown for 25 minutes (1500 seconds)
  useEffect(() => {
    let timer;
    const audio = new Audio("/timer-sound.mp3");
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && session === "Work") {
      const nextCompleted = completedSessions + 1;
      setCompletedSessions(nextCompleted);
      if (nextCompleted % 4 === 0) {
        setSession("Long Break");
        setTime(900); // Long break duration
        audio.play();
      } else {
        setSession("Short Break");
        setTime(300); // Short break duration
        audio.play();
      }
    } else if (time === 0 && session === "Short Break") {
      setSession("Work");
      setTime(1500); // Work duration
      audio.play();
    } else if (time === 0 && session === "Long Break") {
      setSession("Work");
      setTime(1500); // Work duration after long break
      audio.play();
    }
    return () => clearInterval(timer);
  }, [isRunning, time, session, completedSessions]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(30);
  };

  const openSettings = () => {
    setSettings(true);
  };

  const closeSettings = () => {
    setSettings(false);
  };

  const handleWorkDurationChange = (event) => {
    setWorkSession(event.target.value);
  };
  const handleShortBreakDurationChange = (event) => {
    setShortBreak(event.target.value);
  };
  const handleLongBreakDurationChange = (event) => {
    setLongBreak(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Work Duration:", workSession)
    console.log("Short Break Duration:", shortBreak)
    setSettings(false)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 px-2 text-center mt-5">
        FIP Final Project (Pomodoro Timer - Intermediate)
      </h1>
      <div className="bg-gray-200 h-92 w-[80vw] rounded-lg p-1">
        {/* Session Indicator */}
        <div className="flex justify-between flex-row items-center px-3 py-1 mt-5 rounded-t-lg">
          <span
            className={`font-bold rounded-md px-3 py-1 ${
              session === "Work"
                ? "bg-green-300"
                : session === "Short Break"
                ? "bg-blue-300"
                : "bg-fuchsia-300"
            }`}
          >
            {session}
          </span>
          <span className="cursor-pointer" onClick={openSettings}>
            <IoMdSettings size={25} />
          </span>
        </div>

        {/* Timer Display */}
        <div>
          <h2 className="text-7xl mt-10 font-bold text-center mb-4 font-inconsolata">
            {isRunning ? (
              <>
                {`${Math.floor(time / 60)}`.padStart(2, 0)}:
                {`${time % 60}`.padStart(2, 0)}
              </>
            ) : (
              <>
                {`${Math.floor(time / 60)}`.padStart(2, 0)}:
                {`${time % 60}`.padStart(2, 0)}
              </>
            )}
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-8 items-center mt-10">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
            <span
              onClick={isRunning ? pauseTimer : startTimer}
              className="flex items-center gap-2 "
            >
              {" "}
              {isRunning ? <CiPause1 /> : <CiPlay1 />}
              {isRunning ? "Pause" : "Start"}
            </span>
          </button>
          <button
            onClick={resetTimer}
            className="bg-slate-400 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-500 transition-colors"
          >
            <RiRestartLine />
          </button>
        </div>

        {/* Session Counter */}
        <div className="flex flex-row items-center mt-7 justify-center p-4">
          <p className="flex items-center gap-2">
            <IoMdCheckmarkCircleOutline color="green" />
            You have completed{" "}
            <span className="font-bold">{completedSessions}</span>work sessions.
            <br />
          </p>
        </div>

        {/* Settings Modal */}
        {settings && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-80 p-8 max-h-[90vh] overflow-y-auto h-96">
              <div
                onClick={closeSettings}
                className="cursor-pointer w-full flex flex-row justify-end"
              >
                <IoMdClose size={25} color="red" />
              </div>
              <div>
                <form onSubmit={handleSubmit} className="mt-5">
                  <p>
                    Work Session Duration (Minutes): <br></br>
                    <input
                      className="bg-gray-200 w-15 text-center mr-7"
                      type="number"
                      name="work-duration"
                      value={workSession}
                      id="work-duration"
                      onChange={handleWorkDurationChange}
                    />
                   i.e {workSession/60} minutes
                  </p>
                  <br></br>
                  <p>
                    Short Break Duration (Minutes): <br></br>
                    <input
                      className="bg-gray-200 w-15 text-center mr-7"
                      type="number"
                      name="short-break-duration"
                      value={shortBreak}
                      id="short-break-duration"
                      onChange={handleShortBreakDurationChange}
                    />
                  i.e  {shortBreak/60} minutes
                  </p>
                  <br></br>
                  <p>
                    Long Break Duration (Minutes):
                    <br></br>
                    <input
                      className="bg-gray-200 w-15 text-center mr-7"
                      type="number"
                      name="long-break-duration"
                      value={longBreak}
                      id="long-break-duration"
                      onChange={handleLongBreakDurationChange}
                    />
                   i.e {longBreak/60} minutes
                  </p>
                  <button type="submit" className="mt-4 font-bold bg-green-600 px-2 rounded-md cursor-pointer">Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
