import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = "", decimal = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  const displayValue = useTransform(springValue, (current) => {
    if (decimal) {
      return current.toFixed(1) + suffix;
    }
    return Math.floor(current) + suffix;
  });

  return (
    <motion.span ref={ref} className="text-4xl md:text-6xl font-black text-[var(--color-brand)] glow-text inline-block tracking-tighter">
      {displayValue}
    </motion.span>
  );
};

const stats = [
  { value: 3, suffix: "+", label: "Years Experience", decimal: false },
  { value: 30, suffix: "%", label: "Cost Reduction", decimal: false },
  { value: 15, suffix: "%", label: "Infra Savings", decimal: false },
  { value: 20, suffix: "%", label: "Faster Resolution", decimal: false }
];

const StatsSection = () => {
  return (
    <section id="stats" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden snap-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(255,183,3,0.05)]">
            {/* Header Layout */}
            <div className="flex justify-between items-start mb-10 border-b border-white/5 pb-6">
              <div className="px-4 py-1.5 rounded-full border border-[var(--color-brand)]/40 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_var(--color-brand-glow)]">
                BY THE NUMBERS
              </div>
              <div className="text-5xl md:text-7xl font-black text-[var(--color-brand)]/20 leading-none select-none tracking-tighter">
                04
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center space-y-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                  <div className="h-px w-12 bg-[var(--color-brand)]/30"></div>
                  <p className="text-gray-400 font-bold tracking-widest uppercase text-[10px] md:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
