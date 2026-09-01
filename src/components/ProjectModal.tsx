import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ShieldAlert, Cpu, Sparkles, Layers, Award } from 'lucide-react';
import { Github } from './Icons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="relative h-48 sm:h-64 overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-700/80 hover:bg-slate-800 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.category.map(cat => (
                <span key={cat} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-sky-950/90 text-sky-300 border border-sky-800/60">
                  {cat}
                </span>
              ))}
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-800/60">
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-sky-300 font-medium">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
          {/* Grid section: Problem -> Idea -> Solution */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" /> Problem
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Idea
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Solution
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-sky-400" /> Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-800/80 text-sky-300 border border-slate-700/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" /> Key Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Contribution & Outcome */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <h5 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-1">
                My Contribution
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.myContribution}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <h5 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> Project Outcome
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                onClick={e => {
                  if (project.liveDemoUrl?.startsWith('#playground')) {
                    e.preventDefault();
                    onClose();
                    const el = document.getElementById('playground');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold shadow-lg shadow-sky-950/50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Interactive Playground Demo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white text-xs font-semibold border border-slate-800"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
