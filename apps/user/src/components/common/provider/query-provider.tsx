"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider as DeerQueryClientProvider } from "react-query";



interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
  
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: true,
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
  );

  return (
    <DeerQueryClientProvider client={queryClient}>
      
          {children}      
    </DeerQueryClientProvider>
  );
};

export default QueryClientProvider;
