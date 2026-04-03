import { motion } from 'framer-motion';
import ChatUI from './ChatUI';

export default function ReplicaHero() {
  return (
    <section className="w-full max-w-5xl mx-auto pt-40 pb-20 px-6 relative z-10 flex flex-col items-center gap-10">

      {/* Title */}
      <div className="flex flex-col items-center gap-6 w-full text-center">
        <motion.div
          className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200 dark:border-[#1e2330] shadow-[0_0_40px_rgba(139,92,246,0.15)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/avatar.png" alt="Pawan Avatar" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b388ff] to-[#f472b6]">Pawan Bhandari</span>
        </motion.h1>
      </div>

      {/* Chat */}
      <motion.div
        className="w-full mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ChatUI />
      </motion.div>

      {/* Scroll to explore */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>

    </section>
  );
}
