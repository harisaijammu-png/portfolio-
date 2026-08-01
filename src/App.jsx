import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';

const sections = [
  { id: 'hero', label: 'Intro', component: <HeroSection /> },
  { id: 'about', label: 'Who I Am', component: <AboutSection /> },
  { id: 'skills', label: 'Technical Skills', component: <SkillsSection /> },
  { id: 'education', label: 'Education', component: <EducationSection /> },
  { id: 'projects', label: 'Academic Project', component: <ProjectsSection /> }
];

const Card3DWrapper = ({ index, activeIndex, children }) => {
  const isActive = index === activeIndex;
  const isPast = index < activeIndex;
  
  const variants = {
    active: {
      y: "0%",
      scale: 1,
      rotateX: 0,
      translateZ: 0,
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    past: {
      y: "-20%",
      scale: 0.85,
      rotateX: -10,
      translateZ: -200,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    future: {
      y: "100%",
      scale: 1,
      rotateX: 0,
      translateZ: 0,
      opacity: 1,
      zIndex: 20,
      pointerEvents: "none",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  let state = "future";
  if (isActive) state = "active";
  else if (isPast) state = "past";

  return (
    <motion.div
      variants={variants}
      initial="future"
      animate={state}
      className="absolute inset-0 w-full h-full transform-gpu"
      style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
    >
      <motion.div 
        className="absolute inset-0 bg-black/60 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      />
      {children}
    </motion.div>
  );
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleNext = useCallback(() => {
    if (activeIndex < sections.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;

      if (Math.abs(e.deltaY) > 20) {
        isScrolling.current = true;
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        isScrolling.current = true;
        handleNext();
        setTimeout(() => isScrolling.current = false, 1000);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        isScrolling.current = true;
        handlePrev();
        setTimeout(() => isScrolling.current = false, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleNavigate = (e) => {
      const targetIndex = e.detail;
      if (typeof targetIndex === 'number' && targetIndex >= 0 && targetIndex < sections.length) {
        setActiveIndex(targetIndex);
      }
    };
    window.addEventListener('navigateToSection', handleNavigate);
    return () => window.removeEventListener('navigateToSection', handleNavigate);
  }, []);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.y < -threshold) {
      handleNext();
    } else if (info.offset.y > threshold) {
      handlePrev();
    }
  };

  return (
    <div className="fixed inset-0 bg-[var(--color-bg-deep)] text-white font-sans selection:bg-[var(--color-brand)]/30 selection:text-white overflow-hidden">
      
      <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => setActiveIndex(idx)}
            className="group relative flex items-center justify-end"
            aria-label={`Go to ${section.label}`}
          >
            <span className={`absolute right-8 px-2 py-1 rounded bg-white/10 backdrop-blur-sm text-xs font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${activeIndex === idx ? 'text-[var(--color-brand)] border-[var(--color-brand)]/50' : 'text-white/70'}`}>
              {section.label}
            </span>
            <div 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'bg-[var(--color-brand)] scale-125 shadow-[0_0_10px_var(--color-brand-glow)]' 
                  : 'bg-white/20 hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </nav>

      <motion.main 
        className="relative w-full h-full" 
        style={{ perspective: "1000px" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        {sections.map((section, idx) => (
          <Card3DWrapper key={section.id} index={idx} activeIndex={activeIndex}>
            {section.component}
          </Card3DWrapper>
        ))}
      </motion.main>
      
      {activeIndex === sections.length - 1 && (
        <div className="fixed bottom-4 left-0 w-full text-center text-gray-500 text-xs z-50 animate-pulse">
          <p>&copy; {new Date().getFullYear()} THATIKONDA KALYANKUMAR. Built with React & Framer Motion.</p>
        </div>
      )}
    </div>
  );
}

export default App;
