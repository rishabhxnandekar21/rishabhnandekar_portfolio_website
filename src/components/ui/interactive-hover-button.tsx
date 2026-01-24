import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", icon, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-primary/50 bg-background py-3 px-8 text-center font-medium",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span>{text}</span>
        {icon || <ArrowRight className="w-5 h-5" />}
      </div>
      <div className="absolute inset-0 -z-0 scale-0 rounded-full bg-primary transition-all duration-300 group-hover:scale-100" />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
