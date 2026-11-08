import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TocItem {
  id: string;
  label: string;
}

interface Props {
  items: TocItem[];
}

/** Small ring that fills as the reader progresses through the whole article. */
function ProgressRing({ pct }: { pct: number }) {
  const r = 9;
  const c = 2 * Math.PI * r;
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" className="shrink-0 -rotate-90">
      <circle cx="11" cy="11" r={r} fill="none" stroke="var(--border-color)" strokeWidth="2.5" />
      <circle
        cx="11" cy="11" r={r} fill="none" strokeWidth="2.5" strokeLinecap="round"
        stroke="url(#toc-progress-gradient)"
        strokeDasharray={c}
        strokeDashoffset={c - (pct / 100) * c}
        style={{ transition: 'stroke-dashoffset 120ms ease-out' }}
      />
      <defs>
        <linearGradient id="toc-progress-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#B7F36B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Scrollspy table of contents. Desktop: sticky left rail with a sliding
 * highlight pill behind the active item and a small progress ring showing
 * how far through the whole article the reader is. Mobile: a collapsible
 * dropdown pinned above the article body.
 */
export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const visible = new Map<string, number>();
    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        if (visible.size > 0) {
          const topMost = [...visible.entries()].sort((a, b) => a[1] - b[1])[0][0];
          setActiveId(topMost);
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.current?.observe(el);
    });

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = (doc.scrollHeight - doc.clientHeight) || 1;
      setProgress(Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMobileOpen(false);
  };

  const activeIndex = items.findIndex((i) => i.id === activeId);

  const Chevron = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
      className={`w-4 h-4 transition-transform ${mobileOpen ? 'rotate-180' : ''}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <>
      {/* Desktop sticky rail */}
      <nav className="hidden lg:block sticky top-28 self-start w-60 shrink-0 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
        <div className="flex items-center gap-2 mb-4">
          <ProgressRing pct={progress} />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest leading-none" style={{ color: 'var(--text-primary)' }}>
              Contents
            </p>
            <p className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              {Math.round(progress)}% read
            </p>
          </div>
        </div>
        <ul className="relative flex flex-col gap-0.5 text-sm">
          {items.map((item, i) => {
            const active = item.id === activeId;
            return (
              <li key={item.id} className="relative">
                {active && (
                  <motion.div
                    layoutId="toc-active-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'linear-gradient(90deg, rgba(139,92,246,0.14), rgba(183,243,107,0.08))',
                      boxShadow: '0 0 0 1px rgba(139,92,246,0.25) inset',
                    }}
                    transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                  />
                )}
                <button
                  onClick={() => jumpTo(item.id)}
                  className="relative w-full flex items-center gap-2.5 text-left py-2 px-2.5 rounded-lg transition-colors group"
                  style={{ color: active ? '#8B5CF6' : 'var(--text-secondary)' }}
                >
                  <span
                    className="text-[10px] font-mono tabular-nums transition-colors shrink-0"
                    style={{ color: active ? '#B7F36B' : 'var(--text-secondary)', opacity: active ? 1 : 0.5 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-snug transition-transform group-hover:translate-x-0.5" style={{ fontWeight: active ? 700 : 500 }}>
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile collapsible dropdown */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold"
          style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
        >
          <span className="flex items-center gap-2.5">
            <ProgressRing pct={progress} />
            Contents
            {activeIndex >= 0 && (
              <span className="text-xs font-mono font-normal" style={{ color: 'var(--text-secondary)' }}>
                &middot; {activeIndex + 1}/{items.length}
              </span>
            )}
          </span>
          <Chevron />
        </button>
        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-xl overflow-hidden border divide-y"
              style={{ borderColor: 'var(--border-color)' }}
            >
              {items.map((item, i) => {
                const active = item.id === activeId;
                return (
                  <li key={item.id} style={{ borderColor: 'var(--border-color)' }}>
                    <button
                      onClick={() => jumpTo(item.id)}
                      className="w-full flex items-center gap-2.5 text-left px-4 py-2.5 text-sm"
                      style={{
                        backgroundColor: active ? 'rgba(139,92,246,0.08)' : 'var(--card-bg)',
                        color: active ? '#8B5CF6' : 'var(--text-secondary)',
                        fontWeight: active ? 700 : 400,
                      }}
                    >
                      <span className="text-[10px] font-mono tabular-nums" style={{ color: active ? '#B7F36B' : 'var(--text-secondary)', opacity: active ? 1 : 0.5 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
