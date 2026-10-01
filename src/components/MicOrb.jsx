import React from 'react';

/** Glowing mic orb — static for now (no voice logic) */
export function MicOrb({ size = 176, onClick, active = false }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Ambient glow rings */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size * 1.6, height: size * 1.6,
          background: 'rgba(255,122,41,0.10)',
          filter: 'blur(32px)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size * 1.3, height: size * 1.3,
          background: 'rgba(255,122,41,0.15)',
          filter: 'blur(16px)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
      {/* Ping ring */}
      <div
        className="absolute rounded-full pointer-events-none animate-ping"
        style={{
          width: size * 1.05, height: size * 1.05,
          background: 'rgba(255,122,41,0.1)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          animationDuration: '3s',
          opacity: 0.3,
        }}
      />

      {/* Main orb button */}
      <button
        onClick={onClick}
        className="relative z-10 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 group focus:outline-none"
        style={{
          width: size, height: size,
          background: 'linear-gradient(135deg, #ff7a29 0%, #ff5500 100%)',
          boxShadow: active
            ? '0 0 60px rgba(255,122,41,0.8), 0 12px 32px rgba(0,0,0,0.5)'
            : '0 0 40px rgba(255,122,41,0.65), 0 12px 32px rgba(0,0,0,0.5)',
          padding: 4,
        }}
        aria-label="Microphone — tap to speak"
      >
        {/* Inner surface */}
        <div
          className="w-full h-full rounded-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #ff7a29 0%, #ff6a1a 50%, #ffa366 100%)' }}
        >
          {/* Gloss highlight */}
          <div className="absolute -top-8 left-4 w-24 h-16 bg-white/20 rounded-full blur-md rotate-12 pointer-events-none" />
          {/* Mic icon */}
          <span
            className="material-symbols-outlined text-white"
            style={{ fontSize: size * 0.42, fontVariationSettings: "'FILL' 1, 'wght' 600" }}
          >
            mic
          </span>
          {/* Waveform dots */}
          <div className="flex items-center gap-1 mt-1 opacity-80">
            <span className="rounded-full bg-white/80 w-1.5 h-1.5 wave-bar" />
            <span className="rounded-full bg-white/80 w-1.5 h-2.5 wave-bar" />
            <span className="rounded-full bg-white/80 w-1.5 h-2 wave-bar" />
          </div>
        </div>
      </button>
    </div>
  );
}
