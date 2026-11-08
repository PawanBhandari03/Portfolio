import { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
}

interface Props {
  items: TocItem[];
}

/**
 * Scrollspy table of contents. Desktop: sticky left rail, active section
 * highlighted in lime as it scrolls into view. Mobile: a collapsible
 * dropdown pinned above the article body.
 */
export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');
  const [mobileOpen, setMobileOpen] = useState(false);
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
    return () => observer.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMobileOpen(false);
  };

  const Chevron = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
      className={`w-4 h-4 transition-transform ${mobileOpen ? 'rotate-180' : ''}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <>
      {/* Desktop sticky rail */}
      <nav className="hidden lg:block sticky top-28 self-start w-56 shrink-0 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
        <p className="text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
          Contents
        </p>
        <ul className="flex flex-col gap-0.5 text-sm border-l" style={{ borderColor: 'var(--border-color)' }}>
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <button
                  onClick={() => jumpTo(item.id)}
                  className="text-left w-full py-1.5 pl-4 -ml-px border-l-2 transition-colors leading-snug"
                  style={{
                    borderColor: active ? '#B7F36B' : 'transparent',
                    color: active ? '#8B5CF6' : 'var(--text-secondary)',
                    fontWeight: active ? 700 : 400,
                  }}
                >
                  {item.label}
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
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
            Contents
          </span>
          <Chevron />
        </button>
        {mobileOpen && (
          <ul className="mt-2 rounded-xl overflow-hidden border divide-y" style={{ borderColor: 'var(--border-color)' }}>
            {items.map((item) => {
              const active = item.id === activeId;
              return (
                <li key={item.id} style={{ borderColor: 'var(--border-color)' }}>
                  <button
                    onClick={() => jumpTo(item.id)}
                    className="w-full text-left px-4 py-2.5 text-sm"
                    style={{
                      backgroundColor: active ? 'rgba(139,92,246,0.08)' : 'var(--card-bg)',
                      color: active ? '#8B5CF6' : 'var(--text-secondary)',
                      fontWeight: active ? 700 : 400,
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
