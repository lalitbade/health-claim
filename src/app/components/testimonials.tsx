"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "We've reduced our claims processing time by 73% and saved over $2.3M in operational costs since implementing this AI solution.",
    author: "Sarah Johnson",
    title: "CTO, BlueCross Insurance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    quote: "The fraud detection capabilities are remarkable. We identified patterns that would have been impossible to spot manually.",
    author: "Michael Chen",
    title: "Head of Claims, HealthGuard",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    quote: "Our customers love the instant approvals. Satisfaction scores have increased by 42% since implementation.",
    author: "Emily Rodriguez",
    title: "Customer Experience Director, MediCare Plus",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    quote: "The API integration was seamless. We connected our legacy systems in weeks, not months as initially expected.",
    author: "David Park",
    title: "Integration Specialist, InsureTech Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4,
  },
];

export function Testimonials() {
  const sectionRef = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    gsap.to(slider, {
      x: () => -(slider.scrollWidth - slider.clientWidth - 20),
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: slider,
        start: "top center",
        end: "+=2000",
        scrub: 2,
        pin: sectionRef.current,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how our AI-powered solution is transforming insurance claims processing worldwide.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex gap-6 py-8 px-6"
          style={{ width: "fit-content" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-[350px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover shadow-sm border"
                />
                <div>
                  <div className="font-semibold text-gray-800 text-lg">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays for smooth scrolling effect */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
      </div>
    </section>
  );
}
