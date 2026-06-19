import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CARDS = [
  {
    title: "Guestbook",
    desc: "Leave your mark and see what others have to say",
    linkColor: "text-[#8B5CF6]",
    iconBg: "bg-[#7C3AED]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    title: "Achievements",
    desc: "Milestones, certifications, and accomplishments",
    linkColor: "text-[#f472b6]",
    iconBg: "bg-[#f97316]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    )
  },
  {
    title: "Contact",
    desc: "Get in touch, connect on social media, or drop a message",
    linkColor: "text-[#a78bfa]",
    iconBg: "bg-[#0ea5e9]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    )
  }
];

interface ExploreFooterProps {
  onNavigate?: (page: 'home' | 'achievements' | 'mylinks' | 'guestbook') => void;
}

export default function ExploreFooter({ onNavigate }: ExploreFooterProps) {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <section id="other" className="w-full max-w-5xl mx-auto pt-20 pb-24 px-6 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            More to{' '}
            <span style={{ color: '#a855f7' }}>Explore</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Check out these additional resources and connect with me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, idx) => (
            <motion.a
              key={card.title}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (card.title === 'Achievements' && onNavigate) {
                  onNavigate('achievements');
                  window.scrollTo(0, 0);
                }
                if (card.title === 'Contact' && onNavigate) {
                  onNavigate('mylinks');
                  window.scrollTo(0, 0);
                }
                if (card.title === 'Guestbook' && onNavigate) {
                  onNavigate('guestbook');
                  window.scrollTo(0, 0);
                }
              }}
              className="flex flex-col items-center text-center gap-5 p-6 md:p-8 bg-white/70 dark:bg-[#0d111a] border border-slate-200/60 dark:border-white/[0.07] rounded-[28px] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm card-hover reveal w-full"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-6`}>
                {card.icon}
              </div>
              <h3 className={`text-2xl font-bold ${card.linkColor}`}>{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              <span className={`text-sm font-semibold ${card.linkColor} mt-auto group-hover:underline flex items-center gap-1`}>
                Explore
                <motion.span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</motion.span>
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="w-full border-t border-slate-200 dark:border-white/[0.06] bg-white/80 dark:bg-[#080c14]">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-500 text-center">
          <div className="flex items-center gap-2 font-medium">
            <span className="font-bold text-slate-900 dark:text-white text-base">PB</span>
            <span>•</span>
            <span>© 2026 PB Portfolio</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span><span className="text-red-500 heartbeat">♥</span><span>using React &amp; Tailwind</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B5CF6] hover:scale-110 transition-all">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B5CF6] hover:scale-110 transition-all">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <div className="relative flex items-center justify-center">
              <button
                onClick={() => setShowEmail(!showEmail)}
                className="hover:text-[#8B5CF6] hover:scale-110 transition-all cursor-pointer"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
              </button>
              <AnimatePresence>
                {showEmail && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-[#13131f] border border-white/10 rounded-lg shadow-xl px-4 py-2 z-50 flex items-center gap-2 text-sm font-medium text-white whitespace-nowrap"
                  >
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#13131f] border-r border-b border-white/10 rotate-45"></div>
                    pawansinghb07@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
