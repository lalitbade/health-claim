import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero-section";
import { HowItWorks } from "../components/how-it-works";
import { Features } from "../components/features";
import { Testimonials } from "../components/testimonials";
import { CTASection } from "../components/cta-section";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      {/* <Testimonials /> */}
      <CTASection />
      <Footer />
    </main>
  );
}