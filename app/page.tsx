// app/page.tsx
import FadeIn from "./FadeIn";

const photos = [
  {
    id: 1,
    title: "Eksplorasi Komposisi & Layouting",
    type: "Fotografi",
    imageUrl: "/galeri/foto1.webp",
  },
  {
    id: 2,
    title: "Dinamika OSKM ITB",
    type: "Dokumenter",
    imageUrl: "/galeri/foto2.webp",
  },
  {
    id: 3,
    title: "Divisi Medis Mahasiswa",
    type: "Jurnalistik",
    imageUrl: "/galeri/foto3.webp",
  },
  {
    id: 4,
    title: "Eksperimen Shutter Speed",
    type: "Teknik Kamera",
    imageUrl: "/galeri/foto4.webp",
  },
  {
    id: 5,
    title: "Depth of Field (Aperture)",
    type: "Portrait",
    imageUrl: "/galeri/foto5.webp",
  },
  {
    id: 6,
    title: "Pengaturan ISO Minim Cahaya",
    type: "Night Photography",
    imageUrl: "/galeri/foto6.webp",
  },
  {
    id: 7,
    title: "Pameran Galeria Divina",
    type: "Eksibisi",
    imageUrl: "/galeri/foto7.webp",
  },
  {
    id: 8,
    title: "Eksplorasi Lighting Studio",
    type: "Konseptual",
    imageUrl: "/galeri/foto8.webp",
    rotate: true, // Foto ini akan diputar 90 derajat
  },
  {
    id: 9,
    title: "Pameran Galeria Divina",
    type: "Eksibisi",
    imageUrl: "/galeri/foto9.webp",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center font-sans bg-zinc-50 dark:bg-black min-h-screen transition-colors duration-300">
      
      {/* Spacer untuk fixed navbar */}
      <div className="h-20 w-full"></div>

      <main className="w-full max-w-7xl px-6 lg:px-8 py-12 flex flex-col gap-16">
        
        {/* Hero Section: Typography Driven */}
        <FadeIn delay={0.1}>
          <section id="tentang" className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-12 mb-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[1.1] mb-6">
                Menangkap Momen.<br />
                <span className="text-zinc-400 dark:text-zinc-600">Merangkai Cerita Visual.</span>
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Portofolio kurasi oleh <strong className="text-zinc-900 dark:text-white font-semibold">Jonathan Alveraldo Bangun</strong>. Mahasiswa Teknik Informatika ITB yang mengeksplorasi titik temu antara presisi teknologi dan keindahan komposisi visual.
              </p>
            </div>
            <div className="flex items-center gap-4 pb-1">
               <a href="mailto:emailanda@example.com" className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-zinc-900 dark:border-white hover:border-blue-600 pb-1">
                 Hubungi Saya
               </a>
            </div>
          </section>
        </FadeIn>

        {/* Minimalist Masonry Gallery */}
        <section id="galeri" className="w-full">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <FadeIn key={photo.id} delay={0.1 + (index % 5) * 0.1} className="break-inside-avoid">
                <div className="group relative rounded-xl overflow-hidden cursor-crosshair bg-zinc-200 dark:bg-zinc-900">
                  
                  {/* Foto dengan zoom halus */}
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Cinematic Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Teks Informasi */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <p className="text-blue-400 font-medium tracking-widest text-xs uppercase mb-1">
                      {photo.type}
                    </p>
                    <h3 className="text-white font-semibold text-lg leading-snug">
                      {photo.title}
                    </h3>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </main>

      {/* Footer Minimalis */}
      <footer className="w-full max-w-7xl px-6 lg:px-8 py-12 mt-12 border-t border-zinc-200 dark:border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide text-zinc-500 uppercase">
        <p>© {new Date().getFullYear()} J.A. Bangun</p>
        <p>Bandung, Indonesia</p>
      </footer>
    </div>
  );
}