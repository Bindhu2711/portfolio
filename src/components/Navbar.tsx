import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Briefcase, Terminal, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  isRecruiterMode: boolean;
  onToggleRecruiterMode: () => void;
  onOpenResumeModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'journey', label: 'Journey' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'playground', label: 'Playground' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC<NavbarProps> = ({
  isRecruiterMode,
  onToggleRecruiterMode,
  onOpenResumeModal,
  theme,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-sky-400 font-bold text-sm">
              <Terminal className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-lg font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-sky-950/80 border border-sky-800/50 text-sky-400">
              AI/ML
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions (Theme Toggle + Recruiter Mode + Resume + Mobile menu toggle) */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-slate-700/80 bg-slate-900/80 text-amber-300 hover:text-amber-200 hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-sky-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Recruiter Mode Toggle */}
          <button
            onClick={onToggleRecruiterMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
              isRecruiterMode
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/60 shadow-lg shadow-emerald-950/50'
                : 'bg-slate-900/80 text-slate-300 border-slate-700/60 hover:border-slate-500'
            }`}
            title="Toggle Recruiter Executive View"
          >
            <Briefcase className={`w-3.5 h-3.5 ${isRecruiterMode ? 'text-emerald-400 animate-pulse' : 'text-slate-400'}`} />
            <span className="hidden sm:inline">
              {isRecruiterMode ? 'Recruiter Mode ON' : 'Recruiter Mode'}
            </span>
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-950/50 transition-all duration-200 transform hover:scale-105"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-300 font-medium">Appearance</span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs text-slate-200 hover:bg-slate-800 transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-sky-600" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={() => {
                onToggleRecruiterMode();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-700/50"
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              {isRecruiterMode ? 'Switch to Standard Portfolio' : 'Switch to 30-Sec Recruiter Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
