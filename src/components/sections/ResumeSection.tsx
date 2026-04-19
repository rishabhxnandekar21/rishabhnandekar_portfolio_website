import { useRef } from 'react';
import { Download, FileText } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio-data';

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="resume" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my education, experience, and
            skills.
          </p>
        </motion.div>

        {/* Resume Download Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="rounded-xl bg-card border border-border/50 p-8 card-hover">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Resume Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    {personalInfo.name}_Resume.pdf
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Updated April 2026
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 interactive"
              >
                <a href={personalInfo.resumeUrl} download className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
