import React from 'react';
import { Hammer, BookOpen, Target, Sprout } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CurrentlyBuilding: React.FC = () => {
  const { currentlyBuilding } = portfolioData;

  const items = [
    {
      icon: <Hammer className="w-5 h-5 text-amber-400" />,
      label: 'Currently Building 🔨',
      title: currentlyBuilding.building.title,
      description: currentlyBuilding.building.description,
      borderColor: 'border-amber-500/30'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-sky-400" />,
      label: 'Active Learning 📚',
      title: currentlyBuilding.learning.title,
      description: currentlyBuilding.learning.description,
      borderColor: 'border-sky-500/30'
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      label: 'Immediate Goal 🎯',
      title: currentlyBuilding.goal.title,
      description: currentlyBuilding.goal.description,
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: <Sprout className="w-5 h-5 text-purple-400" />,
      label: 'Exploring Next 🌱',
      title: currentlyBuilding.exploring.title,
      description: currentlyBuilding.exploring.description,
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <section className="py-16 relative z-10 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Hammer className="w-3.5 h-3.5" />
            <span>Live Activity Status</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Currently <span className="bg-gradient-to-r from-amber-400 to-sky-400 bg-clip-text text-transparent">Building & Learning 🔨</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`glass-card p-6 rounded-3xl border ${item.borderColor} hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
