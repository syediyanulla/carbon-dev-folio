import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-muted-foreground">
            Syed Iyanulla
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Full-Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building custom applications that drive real business results and turn your ideas into revenue. I architect and build end-to-end web applications using React for dynamic front-end.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={scrollToContact}
          >
            Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
