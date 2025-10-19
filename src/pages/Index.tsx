import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      <div className="min-h-screen bg-background">
        <Hero />
        <WhyChooseMe />
        <Portfolio />
        <Contact />
        <Services />
        <Footer />
      </div>
    </>
  );
};

export default Index;
