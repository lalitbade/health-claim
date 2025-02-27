"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, Send, Loader } from "lucide-react";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim() || loading) return;

    const userMessage = { text: query, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setLoading(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.answer, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Error fetching response. Try again!", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-full shadow-lg focus:outline-none"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chatbox Container */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="w-80 bg-white dark:bg-gray-900 shadow-xl rounded-lg border p-4 mt-3 flex flex-col"
        >
          {/* Chat Messages */}
          <div ref={chatRef} className="h-60 overflow-y-auto mb-3 p-2 space-y-2">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-2 rounded-md text-sm max-w-[100%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center text-gray-500 text-sm"
              >
                <Loader className="animate-spin w-4 h-4 mr-1" /> Typing...
              </motion.div>
            )}
          </div>

          {/* Input & Send Button */}
          <div className="flex border rounded-md">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question..."
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