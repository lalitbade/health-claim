const StatusBadge = ({ status }: { status: string }) => {
    const statusColors: Record<string, string> = {
      Approved: "bg-green-500",
      "Under Review": "bg-yellow-500",
      Denied: "bg-red-500",
    };
  
    return (
      <span className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-md ${
        statusColors[status] || "bg-gray-500"
      }`}>
        {status}
      </span>
    );
  };
  
  export default StatusBadge;
  