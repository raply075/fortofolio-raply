import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Transformasi UMKM di Era Ekonomi Digital',
    organization: 'Universitas Duta Bangsa Surakarta (SENATIB)',
    year: '2025',
    file: '/images/cert4.pdf',
    isPdf: true,
  },
  {
    title: 'Achievement Motivation Training',
    organization: 'Forum OSIS SMA/SMK/MA Kabupaten Wonogiri',
    year: '2021',
    file: '/images/cert2.pdf',
    isPdf: true,
  },
  {
    title: 'International Entrepreneurship Seminar',
    organization: 'Duta Bangsa University',
    year: '2026',
    file: '/images/cert3.pdf',
    isPdf: true,
  },
  {
    title: 'Kunjungan Industri',
    organization: 'Fakultas Ilmu Komputer, Universitas Duta Bangsa',
    year: '2025',
    file: '/images/cert1.png',
    isPdf: false,
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-sm font-bold text-[var(--color-neu-text-muted)] tracking-widest">04. CERTIFICATES</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            Sertifikat & Penghargaan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neu-card p-4 group overflow-hidden"
            >
              <div className="relative h-64 md:h-80 w-full overflow-hidden neu-border mb-4 bg-[var(--color-neu-bg)]">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-[var(--color-neu-text)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center cursor-pointer"
                >
                  <span className="text-[var(--color-neu-text)] font-bold bg-[var(--color-neu-yellow)] px-4 py-2 neu-border-thick">View Certificate</span>
                </a>

                {cert.isPdf ? (
                  <div className="w-full h-full relative overflow-hidden pointer-events-none flex flex-col items-center justify-center">
                    <object
                      data={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      type="application/pdf"
                      className="w-[120%] h-[120%] -mt-[10%] -ml-[10%] object-cover scale-[1.2] opacity-90 group-hover:scale-[1.25] transition-transform duration-500"
                    >
                      <div className="flex flex-col items-center justify-center text-[var(--color-neu-text-muted)] gap-3">
                         <span className="text-4xl">📄</span>
                         <p>PDF Document</p>
                      </div>
                    </object>
                    <div className="absolute inset-0 z-10"></div>
                  </div>
                ) : (
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-[var(--color-neu-text)] mb-1">
                  {cert.title}
                </h3>
                <p className="text-[var(--color-neu-text-muted)] text-sm">{cert.organization} • <span className="font-bold text-[var(--color-neu-text)]">{cert.year}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
