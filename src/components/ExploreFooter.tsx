import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import dogfoodImg from '../assets/DogFood2026_Certificate.png';
import pandoraImg from '../assets/Pandora.png';
import riftImg from '../assets/rift_Hackathon.jpeg';

type Page = 'home' | 'achievements' | 'mylinks' | 'guestbook';

interface ExploreFooterProps {
  onNavigate?: (page: Page) => void;
}

// --- Spotlight data (one entry per award) ---
const WINS = [
  {
    key: 'techathon',
    short: 'Techathon',
    image: '/Techathon.jpeg',
    fit: 'cover' as const,
    label: 'Winner · Best Solution',
    big: '₹10,000',
    name: 'Techathon 3.0',
    sub: 'Best Solution for the given problem statement, chosen from 500+ teams and 1,600+ participants.'
  },
  {
    key: 'dogfood',
    short: 'DogFood',
    image: dogfoodImg,
    fit: 'contain' as const,
    label: '3rd place · 3 of 194',
    big: '$350',
    name: 'DogFood 2026',
    sub: 'Ranked 3rd out of 194 entries with Broadsheet, a hackathon judging platform, scoring 4.428 out of 5.'
  },
  {
    key: 'pandora',
    short: 'Pandora',
    image: pandoraImg,
    fit: 'contain' as const,
    label: 'AI for Smart Cities',
    big: 'BEST SOLUTION',
    name: 'Pandora Hackathon',
    sub: 'Certificate of Appreciation for Best Solution in the AI for Smart Cities theme at BSIOTR JSPM.'
  },
  {
    key: 'rift',
    short: 'RIFT',
    image: riftImg,
    fit: 'contain' as const,
    label: '24-hour hackathon',
    big: 'TOP 11',
    name: 'RIFT Hackathon 2026',
    sub: 'Ranked in the top 11 teams at a 24-hour hackathon run by Vesdiam Technologies.'
  }
];

// --- Guestbook helpers (same avatar colours as the guestbook page) ---
const AVATAR_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f97316', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#14b8a6', '#a855f7'];
function getColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
function getInitials(name: string) {
  return name.trim().split(/\s+/).map(p => p[0]).join('').toUpperCase().slice(0, 2);
}

interface GuestMessage { id: string; name: string; message: string; }

