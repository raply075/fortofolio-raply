import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Certificates", to: "certificates" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-neu-bg)] border-b-4 border-[var(--color-neu-border)] shadow-[0_4px_0_var(--color-neu-border)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl font-black cursor-pointer bg-[var(--color-neu-yellow)] px-3 py-1 neu-border-thick neu-shadow-sm hover:neu-shadow-hover active:neu-shadow-active inline-block"
            >
              Raply
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="bg-[var(--color-neu-blue)] text-white translate-y-[2px] shadow-[2px_2px_0_var(--color-neu-border)]"
                className="text-[var(--color-neu-text)] hover:bg-[var(--color-neu-pink)] hover:text-[var(--color-neu-text)] transition-colors cursor-pointer text-sm font-bold uppercase tracking-wider px-4 py-2 border-3 border-transparent hover:border-[var(--color-neu-border)] rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-neu-text)] focus:outline-none bg-[var(--color-neu-yellow)] p-2 neu-border-thick neu-shadow-sm"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[var(--color-neu-bg-alt)] border-b-4 border-[var(--color-neu-border)] absolute top-full left-0 w-full"
        >
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="bg-[var(--color-neu-blue)] text-white"
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-neu-text)] hover:bg-[var(--color-neu-pink)] block px-4 py-3 border-3 border-[var(--color-neu-border)] rounded-md text-base font-bold cursor-pointer transition-colors shadow-[4px_4px_0_var(--color-neu-border)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
