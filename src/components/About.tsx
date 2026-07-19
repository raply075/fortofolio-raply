import { motion } from "framer-motion";
import { HiDownload, HiAcademicCap, HiLocationMarker, HiDesktopComputer, HiLightningBolt } from "react-icons/hi";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-sm font-bold text-[var(--color-neu-text-muted)] tracking-widest">01. ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            Siapa Saya?
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="neu-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Photo */}
            <div className="w-56 h-72 md:w-72 md:h-96 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-[var(--color-neu-yellow)] neu-border-thick translate-x-3 translate-y-3"></div>
              <div className="w-full h-full neu-border-thick overflow-hidden relative">
                <img
                  src="/images/profile.jpeg"
                  alt="Raply Fediansyah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="flex-1">
              <div className="space-y-4 text-lg text-[var(--color-neu-text-muted)] leading-relaxed">
                <p>
                  Saya adalah seorang{" "}
                  <strong className="text-[var(--color-neu-text)] font-bold">
                    Full Stack Web Developer
                  </strong>{" "}
                  yang berdedikasi tinggi dengan latar belakang pendidikan
                  Teknik Informatika dari Universitas Duta Bangsa Surakarta.
                  Memiliki keahlian mendalam dalam membangun aplikasi web modern
                  yang <em>scalable</em>, aman, dan responsif menggunakan
                  ekosistem{" "}
                  <strong className="text-[var(--color-neu-blue)] font-bold">React</strong>
                  ,{" "}
                  <strong className="text-[var(--color-neu-text)] font-bold">
                    Laravel
                  </strong>
                  , dan arsitektur{" "}
                  <strong className="text-[var(--color-neu-text)] font-bold">REST API</strong>
                  .
                </p>
                <p>
                  Selama perjalanan karir dan pendidikan saya, saya telah
                  berhasil mengembangkan berbagai proyek nyata, mulai dari
                  Sistem Reservasi Hotel, Landing Page e-commerce, hingga Sistem
                  Absensi berbasis QR Code. Pengalaman mendeploy aplikasi
                  menggunakan platform modern seperti{" "}
                  <strong className="text-[var(--color-neu-text)] font-bold">Vercel</strong>{" "}
                  dan{" "}
                  <strong className="text-[var(--color-neu-text)] font-bold">Railway</strong>{" "}
                  membuat saya terbiasa dengan siklus <em>deployment</em> yang
                  efisien.
                </p>
                <p>
                  Selain keahlian di bidang perangkat lunak, saya juga memiliki
                  ketertarikan kuat dalam mengintegrasikan <em>software</em>{" "}
                  dengan <em>hardware</em> melalui teknologi{" "}
                  <strong className="text-[var(--color-neu-text)] font-bold">
                    Internet of Things (IoT)
                  </strong>
                  .
                </p>
                <p className="border-l-4 border-[var(--color-neu-blue)] pl-4 italic mt-6 text-[var(--color-neu-text)] font-medium bg-[var(--color-neu-yellow)]/20 p-4 rounded-r-xl neu-border">
                  "Saya adalah pembelajar yang cepat, adaptif terhadap teknologi
                  baru, dan memiliki kemampuan pemecahan masalah yang analitis.
                  Saya siap membawa kolaborasi yang solid, dedikasi penuh, dan
                  solusi digital inovatif bagi perusahaan Anda."
                </p>
              </div>

              {/* Quick facts + CV download */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 bg-[var(--color-neu-bg)] p-4 neu-border">
                  <HiAcademicCap className="text-2xl text-[var(--color-neu-blue)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--color-neu-text-muted)] font-bold uppercase">Universitas</p>
                    <p className="text-sm font-bold text-[var(--color-neu-text)]">Duta Bangsa Surakarta</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[var(--color-neu-bg)] p-4 neu-border">
                  <HiLocationMarker className="text-2xl text-[var(--color-neu-pink)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--color-neu-text-muted)] font-bold uppercase">Lokasi</p>
                    <p className="text-sm font-bold text-[var(--color-neu-text)]">Wonogiri, Jawa Tengah</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[var(--color-neu-bg)] p-4 neu-border">
                  <HiDesktopComputer className="text-2xl text-[var(--color-neu-green)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--color-neu-text-muted)] font-bold uppercase">Focus</p>
                    <p className="text-sm font-bold text-[var(--color-neu-text)]">Web + IoT Development</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[var(--color-neu-bg)] p-4 neu-border">
                  <HiLightningBolt className="text-2xl text-[var(--color-neu-yellow)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--color-neu-text-muted)] font-bold uppercase">Currently</p>
                    <p className="text-sm font-bold text-[var(--color-neu-text)]">Building cool stuff</p>
                  </div>
                </div>
              </div>

              <a
                href="/cv.pdf"
                download
                className="mt-6 w-full flex items-center justify-center gap-2 py-4 bg-[var(--color-neu-yellow)] text-[var(--color-neu-text)] font-black text-lg neu-button"
              >
                <HiDownload size={22} /> Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
