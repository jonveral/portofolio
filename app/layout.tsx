import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Alveraldo Bangun | Portfolio",
  description: "Portofolio Software Engineer & Mahasiswa Teknik Informatika ITB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      {/* Background diubah ke slate-50 (putih kebiruan) untuk mode terang */}
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-black text-slate-900 dark:text-zinc-100 transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}