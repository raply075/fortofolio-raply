import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
              <span className="p-3 bg-[var(--color-neu-blue)] text-white neu-border">
                <HiBriefcase size={28} />
              </span>
              Experience
            </h2>

            <div className="relative border-l-4 border-[var(--color-neu-border)] pl-8 ml-4">

              {/* KKN */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-10"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[var(--color-neu-blue)] rounded-full border-4 border-[var(--color-neu-bg)] neu-border"></div>
                <div className="neu-card p-6">
                  <span className="font-mono font-bold text-sm mb-2 block text-[var(--color-neu-text-muted)]">Des 2025 - Jan 2026</span>
                  <h3 className="text-xl font-bold text-[var(--color-neu-text)] mb-2">Ketua Umum KKN</h3>
                  <p className="text-[var(--color-neu-text-muted)]">KKN Gunungkidul, Desa Sambirejo</p>
                </div>
              </motion.div>

              {/* Full Stack Projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mb-10"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[var(--color-neu-blue)] rounded-full border-4 border-[var(--color-neu-bg)] neu-border"></div>
                <div className="neu-card p-6">
                  <span className="font-mono font-bold text-sm mb-2 block text-[var(--color-neu-text-muted)]">2026</span>
                  <h3 className="text-xl font-bold text-[var(--color-neu-text)] mb-4">Full Stack Web Development Projects</h3>
                  <ul className="space-y-2 text-[var(--color-neu-text-muted)]">
                    <li className="flex items-start gap-2"><span className="text-[var(--color-neu-blue)] mt-1.5 font-bold">•</span>REST API Development menggunakan Laravel</li>
                    <li className="flex items-start gap-2"><span className="text-[var(--color-neu-blue)] mt-1.5 font-bold">•</span>Frontend Development menggunakan React</li>
                    <li className="flex items-start gap-2"><span className="text-[var(--color-neu-blue)] mt-1.5 font-bold">•</span>Integrasi REST API & Authentication System</li>
                    <li className="flex items-start gap-2"><span className="text-[var(--color-neu-blue)] mt-1.5 font-bold">•</span>QR Code Attendance System & Hotel Booking</li>
                    <li className="flex items-start gap-2"><span className="text-[var(--color-neu-blue)] mt-1.5 font-bold">•</span>IoT Dashboard Development</li>
                  </ul>
                </div>
              </motion.div>

              {/* Kunjungan Industri */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-10"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[var(--color-neu-blue)] rounded-full border-4 border-[var(--color-neu-bg)] neu-border"></div>
                <div className="neu-card p-6">
                  <span className="font-mono font-bold text-sm mb-2 block text-[var(--color-neu-text-muted)]">Maret / Agustus 2025</span>
                  <h3 className="text-xl font-bold text-[var(--color-neu-text)] mb-2">Kunjungan Industri Jogja</h3>
                  <p className="text-[var(--color-neu-text-muted)]">Universitas Duta Bangsa Surakarta</p>
                </div>
              </motion.div>

              {/* Mendaftar Polri */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative mb-10"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[var(--color-neu-blue)] rounded-full border-4 border-[var(--color-neu-bg)] neu-border"></div>
                <div className="neu-card p-6">
                  <span className="font-mono font-bold text-sm mb-2 block text-[var(--color-neu-text-muted)]">Mei - Des 2022</span>
                  <h3 className="text-xl font-bold text-[var(--color-neu-text)] mb-2">Mendaftar Polri Bintara</h3>
                  <p className="text-[var(--color-neu-text-muted)]">Pengalaman pendaftaran dan seleksi Polri Bintara.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
              <span className="p-3 bg-[var(--color-neu-pink)] text-white neu-border">
                <HiAcademicCap size={28} />
              </span>
              Education
            </h2>

            <div className="relative border-l-4 border-[var(--color-neu-border)] pl-8 ml-4">
              {/* Kuliah */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-10"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[var(--color-neu-pink)] rounded-full border-4 border-[var(--color-neu-bg)] neu-border"></div>
                <div className="neu-card p-6">
                  <span className="font-mono font-bold text-sm mb-2 block text-[var(--color-neu-text-muted)]">Sekarang</span>
                  <h3 className="text-xl font-bold text-[var(--color-neu-text)] mb-2">Universitas Duta Bangsa Surakarta</h3>
                  <p className="text-[var(--color-neu-blue)] font-bold mb-1">S1 Teknik Informatika</p>
                  <p className="text-[var(--color-neu-text-muted)]">Fakultas Ilmu Komputer</p>
                </div>
              </motion.div>

              {/* SMA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mb-10"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[var(--color-neu-pink)] rounded-full border-4 border-[var(--color-neu-bg)] neu-border"></div>
                <div className="neu-card p-6">
                  <span className="font-mono font-bold text-sm mb-2 block text-[var(--color-neu-text-muted)]">2019 - 2022</span>
                  <h3 className="text-xl font-bold text-[var(--color-neu-text)] mb-2">SMA N 3 WONOGIRI</h3>
                  <p className="text-[var(--color-neu-blue)] font-bold mb-1">Jurusan IPA</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
