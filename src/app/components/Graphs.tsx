import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const rawStatistics = [
  { label: "Active Policies", value: 320, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Claims Processed", value: 120, color: "text-green-600", bg: "bg-green-50" },
  { label: "Pending Cases", value: 15, color: "text-red-600", bg: "bg-red-50" },
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
    <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-2xl w-full max-w-6xl mx-auto transition-all">
      
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">Live Policy Statistics</h2>
      
      

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        
        {/* Line Chart */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Policy Growth & Claims Trend</h2>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={policyData}>
              <XAxis dataKey="month" stroke="#8884d8" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <Line type="monotone" dataKey="policies" stroke="#4F46E5" strokeWidth={4} dot={{ r: 6 }} />
              <Line type="monotone" dataKey="claims" stroke="#E53E3E" strokeWidth={4} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Policies & Claims</h2>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={policyData}>
              <XAxis dataKey="month" stroke="#8884d8" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <Bar dataKey="policies" fill="#4F46E5" radius={[8, 8, 0, 0]} />
              <Bar dataKey="claims" fill="#E53E3E" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Graphs;