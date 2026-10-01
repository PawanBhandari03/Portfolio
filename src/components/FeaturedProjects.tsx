import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



import movieImg1 from '../assets/movie/Screenshot 2026-06-17 163629.png';
import movieImg3 from '../assets/movie/Screenshot 2026-06-17 163652.png';
import movieImg4 from '../assets/movie/Screenshot 2026-06-17 163657.png';
import movieImg5 from '../assets/movie/Screenshot 2026-06-17 163708.png';
import movieImg6 from '../assets/movie/Screenshot 2026-06-17 163713.png';
import movieImg7 from '../assets/movie/Screenshot 2026-06-17 164137.png';


import ecomImg1 from '../assets/Ecom/Screenshot 2026-06-18 172256.png';
import ecomImg2 from '../assets/Ecom/Screenshot 2026-06-18 172303.png';
import ecomImg3 from '../assets/Ecom/Screenshot 2026-06-18 172312.png';
import ecomImg4 from '../assets/Ecom/Screenshot 2026-06-18 172316.png';
import ecomImg5 from '../assets/Ecom/Screenshot 2026-06-18 172336.png';

// EcoBounty Images
import ecoImg1 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM.jpeg';
import ecoImg2 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (1).jpeg';
import ecoImg3 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (2).jpeg';
import ecoImg4 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (3).jpeg';
import ecoImg5 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (4).jpeg';
import ecoImg7 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (6).jpeg';
import ecoImg8 from '../assets/ECObounty/WhatsApp Image 2026-06-19 at 1.31.05 PM (7).jpeg';

// AgriGuard Images
import agriImg1 from '../assets/Agriguard/3729c54a-e5f6-4c5e-87d4-00f3162d8902.jfif';
import agriImg2 from '../assets/Agriguard/c15c2509-766c-49b3-bd6b-266e86fd62db.jfif';
import agriImg3 from '../assets/Agriguard/c7a9b1dd-1a2b-4aa8-bea4-875452913298.jfif';
import agriImg4 from '../assets/Agriguard/c7d6e042-ccb4-49bd-81dd-248a5107d8a5.jfif';
import agriImg5 from '../assets/Agriguard/e76665bf-a6bf-4998-bc91-fdad0581ab44.jfif';



// BharatSahayak Images
import bharatImg1 from '../assets/BharatSahayak/Screenshot 2026-07-02 211257.png';
import bharatImg2 from '../assets/BharatSahayak/Screenshot 2026-07-02 211313.png';
import bharatImg3 from '../assets/BharatSahayak/Screenshot 2026-07-02 211324.png';
import bharatImg4 from '../assets/BharatSahayak/Screenshot 2026-07-02 211423.png';
import bharatImg5 from '../assets/BharatSahayak/Screenshot 2026-07-02 211718.png';
import bharatImg6 from '../assets/BharatSahayak/Screenshot 2026-07-02 211735.png';
import bharatImg7 from '../assets/BharatSahayak/Screenshot 2026-07-02 211900.png';

// BlogNest Images
import blogImg1 from '../assets/Blog/Screenshot 2026-06-28 160440.png';
import blogImg2 from '../assets/Blog/Screenshot 2026-06-28 160448.png';
import blogImg3 from '../assets/Blog/Screenshot 2026-06-28 160453.png';
import blogImg4 from '../assets/Blog/Screenshot 2026-06-28 161342.png';
import blogImg5 from '../assets/Blog/Screenshot 2026-06-28 161401.png';
import blogImg6 from '../assets/Blog/Screenshot 2026-06-28 161518.png';

// The Chameleon Images
import honeyImg1 from '../assets/HoneyPot/Screenshot 2026-10-01 132504.png';
import honeyImg2 from '../assets/HoneyPot/Screenshot 2026-10-01 132516.png';
import honeyImg3 from '../assets/HoneyPot/Screenshot 2026-10-01 132523.png';
import honeyImg4 from '../assets/HoneyPot/Screenshot 2026-10-01 132540.png';
import honeyImg5 from '../assets/HoneyPot/Screenshot 2026-10-01 132544.png';
import honeyImg6 from '../assets/HoneyPot/Screenshot 2026-10-01 132551.png';
import honeyImg7 from '../assets/HoneyPot/Screenshot 2026-10-01 132627.png';
import chameleonPdf from '../assets/HoneyPot/The_Chameleon.pdf';

