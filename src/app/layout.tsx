import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AnalyticsProvider from './AnalyticsProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RidesIQ - Fleet Management Solutions',
  description: 'Advanced fleet telematics and management solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <AnalyticsProvider>{children}</AnalyticsProvider>

        <GoogleTagManager gtmId={gtmId} />
        <SpeedInsights />
      </body>
    </html>
  );
}