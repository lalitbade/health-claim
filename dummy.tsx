"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
  FaUpload,
  FaFileAlt,
  FaUser,
  FaClipboardList,
  FaHospital,
  FaCity,
  FaMoneyBillWave,
  FaBriefcase,
  FaFileSignature,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import Chatbot from "../components/Chatbot";


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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl shadow-2xl text-white text-center max-w-lg"
      >
        <FaCheckCircle className="text-6xl mx-auto mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold">Our Advanced AI Algorithm is analyzing Your Claim</h2>
        <p className="mt-2 text-gray-200">Please wait while we analyze your data...</p>
        <div className="mt-6 space-y-3">
          {processingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: index <= currentStep ? 1 : 0.2, x: 0 }}
              transition={{ delay: index * 0.5 }}
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                index <= currentStep ? "bg-white bg-opacity-20" : "bg-gray-500 bg-opacity-10"
              }`}
            >
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
  const [selectedMethod, setSelectedMethod] = useState<"text" | "document">("text");
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    diagnosisCode: "",
    procedureCode: "",
    patientAge: "",
    patientGender: "Male",
    providerSpeciality: "",
    patientIncome: "",
    patientMaritalStatus: "Single",
    patientEmploymentStatus: "Employed",
    providerLocation: "",
    claimType: "Medical",
    claimSubmissionMethod: "",
  });
  const handleSubmit = async () => {
    if (selectedMethod === "document" && files.length === 0) {
      alert("Please upload a document.");
      return;
    }
  
    setIsProcessing(true);
    const formData = new FormData();
  
    if (selectedMethod === "document") {
      files.forEach((file) => {
        formData.append("file", file);
      });
    } 
      // else {
      //   Object.entries(formData).forEach(([key, value]) => {
      //     formData.append(key, value as string);
      //   });
      // }
  
    try {
      const response = await fetch("http://172.21.4.224:8000/process-claim", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log("Response Data:", result);
  
      if (result.message === "Claim processed successfully") {
        alert(
          `Claim Decision: ${result.message}\nApproval Probability: ${result.result}`
        );
      } else {
        alert("Error processing claim. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit the claim. Please check your network connection and try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

            {/* Tab Selection */}
            <div className="flex mb-6">
              <button
                onClick={() => setSelectedMethod("text")}
                className={`px-4 py-2 rounded-l-lg border ${selectedMethod === "text" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"} transition`}
              >
                Text-Based Analysis
              </button>
              <button
                onClick={() => setSelectedMethod("document")}
                className={`px-4 py-2 rounded-r-lg border ${selectedMethod === "document" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"} transition`}
              >
                Document-Based Analysis
              </button>
            </div>

            {/* Text-Based Analysis Form */}
            {selectedMethod === "text" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Diagnosis Code", name: "diagnosisCode", icon: <FaFileSignature /> },
                  { label: "Procedure Code", name: "procedureCode", icon: <FaClipboardList /> },
                  { label: "Patient Age", name: "patientAge", icon: <FaUser />, type: "number" },
                  { label: "Patient Gender", name: "patientGender", type: "select", options: ["Male", "Female", "Other"] },
                  { label: "Provider Specialty", name: "providerSpeciality", icon: <FaHospital /> },
                  { label: "Patient Income", name: "patientIncome", icon: <FaMoneyBillWave />, type: "number" },
                  { label: "Patient Marital Status", name: "patientMaritalStatus", type: "select", options: ["Single", "Married", "Divorced"] },
                  { label: "Patient Employment Status", name: "patientEmploymentStatus", type: "select", options: ["Employed", "Unemployed", "Self-Employed"] },
                  { label: "Provider Location", name: "providerLocation", icon: <FaCity /> },
                  { label: "Claim Type", name: "claimType", type: "select", options: ["Medical", "Vehicle", "Property", "Life Insurance"] },
                  { label: "Claim Submission Method", name: "claimSubmissionMethod", icon: <FaCheckCircle /> },
                ].map(({ label, name, icon, type = "text", options }) => (
                  <div key={name} className="flex flex-col">
                    <label className="font-medium">{label}</label>
                    {type === "select" ? (
                      <select name={name} onChange={handleInputChange} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg outline-none">
                        {options?.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                        {icon}
                        <input type={type} name={name} onChange={handleInputChange} className="bg-transparent flex-1 outline-none ml-3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {/* Document-Based Analysis Form (File Upload) */}
            {selectedMethod === "document" && (
              <div className="text-center p-6 border-2 border-dashed rounded-lg bg-gray-100 dark:bg-gray-800">
                <FaUpload className="text-4xl text-blue-500 mb-3 mx-auto" />
                <p className="text-gray-600 dark:text-gray-300">Click to upload or drag & drop</p>
                <input type="file" multiple className="hidden" id="fileUpload" onChange={handleFileUpload} />
                <label htmlFor="fileUpload" className="cursor-pointer block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg">Upload Documents</label>

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
            )}

            
            <div className="mt-6 flex justify-end">
              <button onClick={handleSubmit} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Submit Claim
              </button>
            </div>
          </motion.div>
        </main>
        <Chatbot />
      </div>

      {isProcessing && <ProcessingOverlay onClose={() => setIsProcessing(false)} />}
    </div>
  );
};

export default AddClaim;
