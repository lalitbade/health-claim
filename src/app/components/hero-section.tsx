"use client";
import Link from "next/link"; 
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() < 0.8) {
        opacity.set(1); // Reset opacity when scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress, opacity]);

  useEffect(() => {
    if (!headlineRef.current || !subheadlineRef.current || !ctaRef.current) return;

    const tl = gsap.timeline();

    tl.from(headlineRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(subheadlineRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.4");

    return () => {
      tl.kill();
    };
  }, []);

  const particleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: (i: number) => ({
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.5, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        delay: i * 0.2,
      },
    }),
  };

  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-20"
    >
      {/* Animated particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          initial="initial"
          animate="animate"
          custom={i}
        />
      ))}

      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline with gradient */}
          <motion.h1
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6"
          >
            AI-Powered Insurance Claims: Faster, Smarter, Safer
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            ref={subheadlineRef}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Automated verification, fraud detection, and instant approvals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ opacity: 1 }}  // Ensure it's always visible
          >
            <Link href="/login">
              <Button
                variant="gradient"
                size="lg" // Increased size
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-8 py-3 text-base font-medium transition-all duration-300 ease-in-out shadow-lg"
              >
                Get Started
              </Button>
            </Link>
        

          </motion.div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-800">AI-Powered Fraud Detection</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Clock className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-800">90% Faster Approvals</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-800">99.8% Accuracy Rate</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
