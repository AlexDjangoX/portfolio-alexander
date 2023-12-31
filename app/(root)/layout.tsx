import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '../globals.css';
import { Providers } from './providers';
import NavigationBar from '@/components/shared-components/navigation/NavigationBar';
import Footer from '@/components/shared-components/footer/Footer';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-alexander.vercel.app/'),
  title: 'ReactJS, NextJs Developer',
  description: 'Portfolio - Alexander McLachlan',
  openGraph: {
    title: 'Alexander McLachlan',
    description: 'ReactJS, NextJS Developer',
    url: 'https://portfolio-alexander.vercel.app/',
    siteName: 'Full Stack NextJS Dev',
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
        alt: 'Logo representing Alexander McLachlan, a Full Stack NextJS Developer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white-800 dark:bg-black-200">
      <body className={poppins.className}>
        <Providers>
          <NavigationBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
