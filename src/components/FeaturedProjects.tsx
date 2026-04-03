import { motion } from 'framer-motion';

export default function FeaturedProjects() {
  const PROJECTS = [
    { id: "01", type: "BACKEND SYSTEM", title: "E-Commerce Architecture", description: "Highly resilient microservices architecture handling thousands of secure product transactions per minute.", color: "bg-orange-500", tags: ["JAVA", "SPRING BOOT", "DOCKER", "KUBERNETES"], image: "/project_a.png" },
    { id: "02", type: "FULLSTACK APP", title: "FinTech Dashboard", description: "Real-time financial tracking dashboard supporting high-frequency parsing and data analytics.", color: "bg-green-500", tags: ["REACT", "TYPESCRIPT", "TAILWIND", "REDIS"], image: "/project_b.png" },
    { id: "03", type: "API SERVICE", title: "Social Graph API", description: "High-performance RESTful API generating social connections and recommendation feeds.", color: "bg-pink-500", tags: ["NODE.JS", "GRAPHQL", "POSTGRESQL", "AWS"], image: "/project_a.png" },
    { id: "04", type: "DESKTOP APP", title: "Data Visualizer", description: "Desktop application visualizing complex JSON datasets using rapid hardware-accelerated rendering.", color: "bg-[#0ea5e9]", tags: ["PYTHON", "ELECTRON", "D3.JS", "OPENGL"], image: "/project_b.png" },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-6 relative z-10 flex flex-col gap-16">
      <div className="flex flex-col items-center text-center gap-4">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-[0.3em] uppercase">Portfolio</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b388ff] to-[#f472b6]">Projects</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium mt-2">
          A curated selection of projects that made me confident in building software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.id}
            className="flex flex-col gap-4 group"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
              <span>{proj.id}</span>
              <span className="h-px w-8 bg-slate-300 dark:bg-slate-700"></span>
              <span>{proj.type}</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">{proj.title}</h3>
            <div className={`w-full aspect-[4/3] rounded-[32px] p-8 relative overflow-hidden mt-2 ${proj.color} transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col`}>
              <p className="text-white text-lg md:text-xl font-semibold leading-relaxed relative z-10 max-w-[90%]">{proj.description}</p>
              <div className="mt-8 mx-auto w-[90%] h-[200px] bg-[#1e2330] rounded-t-xl border-t border-x border-white/20 shadow-2xl relative z-10 overflow-hidden group-hover:scale-105 transition-transform duration-700 origin-bottom">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0"></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/5 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
