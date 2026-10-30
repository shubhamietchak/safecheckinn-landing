import React, { useState, useEffect, useRef } from 'react';
import {
  Printer,
  FileX,
  Smartphone,
  BarChart3,
  CheckCircle2,
  Play,
  Pause,
  Ban,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { SafeCheckinnDeviceScreen } from './SafeCheckinnDeviceScreen';

interface ShowcaseChapter {
  id: string;
  stepNumber: string;
  pillLabel: string;
  eyebrow: string;
  headline: string;
  highlightText: string;
  description: string;
  visualType: 'no-printer' | 'no-paper' | 'digital-checkin' | 'live-insights';
  accentGradient: string;
  glowColor: string;
  icon: React.ReactNode;
  bulletPoints: string[];
}

const CHAPTERS: ShowcaseChapter[] = [
  {
    id: 'no-printer',
    stepNumber: '01',
    pillLabel: 'No Printer',
    eyebrow: 'CAPABILITY 01 • HARDWARE-FREE RECEPTION',
    headline: 'No Printer. No Photocopy.',
    highlightText: 'Eliminate front-desk printing and scanning hardware.',
    description:
      'Replace desktop printers, photocopiers, and physical document trays with mobile identity document capture directly at the front desk.',
    visualType: 'no-printer',
    accentGradient: 'from-[#f87171] via-[#fb923c] to-[#38bdf8]',
    glowColor: 'rgba(244, 63, 94, 0.18)',
    icon: <Printer className="w-4 h-4" />,
    bulletPoints: [
      'No desktop printers or photocopiers required',
      'Eliminate recurring paper, ink, and toner expenses',
      'Prevent unwatermarked paper ID copies at the reception desk',
    ],
  },
  {
    id: 'no-paper',
    stepNumber: '02',
    pillLabel: 'No Paperwork',
    eyebrow: 'CAPABILITY 02 • PAPERLESS DOCUMENTATION',
    headline: 'No Paper Check-in.',
    highlightText: 'Replace physical guest register books.',
    description:
      'Transition from manual paper register books and handwritten arrival slips to structured, searchable digital check-in records.',
    visualType: 'no-paper',
    accentGradient: 'from-[#fbbf24] via-[#f59e0b] to-[#34d399]',
    glowColor: 'rgba(245, 158, 11, 0.18)',
    icon: <FileX className="w-4 h-4" />,
    bulletPoints: [
      'Eliminate physical register books and paper filing binders',
      'Reduce manual entry errors and illegible handwriting',
      'Search and retrieve historical check-in records instantly',
    ],
  },
  {
    id: 'digital-checkin',
    stepNumber: '03',
    pillLabel: 'Digital Check-in',
    eyebrow: 'CAPABILITY 03 • FRONT-DESK WORKFLOW',
    headline: 'Digital Check-in.',
    highlightText: 'Fast room assignment and watermarked ID verification.',
    description:
      'Assign available rooms, record checkout dates, and capture guest identity documents with an automatic watermark containing your property name and check-in date.',
    visualType: 'digital-checkin',
    accentGradient: 'from-[#38bdf8] via-[#60a5fa] to-[#34d399]',
    glowColor: 'rgba(56, 189, 248, 0.24)',
    icon: <Smartphone className="w-4 h-4" />,
    bulletPoints: [
      'Real-time available and occupied room selection',
      'Automatic diagonal watermark applied to captured guest IDs',
      'Streamlined check-in and checkout status management',
    ],
  },
  {
    id: 'live-insights',
    stepNumber: '04',
    pillLabel: 'Check-in Insights',
    eyebrow: 'CAPABILITY 04 • OPERATIONAL REPORTING',
    headline: 'Check-in Insights.',
    highlightText: 'Real-time visibility into front-desk operations.',
    description:
      'Track weekly and monthly check-in volume, active stays versus completed checkouts, and daily guest arrival patterns from one dashboard.',
    visualType: 'live-insights',
    accentGradient: 'from-[#34d399] via-[#10b981] to-[#38bdf8]',
    glowColor: 'rgba(16, 185, 129, 0.22)',
    icon: <BarChart3 className="w-4 h-4" />,
    bulletPoints: [
      'Weekly, monthly, and custom date-range check-in metrics',
      'Clear breakdown of active stays and completed checkouts',
      'Daily activity trend analysis to support staffing decisions',
    ],
  },
];

/**
 * SLIDE 01 RIGHT STAGE: Architectural "No Printer & No Photocopy" Showcase Card
 */
const NoPrinterStageVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[460px] rounded-[28px] sm:rounded-[32px] luxury-card p-4 sm:p-7 animate-fadeIn">
      {/* Header Status Row */}
      <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-5">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
          <Ban className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500" />
          <span>No Printer • No Photocopy</span>
        </div>
        <span className="text-[11px] sm:text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">
          Zero Hardware
        </span>
      </div>

      {/* Architectural Schematic Stage */}
      <div className="relative w-full h-[180px] sm:h-[230px] rounded-2xl bg-[#050811] bg-architectural-grid border border-white/[0.07] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.16)_0%,transparent_70%)]" />

        {/* Sleek Isometric-Style Printer & Scanner Schematic */}
        <svg className="w-36 h-36 sm:w-44 sm:h-44" viewBox="0 0 160 160" fill="none" aria-hidden="true">
          {/* Top Paper Tray */}
          <rect x="46" y="18" width="68" height="30" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <rect x="54" y="10" width="52" height="32" rx="3" fill="#e2e8f0" />
          <line x1="62" y1="20" x2="98" y2="20" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="62" y1="27" x2="90" y2="27" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

          {/* Main Printer Chassis */}
          <rect x="24" y="46" width="112" height="60" rx="12" fill="#1e293b" stroke="#64748b" strokeWidth="2.5" />
          <rect x="34" y="56" width="92" height="20" rx="5" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
          <rect x="40" y="61" width="32" height="10" rx="2" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.2" />
          <circle cx="114" cy="66" r="3.5" fill="#f43f5e" />
          <circle cx="102" cy="66" r="3.5" fill="#f59e0b" />

          {/* Output Slot & Ejected Photocopy Sheet */}
          <path d="M42 94H118" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
          <rect x="48" y="94" width="64" height="44" rx="3" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
          <rect x="56" y="102" width="22" height="15" rx="2" fill="#cbd5e1" />
          <line x1="84" y1="106" x2="102" y2="106" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          <line x1="84" y1="113" x2="98" y2="113" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="56" y1="126" x2="102" y2="126" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Precision Prohibition Ring Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-36 h-36 rounded-full border-[4px] border-rose-500/90 flex items-center justify-center shadow-[0_0_35px_rgba(244,63,94,0.45)]">
            <div className="w-full h-[4px] bg-rose-500/90 rotate-[-45deg]" />
          </div>
        </div>
      </div>

      {/* Before -> After Transformation Row */}
      <div className="mt-4 grid grid-cols-11 gap-2 items-center">
        <div className="col-span-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] p-3.5 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
            Traditional Setup
          </div>
          <div className="text-sm font-bold text-slate-400 line-through decoration-rose-500/80 mt-0.5">
            Printers &amp; Photocopiers
          </div>
        </div>

        <div className="col-span-1 flex justify-center text-[#38bdf8]">
          <ArrowRight className="w-4 h-4" />
        </div>

        <div className="col-span-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3.5 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-[#34d399] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>SafeCheckinn</span>
          </div>
          <div className="text-sm font-bold text-white mt-0.5">
            Mobile ID Capture
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * SLIDE 02 RIGHT STAGE: Architectural "No Paper Check-in" Showcase Card
 */
const NoPaperStageVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[460px] rounded-[28px] sm:rounded-[32px] luxury-card p-4 sm:p-7 animate-fadeIn">
      {/* Header Status Row */}
      <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-5">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
          <Ban className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500" />
          <span>No Paperwork</span>
        </div>
        <span className="text-[11px] sm:text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">
          100% Paperless
        </span>
      </div>

      {/* Architectural Schematic Stage */}
      <div className="relative w-full h-[180px] sm:h-[230px] rounded-2xl bg-[#050811] bg-architectural-grid border border-white/[0.07] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]" />

        {/* Sleek Bound Register Ledger & Stacked Paper Schematic */}
        <svg className="w-36 h-36 sm:w-44 sm:h-44" viewBox="0 0 160 160" fill="none" aria-hidden="true">
          <rect x="34" y="28" width="84" height="104" rx="6" transform="rotate(-6 34 28)" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <rect x="40" y="22" width="84" height="104" rx="6" transform="rotate(4 40 22)" fill="#cbd5e1" />
          <rect x="38" y="20" width="86" height="108" rx="6" fill="#f8fafc" stroke="#334155" strokeWidth="2.5" />
          <rect x="38" y="20" width="14" height="108" rx="3" fill="#e11d48" />
          <rect x="60" y="32" width="52" height="10" rx="2" fill="#e2e8f0" />
          <line x1="60" y1="54" x2="112" y2="54" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="68" x2="112" y2="68" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="82" x2="106" y2="82" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="96" x2="98" y2="96" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* Precision Prohibition Ring Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-36 h-36 rounded-full border-[4px] border-rose-500/90 flex items-center justify-center shadow-[0_0_35px_rgba(244,63,94,0.45)]">
            <div className="w-full h-[4px] bg-rose-500/90 rotate-[-45deg]" />
          </div>
        </div>
      </div>

      {/* Before -> After Transformation Row */}
      <div className="mt-4 grid grid-cols-11 gap-2 items-center">
        <div className="col-span-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] p-3.5 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
            Traditional Setup
          </div>
          <div className="text-sm font-bold text-slate-400 line-through decoration-rose-500/80 mt-0.5">
            Physical Registers
          </div>
        </div>

        <div className="col-span-1 flex justify-center text-[#38bdf8]">
          <ArrowRight className="w-4 h-4" />
        </div>

        <div className="col-span-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3.5 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-[#34d399] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>SafeCheckinn</span>
          </div>
          <div className="text-sm font-bold text-white mt-0.5">
            Digital Check-in Records
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * SLIDE 03 RIGHT STAGE: Dual Interactive SafeCheckinn Screens (Room Selection + Watermarked Guest ID)
 */
const DigitalCheckinPhonesVisual: React.FC = () => {
  const [focusedScreen, setFocusedScreen] = useState<'rooms' | 'watermark'>('rooms');

  return (
    <div className="relative flex flex-col items-center w-full animate-fadeIn">
      {/* Segmented Switcher Above Phones */}
      <div className="mb-4 inline-flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
        <button
          onClick={() => setFocusedScreen('rooms')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            focusedScreen === 'rooms'
              ? 'bg-white text-black shadow-sm'
              : 'text-[#94a3b8] hover:text-white'
          }`}
        >
          1. Room Selection
        </button>
        <button
          onClick={() => setFocusedScreen('watermark')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            focusedScreen === 'watermark'
              ? 'bg-white text-black shadow-sm'
              : 'text-[#94a3b8] hover:text-white'
          }`}
        >
          2. Watermarked Guest ID
        </button>
      </div>

      {/* Dual Native Retina Phones on Tablet/Desktop + Adaptive Single Active Phone on Mobile */}
      <div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        <div
          onClick={() => setFocusedScreen('rooms')}
          className={`cursor-pointer w-[235px] sm:w-[225px] md:w-[240px] h-[455px] sm:h-[450px] md:h-[475px] transition-all duration-500 ${
            focusedScreen === 'rooms'
              ? 'scale-100 z-20 block'
              : 'scale-95 opacity-60 hover:opacity-90 z-10 hidden sm:block'
          }`}
        >
          <SafeCheckinnDeviceScreen screen="rooms" compact />
        </div>

        <div
          onClick={() => setFocusedScreen('watermark')}
          className={`cursor-pointer w-[235px] sm:w-[225px] md:w-[240px] h-[455px] sm:h-[450px] md:h-[475px] transition-all duration-500 ${
            focusedScreen === 'watermark'
              ? 'scale-100 z-20 block'
              : 'scale-95 opacity-60 hover:opacity-90 z-10 hidden sm:block'
          }`}
        >
          <SafeCheckinnDeviceScreen screen="watermark" compact />
        </div>
      </div>
    </div>
  );
};

