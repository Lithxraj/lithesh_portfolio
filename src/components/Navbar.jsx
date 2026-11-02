import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, FileDown } from 'lucide-react';
import { playHoverSound, playClickSound, toggleMute, getMutedState } from '../utils/sound';
import confetti from 'canvas-confetti';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(getMutedState());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newMuted = toggleMute();
    setMuted(newMuted);
    if (!newMuted) playClickSound();
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    playClickSound();
    confetti({
      particleCount: 85,
      spread: 65,
      origin: { y: 0.1, x: 0.85 },
      colors: ['#00f0ff', '#3a86ff', '#8a2be2', '#ffffff']
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-dark-950/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="group flex items-center gap-3"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-dark-900 border border-cyan-500/30 group-hover:border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300">
            <span className="font-outfit font-black text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              LR
            </span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />
          </div>
          <div>
            <span className="font-outfit font-bold text-sm tracking-wider text-white group-hover:text-cyan-400 transition-colors block">
              LITHESH RAJ N.
            </span>
            <span className="font-mono text-[10px] tracking-widest text-slate-400">
              AI/ML ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-full ${
                  isActive
                    ? 'text-white bg-cyan-500/15 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            aria-label={muted ? 'Enable UI Sound' : 'Mute UI Sound'}
            title={muted ? 'Enable sound effects' : 'Mute sound effects'}
            className="p-2 rounded-xl bg-dark-900/80 border border-white/10 text-slate-400 hover:text-cyan-400 transition-all"
          >
            {muted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Download Resume Button */}
          <a
            href="/assets/Lithesh Raj N.pdf"
            download="Lithesh_Raj_N_Resume.pdf"
            onClick={handleDownloadResume}
            onMouseEnter={playHoverSound}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 font-outfit shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-105 transition-all duration-300"
          >
            <FileDown className="w-4 h-4 stroke-[2.5]" />
            <span className="font-bold">Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-dark-900/95 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="/assets/Lithesh Raj N.pdf"
              download="Lithesh_Raj_N_Resume.pdf"
              onClick={() => {
                handleDownloadResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold font-outfit rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-dark-950 shadow-md"
            >
              <FileDown className="w-4 h-4" />
              Download Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
