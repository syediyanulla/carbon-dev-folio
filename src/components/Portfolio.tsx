import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, DollarSign, ExternalLink, Code2 } from "lucide-react";
import ecotrackImage from "@/assets/project-ecotrack.jpg";
import fitsyncImage from "@/assets/project-fitsync.jpg";
import invoicexImage from "@/assets/project-invoicex.jpg";

const projects = [
  {
    image: ecotrackImage,
    category: "Web Application",
    title: "EcoTrack - Sustainability Platform",
    description: "A comprehensive platform helping businesses track and reduce their carbon footprint with real-time analytics and reporting.",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    metrics: [
      { icon: Users, value: "10K+", label: "Active Users" },
      { icon: TrendingUp, value: "500 tons", label: "CO2 Reduced" },
      { icon: DollarSign, value: "$2M+", label: "Cost Savings" }
    ]
  },
  {
    image: fitsyncImage,
    category: "Mobile Application",
    title: "FitSync - Fitness Mobile App",
    description: "Social fitness app connecting workout partners and tracking progress with AI-powered recommendations.",
    technologies: ["React Native", "Firebase", "AI/ML", "Stripe"],
    metrics: [
      { icon: Users, value: "50K+", label: "Downloads" },
      { icon: TrendingUp, value: "85%", label: "Retention Rate" },
      { icon: DollarSign, value: "$15K", label: "Monthly Revenue" }
    ]
  },
  {
    image: invoicexImage,
    category: "Desktop Application",
    title: "InvoiceX - Desktop Billing Tool",
    description: "Professional invoicing and accounting software for small businesses with automated workflows.",
    technologies: ["Electron", "React", "SQLite", "PDF Generation"],
    metrics: [
      { icon: Users, value: "2K+", label: "Business Users" },
      { icon: TrendingUp, value: "40 hrs/month", label: "Time Saved" },
      { icon: DollarSign, value: "$50K", label: "Annual Revenue" }
    ]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-2">Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projects That Drive Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how I've helped businesses across different industries achieve their goals through custom software solutions.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`p-8 space-y-6 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="space-y-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">{tech}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {project.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div key={idx} className="text-center space-y-1">
                          <Icon className="h-5 w-5 text-accent mx-auto" />
                          <div className="text-xl font-bold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="default">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                    <Button variant="outline">
                      <Code2 className="mr-2 h-4 w-4" /> Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
