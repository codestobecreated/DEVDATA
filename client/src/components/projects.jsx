import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// import project1 from "@assets/generated_images/predictive_maintenance_dashboard_interface.png";
// import project2 from "@assets/generated_images/e-commerce_analytics_dashboard.png";
// import project3 from "@assets/generated_images/ai_sentiment_analysis_tool_interface.png";

const projects = [
  {
    id: 1,
    title: "Predictive Maintenance Dashboard",
    description: "Real-time industrial IoT monitoring system using ML to predict equipment failures before they happen. Features live data visualization and alert management.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Plotly"],
    category: "Data Science",
    image: "https://via.placeholder.com/400x300?text=Project+1",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "E-commerce Analytics Platform",
    description: "Comprehensive analytics suite for online retailers. Tracks user behavior heatmaps, sales trends, and conversion funnels in a clean, modern interface.",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    category: "Full Stack",
    image: "https://via.placeholder.com/400x300?text=Project+2",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Sentiment Analyzer",
    description: "Natural Language Processing tool that visualizes sentiment across large text datasets. Uses deep learning to categorize emotion and tone in real-time.",
    tags: ["TensorFlow", "FastAPI", "React", "NLP"],
    category: "AI / ML",
    image: "https://via.placeholder.com/400x300?text=Project+3",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl text-lg"
            >
              A selection of technical challenges I've solved, bridging the gap
              between raw data and user experience.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/codestobecreated"
            target="_blank"
            className="group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View GitHub Profile{" "}
            <ArrowUpRight
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={18}
            />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur text-foreground border-border hover:bg-background">
                    {project.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.link}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </h3>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
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
