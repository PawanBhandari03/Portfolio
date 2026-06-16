import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// --- Icons ---
const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-current">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-current text-white">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5.5 h-5.5 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#8B5CF6]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#8B5CF6]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

interface Props {
  onBack: () => void;
}

export default function MyLinksPage({ onBack }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [timeString, setTimeString] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init({ publicKey: publicKey });
    }
  }, []);

  // Live clock for Pune, India (IST)
  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTimeString(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess(false)
  
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          subject: subject,
          message: message
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      console.log('Success:', result)
      setSuccess(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (error: any) {
      console.error('EmailJS Error:', error)
      setError(error?.text || error?.message || 'Failed to send. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="w-full max-w-5xl mx-auto px-6 pt-8 pb-24 relative z-10 flex flex-col min-h-screen">
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="self-start text-sm font-medium transition-colors group flex items-center gap-2 z-20 mb-8 hover:text-[#8B5CF6]"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
        Back to home
      </button>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-4 mb-12"
      >
        <p className="text-[#8B5CF6] font-bold tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
          GET IN TOUCH
        </p>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f472b6] to-[#8B5CF6]">Connect</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-xl font-medium mt-2">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4 items-start">
        
        {/* LEFT COLUMN: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:col-span-7 p-6 md:p-8 rounded-[24px] shadow-2xl backdrop-blur-md"
          style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Pawan Bhandari"
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 focus:border-[#8B5CF6] transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 focus:border-[#8B5CF6] transition-all"
                required
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Project collaboration, Job opportunity, Just saying hi..."
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 focus:border-[#8B5CF6] transition-all"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Message</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Hi Pawan, I'd love to connect about..."
                rows={5}
                style={{ minHeight: '140px' }}
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 focus:border-[#8B5CF6] transition-all resize-none"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 dark:text-red-400 text-sm font-medium mt-1">
                {error}
              </p>
            )}

            {/* Submit Button & Success State */}
            <div className="mt-2">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-xl px-4 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    Message sent! I'll get back to you soon ✓
                  </motion.div>
                ) : (
                  <motion.button
                    key="submit-btn"
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-[#8B5CF6] to-[#f472b6] hover:brightness-110 active:scale-[0.98] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed ${isLoading ? 'animate-pulse' : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <SendIcon />
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        {/* RIGHT COLUMN: Links & Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:col-span-5 flex flex-col gap-6"
        >
          {/* Availability Card */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-5 py-3 rounded-xl flex items-center gap-3 w-fit shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-bold tracking-wide uppercase">
              Available for opportunities
            </span>
          </div>

          {/* Social Links Cards */}
          <div className="flex flex-col gap-4">
            
            {/* GitHub Card */}
            <motion.a
              href="https://github.com/PawanBhandari03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white dark:bg-[#13131f] border border-slate-200 dark:border-white/[0.08] shadow-sm rounded-xl p-5 flex items-center justify-between transition-all duration-300 group card-hover hover:border-[#8B5CF6]/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-zinc-800 text-slate-800 dark:text-white flex items-center justify-center shrink-0">
                  <GitHubIcon />
                </div>
                <div className="text-left">
                  <p className="text-slate-900 dark:text-white font-bold text-lg leading-tight">GitHub</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">github.com/PawanBhandari03</p>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-[#8B5CF6] transition-colors shrink-0">
                <ExternalLinkIcon />
              </span>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/pawan-singh-bhandari-5817ab307"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white dark:bg-[#13131f] border border-slate-200 dark:border-white/[0.08] shadow-sm rounded-xl p-5 flex items-center justify-between transition-all duration-300 group card-hover hover:border-[#8B5CF6]/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0077b5] flex items-center justify-center shrink-0">
                  <LinkedInIcon />
                </div>
                <div className="text-left">
                  <p className="text-slate-900 dark:text-white font-bold text-lg leading-tight">LinkedIn</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">in/pawan-singh-bhandari-5817ab307</p>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-[#8B5CF6] transition-colors shrink-0">
                <ExternalLinkIcon />
              </span>
            </motion.a>

            {/* Email Card */}
            <motion.div
              className="w-full bg-white dark:bg-[#13131f] border border-slate-200 dark:border-white/[0.08] shadow-sm rounded-xl p-5 flex items-center justify-between transition-all duration-300 group card-hover hover:border-[#8B5CF6]/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6] flex items-center justify-center shrink-0">
                  <MailIcon />
                </div>
                <div className="text-left">
                  <p className="text-slate-900 dark:text-white font-bold text-lg leading-tight">Email</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">pawansinghb07@gmail.com</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Location & Time Card */}
          <div
            className="p-6 rounded-xl flex flex-col gap-4 shadow-md backdrop-blur-md"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
          >
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center shrink-0">
                <PinIcon />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Location</p>
                <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Pune, India</p>
              </div>
            </div>

            {/* Clock */}
            <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: 'var(--border-color)' }}>
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center shrink-0">
                <ClockIcon />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Local Time (IST)</p>
                <p className="text-base font-bold text-[#8B5CF6]">{timeString || 'Loading...'}</p>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </main>
  );
}
