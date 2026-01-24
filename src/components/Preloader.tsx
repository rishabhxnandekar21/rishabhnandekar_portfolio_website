import { cn } from "@/lib/utils";

interface PreloaderProps {
  progress: number;
  isExiting: boolean;
}

export function Preloader({ progress, isExiting }: PreloaderProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center",
        "bg-background transition-all duration-400 ease-in-out",
        isExiting && "opacity-0 scale-105"
      )}
      style={{
        transitionDuration: isExiting ? "400ms" : "0ms",
      }}
    >
      {/* Logo / Initials */}
      <div
        className={cn(
          "relative mb-8 transition-all duration-300 ease-out",
          "animate-preloader-logo"
        )}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          
          {/* Initials container */}
          <div
            className={cn(
              "relative w-20 h-20 flex items-center justify-center",
              "rounded-full border-2 border-primary/30",
              "bg-card shadow-xl shadow-primary/10"
            )}
          >
            <span className="text-3xl font-bold gradient-text select-none">
              RN
            </span>
          </div>
        </div>
      </div>

      {/* Progress line */}
      <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-cyan-300 rounded-full transition-all duration-150 ease-out"
          style={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>

      {/* Loading text */}
      <p className="mt-4 text-sm text-muted-foreground animate-pulse">
        Loading...
      </p>
    </div>
  );
}
