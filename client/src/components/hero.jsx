// import { motion } from "framer-motion";
// import { ArrowRight, Github, Linkedin } from "lucide-react";
// // import heroBg from "@assets/generated_images/abstract_dark_data_visualization_background.png";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
//         {/* <img
//           src={heroBg}
//           alt="Abstract Background"
//           className="w-full h-full object-cover opacity-60"
//         /> */}
//       </div>

//       <div className="container mx-auto px-6 relative z-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center justify-center gap-4 mb-6"
//           >
//             <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono tracking-wider uppercase">
//               Data Scientist
//             </span>
//             <span className="w-1 h-1 bg-muted-foreground rounded-full" />
//             <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-mono tracking-wider uppercase">
//               Full Stack Developer
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
//           >
//             Bridging the gap between <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
//               Data & Experience
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
//           >
//             I build intelligent applications that leverage data science insights within robust full-stack architectures. 1 Year of professional experience turning numbers into narratives.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//           >
//             <a
//               href="#projects"
//               className="px-8 py-4 bg-foreground text-background rounded-md font-bold flex items-center gap-2 hover:bg-foreground/90 transition-colors"
//             >
//               View Projects <ArrowRight className="w-4 h-4" />
//             </a>
//             <div className="flex items-center gap-4">
//               <a
//                 href="#"
//                 className="p-4 rounded-md bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors"
//               >
//                 <Github className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="p-4 rounded-md bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
//       >
//         <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
//           <div className="w-1 h-2 bg-muted-foreground rounded-full" />
//         </div>
//       </motion.div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["Full Stack Developer", "Data Scientist"];
  const [isDeleting, setIsDeleting] = useState(false);

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:vijaykumarpalanisamy2001@gmail.com",
      color: "hover:text-red-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/918610906298",
      color: "hover:text-green-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vijaykumar-stopcode?utm_source=portfolio",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/codestobecreated",
      color: "hover:text-purple-500",
    },
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-2">
                Hi, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-4">
                VIJAY KUMAR
              </h1>
              <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent min-h-[1.5em]">
                {text}
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              I build intelligent applications that leverage data science
              insights within robust full-stack architectures. Transforming
              complex data into intuitive user experiences with 1 year of
              professional expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-foreground text-background rounded-md font-bold flex items-center gap-2 hover:bg-foreground/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-md font-bold flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3 mt-8"
            >
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className={`p-4 rounded-full bg-card border border-border hover:border-primary ${link.color} hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] transition-all hover:scale-110 duration-300`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <svg
              viewBox="0 0 500 500"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Data Science - Chart Background */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {/* Bar Chart */}
                <motion.rect
                  x="50"
                  y="300"
                  width="40"
                  height="0"
                  className="fill-primary/20"
                  animate={{ height: 120 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
                <motion.rect
                  x="110"
                  y="250"
                  width="40"
                  height="0"
                  className="fill-primary/30"
                  animate={{ height: 170 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
                <motion.rect
                  x="170"
                  y="280"
                  width="40"
                  height="0"
                  className="fill-primary/20"
                  animate={{ height: 140 }}
                  transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                />
                <motion.rect
                  x="230"
                  y="220"
                  width="40"
                  height="0"
                  className="fill-primary/30"
                  animate={{ height: 200 }}
                  transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                />
              </motion.g>

              {/* Web Development - Browser Window */}
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {/* Browser Frame */}
                <rect
                  x="150"
                  y="80"
                  width="320"
                  height="240"
                  rx="8"
                  className="fill-card stroke-border"
                  strokeWidth="2"
                />

                {/* Browser Header */}
                <rect
                  x="150"
                  y="80"
                  width="320"
                  height="30"
                  rx="8"
                  className="fill-muted"
                />

                {/* Browser Dots */}
                <circle cx="170" cy="95" r="4" className="fill-red-500" />
                <circle cx="185" cy="95" r="4" className="fill-yellow-500" />
                <circle cx="200" cy="95" r="4" className="fill-green-500" />

                {/* Code Lines */}
                <motion.line
                  x1="170"
                  y1="130"
                  x2="170"
                  y2="130"
                  className="stroke-accent"
                  strokeWidth="3"
                  animate={{ x2: 280 }}
                  transition={{ delay: 2, duration: 0.6 }}
                />
                <motion.line
                  x1="170"
                  y1="155"
                  x2="170"
                  y2="155"
                  className="stroke-primary"
                  strokeWidth="3"
                  animate={{ x2: 380 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                />
                <motion.line
                  x1="170"
                  y1="180"
                  x2="170"
                  y2="180"
                  className="stroke-accent"
                  strokeWidth="3"
                  animate={{ x2: 320 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                />
                <motion.line
                  x1="170"
                  y1="205"
                  x2="170"
                  y2="205"
                  className="stroke-primary"
                  strokeWidth="3"
                  animate={{ x2: 350 }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                />
              </motion.g>

              {/* Data Points - Floating */}
              <motion.circle
                cx="100"
                cy="150"
                r="6"
                className="fill-accent"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="420"
                cy="200"
                r="8"
                className="fill-primary"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.circle
                cx="80"
                cy="250"
                r="5"
                className="fill-accent"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.circle
                cx="450"
                cy="320"
                r="7"
                className="fill-primary"
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />

              {/* Connection Lines */}
              <motion.path
                d="M 100 150 Q 200 100 310 110"
                fill="none"
                className="stroke-primary/30"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 270 320 Q 350 280 420 200"
                fill="none"
                className="stroke-accent/30"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 3.5, duration: 2, ease: "easeInOut" }}
              />

              {/* Glow Effects */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
