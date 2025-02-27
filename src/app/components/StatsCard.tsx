import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg flex items-center space-x-4 border border-gray-200 dark:border-gray-800">
      <div className="text-blue-500 text-4xl">{icon}</div>
      <div>
        <h3 className="text-gray-700 dark:text-gray-300 text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
