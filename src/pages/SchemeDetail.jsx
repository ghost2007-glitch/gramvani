import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { ChecklistRow, StepPath } from '../components/ChecklistRow';
import { BottomActionBar } from '../components/BottomActionBar';
import { useLang } from '../context/LanguageContext';
import schemes from '../data/schemes';

export default function SchemeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLang();

  const scheme = schemes.find(s => s.id === id) || schemes[0];
  const benefit = scheme.benefit[lang] || scheme.benefit.en;

  const readyCount = scheme.documents.filter(d => d.done).length;
  const totalDocs = scheme.documents.length;

  return (
    <div className="app-shell flex flex-col" style={{ background: '#160c30' }}>
      <AppHeader title="Scheme Details" subtitle="GramVani Welfare" showBack />

      <main className="page-scroll flex flex-col">

        {/* ── Hero header block ── */}
        <div className="px-5 pt-4 pb-5 flex flex-col gap-3 relative overflow-hidden">
          {/* Glow blob */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
               style={{ background: 'rgba(255,122,41,0.12)', filter: 'blur(32px)' }} />

          {/* Tag row */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                 style={{ background: 'rgba(68,223,166,0.2)', color: '#67fcc1', fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1" }}>verified</span>
              {t('directBenefit')}
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full -rotate-2"
                 style={{ background: 'rgba(45,36,72,1)', color: '#ffb692', fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600,
                          boxShadow: '0px 4px 12px rgba(255,122,41,0.2)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>local_fire_department</span>
              {t('match98')}
            </div>
          </div>

          {/* Scheme name */}
          <div>
            <h1 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 34, fontWeight: 800, lineHeight: '40px', letterSpacing: '-0.03em', color: '#e8ddff' }}>
              {scheme.emoji} {scheme.name}
            </h1>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, color: '#e0c0b2', marginTop: 6, lineHeight: '24px' }}>
              {benefit}
            </p>
          </div>

          {/* 3-stat grid */}
          <div className="grid grid-cols-3 gap-2 rounded-2xl p-3"
               style={{ background: '#1f1539' }}>
            {[
              { label: 'Annual Aid', value: '₹6,000' },
              { label: 'Frequency', value: '3 Times' },
              { label: 'Category', value: scheme.category },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center text-center py-2 px-1 rounded-xl"
                   style={{ background: 'rgba(35,25,61,0.6)' }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, color: '#cdbdff', letterSpacing: '0.04em' }}>{label}</span>
                <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 17, fontWeight: 600, color: '#ff7a29', marginTop: 2 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 flex flex-col gap-4 pb-6">

          {/* ── Why you may qualify ── */}
          <section className="rounded-[28px] p-5 relative overflow-hidden"
                   style={{ background: '#23193d', border: '1px solid rgba(201,184,255,0.10)', boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full pointer-events-none"
                 style={{ background: 'rgba(68,223,166,0.10)', filter: 'blur(20px)' }} />
            {/* Section header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                   style={{ background: 'rgba(68,223,166,0.15)', color: '#44dfa6' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22 }}>workspace_premium</span>
              </div>
              <div>
                <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 20, fontWeight: 700, color: '#e8ddff' }}>
                  {t('whyQualifyEn')}
                </h2>
                <span className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
                      style={{ fontSize: 13, color: '#cdbdff', fontFamily: lang === 'en' ? "'Inter',sans-serif" : undefined }}>
                  {t('whyQualify')}
                </span>
              </div>
            </div>
            {/* Eligibility rows */}
            <div className="flex flex-col gap-2">
              {[
                { text: 'Small / marginal farmer with cultivable land', sub: 'Sown acreage valid under state revenue census' },
                { text: 'Land holding within 2 hectares', sub: 'Profile Match: You hold 2.0 acres ✓' },
                { text: 'Valid Aadhaar linked to bank account', sub: 'NPCI mapper active on primary account' },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-2xl"
                     style={{ background: 'rgba(45,36,72,0.6)' }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                       style={{ background: 'rgba(68,223,166,0.2)', color: '#44dfa6', boxShadow: '0px 2px 10px rgba(92,242,184,0.3)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check</span>
                  </div>
                  <div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: '#e8ddff' }}>{row.text}</span>
                    <br />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: i === 1 ? '#67fcc1' : '#a78b7e' }}>{row.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Documents ── */}
          <section className="rounded-[28px] p-5 relative overflow-hidden"
                   style={{ background: '#23193d', border: '1px solid rgba(201,184,255,0.10)', boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}>
            {/* Section header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                     style={{ background: 'rgba(255,122,41,0.15)', color: '#ff7a29' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>inventory_2</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 20, fontWeight: 700, color: '#e8ddff' }}>
                    {t('docsNeededEn')}
                  </h2>
                  <span className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
                        style={{ fontSize: 13, color: '#cdbdff', fontFamily: lang === 'en' ? "'Inter',sans-serif" : undefined }}>
                    {t('docsNeeded')}
                  </span>
                </div>
              </div>
              {/* Ready badge */}
              <div className="px-3 py-1 rounded-full flex items-center gap-1"
                   style={{ background: 'rgba(68,223,166,0.2)', color: '#44dfa6', fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 600,
                            boxShadow: '0px 0px 16px rgba(92,242,184,0.25)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#44dfa6' }} />
                {readyCount}/{totalDocs} ready
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {scheme.documents.map((doc, i) => (
                <ChecklistRow key={i} label={doc.name} sub={doc.sub} done={doc.done} />
              ))}
            </div>
          </section>

          {/* ── Application steps ── */}
          <section className="rounded-[28px] p-5 relative overflow-hidden"
                   style={{ background: '#23193d', border: '1px solid rgba(201,184,255,0.10)', boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                   style={{ background: 'rgba(205,189,255,0.15)', color: '#cdbdff' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22 }}>route</span>
              </div>
              <div>
                <h2 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 20, fontWeight: 700, color: '#e8ddff' }}>
                  {t('howToApplyEn')}
                </h2>
                <span className={lang === 'te' ? 'script-telugu' : lang === 'hi' ? 'script-hindi' : ''}
                      style={{ fontSize: 13, color: '#cdbdff', fontFamily: lang === 'en' ? "'Inter',sans-serif" : undefined }}>
                  {t('howToApply')}
                </span>
              </div>
            </div>
            <StepPath steps={scheme.steps} />
          </section>

          {/* Spacer */}
          <div style={{ height: 24 }} />
        </div>
      </main>

      {/* ── Bottom action bar ── */}
      <BottomActionBar>
        <div className="flex gap-3 w-full">
          <button
            onClick={() => navigate('/share')}
            className="btn-ghost flex-1 px-4"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>share</span>
            {t('shareScheme')}
          </button>
          <button
            onClick={() => window.open(scheme.officialUrl, '_blank')}
            className="btn-primary flex-[2]"
          >
            {t('applyNow')}
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
          </button>
        </div>
      </BottomActionBar>
    </div>
  );
}
