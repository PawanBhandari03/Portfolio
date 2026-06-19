import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MISTRAL_API_KEY = import.meta.env.VITE_MISTRAL_API_KEY;
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';

const SYSTEM_PROMPT = `You are Pawan Bhandari's personal AI assistant on his portfolio website. Your ONLY job is to answer questions specifically about Pawan Bhandari — his background, skills, projects, education, achievements, and contact info.

Name: Pawan Bhandari
Age: 20 Years
Location: Pune, India
Education: Computer Engineering at BSIOTR, JSPM
Role: Full Stack Developer
Skills: Java, Spring Boot, React, Node.js, PostgreSQL, MySQL, Docker, REST APIs, Python, JavaScript
Projects:
- EcoBounty: Gamified sustainability platform (React, Node.js, Supabase)
- AgriGuard: AI plant disease detection (Python, ML, OpenCV)
- AgriTrace: Blockchain supply chain platform (Solidity, React, Node.js)
- PawFlix: Movie discovery web app (React, Tailwind, TMDB API)
- Task Manager: Spring Boot REST API + React TypeScript app
- E-Commerce: Spring Boot backend with React frontend
Achievements: 2x Hackathon winner — Techathon 3.0 (Best Solution, ₹10,000 prize) and Pandora Hackathon (AI for Smart Cities)
Open to: Freelance work and collaboration
GitHub: github.com/PawanBhandari03
LinkedIn: linkedin.com/in/pawan-singh-bhandari-5817ab307
Email: pawansinghb07@gmail.com

STRICT RULES:
- ONLY answer questions about Pawan Bhandari. Nothing else.
- If anyone asks you to write code, solve problems, explain algorithms, do math, answer general knowledge questions, or anything NOT about Pawan — you MUST refuse.
- When refusing, say exactly: "I'm only here to answer questions about Pawan Bhandari. Try asking about his skills, projects, or how to get in touch!"
- Never use bullet points (• or -) in responses.
- Never use markdown links like [text](url).
- Keep all responses to 2-3 sentences max.
- Never use symbols like • * # or []().
- Write like a friendly human assistant, not a list generator.
- If asked something about Pawan that isn't listed above, say "Pawan hasn't shared that detail yet, but feel free to reach out directly!"

Answer in a friendly, professional tone. Keep answers concise.`;

