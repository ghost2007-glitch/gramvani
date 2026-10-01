import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { BottomActionBar } from '../components/BottomActionBar';
import { useLang } from '../context/LanguageContext';
import schemes from '../data/schemes';

const SHARE_OPTIONS = [
  { icon: 'share', label: 'WhatsApp', color: '#44dfa6', bg: 'rgba(68,223,166,0.15)', key: 'shareWhatsapp' },
  { icon: 'content_copy', label: 'Copy Link', color: '#cdbdff', bg: 'rgba(205,189,255,0.15)', key: 'shareCopy' },
  { icon: 'qr_code_2', label: 'QR Code', color: '#ffb692', bg: 'rgba(255,182,146,0.15)', key: null },
  { icon: 'sms', label: 'SMS', color: '#67fcc1', bg: 'rgba(103,252,193,0.15)', key: null },
];

// Use first scheme for demo
const DEMO_SCHEME = schemes[0];

export default function ShareCard() {
  const navigate = useNavigate();
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const benefit = DEMO_SCHEME.benefit[lang] || DEMO_SCHEME.benefit.en;

  return (
    <div className="app-shell flex flex-col" style={{ background: '#160c30' }}>
      <AppHeader title="Share" subtitle="GramVani Welfare" showBack />

      <main className="page-scroll flex flex-col px-5 gap-5">

        {/* ── Header ── */}
        <div className="pt-2 flex flex-col items-center text-center gap-1">
          <h1 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', color: '#e8ddff' }}>
            {t('shareTitle')}
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: '#cdbdff' }}>{t('shareSubtitle')}</p>
        </div>

        {/* ── Share preview card (the "share card") ── */}
        <div className="relative rounded-[28px] p-5 overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #221447 0%, #1f1539 100%)',
               border: '1px solid rgba(255,122,41,0.3)',
               boxShadow: '0 8px 32px rgba(255,122,41,0.15)',
             }}>
          {/* Accent blob */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none"
               style={{ background: 'linear-gradient(225deg, rgba(255,122,41,0.2), transparent)' }} />

          {/* GramVani brand row */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center"
                 style={{ background: 'linear-gradient(135deg, #ff7a29, #ff5500)' }}>
              <span className="material-symbols-outlined text-white" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>mic</span>
            </div>
            <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 16, fontWeight: 700, color: '#ff7a29' }}>GramVani</span>
            <div className="ml-auto px-2 py-0.5 rounded-full"
                 style={{ background: 'rgba(68,223,166,0.2)', color: '#44dfa6', fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.05em' }}>
              GOVT SCHEME
            </div>
          </div>

          {/* Scheme hero */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl -rotate-2"
                 style={{ background: '#2d2448', flexShrink: 0 }}>
              {DEMO_SCHEME.emoji}
            </div>
            <div>
              <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 22, fontWeight: 700, color: '#e8ddff', letterSpacing: '-0.02em' }}>
                {DEMO_SCHEME.name}
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: '#cdbdff', marginTop: 2 }}>
                {benefit}
              </p>
            </div>
          </div>

          {/* Benefit highlight */}
          <div className="flex items-center gap-3 p-3 rounded-2xl mb-4"
               style={{ background: 'rgba(255,122,41,0.1)', border: '1px solid rgba(255,122,41,0.2)' }}>
            <span className="material-symbols-outlined" style={{ color: '#ff7a29', fontSize: 22, fontVariationSettings: "'FILL' 1" }}>payments</span>
            <div>
              <p style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 20, fontWeight: 700, color: '#ff7a29' }}>₹6,000 / year</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: '#e0c0b2' }}>3 equal installments — Direct to bank</p>
            </div>
          </div>

          {/* Telugu/Hindi benefit line */}
          <p className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
             style={{ fontSize: 14, color: '#e8ddff', marginBottom: 4, fontFamily: lang === 'en' ? "'Inter',sans-serif" : undefined }}>
            {DEMO_SCHEME.benefit.te}
          </p>

          {/* Divider */}
          <div className="w-full h-px my-3" style={{ background: 'rgba(201,184,255,0.12)' }} />

          {/* Footer row */}
          <div className="flex items-center justify-between">
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: '#a78b7e' }}>
              🔒 Official Govt. Source
            </span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: '#cdbdff', fontWeight: 600 }}>
              gramvani.app/{DEMO_SCHEME.id}
            </span>
          </div>
        </div>

        {/* ── Share options grid ── */}
        <div className="grid grid-cols-2 gap-3">
          {SHARE_OPTIONS.map(({ icon, label, color, bg, key }, i) => (
            <button
              key={i}
              onClick={key === 'shareCopy' ? handleCopy : undefined}
              className="flex items-center gap-3 p-4 rounded-2xl active:scale-95 transition-all"
              style={{ background: '#23193d', border: '1px solid rgba(201,184,255,0.10)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                   style={{ background: bg }}>
                <span className="material-symbols-outlined" style={{ color, fontSize: 20 }}>
                  {key === 'shareCopy' && copied ? 'check_circle' : icon}
                </span>
              </div>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: key === 'shareCopy' && copied ? '#44dfa6' : '#e8ddff' }}>
                {key === 'shareCopy' && copied ? 'Copied!' : (key ? t(key) : label)}
              </span>
            </button>
          ))}
        </div>

        {/* ── SMS / voice message note ── */}
        <div className="flex items-center gap-3 p-4 rounded-2xl"
             style={{ background: 'rgba(35,25,61,0.7)', border: '1px solid rgba(201,184,255,0.08)' }}>
          <span className="material-symbols-outlined" style={{ color: '#cdbdff', fontSize: 24 }}>info</span>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: '#a78b7e', lineHeight: '18px' }}>
            Share via SMS or WhatsApp in Telugu, Hindi, or English — GramVani handles the translation.
          </p>
        </div>

        <div style={{ height: 24 }} />
      </main>

      <BottomActionBar>
        <button onClick={() => navigate('/results')} className="btn-primary">
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
          {t('shareBack')}
        </button>
      </BottomActionBar>
    </div>
  );
}
