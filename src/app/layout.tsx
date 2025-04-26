import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shuaib's Portfolio",
  description: "A passionate full-stack developer and UI designer crafting modern web experiences.",
  keywords: ["Shuaib", "Web Developer", "Next.js", "UI Designer", "Portfolio"],
  authors: [{ name: "Shuaib Shuaib" }],
  openGraph: {
    title: "Shuaib's Portfolio",
    description: "Explore projects and skills of a modern web developer.",
    siteName: "Shuaib's Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
