import React from 'react';
import { Star, GitFork, ExternalLink, Code } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  const { github } = portfolioData;

  return (
    <section className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            GitHub <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Activity</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Explore code repositories, open-source projects, and language distribution.
          </p>
        </div>

        {/* Profile Card & Language Stats */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 max-w-4xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white shrink-0">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  @{github.username}
                </h3>
                <p className="text-xs text-slate-400">
                  {github.publicRepos} Public Repositories • Python & Web Developer
                </p>
              </div>
            </div>

            <a
              href={github.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </div>

          {/* Languages Bar */}
          <div className="pt-6">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
              PRIMARY PROGRAMMING LANGUAGES
            </span>

            {/* Visual stacked bar */}
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-900 mb-4">
              {github.topLanguages.map(lang => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Language Legend */}
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              {github.topLanguages.map(lang => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="text-slate-200 font-semibold">{lang.name}</span>
                  <span className="text-slate-500">({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Repo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {github.featuredRepos.map(repo => (
            <div
              key={repo.name}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-sky-400 font-mono flex items-center gap-1.5">
                    <Code className="w-4 h-4" />
                    {repo.name}
                  </span>
                  <a href={repo.url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-sky-300 font-medium">{repo.language}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-500" /> {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
