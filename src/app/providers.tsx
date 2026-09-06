'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import ScrollToTop from './ScrollToTop';
import { ScrollProvider } from './components/scroll-provider/prodiver';
import { ContactWidgetProvider } from './(external)/components/contact-widget/context';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <ContactWidgetProvider>
      <ScrollProvider>
      <QueryClientProvider client={queryClient}>
          {children}
          <ScrollToTop />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      </ScrollProvider>
    </ContactWidgetProvider>
  );
}