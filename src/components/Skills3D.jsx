import React, { useState } from 'react';
import { Code2, Brain, Globe, Wrench, Terminal } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export default function Skills3D() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'ai', label: 'AI & Machine Learning', icon: Brain },
    { id: 'programming', label: 'Programming', icon: Code2 },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'tools', label: 'Tools & Technologies', icon: Wrench },
  ];

  const skillCards = [
    {
      id: 'ai',
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]',
      accent: 'text-cyan-400',
      barColor: 'from-cyan-400 via-blue-500 to-indigo-500',
      skills: [
        { name: 'Machine Learning', level: 90, tag: 'Core Algorithms & Scikit' },
        { name: 'Deep Learning', level: 85, tag: 'Neural Networks & PyTorch' },
        { name: 'Computer Vision', level: 88, tag: 'Real-time Processing' },
        { name: 'YOLO', level: 85, tag: 'v8/v11 Object Detection' },
        { name: 'Generative AI', level: 80, tag: 'LLMs, Prompt Engineering' },
      ],
    },
    {
      id: 'programming',
      category: 'Programming Languages',
      icon: Code2,
      color: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'border-blue-500/30 hover:border-blue-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]',
      accent: 'text-blue-400',
      barColor: 'from-blue-400 via-indigo-500 to-cyan-400',
      skills: [
        { name: 'Python', level: 92, tag: 'NumPy, Pandas, PyTorch' },
        { name: 'Java', level: 82, tag: 'OOP & Data Structures' },
        { name: 'C / C++', level: 80, tag: 'Systems & Embedded Logic' },
        { name: 'JavaScript', level: 85, tag: 'ES6+, Async, DOM' },
      ],
    },
    {
      id: 'web',
      category: 'Web Development',
      icon: Globe,
      color: 'from-teal-500/20 to-cyan-500/20',
      borderColor: 'border-teal-500/30 hover:border-teal-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]',
      accent: 'text-teal-400',
      barColor: 'from-teal-400 via-cyan-400 to-blue-500',
      skills: [
        { name: 'React.js', level: 88, tag: 'Hooks, Three.js, SPAs' },
        { name: 'HTML & CSS', level: 95, tag: 'Semantic & Responsive' },
        { name: 'Tailwind CSS', level: 92, tag: 'Design Systems & Utility' },
        { name: 'FastAPI', level: 84, tag: 'Python REST APIs & Async' },
      ],
    },
    {
      id: 'tools',
      category: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-500/30 hover:border-purple-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
      accent: 'text-purple-400',
      barColor: 'from-purple-400 via-indigo-500 to-cyan-400',
      skills: [
        { name: 'GitHub', level: 90, tag: 'Git VCS, CI/CD, Collab' },
        { name: 'VS Code', level: 95, tag: 'Productivity & Extensions' },
        { name: 'Raspberry Pi', level: 88, tag: 'GPIO, Edge AI, IoT' },
        { name: 'OpenCV', level: 85, tag: 'Image Filters & Video Streams' },
        { name: 'Supabase', level: 80, tag: 'PostgreSQL, Auth & Storage' },
      ],
    },
  ];

  const filteredCards =
    activeCategory === 'all'
      ? skillCards
      : skillCards.filter((card) => card.id === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-outfit text-white tracking-tight">
          TECHNICAL <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SKILLS</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
        <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm sm:text-base">
          Engineered for performance, machine intelligence, and high-impact software systems.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            onMouseEnter={playHoverSound}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.25)] font-semibold'
                : 'bg-dark-900/70 text-slate-400 border border-white/5 hover:text-white hover:border-white/20'
            }`}
          >
            {cat.icon && <cat.icon className="w-4 h-4" />}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Interactive 3D Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onMouseEnter={playHoverSound}
              className={`glass-panel rounded-2xl p-6 sm:p-8 border ${card.borderColor} transition-all duration-300 ${card.glowColor} group hover:-translate-y-1 relative overflow-hidden`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} border border-white/10`}>
                    <Icon className={`w-6 h-6 ${card.accent} group-hover:rotate-12 transition-transform duration-300`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-outfit text-white transition-colors">
                      {card.category}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {card.skills.length} Specialized Competencies
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline px-2.5 py-1 rounded text-[11px] font-mono uppercase bg-white/5 border border-white/10 text-slate-300">
                  VERIFIED
                </span>
              </div>

              {/* Skill Bars with Indicators */}
              <div className="space-y-5">
                {card.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-[11px] font-mono text-slate-400">({skill.tag})</span>
                      </div>
                      <span className={`font-mono text-xs font-bold ${card.accent}`}>
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-2 w-full bg-dark-950 rounded-full overflow-hidden p-0.5 border border-white/5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${card.barColor} shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/15 transition-all" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
