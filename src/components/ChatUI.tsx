import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: string | React.ReactNode;
};

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'bot',
  text: "Hey there! How can I help you today? Looking to chat about a project or explore some ideas?"
};

const QUICK_REPLIES = ['Work', 'About me', 'Skills', 'Contact'];

const linkCls = "text-[#8B5CF6] hover:underline font-bold";

const CONTACT_REPLY = (
  <span>
    You can reach me at <a href="mailto:pawansinghb07@gmail.com" className={linkCls}>pawansinghb07@gmail.com</a> or call 9762383524.
    My code is on <a href="https://github.com/PawanBhandari03" target="_blank" rel="noreferrer" className={linkCls}>GitHub</a>,
    and you can connect with me on <a href="https://www.linkedin.com/in/pawan-singh-bhandari-5817ab307" target="_blank" rel="noreferrer" className={linkCls}>LinkedIn</a>.
    I'm currently open to engineering roles, freelance work and collaborations!
  </span>
);

// ─────────────── Knowledge base (from resume) ───────────────
type Intent = {
  name: string;
  keywords: RegExp[];
  reply: string | React.ReactNode;
};

const INTENTS: Intent[] = [
  {
    name: 'greeting',
    keywords: [/^(hi+|hello+|hey+|yo|hola|namaste|good (morning|afternoon|evening))\b/],
    reply: "Hey! Nice to meet you. Ask me about Pawan's projects, skills, experience, achievements or how to get in touch."
  },
  {
    name: 'thanks',
    keywords: [/\b(thanks|thank you|thx|cheers)\b/, /\b(bye|goodbye|see you)\b/],
    reply: "Happy to help! If you'd like to talk to Pawan directly, use the Contact option or email pawansinghb07@gmail.com."
  },
  {
    name: 'age',
    keywords: [/\b(age|old|born|birthday)\b/],
    reply: "I'm 20 years old, currently in my Computer Engineering degree in Pune."
  },
  {
    name: 'location',
    keywords: [/\b(where|location|live|based|city|pune|india|relocate)\b/],
    reply: "I'm based in Pune, India, and I'm comfortable working remotely. Both my internships so far have been remote."
  },
  {
    name: 'education',
    keywords: [/\b(education|college|university|degree|cgpa|gpa|study|studying|student|school|12th|10th|engineering|bsiotr|jspm|graduat)/],
    reply: "I'm pursuing a Bachelor of Engineering in Computer Engineering at Bhivarabai Sawant Institute of Technology and Research (BSIOTR), Pune, from 2023 to 2027, with a CGPA of 8.5. Before that I studied at Don Bosco Junior College and Don Bosco High School in Pune."
  },
  {
    name: 'experience',
    keywords: [/\b(experience|intern|internship|job|employ|company|elevance|elevanceskills|codsoft|professional|career|currently)/],
    reply: "Since July 2026 I'm a Full Stack Developer Intern at ElevanceSkills Technology, building a travel booking platform called TripNest with React, Spring Boot and MongoDB. Earlier, in Jan to Feb 2026, I did a Java Development internship at CodSoft, completing 5 Java tasks on core Java, OOP and application logic."
  },
  {
    name: 'tripnest',
    keywords: [/\b(tripnest|travel|flight|booking|hotel)/],
    reply: "TripNest is a travel booking platform I built during my ElevanceSkills internship. It uses React, Tailwind CSS, Spring Boot, Spring Security, Hibernate and MongoDB, and supports flight and hotel booking, cancellation and real-time flight tracking with status updates and delay info."
  },
  {
    name: 'eventhub',
    keywords: [/\b(eventhub|event hub|ticket|tickets|keycloak|qr)/],
    reply: "EventHub is a smart event ticket management system with role-based access for event creation, ticket booking and inventory. It uses Spring Boot, Keycloak authentication, PostgreSQL and React, with QR-code ticket validation and concurrency handling to prevent ticket overselling."
  },
  {
    name: 'ecobounty',
    keywords: [/\b(ecobounty|eco bounty|civic|sos|whisper|openrouter)/],
    reply: "EcoBounty is the civic issue reporting platform that won Techathon 3.0. It takes audio or video reports, transcribes them with the Whisper API, summarizes them with OpenRouter AI and automatically dispatches an SOS email to municipal authorities. It was built end to end in 24 hours and also has bounty rewards with MetaMask and Web3.js."
  },
  {
    name: 'bharatsahayak',
    keywords: [/\b(bharatsahayak|bharat sahayak|scheme|schemes|welfare|whatsapp|twilio|voice)/],
    reply: "BharatSahayak is an AI platform that helps citizens discover government schemes, scholarships and welfare benefits based on age, income, occupation and category. It has a multilingual WhatsApp chatbot in Hindi, Marathi and English built with Twilio and Mistral AI, plus a voice-call bot for people without smartphones. Stack: React, Node.js, Express, Supabase and Tailwind CSS."
  },
  {
    name: 'agriguard',
    keywords: [/\b(agriguard|agri guard|plant|disease|crop|grad-?cam|explainable)/],
    reply: "AgriGuard is an AI plant disease detection tool with Explainable AI (Grad-CAM), severity assessment and treatment recommendations. It's built with Python, PyTorch, OpenCV, FastAPI and a React frontend."
  },
  {
    name: 'agritrace',
    keywords: [/\b(agritrace|agri trace|supply chain|blockchain|farm|solidity|ethereum|ipfs)/],
    reply: "AgriTrace is a blockchain-powered farm-to-fork supply chain platform with QR traceability, smart contracts and decentralized storage. It uses React, Solidity, Node.js, GraphQL, Ethereum, Polygon, IPFS and Docker."
  },
  {
    name: 'blognest',
    keywords: [/\b(blognest|blog nest|blog|blogging)/],
    reply: "BlogNest is a full-stack blogging platform with secure content creation, draft workflows and category management. It uses Java, Spring Boot, Spring Security, JWT, Hibernate, PostgreSQL and React."
  },
  {
    name: 'ecommerce',
    keywords: [/\b(e-?commerce|shop|shopping|cart|store)/],
    reply: "My E-Commerce application is a Spring Boot REST API with product management, cart support and search filtering, paired with a React frontend."
  },
  {
    name: 'taskmanager',
    keywords: [/\b(task manager|task manger|task app|todo|to-do)/],
    reply: "Task Manager is a full-stack task management app with a Spring Boot REST API, a TypeScript React frontend, Tailwind CSS and Docker deployment."
  },
  {
    name: 'pawflix',
    keywords: [/\b(pawflix|movie|movies|tmdb|film)/],
    reply: "PawFlix is a movie discovery web app built with React, Tailwind CSS, Vite and the TMDB API."
  },
  {
    name: 'news',
    keywords: [/\b(news magazine|news mag|newsmag|news app)/],
    reply: "News Magazine is a news reading site built with React, Vite and a News API."
  },
  {
    name: 'projects',
    keywords: [/\b(project|projects|built|build|made|portfolio|work|works|showcase|apps?|applications?)\b/],
    reply: "I've built more than 10 projects. Highlights are EcoBounty (Techathon 3.0 winner), TripNest (travel booking), EventHub (event ticketing), BharatSahayak (AI scheme discovery), AgriGuard (plant disease detection), AgriTrace (blockchain supply chain), BlogNest, an E-Commerce app, Task Manager, PawFlix and News Magazine. Ask me about any of them, or scroll to the Projects section."
  },
  {
    name: 'achievements',
    keywords: [/\b(achievement|achievements|award|awards|win|won|winner|hackathon|hackathons|techathon|pandora|rift|prize|trophy|rank)/],
    reply: "I'm a two-time hackathon award winner. I won Best Solution at Techathon 3.0 (Feb 2026) among 500+ teams and 1,600+ participants, took Best Solution at the Pandora Hackathon (Feb 2026) at BSIOTR JSPM, and finished in the Top 11 at RIFT Hackathon 2026 (July 2026). You can see the certificates on the Achievements page."
  },
  {
    name: 'certifications',
    keywords: [/\b(certificate|certificates|certification|certifications|course|courses|udemy|mongodb|ibm|azure|learning)/],
    reply: "My certifications include Spring Boot 4, Spring 7 and Hibernate for Beginners (Udemy, Chad Darby), the MongoDB Node.js Developer Path (MongoDB University), Artificial Intelligence Fundamentals (IBM SkillsBuild) and Azure Fundamentals (Microsoft and Simplilearn SkillUp)."
  },
  {
    name: 'skills',
    keywords: [/\b(skill|skills|tech|technology|technologies|stack|tools|languages?|proficient|expertise)/],
    reply: "My primary language is Java, along with Python, JavaScript and TypeScript. On the frontend I use React, Redux, Tailwind CSS and Bootstrap. On the backend I use Spring Boot, Spring Security, Hibernate, Node.js, Express, Kafka and Redis. For data and tools I use MySQL, PostgreSQL, MongoDB, Docker, Jenkins, Git, Postman and Swagger, plus PyTorch for ML."
  },
  {
    name: 'frontend',
    keywords: [/\b(frontend|front-end|ui|ux|react|redux|tailwind|bootstrap|html|css|figma|responsive)/],
    reply: "On the frontend I work with React, TypeScript, Redux, Tailwind CSS, Bootstrap, HTML5 and responsive design, and I use Figma for design. React is at the core of almost every project I've built."
  },
  {
    name: 'backend',
    keywords: [/\b(backend|back-end|server|api|apis|rest|spring|java|hibernate|jwt|node|express|kafka|redis|junit|maven|gradle|microservice)/],
    reply: "Java is my primary language and Spring Boot is my main backend framework, with Spring Security, JWT, Hibernate and REST APIs. I also use Node.js and Express, Kafka and Redis, JUnit for testing and Maven or Gradle for builds."
  },
  {
    name: 'database',
    keywords: [/\b(database|databases|db|sql|mysql|postgres|postgresql|mongo|supabase|nosql)/],
    reply: "I work with MySQL, PostgreSQL, MongoDB and Redis Cache, and I've used Supabase (PostgreSQL) for hosted backends like BharatSahayak."
  },
  {
    name: 'devops',
    keywords: [/\b(devops|docker|jenkins|ci\/?cd|deploy|deployment|cloud|git|github|tomcat|swagger|postman)/],
    reply: "I use Docker, Jenkins and Git/GitHub, deploy on Tomcat and cloud platforms, and use Postman and Swagger for testing and documenting APIs."
  },
  {
    name: 'ai',
    keywords: [/\b(ai|ml|machine learning|deep learning|pytorch|opencv|cnn|model|models|kaggle|mistral|llm|chatbot)/],
    reply: "I work with Python and PyTorch for ML (AgriGuard uses a CNN with Grad-CAM explainability), OpenCV for vision, Kaggle for datasets, and AI APIs like Mistral, Whisper and OpenRouter in projects such as BharatSahayak and EcoBounty."
  },
  {
    name: 'blockchain',
    keywords: [/\b(web3|metamask|smart contract|crypto|polygon)/],
    reply: "I've worked with Solidity, Web3.js and MetaMask for blockchain features, like the bounty rewards in EcoBounty and the smart contracts in AgriTrace."
  },
  {
    name: 'resume',
    keywords: [/\b(resume|cv|curriculum)/],
    reply: "You can download my latest resume using the Download Resume button at the top of this page."
  },
  {
    name: 'hire',
    keywords: [/\b(hire|hiring|available|availability|opening|opportunit|freelance|collaborat|recruit|open to)/],
    reply: "Yes, I'm open to engineering roles, freelance work and collaborations. The best way to reach me is pawansinghb07@gmail.com or LinkedIn."
  },
  {
    name: 'contact',
    keywords: [/\b(contact|email|mail|reach|phone|call|number|linkedin|connect|message|touch)/],
    reply: CONTACT_REPLY
  },
  {
    name: 'about',
    keywords: [/\b(about|who|introduce|yourself|bio|background|profile|summary|pawan|bhandari)\b/],
    reply: "I'm Pawan Singh Bhandari, a Full Stack Developer from Pune, India. I'm a Computer Engineering student (2023-2027, CGPA 8.5) and a two-time hackathon award winner, building React frontends with Java Spring Boot backends and integrating AI and third-party APIs."
  }
];

