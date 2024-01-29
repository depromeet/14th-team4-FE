/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Script from 'next/script';
import { Suspense } from 'react';

import QueryClientProviders from '@components/common/QueryClientProvider';
import WebViewContainer from '@components/common/WebViewContainer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const nanumSquareRound = localFont({
  src: [
    {
      path: './fonts/NanumSquareRoundL.woff2',
      weight: '300',
    },
    {
      path: './fonts/NanumSquareRoundR.woff2',
      weight: '400',
    },
    {
      path: './fonts/NanumSquareRoundB.woff2',
      weight: '500',
    },
    {
      path: './fonts/NanumSquareRoundEB.woff2',
      weight: '700',
    },
  ],
  variable: '--font-nanum-square-round',
});

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProviders>
      <WebViewContainer />
      <html lang="en" className={`${nanumSquareRound.variable}`}>
        <body className="relative overscroll-y-none min-h-[100dvh] w-full max-w-[480px] mx-auto scrollbar-hide">
          <Suspense>{children}</Suspense>
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
        </body>
      </html>
    </QueryClientProviders>
  );
}
