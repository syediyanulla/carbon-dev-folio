import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Star, Briefcase, Globe } from "lucide-react";

const Footer = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Sujyot Raut</h3>
            <p className="text-muted-foreground">
              Freelance developer specializing in web, mobile, and desktop applications. 
              Turning ideas into powerful digital solutions that drive real business results.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="gap-1">
                <Star className="h-3 w-3 text-accent" /> 5.0 Rating
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Briefcase className="h-3 w-3 text-accent" /> 50+ Projects
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Globe className="h-3 w-3 text-accent" /> 15+ Countries
              </Badge>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Desktop Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  MVP Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">sujyot@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Remote Worldwide</span>
              </div>
            </div>
            <Button className="w-full" onClick={scrollToContact}>
              Start Project
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Sujyot Raut. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-secondary/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground">
            Let's discuss how I can help you achieve your business goals.
          </p>
          <Button size="lg" onClick={scrollToContact}>
            Let's Work Together
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
