import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import SOSButton from "@/components/SOSButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <DashboardPreview />
        <Features />
        <Testimonials />
        <Support />
      </main>
      <Footer />
      <SOSButton />
    </div>
  );
};

export default Index;
