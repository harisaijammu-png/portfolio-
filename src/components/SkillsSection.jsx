import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: "Programming Languages", skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SQL", "XML", "JSON"] },
  { title: "Frontend Technologies", skills: ["Angular 11–14+", "TypeScript", "JavaScript", "HTML5", "SCSS", "RxJS", "Bootstrap"] },
  { title: "UI Architecture & Patterns", skills: ["Single Page Applications (SPA)", "Component-Based Architecture", "Lazy Loading", "Route Guards", "Reactive Forms", "Custom Directives & Pipes"] },
  { title: "API & Integration", skills: ["RESTful APIs", "Swagger/OpenAPI", "HTTP Client Integration", "JSON"] },
  { title: "Backend Technologies", skills: ["Java 8/11/17", "Spring Boot", "Spring MVC", "Spring Security", "JPA/Hibernate", "REST APIs"] },
  { title: "Testing Frameworks", skills: ["Jasmine", "Karma", "Selenium", "Postman"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Cassandra"] },
  { title: "Cloud & Deployment", skills: ["AWS", "GCP", "Azure"] },
  { title: "DevOps & CI/CD", skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Angular CLI", "NPM"] },
  { title: "Version Control", skills: ["Git", "GitHub", "SVN"] }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-start justify-center pt-32 pb-24 md:pt-40 overflow-hidden snap-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center space-x-4 w-full mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">Skills</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--color-brand)]/50 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full mx-auto"
        >
          <div className="glass-panel px-6 py-5 md:px-10 md:py-6 rounded-3xl relative group border-[var(--color-card-border)] bg-slate-900/40">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-4">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-200 tracking-wide uppercase border-l-2 border-[var(--color-brand)] pl-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-[11px] md:text-xs font-bold tracking-widest border border-slate-700 rounded-full text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
