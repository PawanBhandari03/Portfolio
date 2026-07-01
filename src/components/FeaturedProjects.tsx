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
import movieImg3 from '../assets/movie/Screenshot 2026-06-17 163652.png';
import movieImg4 from '../assets/movie/Screenshot 2026-06-17 163657.png';
import movieImg5 from '../assets/movie/Screenshot 2026-06-17 163708.png';
import movieImg6 from '../assets/movie/Screenshot 2026-06-17 163713.png';
import movieImg7 from '../assets/movie/Screenshot 2026-06-17 164137.png';

import taskImg1 from '../assets/Task/Screenshot 2026-06-18 162500.png';
import taskImg2 from '../assets/Task/Screenshot 2026-06-18 162509.png';
import taskImg3 from '../assets/Task/Screenshot 2026-06-18 162530.png';
import taskImg4 from '../assets/Task/Screenshot 2026-06-18 162536.png';
import taskImg5 from '../assets/Task/Screenshot 2026-06-18 162542.png';

import ecomImg1 from '../assets/Ecom/Screenshot 2026-06-18 172256.png';
import ecomImg2 from '../assets/Ecom/Screenshot 2026-06-18 172303.png';
import ecomImg3 from '../assets/Ecom/Screenshot 2026-06-18 172312.png';
import ecomImg4 from '../assets/Ecom/Screenshot 2026-06-18 172316.png';
import ecomImg5 from '../assets/Ecom/Screenshot 2026-06-18 172336.png';
import agriTracePdf from '../assets/Agritrace/AgriTrace.pdf';

// EcoBounty Images
import ecoImg1 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM.jpeg';
import ecoImg2 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (1).jpeg';
import ecoImg3 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (2).jpeg';
import ecoImg4 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (3).jpeg';
import ecoImg5 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (4).jpeg';
import ecoImg6 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (5).jpeg';
import ecoImg7 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (6).jpeg';
import ecoImg8 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (7).jpeg';

// AgriGuard Images
import agriImg1 from '../assets/Agriguard/3729c54a-e5f6-4c5e-87d4-00f3162d8902.jfif';
import agriImg2 from '../assets/Agriguard/c15c2509-766c-49b3-bd6b-266e86fd62db.jfif';
import agriImg3 from '../assets/Agriguard/c7a9b1dd-1a2b-4aa8-bea4-875452913298.jfif';
import agriImg4 from '../assets/Agriguard/c7d6e042-ccb4-49bd-81dd-248a5107d8a5.jfif';
import agriImg5 from '../assets/Agriguard/e76665bf-a6bf-4998-bc91-fdad0581ab44.jfif';

// AgriTrace Images
import traceImg1 from '../assets/Agritrace/WhatsApp Image 2026-06-19 at 1.32.02 PM.jpeg';
import traceImg2 from '../assets/Agritrace/WhatsApp Image 2026-06-19 at 1.32.02 PM (1).jpeg';
import traceImg3 from '../assets/Agritrace/WhatsApp Image 2026-06-19 at 1.32.02 PM (2).jpeg';
import traceImg4 from '../assets/Agritrace/WhatsApp Image 2026-06-19 at 1.32.02 PM (3).jpeg';

// New Project Board & Architecture Images
import ecoArch from '../assets/ECObounty/arch.jpeg';
import agriArch from '../assets/Agriguard/arch.jpeg';
import traceMain from '../assets/Agritrace/main (1).jpeg';
import traceArch from '../assets/Agritrace/arch.jpeg';
import ecomArch from '../assets/Ecom/arch.jpeg';
import taskArch from '../assets/Task/arch.jpeg';

type ProjectCategory = 'Full Stack' | 'Backend' | 'AI/ML' | 'Web App' | 'Java/Spring Boot';

interface Project {
  id: string;
  categories: ProjectCategory[];
  displayCategory?: string;
  title: string;
  shortDesc: string;
  modalSubtitle?: string;
  tags: string[];
  modalTags?: string[];
  imageSrc: string;
  
  // Modal Details
  problem: string;
  solution: string;
  features: string[];
  outcomes: string[];
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  liveUrl?: string;
  liveUrlText?: string;
  pptUrl?: string;
  snapshots?: string[];
  architectureImg?: string;
}

