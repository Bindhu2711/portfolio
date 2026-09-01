import React, { useState } from 'react';
import { Trophy, ShieldCheck, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { AchievementCategory } from '../types/portfolio';

export const Achievements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AchievementCategory>('All');
  const { achievements } = portfolioData;

  const categories: AchievementCategory[] = ['All', 'Hackathons', 'Internships', 'Workshops', 'Certifications', 'Other'];

  const filteredAchievements = activeCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === activeCategory);

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">Wall 🏆</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Verified academic milestones, hackathon recognitions, and completed training certificates.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/50'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map(item => (
            <div
              key={item.id}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                    {item.category}
                  </span>
                  {item.date && (
                    <span className="text-xs font-mono text-slate-500">
                      {item.date}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-sky-400 mb-3">
                  {item.organization}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{item.badge || 'Verified'}</span>
                </span>

                {item.verificationUrl && (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Verification</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
