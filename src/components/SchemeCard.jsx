import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

/** Scheme card for the Results screen */
export function SchemeCard({ scheme, featured = false }) {
  const navigate = useNavigate();
  const { lang, t } = useLang();
  const benefit = scheme.benefit[lang] || scheme.benefit.en;

  if (featured) {
    return (
      <div
        onClick={() => navigate(`/scheme/${scheme.id}`)}
        className="relative overflow-hidden rounded-[28px] p-5 cursor-pointer transition-all active:scale-[0.99]"
        style={{
          background: '#23193d',
          border: '1px solid rgba(201,184,255,0.12)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        }}
      >
        {/* Accent gradient */}
        <div className="absolute top-0 right-0 w-36 h-36 pointer-events-none rounded-bl-full"
             style={{ background: 'linear-gradient(225deg, rgba(255,122,41,0.15), rgba(68,223,166,0.1), transparent)' }} />

        {/* Top row */}
        <div className="flex items-start justify-between gap-2 mb-4 relative">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl -rotate-3 select-none"
               style={{ background: 'rgba(45,36,72,1)', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            {scheme.emoji}
          </div>
          <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-semibold text-xs rotate-1"
               style={{ background: '#67fcc1', color: '#002114', boxShadow: '0 0 14px rgba(68,223,166,0.45)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1" }}>verified</span>
            {t('likelyMatch')}
          </div>
        </div>

        {/* Scheme name & benefit */}
        <div className="flex flex-col gap-1 relative z-10">
          <div className="flex items-center gap-2">
            <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 22, fontWeight: 700, color: '#e8ddff', letterSpacing: '-0.02em' }}>
              {scheme.name}
            </h2>
            <span className="material-symbols-outlined" style={{ color: '#ffb692', fontSize: 18, fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: '#cdbdff' }}>{benefit}</p>
        </div>

        {/* Audio snippet row */}
        <div className="mt-4 flex items-center justify-between rounded-2xl px-3 py-2"
             style={{ background: 'rgba(17,7,43,0.7)' }}>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: '#ff7a29', color: '#0a0518' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </button>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: '#e8ddff' }}>32s summary</span>
          </div>
          {/* Mini equalizer bars */}
          <div className="flex items-end gap-0.5 h-5">
            {[8, 16, 20, 12, 8].map((h, i) => (
              <span key={i} className="w-1 rounded-full" style={{ height: h, background: i === 2 ? '#ff7a29' : '#44dfa6' }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Regular card
  return (
    <div
      onClick={() => navigate(`/scheme/${scheme.id}`)}
      className="relative rounded-[28px] p-5 cursor-pointer transition-all active:scale-[0.99] flex flex-col justify-between"
      style={{
        background: '#23193d',
        border: '1px solid rgba(201,184,255,0.10)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        minHeight: 140,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl select-none"
             style={{ background: 'rgba(45,36,72,1)' }}>
          {scheme.emoji}
        </div>
        <span className="px-2 py-1 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(255,122,41,0.15)', color: '#ffb692' }}>
          {scheme.badge}
        </span>
      </div>
      {/* Name + benefit */}
      <div className="flex flex-col">
        <h3 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 17, fontWeight: 600, color: '#e8ddff', letterSpacing: '-0.01em' }}>
          {scheme.name}
        </h3>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, color: '#cdbdff', marginTop: 2 }}>
          {benefit}
        </p>
      </div>
    </div>
  );
}
