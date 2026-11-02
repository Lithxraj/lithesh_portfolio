import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowRight, Download, ChevronDown, Cpu, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';
import confetti from 'canvas-confetti';

// 3D Animated Quantum Sphere / Digital Core
function QuantumSphere({ mousePosition }) {
  const coreRef = useRef();
  const wireRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }

    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.3;
      wireRef.current.rotation.z += delta * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.55;
      ring1Ref.current.rotation.y = t * 0.25;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.4;
      ring2Ref.current.rotation.z = t * 0.45;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.3;
      ring3Ref.current.rotation.z = -t * 0.35;
    }

    // Parallax mouse follow
    const targetX = (mousePosition.current.x * Math.PI) / 6;
    const targetY = (mousePosition.current.y * Math.PI) / 6;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX * 1.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -targetY * 1.5, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group position={[0, 0, 0]} scale={1.2}>
      {/* Inner Glowing Crystal Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#0066ff"
          emissiveIntensity={0.9}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>

      {/* Outer Cyber Wireframe Sphere */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[1.9, 24, 24]} />
        <meshBasicMaterial
          color="#00d2ff"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Planetary Tech Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.7} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.9, 0.02, 16, 100]} />
        <meshBasicMaterial color="#3a86ff" transparent opacity={0.6} />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#8a2be2" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// Particle Constellation Cloud in 3D
function ParticleCloud({ count = 750 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color('#00f0ff'),
      new THREE.Color('#3a86ff'),
      new THREE.Color('#8a2be2'),
      new THREE.Color('#00f5d4'),
      new THREE.Color('#ffffff'),
    ];

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 8.5;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      pos[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(theta);

      const chosenColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      cols[i * 3] = chosenColor.r;
      cols[i * 3 + 1] = chosenColor.g;
      cols[i * 3 + 2] = chosenColor.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Hero3D() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [typedIndex, setTypedIndex] = useState(0);

  const titles = [
    'AI/ML ENGINEER',
    'FULL-STACK DEVELOPER',
    'TECH ENTHUSIAST',
    'COMPUTER VISION SPECIALIST',
  ];

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mousePosition.current = {
      x: (e.clientX / innerWidth) * 2 - 1,
      y: -(e.clientY / innerHeight) * 2 + 1,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    playClickSound();
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#3a86ff', '#8a2be2', '#ffffff']
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Three.js Interactive 3D Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.6} color="#00f0ff" />
          <pointLight position={[-10, -10, -10]} intensity={1.3} color="#8a2be2" />
          <directionalLight position={[0, 5, 5]} intensity={0.9} />
          <QuantumSphere mousePosition={mousePosition} />
          <ParticleCloud count={700} />
        </Canvas>
      </div>

      {/* Cyber Grid & Ambient Glow Overlays */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-900/80 border border-cyan-500/30 text-cyan-400 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
            Available for AI & Engineering Opportunities
          </span>
        </div>

        {/* Main Heading: Clean, Bold, Professional */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-outfit tracking-tight text-white mb-4">
          HI, I'M{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-glow">
            LITHESH RAJ
          </span>
          <span className="text-cyan-400">.</span>
        </h1>

        {/* Subtitle */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <h2 className="text-sm sm:text-lg md:text-xl font-mono font-semibold tracking-widest text-slate-300">
            <span className="text-cyan-400 font-bold">// </span>
            <span className="text-white border-b-2 border-cyan-400 pb-0.5">
              {titles[typedIndex]}
            </span>
          </h2>
        </div>

        {/* Description requested by user */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-10 px-4">
          Building intelligent solutions through{' '}
          <span className="text-cyan-300 font-medium">Artificial Intelligence</span>,{' '}
          <span className="text-white font-medium">Machine Learning</span>, and innovative technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
          <a
            href="#projects"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-dark-950 font-outfit font-bold text-base shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all duration-300 hover:scale-105"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <a
            href="/assets/Lithesh Raj N.pdf"
            download="Lithesh_Raj_N_Resume.pdf"
            onMouseEnter={playHoverSound}
            onClick={handleDownload}
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-dark-900/80 backdrop-blur-md border border-cyan-500/30 text-white font-outfit font-semibold text-base hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300"
          >
            <Download className="w-5 h-5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Floating Quick Chips */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-16 max-w-4xl w-full">
          {[
            { icon: Cpu, label: 'Edge AI & IoT', desc: 'Raspberry Pi, Sensors' },
            { icon: Terminal, label: 'Deep Learning', desc: 'YOLO, PyTorch, OpenCV' },
            { icon: ShieldCheck, label: 'Clean Architecture', desc: 'FastAPI, React 3D' },
            { icon: Sparkles, label: 'Continuous Growth', desc: 'Autonomous Systems' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-3.5 rounded-xl text-left border border-white/5 hover:border-cyan-400/40 transition-all group backdrop-blur-md"
            >
              <div className="flex items-center gap-2.5 mb-1">
                <item.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-semibold text-slate-200">{item.label}</span>
              </div>
              <p className="text-[11px] text-slate-400 pl-6">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          aria-label="Scroll to About Section"
          className="mt-14 inline-flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
