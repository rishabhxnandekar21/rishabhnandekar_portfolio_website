import { useRef } from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { experiences, type Experience } from '@/data/portfolio-data';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="section-padding">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the experiences I am building
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* ================= INTERNSHIP SEEKING CARD ================= */}
            <motion.div
              className="relative mb-12 pl-8 md:pl-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />

              {/* Card */}
              <div className="md:w-[calc(50%-2rem)] md:ml-auto md:pl-8">
                <div className="p-6 rounded-xl bg-card border border-border/50 card-hover interactive">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Seeking Internship Opportunities
                      </h3>

                      {/* Animated Badge */}
                      <span className="inline-flex items-center gap-2 mt-1 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Open to Internship
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-sm text-muted-foreground">
                    Actively seeking Software Development / Full Stack
                    internship roles. Currently building real-world projects,
                    strengthening backend systems, and preparing for
                    production-level software engineering work.
                  </p>
                </div>
              </div>
            </motion.div>
            {/* ================= END ================= */}
          </div>
        </div>
      </div>
    </section>
  );
}
