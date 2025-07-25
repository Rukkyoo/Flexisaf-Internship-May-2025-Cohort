# Pomodoro Timer 🍅⏱️

A customizable productivity timer built with React.js and Tailwind CSS, implementing the Pomodoro Technique (25-minute focused work sessions with short/long breaks).

## Features ✨

- **Three Timer Modes**:
  - 🎯 Work Session (Customizable duration)
  - ☕ Short Break (5 minutes by default)
  - 🌴 Long Break (15 minutes by default)
- **Visual Indicators**:
  - Color-coded UI (green for work, blue for breaks)
  - Progress bar tracking sessions
- **Customizable Settings**:
  - Adjust all timer durations
  - Slider inputs for easy configuration
- **Session Tracking**:
  - Counts completed work sessions
  - Auto-switches to long break every 4 sessions
- **Responsive Design**:
  - Works on mobile, tablet, and desktop

## Technologies Used 🛠️

- **Frontend**:
  - ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
  - ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Build Tool**: Vite (optional)

## Installation 🚀

1. Clone the repository
- git clone https://github.com/Rukkyoo/Flexisaf-Internship-May-2025-Cohort/tree/main/Final%20Project%20(Pomodoro%20Timer%20-%20Intermediate)
- cd pomodoro-timer
- npm install
- npm run dev

## Project Structure 📂
pomodoro-timer/
├── src/
│   ├── components/
│   │   ├── Timer.jsx       # Main timer logic and UI
│   │   └── Settings.jsx    # Settings modal component
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── Screenshots/                 # Pictures
├── public/                 # Static assets
└── README.md

## How to Use 🎮
1. Basic Timer:
- Click ▶️ to start work session
- Click ⏸️ to pause
- Click 🔄 to reset current session

2. Customize Durations:
- Click ⚙️ to open settings
- Adjust sliders for:
- Work session (1-60 mins)
- Short break (1-15 mins)
- Long break (1-60 mins)
- Click "Save Changes"

3. Session Flow:
- Work → Short Break → Work → Short Break → Work → Long Break (after 4 work sessions)
