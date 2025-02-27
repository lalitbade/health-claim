import { FaFileAlt, FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const recentClaims = [
  { id: 1, name: "Medical Claim #12345", status: "Approved" },
  { id: 2, name: "Auto Insurance #67890", status: "Pending" },
  { id: 3, name: "Home Insurance #54321", status: "Rejected" },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Approved":
      return <FaCheckCircle className="text-green-500" />;
    case "Pending":
      return <FaClock className="text-yellow-500" />;
    case "Rejected":
      return <FaTimesCircle className="text-red-500" />;
    default:
      return <FaFileAlt className="text-gray-500" />;
  }
};

const RecentClaims = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recent Claims</h2>
      <ul className="space-y-3">
        {recentClaims.map((claim) => (
          <li key={claim.id} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <span className="flex items-center space-x-3">
              {getStatusIcon(claim.status)}
              <span className="text-gray-900 dark:text-white">{claim.name}</span>
            </span>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{claim.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentClaims;
