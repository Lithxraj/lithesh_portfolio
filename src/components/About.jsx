import React, { useState, useRef } from 'react';
import { Brain, Sparkles, Trophy, BookOpen, MapPin, GraduationCap, CheckCircle2, Terminal, RefreshCw, Zap } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);
  const photos = [
    { src: '/assets/e6804521-0fea-48b6-b7ba-62eb3da7a101.jpg', tag: 'Executive Portrait' },
    { src: '/assets/profile.jpeg', tag: 'Studio Profile' },
  ];

  // 3D Tilt & Movement State
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation between -15deg and +15deg
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    // Glare position percentage
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const stats = [
    { label: 'AI/ML Projects', value: '15+', icon: Brain, detail: 'Vision, Assistive & NLP Models' },
    { label: 'Technologies Explored', value: '20+', icon: Sparkles, detail: 'Full-Stack, Hardware & AI' },
    { label: 'Hackathons Participated', value: '5+', icon: Trophy, detail: 'GCEM Hacks 5.0 & Collegiate' },
    { label: 'Continuous Learning', value: '100%', icon: BookOpen, detail: 'Daily Experimentation' },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>About Me // Profile</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-outfit text-white tracking-tight">
          ABOUT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ME</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Main Grid: Interactive Moving 3D Portrait + Story Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        
        {/* Left: Interactive Moving 3D Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative perspective-container">
            {/* Ambient Multi-layer Floating Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-indigo-500/30 rounded-3xl blur-2xl opacity-60 animate-pulse-slow" />
            
            {/* Continuous Float + Interactive 3D Mouse Parallax Card */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => {
                setIsHovered(true);
                playHoverSound();
              }}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.04 : 1}, ${isHovered ? 1.04 : 1}, 1)`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
              }}
              className="relative w-72 sm:w-80 md:w-88 rounded-3xl p-3 bg-dark-900/90 border border-cyan-500/40 shadow-2xl preserve-3d cursor-pointer group animate-float"
            >
              {/* Photo Viewport */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-dark-950">
                <img
                  src={photos[activePhoto].src}
                  alt="Lithesh Raj N"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Dynamic Light Glare Follows Cursor */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.4) 0%, rgba(0,240,255,0.1) 40%, transparent 70%)`
                  }}
                />

                {/* Subtle Moving Cyber Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none animate-pulse-slow" />

                {/* Corner Tech Reticles */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-dark-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono font-bold text-white">LITHESH RAJ N.</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">
                    {photos[activePhoto].tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Flip / Switcher Button */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  playClickSound();
                  setActivePhoto((prev) => (prev === 0 ? 1 : 0));
                }}
                onMouseEnter={playHoverSound}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900/90 border border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all shadow-md"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span>Switch Portrait View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Story & Specializations */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white mb-4">
              Passionate Computer Science Engineering Student specializing in{' '}
              <span className="text-cyan-400">Artificial Intelligence & Machine Learning</span>
            </h3>

            {/* Prompt exact description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              "I'm passionate about building intelligent applications, solving real-world problems, and exploring emerging technologies. I enjoy developing AI-powered systems, automation solutions, and interactive web applications."
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-950/60 border border-white/5">
                <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">Degree</h4>
                  <p className="text-sm font-semibold text-white">B.E. in CSE (AI & ML)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-950/60 border border-white/5">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">Location</h4>
                  <p className="text-sm font-semibold text-white">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="mt-6 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Core Engineering Focus:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                {[
                  'Real-time Computer Vision & YOLO Architectures',
                  'Edge AI Deployment on Raspberry Pi & Microcontrollers',
                  'Intelligent Full-Stack Systems with FastAPI & React',
                  'VARK Model & Adaptive Learning Algorithms',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Statistics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            onMouseEnter={playHoverSound}
            className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-white/10 hover:border-cyan-400/40"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <stat.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-outfit text-white mb-1 tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
            <div className="text-xs font-mono text-slate-400">{stat.detail}</div>

            {/* Corner ambient glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl group-hover:bg-cyan-400/15 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
}
