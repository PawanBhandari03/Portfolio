import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import newsImg1 from '../assets/News/Screenshot 2026-06-17 114210.png';
import newsImg2 from '../assets/News/Screenshot 2026-06-17 114222.png';
import newsImg3 from '../assets/News/Screenshot 2026-06-17 114235.png';
import newsImg4 from '../assets/News/Screenshot 2026-06-17 123323.png';
import newsImg5 from '../assets/News/Screenshot 2026-06-17 123434.png';

import carImg1 from '../assets/Car/Screenshot 2026-06-17 133132.png';
import carImg2 from '../assets/Car/Screenshot 2026-06-17 133154.png';
import carImg3 from '../assets/Car/Screenshot 2026-06-17 140514.png';
import carImg4 from '../assets/Car/Screenshot 2026-06-17 140520.png';

import movieImg1 from '../assets/movie/Screenshot 2026-06-17 163629.png';
import movieImg2 from '../assets/movie/Screenshot 2026-06-17 163634.png';
import movieImg3 from '../assets/movie/Screenshot 2026-06-17 163652.png';
import movieImg4 from '../assets/movie/Screenshot 2026-06-17 163657.png';
import movieImg5 from '../assets/movie/Screenshot 2026-06-17 163708.png';
import movieImg6 from '../assets/movie/Screenshot 2026-06-17 163713.png';
import movieImg7 from '../assets/movie/Screenshot 2026-06-17 164137.png';

type ProjectCategory = 'Full Stack' | 'Backend' | 'AI/ML' | 'Web App' | 'Java/Spring Boot';

interface Project {
  id: string;
  categories: ProjectCategory[];
  title: string;
  shortDesc: string;
  tags: string[];
  imageSrc: string;
  
