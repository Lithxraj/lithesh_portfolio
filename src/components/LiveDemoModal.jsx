import React, { useState } from 'react';
import { X, Play, Volume2, ShieldCheck, Cpu, Activity, Lightbulb, Utensils, Eye, BookOpen, Check } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function LiveDemoModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-electric-blue/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,210,255,0.3)] bg-dark-900/95">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-electric-blue/20 text-electric-neon border border-electric-blue/30">
              <project.icon className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-2xl font-bold font-outfit text-white flex items-center gap-2">
                {project.title}
                <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-electric-neon/10 text-electric-neon border border-electric-neon/30">
                  LIVE INTERACTIVE SIMULATION
                </span>
              </h3>
              <p className="text-xs font-mono text-slate-400">{project.tagline}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-dark-850 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Specific Interactive Demo */}
        {project.id === 'intelliwatch' && <IntelliWatchDemo />}
        {project.id === 'nutrinex' && <NutriNexDemo />}
        {project.id === 'smart-blind' && <SmartBlindDemo />}
        {project.id === 'stylelearn' && <StyleLearnDemo />}

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-950 border border-electric-blue/20 text-electric-neon"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-glow to-cyber-purple text-white text-xs font-semibold hover:shadow-neon transition-all"
          >
            View Repository on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// 1. IntelliWatch Interactive Demo
