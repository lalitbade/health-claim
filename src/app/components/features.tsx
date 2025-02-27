"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Link, BarChart, Lock, Smartphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI-Powered Fraud Detection",
    description: "Our advanced AI algorithms detect fraudulent claims with 99.8% accuracy, saving millions in fraudulent payouts.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "70% Faster Approvals",
    description: "Claims that used to take days are now processed in minutes, with most legitimate claims approved instantly.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Link,
    title: "Seamless API Integration",
    description: "Easily integrate with your existing systems through our comprehensive API and pre-built connectors.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain insights into claims patterns, processing efficiency, and potential cost-saving opportunities.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "HIPAA-compliant platform with end-to-end encryption and SOC 2 Type II certification.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Submit claims, track status, and receive payments through our intuitive mobile application.",
    color: "from-amber-500 to-amber-600",
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const constraintsRef = useRef(null);

  return (
    <section 
      id="features"
      className="py-24 bg-gray-50"
      ref={constraintsRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Solution?
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform offers unmatched efficiency, accuracy, and security for insurance claims processing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-black bg-white rounded-xl p-6 shadow-md h-full border border-gray-100 relative z-10 overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Background gradient that appears on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Floating elements */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <>
                    <motion.div
                      className="absolute w-8 h-8 rounded-full bg-blue-500 opacity-10 z-0"
                      initial={{ x: 0, y: 0, scale: 0 }}
                      animate={{ 
                        x: Math.random() * 60 - 30, 
                        y: Math.random() * 60 - 30,
                        scale: 1 + Math.random() * 2
                      }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute w-6 h-6 rounded-full bg-indigo-500 opacity-10 z-0"
                      initial={{ x: 0, y: 0, scale: 0 }}
                      animate={{ 
                        x: Math.random() * 60 - 30, 
                        y: Math.random() * 60 - 30,
                        scale: 1 + Math.random() * 1.5
                      }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}