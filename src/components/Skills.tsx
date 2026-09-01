import React, { useState } from 'react';
import { 
  Code, Cpu, Brain, Sparkles, MessageSquareText, Eye, 
  Layout, Palette, FileCode, GitBranch, Binary, Database, 
  Layers, HardDrive, Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillLevel } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const { skills } = portfolioData;

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-4 h-4 text-sky-400" />;
      case 'Code': return <Code className="w-4 h-4 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Brain': return <Brain className="w-4 h-4 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'MessageSquareText': return <MessageSquareText className="w-4 h-4 text-cyan-400" />;
      case 'Eye': return <Eye className="w-4 h-4 text-rose-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-blue-400" />;
      case 'Palette': return <Palette className="w-4 h-4 text-teal-400" />;
      case 'FileCode': return <FileCode className="w-4 h-4 text-yellow-400" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-orange-400" />;
      case 'Binary': return <Binary className="w-4 h-4 text-violet-400" />;
      case 'Database': return <Database className="w-4 h-4 text-sky-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'HardDrive': return <HardDrive className="w-4 h-4 text-slate-400" />;
      default: return <Code className="w-4 h-4 text-sky-400" />;
    }
  };

  const getBadgeColor = (level: SkillLevel) => {
    switch (level) {
      case 'Proficient':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50';
      case 'Intermediate':
        return 'bg-sky-950/80 text-sky-300 border-sky-800/50';
      case 'Exploring':
        return 'bg-purple-950/80 text-purple-300 border-purple-800/50';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700';
    }
  };

  const categoriesToShow = activeTab === 'all'
    ? skills
    : skills.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/40 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Categorized <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Skills & Stack</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Verified academic and project skill sets with honest level indicators.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-950/50'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Skills
          </button>
          {skills.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-950/50'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesToShow.map(category => (
            <div
              key={category.id}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map(skill => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                          {getIcon(skill.iconName)}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-200 block">
                            {skill.name}
                          </span>
                          {skill.tag && (
                            <span className="text-[10px] text-slate-400 block font-mono">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getBadgeColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