// Strip markdown formatting from AI responses
function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')      // **bold**
    .replace(/\*(.+?)\*/g, '$1')           // *italic*
    .replace(/\_\_(.+?)\_\_ /g, '$1')     // __bold__
    .replace(/\_(.+?)\_/g, '$1')           // _italic_
    .replace(/`{1,3}([^`]*)`{1,3}/g, '$1') // `code` or ```code```
    .replace(/^#{1,6}\s+/gm, '')           // # headings
    .replace(/^[-*+]\s+/gm, '• ')         // bullet list markers → •
    .replace(/\n{3,}/g, '\n\n')           // collapse excess blank lines
    .trim();
}

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

const HARDCODED_RESPONSES: Record<string, string | React.ReactNode> = {
  'Work': "I'm a Full Stack Developer experienced in building scalable applications. I've worked on projects like EcoBounty, a DevBlog Platform, and AgriGuard (an AI plant disease detection tool).",
  'About me': "I'm a 20-year-old Computer Engineering student at BSIOTR, JSPM in Pune, India. I'm passionate about problem-solving, Hackathons, and building real-world solutions!",
  'Skills': "My main stack includes Java, Spring Boot, React, Node.js, PostgreSQL, MySQL, and Docker. I'm also comfortable with Python, REST APIs, and modern frontend tools.",
  'Contact': (
    <span>
      You can reach me at <a href="mailto:pawansinghb07@gmail.com" className="text-[#8B5CF6] hover:underline font-bold">pawansinghb07@gmail.com</a>, 
      find my projects on <a href="https://github.com/PawanBhandari03" target="_blank" rel="noreferrer" className="text-[#8B5CF6] hover:underline font-bold">GitHub</a>, 
      or connect with me on <a href="https://www.linkedin.com/in/pawan-singh-bhandari-5817ab307" target="_blank" rel="noreferrer" className="text-[#8B5CF6] hover:underline font-bold">LinkedIn</a>. 
      I'm currently open to freelance work and collaborations!
    </span>
  )
};

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

  // Client-side off-topic guard
  const isOffTopic = (msg: string): boolean => {
    const lower = msg.toLowerCase();
    const offTopicPatterns = [
      /\bsolve\b/, /\bcode\b/, /\balgorithm\b/, /\bdsa\b/, /\bdata structure/,
      /\bleetcode\b/, /\bhackerrank\b/, /\bwrite a program/, /\bwrite code/,
      /\bfix (this|my|the) (code|bug|error)/, /\bdebug\b/,
      /\bmath\b/, /\bcalculate\b/, /\bequation\b/, /\bformula\b/,
      /\bwhat is (?!pawan)/, /\bwho is (?!pawan)/, /\bexplain (?!pawan|his|the project)/,
      /\bhow (do|does|to|can) (?!i reach|i contact|to contact|to reach)/,
      /\btell me about (?!pawan|his|yourself)/, /\bwrite (an?|the)\b/,
      /\bessay\b/, /\bsummariz/, /\btranslat/, /\bgenerat/,
      /\brecipe\b/, /\bcook\b/, /\bweather\b/, /\bnews\b/,
      /\bjoke\b/, /\bpoem\b/, /\bstory\b/, /\blyric/,
    ];
    const pawanKeywords = /pawan|bhandari|his|your|you|portfolio|project|skill|contact|hire|work|experience|education|degree|college|hackathon|achievement|github|linkedin|email|reach/;
    // If it clearly mentions Pawan context, allow it
    if (pawanKeywords.test(lower)) return false;
    // If it matches any off-topic pattern, block it
    return offTopicPatterns.some(p => p.test(lower));
  };

  const OFF_TOPIC_REPLY = "I'm only here to answer questions about Pawan Bhandari. 😊 Try asking about his skills, projects, achievements, or how to get in touch!";

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      // Use hardcoded response if it matches a quick reply exactly
      if (HARDCODED_RESPONSES[text]) {
        await new Promise(resolve => setTimeout(resolve, 600));
        setMessages(prev => [...prev, { id: Date.now().toString() + 'bot', role: 'bot', text: HARDCODED_RESPONSES[text] }]);
        setIsTyping(false);
        return;
      }

      // Client-side off-topic check
      if (isOffTopic(text)) {
        await new Promise(resolve => setTimeout(resolve, 400));
        setMessages(prev => [...prev, { id: Date.now().toString() + 'bot', role: 'bot', text: OFF_TOPIC_REPLY }]);
        setIsTyping(false);
        return;
      }

      const allMessages = [...messages.slice(1), userMsg];
      const mistralMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...allMessages.map(m => ({
          role: m.role === 'bot' ? 'assistant' : 'user',
          content: typeof m.text === 'string' ? m.text : 'Contact Info Provided.'
        }))
      ];

      const res = await fetch(MISTRAL_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: 'mistral-small-latest',
          messages: mistralMessages,
          max_tokens: 300,
          temperature: 0.2
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData?.message || errData?.error?.message || `API error ${res.status}`);
      }

      const data = await res.json();
      const raw = data?.choices?.[0]?.message?.content || "I couldn't generate a response.";
      const output = stripMarkdown(raw);

      setMessages(prev => [...prev, { id: Date.now().toString() + 'bot', role: 'bot', text: output }]);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Something went wrong.";
      setMessages(prev => [...prev, { id: Date.now().toString() + 'err', role: 'bot', text: `Oops! ${msg}` }]);
    } finally {
      setIsTyping(false);
    }
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
