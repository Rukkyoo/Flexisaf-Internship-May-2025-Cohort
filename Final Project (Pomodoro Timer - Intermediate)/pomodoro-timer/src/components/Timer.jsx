import { useState, useEffect } from "react";
import { RiRestartLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CiPause1 } from "react-icons/ci";
import Settings from "./Settings.jsx";

const Timer = () => {
  const [time, setTime] = useState(1500);
  const [session, setSession] = useState("Work");
  const [completedSessions, setCompletedSessions] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [workSession, setWorkSession] = useState(1500);
  const [shortBreak, setShortBreak] = useState(300);
  const [longBreak, setLongBreak] = useState(900);

  // Reset timer whenever session type or durations change
  useEffect(() => {
    if (session === "Work") {
      setTime(workSession);
    } else if (session === "Short Break") {
      setTime(shortBreak);
    } else if (session === "Long Break") {
      setTime(longBreak);
    }
  }, [session, workSession, shortBreak, longBreak]);

  // Effect to handle the timer countdown
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

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  
  const resetTimer = () => {
    setIsRunning(false);
    if (session === "Work") {
      setTime(workSession);
    } else if (session === "Short Break") {
      setTime(shortBreak);
    } else if (session === "Long Break") {
      setTime(longBreak);
    }
  };

  const openSettings = () => setSettingsOpen(true);
  const closeSettings = () => setSettingsOpen(false);

  const handleWorkDurationChange = (event) => {
    const minutes = parseInt(event.target.value);
    setWorkSession(minutes * 60);
  };

  const handleShortBreakDurationChange = (event) => {
    const minutes = parseInt(event.target.value);
    setShortBreak(minutes * 60);
  };

  const handleLongBreakDurationChange = (event) => {
    const minutes = parseInt(event.target.value);
    setLongBreak(minutes * 60);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeSettings();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
            {formatTime(time)}
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
            <span className="font-bold">{completedSessions}</span> work sessions.
            <br />
          </p>
        </div>

        <Settings
          isOpen={settingsOpen}
          onClose={closeSettings}
          workDuration={workSession}
          shortBreakDuration={shortBreak}
          longBreakDuration={longBreak}
          onWorkDurationChange={handleWorkDurationChange}
          onShortBreakDurationChange={handleShortBreakDurationChange}
          onLongBreakDurationChange={handleLongBreakDurationChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Timer;