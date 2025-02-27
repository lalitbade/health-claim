"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Import Link for navigation

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Claims Processing?
          </h2>
          
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join hundreds of insurance providers who have revolutionized their claims processing with our AI-powered solution.
          </p>
          
          {/* Flex container for centering the button */}
          <div className="flex justify-center">
            <Link href="/get-started"> {/* Link to respective page */}
              <Button
                variant="gradient"
                size="xl"
                className="bg-black text-white py-4 px-6 rounded-full shadow-xl flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            No credit card required. Free 14-day trial available.
          </p>
        </div>
      </div>
    </section>
  );
}
