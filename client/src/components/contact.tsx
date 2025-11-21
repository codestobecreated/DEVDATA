import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/30 relative overflow-hidden">
       {/* Decorative elements */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm currently open to new opportunities in Data Science, Full Stack Development, or roles that blend both. Have a project in mind?
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@portfolio.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA (Remote Available)</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6 md:p-8 bg-background border-border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="John Doe" className="bg-card" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="john@example.com" type="email" className="bg-card" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-card" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-card" />
              </div>
              
              <Button className="w-full font-bold" size="lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
