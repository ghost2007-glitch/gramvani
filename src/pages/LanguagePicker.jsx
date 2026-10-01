import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

const LANGS = [
  {
    key: 'te',
    label: 'తెలుగు',
    labelEn: 'Telugu',
    sub: 'Telugu • ఆంధ్ర & తెలంగాణ',
    preview: '"హలో, ఈరోజు సంగతులు ఏంటి?"',
    badge: { text: '🔥 జనాదరణ పొందినది', bg: '#ff7a29', color: '#0a0518' },
    accent: '#ff7a29',
    glow: 'rgba(255,122,41,0.35)',
    iconColor: 'rgba(255,122,41,0.2)',
    iconTextColor: '#ff7a29',
    recommendedBadge: 'Recommended',
    script: 'telugu',
  },
  {
    key: 'hi',
    label: 'हिन्दी',
    labelEn: 'Hindi',
    sub: 'Hindi • उत्तर भारत',
    preview: '"नमस्ते, आज क्या नया है?"',
    badge: { text: '⚡ सुपर फ़ास्ट', bg: '#44dfa6', color: '#003826' },
    accent: '#44dfa6',
    glow: 'rgba(68,223,166,0.30)',
    iconColor: 'rgba(68,223,166,0.15)',
    iconTextColor: '#44dfa6',
    recommendedBadge: '50M+ Voices',
    script: 'hindi',
  },
  {
    key: 'en',
    label: 'English',
    labelEn: 'English',
    sub: 'English • Pan India',
    preview: '"Hey, what\'s trending now?"',
    badge: { text: '✨ Global Vibes', bg: '#cdbdff', color: '#1f0e4c' },
    accent: '#cdbdff',
    glow: 'rgba(205,189,255,0.30)',
    iconColor: 'rgba(205,189,255,0.15)',
    iconTextColor: '#cdbdff',
    recommendedBadge: 'All India',
    script: null,
  },
];

const ICON = { te: 'record_voice_over', hi: 'graphic_eq', en: 'forum' };

export default function LanguagePicker() {
  const navigate = useNavigate();
  const { lang, setLang } = useLang();
  const [selected, setSelected] = useState(lang);

  const handleContinue = () => {
    setLang(selected);
    localStorage.setItem('gramvani_launched', '1');
    navigate('/home');
  };

  const selectedConfig = LANGS.find(l => l.key === selected) || LANGS[0];

  return (
    <div className="app-shell flex flex-col min-h-dvh" style={{ background: '#160c30' }}>
      <div className="flex flex-col w-full px-5 pt-10 pb-6 min-h-dvh">
        {/* ── Top badge ── */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
               style={{ background: 'rgba(45,36,72,0.8)', color: '#ffb692', fontFamily: "'Inter',sans-serif" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1" }}>mic_double</span>
            Voice First Experience
          </div>
        </div>

        {/* ── Hero heading ── */}
        <div className="flex flex-col items-center text-center mb-8">
          <h1 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 34, fontWeight: 800, lineHeight: '38px', letterSpacing: '-0.03em' }}>
            <span style={{ color: '#ff7a29', display: 'block' }}>Pick your language</span>
            <span className="script-telugu" style={{ fontSize: 22, fontWeight: 700, lineHeight: '32px', color: '#e8ddff', display: 'block', marginTop: 4 }}>
              మీ భాష ఎంచుకోండి
            </span>
            <span className="script-hindi" style={{ fontSize: 20, fontWeight: 500, lineHeight: '30px', color: 'rgba(205,189,255,0.75)', display: 'block' }}>
              अपनी भाषा चुनें
            </span>
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: 'rgba(205,189,255,0.70)', marginTop: 8, maxWidth: 280 }}>
            Speak naturally in your mother tongue. Change anytime later.
          </p>
        </div>

        {/* ── Language tiles ── */}
        <div className="flex flex-col gap-4 w-full">
          {LANGS.map(({ key, label, labelEn, sub, preview, badge, accent, glow, iconColor, iconTextColor, recommendedBadge, script }) => {
            const isSelected = selected === key;
            return (
              <div
                key={key}
                onClick={() => setSelected(key)}
                className="relative w-full rounded-[28px] p-5 cursor-pointer flex flex-col justify-between transition-all duration-200 active:scale-[0.98]"
                style={{
                  height: 142,
                  background: '#221447',
                  border: isSelected ? `2px solid ${accent}` : '1px solid rgba(92,184,255,0.15)',
                  boxShadow: isSelected ? `0px 8px 28px ${glow}` : 'none',
                }}
              >
                {/* Sticker badge */}
                <div className="absolute -top-2.5 right-6 px-3 py-0.5 rounded-full font-bold text-xs shadow-md"
                     style={{
                       background: badge.bg, color: badge.color,
                       fontFamily: "'Inter',sans-serif",
                       transform: key === 'hi' ? 'rotate(-2deg)' : key === 'en' ? 'rotate(2deg)' : 'rotate(3deg)',
                     }}>
                  {badge.text}
                </div>

                {/* Top row */}
                <div className="flex items-start justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: iconColor }}>
                      <span className="material-symbols-outlined" style={{ color: iconTextColor, fontSize: 24, fontVariationSettings: "'FILL' 1" }}>
                        {ICON[key]}
                      </span>
                    </div>
                    <div>
                      <div className={script === 'telugu' ? 'script-telugu' : script === 'hindi' ? 'script-hindi' : ''}
                           style={{ fontSize: 30, fontWeight: 700, color: '#ffffff', lineHeight: '36px' }}>
                        {label}
                      </div>
                      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: accent, marginTop: 2 }}>
                        {sub}
                      </div>
                    </div>
                  </div>
                  {/* Radio */}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                       style={{ background: isSelected ? accent : 'rgba(45,36,72,1)', boxShadow: isSelected ? `0 0 12px ${glow}` : 'none' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: isSelected ? '#0a0518' : 'transparent', fontVariationSettings: "'wght' 700" }}>
                      check
                    </span>
                  </div>
                </div>

                {/* Audio preview */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#e0c0b2', fontFamily: "'Inter',sans-serif" }}>
                    <span className="material-symbols-outlined text-sm" style={{ color: accent, fontSize: 16 }}>volume_up</span>
                    <span>{preview}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{ color: accent, background: `${accent}18`, fontFamily: "'Inter',sans-serif" }}>
                    {recommendedBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="mt-8 flex flex-col items-center gap-3 w-full">
          <button onClick={handleContinue} className="btn-primary">
            <span style={{ fontFamily: selectedConfig.script === 'telugu' ? "'Noto Sans Telugu','Noto Sans',sans-serif" : selectedConfig.script === 'hindi' ? "'Noto Sans Devanagari','Noto Sans',sans-serif" : "'Bricolage Grotesque',sans-serif" }}>
              {selected === 'te' ? 'ప్రారంభించండి' : selected === 'hi' ? 'आगे बढ़ें' : 'Continue'}
            </span>
            {selected !== 'en' && <span style={{ color: 'rgba(10,5,24,0.5)', fontSize: 13 }}>•</span>}
            {selected !== 'en' && <span>Continue</span>}
            <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'wght' 700" }}>arrow_forward</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(205,189,255,0.6)', fontFamily: "'Inter',sans-serif" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>lock</span>
            Auto-detects regional accents smoothly
          </div>
        </div>
      </div>
    </div>
  );
}
