import React, { useState } from 'react';
import { FolderCode, ArrowRight, Eye } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'AI/ML', 'Web', 'Academic', 'Hackathon', 'Other'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/40 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderCode className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Intelligent <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">AI & Web</span> Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Real solutions addressing campus safety, scam prevention, computer vision verification, and student utilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-950/50'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-800/80 group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-800/60">
                      {project.status}
                    </span>
                  </div>

                  {/* Category Pills */}
                  <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                    {project.category.map(cat => (
                      <span key={cat} className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-900/90 text-sky-300 border border-slate-800">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-sky-400/90 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                    {project.problem}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950 text-slate-500 border border-slate-800">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
