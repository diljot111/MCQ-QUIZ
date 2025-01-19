import React, { useState, useEffect } from "react";

const Theme = () => {
  // Check the saved theme in localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  // Update theme class and save preference to localStorage
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <label className="flex items-center cursor-pointer">
      <span className="mr-3 text-gray-800 dark:text-white">Light</span>
      <div
        onClick={toggleTheme}
        className="relative"
      >
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="sr-only"
        />
        <div className="w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors"></div>
        <div
          className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform ${
            isDarkMode ? "transform translate-x-8" : ""
          }`}
        ></div>
      </div>
      <span className="ml-3 text-gray-800 dark:text-white">Dark</span>
    </label>
  );
};

export default Theme;
