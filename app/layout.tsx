import type { Metadata } from 'next';
import './globals.css';
import FloatingEmojis from '@/components/FloatingEmojis';
import ScrollEffects from '@/components/ScrollEffects';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Sauceful — The secret sauce of dinner planning',
  description: 'A week of meals your family actually wants — planned around your tastes, built in 30 seconds.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300;400;500;600;700&family=Funnel+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <FloatingEmojis />
        <ScrollEffects />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
