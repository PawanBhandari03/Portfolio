import { useState } from 'react';
import { motion } from 'framer-motion';

const techStackItems = [
  { name: 'Java',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Docker',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'REST APIs',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
  { name: 'Git',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'JavaScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Python',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
];

const HOVER_CARDS = [
  {
    title: 'UNIVERSITY',
    align: 'text-left',
    desc: 'Pursuing Computer Engineering (3rd Year) at BSIOTR, JSPM. Focused on Data Structures, Software Development, and problem-solving. Continuously building real-world projects using Java, Spring Boot, and modern web technologies.'
  },
  {
    title: 'COMPETITIONS',
    align: 'text-center',
    desc: 'Winner of Techathon 3.0, showcasing innovative problem-solving and teamwork. Actively participate in hackathons and coding competitions, building practical and scalable tech solutions.'
  },
  {
    title: 'VISION',
    align: 'text-right',
    desc: 'My goal is to secure an SDE role at a top product-based company. Currently deepening expertise in system design, DSA, and open source contributions to get there.'
  }
];

export default function AboutBento() {
  const [hoveredCard, setHoveredCard] = useState<number>(1);

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">

        {/* ── Name & Title ── */}
        <motion.div
          className="glass-card flex flex-col items-center justify-center p-8 text-center h-[200px]"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase leading-tight" style={{ color: 'var(--text-primary)' }}>
            Pawan<br />Bhandari
          </h2>
          <p className="text-xs tracking-[0.2em] mt-4 uppercase font-semibold" style={{ color: 'var(--text-secondary)' }}>Java Backend Developer</p>
        </motion.div>

        {/* ── Hover Cards ── */}
        <motion.div
          className="glass-card p-4 md:p-6 md:col-span-2 flex flex-col justify-center min-h-[220px] md:min-h-[260px] overflow-visible relative group"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="flex justify-center items-center w-full h-full mt-4 md:mt-0"
            onMouseLeave={() => setHoveredCard(1)}
          >
            {HOVER_CARDS.map((card, idx) => {
              const isActive = hoveredCard === idx;
              return (
                <motion.div
                  key={card.title}
                  onMouseEnter={() => setHoveredCard(idx)}
                  animate={{
                    scale: isActive ? 1.05 : 0.95,
                    zIndex: isActive ? 40 : 10 - Math.abs(hoveredCard - idx),
                    opacity: isActive ? 1 : 0.6,
                    y: isActive ? -10 : 0
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className={`
                    w-[210px] sm:w-[250px] md:w-[280px] h-[160px] md:h-[180px]
                    rounded-2xl p-5 md:p-6
                    cursor-default relative flex-shrink-0 flex flex-col justify-center
                    ${idx > 0 ? '-ml-20 md:-ml-28' : ''}
                  `}
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    boxShadow: isActive ? '0 0 40px rgba(139, 92, 246, 0.4)' : '0 10px 20px -5px rgba(0,0,0,0.15)',
                    border: isActive ? '1px solid rgba(139, 92, 246, 0.5)' : '1px solid var(--border-color)'
                  }}
                >
                  <h4 className={`text-xs md:text-sm font-extrabold uppercase tracking-wider mb-3 ${card.align}`} style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h4>
                  <p className={`text-[10px] md:text-xs leading-relaxed ${card.align}`} style={{ color: 'var(--text-secondary)' }}>
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Mindset ── */}
        <motion.div
          className="glass-card md:col-span-1 md:row-span-2 p-8 flex flex-col gap-6 min-h-[480px]"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>Mindset</h3>
            <div className="w-10 h-[3px] bg-[#8B5CF6] mt-3 rounded-full" />
          </div>

          <p className="text-sm md:text-base leading-relaxed tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Building more than software.</strong> My passions provide the{' '}
            <strong style={{ color: 'var(--text-primary)' }}>discipline and focus</strong> I need to grow.
          </p>

          {/* Hobby Photo Placeholder */}
          <div className="relative w-full flex-1 min-h-[200px] rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(244,114,182,0.08) 50%, rgba(13,13,26,0.15) 100%)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              {/* Camera icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-10 h-10" style={{ color: 'var(--text-secondary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Photo coming soon</p>
            </div>
          </div>

          <p className="text-sm tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Mastering body and mind</strong> is my path to{' '}
            <strong style={{ color: 'var(--text-primary)' }}>excellence.</strong>
          </p>
        </motion.div>

        {/* ── Center Portrait ── */}
        <div className="md:col-span-1 md:row-span-2 flex flex-col gap-5">
          <motion.div
            className="glass-card flex-1 min-h-[330px] overflow-hidden relative p-0"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              background: `linear-gradient(160deg, var(--card-gradient-start) 0%, var(--card-gradient-end) 100%)`,
              boxShadow: '0 0 0 1px rgba(139,92,246,0.2), 0 0 40px rgba(139,92,246,0.12)'
            }}
          >
            {/* Animated glow border */}
            <div
              className="absolute inset-0 rounded-[32px] pointer-events-none"
              style={{
                background: 'linear-gradient(270deg, #f472b6, #8B5CF6, #7C3AED, #f472b6)',
                backgroundSize: '400% 400%',
                animation: 'glow-rotate 4s ease infinite',
                padding: '1.5px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }}
            />

            {/* PB initials placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(244,114,182,0.15) 100%)',
                  border: '1px solid rgba(139,92,246,0.3)'
                }}
              >
                <span
                  className="text-4xl font-black tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #f472b6, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  PB
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Photo coming soon</p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            className="glass-card h-[140px] p-6 flex flex-col justify-end relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            {/* World Map Background */}
            <div
              className="absolute inset-0 z-0 opacity-20 dark:opacity-[0.15]"
              style={{
                backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
                backgroundSize: '250%',
                backgroundPosition: '60% 30%',
                filter: 'invert(0.5) sepia(0.2) hue-rotate(200deg)'
              }}
            />
            {/* Radar Line */}
            <motion.div
              className="absolute top-0 bottom-0 w-[2px] bg-[#8B5CF6] shadow-[0_0_15px_3px_rgba(139,92,246,0.8)] z-0"
              animate={{ left: ['-10%', '110%', '-10%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0" style={{ background: `linear-gradient(to top, var(--card-bg) 20%, transparent 100%)` }} />
            <div className="z-10 relative">
              <h4 className="text-[20px] md:text-[23px] font-black tracking-widest uppercase leading-none" style={{ color: 'var(--text-primary)' }}>
                PUNE, INDIA
              </h4>
              <p className="text-[11px] font-mono mt-2 tracking-widest font-semibold" style={{ color: 'var(--text-secondary)' }}>
                18.5204° N, 73.8567° E
              </p>
              <p className="text-[11px] font-mono text-[#8B5CF6] font-bold tracking-widest mt-1">
                - GMT+5:30
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Craft ── */}
        <motion.div
          className="glass-card md:col-span-1 md:row-span-2 p-8 flex flex-col gap-6 min-h-[480px] overflow-hidden"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>
            <h3 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>Craft</h3>
            <div className="w-10 h-[3px] bg-[#8B5CF6] mt-3 rounded-full" />
          </div>

          <p className="text-[17px] leading-relaxed tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            Building scalable <strong style={{ color: 'var(--text-primary)' }}>apps, websites, and automations.</strong>
          </p>

          <p className="text-[17px] leading-relaxed tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            I understand what advantages modern tech can provide, helping me advise on the solutions a business actually needs.
          </p>

          {/* ── Infinite marquee strip ── */}
          <div 
            className="relative w-[calc(100%+64px)] -mx-8 py-3 flex items-center overflow-hidden"
            style={{ 
              backgroundColor: 'var(--tag-bg)', 
              borderTop: '1px solid var(--border-color)', 
              borderBottom: '1px solid var(--border-color)' 
            }}
          >
            <motion.div
              className="flex items-center whitespace-nowrap"
              style={{ width: 'max-content' }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 22 }}
            >
              {/* Render items TWICE for seamless loop */}
              {[...techStackItems, ...techStackItems].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2.5 mx-5 text-[11px] font-extrabold tracking-widest uppercase transition-colors cursor-pointer group"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  {tech.name}
                </span>
              ))}
            </motion.div>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 w-12 h-full z-10 pointer-events-none" style={{ background: `linear-gradient(to right, var(--marquee-fade), transparent)` }} />
            <div className="absolute right-0 top-0 w-12 h-full z-10 pointer-events-none" style={{ background: `linear-gradient(to left, var(--marquee-fade), transparent)` }} />
          </div>

          <div className="mt-auto pt-2">
            <p className="text-[17px] leading-relaxed tracking-wide mb-5" style={{ color: 'var(--text-secondary)' }}>
              Active Hackathon competitor & Science Club member. Feel free to invite me to collaborate.
            </p>
            <div className="flex items-center gap-3 text-[11px] font-extrabold tracking-widest uppercase" style={{ color: 'var(--text-primary)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
              Open to collaboration & freelance
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