const CARD = 'rounded-[28px] border border-slate-200/60 dark:border-white/[0.07] bg-white/70 dark:bg-[#0d111a] backdrop-blur-sm transition-colors duration-300 hover:border-[#8B5CF6]/50';
const LINK = 'inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B5CF6] hover:underline cursor-pointer';

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ExploreFooter({ onNavigate }: ExploreFooterProps) {
  const [showEmail, setShowEmail] = useState(false);
  const [active, setActive] = useState(0);
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [copied, setCopied] = useState(false);

  const go = useCallback((page: Page) => {
    if (!onNavigate) return;
    onNavigate(page);
    window.scrollTo(0, 0);
  }, [onNavigate]);

  // Two latest guestbook entries
  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('created_at', 'desc'), limit(2));
    const unsub = onSnapshot(q, snap => {
      setMessages(snap.docs.map(d => ({ id: d.id, ...(d.data() as Omit<GuestMessage, 'id'>) })));
    }, () => setMessages([]));
    return () => unsub();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('pawansinghb07@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = 'mailto:pawansinghb07@gmail.com';
    }
  };

  const win = WINS[active];

  return (
    <>
      <section id="other" className="w-full max-w-6xl mx-auto pt-20 pb-24 px-6 relative z-10 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's{' '}
            <span style={{ color: '#a855f7' }}>Talk</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">My wins, what people say, and the best ways to reach me</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* ───────── Achievements spotlight ───────── */}
          <motion.div
            className={`${CARD} lg:col-span-2 lg:row-span-2 p-5 md:p-7 flex flex-col gap-5`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
                <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
                </svg>
                Achievements
              </h3>
              <span className="hidden sm:inline text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400">
                3× hackathon winner
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 items-stretch">
              <button
                type="button"
                onClick={() => go('achievements')}
                aria-label={`Open achievements, ${win.name}`}
                className="relative h-[230px] md:h-[290px] rounded-2xl overflow-hidden bg-[#0a0e1a] border border-slate-200 dark:border-white/10 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={win.key}
                    src={win.image}
                    alt={win.name}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 w-full h-full ${win.fit === 'cover' ? 'object-cover' : 'object-contain'}`}
                  />
                </AnimatePresence>
              </button>

              <div className="flex flex-col justify-center gap-2 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={win.key}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-2"
                  >
                    <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#8B5CF6]">{win.label}</span>
                    <div className={`font-black tracking-tight leading-none text-[#8B5CF6] ${win.big.length > 9 ? 'text-4xl md:text-5xl' : 'text-6xl md:text-7xl'}`}>{win.big}</div>
                    <b className="text-xl font-bold text-slate-900 dark:text-white">{win.name}</b>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{win.sub}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="tablist" aria-label="Choose an achievement">
              {WINS.map((w, i) => (
                <button
                  key={w.key}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`relative h-[64px] md:h-[72px] rounded-xl overflow-hidden bg-[#0a0e1a] border cursor-pointer transition-all duration-300 ${
                    i === active
                      ? 'border-[#8B5CF6] ring-2 ring-[#8B5CF6]/40 -translate-y-0.5'
                      : 'border-slate-200 dark:border-white/10 hover:border-[#8B5CF6]/60'
                  }`}
                >
                  <img src={w.image} alt="" loading="lazy" decoding="async" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${i === active ? 'opacity-100' : 'opacity-55'}`} />
                  <span className="absolute left-2 bottom-1.5 text-xs font-bold text-white drop-shadow">{w.short}</span>
                </button>
              ))}
            </div>

            <button type="button" onClick={() => go('achievements')} className={`${LINK} w-fit group`}>
              See all achievements and certificates
              <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
            </button>
          </motion.div>

          {/* ───────── Guestbook ───────── */}
          <motion.div
            className={`${CARD} p-5 md:p-6 flex flex-col gap-4`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
              <svg className="w-5 h-5 text-[#f472b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
              </svg>
              Guestbook
            </h3>
            <div className="flex flex-col gap-2.5">
              {messages.length === 0 ? (
                <p className="text-sm text-slate-500 dark:text-slate-400 py-3">No messages yet. Be the first to leave your mark.</p>
              ) : (
                messages.map(m => (
                  <div key={m.id} className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-slate-50 dark:bg-white/[0.03]">
                    <span className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: getColor(m.name || '?') }}>
                      {getInitials(m.name || '?')}
                    </span>
                    <div className="min-w-0">
                      <b className="text-sm text-slate-900 dark:text-white block truncate">{m.name}</b>
                      <p className="text-[13px] text-slate-500 dark:text-slate-400 line-clamp-2">{m.message}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <button type="button" onClick={() => go('guestbook')} className={`${LINK} w-fit mt-auto group`}>
              Sign the guestbook
              <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
            </button>
          </motion.div>

          {/* ───────── Contact ───────── */}
          <motion.div
            className={`${CARD} p-5 md:p-6 flex flex-col gap-4`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
                <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                  <rect x="3" y="5" width="18" height="14" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                </svg>
                Contact
              </h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-500">
                <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-400" />
                Open to roles
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl border border-dashed border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/[0.03]">
              <code className="text-[13px] text-slate-800 dark:text-slate-200 break-all">pawansinghb07@gmail.com</code>
              <button type="button" onClick={copyEmail} className="shrink-0 px-3 py-1 rounded-lg text-xs font-semibold border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors cursor-pointer">
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <a href="https://github.com/PawanBhandari03" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#8B5CF6] hover:border-[#8B5CF6] hover:-translate-y-0.5 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/pawan-singh-bhandari-5817ab307" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#8B5CF6] hover:border-[#8B5CF6] hover:-translate-y-0.5 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <span aria-hidden="true" className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><rect x="3" y="5" width="18" height="14" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" /></svg>
              </span>
            </div>

            <button type="button" onClick={() => go('mylinks')} className={`${LINK} w-fit mt-auto group`}>
              Send me a message
              <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
            </button>
          </motion.div>

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
