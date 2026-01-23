import { ArrowDown, Download, FolderOpen, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-500" />
      </div>

      <div className="container-custom relative z-10 pt-20 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Avatar */}
          <div className="relative animate-fade-in">
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
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border/50 shadow-lg">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Tagline */}
            <div className="animate-fade-in opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                {personalInfo.tagline}
              </span>
            </div>

            {/* Name */}
            <h1 className="animate-fade-in opacity-0 delay-200 text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ animationFillMode: 'forwards' }}>
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Title */}
            <h2 className="animate-fade-in opacity-0 delay-300 text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-6" style={{ animationFillMode: 'forwards' }}>
              {personalInfo.title}
            </h2>

            {/* Bio */}
            <p className="animate-fade-in opacity-0 delay-400 text-base md:text-lg text-muted-foreground leading-relaxed mb-8" style={{ animationFillMode: 'forwards' }}>
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in opacity-0 delay-500 flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8" style={{ animationFillMode: 'forwards' }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <FolderOpen className="w-5 h-5" />
                View Projects
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 border-primary/50 hover:bg-primary/10 hover:text-primary transition-all"
              >
                <a href={personalInfo.resumeUrl} download>
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in opacity-0 delay-600 flex items-center justify-center lg:justify-start gap-4" style={{ animationFillMode: 'forwards' }}>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={scrollToProjects}
            className="p-2 rounded-full border border-border/50 hover:border-primary/50 transition-colors text-muted-foreground hover:text-primary"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
