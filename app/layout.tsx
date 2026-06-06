import type { Metadata } from 'next';
import './globals.css';
import ScrollEffects from '@/components/ScrollEffects';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Sauceful — The secret sauce of dinner planning',
  description: 'Personalised weekly dinner plans built around your household\'s tastes. Less waste, less faff, no more 5pm fridge stares. Join the waiting list.',
  metadataBase: new URL('https://www.sauceful.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sauceful — The secret sauce of dinner planning',
    description: 'Personalised weekly dinner plans built around your household\'s tastes. Less waste, less faff, no more 5pm fridge stares.',
    url: 'https://www.sauceful.co.uk',
    siteName: 'Sauceful',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sauceful — The secret sauce of dinner planning',
    description: 'Personalised weekly dinner plans built around your household\'s tastes. Less waste, less faff, no more 5pm fridge stares.',
  },
  keywords: [
    'meal planning app',
    'dinner planner',
    'weekly meal plan',
    'family meal planner',
    'personalised recipes',
    'shopping list app',
    'sauceful',
  ],
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
        <ScrollEffects />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
