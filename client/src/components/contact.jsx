// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, MapPin, Send, Terminal } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card } from "@/components/ui/card";

// export default function Contact() {
//   const [contactData, setContactData] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = {
//       name: formData.get('name'),
//       email: formData.get('email'),
//       subject: formData.get('subject'),
//       message: formData.get('message'),
//       timestamp: new Date().toISOString()
//     };
//     setContactData(prev => [...prev, data]);
//     localStorage.setItem('contactData', JSON.stringify([...contactData, data]));
//     alert('Message sent successfully!');
//     e.target.reset();
//   };

//   return (
//     <section id="contact" className="py-24 bg-background relative overflow-hidden">
//        {/* Grid Background */}
//        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80800808_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />
       
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
//           {/* Left Side Info */}
//           <div>
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-mono mb-6"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
//               </span>
//               Open for Work
//             </motion.div>
            
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="text-4xl md:text-5xl font-heading font-bold mb-6"
//             >
//               Let's build something <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">intelligent.</span>
//             </motion.h2>
            
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="text-muted-foreground text-lg mb-12 max-w-md"
//             >
//               Whether you need a data strategy, a machine learning model, or a full-stack application, I'm ready to discuss your project.
//             </motion.p>
            
//             <motion.div 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="space-y-6"
//             >
//               <a href="mailto:hello@devdata.io" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
//                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Email Me</p>
//                   <p className="font-medium group-hover:text-primary transition-colors">hello@devdata.io</p>
//                 </div>
//               </a>
              
//               <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
//                 <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Base</p>
//                   <p className="font-medium">San Francisco / Remote</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <Card className="p-1 bg-gradient-to-br from-border to-border/50 rounded-2xl">
//               <div className="bg-background rounded-xl p-6 md:p-8 h-full">
//                 <div className="flex items-center gap-2 mb-6 text-muted-foreground border-b border-border pb-4 text-sm font-mono">
//                     <Terminal size={14} />
//                     <span>contact_form.jsx</span>
//                 </div>
                
//                 <form className="space-y-5" onSubmit={handleSubmit}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-muted-foreground">Name</label>
//                       <Input name="name" placeholder="Jane Doe" className="bg-secondary/30 border-border focus:border-primary transition-colors" required />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-muted-foreground">Email</label>
//                       <Input name="email" placeholder="davdata@example.com" type="email" className="bg-secondary/30 border-border focus:border-primary transition-colors" required />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-muted-foreground">Company Name</label>
//                       <Input name="company" placeholder="Your Company Name" className="bg-secondary/30 border-border focus:border-primary transition-colors" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-muted-foreground">Role / Position</label>
//                       <Input name="role" placeholder="Your Role / Position" className="bg-secondary/30 border-border focus:border-primary transition-colors" />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-muted-foreground">Contact Number</label>
//                       <Input name="phone" placeholder="Your Contact Number" type="tel" className="bg-secondary/30 border-border focus:border-primary transition-colors" />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-muted-foreground">Address</label>
//                       <Input name="address" placeholder="Your Address" className="bg-secondary/30 border-border focus:border-primary transition-colors" />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-muted-foreground">Subject</label>
//                     <Input name="subject" placeholder="Project Collaboration" className="bg-secondary/30 border-border focus:border-primary transition-colors" required />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-muted-foreground">Message</label>
//                     <Textarea name="message" placeholder="Tell me about your project goals..." className="min-h-[150px] bg-secondary/30 border-border focus:border-primary transition-colors resize-none" required />
//                   </div>

//                   <Button className="w-full font-bold text-md py-6 gap-2" size="lg" type="submit">
//                     <Send size={18} /> Send Message
//                   </Button>
//                 </form>
//               </div>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Terminal,
  Phone,
  Linkedin,
  Instagram,
  Github,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const data = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };

    alert("Message sent successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      phone: "",
      address: "",
      subject: "",
      message: "",
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "vijaykumarpalanisamy2001@gmail.com",
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

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80800808_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-mono mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Open for Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                intelligent.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-12 max-w-md"
            >
              Whether you need a data strategy, a machine learning model, or a
              full-stack application, I'm ready to discuss your project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6 mb-12"
            >
              <a
                href="mailto:hello@devdata.io"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Me</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    vijaykumarpalanisamy2001@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Born in Tamil Nadu
                  </p>
                  <p className="font-medium">Built For Global Impact</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-4 rounded-full bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-1 bg-gradient-to-br from-border to-border/50 rounded-2xl">
              <div className="bg-background rounded-xl p-6 md:p-8 h-full">
                <div className="flex items-center gap-2 mb-6 text-muted-foreground border-b border-border pb-4 text-sm font-mono">
                  <Terminal size={14} />
                  <span>contact_form.jsx</span>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="bg-secondary/30 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="davdata@example.com"
                        type="email"
                        className="bg-secondary/30 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="bg-secondary/30 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Role / Position
                      </label>
                      <Input
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Your Role / Position"
                        className="bg-secondary/30 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Contact Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Contact Number"
                        type="tel"
                        className="bg-secondary/30 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Address
                      </label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Your Address"
                        className="bg-secondary/30 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className="bg-secondary/30 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project goals..."
                      className="min-h-[150px] bg-secondary/30 border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full font-bold text-md py-6 gap-2"
                    size="lg"
                  >
                    <Send size={18} /> Send Message
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}