import { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ImpactDashboard } from './components/ImpactDashboard';
import { Playground } from './components/Playground';
import { SmartResume } from './components/SmartResume';
import { ResumeModal } from './components/ResumeModal';
import { JourneyTimeline } from './components/JourneyTimeline';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { BeyondCode } from './components/BeyondCode';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';
import { RecruiterView } from './components/RecruiterView';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const handleToggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      return next;
    });
  };

  const handleShowToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
  };

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200 bg-grid-pattern bg-radial-gradient">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Particle Canvas Ambient Layer */}
      <ParticleBackground theme={theme} />

      {/* Navigation Header */}
      <Navbar
        isRecruiterMode={isRecruiterMode}
        onToggleRecruiterMode={() => setIsRecruiterMode(!isRecruiterMode)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main>
        {isRecruiterMode ? (
          <RecruiterView
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
            onExitRecruiterMode={() => setIsRecruiterMode(false)}
          />
        ) : (
          <>
            <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
            <About />
            <Skills />
            <Projects />
            <ImpactDashboard />
            <Playground />
            <SmartResume onOpenResumeModal={() => setIsResumeModalOpen(true)} />
            <JourneyTimeline />
            <CurrentlyBuilding />
            <Achievements />
            <Experience />
            <BeyondCode />
            <GithubSection />
            <Contact
              onShowToast={handleShowToast}
              onOpenResumeModal={() => setIsResumeModalOpen(true)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Floating AI Portfolio Assistant Widget */}
      <AiAssistant />

      {/* Back To Top Floating Button */}
      <BackToTop />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Toast Notification Banner */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
