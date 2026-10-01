import React from 'react';

/** Checklist row for documents */
export function ChecklistRow({ label, sub, done = false }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-2xl transition-all active:scale-[0.98]"
         style={{ background: done ? 'rgba(45,36,72,0.8)' : 'rgba(31,21,57,0.8)' }}>
      {/* Checkbox */}
      <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
           style={{ background: done ? '#44dfa6' : 'rgba(56,47,84,1)', color: done ? '#002114' : '#cdbdff' }}>
        {done
          ? <span className="material-symbols-outlined" style={{ fontSize: 16, fontVariationSettings: "'wght' 700" }}>check</span>
          : <span className="material-symbols-outlined" style={{ fontSize: 14 }}>crop_square</span>
        }
      </div>
      {/* Text */}
      <div className="flex flex-col min-w-0">
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: '#e8ddff' }}>{label}</span>
        {sub && <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: done ? '#44dfa6' : '#ffb692', marginTop: 1 }}>{sub}</span>}
      </div>
      {/* Status icon */}
      <div className="shrink-0 ml-auto">
        {done
          ? <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#44dfa6', fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          : <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#e0c0b2' }}>description</span>
        }
      </div>
    </div>
  );
}

/** Step path row for application steps */
export function StepPath({ steps }) {
  return (
    <div className="flex flex-col gap-1">
      {steps.map((s, i) => (
        <div key={s.step} className="flex items-start gap-3">
          {/* Step number + connector */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                 style={{ background: '#ff7a29', color: '#0a0518', fontFamily: "'Inter',sans-serif" }}>
              {s.step}
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 h-6 mt-1" style={{ background: 'rgba(255,122,41,0.3)' }} />
            )}
          </div>
          {/* Content */}
          <div className="flex flex-col pb-3">
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, color: '#e8ddff' }}>{s.label}</span>
            {s.sub && <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: '#cdbdff', marginTop: 2 }}>{s.sub}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
