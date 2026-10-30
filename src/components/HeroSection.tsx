import React, { useEffect, useState } from 'react';
import {
  Printer,
  Copy,
  FileX,
  BarChart3,
  ChevronDown,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDownload?: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let rafId: number | null = null;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          rafId = null;
        });
      }
    };

    window.addEventListener('resize', checkMobile, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToShowcase = () => {
    const el = document.getElementById('usp-nav');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Apple iPhone Hero Scroll Physics: subtle scale-down & fade (lightweight on mobile for 60fps touch scrolling)
  const heroProgress = Math.min(1, Math.max(0, scrollY / 520));
  const heroScale = isMobile ? 1 - heroProgress * 0.03 : 1 - heroProgress * 0.085;
  const heroOpacity = isMobile ? Math.max(0.35, 1 - heroProgress * 0.65) : Math.max(0.15, 1 - heroProgress * 0.85);
  const heroTranslateY = isMobile ? 0 : scrollY * 0.22;
  const heroBlur = isMobile ? 0 : heroProgress * 6;

  return (
    <section
      id="overview"
      className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 overflow-hidden bg-[#03050a] bg-architectural-grid scroll-mt-20"
    >
      {/* Top radial spotlight + vignette mask */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.32)_0%,rgba(56,189,248,0.10)_45%,transparent_75%)] pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate3d(0, ${scrollY * -0.08}px, 0) scale(${1 + heroProgress * 0.12})`,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#03050a] to-transparent pointer-events-none" />

      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center will-change-transform"
        style={{
          transform: `translate3d(0, ${heroTranslateY}px, 0) scale(${heroScale})`,
          opacity: heroOpacity,
          filter: heroBlur > 0.2 ? `blur(${heroBlur.toFixed(2)}px)` : 'none',
        }}
      >
        {/* Brand Title with Staggered Apple Keynote Entrance */}
        <h1
          className={`text-[42px] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.045em] leading-[1.02] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
          }`}
        >
          <span className="bg-gradient-to-b from-white via-white to-[#cbd5e1] bg-clip-text text-transparent">
            Safe
          </span>
          <span className="bg-gradient-to-r from-[#60a5fa] via-[#38bdf8] to-[#f5d08a] bg-clip-text text-transparent">
            Checkinn
          </span>
        </h1>

        {/* Secondary Value Headline */}
        <h2
          className={`mt-3.5 sm:mt-4 text-xl sm:text-3xl md:text-[38px] font-bold tracking-[-0.025em] text-white/95 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Digitize Check-ins.{' '}
          <span className="text-[#94a3b8] font-semibold">Simplify Hospitality.</span>
        </h2>

        {/* Executive Value Proposition */}
        <p
          className={`mt-4 sm:mt-5 text-[15px] sm:text-lg md:text-[21px] font-normal text-[#cbd5e1] max-w-3xl mx-auto leading-[1.6] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Run a faster, paperless front desk—verify guest IDs with{' '}
          <span className="text-white font-semibold">automatic watermarks</span>, assign rooms in seconds, and manage{' '}
          <span className="text-white font-semibold">every check-in from your phone</span>.
        </p>

        {/* Core Capability Navigation Pills (2x2 Grid on Mobile, Single Pill Bar on Tablet/Desktop) */}
        <div
          className={`mt-7 sm:mt-8 grid grid-cols-2 sm:inline-flex sm:flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-2 rounded-2xl sm:rounded-full luxury-card w-full max-w-md sm:w-auto sm:max-w-none mx-auto transition-all duration-1000 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { label: 'No Printer', icon: <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, strike: true },
            { label: 'No Photocopy', icon: <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, strike: true },
            { label: 'No Paperwork', icon: <FileX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, strike: true },
            { label: 'Check-in Insights', icon: <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, strike: false },
          ].map((pill) => (
            <button
              key={pill.label}
              onClick={scrollToShowcase}
              className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-white text-xs sm:text-[15px] font-semibold border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              {pill.strike ? (
                <span className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full bg-rose-500/15 border border-rose-500/40 flex items-center justify-center text-rose-300">
                  {pill.icon}
                  <span className="absolute w-full h-[1.5px] bg-rose-500 rotate-[-45deg]" />
                </span>
              ) : (
                <span className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8]">
                  {pill.icon}
                </span>
              )}
              <span className="truncate">{pill.label}</span>
            </button>
          ))}
        </div>

        {/* Section Scroll Prompt */}
        <div
          className={`mt-8 flex flex-col items-center justify-center transition-all duration-1000 delay-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={scrollToShowcase}
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.18em] font-bold text-[#94a3b8] hover:text-white transition-colors group"
          >
            <span>Explore Key Capabilities</span>
            <ChevronDown className="w-4 h-4 text-[#38bdf8] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
