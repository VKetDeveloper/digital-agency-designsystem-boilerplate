'use client';

import { useEffect } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { loadReadSpeaker } from '../lib/readSpeaker';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Noto Sans Japanese を追加
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"], // サブセットに japanese を含める
});

export const metadata: Metadata = {
  title: "デジタル庁デザインシステム Sample Boilerplate",
  description: "デジタル庁デザインシステム Sample Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  useEffect(() => {
    const readUrl = loadReadSpeaker();
    console.log('ReadSpeaker URL:', readUrl);
  }, []);

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
