import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Master's in Applied Computer Science",
    institution: "Northwest Missouri State University",
    duration: "DEC 2024",
    grade: "3.5"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Karunya Institute of Technology & Science",
    duration: "MAY 2022",
    grade: "7.0"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="relative min-h-screen flex items-start justify-center pt-32 pb-24 md:pt-40 overflow-hidden snap-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center space-x-4 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight glow-text">Education</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--color-brand)]/50 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(255,183,3,0.05)]">

            <div className="space-y-8 relative pl-4 md:pl-0">
              {/* Vertical timeline line for mobile */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--color-card-border)] to-transparent md:hidden"></div>
              
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 relative">
                  {/* Timeline dot for mobile */}
                  <div className="absolute -left-5 top-2.5 w-2 h-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_8px_var(--color-brand-glow)] md:hidden"></div>
                  
                  <div className="flex-shrink-0 px-3 py-1.5 text-xs font-bold tracking-widest bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/40 rounded-full shadow-[inset_0_0_10px_rgba(255,183,3,0.1)] w-fit">
                    [{edu.duration}]
                  </div>
                  <div className="h-px w-8 bg-white/10 hidden md:block"></div>
                  <div className="text-gray-300 font-light text-base md:text-lg leading-relaxed">
                    <strong className="text-white font-medium">{edu.degree}</strong> <span className="hidden md:inline text-gray-500">—</span><br className="md:hidden" /> {edu.institution} <span className="text-[var(--color-brand)] glow-text text-sm ml-2 font-medium">(GPA: {edu.grade})</span>
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

export default EducationSection;
