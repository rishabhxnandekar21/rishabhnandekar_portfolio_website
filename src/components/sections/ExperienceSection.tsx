import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences, type Experience } from "@/data/portfolio-data";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the valuable experiences I've gained along the way
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Experience entries */}
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLeft: boolean;
}

function ExperienceCard({ experience, index, isLeft }: ExperienceCardProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "relative mb-12 last:mb-0 pl-8 md:pl-0",
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full",
          "bg-primary border-4 border-background shadow-lg shadow-primary/20"
        )}
      />

      {/* Card */}
      <div
        className={cn(
          "md:w-[calc(50%-2rem)]",
          isLeft ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8 md:text-right"
        )}
      >
        <div className="p-6 rounded-xl bg-card border border-border/50 card-hover">
          {/* Header */}
          <div className={cn("flex items-start gap-4 mb-4", !isLeft && "md:flex-row-reverse")}>
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className={cn("flex-1", !isLeft && "md:text-right")}>
              <h3 className="text-lg font-semibold">{experience.role}</h3>
              <div className="flex items-center gap-2 text-muted-foreground flex-wrap">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {experience.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span>{experience.company}</span>
                )}
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className={cn("flex items-center gap-2 mb-4 text-sm text-muted-foreground", !isLeft && "md:justify-end")}>
            <Calendar className="w-4 h-4" />
            <span>{experience.startDate} - {experience.endDate}</span>
            <Badge variant="secondary" className="ml-2">
              {experience.type === "internship" ? "Internship" : "Full-time"}
            </Badge>
          </div>

          {/* Responsibilities */}
          <div className={cn("mb-4", !isLeft && "md:text-left")}>
            <h4 className="text-sm font-medium mb-2">Responsibilities</h4>
            <ul className="space-y-1.5">
              {experience.responsibilities.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          {experience.achievements.length > 0 && (
            <div className={cn(!isLeft && "md:text-left")}>
              <h4 className="text-sm font-medium mb-2 text-primary">Key Achievements</h4>
              <ul className="space-y-1.5">
                {experience.achievements.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
