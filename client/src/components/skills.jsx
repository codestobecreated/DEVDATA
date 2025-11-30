// import { motion } from "framer-motion";
// import { Brain, Layout } from "lucide-react";

// const skillCategories = [
//   {
//     title: "Data Science & ML",
//     icon: <Brain className="w-6 h-6 text-primary" />,
//     color: "bg-primary",
//     skills: [
//       { 
//         name: "Python", 
//         level: 95, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
//       },
//       { 
//         name: "TensorFlow", 
//         level: 85, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" 
//       },
//       { 
//         name: "Pandas", 
//         level: 90, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" 
//       },
//       { 
//         name: "SQL", 
//         level: 88, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
//       },
//       { 
//         name: "Data Viz", 
//         level: 82, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
//       },
//     ]
//   },
//   {
//     title: "Full Stack Dev",
//     icon: <Layout className="w-6 h-6 text-accent" />,
//     color: "bg-accent",
//     skills: [
//       { 
//         name: "React", 
//         level: 90, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
//       },
//       { 
//         name: "Node.js", 
//         level: 85, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
//       },
//       { 
//         name: "Tailwind", 
//         level: 95, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
//       },
//       { 
//         name: "PostgreSQL", 
//         level: 80, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
//       },
//       { 
//         name: "GraphQL", 
//         level: 85, 
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" 
//       },
//     ]
//   }
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, scale: 0.9 },
//   show: { opacity: 1, scale: 1 }
// };

// export default function Skills() {
//   return (
//     <section id="skills" className="py-24 bg-background relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-1/2 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

//       <div className="container mx-auto px-6">
//         <div className="mb-20 text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-heading font-bold mb-4"
//           >
//             Technical Expertise
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-muted-foreground max-w-2xl mx-auto"
//           >
//             My technical toolkit covers the full spectrum of data-driven application development.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {skillCategories.map((category, idx) => (
//             <motion.div
//               key={category.title}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               variants={container}
//             >
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-3 rounded-lg bg-card border border-border shadow-sm">
//                   {category.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold">{category.title}</h3>
//               </div>

//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {category.skills.map((skill, index) => (
//                   <motion.div 
//                     key={skill.name} 
//                     variants={item} 
//                     className="group relative bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//                   >
//                     {/* Icon Container */}
//                     <div className="w-12 h-12 relative flex items-center justify-center">
//                         <img 
//                             src={skill.icon} 
//                             alt={skill.name} 
//                             className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
//                         />
//                     </div>
                    
//                     {/* Text Info */}
//                     <div className="text-center w-full">
//                       <span className="font-heading font-medium text-foreground block mb-2">{skill.name}</span>
                      
//                       {/* Mini Progress Bar */}
//                       <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${skill.level}%` }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
//                           className={`h-full rounded-full ${idx === 0 ? 'bg-primary' : 'bg-accent'}`}
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Floating Tech Badges - Bottom */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-20 flex flex-wrap justify-center gap-4 opacity-50"
//         >
//           {["Git", "Docker", "AWS", "Linux", "Jira", "Figma", "Agile", "CI/CD"].map((tool, i) => (
//             <span
//               key={tool}
//               className="px-3 py-1 rounded-full border border-border text-xs font-mono"
//             >
//               {tool}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  GitBranch,
  Palette,
  Layout,
  Zap,
} from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "Python",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "SQL",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Palette className="w-5 h-5" />,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "HTML5",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        level: 93,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "React",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Vite",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "Tailwind",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Material UI",
        level: 82,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      },
      {
        name: "Sass",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Layout className="w-5 h-5" />,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      {
        name: "Node.js",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        level: 83,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "Django",
        level: 87,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
      },
      {
        name: "Django REST",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg",
      },
      {
        name: "FastAPI",
        level: 82,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      },
    ],
  },
  {
    id: "database",
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-orange-500 to-red-500",
    skills: [
      {
        name: "PostgreSQL",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        level: 83,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        level: 82,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      },
      {
        name: "SQLite",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      },
    ],
  },
  {
    id: "datascience",
    title: "Data Science & ML",
    icon: <Brain className="w-5 h-5" />,
    gradient: "from-pink-500 to-rose-500",
    skills: [
      {
        name: "NumPy",
        level: 92,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      },
      {
        name: "scikit-learn",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "Keras",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
      },
      {
        name: "PyTorch",
        level: 83,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "Matplotlib",
        level: 87,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
      },
      {
        name: "OpenCV",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
      },
      {
        name: "Jupyter",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: <Cloud className="w-5 h-5" />,
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      {
        name: "Docker",
        level: 78,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Nginx",
        level: 73,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
      },
      {
        name: "GitHub Actions",
        level: 70,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
      },
    ],
  },
  {
    id: "versioncontrol",
    title: "Version Control & Testing",
    icon: <GitBranch className="w-5 h-5" />,
    gradient: "from-red-500 to-orange-500",
    skills: [
      {
        name: "Git",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "GitLab",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
      },
      {
        name: "Postman",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      },
      {
        name: "Pytest",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg",
      },
      {
        name: "Jest",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
      },
    ],
  },
  {
    id: "api",
    title: "APIs & Integration",
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-yellow-500 to-amber-500",
    skills: [
      {
        name: "REST API",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "GraphQL",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      },
      {
        name: "WebSockets",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
      },
    ],
  },
];

const additionalSkills = [
  "Seaborn",
  "Plotly",
  "XGBoost",
  "NLTK",
  "spaCy",
  "Transformers",
  "Selenium",
  "Streamlit",
  "MLflow",
  "Kaggle",
  "TensorBoard",
  "Vercel",
  "Netlify",
  "Render",
  "Stripe",
  "Razorpay",
  "JWT",
  "OAuth",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              💼 What I Bring to the Table
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Technical Arsenal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A versatile skill set combining data science, full-stack
            development, and cloud technologies
          </motion.p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              className="group relative"
            >
              {/* Card */}
              <div
                className={`relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 transition-all duration-500 ${
                  activeCategory === category.id
                    ? "scale-105 border-slate-700"
                    : "hover:border-slate-700"
                }`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br ${category.gradient} text-white mb-3`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <div className="text-sm text-gray-500 mt-1">
                    {category.skills.length} skills
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3 relative">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-3 group/skill"
                    >
                      {/* Icon */}
                      <div className="w-8 h-8 flex-shrink-0 relative">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain opacity-70 group-hover/skill:opacity-100 transition-opacity"
                        />
                      </div>

                      {/* Name and Progress */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.5 + index * 0.05,
                              ease: "easeOut",
                            }}
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Additional Technologies
            </h3>
            <p className="text-gray-400">
              Other tools and frameworks I work with
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 hover:border-slate-700 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 cursor-default backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: "50+" },
            { label: "Categories", value: "8" },
            { label: "Years Experience", value: "1+" },
            { label: "Projects Built", value: "25+" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-slate-900/30 border border-slate-800"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}