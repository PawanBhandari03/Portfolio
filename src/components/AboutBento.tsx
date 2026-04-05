import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutBento() {
  const [hoveredCard, setHoveredCard] = useState<number>(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeProfile, setActiveProfile] = useState(0);
  const [isHoveringMindset, setIsHoveringMindset] = useState(false);
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % 3);
    }, isHoveringMindset ? 2000 : 10000);
    return () => clearInterval(interval);
  }, [isHoveringMindset]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProfile(prev => (prev + 1) % 5);
    }, isHoveringProfile ? 2000 : 10000);
    return () => clearInterval(interval);
  }, [isHoveringProfile]);

  const dummyImages = [
    { title: 'COOKING', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80' },
    { title: 'BOARDING', src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80' },
    { title: 'WORKOUT', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80' }
  ];

  const dummyProfiles = [
    '/avatar.png',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80'
  ];

  const techStackItems = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg' },
    { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'PostgresSql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Networking', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg' }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

        {/* Name & Title */}
        <motion.div
          className="glass-card flex flex-col items-center justify-center p-8 text-center h-[200px]"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-widest uppercase leading-tight">
            Pawan<br />Bhandari
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs tracking-[0.2em] mt-4 uppercase font-semibold">Java Backend Developer</p>
        </motion.div>

        {/* Interactive Experience Stack */}
        <motion.div
          className="glass-card p-4 md:p-6 md:col-span-2 flex flex-col justify-center min-h-[220px] md:min-h-[260px] overflow-visible relative group"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          
          <div 
            className="flex justify-center items-center w-full h-full mt-4 md:mt-0" 
            onMouseLeave={() => setHoveredCard(1)}
          >
            {[
              {
                title: 'UNIVERSITY',
                desc: 'Pursuing Computer Engineering (3rd Year) at BSIOTR, JSPM. Focused on Data Structures, Software Development, and problem-solving. Continuously building real-world projects using Java, Spring Boot, and modern web technologies.'
              },
              {
                title: 'COMPETITIONS',
                desc: 'Winner of Techathon 3.0, showcasing innovative problem-solving and teamwork. Actively participate in hackathons and coding competitions, building practical and scalable tech solutions.'
              },
              {
                title: 'PROJECTS',
                desc: 'Built projects like EcoBounty and a Blog Platform, focusing on real-world problem solving. Developed various full-stack applications using React and Java (Spring Boot), including REST APIs and scalable backend systems.'
              }
            ].map((card, idx) => {
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
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`
                       w-[210px] sm:w-[250px] md:w-[280px] h-[160px] md:h-[180px]
                       bg-[#161b22] dark:bg-[#0a0f1e]
                       border rounded-2xl p-5 md:p-6
                       cursor-default relative flex-shrink-0 flex flex-col justify-center
                       ${idx > 0 ? '-ml-20 md:-ml-28' : ''}
                    `}
                    style={{
                       boxShadow: isActive ? '0 0 40px rgba(139, 92, 246, 0.4)' : '0 10px 20px -5px rgba(0,0,0,0.5)',
                       borderColor: isActive ? 'rgba(139, 92, 246, 0.5)' : 'rgba(255,255,255,0.05)'
                    }}
                 >
                    <h4 className={`text-xs md:text-sm font-extrabold text-white uppercase tracking-wider mb-3
                       ${idx === 0 ? 'text-left' : idx === 2 ? 'text-right' : 'text-center'}
                    `}>{card.title}</h4>
                    <p className={`text-slate-400 text-[10px] md:text-xs leading-relaxed
                       ${idx === 0 ? 'text-left' : idx === 2 ? 'text-right' : 'text-center'}
                    `}>{card.desc}</p>
                 </motion.div>
               );
            })}
          </div>
        </motion.div>

        {/* Mindset */}
        <motion.div
          className="glass-card md:col-span-1 md:row-span-2 p-8 flex flex-col justify-between min-h-[500px]"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col gap-5 z-10 relative">
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Mindset</h3>
              <div className="w-10 h-[3px] bg-[#8B5CF6] mt-3 rounded-full"></div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed tracking-wide">
              <strong className="text-slate-900 dark:text-white">Building more than software.</strong> My passions provide the <strong className="text-slate-900 dark:text-white">discipline and focus</strong> I need to grow.
            </p>
          </div>

          <div 
             className="relative w-full h-[220px] flex justify-center items-center mt-8"
             onMouseEnter={() => setIsHoveringMindset(true)}
             onMouseLeave={() => setIsHoveringMindset(false)}
          >
            {dummyImages.map((img, idx) => {
              const pos = (idx - activeImage + 3) % 3;
              // pos 0 = front, pos 1 = back left, pos 2 = further back left
              
              return (
                <motion.div
                  key={idx}
                  className="absolute w-[160px] h-[200px] rounded-2xl overflow-hidden"
                  animate={{
                    x: pos === 0 ? 20 : pos === 1 ? -30 : -70,
                    scale: pos === 0 ? 1 : pos === 1 ? 0.9 : 0.8,
                    zIndex: 30 - pos * 10,
                    opacity: pos === 0 ? 1 : pos === 1 ? 0.5 : 0.1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{
                    boxShadow: pos === 0 ? '0 0 30px rgba(139, 92, 246, 0.4)' : '0 10px 20px rgba(0,0,0,0.5)',
                    border: pos === 0 ? '1px solid rgba(139, 92, 246, 0.6)' : '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent"></div>
                  <span className="absolute bottom-4 left-0 right-0 text-center text-white text-[11px] font-extrabold tracking-widest uppercase z-10">
                    {img.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-8 z-10 relative tracking-wide">
            <strong className="text-slate-800 dark:text-white">Mastering body and mind</strong> is my path to <strong className="text-slate-800 dark:text-white">excellence.</strong>
          </p>
        </motion.div>

        {/* Photo & Location */}
        <div className="md:col-span-1 md:row-span-2 flex flex-col gap-6">
          <motion.div
            className="glass-card flex-1 min-h-[350px] overflow-hidden relative group p-0 bg-black/20"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            onMouseEnter={() => setIsHoveringProfile(true)}
            onMouseLeave={() => setIsHoveringProfile(false)}
          >
            {dummyProfiles.map((src, idx) => (
              <motion.img 
                key={idx}
                src={src} 
                alt={`Profile ${idx}`} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeProfile === idx ? 0.85 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
          <motion.div
            className="glass-card h-[140px] p-6 flex flex-col justify-end relative overflow-hidden bg-[#0A0F1E] dark:bg-[#0A0F1E]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Interactive World Map Background */}
            <div 
              className="absolute inset-0 z-0 opacity-[0.12] dark:opacity-[0.15]" 
              style={{
                 backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
                 backgroundSize: '250%',
                 backgroundPosition: '60% 30%', 
                 filter: 'invert(1)'
              }}
            ></div>
            
            {/* Moving Radar Line */}
            <motion.div 
              className="absolute top-0 bottom-0 w-[1px] md:w-[2px] bg-[#8B5CF6] shadow-[0_0_15px_3px_rgba(139,92,246,0.8)] z-0"
              animate={{ left: ["-10%", "110%", "-10%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0f1e] via-white/80 dark:via-[#0a0f1e]/80 to-transparent z-0"></div>

            {/* Exact Reference Content */}
            <div className="z-10 relative">
              <h4 className="text-[20px] md:text-[23px] font-black text-slate-900 dark:text-white tracking-widest uppercase leading-none">
                PUNE, INDIA
              </h4>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2 tracking-widest font-semibold">
                18.5204° N, 73.8567° E
              </p>
              <p className="text-[11px] font-mono text-[#8B5CF6] font-bold tracking-widest mt-1">
                - GMT+5:30
              </p>
            </div>
          </motion.div>
        </div>

        {/* Craft */}
        <motion.div
          className="glass-card md:col-span-1 md:row-span-2 p-8 flex flex-col justify-between min-h-[500px] overflow-hidden"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col gap-6 z-10 relative">
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Craft</h3>
              <div className="w-10 h-[3px] bg-[#8B5CF6] mt-3 rounded-full"></div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 text-[17px] leading-relaxed tracking-wide mt-2">
              Building scalable <strong className="text-slate-900 dark:text-white">backends, APIs, and microservices.</strong>
            </p>
            
            <p className="text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed tracking-wide">
              I understand what advantages modern tech architectures can provide, helping me advise on robust backend solutions that systems need.
            </p>
          </div>

          <div className="relative w-[calc(100%+64px)] -mx-8 my-8 py-3 bg-black/[0.02] dark:bg-black/40 flex items-center overflow-hidden border-y border-black/5 dark:border-white/[0.05]">
            <motion.div 
               className="flex whitespace-nowrap w-max"
               animate={{ x: ["0%", "-50%"] }} 
               transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-10 items-center justify-around px-5 text-[11px] font-extrabold tracking-widest uppercase text-slate-600 dark:text-slate-400">
                  {techStackItems.map(tech => (
                    <span key={tech.name} className="flex items-center gap-2.5 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer group">
                      <img 
                         src={tech.icon} 
                         alt={tech.name} 
                         className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                         onError={(e) => {
                           // Fallback to dot if logo not found
                           e.currentTarget.style.display = 'none';
                           if (e.currentTarget.nextElementSibling) {
                             (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                           }
                         }}
                      />
                      <span className="hidden w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/90 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-slate-50 dark:from-[#0a0f1e] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-slate-50 dark:from-[#0a0f1e] to-transparent z-10 pointer-events-none"></div>
          </div>

          <div className="pt-2 z-10 relative">
            <p className="text-slate-600 dark:text-slate-300 text-[17px] leading-relaxed tracking-wide mb-6">
              Active learner & backend enthusiast. Feel free to invite me to collaborate.
            </p>
            <div className="flex items-center gap-3 text-[11px] text-slate-900 dark:text-white font-extrabold tracking-widest uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]"></span>
              Open to collaboration & freelance
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
