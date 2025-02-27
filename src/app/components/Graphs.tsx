import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const rawStatistics = [
  { label: "Active Policies", value: 320, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900" },
  { label: "Claims Processed", value: 120, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900" },
  { label: "Pending Cases", value: 15, color: "text-red-500", bg: "bg-red-100 dark:bg-red-900" },
];

const policyData = [
  { month: "Jan", policies: 80, claims: 30 },
  { month: "Feb", policies: 95, claims: 40 },
  { month: "Mar", policies: 120, claims: 50 },
  { month: "Apr", policies: 110, claims: 35 },
  { month: "May", policies: 140, claims: 60 },
  { month: "Jun", policies: 160, claims: 75 },
];

const Graphs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full transition-all">
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6"> Live Policy Statistics</h2>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {rawStatistics.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md flex flex-col items-center ${stat.bg} transition-all hover:scale-105`}
          >
            <h3 className={`text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
            <p className="text-gray-700 dark:text-gray-200 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        
        {/* Line Chart */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-all hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Policy Growth & Claims Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={policyData}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <Line type="monotone" dataKey="policies" stroke="#4F46E5" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="claims" stroke="#E53E3E" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-all hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Monthly Policies & Claims</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={policyData}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <Bar dataKey="policies" fill="#4F46E5" radius={[5, 5, 0, 0]} />
              <Bar dataKey="claims" fill="#E53E3E" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Graphs;
