import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ClaimResultPage = ({ responseData, onClose }: { responseData: any; onClose: () => void }) => {
  if (!responseData) return null;

  const { extracted_text, text_fraud_score, image_fraud_score, approval_probability, decision } =
    JSON.parse(responseData.result);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl text-gray-900 dark:text-white w-full max-w-3xl max-h-[80vh] overflow-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Claim Processing Result</h2>
          <button onClick={onClose} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 text-lg">
            ✖
          </button>
        </div>

        {/* Decision Status */}
        <div className="flex flex-col items-center my-3">
          {decision === "Approve" ? (
            <FaCheckCircle className="text-green-500 text-5xl" />
          ) : (
            <FaTimesCircle className="text-red-500 text-5xl" />
          )}
          <h3 className={`text-lg font-semibold mt-2 ${decision === "Approve" ? "text-green-500" : "text-red-500"}`}>
            {decision === "Approve" ? "Claim Approved" : "Claim Rejected"}
          </h3>
        </div>

        {/* Claim Details */}
        <div className="mt-4 space-y-3">
          <div className="p-3 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-300 text-sm">Extracted Information</p>
            <pre className="text-sm text-gray-800 dark:text-white whitespace-pre-wrap">{extracted_text}</pre>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-300 text-sm">Text Fraud Score</p>
              <span className="text-lg font-semibold">{text_fraud_score.toFixed(3)}</span>
            </div>
            <div className="p-3 border rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-300 text-sm">Image Fraud Score</p>
              <span className="text-lg font-semibold">{image_fraud_score.toFixed(3)}</span>
            </div>
            <div className="p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 col-span-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm">Approval Probability</p>
              <span className="text-lg font-semibold">{(approval_probability * 100).toFixed(2)}%</span>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClaimResultPage;
