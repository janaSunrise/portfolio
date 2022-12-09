import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@fontsource/sen';
import '@fontsource/montserrat';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