  // Modal Details
  problem: string;
  solution: string;
  features: string[];
  outcomes: string[];
  githubUrl?: string;
  liveUrl?: string;
  pptUrl?: string;
  snapshots?: string[];
  architectureImg?: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    categories: ["Full Stack"],
    title: "EcoBounty",
    shortDesc: "Gamified sustainability platform rewarding eco-friendly actions through real-time tracking and engagement features.",
    tags: ["React (TS)", "Node.js", "Supabase", "REST APIs"],
    imageSrc: "/project_a.png",
    problem: "Individuals lack tangible incentives to track and maintain sustainable, eco-friendly daily habits.",
    solution: "A gamified platform that converts sustainable actions into points, leaderboards, and tangible rewards.",
    features: [
      "Real-time ledger and points calculation",
      "Interactive leaderboards and community challenges",
      "Secure OAuth2 authentication and user management",
      "Responsive data visualization dashboard"
    ],
    outcomes: [
      "Built a fully functional MVP within 3 weeks",
      "Integrated real-time database synchronization",
      "Achieved seamless cross-device responsiveness"
    ],
    githubUrl: "https://github.com/PawanBhandari03",
    liveUrl: "#"
  },
  {
    id: "02",
    categories: ["AI/ML"],
    title: "AgriGuard",
    shortDesc: "AI-powered plant disease detection system trained on custom dataset for early crop diagnosis.",
    tags: ["Python", "ML", "OpenCV", "Dataset Training"],
    imageSrc: "/project_b.png",
    problem: "Farmers suffer significant crop losses due to late or inaccurate identification of plant diseases.",
    solution: "A machine learning model integrated into an accessible interface for instant crop disease classification.",
    features: [
      "Custom CNN model trained on an extensive dataset",
      "Robust image preprocessing pipeline using OpenCV",
      "RESTful API serving model predictions",
      "Intuitive photo upload and diagnostic interface"
    ],
    outcomes: [
      "Achieved high validation accuracy on test data",
      "Reduced diagnostic turnaround from days to seconds",
      "Prototyped successfully for agricultural use cases"
    ],
    githubUrl: "https://github.com/PawanBhandari03"
  },
  {
    id: "03",
    categories: ["Full Stack"],
    title: "AgriTrace",
    shortDesc: "Blockchain-based supply chain transparency platform for agricultural produce using QR code traceability.",
    tags: ["React", "Web3", "Node.js", "Solidity", "GraphQL", "Polygon", "Docker"],
    imageSrc: "/project_a.png",
    problem: "Lack of transparency in agricultural supply chains leads to mistrust and unverified produce sourcing.",
    solution: "An immutable blockchain ledger that tracks produce from farm to table, verifiable via consumer QR codes.",
    features: [
      "Smart contracts deployed on Polygon network",
      "Automated QR code generation for supply batches",
      "GraphQL API for efficient blockchain querying",
      "Dockerized microservices architecture"
    ],
    outcomes: [
      "Ensured 100% data immutability for supply records",
      "Decreased data retrieval latency using GraphQL",
      "Presented successfully at tech symposiums"
    ],
    githubUrl: "https://github.com/PawanBhandari03",
    pptUrl: "#"
  },
  {
    id: "04",
    categories: ["Web App"],
    title: "PawFlix",
    shortDesc: "Movie discovery web app with dynamic data fetching, search and fully responsive UI.",
    tags: ["React", "JavaScript", "TMDB API", "Tailwind CSS", "Vite"],
    imageSrc: movieImg1,
    problem: "Movie lovers have no simple and fast way to discover, search and explore films across genres without dealing with bloated and slow streaming platforms. A lightweight movie discovery tool was missing.",
    solution: "Built a React-based movie discovery platform that integrates with the TMDB API to fetch real-time movie data. Users can browse trending films, search by title, and explore detailed information about any movie instantly.",
    features: [
      "Real-time movie data fetching using TMDB API with dynamic search",
      "Browse trending, popular and top-rated movies by category",
      "Movie detail view with ratings, overview, release date and genre",
      "Fully responsive UI built with Tailwind CSS for all screen sizes"
    ],
    outcomes: [
      "Successfully integrated a third-party REST API with real-time search and filtering capabilities",
      "Delivered a fast, lightweight alternative to bloated streaming platform UIs",
      "Deployed and live on Vercel with zero backend infrastructure"
    ],
    githubUrl: "https://github.com/PawanBhandari03/PawFlix",
    liveUrl: "https://movie-website-paw-wszk.vercel.app",
    snapshots: [movieImg3, movieImg7, movieImg4, movieImg5, movieImg6],
    architectureImg: movieImg2
  },
  {
    id: "05",
    categories: ["Backend", "Java/Spring Boot"],
    title: "Task Manager App",
    shortDesc: "Full-stack task management application with user authentication, role-based access and clean REST API design.",
    tags: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "React"],
    imageSrc: "/project_a.png",
    problem: "Generic task managers lack the robust enterprise-level security and role management developers need.",
    solution: "A highly secure, role-based task management system utilizing enterprise Java frameworks.",
    features: [
      "Robust Spring Security JWT implementation",
      "Role-based access control (Admin, User)",
      "RESTful endpoint design with strict validation",
      "Complex relational database mappings in PostgreSQL"
    ],
    outcomes: [
      "Achieved robust security against common vulnerabilities",
      "Maintained scalable and clean code architecture",
      "Integrated smoothly with a React frontend"
    ],
    githubUrl: "https://github.com/PawanBhandari03"
  },
  {
    id: "06",
    categories: ["Backend", "Java/Spring Boot"],
    title: "E-Commerce Application",
    shortDesc: "Buy and sell platform with product listings, cart, order management and secured endpoints.",
    tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "React"],
    imageSrc: "/project_b.png",
    problem: "Small businesses need a reliable, scalable, and secure platform to manage online transactions and inventory.",
    solution: "A comprehensive e-commerce backend handling everything from cart sessions to secure order processing.",
    features: [
      "Secure user registration and session management",
      "Stateful cart and complex order workflows",
      "Optimized MySQL queries for large catalogs",
      "Comprehensive exception handling and logging"
    ],
    outcomes: [
      "Processed complex transactional workflows accurately",
      "Ensured high availability and system reliability",
      "Delivered a complete, deployable enterprise product"
    ],
    githubUrl: "https://github.com/PawanBhandari03"
  },
  {
    id: "07",
    categories: ["Web App"],
    title: "EV-olution",
    shortDesc: "Premium electric vehicle showcase with cinematic hero slider, model listings and specs comparison.",
    tags: ["React", "JavaScript", "CSS", "Vite"],
    imageSrc: carImg1,
    problem: "Electric vehicle buyers struggle to find a single visually engaging platform to explore and compare premium EV models with detailed specifications.",
    solution: "Built a cinematic EV showcase website with a full-screen image and video slider, featured model cards with specs, and a clean contact section — designed to feel like a premium automotive brand website.",
    features: [
      "Full-screen cinematic image and video hero slider with dot navigation",
      "Featured EV model cards with range, acceleration and pricing specs",
      "Smooth scroll navigation with animated section transitions",
      "Clean contact form for inquiries"
    ],
    outcomes: [
      "Delivered a premium automotive brand experience using pure frontend tech",
      "Mastered full-screen video and image slider implementation",
      "Built a production-ready UI with cinematic design principles"
    ],
    githubUrl: "https://github.com/PawanBhandari03/EV-DashBoard",
    liveUrl: "https://ev-dash-board-v3nw.vercel.app",
    snapshots: [carImg2, carImg3, carImg4],
    architectureImg: carImg1
  },
  {
    id: "08",
    categories: ["Web App"],
    title: "News Magazine",
    shortDesc: "Real-time news aggregator with category filtering and live article previews.",
    tags: ["React", "JavaScript", "News API", "Vite", "CSS"],
    imageSrc: newsImg1,
    problem: "People waste time switching between multiple news websites to stay updated across different topics. There was no single clean interface to browse categorized real-time news efficiently.",
    solution: "Built a React-based news magazine that integrates with a live News API to fetch and display real-time articles. Users can filter by category and click through to read full articles from original sources.",
    features: [
      "Category-based filtering — Technology, Business, Health, Science, Sports, Entertainment",
      "Real-time article fetching using News API",
      "Clean magazine-style card grid layout with images, headlines and descriptions",
      "Direct Read More links opening original articles from real news sources"
    ],
    outcomes: [
      "Fully functional live news feed with zero backend required",
      "Smooth category switching with instant content updates",
      "Clean responsive grid layout for distraction-free reading experience"
    ],
    githubUrl: "https://github.com/PawanBhandari03/news-mag",
    liveUrl: "https://news-mag-rust.vercel.app",
    snapshots: [newsImg2, newsImg5, newsImg3, newsImg4],
    architectureImg: newsImg1
  },
  {
    id: "09",
    categories: ["AI/ML"],
    title: "AI Prediction Engine",
    shortDesc: "Experimental machine learning model for predictive analytics and data processing.",
    tags: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
    imageSrc: "/project_a.png",
    problem: "Businesses struggle to forecast trends based on large volumes of unstructured data.",
    solution: "A scalable predictive engine that processes historical data to identify future patterns.",
    features: [
      "Automated data preprocessing and cleaning",
      "Custom neural network architecture",
      "Real-time inference API via FastAPI",
      "Interactive data visualization dashboards"
    ],
    outcomes: [
      "Achieved 85% accuracy on forecasting test sets",
      "Reduced manual data analysis time by 40%",
      "Deployed successfully using Docker containers"
    ],
    githubUrl: "https://github.com/PawanBhandari03"
  }
];

