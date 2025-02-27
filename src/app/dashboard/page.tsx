"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PolicyDetails from "../components/PolicyDetails";
import DocumentsList from "../components/DocumentsList";
import Graphs from "../components/Graphs";
import Chatbot from "../components/Chatbot";
import StatsCard from "../components/StatsCard";
import RecentClaims from "../components/RecentClaims";
import { FaFileAlt, FaUsers, FaChartBar, FaCheckCircle } from "react-icons/fa";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} transition-all duration-500`}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1 ml-64">
          <Header toggleTheme={() => setDarkMode(!darkMode)} />

          {/* Main Dashboard Layout */}
          <main className="bg-gray-50 dark:bg-gray-800 flex-1 overflow-y-auto mt-16 p-8 space-y-6">
            {/* Top Section - Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard title="Total Claims" value="1,245" icon={<FaFileAlt />} />
              <StatsCard title="Active Users" value="342" icon={<FaUsers />} />
              <StatsCard title="Claims Approved" value="875" icon={<FaCheckCircle />} />
              <StatsCard title="Pending Claims" value="370" icon={<FaChartBar />} />
            </div>

            {/* Graphs Section */}
            <Graphs />

            {/* Chatbot */}
            <Chatbot />

            {/* Policy Details & Documents Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Policy Details (2/3 Width) */}
              <div className="md:col-span-2">
                <PolicyDetails />
              </div>
              {/* Documents (1/3 Width) */}
              <div className="md:col-span-1">
                <DocumentsList />
              </div>
            </div>

            {/* Recent Claims */}
            <RecentClaims />
          </main>
        </div>
      </div>
    </div>
  );
}
