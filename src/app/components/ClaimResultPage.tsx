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
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl text-gray-900 dark:text-white w-full max-w-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-bold">Claim Status</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl">
            ✖
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto space-y-4">
          {/* Decision Status */}
          <div className="text-center">
            {decision === "Approve" ? (
              <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
            ) : (
              <FaTimesCircle className="text-red-500 text-6xl mx-auto" />
            )}
            <h3 className={`mt-2 text-xl font-semibold ${decision === "Approve" ? "text-green-500" : "text-red-500"}`}>
              {decision === "Approve" ? "Claim Approved" : "Claim Rejected"}
            </h3>
          </div>

          {/* Claim Details */}
          <div className="space-y-3 text-sm">
            <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className="text-gray-500 dark:text-gray-300">Extracted Information</p>
              <pre className="text-gray-800 dark:text-white whitespace-pre-wrap break-words">
                {extracted_text}
              </pre>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
                <p className="text-gray-500 dark:text-gray-300">Text Fraud Score</p>
                <span className="text-lg font-semibold">{text_fraud_score.toFixed(3)}</span>
              </div>
              <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
                <p className="text-gray-500 dark:text-gray-300">Image Fraud Score</p>
                <span className="text-lg font-semibold">{image_fraud_score}</span>
              </div>
              <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 text-center col-span-2">
                <p className="text-gray-500 dark:text-gray-300">Approval Probability</p>
                <span className="text-lg font-semibold">{(approval_probability * 100).toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClaimResultPage;
