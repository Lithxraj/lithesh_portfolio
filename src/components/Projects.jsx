import React, { useState } from 'react';
import { Github, Play, Cpu, Eye, Utensils, BookOpen, Terminal } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';
import LiveDemoModal from './LiveDemoModal';

export default function Projects() {
  const [selectedDemoProject, setSelectedDemoProject] = useState(null);

  const projects = [
    {
      id: 'intelliwatch',
      title: 'IntelliWatch',
      subtitle: 'Smart Industrial Monitoring & Lighting Automation',
      description:
        'Smart industrial monitoring and lighting automation using Raspberry Pi, sensors, and intelligent automation. Reduces industrial energy wastage by dynamically scaling bay illumination based on real-time ambient lux and personnel presence.',
      tech: ['Raspberry Pi', 'IoT Sensors', 'Python', 'Relay Modules', 'Automation Logic'],
      github: 'https://github.com/Lithxraj',
      icon: Cpu,
      badge: 'INDUSTRIAL AUTOMATION',
      accentColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-400',
      illustration: (
        <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill="#090d16" />
          <path d="M0 60h400M0 120h400M0 180h400M100 0v240M200 0v240M300 0v240" stroke="rgba(0,240,255,0.06)" strokeWidth="1" />
          <path d="M60 120h80l40-40h120" stroke="#00f0ff" strokeWidth="2.5" strokeDasharray="6 4" />
          <path d="M60 180h100l30 30h110" stroke="#3a86ff" strokeWidth="2" />
          <rect x="170" y="80" width="70" height="70" rx="10" fill="#030712" stroke="#00f0ff" strokeWidth="2" />
          <text x="180" y="120" fill="#00f0ff" fontSize="12" fontFamily="monospace" fontWeight="bold">R-Pi 4B</text>
          <circle cx="140" cy="120" r="6" fill="#00f0ff" className="animate-pulse" />
          <circle cx="300" cy="80" r="6" fill="#3a86ff" />
          <circle cx="280" cy="210" r="5" fill="#00f5d4" />
          <path d="M70 40 Q 110 10, 150 40 T 230 40 T 310 40" stroke="rgba(0,240,255,0.4)" strokeWidth="1.5" fill="none" />
          <text x="24" y="36" fill="#94a3b8" fontSize="10" fontFamily="monospace">LUX: 142 // TELEMETRY OK</text>
        </svg>
      ),
    },
    {
      id: 'nutrinex',
      title: 'NutriNex',
      subtitle: 'AI-Powered Cafeteria & Food Recommendation Platform',
      description:
        'AI-powered cafeteria management and food recommendation platform with intelligent menu search, allergy detection, and personalized nutritional ordering based on user dietary goals.',
      tech: ['Python', 'FastAPI', 'Machine Learning', 'React.js', 'PostgreSQL'],
      github: 'https://github.com/Lithxraj',
      icon: Utensils,
      badge: 'AI RECOMMENDER',
      accentColor: 'text-purple-400',
      borderColor: 'group-hover:border-purple-400',
      illustration: (
        <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill="#0c0e1a" />
          <path d="M0 60h400M0 120h400M0 180h400M100 0v240M200 0v240M300 0v240" stroke="rgba(168,85,247,0.06)" strokeWidth="1" />
          <circle cx="200" cy="120" r="65" stroke="rgba(168,85,247,0.3)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="120" r="45" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" />
          <circle cx="200" cy="120" r="25" fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeWidth="2" />
          <path d="M200 65L235 110L215 155L165 145L165 95Z" fill="rgba(192,132,252,0.2)" stroke="#c084fc" strokeWidth="2" />
          <text x="175" y="125" fill="#f3e8ff" fontSize="12" fontFamily="monospace" fontWeight="bold">AI MATCH</text>
          <text x="24" y="36" fill="#c084fc" fontSize="10" fontFamily="monospace">PROTEIN: 34g // CAL: 480</text>
        </svg>
      ),
    },
    {
      id: 'smart-blind',
      title: 'Smart Blind Assistant',
      subtitle: 'AI Assistive Computer Vision & Voice System',
      description:
        'An AI-powered assistive system for visually impaired people using YOLO object detection, OCR text recognition, voice assistance audio cues, and Raspberry Pi hardware telemetry.',
      tech: ['Raspberry Pi', 'YOLO v8', 'OpenCV', 'Text-to-Speech', 'Computer Vision'],
      github: 'https://github.com/Lithxraj',
      icon: Eye,
      badge: 'COMPUTER VISION // EDGE AI',
      accentColor: 'text-amber-400',
      borderColor: 'group-hover:border-amber-400',
      illustration: (
        <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill="#0d1117" />
          <path d="M0 60h400M0 120h400M0 180h400M100 0v240M200 0v240M300 0v240" stroke="rgba(245,158,11,0.06)" strokeWidth="1" />
          <rect x="70" y="70" width="100" height="120" rx="6" stroke="#f59e0b" strokeWidth="2" fill="rgba(245,158,11,0.08)" />
          <rect x="70" y="52" width="75" height="18" rx="4" fill="#f59e0b" />
          <text x="76" y="65" fill="#000" fontSize="10" fontFamily="monospace" fontWeight="bold">Person 94%</text>
          <rect x="220" y="90" width="110" height="100" rx="6" stroke="#00f0ff" strokeWidth="2" fill="rgba(0,240,255,0.08)" />
          <rect x="220" y="72" width="70" height="18" rx="4" fill="#00f0ff" />
          <text x="226" y="85" fill="#000" fontSize="10" fontFamily="monospace" fontWeight="bold">Chair 91%</text>
          <circle cx="200" cy="120" r="10" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="200" y1="105" x2="200" y2="135" stroke="#f59e0b" strokeWidth="1" />
          <line x1="185" y1="120" x2="215" y2="120" stroke="#f59e0b" strokeWidth="1" />
          <text x="24" y="36" fill="#f59e0b" fontSize="10" fontFamily="monospace">AUDIO: OBSTACLE 1.2M</text>
        </svg>
      ),
    },
    {
      id: 'stylelearn',
      title: 'StyleLearn',
      subtitle: 'Adaptive AI Personalized Learning Platform',
      description:
        'AI-powered personalized learning platform using the VARK learning style model to analyze comprehension predispositions and generate adaptive pedagogical materials.',
      tech: ['Python', 'FastAPI', 'React.js', 'VARK Model', 'Generative AI'],
      github: 'https://github.com/Lithxraj',
      icon: BookOpen,
      badge: 'NEURAL ADAPTIVE TECH',
      accentColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-400',
      illustration: (
        <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill="#081412" />
          <path d="M0 60h400M0 120h400M0 180h400M100 0v240M200 0v240M300 0v240" stroke="rgba(16,185,129,0.06)" strokeWidth="1" />
          <line x1="110" y1="120" x2="200" y2="70" stroke="#10b981" strokeWidth="2" />
          <line x1="200" y1="70" x2="290" y2="120" stroke="#10b981" strokeWidth="2" />
          <line x1="290" y1="120" x2="200" y2="170" stroke="#10b981" strokeWidth="2" />
          <line x1="200" y1="170" x2="110" y2="120" stroke="#10b981" strokeWidth="2" />
          <circle cx="110" cy="120" r="16" fill="#022c22" stroke="#10b981" strokeWidth="2" />
          <text x="105" y="124" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">V</text>
          <circle cx="200" cy="70" r="16" fill="#022c22" stroke="#10b981" strokeWidth="2" />
          <text x="195" y="74" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">A</text>
          <circle cx="290" cy="120" r="16" fill="#022c22" stroke="#10b981" strokeWidth="2" />
          <text x="285" y="124" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">R</text>
          <circle cx="200" cy="170" r="16" fill="#022c22" stroke="#10b981" strokeWidth="2" />
          <text x="195" y="174" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">K</text>
          <text x="24" y="36" fill="#10b981" fontSize="10" fontFamily="monospace">VARK COGNITIVE GRAPH</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Engineering Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-outfit text-white tracking-tight">
          FEATURED <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">PROJECTS</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
        <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm sm:text-base">
          Autonomous systems, real-time computer vision, edge embedded engineering, and intelligent web platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => {
          const Icon = proj.icon;
          return (
            <div
              key={proj.id}
              onMouseEnter={playHoverSound}
              className={`glass-panel rounded-3xl overflow-hidden border border-white/10 ${proj.borderColor} transition-all duration-500 hover:-translate-y-2 group shadow-xl flex flex-col justify-between`}
            >
              {/* Illustration Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-dark-950 p-2 border-b border-white/10">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  {proj.illustration}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-dark-950/80 backdrop-blur-md border border-white/10 text-white shadow-md">
                    {proj.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-5 h-5 ${proj.accentColor}`} />
                    <h3 className="text-2xl font-bold font-outfit text-white group-hover:text-glow transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mb-3">{proj.subtitle}</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        playClickSound();
                        setSelectedDemoProject(proj);
                      }}
                      onMouseEnter={playHoverSound}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-dark-950 text-xs sm:text-sm font-bold font-outfit shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Live Simulation Demo</span>
                    </button>

                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      onMouseEnter={playHoverSound}
                      aria-label="View on GitHub"
                      className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Demo Modal */}
      {selectedDemoProject && (
        <LiveDemoModal
          project={selectedDemoProject}
          onClose={() => setSelectedDemoProject(null)}
        />
      )}
    </section>
  );
}