const FALLBACK_REPLY = "I'm not sure about that one, but I can tell you about Pawan's projects, skills, experience, achievements, education or how to get in touch. What would you like to know?";

// Pick the intent with the most keyword hits (earlier intents win ties, so specific ones beat generic ones)
function getReply(input: string): string | React.ReactNode {
  const q = input.toLowerCase().trim();

  // Quick-reply pills
  if (q === 'work') return INTENTS.find(i => i.name === 'experience')!.reply;
  if (q === 'about me') return INTENTS.find(i => i.name === 'about')!.reply;

  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const score = intent.keywords.reduce((n, re) => n + (re.test(q) ? 1 : 0), 0);
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  return best ? best.reply : FALLBACK_REPLY;
}

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 500));
    setMessages(prev => [...prev, { id: Date.now().toString() + 'bot', role: 'bot', text: getReply(text) }]);
    setIsTyping(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col pt-8 md:pt-20 px-4 md:px-0">
      {/* Label */}
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-3 text-center font-medium tracking-wide">Ask me anything about Pawan...</p>

      <div className="w-full flex flex-col rounded-[28px] overflow-hidden border border-white/10 bg-white/60 dark:bg-[#0a0f1e]/60 backdrop-blur-md shadow-lg dark:shadow-none h-[320px] md:h-auto md:min-h-[320px] md:max-h-[420px]">

      {/* Quick Reply Pills */}
      <div className="flex-none flex justify-center gap-1.5 md:justify-start md:gap-2 px-2 md:px-5 pt-5 w-full">
        {QUICK_REPLIES.map(q => (
          <button
            key={q}
            onClick={() => handleSend(q)}
            className="px-2.5 py-1.5 md:px-4 md:py-1.5 text-[11px] sm:text-xs md:text-sm font-medium rounded-full border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 hover:bg-[#8B5CF6] hover:text-white hover:border-transparent transition-all whitespace-nowrap"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div ref={chatContainerRef} className="flex-1 flex flex-col gap-3 px-5 py-4 overflow-y-auto custom-scrollbar">
        {messages.map(msg => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[92%] md:max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'bg-[#8B5CF6] text-white'
                : 'bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.06]'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] px-4 py-3 rounded-2xl flex gap-1 items-center">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="flex-none flex items-center gap-3 px-5 py-4 border-t border-slate-200 dark:border-white/[0.05]">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend(input)}
          placeholder="Ask anything about Pawan..."
          className="flex-1 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:ring-2 focus:ring-[#8B5CF6]/40 transition-all"
        />
        <button
          onClick={() => handleSend(input)}
          disabled={isTyping || !input.trim()}
          className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-40 flex items-center justify-center text-white transition-all cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z" />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
}
