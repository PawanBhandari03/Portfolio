import { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
}

interface Props {
  items: TocItem[];
}

/**
 * Scrollspy table of contents. Desktop-only sticky left rail with a simple
 * active-item highlight. Hidden on mobile/tablet (below lg) — on a phone it
 * only ate screen space above the fold, and the reading progress bar at the
 * top already shows how far through the article you are.
 */
export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');
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
  };

  return (
    <nav className="hidden lg:block sticky top-28 self-start w-56 shrink-0 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
      <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
        Contents
      </p>
      <ul className="flex flex-col gap-0.5 text-sm border-l" style={{ borderColor: 'var(--border-color)' }}>
        {items.map((item, i) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <button
                onClick={() => jumpTo(item.id)}
                className="w-full flex items-baseline gap-2.5 text-left py-1.5 pl-3.5 -ml-px border-l-2 transition-colors"
                style={{
                  borderColor: active ? '#8B5CF6' : 'transparent',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: active ? 600 : 400,
                }}
              >
                <span className="text-[10px] font-mono tabular-nums shrink-0" style={{ opacity: active ? 1 : 0.5 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-snug">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