/**
 * SLIDE 04 RIGHT STAGE: Live Check-in Insights Phone
 */
const LiveInsightsPhoneVisual: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full animate-fadeIn">
      {/* Floating Callout — Top Left (Adaptive on Tablet & Desktop) */}
      <div className="hidden xl:flex absolute -left-20 top-12 z-40 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl luxury-card">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-[#34d399] flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-white leading-tight">Occupancy Overview</div>
          <div className="text-[11px] text-[#cbd5e1]">Active Stays &amp; Checkouts</div>
        </div>
      </div>

      {/* Floating Callout — Bottom Right (Adaptive on Tablet & Desktop) */}
      <div className="hidden xl:flex absolute -right-20 bottom-12 z-40 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl luxury-card">
        <div className="w-8 h-8 rounded-xl bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-white leading-tight">Daily Activity Trends</div>
          <div className="text-[11px] text-[#cbd5e1]">Weekly &amp; Monthly Reporting</div>
        </div>
      </div>

      <div className="w-[245px] sm:w-[265px] h-[475px] sm:h-[515px]">
        <SafeCheckinnDeviceScreen screen="insights" />
      </div>
    </div>
  );
};

export const AppleScrollShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mobileChapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [chapterProgress, setChapterProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const updateScrollMetrics = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isDesktop = window.innerWidth >= 1024;

      const visible = rect.top <= windowHeight * 0.65 && rect.bottom >= windowHeight * 0.35;
      setIsInViewport(visible);

      if (!isDesktop) {
        // Mobile & Tablet (<1024px): Track natural vertical scroll across the 4 chapter cards
        const viewportCenter = windowHeight * 0.45;
        let currentIdx = 0;
        let localProg = 0;

        mobileChapterRefs.current.forEach((el, idx) => {
          if (!el) return;
          const cRect = el.getBoundingClientRect();
          if (cRect.top <= viewportCenter) {
            currentIdx = idx;
            const cardHeight = Math.max(1, cRect.height);
            localProg = Math.min(1, Math.max(0, (viewportCenter - cRect.top) / cardHeight));
          }
        });

        setActiveIndex(currentIdx);
        setChapterProgress(localProg);
        rafId = null;
        return;
      }

      // Desktop (>=1024px): Pinned 320vh sticky scrollytelling metrics
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) {
        rafId = null;
        return;
      }

      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const progress = scrolled / totalScrollable; // 0 .. 1 across all 4 chapters
      const scaled = progress * CHAPTERS.length; // 0 .. 4
      const nextIndex = Math.min(CHAPTERS.length - 1, Math.floor(scaled));
      const localProgress = Math.min(1, Math.max(0, scaled - nextIndex));

      setActiveIndex(nextIndex);
      setChapterProgress(localProgress);
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollMetrics);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScrollMetrics();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      jumpToChapter((activeIndex + 1) % CHAPTERS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isAutoPlaying, activeIndex]);

  const jumpToChapter = (index: number) => {
    if (!containerRef.current) return;
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop) {
      const targetEl = mobileChapterRefs.current[index];
      if (targetEl) {
        const y = window.scrollY + targetEl.getBoundingClientRect().top - 72;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setActiveIndex(index);
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetScroll =
      absoluteTop + ((index + 0.08) / CHAPTERS.length) * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const activeChapter = CHAPTERS[activeIndex];

  // Apple Scrollytelling Continuous Parallax & Stage Easing (Desktop Pinned Stage)
  const stageEnterOffset = Math.max(0, (0.18 - chapterProgress) * 65);
  const stageParallaxY = (chapterProgress - 0.5) * -18;
  const stageScale = 1 - Math.abs(chapterProgress - 0.45) * 0.035;

  return (
    <section
      id="usp-nav"
      ref={containerRef}
      className="relative h-auto lg:h-[320vh] bg-[#03050a] border-t border-white/[0.06] scroll-mt-20"
    >
      {/* ── MOBILE & TABLET NATURAL SCROLL SHOWCASE (<1024px) ──
          Smooth native vertical touch scrolling with zero clipping or sticky scroll-hijacking */}
      <div className="lg:hidden py-14 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto space-y-16 sm:space-y-24">
        {CHAPTERS.map((chap, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={chap.id}
              ref={(el) => {
                mobileChapterRefs.current[idx] = el;
              }}
              className={`relative rounded-[28px] sm:rounded-[32px] border p-5 sm:p-8 transition-all duration-500 ${
                isActive
                  ? 'bg-white/[0.03] border-white/[0.15] shadow-[0_24px_60px_rgba(0,0,0,0.75)]'
                  : 'bg-white/[0.015] border-white/[0.07]'
              }`}
            >
              {/* Chapter Story Copy */}
              <div className="space-y-3.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase">
                  <span className="text-[#38bdf8]">{chap.icon}</span>
                  <span className="text-white/95">{chap.eyebrow}</span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] leading-[1.08] text-white">
                    {chap.headline}
                  </h2>
                  <p
                    className={`text-lg sm:text-2xl font-extrabold tracking-[-0.025em] leading-[1.2] bg-gradient-to-r ${chap.accentGradient} bg-clip-text text-transparent`}
                  >
                    {chap.highlightText}
                  </p>
                </div>

                <p className="text-[15px] sm:text-base text-[#cbd5e1] leading-[1.6]">
                  {chap.description}
                </p>

                <ul className="space-y-2 text-left pt-1">
                  {chap.bulletPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start sm:items-center gap-2.5 text-sm sm:text-[15px] text-white/95 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#34d399] shrink-0 mt-0.5 sm:mt-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chapter Interactive Visual Stage */}
              <div className="mt-7 sm:mt-8 flex items-center justify-center">
                {chap.visualType === 'no-printer' && <NoPrinterStageVisual />}
                {chap.visualType === 'no-paper' && <NoPaperStageVisual />}
                {chap.visualType === 'digital-checkin' && <DigitalCheckinPhonesVisual />}
                {chap.visualType === 'live-insights' && <LiveInsightsPhoneVisual />}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP STICKY VIEWPORT STAGE (>=1024px Apple Scrollytelling Pinned Canvas) ── */}
      <div className="hidden lg:flex sticky top-16 min-h-[calc(100vh-4rem)] w-full overflow-hidden flex-col justify-center select-none">
        {/* Dynamic Ambient Stage Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[560px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${activeChapter.glowColor} 0%, transparent 70%)`,
          }}
        />

        {/* Subtle Vertical Scroll Progress Rail on Left Edge (Desktop) */}
        <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
          {CHAPTERS.map((chap, idx) => {
            const isCurrent = idx === activeIndex;
            const isPassed = idx < activeIndex;
            return (
              <button
                key={chap.id}
                onClick={() => jumpToChapter(idx)}
                className="group flex items-center gap-2 focus:outline-none py-0.5"
                title={chap.pillLabel}
                aria-label={`Jump to ${chap.pillLabel}`}
              >
                <div
                  className="relative w-1.5 rounded-full overflow-hidden bg-white/15 transition-all duration-500"
                  style={{ height: isCurrent ? '36px' : '10px' }}
                >
                  <div
                    className="w-full bg-[#38bdf8] rounded-full transition-all duration-150"
                    style={{
                      height: isPassed
                        ? '100%'
                        : isCurrent
                        ? `${Math.max(18, Math.round(chapterProgress * 100))}%`
                        : '0%',
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Split Content Stage (Desktop 12-Col) */}
        <div className="max-w-6xl w-full mx-auto px-6 relative z-10 grid grid-cols-12 gap-12 items-center py-10">
          {/* Left Column: Story Typography & Chapter Selector */}
          <div
            key={`text-${activeChapter.id}`}
            className="col-span-5 space-y-5 text-left animate-fadeIn will-change-transform"
            style={{
              transform: `translate3d(0, ${stageEnterOffset * 0.6}px, 0)`,
            }}
          >
            {/* Eyebrow Step Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-[13px] font-bold tracking-[0.12em] uppercase">
              <span className="text-[#38bdf8]">{activeChapter.icon}</span>
              <span className="text-white/95">{activeChapter.eyebrow}</span>
            </div>

            {/* Section Heading */}
            <div className="space-y-2">
              <h2 className="text-[54px] font-black tracking-[-0.04em] leading-[1.06] text-white">
                {activeChapter.headline}
              </h2>
              <p
                className={`text-[32px] font-extrabold tracking-[-0.03em] leading-[1.18] bg-gradient-to-r ${activeChapter.accentGradient} bg-clip-text text-transparent`}
              >
                {activeChapter.highlightText}
              </p>
            </div>

            {/* Concise Story Description */}
            <p className="text-[18px] text-[#cbd5e1] max-w-xl leading-[1.6]">
              {activeChapter.description}
            </p>

            {/* Key Highlights List */}
            <ul className="space-y-2 text-left max-w-md pt-1">
              {activeChapter.bulletPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-base text-white/95 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#34d399] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Chapter Step Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-start gap-2">
              {CHAPTERS.map((chap, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <button
                    key={chap.id}
                    onClick={() => jumpToChapter(idx)}
                    className={`relative overflow-hidden px-4 py-2 rounded-full text-sm font-bold border transition-all duration-300 flex items-center gap-1.5 ${
                      isCurrent
                        ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.25)] scale-[1.03]'
                        : 'bg-white/[0.03] text-[#94a3b8] border-white/10 hover:text-white hover:border-white/25'
                    }`}
                  >
                    <span className="font-mono text-xs opacity-65">
                      {chap.stepNumber}
                    </span>
                    <span>{chap.pillLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dedicated Stage Visual per Slide with Apple Scroll-Linked Parallax */}
          <div
            key={`stage-${activeChapter.id}`}
            className="col-span-7 relative flex items-center justify-center min-h-[520px] will-change-transform"
            style={{
              transform: `translate3d(0, ${stageParallaxY + stageEnterOffset}px, 0) scale(${stageScale})`,
            }}
          >
            {activeChapter.visualType === 'no-printer' && <NoPrinterStageVisual />}
            {activeChapter.visualType === 'no-paper' && <NoPaperStageVisual />}
            {activeChapter.visualType === 'digital-checkin' && <DigitalCheckinPhonesVisual />}
            {activeChapter.visualType === 'live-insights' && <LiveInsightsPhoneVisual />}
          </div>
        </div>
      </div>

      {/* ── APPLE iPHONE-17 STYLE FLOATING BOTTOM CONTROLLER PILL DOCK (All Viewports) ── */}
      <div
        className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] sm:w-auto max-w-fit flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isInViewport
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-1 p-1 sm:p-1.5 rounded-full apple-controller-pill overflow-x-auto no-scrollbar">
          {CHAPTERS.map((chap, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={chap.id}
                onClick={() => jumpToChapter(idx)}
                className={`relative overflow-hidden px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  isSelected
                    ? 'bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.3)]'
                    : 'text-[#cbd5e1] hover:text-white'
                }`}
              >
                {/* Subtle scroll progress bar at bottom of active pill */}
                {isSelected && (
                  <span
                    className="absolute bottom-0 left-0 h-[2.5px] bg-[#0071e3] transition-all duration-100"
                    style={{ width: `${Math.max(12, Math.round(chapterProgress * 100))}%` }}
                  />
                )}
                {chap.icon}
                <span className="hidden md:inline">{chap.pillLabel}</span>
                <span className="md:hidden text-[11px] font-extrabold">{chap.pillLabel.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full apple-controller-pill hover:bg-white/15 text-white flex items-center justify-center transition-all active:scale-90"
          aria-label={isAutoPlaying ? 'Pause capability tour' : 'Auto-play capability tour'}
          title={isAutoPlaying ? 'Pause auto-play' : 'Auto-play capability tour'}
        >
          {isAutoPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>
      </div>
    </section>
  );
};
