import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle, Terminal } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export default function Education() {
  const educationItems = [
    {
      degree: 'Bachelor of Engineering — Computer Science Engineering (AI & ML)',
      institution: 'VTU Affiliated Engineering College',
      location: 'Bengaluru, Karnataka',
      period: 'Expected 2028',
      type: 'Undergraduate Degree',
      highlights: [
        'Specializing in Artificial Intelligence and Machine Learning',
        'Interests in AI, computer vision, robotics, and software development',
        'Hands-on engineering projects with Raspberry Pi, Python, sensors, and IoT'
      ]
    },
    {
      degree: '2 PUC (Pre-University Course)',
      institution: 'Mahadeva PU College',
      location: 'Karnataka, India',
      period: '2024',
      type: 'Pre-University Education',
      highlights: [
        'Completed higher secondary science curriculum with mathematical and physical sciences foundation',
        'Transitioned into advanced computer science & AI engineering stream'
      ]
    }
  ];

  const coursework = [
    'Deep Learning & Neural Architectures',
    'Computer Vision & Image Processing (OpenCV)',
    'Design & Analysis of Algorithms',
    'Object-Oriented Programming (Python, Java, C)',
    'Embedded IoT Systems & Raspberry Pi',
    'Database Management & SQL Systems',
  ];

  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-outfit text-white tracking-tight">
          EDUCATION & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ACADEMICS</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Main Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {educationItems.map((edu, idx) => (
          <div
            key={idx}
            onMouseEnter={playHoverSound}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden group shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {edu.period}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white mb-1">
              {edu.degree}
            </h3>
            <p className="text-sm font-semibold text-cyan-400 mb-4">
              {edu.institution}
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-300 mb-6">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{edu.location}</span>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              {edu.highlights.map((h, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/15 transition-all" />
          </div>
        ))}
      </div>

      {/* Relevant Core Coursework */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
        <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          Key Technical Coursework & Curriculum Competencies
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {coursework.map((course, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-dark-950/60 border border-white/5 text-xs font-mono text-slate-300 hover:border-cyan-400/30 transition-colors"
            >
              • {course}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
