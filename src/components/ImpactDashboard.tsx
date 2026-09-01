import React, { useEffect, useState, useRef } from 'react';
import { FolderCode, Trophy, Briefcase, Award, GraduationCap, Cpu, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ImpactDashboard: React.FC = () => {
  const { impactMetrics } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getMetricIcon = (name: string) => {
    switch (name) {
      case 'FolderCode': return <FolderCode className="w-6 h-6 text-sky-400" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-emerald-400" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      default: return <TrendingUp className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-16 relative z-10 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Impact Metrics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Key Metrics & <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Milestones</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {impactMetrics.map(metric => (
            <div
              key={metric.id}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 text-center flex flex-col items-center justify-center group hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 mb-3 group-hover:scale-110 transition-transform">
                {getMetricIcon(metric.iconName)}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1">
                {isVisible ? metric.value : 0}
                <span className="text-sky-400 text-2xl">{metric.suffix}</span>
              </div>
              <div className="text-xs font-bold text-slate-200 mb-1">
                {metric.label}
              </div>
              <div className="text-[10px] text-slate-400 line-clamp-2 leading-tight">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
