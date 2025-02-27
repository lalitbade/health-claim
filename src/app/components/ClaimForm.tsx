"use client";
import { useState } from "react";
import FileUpload from "./FileUpload";
import AIResponse from "./AIResponse";
import StatusBadge from "./StatusBadge";

const ClaimForm = () => {
  const [claim, setClaim] = useState({
    age: "",
    gender: "M",
    diagnosisCode: "",
    procedureCode: "",
    amount: "",
    providerId: "",
    serviceDate: "",
    files: [],
  });

  // ✅ Fixed: Define type for aiAssessment
  const [aiAssessment, setAiAssessment] = useState<{ approvalProbability: number; status: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/submitClaim", {
      method: "POST",
      body: JSON.stringify(claim),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setAiAssessment(data);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Submit Insurance Claim</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="number" placeholder="Patient Age" className="input"
            value={claim.age} onChange={(e) => setClaim({ ...claim, age: e.target.value })} />
          <select className="input" value={claim.gender}
            onChange={(e) => setClaim({ ...claim, gender: e.target.value })}>
            <option value="M">Male</option><option value="F">Female</option>
          </select>
          <input type="text" placeholder="Diagnosis Code (ICD-10)" className="input"
            value={claim.diagnosisCode} onChange={(e) => setClaim({ ...claim, diagnosisCode: e.target.value })} />
          <input type="text" placeholder="Procedure Code (CPT)" className="input"
            value={claim.procedureCode} onChange={(e) => setClaim({ ...claim, procedureCode: e.target.value })} />
          <input type="number" placeholder="Billed Amount ($)" className="input"
            value={claim.amount} onChange={(e) => setClaim({ ...claim, amount: e.target.value })} />
          <input type="text" placeholder="Provider ID" className="input"
            value={claim.providerId} onChange={(e) => setClaim({ ...claim, providerId: e.target.value })} />
          <input type="date" placeholder="Service Date" className="input"
            value={claim.serviceDate} onChange={(e) => setClaim({ ...claim, serviceDate: e.target.value })} />
        </div>
        <FileUpload />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md" disabled={loading}>
          {loading ? "Submitting..." : "Submit Claim"}
        </button>
      </form>
      {aiAssessment && (
        <div className="mt-4">
          <AIResponse assessment={aiAssessment} />
          <StatusBadge status={aiAssessment?.status} /> 
        </div>
      )}
    </div>
  );
};

export default ClaimForm;
