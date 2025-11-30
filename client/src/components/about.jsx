import { motion } from "framer-motion";
import profileImage from "../../../assets/man-working.jpg";
import { Button } from "@/components/ui/button";
import { FileDown, Code, Database } from "lucide-react";


export default function About() {
  return (
    <section id="about" className="py-24 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              {/* Decorative frames */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl -translate-x-4 -translate-y-4" />

              {/* Main Image */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-muted">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 right-4 z-20 bg-card border border-border p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    Experience
                  </p>
                  <p className="font-bold">1+ Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-0.5 bg-primary"></span>
              <span className="text-primary font-mono uppercase tracking-wider text-sm">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Bridging the gap between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Data & Experience
              </span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hello! I'm a passionate Data Scientist and Full Stack Developer
                with over a year of hands-on experience. My journey sits at the
                intersection of{" "}
                <span className="text-foreground font-medium">
                  analytical rigor
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  creative engineering
                </span>
                .
              </p>
              <p>
                I don't just analyze data; I build the systems that make it
                useful. Whether it's training machine learning models to predict
                trends or architecting the React frontends that visualize them,
                I love the challenge of end-to-end development.
              </p>
              <p>
                Currently, I'm focused on building scalable web applications
                that leverage AI to solve real-world problems. When I'm not
                coding, you can find me exploring new datasets or contributing
                to open-source projects.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="font-bold gap-2">
                <FileDown size={18} /> Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-bold gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary"
              >
                <Database size={18} /> View Data Stack
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
