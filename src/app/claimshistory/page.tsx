"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaSearch, FaFilter, FaClipboardList, FaCheckCircle, FaTimesCircle, FaClock, FaMoneyBillWave } from "react-icons/fa";

const claimsData = [
  { id: "CLM-001", type: "Medical", status: "Approved", date: "2024-02-10", amount: "$1,200" },
  { id: "CLM-002", type: "Vehicle", status: "Pending", date: "2024-01-25", amount: "$5,400" },
  { id: "CLM-003", type: "Property", status: "Rejected", date: "2023-12-15", amount: "$3,200" },
  { id: "CLM-004", type: "Life Insurance", status: "Approved", date: "2024-02-05", amount: "$10,000" },
  { id: "CLM-005", type: "Medical", status: "Pending", date: "2024-01-18", amount: "$750" },
];

const ClaimsHistory = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterType, setFilterType] = useState("");

  const filteredClaims = claimsData.filter(
    (claim) =>
      claim.id.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus ? claim.status === filterStatus : true) &&
      (filterType ? claim.type === filterType : true)
  );

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
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-lg max-w-5xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Claims History</h2>

            {/* Search & Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              {/* Search */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg flex-1">
                <FaSearch className="text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Claim ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent flex-1 outline-none ml-3"
                />
              </div>

              {/* Filter by Status */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <FaFilter className="text-gray-500 dark:text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-transparent flex-1 outline-none ml-3"
                >
                  <option value="">All Statuses</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              {/* Filter by Type */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <FaClipboardList className="text-gray-500 dark:text-gray-400" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-transparent flex-1 outline-none ml-3"
                >
                  <option value="">All Types</option>
                  <option value="Medical">Medical</option>
                  <option value="Vehicle">Vehicle</option>
                  <option value="Property">Property</option>
                  <option value="Life Insurance">Life Insurance</option>
                </select>
              </div>
            </div>

            {/* Claims List */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
                    <th className="p-3">Claim ID</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClaims.length > 0 ? (
                    filteredClaims.map((claim) => (
                      <tr key={claim.id} className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        <td className="p-3">{claim.id}</td>
                        <td className="p-3">{claim.type}</td>
                        <td className="p-3 flex items-center space-x-2">
                          {claim.status === "Approved" && <FaCheckCircle className="text-green-500" />}
                          {claim.status === "Pending" && <FaClock className="text-yellow-500" />}
                          {claim.status === "Rejected" && <FaTimesCircle className="text-red-500" />}
                          <span>{claim.status}</span>
                        </td>
                        <td className="p-3">{claim.date}</td>
                        <td className="p-3 flex items-center space-x-2">
                          <FaMoneyBillWave className="text-blue-500" />
                          <span>{claim.amount}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-3 text-center text-gray-500 dark:text-gray-400">
                        No claims found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ClaimsHistory;
