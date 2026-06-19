import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pawanImg from '../assets/pawan.jpeg';
import craftImg from '../assets/craft.jpeg';
import puneImg from '../assets/pune.jpeg';
import mindsetImg from '../assets/Mindset.jpeg';
import universityImg from '../assets/university.jpeg';

type HoveredSection = 'default' | 'name' | 'craft' | 'location' | 'mindset' | 'university';

const galleryImages = [
  { src: '/run.jpeg', caption: 'RUNNING' },
  { src: '/Gaming.jpeg', caption: 'GAMING' },
  { src: '/food.jpeg', caption: 'COOKING' },
  { src: '/Hike.jpeg', caption: 'HIKING' },
  { src: '/gym.jpeg', caption: 'GYM' },
];

const sectionImageMap: Record<HoveredSection, string> = {
  default: pawanImg,
  name: pawanImg,
  craft: craftImg,
  location: puneImg,
  mindset: mindsetImg,
  university: universityImg,
};

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
    desc: 'Pursuing Computer Engineering (4th Year) at BSIOTR, JSPM. Passionate about Data Structures, System Design, and Software Development. Constantly shipping real-world projects using Java, Spring Boot, React, and modern web technologies.'
  },
  {
    title: 'COMPETITIONS',
    align: 'text-center',
    desc: '2x Hackathon Winner — Techathon 3.0 & Smart India Hackathon. Known for rapid prototyping, innovative problem-solving, and building scalable solutions under pressure. Competitive coder with a team-first mindset.'
  },
  {
    title: 'VISION',
    align: 'text-right',
    desc: 'Targeting SDE roles at top product-based companies. Sharpening skills in System Design, DSA, and full-stack development — with real projects, open source contributions, and zero shortcuts.'
  }
];

