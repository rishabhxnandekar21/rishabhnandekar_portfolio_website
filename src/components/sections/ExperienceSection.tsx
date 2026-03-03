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
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  className="relative mb-12 pl-8 md:pl-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />

                  {/* Card Alignment */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="p-6 rounded-xl bg-card border border-border/50 card-hover">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Briefcase className="w-5 h-5" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>

                          <p className="text-sm text-muted-foreground">
                            {exp.company} · {exp.startDate} - {exp.endDate}
                          </p>

                          {exp.type === 'internship' && (
                            <Badge className="mt-2 bg-primary/10 text-primary border-none">
                              Internship
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            {/* ================= END ================= */}
          </div>
        </div>
      </div>
    </section>
  );
}