// LingoMaster Images
import lingoImg1 from '../assets/Lingomaster/WhatsApp Image 2026-10-01 at 1.31.39 PM.jpeg';
import lingoImg2 from '../assets/Lingomaster/WhatsApp Image 2026-10-01 at 1.31.40 PM.jpeg';
import lingoImg3 from '../assets/Lingomaster/WhatsApp Image 2026-10-01 at 1.31.40 PM (1).jpeg';
import lingoImg4 from '../assets/Lingomaster/WhatsApp Image 2026-10-01 at 1.31.40 PM (2).jpeg';
import lingoImg5 from '../assets/Lingomaster/WhatsApp Image 2026-10-01 at 1.31.41 PM.jpeg';
import lingoImg6 from '../assets/Lingomaster/WhatsApp Image 2026-10-01 at 1.35.20 PM.jpeg';

// PawEvents Images
import evImg1 from '../assets/events/home-light.png';
import evImg2 from '../assets/events/event.png';
import evImg3 from '../assets/events/checkout.png';
import evImg4 from '../assets/events/ticket-dark.png';
import evImg5 from '../assets/events/check-in-dark.png';
import evImg6 from '../assets/events/organizer-events.png';
import evImg7 from '../assets/events/create-event.png';
import evImg8 from '../assets/events/mobile.png';

// Broadsheet Images
import bsImg1 from '../assets/hackathon/Screenshot 2026-10-01 135252.png';
import bsImg2 from '../assets/hackathon/Screenshot 2026-10-01 135305.png';
import bsImg3 from '../assets/hackathon/Screenshot 2026-10-01 135526.png';
import bsImg4 from '../assets/hackathon/Screenshot 2026-10-01 135331.png';
import bsImg5 from '../assets/hackathon/Screenshot 2026-10-01 135416.png';
import bsImg6 from '../assets/hackathon/Screenshot 2026-10-01 135443.png';
import bsImg7 from '../assets/hackathon/Screenshot 2026-10-01 135455.png';
import bsImg8 from '../assets/hackathon/Screenshot 2026-10-01 135512.png';

type ProjectCategory = 'Full Stack' | 'Backend' | 'Java/Spring Boot' | 'AI/ML' | 'Security' | 'Web App' | 'Hackathon';

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
  featured?: boolean;
  highlights?: { icon: 'trophy' | 'users' | 'clock'; text: string }[];
  collage?: string[];
}

