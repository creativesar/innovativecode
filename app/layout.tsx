import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {process.env.GA_TRACKING_ID && <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_TRACKING_ID} />}
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <AiAssistant />
      </body>
    </html>
  );
}
