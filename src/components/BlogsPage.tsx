import { useState } from 'react';
import { motion } from 'framer-motion';
import SpeedDemonArticle from './blog/SpeedDemonArticle';
import heroThumb from '../assets/Blog/SpeedDemon/hero.png';

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

interface Props {
  onBack: () => void;
}

type PostId = 'speed-demon';

const posts: { id: PostId; title: string; deck: string; tag: string; date: string; thumb: string }[] = [
  {
    id: 'speed-demon',
    title: 'I Thought Faster C++ Was the Whole Game. The Scoring Board Disagreed.',
    deck: 'Four C++20 workloads, 116 commits, and several optimisations that only looked good on my laptop — Hackathon Raptors Speed Demon 2026.',
    tag: 'Performance Engineering',
    date: 'November 2026',
    thumb: heroThumb,
  },
];

export default function BlogsPage({ onBack }: Props) {
  const [openPost, setOpenPost] = useState<PostId | null>(null);

  if (openPost === 'speed-demon') {
    return <SpeedDemonArticle onBack={() => setOpenPost(null)} />;
  }

  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-8 pb-16 relative z-10 flex flex-col min-h-screen">
      <button
        onClick={onBack}
        className="self-start text-sm font-medium transition-colors group flex items-center gap-2 z-20 mb-6 hover:text-[#8B5CF6]"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
        Back to home
      </button>

      <div className="flex flex-col items-center text-center gap-6 mt-0 mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[#a78bfa] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 drop-shadow-[0_0_15px_rgba(167,139,250,0.4)]">
            Engineering Notes
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
            What Actually <span style={{ color: '#a855f7' }}>Happened</span>
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium" style={{ color: 'var(--text-secondary)' }}>
            Hackathon write-ups and build logs that show what I measured, what broke, and what I reverted &mdash; not just what shipped.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8">
        {posts.map((post, i) => (
          <motion.button
            key={post.id}
            onClick={() => setOpenPost(post.id)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-left flex flex-col md:flex-row items-stretch gap-6 md:gap-8 rounded-[28px] p-5 md:p-6 shadow-xl backdrop-blur-md card-hover group"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
          >
            <div className="w-full md:w-72 flex-shrink-0 rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--image-placeholder)' }}>
              <img src={post.thumb} alt="" className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="flex-1 flex flex-col justify-center py-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(139,92,246,0.12)', color: '#8B5CF6' }}>
                  {post.tag}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{post.date}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>{post.title}</h2>
              <p className="text-sm md:text-base mb-4" style={{ color: 'var(--text-secondary)' }}>{post.deck}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all" style={{ color: '#8B5CF6' }}>
                Read the write-up <ArrowRight />
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </main>
  );
}
