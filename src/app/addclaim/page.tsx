"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot";
import ClaimResultPage from "../components/ClaimResultPage";
import { FaUpload, FaFileAlt, FaCheckCircle, FaSpinner, FaTrash, FaInfoCircle, FaClipboardList } from "react-icons/fa";
import StatsCard from "../components/StatsCard";
import RecentClaims from "../components/RecentClaims";

const ProcessingOverlay = ({ onClose }: { onClose: () => void }) => {
  const processingSteps = [
    "Extracting details from document...",
    "Applying AI algorithms...",
    "Verifying claim details...",
    "Calculating expected results...",
    "Finalizing claim submission...",
  ];
  const [currentStep, setCurrentStep] = useState(0);

  useState(() => {
    let step = 0;
    const interval = setInterval(() => {
      setCurrentStep(step);
      step++;
      if (step >= processingSteps.length) {
        clearInterval(interval);
        setTimeout(onClose, 2000);
      }
    }, 1500);
  });

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <motion.div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl shadow-2xl text-white text-center max-w-lg">
        <FaCheckCircle className="text-6xl mx-auto mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold">Analyzing Your Claim</h2>
        <p className="mt-2 text-gray-200">Please wait while we process your data...</p>
        <div className="mt-6 space-y-3">
          {processingSteps.map((step, index) => (
            <motion.div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${index <= currentStep ? "bg-white bg-opacity-20" : "bg-gray-500 bg-opacity-10"}`}>
              {index < currentStep ? <FaCheckCircle className="text-green-400" /> : <FaSpinner className="animate-spin" />}
              <span>{step}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const AddClaim = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [claimResponse, setClaimResponse] = useState<any>(null);

  const handleSubmit = async () => {
    if (files.length === 0) {
      alert("Please upload a document.");
      return;
    }

    setIsProcessing(true);
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));

    try {
      const response = await fetch("http://172.21.162.243:8000/process-claim", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      setClaimResponse(result);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit the claim. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64">
        <Header />

        <main className="bg-gray-50 dark:bg-gray-800 flex-1 overflow-y-auto mt-16 p-8 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <StatsCard title="Total Claims" value="1,245" icon={<FaClipboardList />} />
            <StatsCard title="Pending Claims" value="320" icon={<FaInfoCircle />} />
            <StatsCard title="Approved Claims" value="925" icon={<FaCheckCircle />} />
          </div>

          <motion.div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">Submit Your Claim</h2>
            <div className="text-center p-6 border-2 border-dashed rounded-lg bg-gray-100 dark:bg-gray-800">
              <FaUpload className="text-4xl text-blue-500 mb-3 mx-auto" />
              <p className="text-gray-600 dark:text-gray-300">Drag & drop files here, or click to upload</p>
              <input type="file" multiple className="hidden" id="fileUpload" onChange={handleFileUpload} />
              <label htmlFor="fileUpload" className="cursor-pointer block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg">Upload Documents</label>
              {files.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <FaFileAlt className="text-red-500" />
                        <span className="text-gray-900 dark:text-white">{file.name}</span>
                      </div>
                      <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={handleSubmit} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Submit Claim
              </button>
            </div>
          </motion.div>

          <RecentClaims />
        </main>
        <Chatbot />
      </div>
      {isProcessing && <ProcessingOverlay onClose={() => setIsProcessing(false)} />}
      {claimResponse && <ClaimResultPage responseData={claimResponse} onClose={() => setClaimResponse(null)} />}
    </div>
  );
};

export default AddClaim;
