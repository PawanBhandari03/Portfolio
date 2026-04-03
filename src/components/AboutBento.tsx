import { motion } from 'framer-motion';

export default function AboutBento() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

        {/* Name & Title */}
        <motion.div
          className="glass-card flex flex-col items-center justify-center p-8 text-center h-[200px]"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-widest uppercase leading-tight">
            Pawan<br />Bhandari
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs tracking-[0.2em] mt-4 uppercase font-semibold">Java Backend Developer</p>
        </motion.div>

        {/* Experience Scroll */}
        <motion.div
          className="glass-card p-6 md:col-span-2 flex flex-col justify-center h-[200px] overflow-hidden relative group"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-[#8B5CF6] font-bold z-10">Hover to Read More</div>
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-[#131826] to-transparent z-10 rounded-l-3xl"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-[#131826] to-transparent z-10 rounded-r-3xl"></div>
          <div className="flex gap-4 overflow-x-auto pb-2 pt-4 group-hover:-translate-x-4 transition-transform duration-700">
            {[
              { title: 'Projects', desc: 'Building full-stack web applications and microservices. Actively creating solutions for E-Commerce and FinTech sectors.' },
              { title: 'University', desc: 'Pursuing Computer Science. Focused on algorithms, data structures, and database management systems.' },
              { title: 'Open Source', desc: 'Passionate about contributing to Java and React communities. Learning from top developers globally.' },
            ].map(card => (
              <div key={card.title} className="min-w-[280px] bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-default">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">{card.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mindset */}
        <motion.div
          className="glass-card md:col-span-1 md:row-span-2 p-8 flex flex-col justify-between min-h-[500px] relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col gap-4 z-10 relative">
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">Mindset</h3>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Building more than software.</strong> My passions provide the <span className="text-[#8B5CF6] font-semibold">discipline and focus</span> I need to grow.
            </p>
          </div>
          <div className="w-[80%] mx-auto mt-8 bg-slate-100 dark:bg-[#1e2330] border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-xl transform group-hover:scale-105 transition-transform duration-500 relative z-10">
            <div className="w-full h-24 bg-cyan-900/30 rounded-xl mb-3"></div>
            <h5 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Morning Routine</h5>
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Code</span><span>2h 00m</span>
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-8 z-10 relative">
            <strong className="text-slate-800 dark:text-white">Mastering consistency</strong> is my path to technical excellence.
          </p>
        </motion.div>

        {/* Photo & Location */}
        <div className="md:col-span-1 md:row-span-2 flex flex-col gap-6">
          <motion.div
            className="glass-card flex-1 min-h-[350px] overflow-hidden relative group p-0"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
          </motion.div>
          <motion.div
            className="glass-card h-[126px] p-6 flex flex-col justify-end"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="border-l-2 border-[#8B5CF6] pl-3">
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-wide uppercase">India</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-1 tracking-widest">IST (GMT+5:30)</p>
            </div>
          </motion.div>
        </div>

        {/* Craft */}
        <motion.div
          className="glass-card md:col-span-1 md:row-span-2 p-8 flex flex-col justify-between min-h-[500px]"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">Craft</h3>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-medium">
              Building scalable <strong className="text-slate-900 dark:text-white">backends, APIs, and microservices</strong>.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              I understand what advantages modern tech architectures can provide, helping me advise on robust backend solutions that systems need.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {[['☕','Java','orange'],['🍃','Spring','green'],['⚛️','React','cyan'],['🐘','SQL','blue']].map(([icon,name]) => (
                <span key={name} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-1 rounded-md">
                  <span>{icon}</span> {name}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 dark:border-white/10 pt-6">
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Active learner & backend enthusiast. Feel free to invite me to collaborate.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              Open to collaboration & freelance
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
