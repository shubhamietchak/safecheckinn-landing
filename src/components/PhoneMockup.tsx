import React, { useState } from 'react';
import {
  ShieldCheck,
  BarChart3,
  Hotel,
  FilePlus2,
  ChevronRight,
} from 'lucide-react';
import { SafeCheckinnDeviceScreen, SafeCheckinnScreenType } from './SafeCheckinnDeviceScreen';

export type CheckinnFinish = 'sapphire' | 'obsidian' | 'ivory' | 'indigo';

interface PhoneMockupProps {
  finish?: CheckinnFinish;
  activeScreenIndex?: number;
  onScreenIndexChange?: (index: number) => void;
  showControls?: boolean;
}

const FINISH_CONFIGS: Record<
  CheckinnFinish,
  {
    name: string;
    glowColor: string;
  }
> = {
  sapphire: {
    name: 'Midnight Sapphire',
    glowColor: 'rgba(56, 189, 248, 0.28)',
  },
  obsidian: {
    name: 'Obsidian Black',
    glowColor: 'rgba(255, 255, 255, 0.14)',
  },
  ivory: {
    name: 'Warm Champagne',
    glowColor: 'rgba(245, 208, 138, 0.22)',
  },
  indigo: {
    name: 'Royal Indigo',
    glowColor: 'rgba(129, 140, 248, 0.28)',
  },
};

export const SCREEN_ITEMS: {
  id: number;
  title: string;
  subtitle: string;
  screenType: SafeCheckinnScreenType;
  icon: React.ReactNode;
  tag: string;
}[] = [
  {
    id: 0,
    title: 'Create Check-in',
    subtitle: 'Unified Check-in Registration Form',
    screenType: 'create',
    icon: <FilePlus2 className="w-3.5 h-3.5" />,
    tag: 'View 01 • Create Check-in',
  },
  {
    id: 1,
    title: 'Room Selection',
    subtitle: 'Available & Occupied Room Modal',
    screenType: 'rooms',
    icon: <Hotel className="w-3.5 h-3.5" />,
    tag: 'View 02 • Room Selection Modal',
  },
  {
    id: 2,
    title: 'Watermarked ID',
    subtitle: 'Automatic Document Watermarking',
    screenType: 'watermark',
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    tag: 'View 03 • Watermarked Guest ID',
  },
  {
    id: 3,
    title: 'Check-in Insights',
    subtitle: 'Operational Metrics & Daily Trends',
    screenType: 'insights',
    icon: <BarChart3 className="w-3.5 h-3.5" />,
    tag: 'View 04 • Check-in Insights',
  },
];

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  finish = 'sapphire',
  activeScreenIndex = 0,
  onScreenIndexChange,
  showControls = true,
}) => {
  const [internalIndex, setInternalIndex] = useState(activeScreenIndex);

  const currentIndex = onScreenIndexChange ? activeScreenIndex : internalIndex;

  const handleIndexChange = (index: number) => {
    if (onScreenIndexChange) {
      onScreenIndexChange(index);
    } else {
      setInternalIndex(index);
    }
  };

  const currentFinish = FINISH_CONFIGS[finish];
  const activeScreen = SCREEN_ITEMS[currentIndex] || SCREEN_ITEMS[0];

  return (
    <div className="relative mx-auto flex flex-col items-center w-full">
      {/* Top Controls: 4 Screen Switcher Pills (2x2 Grid on Mobile, Pill Bar on Tablet/Desktop) */}
      {showControls && (
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full luxury-card mb-6 sm:mb-8 z-20 w-full max-w-[360px] sm:max-w-none sm:w-auto">
          {SCREEN_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleIndexChange(idx)}
              className={`flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-1.5 rounded-xl sm:rounded-full text-xs sm:text-[13px] font-bold transition-all ${
                currentIndex === idx
                  ? 'bg-white text-black shadow-md'
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              {item.icon}
              <span className="truncate">{item.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Retina Device Stage with 3D Pop-Out Cards */}
      <div className="relative px-2 sm:px-6 flex justify-center w-full">
        <div
          className="w-[260px] sm:w-[300px] md:w-[310px] h-[520px] sm:h-[580px] md:h-[595px] transition-all duration-700"
          style={{
            filter: `drop-shadow(0 0 45px ${currentFinish.glowColor})`,
          }}
        >
          <SafeCheckinnDeviceScreen screen={activeScreen.screenType} />
        </div>
      </div>

      {/* Bottom Interactive Caption Pill */}
      <div className="mt-6 w-full max-w-[340px] sm:max-w-[360px] p-3.5 rounded-2xl luxury-card flex items-center justify-between gap-2 text-xs sm:text-sm">
        <div className="text-left min-w-0">
          <div className="text-[11px] text-[#38bdf8] font-bold uppercase tracking-wider truncate">
            {activeScreen.tag}
          </div>
          <div className="text-white font-bold mt-0.5 truncate">{activeScreen.subtitle}</div>
        </div>
        <button
          onClick={() => handleIndexChange((currentIndex + 1) % SCREEN_ITEMS.length)}
          aria-label="View next screen"
          className="px-3.5 py-2 rounded-xl bg-white text-black hover:bg-slate-200 text-xs font-bold flex items-center gap-1 shrink-0 transition-colors active:scale-95"
        >
          <span>Next View</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
