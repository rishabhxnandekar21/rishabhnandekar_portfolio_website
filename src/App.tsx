import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { usePageLoad } from './hooks/use-page-load';
import { PageLoadProvider } from './contexts/PageLoadContext';

const queryClient = new QueryClient();

function AppContent() {
  const { isLoading, progress, shouldShowPreloader, isExiting } = usePageLoad();

  return (
    <PageLoadProvider isReady={!isLoading}>
      {/* Custom cursor - desktop only */}
      <CustomCursor />
      
      {shouldShowPreloader && (
        <Preloader progress={progress} isExiting={isExiting} />
      )}
      <div
        className={
          isLoading
            ? 'opacity-0'
            : 'opacity-100 transition-opacity duration-300'
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PageLoadProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
