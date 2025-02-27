"use client";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaComment } from "react-icons/fa";

const Contact = () => {
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
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-lg max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have any questions? Feel free to reach out to us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <FaUser className="text-blue-500" />
                <input type="text" placeholder="Your Name" className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
              </div>
              <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <FaEnvelope className="text-blue-500" />
                <input type="email" placeholder="Your Email" className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-6">
              <FaComment className="text-blue-500" />
              <textarea className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white min-h-[100px]" placeholder="Your Message"></textarea>
            </div>

            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full">
              Send Message
            </button>

            {/* Contact Info */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>Gandhi Institute of Technology and Management,Hyderabad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-green-500" />
                  <span>+91 8123412564</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-500" />
                  <span>support@insuraflow.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
