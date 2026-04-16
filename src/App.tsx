/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layers, 
  ChevronRight, 
  Menu, 
  X,
  FileText,
  Terminal,
  Cpu,
  Globe
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for Tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---

const PROJECTS = [
  {
    title: "AI With English Learning",
    role: "Full Stack Developer",
    tech: ["Next.js", "Gemini API", "AI Integration", "TailwindCSS"],
    description: "An intelligent English learning assistant powered by AI to provide personalized feedback and conversation practice.",
    impact: "Enhanced language acquisition through interactive AI-driven tutoring sessions.",
    links: {
      demo: "https://ai-with-english-learning.vercel.app/"
    }
  },
  {
    title: "Honeymoon Wedding Invitation SaaS",
    role: "Full Stack Developer",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "SaaS"],
    description: "A scalable SaaS platform for creating and managing elegant wedding invitations with personalized features.",
    impact: "Enabled couples to digitize their invitations with real-time updates and guest management.",
    links: {
      demo: "https://honeymoon-wedding-invitation-saa-s.vercel.app/"
    }
  },
  {
    title: "Caphe Co Que Day",
    role: "Frontend Developer",
    tech: ["Next.js", "React", "Branding", "TailwindCSS"],
    description: "A high-conversion landing page and storefront for a traditional coffee brand, focusing on brand storytelling.",
    impact: "Increased online brand presence and customer engagement for a local coffee business.",
    links: {
      demo: "https://caphecoqueday.vercel.app/"
    }
  },
  {
    title: "Wedding Janes Henry 2026",
    role: "Frontend Developer",
    tech: ["Next.js", "Framer Motion", "Personalization"],
    description: "A custom-designed wedding commemorative site with interactive galleries and event details.",
    impact: "Created a lasting digital memory and guest portal for a special event.",
    links: {
      demo: "https://wedding-janes-henry-2026.vercel.app/"
    }
  },
  {
    title: "CRM Dashboard System",
    role: "Frontend Developer @ TDCX",
    tech: ["Next.js 14", "Laravel 11", "Vue 3", "TailwindCSS"],
    description: "Developed a high-performance CRM system for Invoice and Shipping management. Integrated Google Analytics 4 and Ads for business tracking.",
    impact: "Streamlined shipping workflows and improved invoice tracking accuracy.",
    links: {
      github: "https://github.com/DatPHP/invoice-crm-frontend",
      demo: "https://acme-dashboard-crm.vercel.app/dashboard"
    }
  },
  {
    title: "Gold View Henry App",
    role: "Frontend Developer @ TDCX",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    description: "A modern real estate or property showcase application with smooth transitions and interactive UI elements.",
    impact: "Showcased high-end property listings with an immersive user experience.",
    links: {
      github: "https://github.com/DatPHP/gold-view-henry-app",
      demo: "https://gold-view-henry-app.vercel.app/"
    }
  },
  {
    title: "Henry Todo List App",
    role: "Frontend Developer @ TDCX",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    description: "A sophisticated task management application focusing on productivity and clean user interface.",
    impact: "Demonstrated efficient state management and modern frontend architecture.",
    links: {
      github: "https://github.com/DatPHP/Henry-todolist-app",
      demo: "https://henry-todolist-app.vercel.app/"
    }
  },
  {
    title: "Shop 2024",
    role: "Frontend Developer @ TDCX",
    tech: ["React", "E-commerce", "TailwindCSS"],
    description: "A modern e-commerce storefront built with a focus on performance and conversion-oriented design.",
    impact: "Implemented a seamless shopping experience with optimized product discovery.",
    links: {
      github: "https://github.com/DatPHP/shop2024"
    }
  },
  {
    title: "Intranet Project",
    role: "Full Stack PHP Developer @ Archetype Group",
    tech: ["Next.js 14", "MUI", "Laravel 8", "NestJS"],
    description: "Architected a custom intranet with asynchronous data processing and large file handling. Designed a logging system using NestJS and MongoDB.",
    impact: "Improved internal project management efficiency by 30%.",
    links: {
      github: "https://github.com/DatPHP/CRMNew2025"
    }
  }
];

const SKILLS = [
  {
    category: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    items: ["Next.js 14", "React", "Vue 3", "Angular", "TailwindCSS", "TypeScript"]
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    items: ["Laravel", "Node.js (Express/NestJS)", "Python (Django/Flask)", "PHP", "RESTful API"]
  },
  {
    category: "Architecture & Tools",
    icon: <Cpu className="w-5 h-5" />,
    items: ["Docker", "SOLID", "Design Patterns", "MySQL/PostgreSQL", "MongoDB", "Git/SVN"]
  }
];

