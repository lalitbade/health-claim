"use client";
import { useState } from "react";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";

const Header = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = true; // Change this based on authentication state

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  return (
    <header className="fixed top-0 left-64 right-0 bg-white dark:bg-gray-900 shadow-md px-8 py-4 flex justify-between items-center z-20">
      {/* Left: Navigation */}
      <div className="flex items-center space-x-8">
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</a>
        </nav>
      </div>

      {/* Right: Theme Toggle & Profile */}
      <div className="flex items-center space-x-6">
        {/* Theme Toggle */}
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center w-10 h-10 transition duration-300"
        >
          {isDarkMode ? <FaSun className="text-yellow-500" size={20} /> : <FaMoon className="text-gray-800" size={20} />}
        </button>

        {/* Profile Dropdown */}
        {isLoggedIn && (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <FaUserCircle className="text-gray-600 dark:text-gray-300" size={30} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                <button className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
