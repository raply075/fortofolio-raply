import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const accentCycle = [
  'var(--color-neu-yellow)',
  'var(--color-neu-blue)',
  'var(--color-neu-pink)',
];

const projects = [
  {
    title: "StayEase Hotel Booking",
    description:
      "Aplikasi Hotel Booking modern yang memungkinkan pengguna mencari hotel, melihat detail, dan melakukan reservasi melalui antarmuka yang responsif dan intuitif.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel API",
      "Railway",
      "Vercel",
    ],
    liveDemo: "https://stayease-frontend-snowy.vercel.app/",
    github: "#",
  },
  {
    title: "Website Kopi Kenangan",
    description:
      "Landing Page modern bertema coffee shop dengan desain elegan, responsif, dan user experience yang menarik.",
    techStack: ["Html", "Js", "CSS"],
    liveDemo: "https://website-kopi-kenangan-tau.vercel.app",
    github: "#",
  },
  {
    title: "Sistem Absensi Mahasiswa QR Code",
    description:
      "Aplikasi absensi mahasiswa berbasis QR Code menggunakan Laravel yang dilengkapi fitur autentikasi, dashboard admin, manajemen mahasiswa, dan pencatatan kehadiran secara digital.",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "QR Code"],
    liveDemo:
      "https://absensi-mahasiswa-qr-laravel-production-c6f0.up.railway.app/",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-sm font-bold text-[var(--color-neu-text-muted)] tracking-widest">03. PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="neu-card flex flex-col h-full overflow-hidden"
            >
              <div
                className="h-3 w-full"
                style={{ backgroundColor: accentCycle[index % accentCycle.length] }}
              ></div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 text-[var(--color-neu-text)]">
                  {project.title}
                </h3>

                <p className="text-[var(--color-neu-text-muted)] mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-bold bg-[var(--color-neu-bg)] neu-border text-[var(--color-neu-text)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-neu-blue)] text-white py-2.5 font-bold neu-button"
                  >
                    <HiExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    onClick={(e) => {
                      if (project.github === "#") e.preventDefault();
                    }}
                    className="flex items-center justify-center p-2.5 bg-[var(--color-neu-bg-alt)] text-[var(--color-neu-text)] neu-button"
                    title="Source Code"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
