import React, { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Math.min(100, Math.max(0, Math.round(Number(scroll)))));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-950/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Tagline */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2 font-outfit text-xl font-bold text-white tracking-wide">
            <span>Lithesh Raj N</span>
            <span className="text-cyan-400">.</span>
            <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
              AI/ML ENGINEER
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Designed &amp; Developed by <span className="font-semibold text-cyan-400">Lithesh Raj N.</span>
          </p>
          <p className="text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} Lithesh Raj N. All rights reserved. Built with React &amp; Three.js.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: Linkedin, href: 'https://linkedin.com/in/lithesh-raj-n', label: 'LinkedIn' },
            { icon: Github, href: 'https://github.com/Lithxraj', label: 'GitHub' },
            { icon: Mail, href: 'mailto:Litheshraj.tech@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+918792562909', label: 'Phone' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={item.label}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-2.5 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-110"
            >
              <item.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-dark-900 border border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            <span>Top ({scrollProgress}%)</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
