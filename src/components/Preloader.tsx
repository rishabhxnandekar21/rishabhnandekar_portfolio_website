import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PreloaderProps {
  progress: number;
  isExiting: boolean;
}

export function Preloader({ isExiting }: PreloaderProps) {
  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center",
        "bg-background"
      )}
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Logo / Initials with rotating loader */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Soft glow effect */}
        <div className="absolute inset-0 bg-primary/15 rounded-full blur-3xl scale-150" />
        
        {/* Rotating circular loader */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/50"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Inner rotating ring (slower, opposite direction) */}
          <motion.div
            className="absolute inset-2 rounded-full border border-transparent border-b-primary/40 border-l-primary/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Center initials */}
          <motion.span
            className="text-2xl font-bold gradient-text select-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            RN
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}
