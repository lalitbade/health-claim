"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Upload, Bot, Clock, CreditCard } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Upload,
    title: "Submit Claim",
    description: "Upload medical documents and bills through our secure portal or mobile app.",
    color: "bg-blue-500",
  },
  {
    icon: Bot,
    title: "AI Verification",
    description: "Our AI analyzes documents using OCR and machine learning to detect fraud patterns.",
    color: "bg-indigo-500",
  },
  {
    icon: Clock,
    title: "Instant Approvals",
    description: "Legitimate claims are automatically approved without human intervention.",
    color: "bg-purple-500",
  },
  {
    icon: CreditCard,
    title: "Seamless Payouts",
    description: "Receive funds directly to your preferred payment method within 24 hours.",
    color: "bg-pink-500",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (!titleRef.current || !stepsRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    
    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="how-it-works"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-blue-50 to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={titleRef}
            className="text-black text-4xl md:text-5xl font-bold mb-6"
          >
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered system streamlines the entire claims process, from submission to payout.
          </p>
        </div>
        
        <motion.div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2 w-12 h-2">
                    <div className="w-full h-0.5 bg-gray-200 relative">
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-200 rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl transform rotate-3 opacity-20"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}