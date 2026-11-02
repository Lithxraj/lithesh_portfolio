import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { playHoverSound, playClickSound, playSuccessSound } from '../utils/sound';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Litheshraj.tech@gmail.com');
    setCopiedEmail(true);
    playClickSound();
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccessSound();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#3a86ff', '#8a2be2', '#ffffff']
      });
    }, 1000);
  };

  const contactChannels = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Litheshraj.tech@gmail.com',
      href: 'mailto:Litheshraj.tech@gmail.com',
      color: 'text-cyan-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8792562909',
      href: 'tel:+918792562909',
      color: 'text-emerald-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/lithesh-raj-n',
      href: 'https://linkedin.com/in/lithesh-raj-n',
      color: 'text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Lithxraj',
      href: 'https://github.com/Lithxraj',
      color: 'text-purple-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Thavarekere, Hoskote, Bengaluru',
      href: 'https://maps.google.com/?q=Thavarekere,Hoskote',
      color: 'text-indigo-400',
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-outfit text-white tracking-tight">
          LET'S BUILD <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-glow">SOMETHING AMAZING</span>.
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm sm:text-base">
          Have an AI project, research collaboration, or engineering role in mind? Let's connect and innovate together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Channels & Interactive Info */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold font-outfit text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Direct Communication
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am open to full-time engineering roles, AI/ML internships, and ambitious technological initiatives.
            </p>

            <div className="space-y-3">
              {contactChannels.map((c, idx) => (
                <a
                  key={idx}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-950/70 border border-white/5 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-dark-900 border border-white/10 group-hover:scale-110 transition-transform">
                      <c.icon className={`w-4 h-4 ${c.color}`} />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400 uppercase">{c.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                        {c.value}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Quick Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              onMouseEnter={playHoverSound}
              className="w-full py-2.5 px-4 rounded-xl bg-dark-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold hover:bg-cyan-500/10 flex items-center justify-center gap-2 transition-all shadow-md"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Quick Copy Email Address'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-white">Message Transmitted!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out! Lithesh Raj has received your message and will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-mono hover:bg-cyan-400 hover:text-dark-950 transition-all font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-300">Subject / Topic *</label>
                  <input
                    type="text"
                    required
                    placeholder="AI Collaboration, Full-Stack Project, or Job Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-300">Message *</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Hi Lithesh, I came across your portfolio and would like to discuss..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={playHoverSound}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-dark-950 font-outfit font-bold text-base shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 fill-current" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
