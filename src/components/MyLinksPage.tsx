import { motion } from 'framer-motion';

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
  </svg>
);

const LINKS = [
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'github.com/PawanBhandari03',
    href: 'https://github.com/PawanBhandari03',
    iconBg: 'bg-gradient-to-br from-[#24292e] to-[#1a1f24]',
    borderColor: 'hover:border-white/20',
    glowColor: 'hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]',
    icon: <GitHubIcon />,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'in/pawan-singh-bhandari-5817ab307',
    href: 'https://www.linkedin.com/in/pawan-singh-bhandari-5817ab307',
    iconBg: 'bg-gradient-to-br from-[#0077b5] to-[#005f8e]',
    borderColor: 'hover:border-[#0077b5]/40',
    glowColor: 'hover:shadow-[0_0_40px_rgba(0,119,181,0.12)]',
    icon: <LinkedInIcon />,
  },
  {
    id: 'email',
    title: 'Email',
    subtitle: 'pawansinghb07@gmail.com',
    href: 'mailto:pawansinghb07@gmail.com?subject=Hey%20Pawan!',
    iconBg: 'bg-gradient-to-br from-[#06B6D4] to-[#3B82F6]',
    borderColor: 'hover:border-[#06B6D4]/40',
    glowColor: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]',
    icon: <MailIcon />,
  },
];

interface Props {
  onBack: () => void;
}

export default function MyLinksPage({ onBack }: Props) {
  return (
    <main className="w-full max-w-3xl mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col gap-16 min-h-screen">

      {/* Back Button */}
      <button
        onClick={onBack}
        className="self-start text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 text-sm font-medium transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
        Back to home
      </button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-4"
      >
        <p className="text-[#06B6D4] font-bold tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
          Connect With Me
        </p>
        <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          My{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Links
          </span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-xl font-medium">
          Find me across the web and social platforms
        </p>
      </motion.div>

      {/* Links List */}
      <div className="flex flex-col gap-4">
        {LINKS.map((link, idx) => (
          <motion.a
            key={link.id}
            href={link.href}
            target={link.id !== 'email' ? '_blank' : undefined}
            rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
            className={`
              flex items-center justify-between gap-4 p-5 md:p-6
              bg-white/70 dark:bg-[#0d111a]
              border border-slate-200/60 dark:border-white/[0.07]
              ${link.borderColor} ${link.glowColor}
              rounded-[20px] group transition-all duration-300 backdrop-blur-sm
            `}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-[14px] ${link.iconBg} flex items-center justify-center shadow-lg shrink-0`}>
                {link.icon}
              </div>
              <div className="text-left">
                <p className="text-slate-900 dark:text-white font-bold text-lg leading-tight">{link.title}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{link.subtitle}</p>
              </div>
            </div>
            <span className="text-slate-400 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white transition-colors shrink-0">
              <ExternalLinkIcon />
            </span>
          </motion.a>
        ))}
      </div>

    </main>
  );
}
