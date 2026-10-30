import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AppleScrollShowcase } from './components/AppleScrollShowcase';
import { TakeACloserLook } from './components/TakeACloserLook';
import { AppStoreDownload } from './components/AppStoreDownload';
import { AccountDeletion } from './components/AccountDeletion';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';

export function App() {
  const [activePopover, setActivePopover] = useState<'home' | 'deletion' | 'terms' | 'privacy'>('home');

  // Support URL hashes (#privacy, #terms, #delete-account) for App Store & Play Store compliance links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('delete') || hash.includes('deletion')) {
        setActivePopover('deletion');
      } else if (hash.includes('privacy')) {
        setActivePopover('privacy');
      } else if (hash.includes('terms')) {
        setActivePopover('terms');
      } else {
        setActivePopover('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetPopover = (view: 'home' | 'deletion' | 'terms' | 'privacy') => {
    setActivePopover(view);
    if (view === 'deletion') {
      window.history.pushState(null, '', '#delete-account');
    } else if (view === 'privacy') {
      window.history.pushState(null, '', '#privacy');
    } else if (view === 'terms') {
      window.history.pushState(null, '', '#terms');
    } else {
      window.history.pushState(null, '', ' ');
    }
  };

  const handleScrollToDownload = () => {
    setActivePopover('home');
    const el = document.getElementById('download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between selection:bg-[#38bdf8] selection:text-black">
      {/* Unified Apple-Style Sticky Glass Navbar */}
      <Navbar
        currentView={activePopover}
        setCurrentView={handleSetPopover}
        onOpenDownload={handleScrollToDownload}
      />

      {/* Main Page Content (Always Rendered Behind Any Active Popover) */}
      <main className="flex-1">
        {/* 1. Apple Keynote Hero with Scroll-Parallax Scale */}
        <HeroSection
          onOpenDownload={handleScrollToDownload}
          onOpenPrivacy={() => handleSetPopover('privacy')}
          onOpenTerms={() => handleSetPopover('terms')}
        />

        {/* 2. Pinned Apple iPhone-17 Scrollytelling Showcase + Floating Bottom Pill Nav */}
        <AppleScrollShowcase />

        {/* 3. Apple "Take a closer look." 4-Screen & Finish Inspector */}
        <TakeACloserLook />

        {/* 4. Store Downloads + Privacy Policy, Terms & Account Deletion Popover Triggers */}
        <AppStoreDownload
          onOpenPrivacy={() => handleSetPopover('privacy')}
          onOpenTerms={() => handleSetPopover('terms')}
          onOpenDeletion={() => handleSetPopover('deletion')}
        />
      </main>

      {/* Popover Modals for Privacy Policy, Terms & Conditions, and Delete Account */}
      {activePopover === 'deletion' && (
        <AccountDeletion onClose={() => handleSetPopover('home')} />
      )}

      {activePopover === 'terms' && (
        <TermsAndConditions onClose={() => handleSetPopover('home')} />
      )}

      {activePopover === 'privacy' && (
        <PrivacyPolicy onClose={() => handleSetPopover('home')} />
      )}

      {/* Concise Footer with Direct Legal & Store CTAs */}
      <Footer
        setCurrentView={handleSetPopover}
        onOpenDownload={handleScrollToDownload}
      />
    </div>
  );
}

export default App;
