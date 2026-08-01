import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Airlines Reservation System",
    role: "Full Stack Developer",
    points: [
      "Developed a flight booking web application using Java Servlets and JSP, following an MVC architecture to separate business logic, data access, and presentation layers.",
      "Solved concurrent-booking conflicts by wrapping seat allocation in database transactions with row-level locking, guaranteeing zero double-bookings under simultaneous requests.",
      "Built REST API layer, payment gateway integration, email confirmations, and migration to Spring Boot."
    ],
    tech: ["Java", "JSP", "Servlets", "Spring Boot", "REST API", "SQL"],
    link: "#",
    github: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden snap-center">
      {/* Background Number */}
      <div className="absolute left-[-5%] top-[10%] text-[40vh] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter z-0">
        04
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 -translate-y-6 md:-translate-y-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center space-x-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight glow-text">Academic Project</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--color-brand)]/50 to-transparent"></div>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel p-8 md:p-10 rounded-2xl group hover:glow-border transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
                <div className="flex-1">
                  <div className="text-[var(--color-brand)] text-sm font-mono tracking-widest mb-2 uppercase">{project.role}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[var(--color-brand)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ul className="text-gray-400 mb-6 space-y-2 list-disc list-outside ml-4">
                    {project.points.map((point, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex md:flex-col gap-4 justify-start md:justify-center items-center md:items-end">
                  <a href={project.github} className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-all duration-300 hover:shadow-[0_0_15px_var(--color-brand-glow)]" aria-label="Code">
                    <Code2 className="w-6 h-6" />
                  </a>
                  <a href={project.link} className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-all duration-300 hover:shadow-[0_0_15px_var(--color-brand-glow)]" aria-label="External Link">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
