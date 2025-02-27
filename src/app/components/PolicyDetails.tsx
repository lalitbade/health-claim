"use client";
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaUserShield, FaIdCard, FaBirthdayCake, FaFilePdf, FaDownload } from "react-icons/fa";

const PolicyDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 flex justify-between items-center backdrop-blur-lg"
    >
      {/* Policy Information */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1"
      >
        <h2 className="text-2xl font-bold mb-5 text-gray-900 dark:text-gray-100">Policy Details</h2>

        <div className="grid grid-cols-2 gap-6">
          <DetailItem icon={<FaIdCard />} label="Policy Number" value="0000487463" />
          <DetailItem icon={<FaUserShield />} label="Policy Holder" value="Lalit Bade" />
          <DetailItem icon={<FaRegCalendarAlt />} label="Policy Type" value="Term Life Insurance" />
          <DetailItem icon={<FaBirthdayCake />} label="Maturity Age" value="75 Years" />
          <DetailItem icon={<FaRegCalendarAlt />} label="Issue Date" value="12th March 2020" />
          <DetailItem icon={<FaRegCalendarAlt />} label="Expiry Date" value="12th March 2025" />
        </div>
      </motion.div>

      {/* Customer Image */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="ml-10 flex-shrink-0 relative"
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQHLDmMpvOfzGw/profile-displayphoto-shrink_200_200/B56ZPqB8vIGsAY-/0/1734798201727?e=2147483647&v=beta&t=gLQfhB-Mqe5lDAbfppC_Ykc1JXT1w0KGNDhvJwsUklw"
          alt="Customer"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
        <span className="absolute bottom-3 right-3 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></span>
      </motion.div>
    </motion.div>
  );
};

const DetailItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
    >
      <span className="text-blue-500 text-xl">{icon}</span>
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{value}</p>
      </div>
    </motion.div>
  );
};

export default PolicyDetails;