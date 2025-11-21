import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Building2, ArrowUpRight } from "lucide-react";

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
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-xl">
              A track record of delivering data-driven solutions and robust web applications.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-primary"></span> Work
             </div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-accent"></span> Education
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background border border-border p-6 rounded-xl h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg ${item.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                    {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-full bg-secondary/50">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.role}
                </h3>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm font-medium">
                  <Building2 size={14} />
                  {item.company}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-border/50 flex flex-wrap gap-2 mt-auto">
                  {item.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
