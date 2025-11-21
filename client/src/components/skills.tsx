import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillData = [
  { subject: 'Python', A: 90, fullMark: 100 },
  { subject: 'React', A: 85, fullMark: 100 },
  { subject: 'SQL', A: 80, fullMark: 100 },
  { subject: 'Machine Learning', A: 75, fullMark: 100 },
  { subject: 'Node.js', A: 80, fullMark: 100 },
  { subject: 'TypeScript', A: 85, fullMark: 100 },
];

const categories = [
  {
    title: "Data Science",
    color: "text-primary",
    skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL", "Data Visualization", "Statistics"]
  },
  {
    title: "Full Stack",
    color: "text-accent",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "Git"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl">
            A unique blend of analytical and engineering skills allows me to handle the entire data lifecycle—from extraction and analysis to deployment in user-facing applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[400px] w-full relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skill Lists */}
          <div className="space-y-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={`text-xl font-bold mb-4 ${category.color}`}>{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="bg-card border-border hover:border-primary/50 transition-colors py-2 px-3 text-sm font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
