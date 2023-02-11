import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';

import { config } from 'next-seo.config';

import '@fontsource/sen';
import '@fontsource/sora';
import 'styles/globals.css';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-16 md:mx-64 lg:mx-72 xl:mx-80">
      <DefaultSeo {...config} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}
