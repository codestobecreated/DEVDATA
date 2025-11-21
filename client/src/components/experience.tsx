import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Building2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const experience = [
  {
    id: 1,
    role: "Junior Data Scientist & Developer",
    company: "Tech Innovators Inc.",
    period: "2024 - Present",
    description: "Working on end-to-end data solutions. Built a predictive maintenance dashboard using React and Python backend. Optimized SQL queries reducing report generation time by 40%.",
    type: "work",
    skills: ["Python", "React", "SQL"]
  },
  {
    id: 2,
    role: "Full Stack Development Intern",
    company: "Creative Solutions",
    period: "2023 - 2024",
    description: "Assisted in developing a CRM system. Implemented responsive UI components with React and Tailwind. Integrated RESTful APIs for user management.",
    type: "work",
    skills: ["React", "Tailwind", "REST APIs"]
  },
  {
    id: 3,
    role: "B.Sc. Computer Science",
    company: "University of Technology",
    period: "2019 - 2023",
    description: "Specialized in Artificial Intelligence and Web Technologies. Capstone project: 'Real-time Sentiment Analysis of Social Media Streams'.",
    type: "education",
    skills: ["AI", "Web Tech", "Algorithms"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30 relative">
       {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-mono mb-4"
          >
            <Briefcase size={14} /> Career Path
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Professional Journey</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full translate-x-[-7px] md:translate-x-[-50%] top-6 z-10 shadow-[0_0_10px_theme('colors.primary.DEFAULT')]" />

                {/* Content Card */}
                <div className="ml-8 md:ml-0 md:w-1/2">
                   <div className={`bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group relative overflow-hidden ${
                     index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                   }`}>
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            item.type === 'work' 
                              ? 'bg-primary/10 text-primary border border-primary/20' 
                              : 'bg-accent/10 text-accent border border-accent/20'
                          }`}>
                            {item.type === 'work' ? 'Experience' : 'Education'}
                          </span>
                          <div className="flex items-center text-muted-foreground text-sm font-mono">
                            <Calendar size={14} className="mr-2" />
                            {item.period}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{item.role}</h3>
                        
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          {item.type === 'work' ? <Building2 size={16} /> : <GraduationCap size={16} />}
                          <span className="font-medium">{item.company}</span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                          {item.description}
                        </p>

                        {/* Skills used */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                          {item.skills.map(skill => (
                            <span key={skill} className="text-[10px] px-2 py-1 rounded bg-secondary text-secondary-foreground font-mono">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                   </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
