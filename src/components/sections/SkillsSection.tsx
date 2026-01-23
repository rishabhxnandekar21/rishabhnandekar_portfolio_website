import { Monitor, Server, Database, Wrench, Sparkles, Cpu } from 'lucide-react';
import { skills } from '@/data/portfolio-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

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

export function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to build modern,
            scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.icon];

            return (
              <SkillCard
                key={category.category}
                category={category}
                Icon={Icon}
                delay={categoryIndex * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  category: (typeof skills)[0];
  Icon?: React.ComponentType<{ className?: string }>;
  delay: number;
}

function SkillCard({ category, Icon, delay }: SkillCardProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'group p-6 rounded-xl bg-card border border-border/50 card-hover',
        'transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${delay}ms` }}
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
            className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30 transition-all cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
