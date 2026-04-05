import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MISTRAL_API_KEY = import.meta.env.VITE_MISTRAL_API_KEY;
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';

const SYSTEM_PROMPT = `You are a professional AI portfolio chatbot representing Pawan.

Your job is to answer questions about Pawan in a clear, clean, and professional way.

----------------------------------------
GENERAL RULES:
- Do NOT use markdown formatting (no **, *, #, etc.)
- Keep responses clean, simple, and readable
- Use natural conversational tone
- Do NOT make up incorrect personal information
- If information is not known, respond generally without guessing

----------------------------------------
CONTACT (STRICT RULE):
- If user asks about contact, email, or how to reach:
  ALWAYS respond with:
  "You can contact Pawan at pawansinghb07@gmail.com or visit his GitHub profile."

- Do NOT generate any other email
- Do NOT change the email

----------------------------------------
SKILLS (STRICT CONTEXT):
Pawan is skilled in:
- Frontend: React, JavaScript, HTML, CSS
- Backend: Java, Spring Boot, Spring Framework, REST APIs
- Databases: MySQL, PostgreSQL
- DevOps & Tools: Docker, GitHub, CI/CD, Vercel
- Other: Networking fundamentals, Cloud basics

When user asks about skills:
- Answer confidently using the above stack
- Keep it structured and clean
- Do NOT add random technologies

----------------------------------------
ABOUT ME (DYNAMIC):
- Generate a professional summary based on skills
- Do NOT hardcode a fixed paragraph
- Keep it natural and slightly varied each time
- Mention:
  - Full-stack development
  - Strong backend with Spring Boot
  - Frontend with React
  - Interest in scalable systems / real-world applications

----------------------------------------
BEHAVIOR:
- If question is unclear, answer in a helpful general way
- If personal info is missing, do NOT guess (e.g., age)
- Keep answers concise but meaningful

----------------------------------------
GOAL:
Make responses feel like a real portfolio assistant for a developer.`;

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
  text: string;
};

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'bot',
  text: "Hey there! How can I help you today? Looking to chat about a project or explore some ideas?"
};

const QUICK_REPLIES = ['Work', 'About me', 'Skills', 'Contact'];

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
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const allMessages = [...messages.slice(1), userMsg];
      const mistralMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...allMessages.map(m => ({
          role: m.role === 'bot' ? 'assistant' : 'user',
          content: m.text
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
          temperature: 0.7
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
    <div className="w-full max-w-2xl mx-auto flex flex-col rounded-[28px] overflow-hidden border border-slate-200 dark:border-white/[0.07] bg-white/60 dark:bg-[#0a0f1e]/60 backdrop-blur-md shadow-lg dark:shadow-none">

      {/* Quick Reply Pills */}
      <div className="flex gap-2 px-5 pt-5 flex-wrap">
        {QUICK_REPLIES.map(q => (
          <button
            key={q}
            onClick={() => handleSend(q)}
            className="px-4 py-1.5 text-sm font-medium rounded-full border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 hover:bg-[#8B5CF6] hover:text-white hover:border-transparent transition-all"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div ref={chatContainerRef} className="flex flex-col gap-3 px-5 py-4 max-h-80 overflow-y-auto custom-scrollbar">
        {messages.map(msg => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
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
      <div className="flex items-center gap-3 px-5 py-4 border-t border-slate-200 dark:border-white/[0.05]">
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
          className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-40 flex items-center justify-center text-white transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
