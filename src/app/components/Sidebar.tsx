"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderPlus, List, Settings, LogOut, Menu, User, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "Guest");
  }, []);

  // Navigation Items
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Add a Claim", icon: FolderPlus, path: "/addclaim" },
    { name: "Claims Listing", icon: List, path: "/claims-history" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <Tooltip.Provider>
      <motion.aside
        initial={{ width: "16rem" }}
        animate={{ width: isCollapsed ? "5rem" : "16rem" }}
        transition={{ duration: 0.3 }}
        className="h-screen fixed top-0 left-0 bg-gray-900 text-white flex flex-col shadow-xl border-r border-gray-800"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <ShieldCheck size={28} className="text-blue-500" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xl font-bold"
                >
                  InsuraFlow
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
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
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all cursor-pointer ${
                      pathname === item.path
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-gray-800 text-gray-300"
                    }`}
                  >
                    <item.icon size={24} />
                    {!isCollapsed && <span className="text-base font-medium">{item.name}</span>}
                  </motion.div>
                </Link>
              </Tooltip.Trigger>
              {isCollapsed && (
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="right"
                    className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm shadow-md"
                  >
                    {item.name}
                    <Tooltip.Arrow className="fill-gray-700" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              )}
            </Tooltip.Root>
          ))}
        </nav>

        {/* Profile & Logout Section */}
        <div className="border-t border-gray-800 p-4 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <User size={24} />
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

          {/* Logout Button */}
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("username");
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            className="flex items-center gap-4 p-3 mt-4 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all w-full"
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="text-base font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>
    </Tooltip.Provider>
  );
};

export default Sidebar;
