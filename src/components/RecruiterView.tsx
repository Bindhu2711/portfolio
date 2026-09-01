import React from 'react';
import { 
  Briefcase, FileText, Mail, ExternalLink, 
  GraduationCap, Code2, CheckCircle2 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface RecruiterViewProps {
  onOpenResumeModal: () => void;
  onExitRecruiterMode: () => void;
}

export const RecruiterView: React.FC<RecruiterViewProps> = ({
  onOpenResumeModal,
  onExitRecruiterMode
}) => {
  const { personal, skills, projects, achievements, experiences } = portfolioData;

  const topProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 text-slate-100 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter Executive Header Banner */}
        <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-sky-950/80 border border-emerald-800/60 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                30-SECOND EXECUTIVE RECRUITER SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Candidate Profile: {personal.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </button>
            <button
              onClick={onExitRecruiterMode}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition-colors"
            >
              Exit Recruiter View
            </button>
          </div>
        </div>

        {/* 1. Executive Summary & Academic Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 glass-card p-6 rounded-3xl border border-slate-800">
            <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">
              Candidate Overview
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-normal mb-4">
              {personal.aboutText}
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-medium">
                🟢 {personal.statusText}
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800/60 font-medium">
                Targeting AI / Software Internships (Summer 2026)
              </span>
            </div>
          </div>

          {/* Key Quick Info */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h3>
              <div className="text-sm font-bold text-white mb-0.5">
                {personal.degree}
              </div>
              <div className="text-xs text-sky-400 font-medium mb-1">
                {personal.university}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Batch: {personal.period} (3rd Year)
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <a href={`mailto:${personal.email}`} className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800">
                <Mail className="w-4 h-4" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Technical Stack Quick Matrix */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 mb-8">
          <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-sky-400" /> Core Technical Skill Matrix
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map(cat => (
              <div key={cat.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-bold text-white block mb-2">{cat.title}</span>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.map(s => (
                    <span key={s.name} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-sky-300 border border-slate-800">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Top 3 Key Projects Showcase */}
        <div className="mb-8">
          <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
            Top 3 Highlighted Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topProjects.map(p => (
              <div key={p.id} className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                      {p.category[0]}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">{p.status}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{p.title}</h4>
                  <p className="text-xs text-slate-300 line-clamp-3 mb-3 leading-relaxed">
                    {p.problem}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">{p.technologies.slice(0, 2).join(', ')}</span>
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-xs text-sky-400 font-semibold hover:underline flex items-center gap-1">
                      <span>Code</span> <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Experience & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-3xl border border-slate-800">
            <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-3">
              Practical Experience & Training
            </h3>
            <div className="space-y-4">
              {experiences.map(e => (
                <div key={e.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white">{e.role}</span>
                    <span className="text-slate-400 font-mono">{e.duration}</span>
                  </div>
                  <div className="text-xs text-sky-400 font-medium mb-2">{e.organization}</div>
                  <ul className="text-xs text-slate-300 space-y-1">
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

          <div className="glass-card p-6 rounded-3xl border border-slate-800">
            <h3 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-3">
              Verified Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map(a => (
                <div key={a.id} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{a.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      {a.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{a.organization} ({a.date})</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
