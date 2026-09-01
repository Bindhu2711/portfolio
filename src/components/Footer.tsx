import React from 'react';
import { Terminal, Mail, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-sky-400 font-bold text-xs">
              <Terminal className="w-3.5 h-3.5" />
            </div>
          </div>
          <div>
            <span className="font-bold text-white text-sm block">{personal.name}</span>
            <span className="text-[11px] text-slate-500 font-mono">Designed & Built by Bindhu</span>
          </div>
        </div>

        {/* Quick Nav links */}
        <div className="flex flex-wrap justify-center gap-4 text-slate-400 font-medium">
          <button onClick={() => scrollTo('home')} className="hover:text-sky-400 transition-colors">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-sky-400 transition-colors">About</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-sky-400 transition-colors">Skills</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-sky-400 transition-colors">Projects</button>
          <button onClick={() => scrollTo('playground')} className="hover:text-sky-400 transition-colors">Playground</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-sky-400 transition-colors">Contact</button>
        </div>

        {/* Social Badges */}
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResumeModal}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="Resume"
          >
            <FileText className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900/80 text-center text-slate-500 font-mono text-[11px]">
        © 2026 Bindhu. All rights reserved. • B.Tech CSE (AI & ML), Vaagdevi College of Engineering
      </div>
    </footer>
  );
};
