import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ReadSpeakerLoader from './ReadSpeakerLoader';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ variable: "--font-noto-sans-jp", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "デジタル庁デザインシステム Sample Boilerplate",
  description: "デジタル庁デザインシステム Sample Boilerplate",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}>
        <ReadSpeakerLoader />
        {children}
      </body>
    </html>
  );
}
