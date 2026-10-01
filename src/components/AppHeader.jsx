import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguagePill } from './LanguagePill';
import { useLang } from '../context/LanguageContext';

/** Shared app header with optional back button */
export function AppHeader({ title, subtitle, showBack = false }) {
  const navigate = useNavigate();
  const { lang } = useLang();

  return (
    <header className="app-header justify-between gap-2">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
            style={{ background: 'rgba(45,36,72,0.6)', color: '#e8ddff' }}
            aria-label="Go back"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_back</span>
          </button>
        )}
        {/* Logo mark */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
             style={{ background: 'linear-gradient(135deg, #ff7a29, #ff5500)' }}>
          <span className="material-symbols-outlined material-symbols-filled text-white" style={{ fontSize: 18 }}>mic</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-semibold leading-tight truncate" style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 16, color: '#ff7a29' }}>
            {title || 'GramVani'}
          </span>
          {subtitle && (
            <span className="leading-tight truncate" style={{ fontSize: 11, color: '#e0c0b2', fontFamily: "'Inter',sans-serif" }}>
              {subtitle}
            </span>
          )}
        </div>
      </div>
      <LanguagePill />
    </header>
  );
}
