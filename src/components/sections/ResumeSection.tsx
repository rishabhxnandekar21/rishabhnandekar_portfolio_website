import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function ResumeSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="resume" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my education, experience, and qualifications
          </p>
        </div>

        {/* Resume Card */}
        <div
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="rounded-xl bg-card border border-border/50 overflow-hidden card-hover">
            {/* PDF Preview */}
            <div className="aspect-[3/4] max-h-[600px] bg-muted/50 relative">
              {/* PDF Embed - works in most modern browsers */}
              <object
                data={personalInfo.resumeUrl}
                type="application/pdf"
                className="w-full h-full"
              >
                {/* Fallback content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Resume Preview</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Your browser doesn't support embedded PDFs. Click below to view or download the resume.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild variant="outline">
                      <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View PDF
                      </a>
                    </Button>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href={personalInfo.resumeUrl} download className="gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </object>
            </div>

            {/* Download Button Bar */}
            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{personalInfo.name}_Resume.pdf</p>
                  <p className="text-sm text-muted-foreground">Updated January 2026</p>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                <a href={personalInfo.resumeUrl} download className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
