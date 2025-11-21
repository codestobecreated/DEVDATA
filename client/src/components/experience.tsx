import { motion } from "framer-motion";
import { Calendar, Building2, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    id: "exp_01",
    role: "Junior Data Scientist & Developer",
    company: "Tech Innovators Inc.",
    period: "2024 - Present",
    description: "Spearheaded end-to-end data solutions, bridging the gap between raw data and actionable insights. Architected a predictive maintenance dashboard using React and Python, directly impacting operational efficiency.",
    achievements: [
        "Reduced report generation time by 40% via SQL optimization",
        "Built real-time visualization dashboards",
        "Integrated ML models into production web apps"
    ],
    type: "work",
    tech: ["Python", "React", "SQL", "TensorFlow"]
  },
  {
    id: "exp_02",
    role: "Full Stack Development Intern",
    company: "Creative Solutions",
    period: "2023 - 2024",
    description: "Collaborated on a high-traffic CRM system, focusing on frontend performance and API integration. Championed mobile-first design principles.",
    achievements: [
        "Implemented responsive UI components",
        "Integrated RESTful APIs for user management",
        " improved page load speeds by 25%"
    ],
    type: "work",
    tech: ["React", "Tailwind", "REST", "Git"]
  },
  {
    id: "edu_01",
    role: "B.Sc. Computer Science",
    company: "University of Technology",
    period: "2019 - 2023",
    description: "Specialized in Artificial Intelligence and Web Technologies. Graduated with honors.",
    achievements: [
        "Capstone: 'Real-time Sentiment Analysis'",
        "Dean's List: 2021, 2022",
        "Lead Developer: University Tech Club"
    ],
    type: "education",
    tech: ["AI", "Web Architecture", "Algorithms"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block"
          >
            Career Path
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold"
          >
            Experience & Education
          </motion.h2>
        </div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 blur-xl" />
              
              <div className="bg-card border border-border p-6 md:p-8 rounded-2xl transition-all duration-300 group-hover:border-primary/30 group-hover:translate-x-2">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  
                  {/* Left Column: Time & Company */}
                  <div className="md:w-1/4 flex-shrink-0 flex flex-col justify-between">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-3">
                            {item.period}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground font-medium">
                            <Building2 size={16} />
                            {item.company}
                        </div>
                    </div>
                    <div className="hidden md:block mt-4">
                        <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${item.type === 'work' ? 'from-primary to-transparent' : 'from-accent to-transparent'}`} />
                    </div>
                  </div>

                  {/* Right Column: Role & Details */}
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                        {item.role}
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5 text-muted-foreground" />
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                    </p>

                    {/* Achievements List */}
                    <ul className="space-y-2 mb-6">
                        {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {achievement}
                            </li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-muted-foreground font-mono font-normal">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
