import Image from "next/image"; //[cite: 1]

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col py-24 px-8 sm:px-16 gap-16">
        
        {/* Header Section */}
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
            Jonathan Alveraldo Bangun
          </h1>
          <h2 className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
            Mahasiswa Teknik Informatika @ Institut Teknologi Bandung (ITB)
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mt-2">
            Saya memiliki ketertarikan yang kuat dalam rekayasa perangkat lunak, pengembangan algoritma, serta desain infrastruktur jaringan. Aktif berpartisipasi dalam OSKM ITB dan divisi medis mahasiswa, memadukan kemampuan teknis dengan dinamika operasional tim.
          </p>
        </header>

        {/* Technical Skills Section */}
        <section className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-black dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Keahlian Teknis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-zinc-700 dark:text-zinc-300">
            <div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Bahasa Pemrograman & Basis Data</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>C++, Python, SQL</li>
                <li>Operasi multi-table SQL joins & conditional aggregation views</li>
                <li>Pengembangan komponen compiler & state transition tables</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Infrastruktur Jaringan & Tools</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Jaringan OSPF multi-area & External BGP multi-AS peering</li>
                <li>Layer 3 multilayer switching, Static/Dynamic NAT</li>
                <li>Git (Troubleshooting & manajemen repository lokal)</li>
                <li>Maven & PowerShell (Diagnosis bug & task packaging)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-black dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Proyek Pilihan
          </h3>
          <div className="flex flex-col gap-8">
            
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-black dark:text-white">Pengembangan Algoritma & Solusi Komputasi</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Merancang logika *greedy bot* untuk Battlecode 2025 dan mengimplementasikan *LinkedIn Queens solver* menggunakan algoritma *brute force* murni (*exhaustive search*). Turut melakukan optimasi struktur data dengan mengevaluasi pohon Huffman untuk memastikan *bit sequence* yang dihasilkan sesuai dengan spesifikasi aturan *target string*.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-black dark:text-white">Arion Compiler</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Membangun fundamental kompilator dengan merancang *state transition tables* dan mengimplementasikan *dynamic lexical analyzer* yang berjalan secara efisien.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-black dark:text-white">Simulasi Jaringan Enterprise</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Melakukan *deployment* infrastruktur jaringan kompleks yang mencakup *multi-area* OSPF dan BGP. Fokus pada *troubleshooting* batas *advertisement* BGP dan *OSPF adjacencies* melintasi antarmuka *router* yang disimulasikan.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-black dark:text-white">Pengembangan Web & Antarmuka Interaktif</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Membuat komponen kuis psikografis interaktif berbagai fase dengan status tata letak responsif. Juga mengembangkan website portofolio pameran bertema *vintage*, termasuk manajemen aset dan pemecahan *manifest error* saat *checkout* ke *development branch* lokal yang sudah ada sebelumnya.
              </p>
            </div>

          </div>
        </section>

        {/* Links & Contact Section */}
        <section className="flex flex-col gap-6 w-full">
          <h3 className="text-2xl font-semibold text-black dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Publikasi
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Saya aktif mengkatalogkan dan mempublikasikan esai pemikiran saya. Anda dapat membaca tulisan-tulisan saya di profil Medium saya.
          </p>
        </section>

      </main>
    </div>
  );
}