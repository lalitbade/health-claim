"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaUpload, FaFileAlt, FaHospital, FaClipboardList, FaUser, FaListUl, FaCalendarAlt, FaStickyNote } from "react-icons/fa";

const AddClaim = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    claimType: "Medical",
    claimCategory: "Accident",
    hospital: "City General Hospital",
    date: "",
    description: "",
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-lg max-w-3xl mx-auto mt-10"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Submit Your Claim</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 font-medium mb-2">Full Name</label>
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaUser className="text-blue-500 text-lg" />
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
                </div>
              </div>

              {/* Claim Type */}
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 font-medium mb-2">Claim Type</label>
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaClipboardList className="text-blue-500 text-lg" />
                  <select name="claimType" value={formData.claimType} onChange={handleInputChange} className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white">
                    <option>Medical</option>
                    <option>Vehicle</option>
                    <option>Property</option>
                    <option>Life Insurance</option>
                  </select>
                </div>
              </div>

              {/* Claim Category */}
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 font-medium mb-2">Claim Category</label>
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaListUl className="text-blue-500 text-lg" />
                  <input type="text" name="claimCategory" value={formData.claimCategory} onChange={handleInputChange} className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
                </div>
              </div>

              {/* Hospital / Service Provider */}
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 font-medium mb-2">Hospital / Service Provider</label>
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaHospital className="text-blue-500 text-lg" />
                  <input type="text" name="hospital" value={formData.hospital} onChange={handleInputChange} className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
                </div>
              </div>

              {/* Date of Incident */}
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 font-medium mb-2">Date of Incident</label>
                <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaCalendarAlt className="text-blue-500 text-lg" />
                  <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white" />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col col-span-2">
                <label className="text-gray-700 dark:text-gray-300 font-medium mb-2">Description</label>
                <div className="flex items-start space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <FaStickyNote className="text-blue-500 text-lg" />
                  <textarea name="description" value={formData.description} onChange={handleInputChange} className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white min-h-[100px]" placeholder="Provide details about the claim..."></textarea>
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="mt-6">
              <label className="text-gray-700 dark:text-gray-300 font-medium mb-2 block">Upload Documents & Photos</label>
              <div className="border-dashed border-2 border-gray-300 dark:border-gray-600 p-6 rounded-lg text-center">
                <input type="file" multiple className="hidden" id="fileUpload" onChange={handleFileUpload} />
                <label htmlFor="fileUpload" className="cursor-pointer flex flex-col items-center">
                  <FaUpload className="text-4xl text-blue-500 mb-3" />
                  <span className="text-gray-600 dark:text-gray-300">Click to upload or drag & drop</span>
                </label>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                      <FaFileAlt className="text-red-500" />
                      <span className="text-gray-900 dark:text-white">{file.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Submit Claim
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AddClaim;
