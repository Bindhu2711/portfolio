import React, { useState } from 'react';
import { Mail, FileText, Send, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string, type: 'success' | 'error' | 'info') => void;
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast, onOpenResumeModal }) => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        onShowToast('Message received! (Demo mode: Email backend endpoint ready for integration)', 'success');
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/40 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Meaningful.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Open to internships, AI/ML projects, technical collaborations, and hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Quick Links & Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 rounded-3xl border border-slate-800/80">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-xs text-slate-400 mb-6">
                Feel free to email directly or connect on professional networks.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all text-slate-200 hover:text-white"
                >
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">EMAIL</span>
                    <span className="text-xs font-medium">{personal.email}</span>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all text-slate-200 hover:text-white"
                >
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">LINKEDIN</span>
                    <span className="text-xs font-medium">bindhu-bollepelli-804a2432b</span>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all text-slate-200 hover:text-white"
                >
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">GITHUB</span>
                    <span className="text-xs font-medium">github.com/Bindhu2711</span>
                  </div>
                </a>

                <button
                  onClick={onOpenResumeModal}
                  className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all text-slate-200 hover:text-white text-left"
                >
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block">RESUME</span>
                    <span className="text-xs font-medium">Interactive Resume & Download</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800/80">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                />
                {errors.name && (
                  <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">
                  YOUR EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                />
                {errors.email && (
                  <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about internship opportunities, projects, or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold text-xs shadow-xl shadow-sky-950/50 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
