import { motion } from "framer-motion";
import { Terminal, ChevronRight } from "lucide-react";

const experience = [
  {
    id: "exp_01",
    role: "Junior Data Scientist & Developer",
    company: "Tech Innovators Inc.",
    period: "2024 - Present",
    description: "Working on end-to-end data solutions. Built a predictive maintenance dashboard using React and Python backend. Optimized SQL queries reducing report generation time by 40%.",
    type: "work",
    tech: ["Python", "React", "SQL"]
  },
  {
    id: "exp_02",
    role: "Full Stack Development Intern",
    company: "Creative Solutions",
    period: "2023 - 2024",
    description: "Assisted in developing a CRM system. Implemented responsive UI components with React and Tailwind. Integrated RESTful APIs for user management.",
    type: "work",
    tech: ["React", "Tailwind", "REST"]
  },
  {
    id: "edu_01",
    role: "B.Sc. Computer Science",
    company: "University of Technology",
    period: "2019 - 2023",
    description: "Specialized in Artificial Intelligence and Web Technologies. Capstone project: 'Real-time Sentiment Analysis of Social Media Streams'.",
    type: "education",
    tech: ["AI", "Web", "Algorithms"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
       {/* Matrix-like background effect */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden font-mono text-xs leading-none select-none">
         {Array.from({ length: 100 }).map((_, i) => (
           <div key={i} className="whitespace-nowrap">
             {Array.from({ length: 100 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
           </div>
         ))}
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-12 border-b border-border pb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 px-3 py-1 rounded-md bg-secondary/50 text-xs font-mono text-muted-foreground border border-border flex items-center gap-2">
            <Terminal size={12} />
            <span>user@devdata:~/career_history</span>
          </div>
        </div>

        <div className="space-y-8 font-mono">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-l-2 border-border pl-6 hover:border-primary transition-colors duration-300 group"
            >
              {/* Command Line Header */}
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base mb-3 opacity-80">
                <span className="text-primary">➜</span>
                <span className="text-accent">~</span>
                <span className="text-muted-foreground">cat</span>
                <span className="text-foreground font-bold">{item.id}.json</span>
                <span className="text-muted-foreground ml-auto text-xs border border-border px-2 py-0.5 rounded bg-card/50">
                    {item.period}
                </span>
              </div>

              {/* Output Block */}
              <div className="bg-card/30 rounded-lg p-5 md:p-6 border border-border group-hover:border-primary/30 transition-all relative overflow-hidden">
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
                
                <div className="relative z-10 grid gap-2 text-sm md:text-base">
                   <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2">
                        <span className="text-primary opacity-70">"role":</span>
                        <span className="text-foreground font-bold">"{item.role}"</span>
                   </div>
                   <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2">
                        <span className="text-primary opacity-70">"at":</span>
                        <span className="text-accent">"{item.company}"</span>
                   </div>
                   <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2">
                        <span className="text-primary opacity-70">"desc":</span>
                        <span className="text-muted-foreground">"{item.description}"</span>
                   </div>
                   <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 items-start">
                        <span className="text-primary opacity-70">"stack":</span>
                        <div className="text-secondary-foreground">
                            [
                            {item.tech.map((t, i) => (
                                <span key={t} className="text-green-400">
                                    "{t}"{i < item.tech.length - 1 ? ", " : ""}
                                </span>
                            ))}
                            ]
                        </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-primary pl-6 pt-4"
          >
             <span>➜</span>
             <span>~</span>
             <span className="animate-pulse bg-primary w-2.5 h-5 block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
