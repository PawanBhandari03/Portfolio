import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, limit } from 'firebase/firestore';

// --- Icons ---
const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

// --- Types ---
interface Message {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const AVATAR_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f97316', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#14b8a6', '#a855f7'];

function getColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string) {
  return name.trim().split(/\s+/).map(p => p[0]).join('').toUpperCase().slice(0, 2);
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? '1 mo ago' : `${months} mo ago`;
}

// --- Main Component ---
interface Props { onBack: () => void; }

export default function GuestbookPage({ onBack }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [nameError, setNameError] = useState('');
  const [textError, setTextError] = useState('');
  const [posting, setPosting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Fetch initial messages + subscribe to real-time
  useEffect(() => {
    let isMounted = true;

    const q = query(
      collection(db, 'guestbook'),
      orderBy('created_at', 'desc'),
      limit(100)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!isMounted) return;
      
      const newMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];

      setMessages(newMessages);
      setLoading(false);
    }, (err) => {
      if (!isMounted) return;
      console.error('Firebase Error:', err);
      setError('Could not load messages. Please check your Firebase setup and database rules.');
      setLoading(false);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  async function handlePost() {
    let valid = true;
    if (!name.trim()) { setNameError('Please enter your name.'); valid = false; } else setNameError('');
    if (!text.trim()) { setTextError('Message cannot be empty.'); valid = false; } else setTextError('');
    if (text.trim().length < 3) { setTextError('Message is too short.'); valid = false; }
    if (!valid) return;

    setPosting(true);
    
    try {
      await addDoc(collection(db, 'guestbook'), {
        name: name.trim(),
        message: text.trim(),
        created_at: new Date().toISOString()
      });

      setName('');
      setText('');
      setShowForm(false);
      setSuccessMsg('Your message has been pinned! 📌');
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) {
      console.error('Firebase Insert Error:', err);
      setTextError('Failed to post. Please try again.');
    } finally {
      setPosting(false);
    }
  }

  return (
    <main className="w-full max-w-3xl mx-auto px-6 pt-8 pb-24 relative z-10 flex flex-col gap-10 min-h-screen">

      {/* Back */}
      <button onClick={onBack} className="self-start text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 text-sm font-medium transition-colors group">
        <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
        Back to home
      </button>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center gap-4">
        <p className="text-[#8B5CF6] font-bold tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
          The Community Wall
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Leave Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Mark</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-xl font-medium">
          Share your thoughts, feedback, or just say hi!
        </p>
      </motion.div>

      {/* Post Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/60 dark:bg-[#0d111a]/80 border border-slate-200/60 dark:border-white/10 rounded-[24px] p-7 backdrop-blur-md shadow-xl"
      >
        {/* Success toast */}
        <AnimatePresence>
          {successMsg && (
            <motion.div
              key="toast"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl px-4 py-3 text-sm font-medium mb-5"
            >
              ✅ {successMsg}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div key="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 text-center">
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                {messages.length > 0
                  ? `${messages.length} message${messages.length !== 1 ? 's' : ''} on the wall. Add yours!`
                  : 'Be the first to leave a message!'}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <SendIcon />
                Leave a Message
              </button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-slate-900 dark:text-white font-bold text-lg">Your message</h3>
                <button
                  onClick={() => { setShowForm(false); setNameError(''); setTextError(''); }}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors font-medium"
                >Cancel</button>
              </div>

              {/* Name field */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => { setName(e.target.value); setNameError(''); }}
                  placeholder="e.g. Pawan Bhandari"
                  maxLength={50}
                  autoFocus
                  className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                />
                {nameError && <p className="text-red-400 text-xs mt-0.5">{nameError}</p>}
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Message</label>
                <textarea
                  value={text}
                  onChange={e => { setText(e.target.value); setTextError(''); }}
                  placeholder="Share your thoughts, feedback, or just say hi!"
                  maxLength={500}
                  rows={3}
                  className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                />
                <div className="flex justify-between items-center mt-0.5">
                  {textError ? <p className="text-red-400 text-xs">{textError}</p> : <span />}
                  <p className="text-slate-400 text-xs ml-auto">{text.length}/500</p>
                </div>
              </div>

              <button
                onClick={handlePost}
                disabled={posting}
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                {posting ? (
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : <SendIcon />}
                {posting ? 'Posting...' : 'Pin My Message 📌'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Messages Wall */}
      <div className="flex flex-col gap-3">
        {loading && (
          <div className="flex flex-col gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white/40 dark:bg-[#0d111a]/50 border border-slate-200/40 dark:border-white/[0.05] rounded-[20px] animate-pulse">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 shrink-0" />
                <div className="flex-1 flex flex-col gap-2 pt-1">
                  <div className="h-3 w-32 bg-slate-200 dark:bg-white/10 rounded-full" />
                  <div className="h-3 w-full bg-slate-200 dark:bg-white/[0.06] rounded-full" />
                  <div className="h-3 w-2/3 bg-slate-200 dark:bg-white/[0.06] rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-10 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-2xl px-6">
            <p className="font-bold mb-1">⚠️ Could not connect</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && messages.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-500">
            <p className="text-4xl mb-3">✍️</p>
            <p className="font-semibold text-lg">No messages yet</p>
            <p className="text-sm mt-1">Be the first to leave a mark!</p>
          </div>
        )}

        <AnimatePresence>
          {!loading && !error && messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx < 8 ? idx * 0.04 : 0 }}
              className="flex items-start gap-4 p-5 bg-white/60 dark:bg-[#0d111a]/70 border border-slate-200/60 dark:border-white/[0.07] rounded-[20px] backdrop-blur-sm hover:border-slate-300 dark:hover:border-white/15 transition-all"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-md"
                style={{ backgroundColor: getColor(msg.name) }}
              >
                {getInitials(msg.name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-slate-900 dark:text-white font-bold text-sm">{msg.name}</span>
                  <span className="text-slate-400 dark:text-slate-600 text-xs">{timeAgo(msg.created_at)}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 leading-relaxed break-words">{msg.message}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </main>
  );
}
