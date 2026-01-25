import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { socialLinks, personalInfo } from '@/data/portfolio-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="gradient-text font-medium">
              {personalInfo.name}
            </span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
