import { useRef } from "react";
import { Trophy, Award, Medal, Users, Star, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { achievements, type Achievement } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

// Icon mapping for achievement types
const achievementIcons: Record<Achievement["type"], React.ComponentType<{ className?: string }>> = {
  award: Award,
  certification: Medal,
  leadership: Users,
  competition: Trophy,
  volunteer: Heart,
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

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="achievements" className="section-padding bg-card/30">
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
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognitions, certifications, and extracurricular activities that shaped my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface AchievementCardProps {
  achievement: Achievement;
}

function AchievementCard({ achievement }: AchievementCardProps) {
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
    <motion.div
      className="group p-6 rounded-xl bg-card border border-border/50 card-hover interactive"
      variants={itemVariants}
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
    </motion.div>
  );
}
