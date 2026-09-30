import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ICON_PROPS = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "w-6 h-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

const CARDS = [
  {
    title: "Guestbook",
    desc: "Leave your mark and see what others have to say",
    linkColor: "text-[#8B5CF6]",
    iconStyle: "border-violet-500/25 bg-violet-500/10 text-violet-600 dark:text-violet-400",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    )
  },
  {
    title: "Achievements",
    desc: "Milestones, certifications, and accomplishments",
    linkColor: "text-[#f472b6]",
    iconStyle: "border-pink-500/25 bg-pink-500/10 text-pink-600 dark:text-pink-400",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="8.5" r="5.5" />
        <path d="M8.9 13.4L7.5 21.25l4.5-2.5 4.5 2.5-1.4-7.85" />
      </svg>
    )
  },
  {
    title: "Contact",
    desc: "Get in touch, connect on social media, or drop a message",
    linkColor: "text-[#a78bfa]",
    iconStyle: "border-sky-500/25 bg-sky-500/10 text-sky-600 dark:text-sky-400",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl border ${card.iconStyle} flex items-center justify-center icon-jiggle`}>
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
