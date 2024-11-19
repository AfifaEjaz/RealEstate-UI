import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      console.log("dark hogya");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("light hogya");
    }
  };

  return (
    <>
      <button
        className="fixed z-100 w-16 h-16 top-52 right-6 bg-orange-500 dark:bg-blue-400 rounded-full px-4 py-2"
        onClick={toggleTheme}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
      <HomePage theme={isDarkMode}/>
    </>
  );
}

export default App;
