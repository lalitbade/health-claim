"use client";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";

const documents = [
    { name: "Policy_Doc.pdf", type: "pdf", url: "#" },
    { name: "Claim_Form.pdf", type: "pdf", url: "#" },
    { name: "PAN Card.pdf", type: "pdf", url: "#" },
    { name: "Aadhar Card.pdf", type: "pdf", url: "#" },
  ];
  
  const DocumentsList = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-lg"
      >
        <h2 className="text-2xl font-bold mb-5 text-gray-900 dark:text-gray-100"> Documents</h2>
  
        <ul className="space-y-5">
          {documents.map((doc, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
            >
              {/* File Info */}
              <div className="flex items-center space-x-4">
                <FaFilePdf className="text-red-500 text-2xl" />
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{doc.name}</span>
              </div>
  
             
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };
  
  export default DocumentsList;
  