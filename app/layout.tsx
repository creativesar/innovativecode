import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AiAssistant from "@/components/ai-assistant";
import { GoogleAnalytics } from "@/components/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "InnovativeCode | Premium Web Development & Digital Marketing",
    template: "%s | InnovativeCode",
  },
  description: "InnovativeCode is a forward-thinking digital agency crafting exceptional web experiences, mobile apps, and strategic marketing campaigns.",
  keywords: ["Web Development", "Digital Marketing", "SEO", "App Development", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        {process.env.GA_TRACKING_ID && <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_TRACKING_ID} />}
        <main className="flex-1">
          {children}
        </main>
        <AiAssistant />
      </body>
    </html>
  );
}