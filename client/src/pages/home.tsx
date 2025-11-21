import Navbar from "@/components/ui/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <div id="about">
          {/* About content can be integrated into Hero or separate, keeping it clean for now */}
        </div>
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}
