import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Internships & <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Training History</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Hands-on technical development training, virtual software engineering simulations, and lab projects.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map(exp => (
            <div
              key={exp.id}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/80"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 mb-1 inline-block">
                    {exp.type}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-sky-400">
                    {exp.organization}
                  </p>
                </div>

                <div className="text-xs text-slate-400 font-mono space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Responsibilities & Contributions
                </span>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Gained */}
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                  SKILLS & TOOLS GAINED
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skillsGained.map(skill => (
                    <span key={skill} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 text-sky-300 border border-slate-800">
                      {skill}
                    </span>
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
