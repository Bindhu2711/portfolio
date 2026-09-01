import React from 'react';
import { FileText, Eye, GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface SmartResumeProps {
  onOpenResumeModal: () => void;
}

export const SmartResume: React.FC<SmartResumeProps> = ({ onOpenResumeModal }) => {
  const { personal, experiences, achievements } = portfolioData;

  return (
    <section id="resume" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/40 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Interactive Resume</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Smart <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Resume & Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Structured overview of academic background, skills, internships, and verified course certifications.
          </p>
        </div>

        {/* Resume Preview Card Container */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800/80 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-bold text-white">{personal.name}</h3>
              <p className="text-sm text-sky-400 font-medium">{personal.degree}</p>
              <p className="text-xs text-slate-400">{personal.university} • Class of 2028</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-sky-950/50 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Interactive Resume</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Academic & Experience column */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Education Snapshot
                </h4>
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-xs font-bold text-white block">{personal.degree}</span>
                  <span className="text-xs text-sky-400 block">{personal.university}</span>
                  <span className="text-[11px] font-mono text-slate-400 block mt-1">2024 – 2028 (3rd Year Undergraduate)</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" /> Practical Experience
                </h4>
                <div className="space-y-3">
                  {experiences.map(e => (
                    <div key={e.id} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                      <div className="flex justify-between items-start text-xs mb-1">
                        <span className="font-bold text-white">{e.role}</span>
                        <span className="font-mono text-slate-400 text-[10px]">{e.duration}</span>
                      </div>
                      <span className="text-xs text-sky-400 block mb-2">{e.organization}</span>
                      <ul className="text-xs text-slate-300 space-y-1">
                        {e.responsibilities.slice(0, 2).map((r, i) => (
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
            </div>

            {/* Certifications & Skills Column */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Verified Certifications
                </h4>
                <div className="space-y-3">
                  {achievements.map(a => (
                    <div key={a.id} className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-white">{a.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                          {a.badge}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 block">{a.organization} ({a.date})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
