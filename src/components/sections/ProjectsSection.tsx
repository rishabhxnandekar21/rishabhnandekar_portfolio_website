import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects, type Project } from "@/data/portfolio-data";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building great software
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onClick={() => setSelectedProject(project)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-card/80 border-border hover:bg-card hover:text-primary" />
            <CarouselNext className="right-0 bg-card/80 border-border hover:bg-card hover:text-primary" />
          </Carousel>
        </div>

        {/* Project Detail Dialog */}
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        "group cursor-pointer h-full",
        "transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-full rounded-xl overflow-hidden bg-card border border-border/50 card-hover">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured badge */}
          {project.featured && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          
          {/* Hover overlay with links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-3 rounded-full bg-card/90 border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-3 rounded-full bg-card/90 border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-muted hover:bg-muted"
              >
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="secondary" className="text-xs bg-muted">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Long Description */}
          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-medium mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} className="bg-primary/10 text-primary hover:bg-primary/20">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-2">
            {project.githubUrl && (
              <Button asChild variant="outline" className="flex-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
