import React from 'react';

/** Bottom action bar slot — sticky above safe area */
export function BottomActionBar({ children }) {
  return (
    <div className="bottom-bar">
      {children}
    </div>
  );
}