export default function AboutBento() {
  const [hoveredCard, setHoveredCard] = useState<number>(1);
  const [hoveredSection, setHoveredSection] = useState<HoveredSection>('default');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isCardsPaused, setIsCardsPaused] = useState(false);

  // Auto-rotate hover cards
  useEffect(() => {
    if (isCardsPaused) return;
    const timer = setInterval(() => {
      setHoveredCard((prev) => (prev + 1) % HOVER_CARDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isCardsPaused]);

  const goNext = useCallback(() => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  // Auto-rotate every 3 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">

        {/* ── Name & Title ── */}
        <motion.div
          className="glass-card flex flex-col items-center justify-center p-6 md:p-8 text-center h-[200px]"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          onMouseEnter={() => setHoveredSection('name')}
          onMouseLeave={() => setHoveredSection('default')}
        >
          <h2 className="text-[28px] md:text-4xl font-extrabold tracking-widest uppercase leading-tight" style={{ color: 'var(--text-primary)' }}>
            Pawan<br />Bhandari
          </h2>
          <p className="text-xs tracking-[0.2em] mt-4 uppercase font-semibold" style={{ color: 'var(--text-secondary)' }}>Full Stack Developer</p>
        </motion.div>

        {/* ── Hover Cards ── */}
        <motion.div
          className="glass-card max-md:!bg-transparent max-md:!backdrop-blur-none max-md:!border-none max-md:!shadow-none max-md:p-0 md:p-6 md:col-span-2 flex flex-col justify-center min-h-[220px] md:min-h-[260px] relative group reveal w-full"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }}
          onMouseEnter={() => setHoveredSection('university')}
          onMouseLeave={() => setHoveredSection('default')}
        >
          <div
            className="flex justify-center items-center w-full h-full mt-0 relative"
            onMouseEnter={() => setIsCardsPaused(true)}
            onMouseLeave={() => { setIsCardsPaused(false); setHoveredCard(1); }}
          >
            {HOVER_CARDS.map((card, idx) => {
              const isActive = hoveredCard === idx;
              return (
                <motion.div
                  key={card.title}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onClick={() => setHoveredCard((prev) => (prev + 1) % HOVER_CARDS.length)}
                  animate={{
                    scale: isActive ? 1.05 : 0.95,
                    zIndex: isActive ? 40 : 10 - Math.abs(hoveredCard - idx),
                    opacity: isActive ? 1 : 0.6,
                    y: isActive ? -10 : 0
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className={`
                    w-full md:w-[280px] h-full md:h-[180px]
                    rounded-[32px] md:rounded-2xl p-6 md:p-6
                    cursor-pointer absolute md:relative flex-shrink-0 flex flex-col justify-center
                    ${idx > 0 ? 'md:-ml-28' : ''}
                  `}
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    boxShadow: isActive ? '0 0 40px rgba(139, 92, 246, 0.4)' : '0 10px 20px -5px rgba(0,0,0,0.15)',
                    border: isActive ? '1px solid var(--active-border-color)' : '1px solid var(--border-color)'
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
          className="glass-card card-hover md:col-span-1 md:row-span-2 p-8 flex flex-col gap-6 min-h-[480px] overflow-hidden reveal"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={() => setHoveredSection('mindset')}
          onMouseLeave={() => setHoveredSection('default')}
        >
          <div>
            <h3 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>Mindset</h3>
            <div className="w-10 h-[3px] bg-[#8B5CF6] mt-3 rounded-full" />
          </div>

          <p className="text-sm md:text-base leading-relaxed tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Building more than software.</strong> My passions provide the{' '}
            <strong style={{ color: 'var(--text-primary)' }}>discipline and focus</strong> I need to grow.
          </p>

          {/* Stacked Card Carousel */}
          <div
            className="relative flex-1 min-h-[280px] flex flex-col items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Card stack container */}
            <div className="relative" style={{ width: '200px', height: '260px' }}>
              {galleryImages.map((img, i) => {
                const total = galleryImages.length;
                // Calculate position relative to active card (circular)
                let offset = i - galleryIndex;
                if (offset > Math.floor(total / 2)) offset -= total;
                if (offset < -Math.floor(total / 2)) offset += total;

                const isActive = offset === 0;
                const absOffset = Math.abs(offset);

                // Coverflow style: cards are shifted left/right
                const xShift = `${offset * 65}%`;
                const yShift = 0;
                const rotation = 0;
                const cardScale = isActive ? 1 : 0.75;

                return (
                  <motion.div
                    key={i}
                    className="absolute inset-0 cursor-pointer"
                    style={{
                      width: '200px',
                      height: '260px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                    }}
                    animate={{
                      x: xShift,
                      y: yShift,
                      rotate: rotation,
                      scale: cardScale,
                      zIndex: isActive ? 20 : 10 - absOffset,
                      opacity: absOffset > 1 ? 0 : 1, // Only show front and immediate left/right
                      filter: isActive ? 'blur(0px) brightness(1)' : `blur(1.5px) brightness(0.6)`,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    onClick={() => {
                      if (offset > 0) goNext();
                      else if (offset < 0) {
                        // We need a goPrev if we want them to click left to go left
                        // For now we just goNext on any click, but ideally we add goPrev back
                        // Actually the previous goNext logic didn't care about direction, let's fix it
                        setGalleryIndex((prev) => (prev + offset + total) % total);
                      } else {
                        setGalleryIndex((prev) => (prev + 1) % total);
                      }
                    }}
                  >
                    {/* Image */}
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '16px' }}
                    />

                    {/* Solid overlay + caption */}
                    <div
                      className="absolute inset-0 flex items-end justify-center"
                      style={{ borderRadius: '16px' }}
                    >
                      <div className="w-full bg-black/60 pt-10 pb-4 px-3">
                        <p className="text-white text-sm font-extrabold tracking-[0.2em] uppercase text-center">
                          {img.caption}
                        </p>
                      </div>
                    </div>

                    {/* Glowing purple border for active card */}
                    {isActive && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          borderRadius: '16px',
                          border: '2px solid rgba(139, 92, 246, 0.7)',
                          boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.05)',
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>


          </div>

          <p className="text-sm tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Mastering body and mind</strong> is my path to{' '}
            <strong style={{ color: 'var(--text-primary)' }}>excellence.</strong>
          </p>
        </motion.div>

        {/* ── Center Portrait ── */}
        <div className="md:col-span-1 md:row-span-2 flex flex-col gap-5 w-full">
          <motion.div
            className="glass-card w-full min-h-[280px] md:min-h-[330px] flex-1 overflow-hidden relative p-0"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              background: 'var(--card-bg)',
              boxShadow: '0 0 0 1px rgba(139,92,246,0.2), 0 0 40px rgba(139,92,246,0.12)'
            }}
          >
            {/* Solid purple border overlay */}
            <div
              className="absolute inset-0 rounded-[32px] pointer-events-none z-10"
              style={{
                border: '2px solid #7c3aed',
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)'
              }}
            />

            {/* Dynamic hover image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={hoveredSection}
                src={sectionImageMap[hoveredSection]}
                alt="Pawan Bhandari"
                className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </motion.div>

          {/* Location Card */}
          <motion.div
            className="glass-card card-hover h-[140px] p-6 flex flex-col justify-end relative overflow-hidden reveal w-full"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ backgroundColor: 'var(--card-bg)' }}
            onMouseEnter={() => setHoveredSection('location')}
            onMouseLeave={() => setHoveredSection('default')}
          >
            {/* World Map Background with pan/zoom animation */}
            <motion.div
              className="absolute inset-0 z-0 opacity-20 dark:opacity-[0.15]"
              initial={{ scale: 1.1, x: -10, y: -10 }}
              animate={{ scale: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
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
            {/* Solid overlay to blend into card */}
            <div className="absolute inset-0 z-0" style={{ background: 'var(--card-bg)', opacity: 0.5 }} />
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
          className="glass-card card-hover md:col-span-1 md:row-span-2 p-8 flex flex-col gap-6 min-h-[480px] overflow-hidden reveal"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.5 }}
          onMouseEnter={() => setHoveredSection('craft')}
          onMouseLeave={() => setHoveredSection('default')}
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
