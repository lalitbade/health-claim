"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, ShieldCheck, Loader } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
    { text: "Hi! 👋 I’m InsuraFlow, your smart insurance assistant. How can I assist you today?", sender: "bot" },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim() || loading) return;
    
    setMessages((prev) => [...prev, { text: query, sender: "user" }]);
    setQuery("");
    setLoading(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, context: "You are InsuraFlow, a smart insurance assistant. Your goal is to streamline the insurance claim process by providing users with step-by-step guidance, policy details, claim eligibility, and real-time claim status updates. Offer clear, concise, and user-friendly responses while ensuring accuracy and compliance with standard insurance procedures." }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.answer, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Sorry, I encountered an issue. Please try again!", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-[50]">
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chatbox */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="w-80 bg-white dark:bg-gray-900 p-5 shadow-xl rounded-xl border dark:border-gray-800 mt-3 flex flex-col"
        >
          {/* Header with InsuraFlow Logo */}
          <div className="flex items-center justify-between border-b pb-3 mb-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck size={24} className="text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">InsuraFlow AI Chat</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-60 overflow-y-auto mb-3 p-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md text-sm max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="flex items-center text-gray-500 text-sm">
                <Loader className="animate-spin w-4 h-4 mr-1" /> Typing...
              </div>
            )}
          </div>

          {/* Input & Send Button */}
          <div className="flex border rounded-md">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about claims, policies, or status updates..."
              className="flex-1 p-2 outline-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className={`px-3 py-2 ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white rounded-r-md`}
              disabled={loading}
            >
              <Send size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;