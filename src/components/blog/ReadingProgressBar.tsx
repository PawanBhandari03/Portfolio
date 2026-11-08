import { useEffect, useState } from 'react';

/**
 * Thin progress bar pinned under the site navbar, filling as the reader
 * scrolls through the nearest ancestor <article> (or the whole page as a
 * fallback). Purely visual — purple-to-lime gradient to match the brand.
 */
export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = (doc.scrollHeight - doc.clientHeight) || 1;
      const pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      setProgress(pct);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 h-[3px] z-40 bg-transparent pointer-events-none">
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #8B5CF6, #B7F36B)',
        }}
      />
    </div>
  );
}
