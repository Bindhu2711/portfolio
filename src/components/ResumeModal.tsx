import React, { useEffect } from 'react';
import { X, Printer, FileText, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const { personal, skills, projects, achievements, experiences } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl shadow-black/90 overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {personal.name} — Interactive Resume
              </h3>
              <p className="text-xs text-sky-400">
                {personal.degree} • {personal.university}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-sky-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 custom-scrollbar bg-slate-900 printable-area">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personal.name}
              </h1>
              <p className="text-sm font-semibold text-sky-400 mt-1">
                {personal.headline}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {personal.location} • {personal.email}
              </p>
            </div>

            <div className="text-xs text-slate-400 space-y-1 font-mono">
              <div>LinkedIn: bindhu-bollepelli-804a2432b</div>
              <div>GitHub: github.com/Bindhu2711</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-white">{personal.degree}</h3>
                <p className="text-xs text-sky-300">{personal.university}</p>
                <p className="text-xs text-slate-400 mt-1">Specialization in AI & ML algorithms, computer vision, data structures, and database management systems.</p>
              </div>
              <span className="text-xs font-mono text-slate-400 shrink-0">{personal.period}</span>
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map(c => (
                <div key={c.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <span className="font-bold text-white block mb-1">{c.title}</span>
                  <span className="text-slate-300">{c.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-3">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 3).map(p => (
                <div key={p.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex justify-between items-start text-xs mb-1">
                    <span className="font-bold text-white">{p.title} — <span className="font-normal text-sky-400">{p.tagline}</span></span>
                    <span className="font-mono text-slate-500">{p.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-2">{p.solution}</p>
                  <div className="text-[11px] text-slate-400 font-mono">
                    My Role: {p.myContribution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Experience & Training
            </h2>
            <div className="space-y-3">
              {experiences.map(e => (
                <div key={e.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex justify-between items-start text-xs mb-1">
                    <div>
                      <span className="font-bold text-white">{e.role}</span>
                      <span className="text-sky-400 font-medium ml-2">@{e.organization}</span>
                    </div>
                    <span className="font-mono text-slate-400">{e.duration}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 mt-2">
                    {e.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {achievements.map(a => (
                <div key={a.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="font-bold text-white">{a.title}</div>
                  <div className="text-slate-400">{a.organization} ({a.date})</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
