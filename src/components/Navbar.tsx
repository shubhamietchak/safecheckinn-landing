import React, { useState, useEffect } from 'react';
import { Smartphone, ShieldCheck, FileText, Trash2, Menu, X, Hotel, FilePlus2, BarChart3, Home } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'deletion' | 'terms' | 'privacy';
  setCurrentView: (view: 'home' | 'deletion' | 'terms' | 'privacy') => void;
  onOpenDownload: () => void;
}

type ActiveSectionId = 'overview' | 'usp-nav' | 'closer-look' | 'download';

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<ActiveSectionId>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const updateNavOnScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setScrollProgress(docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0);

      // Section detection
      const sections: ActiveSectionId[] = ['overview', 'usp-nav', 'closer-look', 'download'];
      const viewportTrigger = window.innerHeight * 0.35;

      let detected: ActiveSectionId = 'overview';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportTrigger) {
            detected = id;
          }
        }
      }
      setActiveSection(detected);
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateNavOnScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateNavOnScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Close mobile menu on Escape key or when resizing to large desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (view: 'home' | 'deletion' | 'terms' | 'privacy', anchor?: ActiveSectionId) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    if (view === 'home') {
      if (anchor) {
        setActiveSection(anchor);
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      } else {
        setActiveSection('overview');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { id: 'overview' as ActiveSectionId, shortLabel: 'Overview', fullLabel: 'Overview', icon: <Home className="w-4 h-4" /> },
    { id: 'usp-nav' as ActiveSectionId, shortLabel: 'Capabilities', fullLabel: 'Key Capabilities', icon: <FilePlus2 className="w-4 h-4" /> },
    { id: 'closer-look' as ActiveSectionId, shortLabel: 'Tour', fullLabel: 'Product Tour', icon: <Hotel className="w-4 h-4" /> },
    { id: 'download' as ActiveSectionId, shortLabel: 'App', fullLabel: 'Mobile App', icon: <Smartphone className="w-4 h-4" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Navbar Bar */}
      <nav
        aria-label="Primary Navigation"
        className={`w-full h-16 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'apple-localnav-glass shadow-[0_10px_30px_rgba(0,0,0,0.65)]'
            : 'bg-[#03050a]/85 backdrop-blur-md border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo & Name (Always shrink-0, never overlapped) */}
          <button
            onClick={() => handleNavClick('home', 'overview')}
            className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-none shrink-0"
            aria-label="SafeCheckinn Home"
          >
            <img
              src="/assets/app_icon_512x512.png"
              alt="SafeCheckinn logo"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover border border-white/15 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-bold tracking-[-0.025em] text-[#f5f5f7] group-hover:text-white transition-colors text-[17px] sm:text-[20px] whitespace-nowrap">
              Safe<span className="text-[#38bdf8]">Checkinn</span>
            </span>
          </button>

          {/* Desktop & Tablet Center Links (Never wraps or overlaps) */}
          <div className="hidden md:flex items-center gap-1 sm:gap-1.5 lg:gap-2 xl:gap-5 text-[13px] lg:text-[14px] font-medium tracking-[-0.01em]">
            {navLinks.map((item) => {
              const isActive = currentView === 'home' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick('home', item.id)}
                  className={`relative px-2.5 sm:px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold bg-white/[0.08]'
                      : 'text-[#f5f5f7]/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {/* On tablet show shortLabel, on lg+ show fullLabel */}
                  <span className="inline lg:hidden">{item.shortLabel}</span>
                  <span className="hidden lg:inline">{item.fullLabel}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#38bdf8] rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Desktop Only Legal Links (Only displayed at xl: 1280px+ where ample room exists) */}
            <span className="hidden xl:inline-block h-4 w-px bg-white/15 mx-1" />

            <div className="hidden xl:flex items-center gap-4 text-[13px]">
              <button
                onClick={() => handleNavClick('privacy')}
                className={`whitespace-nowrap transition-colors ${
                  currentView === 'privacy'
                    ? 'text-[#34d399] font-semibold'
                    : 'text-[#f5f5f7]/65 hover:text-white'
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick('terms')}
                className={`whitespace-nowrap transition-colors ${
                  currentView === 'terms'
                    ? 'text-[#38bdf8] font-semibold'
                    : 'text-[#f5f5f7]/65 hover:text-white'
                }`}
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavClick('deletion')}
                className={`whitespace-nowrap transition-colors ${
                  currentView === 'deletion'
                    ? 'text-rose-400 font-semibold'
                    : 'text-[#f5f5f7]/65 hover:text-rose-300'
                }`}
              >
                Account Deletion
              </button>
            </div>
          </div>

          {/* Right Action Area: Download Button + Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Apple-Style CTA Button */}
            <button
              onClick={onOpenDownload}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#0068d1] whitespace-nowrap transition-all duration-200 shadow-[0_0_20px_rgba(0,113,227,0.35)] shrink-0 active:scale-95"
            >
              <Smartphone className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline sm:inline">Download App</span>
              <span className="xs:hidden">App</span>
            </button>

            {/* Hamburger / Close Menu Toggle (Visible on < xl so mobile & tablet can access legal links) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#f5f5f7] hover:text-white transition-colors focus:outline-none shrink-0"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#38bdf8]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator Bar at Bottom of Navbar */}
        <div className="w-full h-[1.5px] bg-transparent overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0071e3] via-[#38bdf8] to-[#34d399] transition-transform duration-150 origin-left"
            style={{
              transform: `scaleX(${scrollProgress})`,
            }}
          />
        </div>
      </nav>

      {/* Backdrop Overlay when Menu is Open */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 top-16 bg-black/65 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-Down Mobile & Tablet Curtain Drawer */}
      <div
        className={`xl:hidden fixed left-0 right-0 top-16 z-50 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen
            ? 'max-h-[85vh] opacity-100 shadow-[0_20px_60px_rgba(0,0,0,0.85)]'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="apple-localnav-glass border-b border-white/10 px-5 sm:px-8 py-5 max-h-[calc(100vh-5rem)] overflow-y-auto space-y-5">
          {/* Mobile Only Section Navigation Links (< md) */}
          <div className="md:hidden space-y-1 pb-4 border-b border-white/10">
            <div className="text-[11px] uppercase tracking-wider font-bold text-[#86868b] px-3 mb-2">
              Sections
            </div>
            {navLinks.map((item) => {
              const isActive = currentView === 'home' && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick('home', item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#38bdf8]/15 text-[#38bdf8]'
                      : 'text-white/85 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-[#38bdf8]' : 'text-[#86868b]'}>
                    {item.icon}
                  </span>
                  <span>{item.fullLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Legal Pages & Popovers (Accessible for Mobile & Tablet) */}
          <div className="space-y-1">
            <div className="text-[11px] uppercase tracking-wider font-bold text-[#86868b] px-3 mb-2">
              Legal &amp; Privacy
            </div>
            <button
              onClick={() => handleNavClick('privacy')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                currentView === 'privacy'
                  ? 'bg-emerald-500/15 text-[#34d399]'
                  : 'text-white/85 hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-[#34d399] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Privacy Policy</span>
              </div>
              <span className="text-xs text-[#86868b]">Read</span>
            </button>

            <button
              onClick={() => handleNavClick('terms')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                currentView === 'terms'
                  ? 'bg-[#38bdf8]/15 text-[#38bdf8]'
                  : 'text-white/85 hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#38bdf8]/15 text-[#38bdf8] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <span>Terms of Service</span>
              </div>
              <span className="text-xs text-[#86868b]">Read</span>
            </button>

            <button
              onClick={() => handleNavClick('deletion')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                currentView === 'deletion'
                  ? 'bg-rose-500/15 text-rose-400'
                  : 'text-rose-300/85 hover:bg-white/[0.05] hover:text-rose-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-rose-500/15 text-rose-400 flex items-center justify-center">
                  <Trash2 className="w-4 h-4" />
                </div>
                <span>Account Deletion</span>
              </div>
              <span className="text-xs text-rose-400/80">Manage</span>
            </button>
          </div>

          {/* Direct Download in Drawer */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-3 rounded-2xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-98 transition-all"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download SafeCheckinn App</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
