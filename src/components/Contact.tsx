import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "I'll get back to you within 24 hours with a project proposal.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-2">Let's Work Together</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm currently accepting new projects. Let's discuss your ideas and see how I can help bring them to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Start Your Project</h3>
                <p className="text-muted-foreground">
                  Fill out this form and I'll get back to you within 24 hours with a project proposal.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => setFormData({...formData, projectType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Application</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="desktop">Desktop App</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000+">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-2months">1-2 months</SelectItem>
                        <SelectItem value="3+months">3+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Project Request
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground">sujyot@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="text-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground">Remote Worldwide</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                    <div className="text-foreground">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-accent/50 border-2 space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Limited Availability</h4>
                  <p className="text-sm text-muted-foreground">
                    I'm currently only accepting 2 new projects this month. Secure your spot today.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
