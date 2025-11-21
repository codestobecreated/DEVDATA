import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Predictive Analytics Dashboard",
    description: "A real-time dashboard visualizing predictive maintenance data for manufacturing equipment. Uses Machine Learning models to forecast failures.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Plotly"],
    category: "Data Science",
    color: "border-primary/50"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce store with cart functionality, user authentication, and payment integration.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full Stack",
    color: "border-accent/50"
  },
  {
    id: 3,
    title: "NLP Sentiment Analyzer",
    description: "Web application that analyzes text input to determine sentiment polarity using Natural Language Processing techniques.",
    tags: ["React", "Flask", "NLTK", "TensorFlow"],
    category: "Hybrid",
    color: "border-foreground/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of projects demonstrating my capabilities in both data science and web development.
            </p>
          </div>
          <a href="#" className="text-primary hover:underline flex items-center gap-2 font-medium">
            View GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col border bg-card hover:shadow-lg transition-all duration-300 group ${project.color}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-6">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