const PROJECTS: Project[] = [
  {

    id: "01",
    categories: ["Full Stack"],
    displayCategory: "FULL STACK",
    title: "EcoBounty",
    shortDesc: "Gamified environmental cleanup platform with bounties, real-time mapping, XP rewards and blockchain EcoCoin tokens.",
    modalSubtitle: "Community-powered environmental cleanup platform using bounties, gamification, real-time mapping and blockchain rewards.",
    tags: ["Next.js", "TypeScript", "Supabase", "Solidity", "Web3.js", "Leaflet Maps", "Tailwind CSS", "PWA"],
    imageSrc: ecoArch,
    problem: "Environmental reporting systems suffer from slow government response, lack of accountability, poor visibility and zero incentive for citizens to act. Issues get reported but never resolved due to low community participation and no reward mechanism.",
    solution: "Built a gamified civic-tech platform where users create geo-tagged environmental bounties with photos and GPS. Community hunters accept, clean and verify locations. Verified completions earn XP points and EcoCoin (EOC) — an ERC-20 token on Ethereum Sepolia testnet — turning environmental action into a rewarding community experience.",
    features: [
      "Bounty system — users report issues with before photos and GPS coordinates, hunters accept and submit after photos for validation",
      "Real-time interactive map using Leaflet and OpenStreetMap showing Open, In Progress and Completed bounties with filters and search",
      "Web3 integration — EcoCoin (EOC) ERC-20 token on Ethereum Sepolia testnet, MetaMask wallet connection and XP-to-token redemption",
      "Smart SOS AI system — one-tap emergency reporting using camera, voice-to-text, AI issue classification and auto complaint routing to government departments"
    ],
    outcomes: [
      "Built a complete full-stack civic-tech platform combining geolocation, real-time database, PWA, gamification and blockchain in one system",
      "Implemented ERC-20 smart contract on Ethereum Sepolia with MetaMask wallet integration and XP-to-token conversion flow",
      "Designed mobile-first PWA with real-time Supabase updates, bottom navigation and native-app-like experience without Play Store"
    ],
    githubUrl: "https://github.com/Anicantcode/EcoBountyy",
    liveUrl: "https://ecobountyapp.netlify.app/",
    snapshots: [ecoImg1, ecoImg2, ecoImg3, ecoImg4, ecoImg5, ecoImg6, ecoImg7, ecoImg8],
    architectureImg: ecoArch
  },
  {
    id: "02",
    categories: ["AI/ML"],
    displayCategory: "AI SYSTEM",
    title: "AgriGuard",
    shortDesc: "AI-powered plant disease detection with Explainable AI, Grad-CAM heatmaps, severity scoring and treatment recommendations.",
    modalSubtitle: "AI-powered plant disease detection with Explainable AI, severity assessment and treatment recommendations.",
    tags: ["Python", "PyTorch", "FastAPI", "OpenCV", "Grad-CAM", "React", "REST API"],
    imageSrc: agriArch,
    problem: "Globally 20-40% of agricultural production is lost due to plant diseases. Farmers struggle to identify diseases early, lack expert consultation, and cannot understand or trust AI predictions. Delayed diagnosis leads to massive crop damage and financial loss.",
    solution: "Built an AI-powered plant disease triage platform using EfficientNetV2-S trained on 54,000+ PlantVillage images. The system detects disease from leaf photos, generates Grad-CAM heatmaps showing exactly which leaf regions are infected, scores severity, and provides treatment recommendations — all in real time.",
    features: [
      "EfficientNetV2-S model trained on 54,000+ images across 38 plant disease categories with high validation accuracy",
      "Explainable AI using Grad-CAM — visually highlights exactly which regions of the leaf influenced the prediction",
      "Severity scoring system — calculates infection spread percentage: Low (0-20%), Moderate (20-50%), Severe (50-100%)",
      "Treatment recommendation engine — provides disease-specific fungicide, pesticide and agricultural guidance after diagnosis"
    ],
    outcomes: [
      "Achieved high validation accuracy on PlantVillage dataset across 38 disease and healthy plant categories",
      "Implemented Explainable AI with Grad-CAM — first plant disease system to show visual evidence of prediction reasoning",
      "Built edge-ready architecture using EfficientNetV2-S suitable for future deployment on smartphones and IoT devices"
    ],
    githubUrl: "https://github.com/Anicantcode/Cyberpunks-Agriguard",
    liveUrl: "https://cyberpunks-agriguard.vercel.app/",
    snapshots: [agriImg1, agriImg2, agriImg3, agriImg4, agriImg5],
    architectureImg: agriArch
  },
  {
    id: "03",
    categories: ["Full Stack"],
    displayCategory: "FULL STACK · BLOCKCHAIN",
    title: "AgriTrace",
    shortDesc: "Blockchain-powered agricultural supply chain transparency platform with QR traceability, smart contracts and farm-to-fork tracking. Built for Smart India Hackathon 2025.",
    modalSubtitle: "Blockchain-powered farm-to-fork supply chain transparency with QR traceability, smart contracts and decentralized storage.",
    tags: ["React", "Solidity", "Node.js", "GraphQL", "Ethereum", "Polygon", "IPFS", "Docker"],
    imageSrc: traceMain,
    problem: "The agricultural supply chain suffers from lack of transparency, product fraud, farmer exploitation by middlemen who capture 70-80% of product value, and consumer inability to verify food origin. Food fraud alone causes $40 billion in annual losses worldwide.",
    solution: "Built a decentralized supply chain platform where every agricultural product batch receives a unique QR code linked to an immutable blockchain record. The system tracks the complete journey from farmer to consumer through Ethereum/Polygon smart contracts, automates payments, and allows consumers to verify product authenticity by scanning the QR code.",
    features: [
      "Blockchain traceability — every supply chain transaction permanently recorded on Ethereum and Polygon, tamper-proof and transparent",
      "QR code verification — consumers scan product QR to instantly view farm origin, transport history, certifications and authenticity",
      "Smart contract automation — automatically transfers ownership, releases farmer payments on delivery and validates certifications",
      "IPFS decentralized storage — farm images, organic certificates and quality reports stored on IPFS to reduce blockchain costs"
    ],
    outcomes: [
      "Selected for Smart India Hackathon 2025 college round — Problem Statement ID 25045, Theme: Agriculture FoodTech & Rural Development",
      "Designed a scalable architecture combining Ethereum, Polygon and Hyperledger Fabric for enterprise-grade supply chain operations",
      "Demonstrated potential to increase farmer income by 20-30% and reduce food fraud by 40-50% through blockchain transparency"
    ],
    pptUrl: agriTracePdf,
    snapshots: [traceArch, traceImg1, traceImg2, traceImg3, traceImg4],
    architectureImg: traceMain
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
    snapshots: [movieImg1, movieImg3, movieImg7, movieImg4, movieImg5, movieImg6],
    architectureImg: movieImg1
  },
  {
    id: "05",
    categories: ["Backend", "Java/Spring Boot"],
    displayCategory: "JAVA · BACKEND",
    title: "Task Manager App",
    shortDesc: "Full-stack task management application with Spring Boot REST API, React TypeScript frontend, role-based task organization and Docker deployment.",
    modalSubtitle: "Full-stack task management with Spring Boot REST API, TypeScript frontend and Docker deployment.",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "Docker", "Tailwind CSS"],
    modalTags: ["Java", "Spring Boot", "Spring MVC", "React", "TypeScript", "Tailwind CSS", "Docker", "Maven"],
    problem: "Managing multiple tasks across different projects becomes chaotic without a structured system. Most basic to-do apps lack proper task organization, priority management, and a scalable backend architecture.",
    solution: "Built a full-stack task management application with a Spring Boot REST API backend and React TypeScript frontend. Tasks are organized into Task Lists with priority and status tracking, all containerized using Docker for easy deployment.",
    features: [
      "Spring Boot REST API with clean layered architecture — Controllers, Services, Repositories and DTOs",
      "Task Lists with nested Tasks — each task has Priority (High/Medium/Low) and Status (Todo/InProgress/Done) tracking",
      "React TypeScript frontend with dedicated screens for creating, updating and managing task lists and tasks",
      "Dockerized with docker-compose for one-command local setup and deployment"
    ],
    outcomes: [
      "Implemented clean REST API design with proper DTO pattern, entity mapping and global exception handling",
      "Learned full-stack integration between Spring Boot backend and React TypeScript frontend with proper domain modeling",
      "Containerized entire application using Docker and docker-compose for production-ready deployment"
    ],
    githubUrl: "https://github.com/PawanBhandari03/Task-Manger-App",
    imageSrc: taskArch,
    snapshots: [taskImg1, taskImg2, taskImg3, taskImg4, taskImg5],
    architectureImg: taskArch
  },
  {
    id: "06",
    categories: ["Backend", "Java/Spring Boot"],
    displayCategory: "JAVA · BACKEND",
    title: "E-Commerce Application",
    shortDesc: "Full-stack e-commerce platform with Spring Boot REST API, product management, image upload, cart support and search filtering.",
    modalSubtitle: "Full-stack e-commerce platform with Spring Boot REST API, product management, cart support and search filtering.",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "React", "H2 Database", "REST APIs", "Maven"],
    imageSrc: ecomArch,
    problem: "Building a scalable e-commerce backend requires handling complex operations like product inventory, image management, cart functionality and search filtering — all through clean, well-structured REST APIs that a frontend can consume reliably.",
    solution: "Built a full-stack e-commerce application with a Spring Boot backend providing complete REST APIs for product management, image upload, stock tracking and cart operations. The React frontend consumes these APIs to deliver a complete shopping experience.",
    features: [
      "Complete Product CRUD — create, read, update and delete products with image upload support",
      "Search and filter APIs — find products by name, category or availability with dynamic queries",
      "Cart support — add products to cart, manage quantities and handle stock availability checks",
      "Spring Data JPA with H2 database — clean repository pattern with entity relationships"
    ],
    outcomes: [
      "Built a production-ready REST API architecture following Spring Boot best practices with layered design",
      "Implemented file handling for product image upload and retrieval within a Spring Boot application",
      "Delivered a complete full-stack e-commerce solution integrating React frontend with Spring Boot backend"
    ],
    githubUrl: "https://github.com/PawanBhandari03/E-Commerce-Website",
    snapshots: [ecomImg1, ecomImg2, ecomImg3, ecomImg4, ecomImg5],
    architectureImg: ecomArch
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
    snapshots: [carImg1, carImg2, carImg3, carImg4],
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
    snapshots: [newsImg1, newsImg2, newsImg5, newsImg3, newsImg4],
    architectureImg: newsImg1
  },
  {
    id: "09",
    categories: ["AI/ML", "Full Stack"],
    displayCategory: "AI WELFARE PLATFORM",
    title: "BharatSahayak",
    shortDesc: "AI-powered government scheme discovery platform delivering personalized welfare recommendations through WhatsApp and voice calls.",
    modalSubtitle: "AI-powered welfare companion identifying and delivering personalized scheme recommendations via WhatsApp and voice calls.",
    tags: ["React", "Node.js", "Express", "Supabase", "Mistral AI", "Twilio", "Tailwind CSS"],
    modalTags: ["React", "Node.js", "Express.js", "Supabase", "Mistral AI", "Twilio WhatsApp API", "Twilio Voice API", "Tailwind CSS", "REST APIs", "Vercel", "Render"],
    imageSrc: "",
    problem: "₹2.6 lakh crore in government welfare benefits go unclaimed every year in India. Not because the money isn't there — but because millions of eligible citizens such as farmers, widows, students, and low-income families simply do not know these schemes exist. Existing government portals are complex, English-first, and often require smartphones, internet access, and digital literacy that many rural citizens lack.",
    solution: "BharatSahayak is an AI-powered welfare companion that identifies every government scheme a citizen qualifies for and proactively delivers personalized recommendations through WhatsApp or voice calls on any phone.\n\nNo app download. No internet dependency. No technical knowledge required.\n\nUsers can simply send a WhatsApp message or make a phone call in Hindi, Marathi, or English. The AI understands their profile, analyzes eligibility criteria, recommends relevant schemes, and provides information about benefits, required documents, and application deadlines automatically.",
    features: [
      "Multilingual WhatsApp Assistant: Provides personalized scheme recommendations, eligibility checks, document guidance, and application support through WhatsApp in Hindi, Marathi, and English.",
      "Zero Internet Call Bot: AI-powered voice assistant that communicates with users in Hindi and Marathi through regular phone calls, enabling access for users with basic phones.",
      "Life Timeline AI: Predicts future government schemes a user may become eligible for based on age, occupation, income, and changing life events.",
      "Smart Deadline Alerts & Lost Benefit Detector: Tracks application deadlines, sends reminders before expiry, and identifies welfare benefits that users may have missed during previous years.",
      "Benefit Wallet: Calculates the total value of eligible schemes and presents the user's complete welfare entitlement in a single dashboard."
    ],
    outcomes: [
      "BharatSahayak addresses the welfare awareness gap affecting millions of Indian citizens by making government schemes accessible through familiar communication channels.",
      "The platform targets over 800 million people covered under various welfare programs, helping improve accessibility, awareness, and benefit utilization among rural and underserved communities.",
      "Improved accessibility for users with low digital literacy.",
      "Enabled welfare access through voice and regional languages."
    ],
    githubUrl: "",
    snapshots: [],
    architectureImg: ""
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
          Featured <span style={{ color: '#a855f7' }}>Projects</span>
        </h2>
        <p className="text-lg md:text-xl font-medium mt-2 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          A curated selection of projects that define my engineering journey.
        </p>
        
        {/* New Stats Bar */}
        <div className="mt-8 flex flex-row items-center justify-center gap-4 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>8</span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>Projects</span>
          </div>
          <div className="h-8 md:h-10 w-px" style={{ backgroundColor: 'var(--border-color)' }}></div>
          <div className="flex flex-col items-center">
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>5</span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>Domains</span>
          </div>
          <div className="h-8 md:h-10 w-px" style={{ backgroundColor: 'var(--border-color)' }}></div>
          <div className="flex flex-col items-center">
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>25+</span>
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
              className="group relative rounded-[24px] p-[2px] transition-all duration-300 cursor-pointer card-hover hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
              style={{
                background: '#7c3aed',
              }}
            >
              <div
                className="flex flex-col rounded-[22px] overflow-hidden h-full transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
              {/* Top Half: Image */}
              <div className="w-full h-[200px] md:h-64 relative overflow-hidden" style={{ backgroundColor: 'var(--image-placeholder)' }}>
                {proj.imageSrc && !proj.imageSrc.startsWith('/project_') ? (
                  <img src={proj.imageSrc} alt={proj.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                    <span className="text-xl md:text-2xl font-black tracking-widest uppercase px-6 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.2 }}>{proj.title}</span>
                  </div>
                )}

              </div>

              {/* Bottom Half: Content */}
              <div className="p-5 md:p-8 flex flex-col flex-1 relative">
                
                {/* Categories as plain text */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-black text-slate-300 dark:text-slate-700 group-hover:text-[#8B5CF6] transition-colors duration-300">
                    {proj.id}
                  </span>
                  <div className="flex flex-wrap gap-4">
                    {proj.displayCategory ? (
                      <span className="text-[11px] font-black tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                        {proj.displayCategory}
                      </span>
                    ) : (
                      proj.categories.map(cat => (
                        <span key={cat} className="text-[11px] font-black tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                          {cat}
                        </span>
                      ))
                    )}
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
                  {selectedProject.displayCategory ? (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-full text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      {selectedProject.displayCategory}
                    </span>
                  ) : (
                    selectedProject.categories.map(cat => {
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
                    })
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 leading-tight">{selectedProject.title}</h2>
                <p className="text-slate-600 dark:text-[#94a3b8] text-[15px] md:text-base font-medium max-w-3xl leading-relaxed">
                  {selectedProject.modalSubtitle || selectedProject.shortDesc}
                </p>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                
                {/* Top Tags Row */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {(selectedProject.modalTags || selectedProject.tags).map(tag => (
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
                          <div className="absolute inset-0 bg-[#1e2330] dark:bg-[#1e2330] opacity-70" />
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
                      <p className="text-slate-700 dark:text-white/85 leading-[1.7] text-[15px] whitespace-pre-line">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="font-mono text-xl leading-none font-bold">{`>_`}</span>
                        THE SOLUTION
                      </h4>
                      <p className="text-slate-700 dark:text-white/85 leading-[1.7] text-[15px] whitespace-pre-line">{selectedProject.solution}</p>
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
                        OUTCOMES & IMPACT
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
                    {selectedProject.githubBackendUrl && (
                      <a href={selectedProject.githubBackendUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg font-bold text-[14px] bg-transparent border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        View Backend on GitHub
                      </a>
                    )}
                    {selectedProject.githubFrontendUrl && (
                      <a href={selectedProject.githubFrontendUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg font-bold text-[14px] bg-transparent border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        View Frontend on GitHub
                      </a>
                    )}
                    {selectedProject.githubUrl && !selectedProject.githubBackendUrl && !selectedProject.githubFrontendUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg font-bold text-[14px] bg-transparent border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        View on GitHub
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg font-bold text-[14px] bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition-all flex items-center gap-2">
                        {selectedProject.liveUrlText || "Live Demo"}
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
