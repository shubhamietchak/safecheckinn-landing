import React from 'react';
import { ShieldCheck, FileText, Trash2, Smartphone } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: 'home' | 'deletion' | 'terms' | 'privacy') => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView, onOpenDownload }) => {
  const handleViewChange = (view: 'home' | 'deletion' | 'terms' | 'privacy', anchor?: string) => {
    setCurrentView(view);
    if (view === 'home' && anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#03050a] text-[#86868b] text-sm py-14 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/app_icon_512x512.png"
                alt="SafeCheckinn logo"
                className="w-8 h-8 rounded-lg object-cover border border-white/15"
              />
              <span className="font-bold text-white text-lg tracking-tight">
                Safe<span className="text-[#38bdf8]">Checkinn</span>
              </span>
            </div>
            <p className="text-sm text-[#cbd5e1] max-w-md leading-relaxed">
              Digital hotel check-in, watermarked guest ID verification, and real-time operational insights—built for paperless hospitality teams.
            </p>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <button
              onClick={() => handleViewChange('privacy')}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-[#34d399]" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => handleViewChange('terms')}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#38bdf8]" />
              <span>Terms of Service</span>
            </button>
            <button
              onClick={() => handleViewChange('deletion')}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-red-300 font-medium flex items-center gap-2 transition-colors"
            >
              <Trash2 className="w-4 h-4 text-red-400" />
              <span>Account Deletion</span>
            </button>
            <button
              onClick={onOpenDownload}
              className="px-4 py-2.5 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold flex items-center gap-2 transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#94a3b8] text-center sm:text-left">
          <div>Copyright © {new Date().getFullYear()} SafeCheckinn. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <button onClick={() => handleViewChange('home', 'usp-nav')} className="hover:text-white">
              Key Capabilities
            </button>
            <span className="hidden sm:inline">•</span>
            <button onClick={() => handleViewChange('home', 'closer-look')} className="hover:text-white">
              Product Tour
            </button>
            <span className="hidden sm:inline">•</span>
            <button onClick={() => handleViewChange('privacy')} className="hover:text-white">
              Privacy Policy
            </button>
            <span className="hidden sm:inline">•</span>
            <button onClick={() => handleViewChange('terms')} className="hover:text-white">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
