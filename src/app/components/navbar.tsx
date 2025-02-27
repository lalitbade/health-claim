"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Make sure to import Link for navigation
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Activity, Shield, Zap } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(8px)"]
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 20px rgba(0, 0, 0, 0.05)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        boxShadow,
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/BlueIcon.svg"
              alt="Insuraflow"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
           

            {/* Get Started Button */}
            <Link href="/login">
              <Button
                variant="gradient"
                size="lg" // Increased size
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-8 py-3 text-base font-medium transition-all duration-300 ease-in-out shadow-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
