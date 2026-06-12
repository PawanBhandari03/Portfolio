import { motion } from 'framer-motion';
import ChatUI from './ChatUI';

export default function ReplicaHero() {
  return (
    <section className="w-full max-w-6xl mx-auto pt-28 pb-12 px-6 relative z-10 flex flex-col gap-14">

      {/* ── Purple radial glow behind hero ── */}
      <div className="hero-glow">

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

          {/* ════════ LEFT COLUMN ════════ */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Open to Work pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 w-fit"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-sm font-medium text-emerald-400 tracking-wide">Available For Engineering Roles</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="text-slate-900 dark:text-white">Hi, I'm</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f472b6] to-[#8B5CF6]">
                Pawan Bhandari
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-[#a78bfa]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Java Backend Developer
            </motion.p>

            {/* Bio */}
            <motion.p
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I build scalable backends, REST APIs, and full-stack apps.
              Focused on clean architecture and real-world impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-7 py-3 rounded-xl border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 font-semibold text-sm tracking-wide hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                {/* Download icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-5 mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {/* GitHub */}
              <a
                href="https://github.com/PawanBhandari03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pawan-singh-bhandari-5817ab307"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:pawansinghb07@gmail.com"
                className="text-slate-400 dark:text-slate-500 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors duration-300"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* ════════ RIGHT COLUMN ════════ */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Profile photo placeholder with glowing border */}
            <div className="relative">
              <div className="glow-border">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 flex flex-col items-center justify-center gap-3"
                  style={{
                    borderRadius: '20px',
                    background: 'linear-gradient(160deg, #161b2e 0%, #0d0d1a 100%)',
                  }}
                >
                  {/* PB initials circle */}
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(244,114,182,0.15) 100%)',
                      border: '1px solid rgba(139,92,246,0.35)'
                    }}
                  >
                    <span
                      className="text-5xl font-black tracking-tight"
                      style={{
                        background: 'linear-gradient(135deg, #f472b6, #8B5CF6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      PB
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase"
                    style={{ color: 'rgba(255,255,255,0.2)' }}>
                    Photo coming soon
                  </p>
                </div>
              </div>

              {/* Floating card: 2+ Years Coding */}
              <motion.div
                className="float-card absolute -bottom-4 -left-6 sm:-left-10 bg-white/90 dark:bg-[#161b2e]/90 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center">
                  {/* Code icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900 dark:text-white leading-none">3+ Years</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Coding</p>
                </div>
              </motion.div>

              {/* Floating card: 4 Projects Built */}
              <motion.div
                className="float-card-delayed absolute -top-4 -right-4 sm:-right-8 bg-white/90 dark:bg-[#161b2e]/90 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f472b6] to-[#ec4899] flex items-center justify-center">
                  {/* Rocket icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900 dark:text-white leading-none">10+ Projects</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Built</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Chat Section (full width) ── */}
      <motion.div
        className="w-full mt-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ChatUI />
      </motion.div>

      {/* ── Scroll to explore ── */}
      <motion.div
        className="mt-4 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
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
