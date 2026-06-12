import { useState, useEffect } from 'react';
import ReplicaHero from './components/ReplicaHero';
import AboutBento from './components/AboutBento';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsSphere from './components/SkillsSphere';
import ExploreFooter from './components/ExploreFooter';
import AchievementsPage from './components/AchievementsPage';
import MyLinksPage from './components/MyLinksPage';
import GuestbookPage from './components/GuestbookPage';
import InteractiveDotGrid from './components/InteractiveDotGrid';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'achievements' | 'mylinks' | 'guestbook'>('home');

  // Toggle .dark class on <html> — this is what Tailwind's dark: variant responds to
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-transparent min-h-screen text-slate-900 dark:text-white font-sans relative flex flex-col transition-colors duration-500">

      {/* Interactive dot grid background */}
      <InteractiveDotGrid />

      {/* ═══════ STICKY NAVBAR ═══════ */}
      <nav className="navbar-glass fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 lg:px-10">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">

          {/* Left: Name */}
          <a href="#" className="text-lg font-bold text-slate-900 dark:text-white tracking-wide hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">
            Pawan Bhandari
          </a>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">
              Home
            </a>
            <a href="#projects" className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide hover:text-slate-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide hover:text-slate-900 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#other" className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide hover:text-slate-900 dark:hover:text-white transition-colors">
              Other
            </a>
          </div>

          {/* Right: Book a Call + Dark Mode Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white border border-slate-300 dark:border-white/15 hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] transition-all duration-300"
            >
              📅 Book a Call
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                /* Moon — currently dark, click to go light */
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                /* Sun — currently light, click to go dark */
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════ PAGE CONTENT ═══════ */}
      <main className="pt-16">
        {currentPage === 'home' && (
          <>
            <ReplicaHero />
            <AboutBento />
            <FeaturedProjects />
            <SkillsSphere />
            <ExploreFooter onNavigate={setCurrentPage} />
          </>
        )}
        
        {currentPage === 'achievements' && (
          <AchievementsPage onBack={() => {
              setCurrentPage('home');
              window.scrollTo(0, 0);
          }} />
        )}

        {currentPage === 'mylinks' && (
          <MyLinksPage onBack={() => {
              setCurrentPage('home');
              window.scrollTo(0, 0);
          }} />
        )}

        {currentPage === 'guestbook' && (
          <GuestbookPage onBack={() => {
              setCurrentPage('home');
              window.scrollTo(0, 0);
          }} />
        )}
      </main>

    </div>
  );
}

export default App;
