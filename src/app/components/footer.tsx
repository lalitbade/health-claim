"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-600 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/Violet_Blue.svg"
                alt="Insuraflow"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-200">
              Revolutionizing insurance claims processing with AI-powered automation, fraud detection, and instant approvals.
            </p>
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="text-gray-200 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-200 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-200 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Insuraflow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
