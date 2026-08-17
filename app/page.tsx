import Link from "next/link";
import FadeIn from "./FadeIn"; // Import komponen animasi kita

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans overflow-hidden">
      <main className="flex flex-1 w-full max-w-4xl flex-col py-12 px-8 sm:px-16 gap-20">
        
        {/* HERO SECTION */}
        <FadeIn delay={0.1}>
          {/* Hapus class animate-in bawaan tailwind karena sekarang diatur Framer Motion */}
          <header className="flex flex-col gap-6 mt-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-500 dark:from-white dark:to-zinc-500">
                  Jonathan Alveraldo Bangun
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-blue-700 dark:text-zinc-400">
                Mahasiswa Teknik Informatika @ Institut Teknologi Bandung (ITB)
              </h2>
            </div>
            
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
              Saya memiliki ketertarikan yang kuat dalam rekayasa perangkat lunak, pengembangan algoritma, serta desain infrastruktur jaringan. Aktif berpartisipasi dalam OSKM ITB dan divisi medis mahasiswa, memadukan kemampuan teknis dengan dinamika operasional tim.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a href="mailto:emailanda@example.com" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-white text-white dark:text-black font-medium hover:scale-105 transition-all shadow-md shadow-blue-600/20 dark:shadow-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Hubungi Saya
              </a>
              <a href="#" className="flex items-center justify-center p-2.5 rounded-full bg-white dark:bg-zinc-900 text-blue-700 dark:text-zinc-400 border border-blue-100 dark:border-zinc-800 hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="#" className="flex items-center justify-center p-2.5 rounded-full bg-white dark:bg-zinc-900 text-blue-700 dark:text-zinc-400 border border-blue-100 dark:border-zinc-800 hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </header>
        </FadeIn>

        {/* SKILLS SECTION */}
        <section id="keahlian" className="flex flex-col gap-6 scroll-mt-24">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-blue-950 dark:text-white">Keahlian Teknis</h3>
              <div className="h-px flex-1 bg-blue-100 dark:bg-zinc-800"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FadeIn delay={0.2} className="h-full">
              <div className="flex flex-col h-full gap-3 p-6 rounded-2xl bg-white dark:bg-transparent border border-blue-100 dark:border-transparent shadow-sm dark:shadow-none">
                <h4 className="font-semibold text-blue-900 dark:text-zinc-200 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  Pemrograman & Basis Data
                </h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["C++", "Python", "SQL", "Algorithms", "Compiler Design"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-lg bg-blue-50 dark:bg-zinc-900 text-blue-700 dark:text-zinc-300 border border-blue-100 dark:border-zinc-800">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-2">
                  Berpengalaman dalam operasi multi-table SQL joins, conditional aggregation views, dan pengembangan komponen compiler.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="flex flex-col h-full gap-3 p-6 rounded-2xl bg-white dark:bg-transparent border border-blue-100 dark:border-transparent shadow-sm dark:shadow-none">
                <h4 className="font-semibold text-blue-900 dark:text-zinc-200 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                  Infrastruktur Jaringan & Tools
                </h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["OSPF", "BGP", "NAT", "Git", "Maven", "PowerShell"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-lg bg-blue-50 dark:bg-zinc-900 text-blue-700 dark:text-zinc-300 border border-blue-100 dark:border-zinc-800">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-2">
                  Desain jaringan OSPF multi-area, BGP peering, Layer 3 switching, dan troubleshooting Git & environment.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="proyek" className="flex flex-col gap-6 scroll-mt-24">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-blue-950 dark:text-white">Proyek Pilihan</h3>
              <div className="h-px flex-1 bg-blue-100 dark:bg-zinc-800"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <FadeIn delay={0.2} className="h-full">
              <div className="h-full group relative flex flex-col justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-blue-100 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold text-blue-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Algoritma & Solusi Komputasi</h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                    Merancang logika greedy bot (Battlecode 2025) & LinkedIn Queens solver menggunakan algoritma brute force murni (exhaustive search). Mengevaluasi pohon Huffman untuk keakuratan bit sequence.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-medium px-2 py-1 bg-slate-50 dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-md text-blue-700 dark:text-zinc-400">Python</span>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-50 dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-md text-blue-700 dark:text-zinc-400">C++</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="h-full group relative flex flex-col justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-blue-100 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold text-blue-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Arion Compiler</h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                    Membangun fundamental kompilator dengan merancang state transition tables dan mengimplementasikan dynamic lexical analyzer yang berjalan secara efisien.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-medium px-2 py-1 bg-slate-50 dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-md text-blue-700 dark:text-zinc-400">C++</span>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-50 dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-md text-blue-700 dark:text-zinc-400">Compiler Design</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="h-full">
              <div className="h-full group relative flex flex-col justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-blue-100 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold text-blue-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Simulasi Jaringan Enterprise</h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                    Deployment infrastruktur jaringan kompleks mencakup multi-area OSPF dan BGP. Fokus pada troubleshooting batas advertisement BGP melintasi router simulasi.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-medium px-2 py-1 bg-slate-50 dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-md text-blue-700 dark:text-zinc-400">Networking</span>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-50 dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-md text-blue-700 dark:text-zinc-400">Cisco/OSPF</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} className="h-full">
              <div className="h-full group relative flex flex-col justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-blue-100 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold text-blue-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Antarmuka Web Interaktif</h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                    Membuat kuis psikografis interaktif dengan tata letak responsif, serta mengembangkan portofolio pameran bertema vintage termasuk manajemen repositori lokal.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-medium px-2 py-1 bg-slate-50 dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-md text-blue-700 dark:text-zinc-400">React/Next.js</span>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-50 dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-md text-blue-700 dark:text-zinc-400">Git</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* PUBLICATION / WRITING SECTION */}
        <section id="publikasi" className="flex flex-col gap-6 w-full scroll-mt-24">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-blue-950 dark:text-white">Publikasi</h3>
              <div className="h-px flex-1 bg-blue-100 dark:bg-zinc-800"></div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-blue-100 dark:border-zinc-800 shadow-sm gap-4">
              <div>
                <h4 className="text-lg font-bold text-blue-950 dark:text-white">Tulisan & Esai Pemikiran</h4>
                <p className="text-slate-600 dark:text-zinc-400 mt-1">
                  Saya aktif mengkatalogkan dan mempublikasikan esai pemikiran saya seputar teknologi dan kehidupan kampus.
                </p>
              </div>
              <a href="#" className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-white text-white dark:text-black font-medium hover:bg-blue-700 dark:hover:bg-zinc-200 transition-colors">
                Baca di Medium
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </FadeIn>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-4xl px-8 sm:px-16 py-8 mt-8 border-t border-blue-100 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} Jonathan Alveraldo Bangun. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </footer>
    </div>
  );
}