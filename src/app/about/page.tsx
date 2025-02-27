"use client";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaShieldAlt, FaUsers, FaGlobe, FaCheckCircle } from "react-icons/fa";

const About = () => {
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Insuraflow</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Insuraflow is a leading insurance technology company dedicated to simplifying claims and coverage processes with cutting-edge technology and world-class customer support.
            </p>

            {/* Mission & Vision */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">Our Mission & Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our mission is to create seamless, efficient, and customer-friendly insurance solutions. We aim to make insurance **simple, transparent, and hassle-free** for everyone.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <FaShieldAlt className="text-blue-500" />
                  <span>Secure & Reliable</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <FaUsers className="text-green-500" />
                  <span>Customer-Centric Approach</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <FaGlobe className="text-yellow-500" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <FaCheckCircle className="text-purple-500" />
                  <span>100% Transparency</span>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">Meet Our Team</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our expert team of professionals is dedicated to providing top-tier insurance solutions and exceptional customer service.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default About;
