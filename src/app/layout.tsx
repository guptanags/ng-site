import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagendra Gupta",
  description: "Strategic Technologist | Gen AI, Agentic AI & Quantum AI Leader | Architecting FinTech Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-200`}>
        <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
          <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
            <Link href="/" className="font-semibold">Nagendra Gupta</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/insights" className="hover:underline">Insights</Link>
              <Link href="/speaking" className="hover:underline">Speaking</Link>
              <Link href="/expertise" className="hover:underline">Expertise</Link>
              <Link href="/bio" className="hover:underline">Bio</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-slate-800 mt-12 bg-slate-900/40">
          <div className="max-w-5xl mx-auto py-6 px-4 text-sm text-slate-400">© {new Date().getFullYear()} Nagendra Gupta</div>
        </footer>
      </body>
    </html>
  );
}
