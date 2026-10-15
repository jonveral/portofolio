// app/Navbar.tsx
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase flex items-center gap-1">
          JAB<span className="text-blue-600">.</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 font-medium text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="#galeri" className="hover:text-black dark:hover:text-white transition-colors">Galeri Visual</Link>
            <Link href="#tentang" className="hover:text-black dark:hover:text-white transition-colors">Tentang</Link>
          </div>
          <div className="flex items-center gap-4 border-l border-zinc-200 dark:border-zinc-800 pl-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}