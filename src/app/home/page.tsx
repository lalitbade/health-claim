"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const features = [
  {
    icon: "fa-solid fa-upload",
    title: "Submit Your Claim",
    description: "Easily upload claim documents via our web or mobile app. Secure and efficient. Supports multiple formats and ensures compliance.",
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI-Powered Verification",
    description: "Leverage real-time AI analysis to detect fraud and process claims faster. Our deep-learning models ensure accuracy and security.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Faster Approvals",
    description: "Cut processing times by 70% with automated decision-making and smart workflows. Instant validation and error-free approvals.",
  },
  {
    icon: "fa-solid fa-shield-check",
    title: "Secure Payouts",
    description: "Encrypted transactions ensure safe and seamless claim disbursement. Our multi-layer security protocol guarantees trust and compliance.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Real-Time Tracking",
    description: "Monitor your claim status every step of the way with our intuitive dashboard and instant notifications.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "24/7 Support",
    description: "Our dedicated customer service team is available round the clock to assist you with any queries or concerns.",
  },
];

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <i className="fa-solid fa-shield-halved text-blue-600 text-3xl mr-3"></i>
            <span className="text-2xl font-bold">InsuraFlow</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {["Products", "Solutions", "About", "Contact"].map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 font-medium">
                {item}
              </Link>
            ))}
            <Button className="bg-blue-600 text-white" onClick={() => router.push("/login")}>Login</Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fa-solid fa-bars text-gray-700 text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-xl">
            <Badge className="mb-6 bg-blue-100 text-blue-700">AI-Powered Insurance Claims</Badge>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Smarter, Faster Claims Processing with AI 🚀
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our AI-driven platform ensures quick, secure, and hassle-free claims processing. Reduce manual intervention, improve accuracy, and get the best customer experience.
            </p>
            <Button size="lg" className="bg-blue-600 text-white px-6 py-3" onClick={() => router.push("/signup")}>Get Started</Button>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI Insurance Claims"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
                {/* Testimonials Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[
        { name: "Alice Johnson", feedback: "InsuraFlow made my claim process seamless and quick!", img: "/images/user1.jpg" },
        { name: "Mark Peterson", feedback: "The AI verification is impressive—saved me so much time!", img: "/images/user2.jpg" },
        { name: "Sarah Lee", feedback: "The best claims experience I've ever had. Highly recommend!", img: "/images/user3.jpg" },
      ].map((testimonial, index) => (
        <SwiperSlide key={index}>
          <Card className="p-6 text-center shadow-lg">
            <Image src={testimonial.img} alt={testimonial.name} width={80} height={80} className="rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
{/* FAQs Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        { question: "How long does it take to process a claim?", answer: "Our AI-powered system processes claims within 24 hours." },
        { question: "Is my data secure?", answer: "Yes! We use end-to-end encryption to ensure all transactions are secure." },
        { question: "Can I track my claim in real time?", answer: "Absolutely! Our dashboard provides real-time claim tracking and updates." },
        { question: "What support options are available?", answer: "We offer 24/7 customer support via chat, email, and phone." },
      ].map((faq, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${feature.icon} text-3xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
