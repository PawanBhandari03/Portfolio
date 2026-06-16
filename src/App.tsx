import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



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



  const handleThemeToggle = () => {
    setIsDark(!isDark);
    setThemeToggleRotated(prev => !prev);
  };

  return (
    <div className="bg-transparent min-h-screen text-slate-900 dark:text-white font-sans relative flex flex-col transition-colors duration-500">



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

              {/* Hamburger Icon (Mobile) */}
              <button
                className="md:hidden flex items-center justify-center p-2 text-slate-900 dark:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleThemeToggle}
                  className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all cursor-pointer"
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

      {/* ═══════ MOBILE MENU OVERLAY ═══════ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-white dark:bg-[#0d1117] flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-900 dark:text-white"
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col items-center gap-10">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 dark:text-white hover:text-[#8B5CF6] transition-colors">Home</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 dark:text-white hover:text-[#8B5CF6] transition-colors">Projects</a>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 dark:text-white hover:text-[#8B5CF6] transition-colors">Skills</a>
              <a href="#other" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 dark:text-white hover:text-[#8B5CF6] transition-colors">Other</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
