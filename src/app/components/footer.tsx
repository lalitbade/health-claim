"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
          <Link href="/" className="flex items-center space-x-2">
            {/* <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              HealthClaim AI
            </span> */}
            <img
              src="/Violet_Blue.svg"
              alt="Insuraflow"
              className="h-12 w-auto object-contain"
            />
          </Link>
            <p className="text-gray-400 mb-4">
              Revolutionizing insurance claims processing with AI-powered automation, fraud detection, and instant approvals.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} HealthClaim AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}