import { useState, useEffect, useRef } from 'react';
import ReplicaHero from './components/ReplicaHero';
import AboutBento from './components/AboutBento';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import ExploreFooter from './components/ExploreFooter';
import AchievementsPage from './components/AchievementsPage';
import MyLinksPage from './components/MyLinksPage';
import GuestbookPage from './components/GuestbookPage';
import InteractiveDotGrid from './components/InteractiveDotGrid';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'achievements' | 'mylinks' | 'guestbook'>('home');
  const [navScrolled, setNavScrolled] = useState(false);
  const [themeToggleRotated, setThemeToggleRotated] = useState(false);

  // Cursor refs
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  // Toggle .dark class on <html> — this is what Tailwind's dark: variant responds to
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor tracking with smooth lag
  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows immediately
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      // Ring follows with lag (lerp)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(animateRing);
    };

    const onMouseEnterClickable = () => document.body.classList.add('cursor-hover');
    const onMouseLeaveClickable = () => document.body.classList.remove('cursor-hover');

    document.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(animateRing);

    // Add hover-grow on all interactive elements
    const clickables = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterClickable);
      el.addEventListener('mouseleave', onMouseLeaveClickable);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterClickable);
        el.removeEventListener('mouseleave', onMouseLeaveClickable);
      });
    };
  }, [currentPage]); // re-bind when page changes

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    setThemeToggleRotated(prev => !prev);
  };

  return (
    <div className="bg-transparent min-h-screen text-slate-900 dark:text-white font-sans relative flex flex-col transition-colors duration-500">

      {/* ─── Custom Cursor ─── */}
      <div id="custom-cursor" ref={cursorDotRef} />
      <div id="cursor-ring" ref={cursorRingRef} />

      {/* Interactive dot grid background */}
      <InteractiveDotGrid />

      {/* ═══════ STICKY NAVBAR ═══════ */}
      <nav className={`navbar-glass fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 lg:px-10${navScrolled ? ' scrolled' : ''}`}>
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">

          {/* Left: Logo/Name */}
          <div className="flex items-center select-none">
            <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">PB</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#0ea5e9] mx-1 md:mx-1.5 self-end mb-1.5 md:mb-2"></span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase ml-0.5 md:ml-1 mt-0.5 md:mt-1">Portfolio</span>
          </div>

          {/* Center & Right: Only show on home page */}
          {currentPage === 'home' && (
            <>
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="nav-link text-sm font-semibold text-slate-900 dark:text-white tracking-wide hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">
                  Home
                </a>
                <a href="#projects" className="nav-link text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide hover:text-slate-900 dark:hover:text-white transition-colors">
                  Projects
                </a>
                <a href="#skills" className="nav-link text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide hover:text-slate-900 dark:hover:text-white transition-colors">
                  Skills
                </a>
                <a href="#other" className="nav-link text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide hover:text-slate-900 dark:hover:text-white transition-colors">
                  Explore
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleThemeToggle}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="Toggle Theme"
                >
                  <span className={`theme-toggle-icon${themeToggleRotated ? ' rotating' : ''}`}>
                    {isDark ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* ═══════ PAGE CONTENT ═══════ */}
      <main className="pt-16">
        {currentPage === 'home' && (
          <>
            <ReplicaHero />
            <AboutBento />
            <FeaturedProjects />
            <Skills />
            <ExploreFooter onNavigate={setCurrentPage} />
          </>
        )}
        
        {currentPage === 'achievements' && (
          <AchievementsPage onBack={() => {
              setCurrentPage('home');
              setTimeout(() => {
                document.getElementById('other')?.scrollIntoView({ behavior: 'instant' });
              }, 0);
          }} />
        )}

        {currentPage === 'mylinks' && (
          <MyLinksPage onBack={() => {
              setCurrentPage('home');
              setTimeout(() => {
                document.getElementById('other')?.scrollIntoView({ behavior: 'instant' });
              }, 0);
          }} />
        )}

        {currentPage === 'guestbook' && (
          <GuestbookPage onBack={() => {
              setCurrentPage('home');
              setTimeout(() => {
                document.getElementById('other')?.scrollIntoView({ behavior: 'instant' });
              }, 0);
          }} />
        )}
      </main>

    </div>
  );
}

export default App;