const EXPERIENCE = [
  {
    period: "2024 – Present",
    company: "TDCX (MY) SDN. BHD COMPANY",
    role: "Frontend Developer",
    desc: "Leading frontend development for high-scale CRM systems, focusing on invoice management, shipping workflows, and marketing integration."
  },
  {
    period: "2023 – 2024",
    company: "Archetype Group",
    role: "Full Stack PHP Developer",
    desc: "Built digital cross-platform applications and optimized legacy systems with modern Next.js architectures."
  },
  {
    period: "2022 – 2023",
    company: "The Big Rich Group Singapore",
    role: "Web Team Leader",
    desc: "Managed development teams in Vietnam, reporting and training while building API-driven applications."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled ? "bg-zinc-950/80 backdrop-blur-md border-zinc-800 py-4" : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-black">
            <Terminal size={18} />
          </div>
          <span>Henry Nguyen</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded-full text-sm font-semibold hover:bg-emerald-400 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for new opportunities
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
        Senior Full Stack <br /> Developer
      </h1>
      
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        I build scalable web systems with modern technologies focusing on performance, 
        security, and exceptional user experience. Specializing in CRM & Fintech.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#projects" 
          className="px-8 py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all group"
        >
          View Projects
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="#contact" 
          className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-2xl font-bold hover:bg-zinc-800 transition-all"
        >
          Contact Me
        </a>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
    >
      <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Scroll to explore</span>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Turning business ideas into <br />
          <span className="text-emerald-500">high-performance systems.</span>
        </h2>
        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
          <p>
            I’m a Full Stack Developer with 5+ years of experience building scalable web applications. 
            My journey has taken me through diverse industries, from Career portals to complex Fintech Trading platforms.
          </p>
          <p>
            I specialize in system architecture and business analysis, ensuring that the code I write 
            directly solves real-world business challenges. I'm a perfectionist who values clean code, 
            SOLID principles, and robust design patterns.
          </p>
        </div>
        
        <div className="mt-10 flex gap-8">
          <div>
            <div className="text-3xl font-bold text-white">5+</div>
            <div className="text-sm text-zinc-500">Years Exp</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="text-sm text-zinc-500">Projects Done</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">3+</div>
            <div className="text-sm text-zinc-500">Team Leader</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group"
      >
        <img 
          src="https://picsum.photos/seed/developer/800/800" 
          alt="Henry Nguyen" 
          className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
          <div className="text-2xl font-bold">Henry Nguyen</div>
          <div className="text-emerald-500 font-medium">Full Stack Developer</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-zinc-900/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-zinc-400">Broad stack expertise across the entire development lifecycle.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 transition-colors"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-6">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map(item => (
                <span key={item} className="px-3 py-1 bg-zinc-900 text-zinc-400 text-sm rounded-lg border border-zinc-800">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
        <p className="text-zinc-400">A selection of systems built for real production impact.</p>
      </div>
      <a href="https://github.com/DatPHP" className="text-emerald-500 font-bold flex items-center gap-2 hover:underline">
        View all on GitHub <ExternalLink size={16} />
      </a>
    </div>

    <div className="grid gap-12">
      {PROJECTS.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "group grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-[40px] bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-all",
            idx % 2 === 1 && "lg:flex-row-reverse"
          )}
        >
          <div className={cn(idx % 2 === 1 && "lg:order-2")}>
            <div className="text-emerald-500 font-bold text-sm mb-2 uppercase tracking-widest">{project.role}</div>
            <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-4 mb-8">
              <span className="text-emerald-400 font-bold text-sm block mb-1">Impact:</span>
              <span className="text-zinc-300 italic">{project.impact}</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map(t => (
                <span key={t} className="text-xs font-mono text-zinc-500 px-2 py-1 bg-zinc-800 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  className="px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-400 transition-all"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  className="px-6 py-3 bg-zinc-800 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-700 transition-all"
                >
                  Source <Github size={16} />
                </a>
              )}
            </div>
          </div>

          <div className={cn(
            "relative aspect-video rounded-3xl overflow-hidden border border-zinc-800",
            idx % 2 === 1 && "lg:order-1"
          )}>
            <img 
              src={`https://picsum.photos/seed/${project.title}/1200/800`} 
              alt={project.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 px-6 bg-zinc-900/50">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
        <p className="text-zinc-400">A timeline of my growth and contributions.</p>
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-zinc-800"
          >
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-emerald-500 rounded-full" />
            <div className="text-sm font-bold text-emerald-500 mb-2">{exp.period}</div>
            <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
            <div className="text-zinc-300 font-medium mb-4">{exp.company}</div>
            <p className="text-zinc-500 leading-relaxed">
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6 max-w-7xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-12 md:p-24 rounded-[60px] border border-zinc-800 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
      
      <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
        Let's build something <br />
        <span className="text-emerald-500">great together.</span>
      </h2>
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
        Whether you have a specific project in mind or just want to chat about 
        tech, my inbox is always open.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <a 
          href="mailto:nguyenvandat170296@gmail.com" 
          className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black rounded-2xl font-bold hover:bg-emerald-400 transition-all"
        >
          <Mail size={20} /> Email Me
        </a>
        <a 
          href="https://www.linkedin.com/in/van-dat-nguyen-b678a2176/" 
          className="flex items-center gap-3 px-8 py-4 bg-zinc-800 text-white rounded-2xl font-bold hover:bg-zinc-700 transition-all border border-zinc-700"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} Henry Nguyen. Built with Next.js & Tailwind.
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/DatPHP" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/van-dat-nguyen-b678a2176/" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
        <a href="mailto:nguyenvandat170296@gmail.com" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
