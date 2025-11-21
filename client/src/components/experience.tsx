import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    id: 1,
    role: "Junior Data Scientist & Developer",
    company: "Tech Innovators Inc.",
    period: "2024 - Present",
    description: "Working on end-to-end data solutions. Built a predictive maintenance dashboard using React and Python backend. Optimized SQL queries reducing report generation time by 40%.",
    type: "work"
  },
  {
    id: 2,
    role: "Full Stack Development Intern",
    company: "Creative Solutions",
    period: "2023 - 2024",
    description: "Assisted in developing a CRM system. Implemented responsive UI components with React and Tailwind. Integrated RESTful APIs for user management.",
    type: "work"
  },
  {
    id: 3,
    role: "B.Sc. Computer Science",
    company: "University of Technology",
    period: "2019 - 2023",
    description: "Specialized in Artificial Intelligence and Web Technologies. Capstone project: 'Real-time Sentiment Analysis of Social Media Streams'.",
    type: "education"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey and education.</p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-8 border-l border-border space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <span className={`absolute -left-[41px] top-0 p-2 rounded-full border-4 border-background ${item.type === 'work' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              </span>
              
              <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                    <p className="text-primary font-medium">{item.company}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm font-mono bg-muted/50 px-3 py-1 rounded-md w-fit">
                    <Calendar size={14} className="mr-2" />
                    {item.period}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
