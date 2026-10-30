import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  Scan, 
  Leaf, 
  Lock,
  ArrowRight
} from 'lucide-react';

interface HighlightItem {
  id: number;
  tag: string;
  tagColor: string;
  headline: string;
  subtext: string;
  icon: React.ReactNode;
  bgGradient: string;
  borderColor: string;
  badge: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 0,
    tag: 'FRONT-DESK WORKFLOW',
    tagColor: 'text-[#2997ff]',
    headline: 'Streamlined Digital Check-in. Fast guest registration from arrival to room key.',
    subtext:
      'Receptionists select guest counts, assign available rooms, and record check-out dates from a single mobile screen—replacing slow handwritten register books.',
    icon: <Zap className="w-6 h-6 text-[#2997ff]" />,
    bgGradient: 'from-[#0b1324] via-[#070b14] to-[#04060a]',
    borderColor: 'border-[#2997ff]/30',
    badge: 'Digital Registration',
  },
  {
    id: 1,
    tag: 'DOCUMENT CAPTURE',
    tagColor: 'text-amber-400',
    headline: 'Mobile ID Capture. Collect guest identity documents with your smartphone.',
    subtext:
      'Capture front and back sides of Aadhaar cards, passports, driving licenses, and voter IDs directly within the check-in workflow without flatbed scanners.',
    icon: <Scan className="w-6 h-6 text-amber-400" />,
    bgGradient: 'from-[#1a140a] via-[#100c06] to-[#060402]',
    borderColor: 'border-amber-400/30',
    badge: 'Multi-Document Support',
  },
  {
    id: 2,
    tag: 'PAPERLESS OPERATIONS',
    tagColor: 'text-[#30d158]',
    headline: 'Zero Paperwork. Eliminate printers, photocopiers, and physical registers.',
    subtext:
      'Reduce ongoing front-desk expenses on paper reams, toner cartridges, and copier maintenance while keeping every check-in record organized and searchable.',
    icon: <Leaf className="w-6 h-6 text-[#30d158]" />,
    bgGradient: 'from-[#0a1810] via-[#060f0a] to-[#020503]',
    borderColor: 'border-emerald-500/30',
    badge: 'Paperless Front Desk',
  },
  {
    id: 3,
    tag: 'IDENTITY PROTECTION',
    tagColor: 'text-purple-400',
    headline: 'Watermarked Guest IDs. Built-in verification stamps on every document.',
    subtext:
      'Avoid leaving unwatermarked identity document copies exposed at the reception counter. SafeCheckinn automatically applies a verification watermark upon capture.',
    icon: <Lock className="w-6 h-6 text-purple-400" />,
    bgGradient: 'from-[#140c1e] via-[#0c0714] to-[#050308]',
    borderColor: 'border-purple-500/30',
    badge: 'Watermarked Guest IDs',
  },
];

export const HighlightsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeItem = HIGHLIGHTS[currentIndex];

  return (
    <section id="highlights" className="py-24 sm:py-32 relative bg-black overflow-hidden border-t border-white/10">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2997ff]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header in Apple Keynote style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
              SafeCheckinn Platform Highlights
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Key Capabilities.
            </h2>
          </div>

          {/* Slide Controls & Play/Pause */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/15 text-white transition-all active:scale-95"
              aria-label={isPlaying ? 'Pause auto-play' : 'Play auto-play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentIndex((prev) => (prev - 1 + HIGHLIGHTS.length) % HIGHLIGHTS.length);
                }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/15 text-white transition-all active:scale-95"
                aria-label="Previous highlight"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
                }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/15 text-white transition-all active:scale-95"
                aria-label="Next highlight"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Story Card (Apple Launch Style) */}
        <div
          className={`w-full min-h-[460px] sm:min-h-[500px] rounded-[36px] bg-gradient-to-br ${activeItem.bgGradient} border ${activeItem.borderColor} p-8 sm:p-14 relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-700`}
        >
          {/* Subtle noise/grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          {/* Top Row: Tag & Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md">
                {activeItem.icon}
              </div>
              <span className={`text-xs uppercase font-extrabold tracking-widest ${activeItem.tagColor}`}>
                {activeItem.tag}
              </span>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white backdrop-blur-md">
              {activeItem.badge}
            </span>
          </div>

          {/* Middle: Big Headline & Body */}
          <div className="relative z-10 my-8 sm:my-10 max-w-3xl space-y-4">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
              {activeItem.headline}
            </h3>
            <p className="text-base sm:text-lg text-[#86868b] leading-relaxed max-w-2xl">
              {activeItem.subtext}
            </p>
          </div>

          {/* Bottom Progress Bar Indicators */}
          <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              {HIGHLIGHTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className="flex-1 py-2 text-left group"
                >
                  <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 rounded-full ${
                        idx === currentIndex
                          ? 'w-full bg-[#2997ff]'
                          : 'w-0 group-hover:w-full group-hover:bg-white/40'
                      }`}
                    ></div>
                  </div>
                </button>
              ))}
            </div>

            <div className="text-xs font-semibold text-white/60">
              0{currentIndex + 1} / 0{HIGHLIGHTS.length}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
