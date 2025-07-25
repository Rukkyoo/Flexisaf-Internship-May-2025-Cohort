import { IoMdClose } from "react-icons/io";

const Settings = ({
  isOpen,
  onClose,
  workDuration,
  shortBreakDuration,
  longBreakDuration,
  onWorkDurationChange,
  onShortBreakDurationChange,
  onLongBreakDurationChange,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-80 p-8 max-h-[90vh] overflow-y-auto h-96">
        <div
          onClick={onClose}
          className="cursor-pointer w-full flex flex-row justify-end"
        >
          <IoMdClose size={25} color="red" />
        </div>
        <div>
          <form onSubmit={onSubmit} className="mt-5">
            <p>
              Work Session Duration (Minutes): <br></br>
              <input
                className="bg-gray-200 w-15 text-center mr-7"
                type="number"
                name="work-duration"
                value={workDuration / 60}
                id="work-duration"
                onChange={onWorkDurationChange}
                min="1"
              />
              minutes
            </p>
            <br></br>
            <p>
              Short Break Duration (Minutes): <br></br>
              <input
                className="bg-gray-200 w-15 text-center mr-7"
                type="number"
                name="short-break-duration"
                value={shortBreakDuration / 60}
                id="short-break-duration"
                onChange={onShortBreakDurationChange}
                min="1"
              />
              minutes
            </p>
            <br></br>
            <p>
              Long Break Duration (Minutes):
              <br></br>
              <input
                className="bg-gray-200 w-15 text-center mr-7"
                type="number"
                name="long-break-duration"
                value={longBreakDuration / 60}
                id="long-break-duration"
                onChange={onLongBreakDurationChange}
                min="1"
              />
              minutes
            </p>
            <button
              type="submit"
              className="mt-4 font-bold bg-green-600 px-2 rounded-md cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;