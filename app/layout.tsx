import type { Metadata } from "next"; //[cite: 1]
import { Geist, Geist_Mono } from "next/font/google"; //[cite: 1]
import "./globals.css"; //[cite: 1]

const geistSans = Geist({
  variable: "--font-geist-sans", //[cite: 1]
  subsets: ["latin"], //[cite: 1]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", //[cite: 1]
  subsets: ["latin"], //[cite: 1]
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} //[cite: 1]
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}