import { createContext, useContext, ReactNode } from "react";

interface PageLoadContextValue {
  isPageReady: boolean;
}

const PageLoadContext = createContext<PageLoadContextValue>({
  isPageReady: false,
});

export function PageLoadProvider({
  children,
  isReady,
}: {
  children: ReactNode;
  isReady: boolean;
}) {
  return (
    <PageLoadContext.Provider value={{ isPageReady: isReady }}>
      {children}
    </PageLoadContext.Provider>
  );
}

export function usePageReady() {
  return useContext(PageLoadContext);
}
