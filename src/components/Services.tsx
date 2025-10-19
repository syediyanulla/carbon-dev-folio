import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Monitor, ArrowRight } from "lucide-react";

const services = [
  {
    tag: "Most Popular",
    icon: Code,
    title: "Web Application Development",
    description: "Custom web applications that scale with your business",
    features: [
      "React, Next.js, and modern frameworks",
      "Responsive design for all devices",
      "SEO optimization for better visibility",
      "High-performance and secure architecture"
    ],
    investment: "Starting at $2,500",
    timeline: "2-6 weeks"
  },
  {
    tag: "Premium",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps that users love",
    features: [
      "React Native and Flutter development",
      "App Store and Play Store deployment",
      "Push notifications and offline support",
      "In-app purchases and monetization"
    ],
    investment: "Starting at $4,000",
    timeline: "4-8 weeks"
  },
  {
    tag: "Specialized",
    icon: Monitor,
    title: "Desktop Application Development",
    description: "Cross-platform desktop apps for Windows, Mac, and Linux",
    features: [
      "Electron and native development",
      "File system integration",
      "Auto-updates and installers",
      "System tray and background processes"
    ],
    investment: "Starting at $3,500",
    timeline: "3-7 weeks"
  }
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-2">Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Turn Your Ideas Into Revenue
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I specialize in building applications that not only look great but drive real business results. Choose the perfect solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 space-y-6 bg-card border-border hover:border-accent/50 transition-all duration-300">
                <div className="space-y-4">
                  <Badge variant="outline" className="bg-primary text-primary-foreground">{service.tag}</Badge>
                  <Icon className="h-12 w-12 text-foreground" />
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Investment:</span>
                    <span className="font-semibold text-foreground">{service.investment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Timeline:</span>
                    <span className="font-semibold text-foreground">{service.timeline}</span>
                  </div>
                </div>

                <Button className="w-full" onClick={scrollToContact}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
