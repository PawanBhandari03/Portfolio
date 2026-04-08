import { motion } from 'framer-motion';

// Icons
const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);

const MedalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
);

import googleAiCert from '../assets/google_ai_cert.png';
import cassiniCert from '../assets/cassini_hackathon_cert.png';
import marathonCert from '../assets/marathon_cert.png';

interface Props {
  onBack: () => void;
}

export default function AchievementsPage({ onBack }: Props) {
  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col gap-16 min-h-screen">
      <div className="flex flex-col items-center text-center gap-6">
        <button 
          onClick={onBack}
          className="self-start text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 text-sm font-medium transition-colors group mb-4"
        >
          <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
          Back to home
        </button>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-[#F97316] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]">
              Milestones & Victories
            </p>
            <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Achievements</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium">
              From code to peaks, every achievement tells a story of dedication.
            </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-10">
        
        {/* Google AI Program - Wide Card */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-8 bg-white/70 dark:bg-[#111622] rounded-[32px] border border-slate-200/60 dark:border-white/10 overflow-hidden shadow-2xl backdrop-blur-md"
        >
            <div className="md:w-3/5 bg-white p-2 md:p-4 rounded-t-[32px] md:rounded-l-[32px] md:rounded-tr-none flex items-center justify-center">
                <img src={googleAiCert} alt="Google AI Program Certificate" className="w-full h-auto object-contain max-h-[400px] rounded-2xl shadow-sm border border-slate-100" />
            </div>
            <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Google AI Program</h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    Completed Google's 5-week intensive AI program. Acquired advanced knowledge in machine learning models, prompt engineering, and integrating AI into business development strategies.
                </p>
                <div className="mt-auto">
                    <span className="inline-block bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-slate-200 dark:border-white/10">
                        October 2025
                    </span>
                </div>
            </div>
        </motion.div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Cassini Hackathon */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col rounded-[32px] border border-slate-200/60 dark:border-white/10 overflow-hidden bg-white/70 dark:bg-[#0d111a] backdrop-blur-md shadow-xl"
            >
                <div className="bg-white p-4 md:p-6 h-[400px] md:h-[500px] flex items-center justify-center flex-col">
                     <img src={cassiniCert} alt="Cassini Hackathon Certificate" className="w-full h-full object-contain rounded-xl shadow-sm" />
                </div>
                <div className="p-6 md:p-8 flex items-center justify-between border-t border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-[#111622]/50">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Cassini Hackathon</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">3rd Place Winner • November 2025</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                        <TrophyIcon />
                    </div>
                </div>
            </motion.div>

            {/* Half-Marathon */}
            <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="flex flex-col rounded-[32px] border border-slate-200/60 dark:border-white/10 overflow-hidden bg-white/70 dark:bg-[#0d111a] backdrop-blur-md shadow-xl"
            >
                <div className="bg-white p-4 md:p-6 h-[400px] md:h-[500px] flex items-center justify-center flex-col">
                     <img src={marathonCert} alt="Half-Marathon Certificate" className="w-full h-full object-contain rounded-xl shadow-sm" />
                </div>
                <div className="p-6 md:p-8 flex items-center justify-between border-t border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-[#111622]/50">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-2">Half-Marathon Finisher</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Cracovia Royal Half Marathon</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <MedalIcon />
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </main>
  );
}
