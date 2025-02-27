"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";

const Header = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-64 right-0 bg-gradient-to-r from-blue-900 to-black text-white shadow-lg px-8 py-4 flex justify-between items-center z-20 backdrop-blur-lg border-b border-gray-800">
      {/* Left: Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="/home" className="text-gray-300 hover:text-blue-400 transition-all">Home</a>
        <a href="/about" className="text-gray-300 hover:text-blue-400 transition-all">About</a>
        <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-all">Contact</a>
      </nav>

      {/* Right: Theme Toggle & Profile */}
      <div className="flex items-center space-x-6">
        {/* Theme Toggle */}
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all shadow-lg w-10 h-10 flex items-center justify-center"
        >
          {isDarkMode ? <FaSun className="text-yellow-400" size={20} /> : <FaMoon className="text-gray-300" size={20} />}
        </button>

        {/* Profile Dropdown */}
        {isLoggedIn && (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <FaUserCircle className="text-blue-400" size={30} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-900 shadow-xl rounded-lg py-2 border border-gray-700">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-600 w-full text-left transition-all rounded-md"
                >
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
