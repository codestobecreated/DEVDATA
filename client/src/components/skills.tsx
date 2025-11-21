import { motion } from "framer-motion";
import { Code2, Database, Brain, Layout, Server, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Data Science & ML",
    icon: <Brain className="w-6 h-6 text-primary" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow / PyTorch", level: 85 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "SQL & NoSQL", level: 88 },
      { name: "Data Visualization", level: 82 },
    ]
  },
  {
    title: "Full Stack Dev",
    icon: <Layout className="w-6 h-6 text-accent" />,
    skills: [
      { name: "React & TypeScript", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST & GraphQL", level: 85 },
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-card border border-border shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={item} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                        className={`h-full rounded-full ${idx === 0 ? 'bg-primary' : 'bg-accent'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Badges - Extra visual interest */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-4 opacity-70"
        >
          {["Git", "Docker", "AWS", "Linux", "Jira", "Figma", "Agile", "CI/CD"].map((tool, i) => (
            <motion.div
              key={tool}
              whileHover={{ scale: 1.1, color: "hsl(var(--foreground))", opacity: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="px-4 py-2 rounded-full border border-border bg-card/50 text-muted-foreground text-sm font-mono cursor-default"
            >
              {tool}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
