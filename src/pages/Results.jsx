import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { SchemeCard } from '../components/SchemeCard';
import { BottomActionBar } from '../components/BottomActionBar';
import { useLang } from '../context/LanguageContext';
import schemes from '../data/schemes';

// Show the first 5 schemes as the "matched" results
const RESULTS = schemes.slice(0, 5);

export default function Results() {
  const navigate = useNavigate();
  const { t, lang } = useLang();

  return (
    <div className="app-shell flex flex-col" style={{ background: '#160c30' }}>
      <AppHeader title="GramVani" subtitle="Schemes Directory" />

      <main className="page-scroll flex flex-col px-5 gap-4">

        {/* ── Ambient glow ── */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full pointer-events-none"
               style={{ background: 'rgba(255,122,41,0.2)', filter: 'blur(40px)' }} />

          {/* ── Header area ── */}
          <div className="pt-3 pb-4 flex flex-col items-start gap-1 relative z-10">
            {/* Voice analysis done chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-1"
                 style={{ background: 'rgba(45,36,72,0.8)', color: '#44dfa6', fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span className="material-symbols-outlined animate-pulse" style={{ fontSize: 14 }}>check_circle</span>
              {t('voiceAnalysisDone')}
            </div>

            {/* Hero count */}
            <div className="flex items-baseline gap-3 flex-wrap">
              <span style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontSize: 34, fontWeight: 800, lineHeight: '38px', letterSpacing: '-0.03em',
                color: '#ff7a29',
                textShadow: '0 0 18px rgba(255,122,41,0.4)',
              }}>5</span>
              <h1 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 28, fontWeight: 700, lineHeight: '34px', letterSpacing: '-0.02em', color: '#e8ddff' }}>
                {t('schemesUnlocked')}
              </h1>
            </div>

            {/* Telugu vernacular line */}
            <p className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
               style={{ fontSize: lang === 'en' ? 14 : 15, fontWeight: 500, color: '#e8deff', marginTop: 2,
                        fontFamily: lang === 'en' ? "'Inter',sans-serif" : undefined }}>
              {t('eligibleNote')}
            </p>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: '#a78b7e' }}>
              {t('matchedVoice')}
            </span>
          </div>
        </div>

        {/* ── Bento grid ── */}
        <div className="flex flex-col gap-4 w-full relative z-10">
          {/* Featured hero card */}
          <SchemeCard scheme={RESULTS[0]} featured />

          {/* Regular cards */}
          {RESULTS.slice(1).map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>

        {/* Spacer for bottom bar */}
        <div style={{ height: 24 }} />
      </main>

      {/* ── Bottom action bar ── */}
      <BottomActionBar>
        <button
          onClick={() => navigate('/listening')}
          className="btn-primary"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}>mic</span>
          {lang === 'te' ? 'మళ్ళీ అడగండి' : lang === 'hi' ? 'फिर से पूछें' : 'Ask Again'}
        </button>
      </BottomActionBar>
    </div>
  );
}
