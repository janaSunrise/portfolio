import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';

import { config } from 'next-seo.config';

import '@fontsource/sora';
import '@fontsource/dm-sans';
import 'styles/globals.css';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

// 3:12:14:16
// 12:48:56:64
// 8:32:48:64
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-8 md:mx-32 lg:mx-40 xl:mx-48">
      <DefaultSeo {...config} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}
