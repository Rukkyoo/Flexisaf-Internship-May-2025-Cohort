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
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const getSessionColor = () => {
    switch (session) {
      case "Work":
        return "bg-emerald-100 text-emerald-800";
      case "Short Break":
        return "bg-blue-100 text-blue-800";
      case "Long Break":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Pomodoro Timer</h1>
          <p className="text-blue-100 mt-1">Stay focused, be productive</p>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Session Indicator */}
          <div className="flex justify-between items-center mb-6">
            <span
              className={`text-sm border-2 font-semibold px-3 py-1 rounded-full ${getSessionColor()}`}
            >
              {session}
            </span>
            <button
              onClick={openSettings}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Settings"
            >
              <IoMdSettings size={22} />
            </button>
          </div>

          {/* Timer Display */}
          <div className="mb-8 text-center">
            <div className="text-7xl font-bold font-mono text-gray-800 mb-2">
              {formatTime(time)}
            </div>
            <p className="text-gray-500 text-sm">
              {isRunning ? "Time is running..." : "Ready to focus?"}
            </p>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={isRunning ? pauseTimer : startTimer}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                isRunning
                  ? "bg-amber-500 hover:bg-amber-600 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {isRunning ? <CiPause1 size={20} /> : <CiPlay1 size={20} />}
              {isRunning ? "Pause" : "Start"}
            </button>
            <button
              onClick={resetTimer}
              className="flex items-center gap-2 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
            >
              <RiRestartLine size={18} />
            </button>
          </div>

          {/* Progress */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
              <IoMdCheckmarkCircleOutline
                className="text-green-500"
                size={18}
              />
              <span>
                Completed sessions: <strong>{completedSessions}</strong>
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${(completedSessions % 4) * 25}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {completedSessions % 4 === 0
                ? "Take a long break!"
                : `${4 - (completedSessions % 4)} more for long break`}
            </p>
          </div>
        </div>

        {/* Settings Modal */}
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
      <p className="mt-5">
        Check{" "}
        <a
          className="text-cyan-600 underline"
          target="_blank"
          href="https://github.com/Rukkyoo/Flexisaf-Internship-May-2025-Cohort/tree/main/Final%20Project%20(Pomodoro%20Timer%20-%20Intermediate)"
        >
          Github Repo
        </a>
      </p>
    </div>
  );
};

export default Timer;
