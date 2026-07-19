import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { HiArrowRight, HiMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Terminal Style Tag — animated role badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-neu-bg-alt)] px-4 py-2 neu-border neu-shadow-sm">
              <span className="w-3 h-3 rounded-full bg-[var(--color-neu-green)] animate-pulse"></span>
              <TypeAnimation
                sequence={[
                  "Junior Web Developer",
                  2000,
                  "Junior Fullstack Developer",
                  2000,
                  "Junior UI/UX Designer",
                  2000,
                  "IoT Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={65}
                className="font-mono text-sm font-bold text-[var(--color-neu-text)]"
                repeat={Infinity}
                cursor={true}
              />
            </div>

            <div className="space-y-2">
              <p className="font-mono text-xl font-bold text-[var(--color-neu-text-muted)]">
                Halo, saya 👋
              </p>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Raply
                <br />
                <span className="relative inline-block">
                  Fediansyah
                  <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[var(--color-neu-yellow)] -z-10"></span>
                </span>
              </motion.h1>
            </div>

            <motion.p
              className="mt-4 text-lg md:text-xl text-[var(--color-neu-text-muted)] max-w-xl font-medium leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Mahasiswa{" "}
              <span className="font-bold text-[var(--color-neu-text)] border-b-2 border-[var(--color-neu-blue)]">
                Teknik Informatika
              </span>
              . Menulis{" "}
              <code className="font-mono bg-[var(--color-neu-border)] text-[var(--color-neu-bg)] px-2 py-0.5 rounded-sm text-sm">
                clean_code
              </code>{" "}
              untuk web app modern menggunakan Laravel & React, serta merancang
              arsitektur sistem IoT.
            </motion.p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-col items-center justify-center bg-[var(--color-neu-bg-alt)] px-4 py-2 neu-border neu-shadow-sm">
                <span className="font-mono font-bold text-sm text-[var(--color-neu-text)]">
                  projects.count()
                </span>
                <span className="font-mono text-sm text-[var(--color-neu-text-muted)]">
                  &gt; 5
                </span>
              </div>
              <div className="flex flex-col items-center justify-center bg-[var(--color-neu-bg-alt)] px-4 py-2 neu-border neu-shadow-sm">
                <span className="font-mono font-bold text-sm text-[var(--color-neu-text)]">
                  hardware.type
                </span>
                <span className="font-mono text-sm text-[var(--color-neu-text-muted)]">
                  "IoT"
                </span>
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 mt-10 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full sm:w-auto px-8 py-4 bg-[var(--color-neu-blue)] text-white font-bold text-lg cursor-pointer neu-button flex items-center justify-center gap-2"
              >
                Lihat Projects <HiArrowRight />
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full sm:w-auto px-8 py-4 bg-[var(--color-neu-bg-alt)] text-[var(--color-neu-text)] font-bold text-lg cursor-pointer neu-button flex items-center justify-center gap-2"
              >
                Contact Me <HiMail />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Illustration/Hero Graphic */}
          <motion.div
            className="hidden lg:flex justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-[var(--color-neu-yellow)] neu-border-thick translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-[var(--color-neu-bg-alt)] neu-border-thick overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              <div className="relative w-40 h-40 mb-4">
                <span className="absolute inset-0 rounded-full bg-[var(--color-neu-blue)] animate-ping opacity-40"></span>
                <span className="absolute -inset-1 rounded-full bg-[var(--color-neu-yellow)] neu-border -z-10"></span>
                <img
                  src="/images/raply.jpeg"
                  alt="Raply Fediansyah"
                  className="relative w-40 h-40 rounded-full object-cover neu-border"
                />
              </div>
                <h3 className="font-bold text-xl mb-2">Raply.dev</h3>
                <p className="font-mono text-sm text-[var(--color-neu-text-muted)]">
                  &lt;FullStack /&gt;
                </p>
              </div>

              {/* Floating tags */}
              <div className="absolute -top-6 -right-6 bg-[var(--color-neu-pink)] text-white px-4 py-2 font-mono font-bold text-sm neu-border shadow-[4px_4px_0_var(--color-neu-border)] rotate-12">
                React.js
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-neu-green)] text-white px-4 py-2 font-mono font-bold text-sm neu-border shadow-[4px_4px_0_var(--color-neu-border)] -rotate-6">
                Laravel
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="font-mono text-xs font-bold">scroll down</span>
        <div className="w-1 h-8 bg-[var(--color-neu-border)]"></div>
      </motion.div>
    </section>
  );
}
