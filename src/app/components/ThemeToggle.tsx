"use client";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
      {theme === "dark" ? <Sun className="text-yellow-300" /> : <Moon className="text-gray-900" />}
    </button>
  );
};

export default ThemeToggle;
