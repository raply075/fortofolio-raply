import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "087722590815",
    href: "tel:+627722590815",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "raply060104@gmail.com",
    href: "mailto:raply060104@gmail.com",
  },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/raply-fediansyah-802610418/",
  },
  { icon: <FaGithub />, name: "GitHub", href: "https://github.com/raply075" },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    href: "https://www.instagram.com/fdnsyhhh_/",
  },
  {
    icon: <FaFacebook />,
    name: "Facebook",
    href: "https://www.facebook.com/share/1GJ3F7e5t4/",
  },
  {
    icon: <FaYoutube />,
    name: "YouTube",
    href: "https://youtube.com/@raplyfediansyah5243",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-sm font-bold text-[var(--color-neu-text-muted)] tracking-widest">05. CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-black mb-6 text-[var(--color-neu-text)]">
              Let's Connect
            </h3>
            <p className="text-[var(--color-neu-text-muted)] mb-10 leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan project web development,
              peluang kerjasama, atau bertukar ide seputar teknologi terbaru.
              Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 neu-card"
                >
                  <div className="w-12 h-12 bg-[var(--color-neu-yellow)] neu-border flex items-center justify-center text-[var(--color-neu-text)] text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-neu-text-muted)] font-bold">
                      {info.label}
                    </p>
                    <p className="text-[var(--color-neu-text)] font-bold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[var(--color-neu-bg-alt)] neu-border-thick neu-shadow-sm rounded-full flex items-center justify-center text-[var(--color-neu-text)] hover:bg-[var(--color-neu-pink)] hover:text-white transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="neu-card p-8"
          >
            <h3 className="text-2xl font-black mb-6 text-[var(--color-neu-text)]">
              Send me a message
            </h3>

            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-[var(--color-neu-text)] mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[var(--color-neu-bg)] neu-border px-4 py-3 text-[var(--color-neu-text)] placeholder-[var(--color-neu-text-muted)] focus:outline-none focus:neu-shadow-sm transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-[var(--color-neu-text)] mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[var(--color-neu-bg)] neu-border px-4 py-3 text-[var(--color-neu-text)] placeholder-[var(--color-neu-text-muted)] focus:outline-none focus:neu-shadow-sm transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-[var(--color-neu-text)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[var(--color-neu-bg)] neu-border px-4 py-3 text-[var(--color-neu-text)] placeholder-[var(--color-neu-text-muted)] focus:outline-none focus:neu-shadow-sm transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-[var(--color-neu-blue)] text-white font-black neu-button"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
