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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Timer Settings</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close settings"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Work Duration */}
            <div className="space-y-2">
              <label htmlFor="work-duration" className="block text-sm font-medium text-gray-700">
                Work Session Duration (Minutes)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  id="work-duration"
                  min="1"
                  max="60"
                  step="1"
                  value={workDuration / 60}
                  onChange={onWorkDurationChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="w-16 text-center px-3 py-1 bg-gray-100 rounded-md text-gray-800 font-medium">
                  {workDuration / 60}
                </span>
              </div>
            </div>

            {/* Short Break Duration */}
            <div className="space-y-2">
              <label htmlFor="short-break-duration" className="block text-sm font-medium text-gray-700">
                Short Break Duration (Minutes)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  id="short-break-duration"
                  min="1"
                  max="15"
                  step="1"
                  value={shortBreakDuration / 60}
                  onChange={onShortBreakDurationChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="w-16 text-center px-3 py-1 bg-gray-100 rounded-md text-gray-800 font-medium">
                  {shortBreakDuration / 60}
                </span>
              </div>
            </div>

            {/* Long Break Duration */}
            <div className="space-y-2">
              <label htmlFor="long-break-duration" className="block text-sm font-medium text-gray-700">
                Long Break Duration (Minutes)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  id="long-break-duration"
                  min="1"
                  max="60"
                  step="1"
                  value={longBreakDuration / 60}
                  onChange={onLongBreakDurationChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="w-16 text-center px-3 py-1 bg-gray-100 rounded-md text-gray-800 font-medium">
                  {longBreakDuration / 60}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;