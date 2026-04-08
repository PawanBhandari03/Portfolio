import { useState, useEffect } from 'react';
import ReplicaHero from './components/ReplicaHero';
import AboutBento from './components/AboutBento';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsSphere from './components/SkillsSphere';
import ExploreFooter from './components/ExploreFooter';
import AchievementsPage from './components/AchievementsPage';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'achievements'>('home');

  // Toggle .dark class on <html> — this is what Tailwind's dark: variant responds to
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-transparent min-h-screen text-slate-900 dark:text-white font-sans relative flex flex-col pt-16 transition-colors duration-500">

      {/* Theme Toggle Button (Top Left) */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-white/80 dark:bg-[#131826] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-md"
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

      {/* Floating Navigation Pill */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card px-8 py-3 flex items-center gap-8 shadow-xl">
          <a href="#" className="font-bold tracking-widest text-slate-800 dark:text-white hover:text-[#8B5CF6] transition-colors">Pawan</a>
          <div className="w-px h-4 bg-slate-300 dark:bg-white/20"></div>
          <a href="#" className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white bg-slate-200 dark:bg-white/10 px-4 py-1.5 rounded-full">Home</a>
          <a href="#" className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#" className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#" className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Other</a>
          <div className="w-px h-4 bg-slate-300 dark:bg-white/20"></div>
          <a href="#" className="text-sm font-medium tracking-wide text-slate-800 dark:text-white border border-slate-300 dark:border-white/20 px-4 py-1.5 rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-[#0A0F1E] transition-all flex items-center gap-2">
            📅 Book a Call
          </a>
        </div>
      </nav>

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

    </div>
  );
}

export default App;
