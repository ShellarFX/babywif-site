import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import { Link } from '@nextui-org/link';
import Image from 'next/image';
import { Divider, NavbarMenuItem } from '@nextui-org/react';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'white' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://terminal.jup.ag/main-v2.js" />
        <title>BabyWif</title>
      </head>
      <body
          className={clsx(
              'min-h-screen bg-background font-sans subpixel-antialiased',
              fontSans.variable,
          )}
      >
      <Providers>
        <div className="relative flex flex-col">
          <Navbar />

          <main className="flex-grow w-full h-full">
            {children}
          </main>

          <footer className="w-full flex justify-center py-8 min-h-64 px-8">
            <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-12 md:gap-24">
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <Image width={0} height={0} sizes="100vw" src="/logo.png" alt="logo" className="w-[180px] md:w-[320px] h-auto" />
                <Divider />
                <div className="text-xl">© 2024 BABYWIF • All Rights Reserved</div>
              </div>

              <div className="text-xl md:text-3xl text-center">
                Bringing joy and positivity to the world of cryptocurrencies, one meme at a time
              </div>

              <div className="flex flex-col gap-2">
                {siteConfig.socials.map((social, index) => (
                    <div key={index}>
                      <Link
                          className="justify-between mb-2 text-foreground w-full text-xl w-64"
                          href={social.href}
                          isExternal
                          showAnchorIcon
                      >
                        {social.label}
                      </Link>

                      {index < siteConfig.socials.length - 1 &&
                          <Divider className="opacity-50" />}
                    </div>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </Providers>
      </body>

      <Analytics />
      </html>
  );
}
