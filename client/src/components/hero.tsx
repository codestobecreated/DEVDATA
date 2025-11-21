import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Database, Code2 } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_data_visualization_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono tracking-wider uppercase">
              Data Scientist
            </span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-mono tracking-wider uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
          >
            Bridging the gap between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Data & Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            I build intelligent applications that leverage data science insights within robust full-stack architectures. 1 Year of professional experience turning numbers into narratives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-foreground text-background rounded-md font-bold flex items-center gap-2 hover:bg-foreground/90 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-4 rounded-md bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-4 rounded-md bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
