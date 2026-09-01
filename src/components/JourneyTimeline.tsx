import React from 'react';
import { Compass, Calendar, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const { timeline } = portfolioData;

  return (
    <section id="journey" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/40 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic & Skill Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Learning <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Journey 🗺️</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Chronological growth timeline from starting B.Tech CSE (AI & ML) to future milestones.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((entry, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={entry.year}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg ${
                      entry.highlight
                        ? 'bg-sky-500 text-white shadow-sky-500/40 ring-4 ring-sky-950'
                        : 'bg-slate-900 text-sky-400 border border-slate-700'
                    }`}>
                      {entry.highlight ? <Star className="w-4 h-4 text-amber-300" /> : <Calendar className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-0 sm:text-right' : 'sm:pl-0 sm:text-left'
                  }`}>
                    <div className={`glass-card p-6 rounded-3xl border ${
                      entry.highlight
                        ? 'border-sky-500/40 shadow-lg shadow-sky-950/30'
                        : 'border-slate-800'
                    }`}>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-950 text-sky-300 border border-sky-800/60 mb-2">
                        {entry.year}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {entry.title}
                      </h3>
                      <p className="text-xs font-semibold text-sky-400 mb-3">
                        {entry.subtitle}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {entry.description}
                      </p>

                      {entry.skills && (
                        <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                          {entry.skills.map(s => (
                            <span key={s} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
