import { useState, useEffect, useCallback } from "react";

interface PageLoadState {
  isLoading: boolean;
  progress: number;
  loadTime: number;
  shouldShowPreloader: boolean;
  isExiting: boolean;
}

const FAST_THRESHOLD = 300; // Skip preloader entirely
const MIN_DISPLAY_TIME = 200; // Minimum time to show preloader to avoid flash

export function usePageLoad(): PageLoadState & { completeLoading: () => void } {
  const [state, setState] = useState<PageLoadState>({
    isLoading: true,
    progress: 0,
    loadTime: 0,
    shouldShowPreloader: true,
    isExiting: false,
  });

  const startTime = typeof window !== "undefined" ? performance.now() : 0;

  const completeLoading = useCallback(() => {
    const currentLoadTime = performance.now() - startTime;
    
    // If we loaded fast enough, skip the exit animation
    if (currentLoadTime < FAST_THRESHOLD) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        progress: 100,
        loadTime: currentLoadTime,
        shouldShowPreloader: false,
        isExiting: false,
      }));
      return;
    }

    // Start exit animation
    setState((prev) => ({
      ...prev,
      progress: 100,
      isExiting: true,
      loadTime: currentLoadTime,
    }));

    // Complete after exit animation
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        shouldShowPreloader: false,
      }));
    }, 400); // Exit animation duration
  }, [startTime]);

  useEffect(() => {
    // Track document ready state
    const checkReadyState = () => {
      const elapsed = performance.now() - startTime;
      
      // Fast connection - skip preloader
      if (elapsed < FAST_THRESHOLD && document.readyState === "complete") {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          progress: 100,
          loadTime: elapsed,
          shouldShowPreloader: false,
        }));
        return true;
      }
      return false;
    };

    // If already loaded quickly, skip
    if (checkReadyState()) return;

    // Progress simulation based on document state
    const updateProgress = () => {
      const elapsed = performance.now() - startTime;
      
      setState((prev) => {
        let newProgress = prev.progress;
        
        if (document.readyState === "loading") {
          newProgress = Math.min(30, elapsed / 10);
        } else if (document.readyState === "interactive") {
          newProgress = Math.min(70, 30 + elapsed / 15);
        } else if (document.readyState === "complete") {
          newProgress = Math.min(95, 70 + elapsed / 20);
        }
        
        return { ...prev, progress: newProgress };
      });
    };

    // Update progress frequently
    const progressInterval = setInterval(updateProgress, 50);

    // Listen for document ready
    const handleReadyStateChange = () => {
      if (document.readyState === "complete") {
        const elapsed = performance.now() - startTime;
        
        // Ensure minimum display time to avoid flash
        const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsed);
        
        setTimeout(() => {
          completeLoading();
        }, remainingTime);
      }
    };

    document.addEventListener("readystatechange", handleReadyStateChange);
    
    // Also check on load event
    window.addEventListener("load", () => {
      const elapsed = performance.now() - startTime;
      const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsed);
      
      setTimeout(() => {
        completeLoading();
      }, remainingTime);
    });

    // Initial check
    if (document.readyState === "complete") {
      handleReadyStateChange();
    }

    return () => {
      clearInterval(progressInterval);
      document.removeEventListener("readystatechange", handleReadyStateChange);
    };
  }, [completeLoading, startTime]);

  return { ...state, completeLoading };
}
