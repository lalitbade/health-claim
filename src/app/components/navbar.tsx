"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Activity, Shield, Zap } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transformations on scroll for smooth effect
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
    ["none", "0 4px 20px rgba(0, 0, 0, 0.1)"]
  );

  // Detect scroll event for navbar behavior
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
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/BlueIcon.svg"
              alt="Insuraflow"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Navigation links for large screens */}
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

          {/* Mobile navigation menu toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-black"
            >
              Log In
            </Button>
            <Button
              variant="gradient"
              className="bg-blue-600 text-white"
              size="sm"
            >
              Get Started
            </Button>
          </div>

          {/* Desktop Button Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-black hidden md:inline-flex"
            >
              Log In
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="bg-blue-600 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
