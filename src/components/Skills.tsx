import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Animated Count Up Component ---
const CountUpStat = ({ end, duration = 2, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" as any });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref} className="count-up-stat">{prefix}{count}{suffix}</span>;
};

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

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const DOMAINS = [
  {
    category: 'Languages',
    iconBg: 'bg-blue-500/10 text-blue-500',
    pillHover: 'hover:border-blue-500/50 hover:bg-black/5 dark:hover:bg-white/10',
    icon: <CodeIcon />,
    skills: [
      { name: 'Java', icon: 'java/java-original.svg' },
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
      { name: 'Python', icon: 'python/python-original.svg' },
      { name: 'SQL', icon: 'mysql/mysql-original.svg' },
      { name: 'HTML/CSS', icon: 'html5/html5-original.svg' }
    ]
  },
  {
    category: 'Full-Stack',
    iconBg: 'bg-purple-500/10 text-purple-500',
    pillHover: 'hover:border-purple-500/50 hover:bg-black/5 dark:hover:bg-white/10',
    icon: <FullStackIcon />,
    skills: [
      { name: 'Spring Boot', icon: 'spring/spring-original.svg' },
      { name: 'React', icon: 'react/react-original.svg' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'express/express-original.svg' },
      { name: 'REST APIs' },
      { name: 'GraphQL', icon: 'graphql/graphql-plain.svg' },
      { name: 'JWT/Auth' },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' }
    ]
  },
  {
    category: 'Database & DevOps',
    iconBg: 'bg-green-500/10 text-green-500',
    pillHover: 'hover:border-green-500/50 hover:bg-black/5 dark:hover:bg-white/10',
    icon: <DatabaseIcon />,
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
      { name: 'Docker', icon: 'docker/docker-original.svg' },
      { name: 'Git', icon: 'git/git-original.svg' },
      { name: 'Linux', icon: 'linux/linux-original.svg' },
      { name: 'CI/CD' },
      { name: 'Supabase', icon: 'supabase/supabase-original.svg' }
    ]
  },
  {
    category: 'AI/ML & Tools',
    iconBg: 'bg-orange-500/10 text-orange-500',
    pillHover: 'hover:border-orange-500/50 hover:bg-black/5 dark:hover:bg-white/10',
    icon: <AIIcon />,
    skills: [
      { name: 'Python ML', icon: 'python/python-original.svg' },
      { name: 'OpenCV', icon: 'opencv/opencv-original.svg' },
      { name: 'CNN Models' },
      { name: 'Scikit-learn', icon: 'scikitlearn/scikitlearn-original.svg' },
      { name: 'Dataset Training' },
      { name: 'NumPy', icon: 'numpy/numpy-original.svg' },
      { name: 'Pandas', icon: 'pandas/pandas-original.svg' }
    ]
  },
  {
    category: 'Java/Spring Boot',
    iconBg: 'bg-green-500/10 text-green-500',
    pillHover: 'hover:border-green-500/50 hover:bg-black/5 dark:hover:bg-white/10',
    icon: <LeafIcon />,
    skills: [
      { name: 'Spring Boot', icon: 'spring/spring-original.svg' },
      { name: 'Spring Security', icon: 'spring/spring-original.svg' },
      { name: 'Spring MVC', icon: 'spring/spring-original.svg' },
      { name: 'Hibernate/JPA' },
      { name: 'Maven', icon: 'maven/maven-original.svg' },
      { name: 'REST API Design' },
      { name: 'Microservices' },
      { name: 'Spring Data JPA' }
    ]
  },
  {
    category: 'Tools & Workflow',
    iconBg: 'bg-blue-500/10 text-blue-500',
    pillHover: 'hover:border-blue-500/50 hover:bg-black/5 dark:hover:bg-white/10',
    icon: <WrenchIcon />,
    skills: [
      { name: 'Git & GitHub', icon: 'github/github-original.svg' },
      { name: 'Postman', icon: 'postman/postman-original.svg' },
      { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
      { name: 'Redis', icon: 'redis/redis-original.svg' },
      { name: 'Docker Desktop', icon: 'docker/docker-original.svg' },
      { name: 'Linux Terminal', icon: 'linux/linux-original.svg' },
      { name: 'Figma', icon: 'figma/figma-original.svg' },
      { name: 'Swagger', icon: 'swagger/swagger-original.svg' }
    ]
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
            className="flex items-center gap-3 md:gap-6 px-4 md:px-6 py-4 rounded-2xl shadow-lg border w-full md:w-auto justify-between md:justify-start shrink-0 overflow-x-auto scrollbar-hide"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex flex-col text-center">
              <span className="text-[16px] md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}><CountUpStat end={25} suffix="+" /></span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>Technologies</span>
            </div>
            <div className="w-[1px] h-10 bg-slate-200 dark:bg-white/10 shrink-0" />
            <div className="flex flex-col text-center">
              <span className="text-[16px] md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}><CountUpStat end={8} /></span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>Domains</span>
            </div>
            <div className="w-[1px] h-10 bg-slate-200 dark:bg-white/10 shrink-0" />
            <div className="flex flex-col text-center">
              <span className="text-[16px] md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}><CountUpStat end={10} suffix="+" /></span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>Projects Built</span>
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-5 md:p-10 flex flex-col gap-6 transition-all duration-300 card-hover bg-[#f0f4ff] dark:bg-[#0d1117] hover:bg-white dark:hover:bg-[#1a1f2e] group"
              style={{
                borderLeft: '1px solid var(--border-color)',
                borderRight: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0,0,0,0.05)'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0ea5e9] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_15px_#0ea5e9] transition-all duration-300" style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />

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

              {/* Skills List (Pill badges with Devicons) */}
              <div className="flex flex-wrap gap-2 mt-2">
                {domain.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.06] transition-all duration-300 cursor-default hover:scale-105 hover:shadow-md hover:border-white/20 ${domain.pillHover}`}
                  >
                    {skill.icon && (
                      <img 
                        src={`${deviconBase}${skill.icon}`} 
                        alt={skill.name} 
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
