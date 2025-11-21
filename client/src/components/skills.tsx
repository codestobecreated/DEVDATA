import { motion } from "framer-motion";
import { Brain, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Data Science & ML",
    icon: <Brain className="w-6 h-6 text-primary" />,
    color: "bg-primary",
    skills: [
      { 
        name: "Python", 
        level: 95, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
      },
      { 
        name: "TensorFlow", 
        level: 85, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" 
      },
      { 
        name: "Pandas", 
        level: 90, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" 
      },
      { 
        name: "SQL", 
        level: 88, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
      },
      { 
        name: "Data Viz", 
        level: 82, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
      },
    ]
  },
  {
    title: "Full Stack Dev",
    icon: <Layout className="w-6 h-6 text-accent" />,
    color: "bg-accent",
    skills: [
      { 
        name: "React", 
        level: 90, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
      },
      { 
        name: "Node.js", 
        level: 85, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
      },
      { 
        name: "Tailwind", 
        level: 95, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
      },
      { 
        name: "PostgreSQL", 
        level: 80, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
      },
      { 
        name: "GraphQL", 
        level: 85, 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" 
      },
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My technical toolkit covers the full spectrum of data-driven application development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-card border border-border shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    variants={item} 
                    className="group relative bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Icon Container */}
                    <div className="w-12 h-12 relative flex items-center justify-center">
                        <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                        />
                    </div>
                    
                    {/* Text Info */}
                    <div className="text-center w-full">
                      <span className="font-heading font-medium text-foreground block mb-2">{skill.name}</span>
                      
                      {/* Mini Progress Bar */}
                      <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                          className={`h-full rounded-full ${idx === 0 ? 'bg-primary' : 'bg-accent'}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Badges - Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-4 opacity-50"
        >
          {["Git", "Docker", "AWS", "Linux", "Jira", "Figma", "Agile", "CI/CD"].map((tool, i) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full border border-border text-xs font-mono"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
