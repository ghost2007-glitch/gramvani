import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { MicOrb } from '../components/MicOrb';
import { useLang } from '../context/LanguageContext';

const CHIPS = [
  { emoji: '👨‍🌾', key1: 'chip1Title', key2: 'chip1Sub', rotate: '-rotate-1' },
  { emoji: '🎓', key1: 'chip2Title', key2: 'chip2Sub', rotate: 'rotate-1' },
  { emoji: '🛍️', key1: 'chip3Title', key2: 'chip3Sub', rotate: '-rotate-2' },
  { emoji: '👵', key1: 'chip4Title', key2: 'chip4Sub', rotate: 'rotate-1' },
];

export default function Home() {
  const navigate = useNavigate();
  const { t, lang } = useLang();

  return (
    <div className="app-shell flex flex-col" style={{ background: '#160c30' }}>
      <AppHeader title="GramVani" subtitle="Voice Home" />

      <main className="page-scroll flex flex-col px-5 gap-0" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>

        {/* ── Sub-bar: live dot + lang switcher ── */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(68,223,166,0.15)', color: '#44dfa6', fontFamily: "'Inter',sans-serif" }}>
              <span className="w-2 h-2 rounded-full animate-ping" style={{ background: '#44dfa6' }} />
              {t('voiceLive')}
            </span>
          </div>
        </div>

        {/* ── Hero headline ── */}
        <div className="mt-3 flex flex-col items-center text-center">
          <div className="inline-block px-3 py-0.5 rounded-full mb-2 -rotate-1 text-xs font-semibold"
               style={{ background: 'rgba(56,47,84,1)', color: '#44dfa6', fontFamily: "'Inter',sans-serif" }}>
            🎙️ {lang === 'te' ? 'ఒక్క మాటతో ప్రభుత్వ సాయం' : lang === 'hi' ? 'एक बात में सरकारी मदद' : 'Government schemes with one voice'}
          </div>
          <h1 className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
              style={{
                fontFamily: lang === 'en' ? "'Bricolage Grotesque',sans-serif" : undefined,
                fontSize: lang === 'en' ? 32 : 22,
                fontWeight: 700,
                lineHeight: lang === 'en' ? '38px' : '32px',
                color: '#e8ddff',
                letterSpacing: lang === 'en' ? '-0.02em' : 0,
                maxWidth: 300,
              }}>
            {t('heroLine')}
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: '#cdbdff', marginTop: 4 }}>
            {t('heroSub')}
          </p>
        </div>

        {/* ── Mic orb ── */}
        <div className="relative flex flex-col items-center justify-center my-6" style={{ minHeight: 290 }}>
          <MicOrb size={176} onClick={() => navigate('/listening')} />
          {/* Tap & Talk badge */}
          <div className="relative z-20 -mt-3">
            <button
              onClick={() => navigate('/listening')}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all active:scale-95"
              style={{ background: '#2d2448', color: '#e8ddff', boxShadow: '0 4px 16px rgba(0,0,0,0.3)', fontFamily: "'Inter',sans-serif" }}>
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#ff7a29' }} />
              <span style={{ color: '#ff7a29', fontWeight: 700 }}>{t('tapTalk')}</span>
              <span className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
                    style={{ fontSize: 13, color: '#e8deff' }}>{t('tapTalkSub')}</span>
            </button>
          </div>
        </div>

        {/* ── Quick starters ── */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2 px-1">
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600, color: '#cdbdff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {t('quickStart')}
            </span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: '#67fcc1' }}>{t('swipe')}</span>
          </div>

          {/* Horizontal scroll */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 px-1 no-scrollbar">
            {CHIPS.map(({ emoji, key1, key2, rotate }, i) => (
              <button
                key={i}
                onClick={() => navigate('/listening')}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-3 rounded-full active:scale-95 transition-all shadow-md ${rotate}`}
                style={{ background: '#2d2448', border: '1px solid rgba(201,184,255,0.12)' }}
              >
                <span style={{ fontSize: 20 }}>{emoji}</span>
                <div className="flex flex-col text-left">
                  <span className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
                        style={{ fontSize: 13, fontWeight: 700, color: '#e8ddff', lineHeight: '18px', whiteSpace: 'nowrap',
                                 fontFamily: lang === 'en' ? "'Inter',sans-serif" : undefined }}>
                    {t(key1)}
                  </span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: '#cdbdff', whiteSpace: 'nowrap' }}>
                    {t(key2)}
                  </span>
                </div>
                <span className="material-symbols-outlined" style={{ color: '#44dfa6', fontSize: 18, marginLeft: 4 }}>volume_up</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Micro insight card ── */}
        <div className="mt-4 w-full flex items-center gap-4 p-4 rounded-2xl"
             style={{ background: 'rgba(35,25,61,0.7)', border: '1px solid rgba(201,184,255,0.08)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
               style={{ background: 'rgba(1,192,138,0.2)', color: '#44dfa6' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 26 }}>verified</span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 17, fontWeight: 600, color: '#e8ddff' }}>
                {t('schemeCount')}
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: '#01c08a', color: '#004731', fontFamily: "'Inter',sans-serif" }}>
                {t('schemeCountBadge')}
              </span>
            </div>
            <p className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
               style={{ fontSize: 12, color: '#cdbdff', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        fontFamily: lang === 'en' ? "'Inter',sans-serif" : undefined }}>
              {t('schemeSub')}
            </p>
          </div>
        </div>

        {/* ── Trust footer ── */}
        <div className="mt-5 flex items-center justify-center gap-2 text-center">
          {[{ key: 'free' }, { key: 'noSignup' }, { key: 'officialSrc' }].map(({ key }, i) => (
            <React.Fragment key={key}>
              {i > 0 && <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(205,189,255,0.4)' }} />}
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: '#cdbdff' }}>{t(key)}</span>
            </React.Fragment>
          ))}
          <span className="material-symbols-outlined" style={{ color: '#44dfa6', fontSize: 14, fontVariationSettings: "'FILL' 1" }}>verified_user</span>
        </div>
      </main>
    </div>
  );
}
