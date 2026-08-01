import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden snap-center">


      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >


          <div className="glass-panel p-8 md:p-12 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(255,183,3,0.05)]">
            {/* Header Layout */}
            <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
              <div className="px-4 py-1.5 rounded-full border border-[var(--color-brand)]/40 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_var(--color-brand-glow)]">
                ABOUT / PROFILE
              </div>
              <div className="text-5xl md:text-7xl font-black text-[var(--color-brand)]/20 leading-none select-none tracking-tighter">
                01
              </div>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              <p>
                I'm a Java Full Stack Developer with <strong className="text-[var(--color-brand)] glow-text font-bold">3+ years</strong> of hands-on experience delivering enterprise-scale, cloud-ready applications using <span className="text-[var(--color-brand)] font-medium glow-text">Java</span>, <span className="text-[var(--color-brand)] font-medium glow-text">Spring Boot</span>, and <span className="text-[var(--color-brand)] font-medium glow-text">Angular</span>.
              </p>
              <p>
                Proven expertise in designing RESTful microservices, building high-performance SPAs, and implementing secure, scalable backend systems.
              </p>
              <p>
                Strong background in Agile delivery, CI/CD automation, and collaborating across product, QA, and DevOps teams in regulated and enterprise environments.
              </p>
            </div>
            
            {/* Key Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['FULL STACK', 'CLOUD NATIVE', 'CI/CD AUTOMATION', 'MICROSERVICES', 'PROBLEM SOLVING'].map((tag, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-bold tracking-widest border border-gray-600 rounded-full text-gray-400 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
