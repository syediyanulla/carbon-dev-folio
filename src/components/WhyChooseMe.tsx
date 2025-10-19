import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Trophy, Clock, Globe, CheckCheck } from "lucide-react";

const benefits = [
  {
    title: "Full-Stack Expertise",
    description: "From frontend to backend, databases to deployment - I handle it all."
  },
  {
    title: "Business-First Approach",
    description: "I don't just code - I solve business problems and drive growth."
  },
  {
    title: "Lightning Fast Delivery",
    description: "Agile development process ensures rapid iteration and quick time-to-market."
  },
  {
    title: "Ongoing Support",
    description: "Post-launch maintenance and feature updates to keep your app competitive."
  }
];

const metrics = [
  {
    icon: Trophy,
    metric: "50+ Projects Delivered",
    description: "100% Success Rate"
  },
  {
    icon: Clock,
    metric: "5+ Years Experience",
    description: "Trusted by Startups & Enterprises"
  },
  {
    icon: Globe,
    metric: "Global Clients",
    description: "15+ Countries Served"
  },
  {
    icon: CheckCheck,
    metric: "Always On Time",
    description: "Never Missed a Deadline"
  }
];

const technologies = [
  "React & Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "Docker",
  "React Native",
  "Flutter",
  "Electron",
  "MongoDB"
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Why Choose Me */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Why Choose Me?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="p-6 space-y-3 bg-card border-border">
                  <Icon className="h-8 w-8 text-accent" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">{metric.metric}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Technologies I Master</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
