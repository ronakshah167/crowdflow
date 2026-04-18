import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import AIChatbot from "@/components/AIChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crowdflow | Experience the Game, Not the Chaos",
  description: "Advanced spatial intelligence for seamless venue navigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden">
        {/* Cinematic VFX Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="scanline"></div>
        </div>

        <main className="relative z-10 min-h-screen">
          {children}
        </main>

        <CookieBanner />
        <AIChatbot />
      </body>
    </html>
  );
}
