import React from 'react';
import { ArrowDown, Code2, Send, FileDown, Brain, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Pill Indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-lg shadow-black/40 mb-8 animate-pulse-subtle">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative" />
          <span className="text-xs sm:text-sm font-medium text-slate-200">
            {portfolioData.personal.statusText}
          </span>
        </div>

        {/* Greeting & Avatar Tag */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/30 backdrop-blur-md">
            <Brain className="w-6 h-6 text-sky-400" />
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            Hi, I'm {portfolioData.personal.name} 👋
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          <span className="block">{portfolioData.personal.headline}</span>
        </h1>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          "{portfolioData.personal.subHeadline}"
        </p>

        {/* Academic Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-400 mb-10">
          <Terminal className="w-4 h-4 text-sky-400" />
          <span>{portfolioData.personal.degree}</span>
          <span className="text-slate-600">•</span>
          <span className="text-sky-300 font-medium">{portfolioData.personal.university}</span>
          <span className="text-slate-600">•</span>
          <span>({portfolioData.personal.period})</span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-sky-950/60 hover:shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4" />
            <span>View Projects</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4 text-sky-400" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 text-sky-400 font-semibold text-sm border border-sky-500/30 hover:border-sky-500/60 transition-all duration-300"
          >
            <Send className="w-4 h-4" />
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo('about')}
          className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-sky-400 transition-colors focus:outline-none"
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Explore Portfolio</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
        </button>
      </div>
    </section>
  );
};
