import {
  ArrowDown,
  Download,
  FolderOpen,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { personalInfo, socialLinks } from '@/data/portfolio-data';
import { usePageReady } from '@/contexts/PageLoadContext';

// Animation variants for staggered text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

export function HeroSection() {
  const { isPageReady } = usePageReady();

  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-20 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Avatar */}
          <motion.div
            className="relative"
            variants={avatarVariants}
            initial="hidden"
            animate={isPageReady ? 'visible' : 'hidden'}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-300 rounded-full blur-2xl opacity-30 animate-pulse-glow" />

              {/* Avatar container */}
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate={isPageReady ? 'visible' : 'hidden'}
          >
            {/* Tagline */}
            {/*<motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 mt-6 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                {personalInfo.tagline}
              </span>
            </motion.div>*/}

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-6"
              variants={itemVariants}
            >
              {personalInfo.title}
            </motion.h2>

            {/* Bio */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8"
              variants={itemVariants}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
              variants={itemVariants}
            >
              <InteractiveHoverButton
                text="View Projects"
                icon={<FolderOpen className="w-5 h-5" />}
                onClick={scrollToProjects}
                className="text-foreground interactive"
              />

              <a href={personalInfo.resumeUrl} download>
                <InteractiveHoverButton
                  text="Download Resume"
                  icon={<Download className="w-5 h-5" />}
                  className="text-foreground interactive"
                />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary interactive"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary interactive"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary interactive"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 10 }}
          animate={isPageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="p-2 rounded-full border border-border/50 hover:border-primary/50 transition-colors text-muted-foreground hover:text-primary interactive"
            aria-label="Scroll to projects"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
