import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import pandoraImg from '../assets/Pandora.png';
import mongoCert from '../assets/Course certificate/mongo.png';
import ibmCert from '../assets/Course certificate/IBM.png';
import azureCert from '../assets/Course certificate/AZURE.png';
import udemyCert from '../assets/Course certificate/udemy.png';
import riftImg from '../assets/rift_Hackathon.jpeg';

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
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
            <div 
              className="w-full md:w-1/2 flex items-center justify-center rounded-[24px] overflow-hidden shadow-inner trophy-float" 
              role="button"
              style={{ backgroundColor: 'var(--image-placeholder)' }}
              onClick={() => setSelectedCert("/Techathon.jpeg")}
            >
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
                <div 
                  className="flex items-center justify-center w-full" 
                  role="button"
                  style={{ backgroundColor: '#1a1a2e' }}
                  onClick={() => setSelectedCert(pandoraImg)}
                >
                    <img 
                        src={pandoraImg} 
                        alt="Pandora Hackathon" 
                        className="w-full h-[250px] md:h-[350px] hover:scale-105 transition-transform duration-700 ease-in-out"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div style={{ padding: '30px' }} className="flex flex-col justify-center items-center h-full">
                    <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Pandora Hackathon — Best Solution</h2>
                    <p className="text-sm md:text-base leading-relaxed opacity-90 text-center mb-6" style={{ color: 'var(--text-secondary)' }}>
                        Awarded Certificate of Appreciation for Best Solution in AI For Smart Cities theme at Pandora Hackathon, BSIOTR JSPM.
                    </p>
                    <div className="mt-auto flex justify-center">
                        <span className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-bold border shadow-sm tracking-wide badge-shimmer" style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
                            Team Cyberpunks · Feb 2026
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Card 3 - RIFT Hackathon */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col rounded-[32px] shadow-2xl backdrop-blur-md overflow-hidden relative w-full"
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
                <div 
                  className="flex items-center justify-center w-full" 
                  role="button"
                  style={{ backgroundColor: '#1a1a2e' }}
                  onClick={() => setSelectedCert(riftImg)}
                >
                    <img 
                        src={riftImg} 
                        alt="RIFT Hackathon Certificate" 
                        className="w-full h-[250px] md:h-[350px] hover:scale-105 transition-transform duration-700 ease-in-out"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div style={{ padding: '30px' }} className="flex flex-col justify-center items-center h-full">
                    <h2 className="text-2xl font-bold m-0 text-center mb-4" style={{ color: 'var(--text-primary)' }}>RIFT Hackathon 2026 — Top 11</h2>
                    <p className="text-sm md:text-base leading-relaxed opacity-90 text-center mb-6" style={{ color: 'var(--text-secondary)' }}>
                        Ranked in the Top 11 teams at RIFT Hackathon 2026, organized by Vesdiam Technologies in collaboration with FalconSphere.
                    </p>
                    <div className="mt-auto flex flex-col items-center gap-3 w-full">
                        <span className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-bold border shadow-sm tracking-wide badge-shimmer text-center" style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
                            RIFT 2026 · Vesdiam Technologies · July 2026
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Divider line between achievement cards and certifications */}
        <div 
          className="w-full h-[1px]" 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.06)', 
            margin: '48px 0' 
          }} 
        />

        {/* Certifications Section */}
        <section className="w-full flex flex-col gap-8">
          
          {/* Section Header */}
          <div className="flex flex-col gap-2">
            <span className="text-[#a855f7] text-xs font-bold tracking-[0.2em] uppercase">
              CONTINUOUS LEARNING
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
              Courses & <span style={{ color: '#a855f7' }}>Certifications</span>
            </h2>
            <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-secondary)' }}>
              Always learning, always building.
            </p>
          </div>

          {/* Certification Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            
            {/* Card 1: Spring Boot (In Progress, leave empty) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed] hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--card-bg)', 
                border: '1px solid var(--border-color)',
              }}
            >
              {/* Image Area */}
              <div 
                className="w-full h-[200px] md:h-[260px] bg-[#16162a] flex items-center justify-center select-none overflow-hidden"
                role="button"
                onClick={() => setSelectedCert(udemyCert)}
              >
                <img 
                  src={udemyCert} 
                  alt="Spring Boot & Hibernate Fundamentals" 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Card Details */}
              <div className="flex flex-col gap-1.5 p-5">
                <h4 className="text-[15px] font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  Spring Boot & Hibernate Fundamentals
                </h4>
                <p className="text-[12px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Udemy • Chad Darby
                </p>
              </div>
            </motion.div>

            {/* Card 2: MongoDB (Completed, mongo.png) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed] hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--card-bg)', 
                border: '1px solid var(--border-color)',
              }}
            >
              {/* Image Area */}
              <div 
                className="w-full h-[200px] md:h-[260px] bg-[#16162a] flex items-center justify-center select-none overflow-hidden"
                role="button"
                onClick={() => setSelectedCert(mongoCert)}
              >
                <img 
                  src={mongoCert} 
                  alt="MongoDB for Developers" 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Card Details */}
              <div className="flex flex-col gap-1.5 p-5">
                <h4 className="text-[15px] font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  MongoDB for Developers
                </h4>
                <p className="text-[12px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                  MongoDB University
                </p>
              </div>
            </motion.div>

            {/* Card 3: IBM (Completed, IBM.png) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed] hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--card-bg)', 
                border: '1px solid var(--border-color)',
              }}
            >
              {/* Image Area */}
              <div 
                className="w-full h-[200px] md:h-[260px] bg-[#16162a] flex items-center justify-center select-none overflow-hidden"
                role="button"
                onClick={() => setSelectedCert(ibmCert)}
              >
                <img 
                  src={ibmCert} 
                  alt="IBM SkillsBuild Certification" 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Card Details */}
              <div className="flex flex-col gap-1.5 p-5">
                <h4 className="text-[15px] font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  IBM SkillsBuild Certification
                </h4>
                <p className="text-[12px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                  IBM SkillsBuild
                </p>
              </div>
            </motion.div>

            {/* Card 4: Azure (Completed, AZURE.png) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed] hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--card-bg)', 
                border: '1px solid var(--border-color)',
              }}
            >
              {/* Image Area */}
              <div 
                className="w-full h-[200px] md:h-[260px] bg-[#16162a] flex items-center justify-center select-none overflow-hidden"
                role="button"
                onClick={() => setSelectedCert(azureCert)}
              >
                <img 
                  src={azureCert} 
                  alt="Azure Fundamentals – SkillUp" 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Card Details */}
              <div className="flex flex-col gap-1.5 p-5">
                <h4 className="text-[15px] font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  Azure Fundamentals – SkillUp
                </h4>
                <p className="text-[12px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Microsoft × Simplilearn SkillUp
                </p>
              </div>
            </motion.div>

          </div>

        </section>

      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert}
                alt="Certificate Full View"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 sm:-right-10 text-white hover:text-gray-300 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
