import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { MicOrb } from '../components/MicOrb';
import { BottomActionBar } from '../components/BottomActionBar';
import { useLang } from '../context/LanguageContext';

export default function Listening() {
  const navigate = useNavigate();
  const { t, lang } = useLang();

  const transcript = lang === 'te'
    ? '"నాకు రెండెకరాల వ్యవసాయ భూమి ఉంది..."'
    : lang === 'hi'
    ? '"मेरे पास दो एकड़ की कृषि भूमि है..."'
    : '"I\'m a farmer with 2 acres of land"';

  const transcriptSub = lang === 'te'
    ? '"నాకు రెండెకరాల వ్యవసాయ భూమి ఉంది…"'
    : lang === 'hi'
    ? '"मेरे पास दो एकड़ जमीन है…"'
    : '"నాకు రెండెకరాల వ్యవసాయ భూమి ఉంది…"';

  return (
    <div className="app-shell flex flex-col" style={{ background: '#160c30' }}>
      <AppHeader title="Voice Query Session" subtitle="GramVani Welfare" showBack />

      <main className="page-scroll flex flex-col px-5 gap-4">

        {/* ── Listening status chip ── */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md"
               style={{ background: 'rgba(45,36,72,0.8)' }}>
            {/* Ping dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: '#44dfa6' }} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#44dfa6' }} />
            </span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: '#e8ddff' }}>
              {t('listeningLabel')} {lang === 'te' ? 'in Telugu' : lang === 'hi' ? 'in Hindi' : 'in English'}
            </span>
            <span className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
                  style={{ fontSize: 12, fontWeight: 700, color: '#44dfa6',
                           fontFamily: lang === 'en' ? "'Inter',sans-serif" : undefined }}>
              {t('listeningStatus')}
            </span>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{ background: 'rgba(45,36,72,0.6)', color: '#e0c0b2' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>close</span>
          </button>
        </div>

        {/* ── Live transcript bubble ── */}
        <div className="w-full rounded-2xl p-4 relative overflow-hidden"
             style={{ background: '#1f1539', border: '1px solid rgba(201,184,255,0.10)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
          {/* Glow blob */}
          <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full pointer-events-none"
               style={{ background: 'rgba(255,122,41,0.10)', filter: 'blur(20px)' }} />
          <div className="flex items-start gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                 style={{ background: 'rgba(255,122,41,0.2)' }}>
              <span className="material-symbols-outlined animate-pulse"
                    style={{ color: '#ff7a29', fontSize: 20 }}>graphic_eq</span>
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 18, fontWeight: 600, color: '#e8ddff', letterSpacing: '-0.01em', lineHeight: '24px' }}>
                {transcript}
                {/* Blinking cursor */}
                <span className="inline-block w-1.5 h-5 ml-1 rounded-full align-middle animate-pulse"
                      style={{ background: '#ffb692', verticalAlign: 'middle' }} />
              </p>
              <p className={lang === 'te' ? 'script-telugu' : 'script-hindi'}
                 style={{ fontSize: 13, color: '#cdbdff', marginTop: 4 }}>
                {transcriptSub}
              </p>
            </div>
          </div>
        </div>

        {/* ── Mic orb + waveform bars ── */}
        <div className="flex flex-col items-center justify-center py-2 relative" style={{ minHeight: 260 }}>
          {/* Left waveform bars */}
          <div className="absolute flex items-center gap-1.5 pointer-events-none" style={{ left: 20, top: '50%', transform: 'translateY(-50%)' }}>
            {[32, 64, 96, 48].map((h, i) => (
              <span key={i} className="w-1.5 rounded-full wave-bar"
                    style={{ height: h, background: i % 2 === 0 ? '#44dfa6' : '#ff7a29',
                             boxShadow: `0 0 12px ${i % 2 === 0 ? 'rgba(68,223,166,0.5)' : 'rgba(255,122,41,0.5)'}` }} />
            ))}
          </div>

          <MicOrb size={144} active={true} />

          {/* REC badge */}
          <div className="absolute top-4 right-10 z-30 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md"
               style={{ background: '#44dfa6', color: '#003826', transform: 'rotate(6deg)', fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 700 }}>
            {t('recBadge')}
            <span className="w-2 h-2 rounded-full animate-ping" style={{ background: '#003826' }} />
          </div>

          {/* Right waveform bars */}
          <div className="absolute flex items-center gap-1.5 pointer-events-none" style={{ right: 20, top: '50%', transform: 'translateY(-50%)' }}>
            {[56, 112, 80, 40].map((h, i) => (
              <span key={i} className="w-1.5 rounded-full wave-bar"
                    style={{ height: h, background: i % 2 === 0 ? '#ff7a29' : '#44dfa6',
                             boxShadow: `0 0 12px ${i % 2 === 0 ? 'rgba(255,122,41,0.5)' : 'rgba(68,223,166,0.5)'}` }} />
            ))}
          </div>
        </div>

        {/* ── Detected parameters ── */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: '#cdbdff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {t('detectedParams')}
            </span>
            <span className="flex items-center gap-1" style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: '#44dfa6' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>auto_awesome</span>
              2 {t('extracted')}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* Farmer pill */}
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full shadow-md -rotate-1"
                 style={{ background: '#67fcc1', color: '#002114' }}>
              <span style={{ fontSize: 16 }}>🌾</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 700 }}>{t('farmer')}</span>
              <span className="material-symbols-outlined" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1, 'wght' 700" }}>check_circle</span>
            </div>
            {/* 2 acres pill */}
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full shadow-md rotate-2"
                 style={{ background: '#67fcc1', color: '#002114' }}>
              <span style={{ fontSize: 16 }}>📏</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 700 }}>2 {t('acres')}</span>
              <span className="material-symbols-outlined" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1, 'wght' 700" }}>check_circle</span>
            </div>
            {/* Add age button */}
            <button className="inline-flex items-center gap-1 px-4 py-2 rounded-full active:scale-95 transition-all"
                    style={{ background: 'rgba(45,36,72,0.8)', border: '1px solid rgba(201,184,255,0.2)', color: '#e8deff' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13 }}>{t('addAge')}</span>
            </button>
          </div>
        </div>
      </main>

      {/* ── Bottom action bar ── */}
      <BottomActionBar>
        <div className="flex flex-col items-center gap-2 w-full">
          <button
            onClick={() => navigate('/results')}
            className="btn-primary"
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif" }}
          >
            <span style={{ fontWeight: 700 }}>{t('stopFind')}</span>
            <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </button>
          <button
            onClick={() => navigate('/results')}
            className="flex items-center gap-1.5 min-h-[44px] px-4 py-2"
            style={{ color: '#cdbdff', fontFamily: "'Inter',sans-serif", fontSize: 14 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>keyboard</span>
            <span style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>{t('typeInstead')}</span>
          </button>
        </div>
      </BottomActionBar>
    </div>
  );
}
