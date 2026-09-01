import React from 'react';
import { Users, MessageSquare, Lightbulb, Brain, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BeyondCode: React.FC = () => {
  const { beyondCode } = portfolioData;

  const categoryIcons = {
    Leadership: <Users className="w-5 h-5 text-sky-400" />,
    Communication: <MessageSquare className="w-5 h-5 text-emerald-400" />,
    Creativity: <Lightbulb className="w-5 h-5 text-amber-400" />,
    'Problem Solving': <Brain className="w-5 h-5 text-purple-400" />
  };

  return (
    <section className="py-20 relative z-10 bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Qualities & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Beyond <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Code</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Soft skills, team leadership, creative design thinking, and analytical problem-solving.
          </p>
        </div>

        {/* 4 Qualities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beyondCode.map(item => (
            <div
              key={item.category}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                    {categoryIcons[item.category]}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
