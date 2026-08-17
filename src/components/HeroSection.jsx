import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Typewriter = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
      className="inline-block uppercase tracking-widest text-sm text-white font-medium drop-shadow-md"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: 'none' }}
          animate={{ opacity: 1, display: 'inline' }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const enableAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        videoRef.current.currentTime = 0; 
        videoRef.current.play().catch(err => console.error("Audio play blocked by browser:", err));
      }
      
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
      document.removeEventListener('keydown', enableAudio);
    };

    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
    document.addEventListener('keydown', enableAudio);

    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
      document.removeEventListener('keydown', enableAudio);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 snap-center bg-[#0a0a0a]">
      
      <div className="absolute inset-0 z-0 opacity-30">
        <ParticleBackground />
      </div>

      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 xl:gap-24 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-6 max-w-xl xl:max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-brand)]/30 bg-[var(--color-brand)]/10 backdrop-blur-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider text-[var(--color-brand)] uppercase">OPEN TO WORK</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-start w-full">
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-1">Hi, I'm</h2>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem] font-black tracking-tighter leading-[1.05] uppercase drop-shadow-xl">
              <span className="text-white block">THATIKONDA</span>
              <span className="text-[var(--color-brand)] block">KALYANKUMAR</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="h-6 mt-4 text-sm md:text-base font-semibold tracking-wider text-gray-400">
            <Typewriter text="SOFTWARE ENGINEER • FULL STACK DEVELOPER" delay={1} />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 4 }));
              }}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-[var(--color-brand)] text-slate-950 font-bold hover:brightness-110 transition-colors shadow-lg shadow-black/20 group"
            >
              <span className="relative z-10 flex items-center tracking-widest text-sm uppercase">
                VIEW ACADEMIC PROJECT <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <a 
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-[var(--color-brand)] text-slate-950 font-bold hover:brightness-110 transition-colors shadow-lg shadow-black/20 group"
            >
              <span className="relative z-10 flex items-center tracking-widest text-sm uppercase">
                VIEW RESUME <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <div className="relative w-full max-w-lg md:max-w-xl aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 shadow-2xl glass-panel">
            <video 
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
              onTimeUpdate={(e) => {
                const video = e.target;
                if (video.duration && (video.duration - video.currentTime) < 2.5) {
                  video.pause();
                }
              }}
            >
              <source src="/avatar.mp4?v=5" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
