import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const experience = [
  {
    id: "exp_01",
    role: "Junior Data Scientist & Developer",
    company: "Tech Innovators Inc.",
    period: "2024 - Present",
    description: "Spearheaded end-to-end data solutions, bridging the gap between raw data and actionable insights. Architected a predictive maintenance dashboard using React and Python, directly impacting operational efficiency.",
    type: "work",
    tags: ["Python", "React", "SQL"]
  },
  {
    id: "exp_02",
    role: "Full Stack Development Intern",
    company: "Creative Solutions",
    period: "2023 - 2024",
    description: "Collaborated on a high-traffic CRM system, focusing on frontend performance and API integration. Championed mobile-first design principles and improved page load speeds by 25%.",
    type: "work",
    tags: ["React", "Tailwind", "REST"]
  },
  {
    id: "edu_01",
    role: "B.Sc. Computer Science",
    company: "University of Technology",
    period: "2019 - 2023",
    description: "Specialized in Artificial Intelligence and Web Technologies. Graduated with honors. Capstone project focused on Real-time Sentiment Analysis.",
    type: "education",
    tags: ["AI", "Algorithms", "Web Arch"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Header */}
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-heading font-bold mb-6"
              >
                Experience
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                My professional journey is defined by a constant drive to learn and build. From academic foundations to real-world shipping.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 hidden md:block"
              >
                <div className="h-px w-24 bg-primary" />
              </motion.div>
            </div>
          </div>

          {/* Experience List */}
          <div className="md:w-2/3">
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border-b border-border pb-12 last:border-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-lg text-foreground mb-4 font-medium">
                    {item.company}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {item.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
