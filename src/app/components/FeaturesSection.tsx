"use client";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Easy Operate",
    description: "Manage claims effortlessly with our AI-powered platform.",
    image: "/qr-scan.png", // Replace with an actual image
    bgColor: "bg-blue-500",
  },
  {
    title: "Accurate Results",
    description: "AI-driven risk assessment for precise claim approvals.",
    image: "/ai-prediction.png", // Replace with an actual image
    bgColor: "bg-teal-400",
  },
  {
    title: "Content Organization",
    description: "Get AI-generated reports and insights instantly.",
    image: "/report-download.png", // Replace with an actual image
    bgColor: "bg-gray-900",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold"
        >
          Unlocking AI for Your Insurance
        </motion.h2>
        <p className="mt-4 text-gray-500 text-lg">
          InsuraFlow leverages AI to streamline claim processes, fraud detection, and risk management.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-lg border border-gray-200 bg-white"
          >
            <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.description}</p>
            <div className={`mt-4 p-6 rounded-lg ${feature.bgColor} flex justify-center`}>
              <Image src={feature.image} alt={feature.title} width={120} height={120} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
