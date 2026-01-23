import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ExperienceSection />
        <AchievementsSection />
        <BlogsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Index;
