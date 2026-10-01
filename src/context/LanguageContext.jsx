import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n';

const LanguageContext = createContext(null);

const LANGS = ['te', 'hi', 'en'];
const LANG_KEY = 'gramvani_lang';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem(LANG_KEY);
    return LANGS.includes(saved) ? saved : 'te';
  });

  const setLang = (l) => {
    if (LANGS.includes(l)) {
      localStorage.setItem(LANG_KEY, l);
      setLangState(l);
    }
  };

  const t = (key) => {
    const str = i18n[lang]?.[key];
    if (str !== undefined) return str;
    // fallback to English
    return i18n.en?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, langs: LANGS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be inside LanguageProvider');
  return ctx;
}