const PROJECTS: Project[] = [
  {
    id: "01",
    categories: ["Full Stack", "AI/ML", "Backend"],
    displayCategory: "FULL STACK",
    title: "EcoBounty",
    shortDesc: "Gamified environmental cleanup platform with bounties, real-time mapping, XP rewards and blockchain EcoCoin tokens.",
    modalSubtitle: "Community-powered environmental cleanup platform using bounties, gamification, real-time mapping and blockchain rewards.",
    tags: ["Next.js", "TypeScript", "Supabase", "Solidity", "Web3.js", "Leaflet Maps", "Tailwind CSS", "PWA"],
    imageSrc: ecoImg7,
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
    snapshots: [ecoImg1, ecoImg2, ecoImg3, ecoImg4, ecoImg5, ecoImg8],
    architectureImg: ecoImg7,
    featured: true,
    collage: ['/Techathon.jpeg', ecoImg1, ecoImg2],
    highlights: [
      { icon: 'trophy', text: 'Winner — Best Solution Award, Techathon 3.0' },
      { icon: 'users', text: 'Chosen from 500+ teams and 1,600+ participants' },
      { icon: 'clock', text: 'Complete product built in a 24-hour hackathon' }
    ]
  },
  {
    id: "02",
    categories: ["Full Stack", "Backend", "AI/ML", "Hackathon"],
    displayCategory: "AI WELFARE PLATFORM",
    title: "BharatSahayak",
    shortDesc: "AI-powered government scheme discovery platform delivering personalized welfare recommendations through WhatsApp and voice calls.",
    modalSubtitle: "AI-powered welfare companion identifying and delivering personalized scheme recommendations via WhatsApp and voice calls.",
    tags: ["React", "Node.js", "Express", "Supabase", "Mistral AI", "Twilio", "Tailwind CSS"],
    modalTags: ["React", "Node.js", "Express.js", "Supabase", "Mistral AI", "Twilio WhatsApp API", "Twilio Voice API", "Tailwind CSS", "REST APIs", "Vercel", "Render"],
    imageSrc: bharatImg1,
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
    githubUrl: "https://github.com/PawanBhandari03/BharatSahayak",
    liveUrl: "https://bharat-sahayak-one.vercel.app",
    snapshots: [bharatImg2, bharatImg3, bharatImg4, bharatImg5, bharatImg6, bharatImg7],
    architectureImg: bharatImg1
  },
  {
    id: "03",
    categories: ["AI/ML", "Full Stack", "Backend", "Hackathon"],
    displayCategory: "AI SYSTEM",
    title: "AgriGuard",
    shortDesc: "AI-powered plant disease detection with Explainable AI, Grad-CAM heatmaps, severity scoring and treatment recommendations.",
    modalSubtitle: "AI-powered plant disease detection with Explainable AI, severity assessment and treatment recommendations.",
    tags: ["Python", "PyTorch", "FastAPI", "OpenCV", "Grad-CAM", "React", "REST API"],
    imageSrc: agriImg3,
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
    snapshots: [agriImg5, agriImg4, agriImg3, agriImg2, agriImg1],
    architectureImg: agriImg3
  },
  {
    id: "04",
    categories: ["Full Stack", "Backend", "Java/Spring Boot", "Security"],
    displayCategory: "FULL STACK · EVENT TICKETING",
    title: "PawEvents",
    shortDesc: "Full-stack event ticketing platform where organizers publish events, attendees buy tickets with QR codes, and door staff check guests in by scanning.",
    modalSubtitle: "Discover events, buy tickets, and check guests in with a QR code, with separate experiences for attendees, organizers and door staff.",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Keycloak", "Docker", "Tailwind CSS"],
    modalTags: ["Java 21", "Spring Boot 3.4", "Spring Security", "Spring Data JPA", "Keycloak (OIDC + PKCE, JWT)", "React 19", "TypeScript", "Tailwind CSS 4", "PostgreSQL 16", "Docker Compose", "Render", "Vercel"],
    imageSrc: evImg1,
    problem: "Running an event involves several separate jobs. Organizers need to set up ticket types and sales windows, attendees need a simple way to buy and hold tickets, and door staff need a reliable way to admit each guest only once. Doing this without a shared system makes duplicate entry and role confusion easy.",
    solution: "Built a Spring Boot REST API and a React TypeScript frontend, with Keycloak handling sign-in and roles. Organizers create and publish events with ticket types, attendees buy tickets that get a unique QR code, and staff scan the code to validate it. Each role sees only the pages and actions it can use, enforced in both the API and the UI.",
    features: [
      "Organizers create, edit, publish and delete events, with ticket types, prices, capacity limits and sales open/close times",
      "Attendees browse and search published events, buy tickets (demo checkout, no real payment), and view them with QR codes",
      "Door staff check tickets in by camera QR scan or ticket ID, and a ticket is admitted once, with repeat scans flagged as already used",
      "Keycloak sign-in and registration (OpenID Connect with PKCE), with role-based access (attendee, organizer, staff) checked in Spring Security and in the UI"
    ],
    outcomes: [
      "Built and documented a working end-to-end flow: event creation, ticket purchase, QR generation and one-time check-in",
      "Set up for hosted deployment, with a Render blueprint (API, Keycloak, PostgreSQL) and a Vercel config for the frontend",
      "Delivered a responsive UI with light, dark and system themes, plus a documented REST API"
    ],
    githubUrl: "https://github.com/PawanBhandari03/PawEvents",
    liveUrl: "https://pawevents.vercel.app",
    snapshots: [evImg1, evImg2, evImg3, evImg4, evImg5, evImg6, evImg7, evImg8],
    architectureImg: evImg1
  },
  {
    id: "05",
    categories: ["Full Stack", "Backend", "Java/Spring Boot", "Security"],
    displayCategory: "FULL STACK · CONTENT PLATFORM",
    title: "BlogNest",
    shortDesc: "Full-stack content publishing platform with secure authentication, draft management, and content organization.",
    modalSubtitle: "Modern full-stack blogging platform enabling secure content creation, draft workflows, and category management.",
    tags: ["Java", "Spring Boot", "Spring Security", "React", "Hibernate", "JWT", "PostgreSQL"],
    modalTags: ["Java", "Spring Boot", "Spring Security", "React", "Hibernate", "JWT Authentication", "Docker(PostgreSQL)", "REST APIs"],
    imageSrc: blogImg1,
    problem: "Many blogging platforms are either overly complex for content creators or lack essential publishing workflows such as draft management, content organization, and secure user authentication. Managing articles, categories, and content efficiently often requires multiple tools, making the publishing process difficult for writers and creators.",
    solution: "BlogNest is a full-stack content publishing platform that enables users to create, manage, draft, and publish blogs through a secure and intuitive workflow. The platform provides a seamless writing experience while allowing users to organize content using categories and tags.\n\nUsers can securely authenticate themselves, create articles, save drafts, update existing posts, and publish content through a responsive interface powered by React and Spring Boot.",
    features: [
      "Secure Authentication System: Implements JWT-based authentication and Spring Security to provide secure user registration, login, and role-based access control.",
      "Draft & Publishing Workflow: Allows users to save articles as drafts, edit existing content, and publish blogs when ready.",
      "Categories & Tags Management: Organizes content through categories and tags, making articles easier to manage and discover.",
      "Content Management Dashboard: Provides users with a dedicated dashboard to create, update, delete, and manage their blog posts.",
      "Responsive User Experience: Built with React to deliver a modern, responsive interface for seamless content creation and reading across devices."
    ],
    outcomes: [
      "BlogNest simplifies the content publishing process by combining secure authentication, structured content management, and an intuitive user experience into a single platform.",
      "The project demonstrates modern full-stack development practices, including REST API design, authentication, database management, and responsive frontend development.",
      "Designed a scalable full-stack architecture that supports future enhancements such as comments, user profiles, content recommendations, and role-based publishing workflows."
    ],
    githubUrl: "https://github.com/PawanBhandari03/Blog_Platform",
    snapshots: [blogImg6, blogImg4, blogImg5, blogImg2, blogImg3],
    architectureImg: blogImg1
  },
  {
    id: "06",
    categories: ["Full Stack", "Backend", "Java/Spring Boot"],
    displayCategory: "JAVA · BACKEND",
    title: "E-Commerce Application",
    shortDesc: "Full-stack e-commerce platform with Spring Boot REST API, product management, image upload, cart support and search filtering.",
    modalSubtitle: "Full-stack e-commerce platform with Spring Boot REST API, product management, cart support and search filtering.",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "React", "H2 Database", "REST APIs", "Maven"],
    imageSrc: ecomImg1,
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
    architectureImg: ecomImg1
  },
  {
    id: "07",
    categories: ["Security", "AI/ML", "Full Stack", "Backend", "Hackathon"],
    displayCategory: "CYBER SECURITY · FULL STACK",
    title: "The Chameleon",
    shortDesc: "Adaptive honeypot that mimics a fake bank, detects SQL injection and XSS with rules plus ML, deceives attackers, and streams events to a live SIEM dashboard.",
    modalSubtitle: "A decoy bank that detects, deceives and records web attacks in a tamper-evident evidence chain, with a real-time analyst console.",
    tags: ["React", "TypeScript", "FastAPI", "Python", "scikit-learn", "SQLite", "WebSocket", "Tailwind CSS"],
    modalTags: ["React 19", "TypeScript", "Tailwind CSS v4", "Python 3.11", "FastAPI", "scikit-learn", "SQLite", "WebSocket", "pytest", "Vercel", "Render"],
    imageSrc: honeyImg1,
    problem: "Web applications are constantly probed with injection attacks such as SQL injection and XSS, and a blocked request tells the attacker they were caught. Security teams also need evidence of what an attacker did that cannot be quietly altered afterwards.",
    solution: "Built a decoy \"Meridian Bank\" web app where every form submission passes through a hybrid detector of weighted regex rules and a trained ML classifier. Malicious input gets a safe, fabricated response instead of a block, is logged in a SHA-256 hash chain, and is pushed live to a SIEM-style dashboard. Submitted payloads are never executed, and all data shown is synthetic.",
    features: [
      "Hybrid detection with 19 weighted regex signatures (10 SQLi, 9 XSS) plus a TF-IDF character n-gram and Logistic Regression classifier, with the rules treated as authoritative",
      "Adaptive deception with four strategies (fake login success, fake database records, fake acceptance, controlled error), escalating for repeat offenders with progressive delays from 0.5s to 4s",
      "Tamper-evident evidence log where each event is hash-chained (hash = SHA256(event + previous hash)), with an integrity checker and a tampering demo",
      "SIEM console with a live WebSocket feed, alert queue, threat topology, session replay, rule catalog, attack simulator and one-click PDF incident reports"
    ],
    outcomes: [
      "Deployed as a React frontend on Vercel and a FastAPI backend on Render, with a live demo and public API docs",
      "Backend test suite built with pytest, covering the API, rule engine, deception strategies and hash chain",
      "Classifier scores 1.00 accuracy on a held-out split of a synthetic dataset (2,160 train / 540 test), not a real-world accuracy claim"
    ],
    githubUrl: "https://github.com/PawanBhandari03/The-Chameleon",
    liveUrl: "https://the-chameleon.vercel.app",
    pptUrl: chameleonPdf,
    snapshots: [honeyImg1, honeyImg2, honeyImg3, honeyImg4, honeyImg5, honeyImg6, honeyImg7],
    architectureImg: honeyImg1
  },
  {
    id: "08",
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
    id: "09",
    categories: ["Web App", "Hackathon"],
    displayCategory: "FRONTEND · VANILLA JS",
    title: "LingoMaster 2006",
    shortDesc: "Offline language-learning app styled as a Windows XP desktop and 2006 CD-ROM, with quizzes, flashcards and certificates. Hackathon entry.",
    modalSubtitle: "A Windows XP-era recreation of what a Duolingo-style learning app could have looked like as an offline educational CD-ROM in 2006.",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Web Audio API", "Git"],
    modalTags: ["HTML5", "CSS3", "Vanilla JavaScript", "LocalStorage", "SessionStorage", "Web Audio API", "Git/GitHub"],
    imageSrc: lingoImg1,
    problem: "Modern learning apps depend on constant internet access, cloud sync and online services. The project asks how a complete language-learning experience could work under the offline constraints of 2006 desktop software.",
    solution: "Built a Windows XP desktop in the browser using plain HTML, CSS and JavaScript, with no frameworks or backend. The LingoMaster app runs inside a custom window manager and saves progress in LocalStorage, like a CD-ROM program writing local settings files.",
    features: [
      "Custom Windows XP desktop with draggable windows, taskbar, Start menu, desktop icons, right-click menu, wallpaper switching, balloon notifications and XP-style dialogs",
      "Language module for Spanish, French and German with login, multiple-choice quizzes and flip-style flashcards with shuffle, drawn from a built-in vocabulary list",
      "Progress Center showing lesson totals and accuracy, plus a printable completion certificate, all saved through LocalStorage",
      "Period details: sound effects generated with the Web Audio API, a simulated dial-up connection, a bonus install CD Explorer (D: drive) and a mobile warning overlay"
    ],
    outcomes: [
      "Finished in the Top 11 teams at RIFT Hackathon 2026, built as a hackathon entry by the two-person team Binary Builders (Pawan Bhandari and Rahul Bramhankar)",
      "Delivered a fully offline, dependency-free app of about 4,000 lines of HTML, CSS and JavaScript, with no backend",
      "Recreated a full 2006 desktop experience in the browser, including a custom window manager, sound engine and XP-style dialogs"
    ],
    githubUrl: "https://github.com/RAHUL0408-B/Lingomaster-2006",
    snapshots: [lingoImg1, lingoImg2, lingoImg3, lingoImg4, lingoImg5, lingoImg6],
    architectureImg: lingoImg1
  },
  {
    id: "10",
    categories: ["Full Stack", "Backend", "Web App", "Hackathon"],
    displayCategory: "FULL STACK · HACKATHON PLATFORM",
    title: "Broadsheet",
    shortDesc: "Self-hosted hackathon platform with team submissions, normalized judge scoring, community voting and a REST API, for organizers running their own events.",
    modalSubtitle: "One Docker command runs the whole event: registration, submissions, judging, voting and published results.",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Jinja2", "Docker", "Alembic"],
    modalTags: ["Python", "FastAPI", "PostgreSQL 16", "SQLAlchemy 2", "Alembic", "Jinja2", "REST API", "Docker", "pytest", "Railway"],
    imageSrc: bsImg1,
    problem: "Hackathons are usually run across several disconnected tools: one for registration, one for submissions, spreadsheets for judging and another place to publish results. Judges also score on different scales, so raw averages often favour whichever judges a project happened to draw.",
    solution: "Broadsheet puts the whole event in one self-hosted FastAPI and PostgreSQL app with server-rendered pages and per-event roles (organizer, judge, participant, visitor). Judge scores are normalized across judges with shrinkage so rankings are fairer, and every access rule is enforced in the backend.",
    features: [
      "Organizers create events with tracks, prizes and weighted rubrics, invite judges, auto-assign projects by track and load, and publish results",
      "Teams join by invite link and submit projects with a server-enforced deadline, duplicate detection and a public searchable gallery",
      "Judges can only read and write their own score sheets, with refused attempts audited, and scores are normalized across judges with per-project standard error",
      "Community approval voting uses a set window and sealed tallies, and the app also provides a REST API with OpenAPI docs, signed webhooks, printable certificates and an embeddable gallery widget"
    ],
    outcomes: [
      "Built by team Binary Builders for the DOGFOOD 2026 hackathon and passes the provided checker for tiers T1 and T2, with T3 and T4 built and tested but not covered by automated checks",
      "Ships with an automated test suite covering role isolation, deadlines, normalization math, voting, webhooks and the full event lifecycle",
      "Starts with a single docker compose up, which runs migrations and seeds demo data, and is set up for deployment on Railway"
    ],
    githubUrl: "https://github.com/PawanBhandari03/DogFood-HackaThon",
    snapshots: [bsImg1, bsImg2, bsImg3, bsImg4, bsImg5, bsImg6, bsImg7, bsImg8],
    architectureImg: bsImg1
  }
];