const FILTERS = ['All', 'Full Stack', 'Backend', 'AI/ML', 'Web App', 'Java/Spring Boot'];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const filteredProjects = PROJECTS.filter(p => {
    if (activeFilter === 'All') return true;
    return p.categories.includes(activeFilter as ProjectCategory);
  });

  const getProjectCount = (filter: string) => {
    if (filter === 'All') return PROJECTS.length;
    return PROJECTS.filter(p => p.categories.includes(filter as ProjectCategory)).length;
  };

  return (
    <>
      <section id="projects" className="w-full max-w-7xl mx-auto py-24 px-6 relative z-10 flex flex-col gap-12">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center gap-4">
        <span className="text-xs font-bold text-[#8B5CF6] tracking-[0.3em] uppercase">
          PORTFOLIO
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b388ff] to-[#f472b6]">Projects</span>
        </h2>
        <p className="text-lg md:text-xl font-medium mt-2 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          A curated selection of projects that define my engineering journey.
        </p>
        
        {/* New Stats Bar */}
        <div className="mt-8 flex flex-row items-center justify-center gap-4 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>9</span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>Projects</span>
          </div>
          <div className="h-8 md:h-10 w-px" style={{ backgroundColor: 'var(--border-color)' }}></div>
          <div className="flex flex-col items-center">
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>5</span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>Domains</span>
          </div>
          <div className="h-8 md:h-10 w-px" style={{ backgroundColor: 'var(--border-color)' }}></div>
          <div className="flex flex-col items-center">
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>20+</span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>Technologies</span>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto md:whitespace-nowrap scrollbar-hide justify-center gap-2 mt-4 pb-2 md:pb-0">
        {FILTERS.map(f => {
          const count = getProjectCount(f);
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[13px] md:text-sm font-bold tracking-wide transition-all border shrink-0 ${
                activeFilter === f
                  ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                  : 'bg-transparent border-[color:var(--border-color)] text-[color:var(--text-secondary)] hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6]'
              }`}
            >
              {f}
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeFilter === f ? 'bg-white/20 text-white' : 'text-[color:var(--text-secondary)]'
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* CARD GRID */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1 * (Number(proj.id) % 3) }}
              onClick={() => setSelectedProject(proj)}
              className="group relative rounded-[24px] p-[2px] transition-all duration-300 cursor-pointer card-hover"
              style={{
                background: 'linear-gradient(270deg, #f472b6, #8B5CF6, #7C3AED, #f472b6)',
                backgroundSize: '400% 400%',
                animation: 'glow-rotate 4s ease infinite',
              }}
            >
              <div
                className="flex flex-col rounded-[22px] overflow-hidden h-full transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
              {/* Top Half: Image */}
              <div className="w-full h-[200px] md:h-64 relative overflow-hidden" style={{ backgroundColor: 'var(--image-placeholder)' }}>
                {proj.imageSrc && !proj.imageSrc.startsWith('/project_') ? (
                  <img src={proj.imageSrc} alt={proj.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                    <span className="text-xl md:text-2xl font-black tracking-widest uppercase px-6 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.2 }}>{proj.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--card-bg), transparent)' }} />
              </div>

              {/* Bottom Half: Content */}
              <div className="p-5 md:p-8 flex flex-col flex-1 relative">
                
                {/* Categories as plain text */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-black text-slate-300 dark:text-slate-700 group-hover:text-[#8B5CF6] transition-colors duration-300">
                    {proj.id}
                  </span>
                  <div className="flex flex-wrap gap-4">
                    {proj.categories.map(cat => (
                      <span key={cat} className="text-[11px] font-black tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold mb-3 group-hover:text-[#8B5CF6] transition-colors" style={{ color: 'var(--text-primary)' }}>{proj.title}</h3>
                <p className="text-sm leading-relaxed mb-6 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                  {proj.shortDesc}
                </p>

                <div className="w-full h-px mb-6 mt-auto" style={{ backgroundColor: 'var(--border-color)' }}></div>

                <div className="flex items-center justify-between">
                  {/* Tech Stack Tags (One line, no wrap) */}
                  <div className="flex items-center gap-4 overflow-hidden whitespace-nowrap">
                    {proj.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-black tracking-widest uppercase shrink-0" style={{ color: 'var(--text-primary)' }}>
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="text-[10px] font-black tracking-widest uppercase shrink-0" style={{ color: 'var(--text-primary)' }}>
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>
                  {/* Arrow Icon */}
                  <div className="ml-4 shrink-0">
                    <svg className="w-5 h-5 text-[#8B5CF6] transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* BOTTOM CTA */}
      <div className="mt-12 flex justify-center w-full">
        <a 
          href="https://github.com/PawanBhandari03" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-[#8B5CF6] transition-colors font-bold text-base tracking-wide group"
          style={{ color: 'var(--text-primary)' }}
        >
          Explore all projects on GitHub
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      </section>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/40 dark:bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 rounded-[24px] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 pb-2 relative shrink-0">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-20 w-8 h-8 border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="flex gap-2 mb-4 mt-2">
                  {selectedProject.categories.map(cat => {
                    let colorStyles = "text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30";
                    if (cat.includes("AI")) colorStyles = "text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30";
                    if (cat.includes("Full Stack")) colorStyles = "text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30";
                    if (cat.includes("Backend") || cat.includes("Java")) colorStyles = "text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30";
                    
                    return (
                      <span key={cat} className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-full ${colorStyles}`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        {cat}
                      </span>
                    );
                  })}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 leading-tight">{selectedProject.title}</h2>
                <p className="text-slate-600 dark:text-[#94a3b8] text-[15px] md:text-base font-medium max-w-3xl leading-relaxed">
                  {selectedProject.shortDesc}
                </p>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                
                {/* Top Tags Row */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-[11px] font-extrabold uppercase tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-7">
                  
                  {/* Architecture Diagram / Image */}
                  <div>
                    <h4 className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      {selectedProject.architectureImg ? 'PROJECT SHOWCASE' : 'ARCHITECTURE DIAGRAM'}
                    </h4>
                    <div className="w-full h-64 md:h-96 relative bg-slate-100 dark:bg-[#0a0f1e] overflow-hidden rounded-[8px] border border-slate-200 dark:border-white/10 flex items-center justify-center">
                      {selectedProject.architectureImg ? (
                        <img src={selectedProject.architectureImg} alt={`${selectedProject.title} Architecture/Showcase`} className="w-full h-full object-contain" />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-[#1e2330] dark:to-[#0a0f1e] opacity-70" />
                          <span className="text-lg font-black text-slate-900/5 dark:text-white/5 tracking-widest uppercase px-6 text-center relative z-10">{selectedProject.title} Architecture</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Two Columns: Problem / Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <h4 className="text-[13px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        THE PROBLEM
                      </h4>
                      <p className="text-slate-700 dark:text-white/85 leading-[1.7] text-[15px]">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="font-mono text-xl leading-none font-bold">{`>_`}</span>
                        THE SOLUTION
                      </h4>
                      <p className="text-slate-700 dark:text-white/85 leading-[1.7] text-[15px]">{selectedProject.solution}</p>
                    </div>
                  </div>

                  {/* Two Columns: Features / Outcomes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <h4 className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        KEY FEATURES
                      </h4>
                      <div className="space-y-4">
                        {selectedProject.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-4 px-5 py-4 bg-blue-50 dark:bg-[#1a1f35] border-l-[3px] border-[#3b82f6]">
                            <span className="w-2 h-2 rounded-full bg-[#3b82f6] mt-1.5 shrink-0"></span>
                            <p className="text-slate-800 dark:text-white text-[14px] leading-relaxed">{feat}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        OUTCOMES
                      </h4>
                      <div className="space-y-4">
                        {selectedProject.outcomes.map((out, i) => (
                          <div key={i} className="flex items-start gap-4 px-5 py-4 bg-emerald-50 dark:bg-[#0f1f1a] border-l-[3px] border-[#10b981]">
                            <svg className="w-5 h-5 text-[#10b981] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <p className="text-slate-800 dark:text-white text-[14px] font-bold leading-relaxed">{out}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Real World Snapshots */}
                  <div>
                    <h4 className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      REAL-WORLD SNAPSHOTS
                    </h4>
                    <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                      {selectedProject.snapshots ? (
                        selectedProject.snapshots.map((snap, i) => (
                          <div key={i} className="w-64 md:w-80 h-[160px] shrink-0 bg-slate-100 dark:bg-[#0e121e] rounded-lg border border-slate-200 dark:border-white/5 flex items-center justify-center overflow-hidden">
                            <img src={snap} alt={`Snapshot ${i + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))
                      ) : (
                        [1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-64 md:w-80 h-[160px] shrink-0 bg-slate-100 dark:bg-[#0e121e] rounded-lg border border-slate-200 dark:border-white/5 flex items-center justify-center overflow-hidden">
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-600 uppercase tracking-widest">Snapshot Placeholder</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>



                  </div>



                  {/* Modal Footer / Buttons */}
                  <div className="pt-8 mt-12 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-4 items-center justify-end">
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg font-bold text-[14px] bg-transparent border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        View on GitHub
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg font-bold text-[14px] bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition-all flex items-center gap-2">
                        Live Demo
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                    {selectedProject.pptUrl && (
                      <a href={selectedProject.pptUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg font-bold text-[14px] bg-orange-500 hover:bg-orange-400 text-white transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                        View PPT
                      </a>
                    )}
                  </div>

                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
