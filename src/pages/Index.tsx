import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <WhyChooseMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