const FILTERS = ['All', 'Full Stack', 'Backend', 'Java/Spring Boot', 'AI/ML', 'Security', 'Web App', 'Hackathon'];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const lightboxImages = selectedProject?.snapshots ?? [];
  const goNext = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % lightboxImages.length : null);
  const goPrev = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + lightboxImages.length) % lightboxImages.length : null);

  // Close lightbox & modal on Escape, navigate with arrow keys
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goPrev();
      } else if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, lightboxImages.length]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const featuredProject = PROJECTS.find(p => p.featured);
  const gridProjects = PROJECTS.filter(p => !p.featured);

  const filteredProjects = gridProjects.filter(p => {
    if (activeFilter === 'All') return true;
    return p.categories.includes(activeFilter as ProjectCategory);
  });

  const getProjectCount = (filter: string) => {
    if (filter === 'All') return gridProjects.length;
    return gridProjects.filter(p => p.categories.includes(filter as ProjectCategory)).length;
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
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>10</span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>Projects</span>
          </div>
          <div className="h-8 md:h-10 w-px" style={{ backgroundColor: 'var(--border-color)' }}></div>
          <div className="flex flex-col items-center">
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>5</span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>Domains</span>
          </div>
          <div className="h-8 md:h-10 w-px" style={{ backgroundColor: 'var(--border-color)' }}></div>
          <div className="flex flex-col items-center">
            <span className="text-[28px] md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>40+</span>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>Technologies</span>
          </div>
        </div>
      </div>

      {/* FEATURED BUILD */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedProject(featuredProject)}
          className="group grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-5 lg:gap-8 p-3 md:p-4 rounded-[28px] cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          style={{ backgroundColor: 'var(--card-bg)', border: '1px solid rgba(139,92,246,0.4)' }}
        >
          {/* Photo collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[260px] sm:h-[340px] lg:h-[400px]">
            {(featuredProject.collage ?? []).slice(0, 3).map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[18px] ${i === 0 ? 'row-span-2' : ''}`}
                style={{ backgroundColor: 'var(--image-placeholder)' }}
              >
                <img src={img} alt={`${featuredProject.title} screenshot ${i + 1}`} className={`w-full h-full object-cover ${i === 0 ? 'object-center' : 'object-top'} transition-transform duration-500 group-hover:scale-105`} />
                {i === 0 && (
                  <span className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold tracking-widest uppercase">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {featuredProject.snapshots?.length ?? 0} Screenshots
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center gap-5 p-2 md:p-4 lg:pr-8">
            <span className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase text-[#8B5CF6] bg-[#8B5CF6]/10">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Featured Build
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight group-hover:text-[#8B5CF6] transition-colors" style={{ color: 'var(--text-primary)' }}>
              {featuredProject.title}
            </h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {featuredProject.shortDesc}
            </p>

            {featuredProject.highlights && (
              <ul className="flex flex-col gap-3">
                {featuredProject.highlights.map(h => (
                  <li key={h.text} className="flex items-center gap-3 text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                    <svg className="w-5 h-5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      {h.icon === 'trophy' && <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />}
                      {h.icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />}
                      {h.icon === 'clock' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    </svg>
                    {h.text}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {featuredProject.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black tracking-widest uppercase" style={{ color: 'var(--text-primary)' }}>{tag}</span>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-[15px] font-bold text-[#8B5CF6]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              Read the full case study
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </span>
          </div>
        </motion.div>
      )}

      {/* MORE BUILDS */}
      <h3 className="-mb-6 text-sm md:text-base font-black tracking-[0.35em] uppercase" style={{ color: 'var(--text-primary)' }}>
        More Builds
      </h3>

      {/* FILTER TABS */}
      <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto md:whitespace-nowrap scrollbar-hide justify-start gap-2 pb-2 md:pb-0">
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
                    {String(filteredProjects.indexOf(proj) + 1).padStart(2, '0')}
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
                      {selectedProject.snapshots && selectedProject.snapshots.length > 0 ? (
                        selectedProject.snapshots.map((snap, i) => (
                          <div
                            key={i}
                            onClick={() => openLightbox(i)}
                            className="group/snap w-64 md:w-80 h-[160px] shrink-0 bg-slate-100 dark:bg-[#0e121e] rounded-lg border border-slate-200 dark:border-white/5 flex items-center justify-center overflow-hidden cursor-zoom-in relative"
                          >
                            <img src={snap} alt={`Snapshot ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover/snap:scale-105" />
                            <div className="absolute inset-0 bg-black/0 group-hover/snap:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                              <svg className="w-8 h-8 text-white opacity-0 group-hover/snap:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
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

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && lightboxImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold tracking-widest">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 max-w-[90vw] max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImages[lightboxIndex]}
                alt={`Snapshot ${lightboxIndex + 1}`}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {lightboxImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
