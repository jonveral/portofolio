import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-black/70 border-b border-blue-100 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-8 sm:px-16 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl tracking-tight text-blue-950 dark:text-white">
          JAB.
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="#keahlian" 
            className="text-sm font-medium text-slate-600 hover:text-blue-700 dark:text-zinc-400 dark:hover:text-white transition-colors hidden sm:block"
          >
            Keahlian
          </Link>
          <Link 
            href="#proyek" 
            className="text-sm font-medium text-slate-600 hover:text-blue-700 dark:text-zinc-400 dark:hover:text-white transition-colors hidden sm:block"
          >
            Proyek
          </Link>
          {/* Tambahan Tautan Galeri */}
          <Link 
            href="#galeri" 
            className="text-sm font-medium text-slate-600 hover:text-blue-700 dark:text-zinc-400 dark:hover:text-white transition-colors hidden sm:block"
          >
            Galeri
          </Link>
          <Link 
            href="#publikasi" 
            className="text-sm font-medium text-slate-600 hover:text-blue-700 dark:text-zinc-400 dark:hover:text-white transition-colors hidden sm:block"
          >
            Publikasi
          </Link>
          
          <div className="hidden sm:block w-px h-5 bg-blue-200 dark:bg-zinc-700"></div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}