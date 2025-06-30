import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [dark]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
