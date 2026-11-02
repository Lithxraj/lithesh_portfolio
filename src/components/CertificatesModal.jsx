import React from 'react';
import { X, ExternalLink, Download, Award, FileText } from 'lucide-react';
import { playClickSound } from '../utils/sound';

export default function CertificatesModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-electric-blue/40 p-6 sm:p-8 bg-dark-900/95 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-electric-blue/20 text-electric-neon border border-electric-blue/30">
              <Award className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-xl font-bold font-outfit text-white">{cert.title}</h3>
              <p className="text-xs font-mono text-slate-400">{cert.issuer} // {cert.year}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            aria-label="Close"
            className="p-2 rounded-xl bg-dark-850 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Details */}
        <div className="py-4 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">{cert.description}</p>
          
          <div className="p-4 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-electric-neon" />
              <div>
                <p className="text-xs font-mono text-slate-400">Verified Certificate Document</p>
                <p className="text-sm font-semibold text-white">{cert.filename}</p>
              </div>
            </div>
            <a
              href={`/assets/${cert.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-electric-blue/20 border border-electric-blue/40 text-electric-neon text-xs font-mono hover:bg-electric-neon hover:text-dark-950 transition-all"
            >
              <span>View Full PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-end gap-3">
          <a
            href={`/assets/${cert.filename}`}
            download={cert.filename}
            onClick={playClickSound}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-glow to-cyber-purple text-white text-xs font-semibold hover:shadow-neon transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Certificate PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
