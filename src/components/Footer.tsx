import { Link } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-[var(--color-neu-border)] bg-[var(--color-neu-text)] relative z-10 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl font-black bg-[var(--color-neu-yellow)] text-[var(--color-neu-text)] px-3 py-1 neu-border-thick cursor-pointer inline-block mb-2"
            >
              Raply
            </Link>
            <p className="text-gray-400 text-sm">
              Full Stack Web Developer & IoT Enthusiast
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-300 text-sm mb-2">
              &copy; {currentYear} Raply Fediansyah. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
