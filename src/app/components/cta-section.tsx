"use client";

import { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x, y });
    
    // Magnetic effect
    const magneticPull = 0.3; // Slightly stronger magnetic pull for better interaction
    controls.start({
      x: x * magneticPull,
      y: y * magneticPull,
      transition: { type: "spring", stiffness: 350, damping: 20 },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    });
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating elements */}
      {floatingElements.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500 opacity-10"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
            scale: [1, Math.random() * 0.3 + 0.9],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Claims Processing?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join hundreds of insurance providers who have revolutionized their claims processing with our AI-powered solution.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div animate={controls}>
              <Button 
                ref={buttonRef}
                variant="gradient" 
                size="xl" 
                className="relative bg-black text-white py-4 px-6 rounded-full shadow-xl flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                
                {/* Animated Hover Effect */}
                <motion.span
                  className="absolute inset-0 bg-white rounded-md"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: 2, 
                    opacity: 0.1,
                    transition: { duration: 0.5 }
                  }}
                  style={{
                    originX: mousePosition.x ? 0.5 + mousePosition.x / 200 : 0.5,
                    originY: mousePosition.y ? 0.5 + mousePosition.y / 200 : 0.5,
                  }}
                />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            No credit card required. Free 14-day trial available.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
