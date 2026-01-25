import { Monitor, Server, Database, Wrench, Sparkles, Cpu } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/portfolio-data';

// Icon mapping for skill categories
const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Monitor: Monitor,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
  Sparkles: Sparkles,
  Cpu: Cpu,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to build modern,
            scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skills.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group p-6 rounded-xl bg-card border border-border/50 card-hover"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  {Icon && (
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30 transition-all cursor-default interactive"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
