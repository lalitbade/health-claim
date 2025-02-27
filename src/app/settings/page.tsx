"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaUser, FaEnvelope, FaLock, FaBell, FaMoon, FaSun, FaKey, FaShieldAlt } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64">
        <Header />

        <main className="bg-gray-50 dark:bg-gray-800 flex-1 overflow-y-auto mt-16 p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-lg max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Settings</h2>

            {/* Profile Settings */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaUser className="text-blue-500" />
                  <input type="text" placeholder="John Doe" className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaEnvelope className="text-blue-500" />
                  <input type="email" placeholder="john.doe@example.com" className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Change Password */}
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaLock className="text-blue-500" />
                  <input type="password" placeholder="New Password" className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
                </div>

                {/* Two-Factor Authentication */}
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaShieldAlt className="text-blue-500" />
                  <label className="flex-1 text-gray-900 dark:text-white">Enable Two-Factor Authentication</label>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">Notifications</h3>
              <div className="space-y-4">
                {/* Email Notifications */}
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaBell className="text-blue-500" />
                  <label className="flex-1 text-gray-900 dark:text-white">Email Notifications</label>
                  <input type="checkbox" checked={notifications.email} onChange={() => setNotifications({ ...notifications, email: !notifications.email })} className="w-5 h-5" />
                </div>

                {/* SMS Notifications */}
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaBell className="text-blue-500" />
                  <label className="flex-1 text-gray-900 dark:text-white">SMS Notifications</label>
                  <input type="checkbox" checked={notifications.sms} onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })} className="w-5 h-5" />
                </div>

                {/* Push Notifications */}
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaBell className="text-blue-500" />
                  <label className="flex-1 text-gray-900 dark:text-white">Push Notifications</label>
                  <input type="checkbox" checked={notifications.push} onChange={() => setNotifications({ ...notifications, push: !notifications.push })} className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">Appearance</h3>
              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  {darkMode ? <FaMoon className="text-yellow-500" /> : <FaSun className="text-yellow-500" />}
                  <span className="text-gray-900 dark:text-white">Dark Mode</span>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${darkMode ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  <motion.div className="w-5 h-5 bg-white rounded-full" animate={{ x: darkMode ? 24 : 0 }} />
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Save Changes
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
