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

  const skills = ["JAVA", "GRAILS", "JENKINS", "PYTHON", "AWS"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20 snap-center bg-black">
      
      {/* Full Background Video */}
      <video 
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
        onTimeUpdate={(e) => {
          const video = e.target;
          // Pause 2.5 seconds before the end to avoid the baked-in zoom effect
          if (video.duration && (video.duration - video.currentTime) < 2.5) {
            video.pause();
          }
        }}
      >
        <source src="/avatar.mp4?v=5" type="video/mp4" />
      </video>

      {/* Particle overlay on top of video, behind text, faded out on the right so it doesn't cover the face */}
      <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_right,white_40%,transparent_80%)] md:[mask-image:linear-gradient(to_right,white_30%,transparent_60%)]">
        <ParticleBackground />
      </div>
      
      {/* Dark gradient overlay to ensure text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>



      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10 flex justify-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-6 max-w-xl xl:max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border glow-border glass-panel">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse shadow-[0_0_8px_var(--color-brand)]"></span>
            <span className="text-sm font-medium tracking-wider text-[var(--color-brand)] uppercase">OPEN TO WORK</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-black tracking-tighter text-white leading-[1.1] uppercase drop-shadow-lg">
            THATIKONDA<br />KALYANKUMAR
          </motion.h1>

          <motion.div variants={itemVariants} className="h-6">
            <Typewriter text="Software Engineer • Full Stack Developer" delay={1} />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-5 py-2 rounded-full text-xs font-bold tracking-widest bg-black/40 border border-white/20 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors duration-300 backdrop-blur-md cursor-default text-gray-300 uppercase">
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.button 
            variants={itemVariants}
            onClick={(e) => {
              e.stopPropagation();
              window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 4 }));
            }}
            className="mt-6 inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-black/50 border border-[var(--color-brand)]/50 text-white font-medium glow-btn overflow-hidden relative group backdrop-blur-md"
          >
            <span className="relative z-10 flex items-center tracking-widest text-sm uppercase">
              VIEW ACADEMIC PROJECT <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
