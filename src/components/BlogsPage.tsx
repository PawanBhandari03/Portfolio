import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SpeedDemonArticle from './blog/SpeedDemonArticle';
import DogFoodArticle from './blog/DogFoodArticle';
import heroThumb from '../assets/Blog/SpeedDemon/hero.png';
import dogfoodThumb from '../assets/Blog/DogFood/gallery.png';

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

type PostId = 'speed-demon' | 'dogfood';

const posts: { id: PostId; slug: string; title: string; deck: string; tag: string; date: string; thumb: string }[] = [
  {
    id: 'speed-demon',
    slug: 'speed-demon-2026',
    title: 'I Thought Faster C++ Was the Whole Game. The Scoring Board Disagreed.',
    deck: 'Four C++20 workloads, 116 commits, and several optimisations that only looked good on my laptop — Hackathon Raptors Speed Demon 2026.',
    tag: 'Performance Engineering',
    date: 'November 2026',
    thumb: heroThumb,
  },
  {
    id: 'dogfood',
    slug: 'building-broadsheet',
    title: 'Building Broadsheet: a hackathon platform in FastAPI, Postgres and Docker',
    deck: 'A self-hosted hackathon platform built with Claude Code as a pair programmer — judging fairness, a deployment bug that cost hours, and what I’d change.',
    tag: 'Full-Stack Engineering',
    date: 'October 2026',
    thumb: dogfoodThumb,
  },
];

// /blog/speed-demon-2026 -> that post's id, so a direct link opens straight into it.
function postIdFromPath(pathname: string): PostId | null {
  const slug = pathname.replace(/^\/blog\/?/, '').replace(/\/$/, '');
  return posts.find((p) => p.slug === slug)?.id ?? null;
}

export default function BlogsPage({ onBack }: Props) {
  const [openPost, setOpenPost] = useState<PostId | null>(() => postIdFromPath(window.location.pathname));

  // Keep in sync with the browser's back/forward buttons between the list and a post.
  useEffect(() => {
    const onPopState = () => {
      setOpenPost(postIdFromPath(window.location.pathname));
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const openPostById = (id: PostId) => {
    const post = posts.find((p) => p.id === id);
    setOpenPost(id);
    if (post) window.history.pushState({}, '', `/blog/${post.slug}`);
    window.scrollTo(0, 0);
  };
  const closePost = () => {
    setOpenPost(null);
    if (window.location.pathname !== '/blog') window.history.pushState({}, '', '/blog');
    window.scrollTo(0, 0);
  };

  if (openPost === 'speed-demon') {
    return <SpeedDemonArticle onBack={closePost} />;
  }
  if (openPost === 'dogfood') {
    return <DogFoodArticle onBack={closePost} />;
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
            Writing
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
            From the <span style={{ color: '#a855f7' }}>Blog</span>
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium" style={{ color: 'var(--text-secondary)' }}>
            Build logs, hackathon write-ups and the occasional post-mortem.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8">
        {posts.map((post, i) => (
          <motion.button
            key={post.id}
            onClick={() => openPostById(post.id)}
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
