import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hi there! I'm Bindhu's AI Portfolio Assistant 🤖. Ask me anything about her AI/ML projects, skills, education at Vaagdevi College of Engineering, or internship suitability!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sampleQuestions = [
    'Who is Bindhu?',
    'What projects has she built?',
    'What are her AI/ML skills?',
    'Tell me about CAMPUSGUARD AI',
    'Why hire Bindhu for an internship?',
    'How can I contact her?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = { sender: 'user', text: query, timestamp: timeStr };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // Context Search Engine over portfolioData
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let matchedAnswer = '';

      // Check QA Pairs from dataset
      for (const pair of portfolioData.qaPairs) {
        if (pair.keywords.some(kw => lowerQuery.includes(kw))) {
          matchedAnswer = pair.answer;
          break;
        }
      }

      // Fallback contextual search
      if (!matchedAnswer) {
        if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
          matchedAnswer = `Bindhu has hands-on experience through project training at Vaagdevi College Labs and virtual software engineering simulations, focusing on Python, OpenCV, and Git workflows.`;
        } else if (lowerQuery.includes('achievement') || lowerQuery.includes('certif')) {
          matchedAnswer = `Her achievements include being a Hackathon Finalist with CAMPUSGUARD AI, completing certified AI/ML workshops, and Python for Data Science certifications.`;
        } else if (lowerQuery.includes('resume') || lowerQuery.includes('cv')) {
          matchedAnswer = `You can view or download Bindhu's complete resume by clicking the "Resume" button in the top navigation bar!`;
        } else {
          matchedAnswer = `Bindhu is a 3rd-year B.Tech CSE (AI & ML) student at Vaagdevi College of Engineering. She specializes in Python, Computer Vision (OpenCV), Machine Learning, and web solutions like CAMPUSGUARD AI and SCAMSHIELD. You can contact her at ${portfolioData.personal.email}!`;
        }
      }

      const botMsg: Message = {
        sender: 'bot',
        text: matchedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-xl shadow-sky-950/60 hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-105 ${
          isOpen ? 'hidden' : 'flex'
        }`}
        aria-label="Open AI Portfolio Assistant"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
        <span>Ask My Portfolio</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[520px] bg-slate-950/95 border border-slate-700/80 rounded-3xl shadow-2xl shadow-black/90 backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6">
          {/* Chat Header */}
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Portfolio AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </h4>
                <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active • Grounded on Portfolio Data
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-sky-950 border border-sky-800 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-[9px] opacity-60 block mt-1 text-right">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-sky-400 p-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span className="font-mono text-[10px]">Analyzing portfolio data...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompt Chips */}
          <div className="px-4 py-2 bg-slate-950 border-t border-slate-900 flex gap-1.5 overflow-x-auto no-scrollbar">
            {sampleQuestions.slice(0, 3).map((q, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap text-[10px] px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-sky-500/50 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={e => setInputQuery(e.target.value)}
                placeholder="Ask about Bindhu's projects, skills..."
                className="flex-1 bg-slate-950 border border-slate-800 text-slate-200 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-sky-500"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim()}
                className="p-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
