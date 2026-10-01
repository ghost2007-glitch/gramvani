import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import LanguagePicker from './pages/LanguagePicker';
import Home from './pages/Home';
import Listening from './pages/Listening';
import Results from './pages/Results';
import SchemeDetail from './pages/SchemeDetail';
import ShareCard from './pages/ShareCard';

/** Redirect to /language-picker on first launch, otherwise /home */
function RootRedirect() {
  const launched = localStorage.getItem('gramvani_launched');
  return <Navigate to={launched ? '/home' : '/'} replace />;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div id="app-root">
          <Routes>
            {/* Language picker — first launch only */}
            <Route path="/" element={<LanguagePicker />} />

            {/* Main screens */}
            <Route path="/home" element={<Home />} />
            <Route path="/listening" element={<Listening />} />
            <Route path="/results" element={<Results />} />
            <Route path="/scheme/:id" element={<SchemeDetail />} />
            <Route path="/share" element={<ShareCard />} />

            {/* Catch-all → home */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
