import { Trophy, Award, Medal, Users, Star, Heart } from "lucide-react";
import { achievements, type Achievement } from "@/data/portfolio-data";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

// Icon mapping for achievement types
const achievementIcons: Record<Achievement["type"], React.ComponentType<{ className?: string }>> = {
  award: Award,
  certification: Medal,
  leadership: Users,
  competition: Trophy,
  volunteer: Heart,
};

export function AchievementsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="achievements" className="section-padding bg-card/30">
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
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognitions, certifications, and extracurricular activities that shaped my journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const Icon = achievementIcons[achievement.type] || Star;

  // Get accent color based on achievement type
  const getTypeColor = (type: Achievement["type"]) => {
    switch (type) {
      case "award":
        return "text-yellow-500 bg-yellow-500/10";
      case "certification":
        return "text-blue-500 bg-blue-500/10";
      case "leadership":
        return "text-purple-500 bg-purple-500/10";
      case "competition":
        return "text-primary bg-primary/10";
      case "volunteer":
        return "text-pink-500 bg-pink-500/10";
      default:
        return "text-primary bg-primary/10";
    }
  };

  const typeColor = getTypeColor(achievement.type);

  return (
    <div
      ref={ref}
      className={cn(
        "group p-6 rounded-xl bg-card border border-border/50 card-hover",
        "transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", typeColor)}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {achievement.title}
      </h3>

      {/* Organization */}
      <p className="text-sm text-muted-foreground mb-2">
        {achievement.organization}
      </p>

      {/* Date */}
      <p className="text-xs text-muted-foreground mb-4">
        {achievement.date}
      </p>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {achievement.description}
      </p>

      {/* Type badge */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <span className={cn("text-xs font-medium uppercase tracking-wide", typeColor.split(" ")[0])}>
          {achievement.type}
        </span>
      </div>
    </div>
  );
}
