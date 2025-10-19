import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundText = `Syed Iyanulla. Full Stack Developer specializing in modern JavaScript technologies. I architect and build end-to-end web applications using React for dynamic front-end. Syed Iyanulla. Full Stack Developer specializing in modern JavaScript technologies. I architect and build end-to-end web applications using React for dynamic front-end.`;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background text with spotlight effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="relative w-full max-w-7xl px-8">
          <p className="text-2xl md:text-4xl leading-relaxed text-center font-medium break-words">
            {backgroundText.split('').map((char, index) => {
              if (isTouchDevice) {
                return (
                  <span key={index} className="text-muted/20">
                    {char}
                  </span>
                );
              }

              const charElement = document.querySelector(`#char-${index}`);
              let distance = 999;
              
              if (charElement) {
                const rect = charElement.getBoundingClientRect();
                const charX = rect.left + rect.width / 2;
                const charY = rect.top + rect.height / 2;
                const sectionRect = sectionRef.current?.getBoundingClientRect();
                
                if (sectionRect) {
                  const adjustedMouseX = mousePosition.x + sectionRect.left;
                  const adjustedMouseY = mousePosition.y + sectionRect.top;
                  distance = Math.sqrt(
                    Math.pow(charX - adjustedMouseX, 2) + 
                    Math.pow(charY - adjustedMouseY, 2)
                  );
                }
              }

              const maxDistance = 200;
              const opacity = Math.max(0.1, 1 - (distance / maxDistance));
              
              return (
                <span
                  key={index}
                  id={`char-${index}`}
                  style={{
                    color: `rgba(255, 255, 255, ${opacity})`,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {char}
                </span>
              );
            })}
          </p>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Full-Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Building custom applications that drive real business results and turn your ideas into revenue
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
