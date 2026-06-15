import React from 'react';
import { motion } from 'framer-motion';

// --- Icons ---
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const FullStackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);

const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043A10.026 10.026 0 0112 18c-2.33 0-4.475-.796-6.16-2.128" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.83M11.42 15.17l-.37.37a2.121 2.121 0 01-3 0l-1.5-1.5a2.121 2.121 0 010-3l.37-.37m7.08-2.08l.37-.37a2.121 2.121 0 000-3l-1.5-1.5a2.121 2.121 0 00-3 0l-.37.37m-7.08 7.08l-5.83 5.877A2.652 2.652 0 003 21l5.83-5.877M10.5 13.5l3-3" />
  </svg>
);

const DOMAINS = [
  {
    category: 'Languages',
    iconBg: 'bg-blue-500/10 text-blue-500',
    icon: <CodeIcon />,
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS']
  },
  {
    category: 'Full-Stack',
    iconBg: 'bg-purple-500/10 text-purple-500',
    icon: <FullStackIcon />,
    skills: ['Spring Boot', 'React', 'Node.js', 'Express.js', 'REST APIs', 'JWT/Auth', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Database & DevOps',
    iconBg: 'bg-green-500/10 text-green-500',
    icon: <DatabaseIcon />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git', 'Linux', 'CI/CD', 'Supabase']
  },
  {
    category: 'AI/ML & Tools',
    iconBg: 'bg-orange-500/10 text-orange-500',
    icon: <AIIcon />,
    skills: ['Python ML', 'OpenCV', 'CNN', 'Scikit-learn', 'Dataset Training', 'NumPy', 'Pandas', 'Matplotlib']
  },
  {
    category: 'Java/Spring Boot',
    iconBg: 'bg-green-500/10 text-green-500',
    icon: <LeafIcon />,
    skills: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate/JPA', 'Maven', 'REST API Design', 'Microservices', 'Spring Data JPA']
  },
  {
    category: 'Tools & Workflow',
    iconBg: 'bg-blue-500/10 text-blue-500',
    icon: <WrenchIcon />,
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'Redis', 'Docker Desktop', 'Linux Terminal', 'Figma', 'Swagger']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 max-w-xl"
          >
            <p className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase">
              TECH STACK
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Skills</span>
            </h2>
            <p className="text-base md:text-lg font-medium mt-2" style={{ color: 'var(--text-secondary)' }}>
              Technologies I use to architect, build and ship real-world software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6 px-6 py-4 rounded-2xl shadow-lg border"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex flex-col text-center">
              <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>25+</span>
              <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: 'var(--text-secondary)' }}>Technologies</span>
            </div>
            <div className="w-[1px] h-10 bg-slate-200 dark:bg-white/10" />
            <div className="flex flex-col text-center">
              <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>8</span>
              <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: 'var(--text-secondary)' }}>Domains</span>
            </div>
            <div className="w-[1px] h-10 bg-slate-200 dark:bg-white/10" />
            <div className="flex flex-col text-center">
              <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>10+</span>
              <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: 'var(--text-secondary)' }}>Projects Built</span>
            </div>
          </motion.div>
        </div>

        {/* DOMAIN CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {DOMAINS.map((domain, idx) => (
            <motion.div
              key={domain.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-8 md:p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ 
                backgroundColor: 'var(--domain-card-bg)',
                borderTop: '2px solid #0ea5e9',
                borderLeft: '1px solid transparent',
                borderRight: '1px solid transparent',
                borderBottom: '1px solid transparent',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0,0,0,0.05)'
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${domain.iconBg}`}>
                  {domain.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--text-secondary)' }}>
                    DOMAIN
                  </p>
                  <h3 className="text-[18px] md:text-[20px] font-bold" style={{ color: 'var(--text-primary)' }}>
                    {domain.category}
                  </h3>
                </div>
              </div>

              {/* Skills List (2 column bullet layout with cyan dots) */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-2">
                {domain.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-[14px] md:text-[15px] font-medium leading-tight" style={{ color: 'var(--domain-card-text)' }}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