function IntelliWatchDemo() {
  const [lux, setLux] = useState(140);
  const [relayAuto, setRelayAuto] = useState(true);
  const [relay1, setRelay1] = useState(true);
  const [relay2, setRelay2] = useState(false);
  const [motionDetected, setMotionDetected] = useState(true);

  // Auto logic: if lux < 200 and motion detected, light stays ON
  const activeLights = relayAuto ? lux < 200 && motionDetected : relay1;

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-2xl bg-dark-950 border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-mono text-slate-300">
            <Cpu className="w-4 h-4 text-electric-neon" />
            <span>Raspberry Pi Hardware Telemetry</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            TELEMETRY ONLINE
          </span>
        </div>

        {/* Sliders and Sensors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Ambient Lux */}
          <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Ambient Light (LDR):</span>
              <span className="text-electric-neon font-bold">{lux} Lux</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              value={lux}
              onChange={(e) => setLux(Number(e.target.value))}
              className="w-full accent-electric-neon cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              {lux < 200 ? 'Low light condition -> Dim trigger active' : 'Bright daylight condition'}
            </p>
          </div>

          {/* PIR Motion Sensor */}
          <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-3">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">PIR Motion Sensor:</span>
              <span className={motionDetected ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                {motionDetected ? 'TRIGGERED' : 'IDLE'}
              </span>
            </div>
            <button
              onClick={() => setMotionDetected(!motionDetected)}
              className={`w-full py-1.5 px-3 rounded-lg text-xs font-mono transition-all ${
                motionDetected
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-dark-850 text-slate-400 border border-white/10'
              }`}
            >
              Toggle Simulated Motion
            </button>
          </div>

          {/* Relay Channel Status */}
          <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Relay Control Mode:</span>
              <span className="text-white font-bold">{relayAuto ? 'AUTOMATIC' : 'MANUAL'}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setRelayAuto(true)}
                className={`flex-1 py-1 px-2 rounded text-xs font-mono ${
                  relayAuto ? 'bg-electric-blue text-dark-950 font-bold' : 'bg-dark-850 text-slate-400'
                }`}
              >
                Auto AI
              </button>
              <button
                onClick={() => setRelayAuto(false)}
                className={`flex-1 py-1 px-2 rounded text-xs font-mono ${
                  !relayAuto ? 'bg-electric-blue text-dark-950 font-bold' : 'bg-dark-850 text-slate-400'
                }`}
              >
                Manual
              </button>
            </div>
          </div>
        </div>

        {/* Output Lamp Visualizer */}
        <div className="p-4 rounded-xl bg-dark-900/70 border border-electric-blue/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`p-3 rounded-full transition-all duration-500 ${
                activeLights
                  ? 'bg-amber-400 text-dark-950 shadow-[0_0_30px_#f59e0b]'
                  : 'bg-dark-800 text-slate-600'
              }`}
            >
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Industrial Bay Luminaire: {activeLights ? 'ENGAGED (ACTIVE)' : 'STANDBY (ENERGY SAVING)'}
              </h4>
              <p className="text-xs text-slate-400">
                {activeLights
                  ? 'Intelligent automation activated lighting based on real-time lux threshold and occupancy.'
                  : 'Sensors detected sufficient daylight or zero occupancy, saving 42% energy.'}
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-electric-neon">GPIO PIN #18</span>
        </div>
      </div>
    </div>
  );
}

// 2. NutriNex Interactive Demo
function NutriNexDemo() {
  const [selectedGoal, setSelectedGoal] = useState('High Protein');
  const [dietaryFilter, setDietaryFilter] = useState('All');

  const meals = [
    { name: 'Quinoa Grilled Paneer / Chicken Bowl', protein: '34g', cal: 480, type: 'High Protein', rating: '98% Match', tag: 'Chef Recommended' },
    { name: 'Avocado & Herb Roasted Veggie Plate', protein: '18g', cal: 390, type: 'Keto / Clean', rating: '94% Match', tag: 'Low Carb' },
    { name: 'Mediterranean Spiced Lentil Salad', protein: '24g', cal: 410, type: 'High Protein', rating: '91% Match', tag: 'Fiber Rich' },
    { name: 'Tofu Berry Chia Energy Booster', protein: '20g', cal: 320, type: 'Vegan', rating: '89% Match', tag: 'Antioxidants' },
  ];

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-dark-950 border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-mono text-slate-300">
            <Utensils className="w-4 h-4 text-electric-neon" />
            <span>AI Food Recommendation Engine</span>
          </div>
          <span className="text-xs font-mono text-electric-neon">NEURAL MATCHING ACTIVE</span>
        </div>

        {/* Nutritional Goal Selector */}
        <div>
          <label className="text-xs font-mono text-slate-400 mb-2 block">Choose Target Nutritional Goal:</label>
          <div className="flex flex-wrap gap-2">
            {['High Protein', 'Keto / Clean', 'Balanced Vitality', 'Vegan'].map((goal) => (
              <button
                key={goal}
                onClick={() => setSelectedGoal(goal)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedGoal === goal
                    ? 'bg-electric-blue text-dark-950 font-bold shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'bg-dark-900 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {meals.map((meal, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-dark-900 border border-white/10 hover:border-electric-blue/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h4 className="text-sm font-bold text-white">{meal.name}</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-electric-neon/15 text-electric-neon border border-electric-neon/30 shrink-0">
                    {meal.rating}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{meal.tag}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold">Protein: {meal.protein}</span>
                <span className="text-slate-400">{meal.cal} kcal</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. Smart Blind Assistant Interactive Demo
function SmartBlindDemo() {
  const [activeSpeech, setActiveSpeech] = useState('Obstacle detected: Wooden Chair at 1.2 meters directly ahead.');
  const [detectedObj, setDetectedObj] = useState('chair');

  const handleSpeak = (text) => {
    setActiveSpeech(text);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-dark-950 border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-mono text-slate-300">
            <Eye className="w-4 h-4 text-electric-neon" />
            <span>Simulated YOLO v8 Real-Time Inference Stream</span>
          </div>
          <span className="text-xs font-mono text-emerald-400">INFERENCE: 28 FPS // 34ms</span>
        </div>

        {/* Simulated Camera Feed with YOLO Bounding Boxes */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-900 border border-white/10 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

          {/* Simulated Detected Bounding Boxes */}
          <div
            onClick={() => handleSpeak('Person detected at 2.1 meters moving left.')}
            className={`absolute top-10 left-12 p-2 border-2 border-electric-neon rounded-lg bg-electric-blue/10 cursor-pointer transition-all hover:scale-105 ${
              detectedObj === 'person' ? 'ring-2 ring-white' : ''
            }`}
          >
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-electric-neon text-dark-950 font-bold block mb-1">
              person 96% (2.1m)
            </span>
            <div className="w-20 h-32 flex items-center justify-center text-xs text-slate-300">
              👤 [Subject]
            </div>
          </div>

          <div
            onClick={() => handleSpeak('Wooden chair detected 1.2 meters directly in pathway.')}
            className={`absolute bottom-8 right-16 p-2 border-2 border-amber-400 rounded-lg bg-amber-400/10 cursor-pointer transition-all hover:scale-105 ${
              detectedObj === 'chair' ? 'ring-2 ring-white' : ''
            }`}
          >
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-400 text-dark-950 font-bold block mb-1">
              chair 92% (1.2m)
            </span>
            <div className="w-24 h-24 flex items-center justify-center text-xs text-slate-300">
              🪑 [Obstacle]
            </div>
          </div>

          <p className="absolute bottom-2 left-3 text-[11px] font-mono text-slate-400">
            Tap any bounding box above to trigger real-time assistive audio feedback
          </p>
        </div>

        {/* Voice Feedback Display */}
        <div className="p-3.5 rounded-xl bg-dark-900 border border-electric-blue/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Volume2 className="w-5 h-5 text-electric-neon animate-pulse" />
            <div>
              <p className="text-xs font-mono text-slate-400">Audio Speech Output:</p>
              <p className="text-sm font-semibold text-white">"{activeSpeech}"</p>
            </div>
          </div>
          <button
            onClick={() => handleSpeak(activeSpeech)}
            className="px-3 py-1.5 rounded-lg bg-electric-blue/20 hover:bg-electric-blue/30 border border-electric-blue/40 text-electric-neon text-xs font-mono"
          >
            Replay Audio
          </button>
        </div>
      </div>
    </div>
  );
}

// 4. StyleLearn Interactive Demo
function StyleLearnDemo() {
  const [styleScores, setStyleScores] = useState({
    Visual: 45,
    Auditory: 25,
    'Read/Write': 20,
    Kinesthetic: 10,
  });

  const handleSelectPreference = (primary) => {
    if (primary === 'Visual') {
      setStyleScores({ Visual: 60, Auditory: 20, 'Read/Write': 15, Kinesthetic: 5 });
    } else if (primary === 'Kinesthetic') {
      setStyleScores({ Visual: 20, Auditory: 15, 'Read/Write': 15, Kinesthetic: 50 });
    } else if (primary === 'Auditory') {
      setStyleScores({ Visual: 20, Auditory: 55, 'Read/Write': 15, Kinesthetic: 10 });
    } else {
      setStyleScores({ Visual: 20, Auditory: 20, 'Read/Write': 50, Kinesthetic: 10 });
    }
  };

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-dark-950 border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-mono text-slate-300">
            <BookOpen className="w-4 h-4 text-electric-neon" />
            <span>VARK Multimodal Neural Learning Classifier</span>
          </div>
          <span className="text-xs font-mono text-electric-neon">ADAPTIVE CURRICULUM</span>
        </div>

        <div>
          <label className="text-xs font-mono text-slate-400 mb-2 block">
            Select Learner Predisposition to Adapt AI Curriculum:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {['Visual', 'Auditory', 'Read/Write', 'Kinesthetic'].map((m) => (
              <button
                key={m}
                onClick={() => handleSelectPreference(m)}
                className="py-2 px-3 rounded-lg text-xs font-mono bg-dark-900 border border-white/10 hover:border-electric-blue/40 text-slate-200 hover:text-white transition-all text-center"
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic breakdown */}
        <div className="space-y-3 pt-2">
          {Object.entries(styleScores).map(([key, val]) => (
            <div key={key} className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">{key} Modality</span>
                <span className="text-electric-neon font-bold">{val}%</span>
              </div>
              <div className="h-2 w-full bg-dark-900 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full transition-all duration-700"
                  style={{ width: `${val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
