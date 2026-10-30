import React, { useState, useEffect } from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';

interface AppleSubnavProps {
  currentView: 'home' | 'deletion' | 'terms' | 'privacy';
  setCurrentView: (view: 'home' | 'deletion' | 'terms' | 'privacy') => void;
  onOpenDownload: () => void;
}

export const AppleSubnav: React.FC<AppleSubnavProps> = ({
  currentView,
  setCurrentView,
  onOpenDownload,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (anchor: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isSticky
          ? 'bg-black/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/50'
          : 'bg-black/40 backdrop-blur-md border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between text-xs">
        {/* Left: Product Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-base sm:text-lg font-bold text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            SafeCheckinn
          </button>
          <span className="text-[11px] text-[#86868b] hidden sm:inline-block">
            Digital Check-in Platform
          </span>
        </div>

        {/* Right: Sub-links in Apple style */}
        <div className="flex items-center gap-4 sm:gap-6 text-[#86868b] font-medium">
          <button
            onClick={() => handleScrollTo('overview')}
            className="hover:text-white transition-colors hidden md:inline-block"
          >
            Overview
          </button>
          <button
            onClick={() => handleScrollTo('highlights')}
            className="hover:text-white transition-colors hidden sm:inline-block"
          >
            Capabilities
          </button>
          <button
            onClick={() => handleScrollTo('closer-look')}
            className="hover:text-white transition-colors hidden md:inline-block"
          >
            Product Tour
          </button>
          <button
            onClick={() => handleScrollTo('camera-control')}
            className="hover:text-white transition-colors hidden lg:inline-block"
          >
            ID Watermarking
          </button>
          <button
            onClick={() => handleScrollTo('zero-paper')}
            className="hover:text-white transition-colors hidden sm:inline-block"
          >
            Paperless
          </button>
          <button
            onClick={() => handleScrollTo('compare')}
            className="hover:text-white transition-colors hidden sm:inline-block"
          >
            Compare
          </button>

          {/* Download CTA Pill */}
          <button
            onClick={onOpenDownload}
            className="px-3.5 py-1 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-[11px] sm:text-xs tracking-tight transition-all active:scale-95 flex items-center gap-1 shadow-md shadow-[#0071e3]/30"
          >
            <span>Download App</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
