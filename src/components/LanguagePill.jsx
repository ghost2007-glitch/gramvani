import React from 'react';
import { useLang } from '../context/LanguageContext';

const LANG_LABELS = { te: 'తెలుగు', hi: 'हिन्दी', en: 'EN' };

/** Pill switcher: తెలుగు | हिन्दी | EN */
export function LanguagePill() {
  const { lang, setLang, langs } = useLang();
  return (
    <div className="inline-flex items-center rounded-full px-1 py-1" style={{ background: 'rgba(45,36,72,0.9)' }}>
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="px-3 py-1 rounded-full text-xs font-semibold transition-all"
          style={{
            background: lang === l ? '#ff7a29' : 'transparent',
            color: lang === l ? '#0a0518' : '#cdbdff',
            fontFamily: l === 'te' ? "'Noto Sans Telugu', 'Noto Sans', sans-serif"
                       : l === 'hi' ? "'Noto Sans Devanagari', 'Noto Sans', sans-serif"
                       : "'Inter', sans-serif",
            boxShadow: lang === l ? '0 0 12px rgba(255,122,41,0.45)' : 'none',
          }}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
