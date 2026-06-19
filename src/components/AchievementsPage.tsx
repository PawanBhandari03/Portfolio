import { motion } from 'framer-motion';
import pandoraImg from '../assets/Pandora.png';
// Icons
const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);


interface Props {
  onBack: () => void;
}

export default function AchievementsPage({ onBack }: Props) {
  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-8 pb-16 relative z-10 flex flex-col min-h-screen">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="self-start text-sm font-medium transition-colors group flex items-center gap-2 z-20 mb-6 hover:text-[#8B5CF6]"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
        Back to home
      </button>

      <div className="flex flex-col items-center text-center gap-6 mt-0 mb-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-[#a78bfa] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 drop-shadow-[0_0_15px_rgba(167,139,250,0.4)]">
              Milestones & Victories
            </p>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
              My <span style={{ color: '#a855f7' }}>Achievements</span>
            </h1>
            <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium" style={{ color: 'var(--text-secondary)' }}>
              From code to peaks, every achievement tells a story of dedication.
            </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-10">
        
        {/* Card 1 - Wide Card */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 rounded-[32px] p-6 md:p-8 shadow-2xl backdrop-blur-md relative"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid rgba(255,215,0,0.3)', boxShadow: '0 0 20px rgba(255,215,0,0.3)' }}
        >
            <div className="w-full md:w-1/2 flex items-center justify-center rounded-[24px] overflow-hidden shadow-inner trophy-float" style={{ backgroundColor: 'var(--image-placeholder)' }}>
                <img src="/Techathon.jpeg" alt="Trophy" className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="w-full md:w-1/2 py-4 md:py-8 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight flex flex-wrap items-center gap-3" style={{ color: 'var(--text-primary)' }}>Best Solution Award — Techathon 3.0</h2>
                <p className="text-base md:text-lg leading-relaxed mb-8 opacity-90" style={{ color: 'var(--text-secondary)' }}>
                    Awarded Best Solution for Given Problem Statement at Techathon 3.0 (2026), organized by Innovation Foundation. Built a scalable tech solution under competition pressure with team Parastec. Received trophy and ₹10,000 cash prize for delivering the most innovative solution.
                </p>
                <div className="mt-auto flex">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold border shadow-sm tracking-wide badge-shimmer" style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
                        Techathon 3.0 · 2026 · ₹10,000 Prize
                    </span>
                </div>
            </div>
        </motion.div>


        {/* Grid for Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {/* Card 2 - Vertical Card (Pandora) */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col rounded-[32px] shadow-2xl backdrop-blur-md overflow-hidden relative w-full"
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
                <div className="flex items-center justify-center w-full min-h-[300px] md:min-h-[500px]" style={{ backgroundColor: '#1a1a2e' }}>
                    <img 
                        src={pandoraImg} 
                        alt="Pandora Hackathon" 
                        className="hover:scale-105 transition-transform duration-700 ease-in-out"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <div style={{ padding: '20px' }} className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-white mb-3 text-center">Pandora Hackathon — Best Solution</h2>
                    <p className="text-sm leading-relaxed opacity-90 text-center" style={{ color: 'var(--text-secondary)' }}>
                        Awarded Certificate of Appreciation for Best Solution in AI For Smart Cities theme at Pandora Hackathon, BSIOTR JSPM <br /> · Team Cyberpunks · Feb 2026
                    </p>
                </div>
            </motion.div>

            {/* Card 3 - Default Placeholder Card */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col rounded-[32px] shadow-2xl backdrop-blur-md overflow-hidden relative w-full"
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
                <div className="flex items-center justify-center w-full min-h-[300px] md:min-h-[500px]" style={{ backgroundColor: 'var(--image-placeholder)' }}>
                    <span className="text-sm font-bold uppercase tracking-widest opacity-60" style={{ color: 'var(--text-secondary)' }}>Image Placeholder</span>
                </div>
                <div style={{ padding: '20px' }} className="flex justify-center items-center">
                    <h2 className="text-2xl md:text-3xl font-bold m-0 text-center" style={{ color: 'var(--text-primary)' }}>Achievement Title</h2>
                </div>
            </motion.div>
        </div>

      </div>
    </main>
  );
}
