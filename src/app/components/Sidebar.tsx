"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderPlus,
  List,
  Settings,
  LogOut,
  Menu,
  User,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "Guest");
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Add a Claim", icon: FolderPlus, path: "/addclaim" },
    { name: "Claims Listing", icon: List, path: "/claimshistory" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <Tooltip.Provider>
      <motion.aside
        initial={{ width: "16rem" }}
        animate={{ width: isCollapsed ? "5rem" : "16rem" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-screen fixed top-0 left-0 bg-gradient-to-br from-[#1E1F47] via-[#212E74] to-[#5500FF] text-white flex flex-col shadow-2xl border-r border-gray-800 backdrop-blur-lg"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <ShieldCheck size={28} className="text-blue-300 drop-shadow-lg" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
                >
                  InsuraFlow
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 mt-6 space-y-4">
          {menuItems.map((item) => (
            <Tooltip.Root key={item.name} delayDuration={200}>
              <Tooltip.Trigger asChild>
                <Link href={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all cursor-pointer shadow-md ${
                      pathname === item.path
                        ? "bg-blue-500/20 text-white shadow-lg scale-105"
                        : "hover:bg-white/10 hover:shadow-md hover:shadow-blue-500/50 text-gray-300"
                    }`}
                  >
                    <item.icon size={24} className="text-blue-300 drop-shadow" />
                    {!isCollapsed && (
                      <span className="text-base font-medium">{item.name}</span>
                    )}
                  </motion.div>
                </Link>
              </Tooltip.Trigger>
              {isCollapsed && (
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="right"
                    className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm shadow-lg"
                  >
                    {item.name}
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              )}
            </Tooltip.Root>
          ))}
        </nav>

        {/* Profile & Logout Section */}
        <div className="border-t border-gray-800 p-6 mt-auto bg-white/10 backdrop-blur-md">
          <div className="flex items-center justify-between">
            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shadow-inner">
                <User size={24} className="text-blue-300 drop-shadow-lg" />
              </div>
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    <h2 className="text-lg font-semibold">{username}</h2>
                    <p className="text-sm text-gray-400">Customer</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stylish Logout Button */}
            <motion.button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-all shadow-lg"
            >
              <LogOut size={18} />
            </motion.button>
          </div>
        </div>
      </motion.aside>
    </Tooltip.Provider>
  );
};

export default Sidebar;
