import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap, SiVite,
  SiPhp, SiLaravel, SiMysql, SiSqlite, SiGit, SiPostman, SiRailway, SiVercel
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const accentCycle = [
  'var(--color-neu-yellow)',
  'var(--color-neu-blue)',
  'var(--color-neu-pink)',
  'var(--color-neu-green)',
];

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'React', icon: <FaReact className="text-sky-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
      { name: 'Laravel', icon: <SiLaravel className="text-red-600" /> },
      { name: 'REST API', icon: <TbApi className="text-green-600" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-blue-400" /> },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="text-[var(--color-neu-text)]" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
    ]
  },
  {
    title: 'Deployment',
    skills: [
      { name: 'Railway', icon: <SiRailway className="text-[var(--color-neu-text)]" /> },
      { name: 'Vercel', icon: <SiVercel className="text-[var(--color-neu-text)]" /> },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-sm font-bold text-[var(--color-neu-text-muted)] tracking-widest">02. TECH STACK</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">
            Senjata Andalan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="neu-card p-6"
            >
              <h3
                className="inline-block text-lg font-black mb-6 px-3 py-1 neu-border"
                style={{ backgroundColor: accentCycle[index % accentCycle.length] }}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-3 bg-[var(--color-neu-bg)] p-3 neu-border"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-sm font-bold text-[var(--color-neu-text)]">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
