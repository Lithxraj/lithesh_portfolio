import React, { useState } from 'react';
import { Trophy, Award, GraduationCap, Cpu, Calendar, Terminal, ExternalLink, CheckCircle2 } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';
import CertificatesModal from './CertificatesModal';

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  const timelineItems = [
    {
      id: 'hackathon',
      title: 'Hackathon Participation & Innovation',
      organization: 'GCEM Hacks 5.0 & Collegiate Competitions',
      type: 'Competitive Technical Event',
      period: '2024 - 2025',
      icon: Trophy,
      badge: 'HACKATHON',
      description:
        'Competed in collaborative hackathons developing rapid prototypes integrating hardware sensors, computer vision, and automation logic. Successfully demonstrated functional edge AI and IoT monitoring systems.',
      certificate: {
        title: 'GCEM Hacks 5.0 Certificate of Participation',
        issuer: 'GCEM Hackathon Committee',
        year: '2025',
        filename: 'Certificate - GCEM Hacks 5.0.pdf',
        description: 'Verified certification for technical prototype development at GCEM Hacks 5.0.',
      },
    },
    {
      id: 'mini-project-exhibition',
      title: 'Mini Project Exhibition & System Demonstrations',
      organization: 'Department of Computer Science & Engineering',
      type: 'Academic Exhibition',
      period: '2025 - 2026',
      icon: Cpu,
      badge: 'EXHIBITION',
      description:
        'Selected to exhibit engineering mini-projects demonstrating "AI Blind Assistant Using Raspberry Pi" and "Smart Street Light Automation System", receiving praise for real-world assistive utility and energy conservation.',
      certificate: {
        title: 'Mini Project Exhibition Award Certificate',
        issuer: 'VTU Faculty of Computer Science & Engineering',
        year: '2025 - 2026',
        filename: 'mini project 2025.pdf',
        description: 'Official academic commendation for excellence in prototype exhibition and practical defense.',
      },
      tags: ['Raspberry Pi', 'OpenCV', 'IR Sensors', 'LDR Sensors', 'Relay Modules'],
    },
    {
      id: 'python-cert',
      title: 'Python Programming Certification (2026)',
      organization: 'Verified Technical Certification',
      type: 'Technical Credential',
      period: '2026',
      icon: Award,
      badge: 'CERTIFIED',
      description:
        'Certified expertise in core and advanced Python programming, algorithms, OOP architecture, and automated scripting for computer vision and machine learning applications.',
      certificate: {
        title: 'Python Programming Masterclass Certification',
        issuer: 'Technical Academy',
        year: '2026',
        filename: 'python.pdf',
        description: 'Verified certification in Python data structures, algorithms, and application development.',
      },
    },
    {
      id: 'database-cert',
      title: 'Introduction to Databases Certification (2026)',
      organization: 'Database & Data Systems Institute',
      type: 'Technical Credential',
      period: '2026',
      icon: Award,
      badge: 'CERTIFIED',
      description:
        'Comprehensive grounding in relational and modern database systems, SQL query structuring, normalization, indexing, and persistent state management for software applications.',
      tags: ['SQL', 'Database Design', 'Schema Architecture', 'Data Integrity'],
    },
  ];

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Milestones & Verified Work</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-outfit text-white tracking-tight">
          EXPERIENCE & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ACHIEVEMENTS</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
        <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm sm:text-base">
          Proven track record in competitive hackathons, project exhibitions, and verified technical credentials.
        </p>
      </div>

      {/* Interactive Timeline */}
      <div className="relative border-l border-white/10 md:ml-32 ml-4 space-y-12">
        {timelineItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-dark-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_#00f0ff] group-hover:scale-125 transition-transform">
                <Icon className="w-4 h-4" />
              </div>

              {/* Date Tag on Desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className="text-xs font-mono text-slate-400 font-semibold">{item.period}</span>
              </div>

              {/* Timeline Card */}
              <div
                onMouseEnter={playHoverSound}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="md:hidden text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-white/5 border border-white/10 text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 mb-4">
                  {item.organization} // {item.type}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-dark-950 border border-white/5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Certificate Action */}
                {item.certificate && (
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Credential Document Attached
                    </span>
                    <button
                      onClick={() => {
                        playClickSound();
                        setSelectedCert(item.certificate);
                      }}
                      onMouseEnter={playHoverSound}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-400 hover:text-dark-950 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold transition-all"
                    >
                      <span>Inspect Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificatesModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}
