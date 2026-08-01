import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: "Languages", skills: ["Java 8/11/17", "SQL", "JavaScript", "TypeScript", "HTML5/CSS3", "XML/JSON"] },
  { title: "Frameworks", skills: ["Spring Boot", "Spring MVC", "Angular 11-14+", "React", "Hibernate", "Spring Security"] },
  { title: "Cloud & DevOps", skills: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD Pipelines"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Cassandra", "Redis"] },
  { title: "Tools & Security", skills: ["Git / GitHub", "Jira", "Postman", "OAuth2 / JWT", "Splunk", "Agile / Scrum"] }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden snap-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto -translate-y-4 md:-translate-y-8"
        >
          <div className="glass-panel px-8 py-6 md:px-12 md:py-8 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(255,183,3,0.05)]">
            {/* Header Layout */}
            <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
              <div className="px-4 py-1.5 rounded-full border border-[var(--color-brand)]/40 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_var(--color-brand-glow)]">
                TECHNICAL SKILLS
              </div>
              <div className="text-5xl md:text-7xl font-black text-[var(--color-brand)]/20 leading-none select-none tracking-tighter">
                02
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-200 tracking-wide uppercase border-l-2 border-[var(--color-brand)] pl-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 text-xs font-bold tracking-widest border border-white/10 rounded-full text-gray-400 bg-white/5 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)]/5 transition-colors duration-300 cursor-default"
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
