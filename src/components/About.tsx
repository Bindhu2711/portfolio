import React from 'react';
import { GraduationCap, Sparkles, Heart, Lightbulb, Compass, Code, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const enjoyIcons = [
    <Code key="code" className="w-5 h-5 text-sky-400" />,
    <GraduationCap key="grad" className="w-5 h-5 text-indigo-400" />,
    <Lightbulb key="bulb" className="w-5 h-5 text-amber-400" />,
    <Brain key="brain" className="w-5 h-5 text-emerald-400" />,
    <Sparkles key="sparkles" className="w-5 h-5 text-purple-400" />,
    <Heart key="heart" className="w-5 h-5 text-rose-400" />
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/40 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Architecting <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">AI & Tech</span> Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800/80">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-sky-400 font-bold text-xl">
                  B
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personal.name}</h3>
                <p className="text-sm text-sky-400 font-medium">{personal.degree}</p>
                <p className="text-xs text-slate-400">{personal.university} ({personal.period})</p>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {personal.aboutText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-sm">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-xs text-slate-500 block font-mono">LOCATION</span>
                <span className="text-slate-200 font-medium">{personal.location}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-xs text-slate-500 block font-mono">DEGREE FOCUS</span>
                <span className="text-slate-200 font-medium">B.Tech CSE (AI & ML)</span>
              </div>
            </div>
          </div>

          {/* "What I Enjoy" Grid */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-card p-6 rounded-3xl border border-slate-800/80">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>What I Enjoy</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personal.interests.map((interest, idx) => (
                  <div
                    key={interest}
                    className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-800/60 transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      {enjoyIcons[idx % enjoyIcons.length]}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
