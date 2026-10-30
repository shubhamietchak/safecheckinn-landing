import React, { useState, useEffect, useRef } from 'react';
import { PhoneMockup, CheckinnFinish } from './PhoneMockup';
import {
  FilePlus2,
  Hotel,
  ShieldCheck,
  BarChart3,
  ChevronRight,
} from 'lucide-react';

interface FinishOption {
  id: CheckinnFinish;
  label: string;
  dotClass: string;
  description: string;
}

const FINISHES: FinishOption[] = [
  {
    id: 'sapphire',
    label: 'Midnight Sapphire',
    dotClass: 'bg-[#1e3a8a] border-[#38bdf8]',
    description: 'Signature SafeCheckinn hospitality navy finish with sky-blue ambient lighting.',
  },
  {
    id: 'obsidian',
    label: 'Obsidian Black',
    dotClass: 'bg-[#18181b] border-white/40',
    description: 'Matte dark finish with subtle studio reflections for low-glare front-desk viewing.',
  },
  {
    id: 'ivory',
    label: 'Warm Champagne',
    dotClass: 'bg-[#78716c] border-[#f5d08a]',
    description: 'Warm neutral finish inspired by contemporary boutique hotel interiors.',
  },
  {
    id: 'indigo',
    label: 'Royal Indigo',
    dotClass: 'bg-[#312e81] border-[#818cf8]',
    description: 'Deep indigo finish with subtle edge highlights.',
  },
];

export const TakeACloserLook: React.FC = () => {
  const [selectedFinish, setSelectedFinish] = useState<CheckinnFinish>('sapphire');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeFinishObj = FINISHES.find((f) => f.id === selectedFinish) || FINISHES[0];

  const views = [
    {
      index: 0,
      title: '1. Create Check-in',
      desc: 'Capture guest count, room assignment, checkout date, and identity documents in one unified form.',
      icon: <FilePlus2 className="w-5 h-5" />,
      activeColor: 'border-[#38bdf8]/60 bg-[#38bdf8]/[0.08]',
      iconBg: 'bg-[#38bdf8]/15 text-[#38bdf8]',
    },
    {
      index: 1,
      title: '2. Room Selection Modal',
      desc: 'Filter available and occupied rooms, search by room number or type, and assign rooms in seconds.',
      icon: <Hotel className="w-5 h-5" />,
      activeColor: 'border-[#38bdf8]/60 bg-[#38bdf8]/[0.08]',
      iconBg: 'bg-[#38bdf8]/15 text-[#38bdf8]',
    },
    {
      index: 2,
      title: '3. Watermarked Guest ID',
      desc: 'Automatically apply a diagonal watermark with your property name and check-in date to protect guest identity documents.',
      icon: <ShieldCheck className="w-5 h-5" />,
      activeColor: 'border-emerald-500/60 bg-emerald-500/[0.08]',
      iconBg: 'bg-emerald-500/15 text-[#34d399]',
    },
    {
      index: 3,
      title: '4. Check-in Insights',
      desc: 'Monitor total check-ins, active stays, completed checkouts, and daily arrival trends in real time.',
      icon: <BarChart3 className="w-5 h-5" />,
      activeColor: 'border-[#38bdf8]/60 bg-[#38bdf8]/[0.08]',
      iconBg: 'bg-[#38bdf8]/15 text-[#38bdf8]',
    },
  ];

  return (
    <section
      id="closer-look"
      ref={sectionRef}
      className="pt-14 sm:pt-20 pb-20 sm:pb-28 relative bg-[#03050a] bg-architectural-grid border-t border-white/[0.06] overflow-hidden scroll-mt-20"
    >
      {/* Ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#38bdf8]/[0.07] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with Apple Scroll-Reveal Entrance */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-xs sm:text-sm font-bold text-[#38bdf8] uppercase tracking-[0.16em] block mb-2.5">
            Interactive Product Tour
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-[-0.04em]">
            Built for Front-Desk Efficiency
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-[19px] text-[#cbd5e1] leading-[1.6]">
            Explore each step of the SafeCheckinn workflow—from guest registration and room selection to document watermarking and operational reporting.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Retina Phone Mockup with 3D Pop-Out Cards */}
          <div
            className={`lg:col-span-6 flex justify-center transition-all duration-1000 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <PhoneMockup
              finish={selectedFinish}
              activeScreenIndex={activeScreenIndex}
              onScreenIndexChange={setActiveScreenIndex}
              showControls={true}
            />
          </div>

          {/* Right Column: Finish Selector & 4 Screen Deep-Dive Cards */}
          <div
            className={`lg:col-span-6 space-y-5 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Ambient Finish Selector */}
            <div className="p-6 rounded-3xl luxury-card space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-[13px] uppercase font-bold text-[#94a3b8] tracking-wider">
                  Preview Theme
                </span>
                <span className="text-sm sm:text-base font-bold text-white">
                  {activeFinishObj.label}
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                {FINISHES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFinish(f.id)}
                    className={`w-8 h-8 rounded-full ${f.dotClass} border-2 transition-all active:scale-95 ${
                      selectedFinish === f.id
                        ? 'ring-2 ring-white scale-110 shadow-lg'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Select ${f.label} theme`}
                  />
                ))}
              </div>

              <p className="text-sm sm:text-[15px] text-[#cbd5e1] leading-relaxed">
                {activeFinishObj.description}
              </p>
            </div>

            {/* 4 Screen Inspector Cards (1-col on mobile, 2x2 grid on tablet portrait, 1-col stack on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
              {views.map((v) => {
                const isSelected = activeScreenIndex === v.index;
                return (
                  <button
                    key={v.index}
                    onClick={() => setActiveScreenIndex(v.index)}
                    className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 sm:gap-4 ${
                      isSelected
                        ? `${v.activeColor} shadow-[0_12px_35px_rgba(0,0,0,0.5)]`
                        : 'bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl ${v.iconBg} flex items-center justify-center shrink-0`}
                      >
                        {v.icon}
                      </div>
                      <div>
                        <div className="text-base sm:text-[17px] font-bold text-white">{v.title}</div>
                        <div className="text-sm sm:text-[15px] text-[#cbd5e1] mt-1 leading-relaxed">
                          {v.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isSelected ? 'text-white translate-x-0.5' : 'text-[#64748b]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
