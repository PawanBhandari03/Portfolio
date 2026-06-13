import { motion } from 'framer-motion';

const DOMAINS = [
  {
    category: 'LANGUAGES',
    title: 'Languages',
    iconColor: '#3b82f6',
    iconBg: 'rgba(59,130,246,0.1)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ['Java', 'JavaScript', 'Python', 'TypeScript', 'SQL', 'HTML/CSS']
  },
  {
    category: 'FULL-STACK',
    title: 'Full-Stack',
    iconColor: '#a855f7',
    iconBg: 'rgba(168,85,247,0.1)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    skills: ['Spring Boot', 'React', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT/Auth', 'Tailwind CSS']
  },
  {
    category: 'DATABASE & DEVOPS',
    title: 'Database & DevOps',
    iconColor: '#10b981',
    iconBg: 'rgba(16,185,129,0.1)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ['PostgreSQL', 'MySQL', 'Docker', 'Git', 'CI/CD', 'Linux']
  },
  {
    category: 'AI / ML & TOOLS',
    title: 'AI / ML & Tools',
    iconColor: '#f97316',
    iconBg: 'rgba(249,115,22,0.1)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    skills: ['Python ML', 'OpenCV', 'CNN Models', 'Dataset Training', 'Postman', 'VS Code']
  },
  {
    category: 'JAVA / SPRING BOOT',
    title: 'Java / Spring Boot',
    iconColor: '#22c55e',
    iconBg: 'rgba(34,197,94,0.1)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5c-4.418 0-8-1.79-8-4V8.5m16 7c0 2.21-3.582 4-8 4m8-4V8.5m0 0c0-2.21-3.582-4-8-4s-8 1.79-8 4m16 0c-1 2-4.5 3-8 3s-7-1-8-3" />
      </svg>
    ),
    skills: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate / JPA', 'Maven', 'REST API Design', 'Microservices']
  },
  {
    category: 'TOOLS & WORKFLOW',
    title: 'Tools & Workflow',
    iconColor: '#3b82f6',
    iconBg: 'rgba(59,130,246,0.1)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Docker Desktop', 'Linux Terminal']
  }
];

const STATS = [
  { number: '25+', label: 'Technologies' },
  { number: '8', label: 'Domains' },
  { number: '9', label: 'Projects Built' },
];

export default function SkillsSphere() {
  return (
    <section 
      id="skills"
      className="relative w-full py-24 md:py-32 flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-6xl w-full px-6 flex flex-col items-center">
        
        {/* Top Header Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mb-16 relative z-10">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <span className="text-[#0ea5e9] tracking-[0.2em] text-[13px] font-black uppercase mb-4">
              TECH STACK
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Skills
              </span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }} className="text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Technologies I use to architect, build and ship real-world software.
            </p>
          </div>

          {/* Right Column: Animated Counter Stats */}
          <div className="lg:col-span-1 flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full flex items-start justify-center gap-8 lg:gap-10 p-6 md:p-8 rounded-2xl border border-black/5 dark:border-white/5"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1.5"
                >
                  <span className="text-2xl md:text-3xl font-black" style={{ color: 'var(--text-primary)' }}>
                    {stat.number}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 2-Column Grid for Domain Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {DOMAINS.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative p-8 md:p-10 rounded-2xl border-t-2 border-[#0ea5e9] border-x border-b border-x-transparent border-b-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-colors duration-300"
              style={{ backgroundColor: 'var(--domain-card-bg)' }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-5 mb-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: domain.iconBg, color: domain.iconColor }}
                >
                  {domain.icon}
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--text-secondary)' }}>
                    DOMAIN
                  </h4>
                  <h3 className="text-[18px] font-bold" style={{ color: 'var(--domain-card-text)' }}>
                    {domain.title}
                  </h3>
                </div>
              </div>

              {/* Skills 2-Column List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {domain.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] shrink-0"></span>
                    <span className="text-[14px] font-medium" style={{ color: 'var(--domain-card-text)' }}>
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
