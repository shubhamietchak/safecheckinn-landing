import React, { useState, useEffect, useRef } from 'react';
import {
  Smartphone,
  Apple,
  Play,
  ShieldCheck,
  FileText,
  Trash2,
  ArrowRight,
  X,
  Sparkles,
} from 'lucide-react';

interface AppStoreDownloadProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDeletion: () => void;
}

export const AppStoreDownload: React.FC<AppStoreDownloadProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenDeletion,
}) => {
  const [comingSoonPlatform, setComingSoonPlatform] = useState<'iOS' | 'Android' | null>(null);
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="download"
      ref={sectionRef}
      className="py-20 sm:py-28 relative bg-[#03050a] border-t border-white/[0.06] overflow-hidden scroll-mt-20"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#2563eb]/15 to-[#38bdf8]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        {/* Main Download Card */}
        <div
          className={`rounded-[32px] luxury-card p-8 sm:p-12 text-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/25 text-[#38bdf8] text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] mb-4">
            <Smartphone className="w-4 h-4" /> Mobile Application
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-black text-white tracking-[-0.04em] leading-[1.08]">
            Modernize Your Front Desk with SafeCheckinn
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-[19px] text-[#cbd5e1] max-w-2xl mx-auto leading-[1.6]">
            Download SafeCheckinn on iOS or Android to manage room assignments, capture watermarked guest identity documents, and view check-in insights without paper registers.
          </p>

          {/* App Store & Google Play Store Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setComingSoonPlatform('iOS')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black hover:bg-slate-200 transition-all flex items-center justify-center gap-3.5 shadow-[0_12px_35px_rgba(255,255,255,0.18)] active:scale-95"
            >
              <Apple className="w-7 h-7 fill-current shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-[11px] uppercase font-bold text-black/65">
                  Download on the
                </div>
                <div className="text-lg font-extrabold text-black">App Store</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setComingSoonPlatform('Android')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white transition-all flex items-center justify-center gap-3.5 shadow-xl active:scale-95"
            >
              <Play className="w-7 h-7 fill-[#34d399] text-[#34d399] shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-[11px] uppercase font-bold text-white/65">
                  Get it on
                </div>
                <div className="text-lg font-extrabold text-white">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Dedicated Legal & Trust Popover Cards (Privacy Policy, Terms of Service, Account Deletion) */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-5 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Privacy Policy Popover Trigger */}
          <button
            onClick={onOpenPrivacy}
            className="p-6 sm:p-7 rounded-2xl luxury-card hover:border-[#34d399]/40 text-left transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-[#34d399] flex items-center justify-center mb-3.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#34d399] transition-colors">
                Privacy Policy
              </h3>
              <p className="text-sm sm:text-[15px] text-[#cbd5e1] mt-1.5 leading-relaxed">
                Learn how SafeCheckinn handles guest identity documents, camera permissions, and check-in records.
              </p>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#34d399]">
              <span>View Privacy Policy</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          {/* Terms of Service Popover Trigger */}
          <button
            onClick={onOpenTerms}
            className="p-6 sm:p-7 rounded-2xl luxury-card hover:border-[#38bdf8]/40 text-left transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/15 text-[#38bdf8] flex items-center justify-center mb-3.5">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                Terms of Service
              </h3>
              <p className="text-sm sm:text-[15px] text-[#cbd5e1] mt-1.5 leading-relaxed">
                Review platform usage guidelines, property administrator responsibilities, and service terms.
              </p>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#38bdf8]">
              <span>View Terms of Service</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          {/* Account Deletion Popover Trigger */}
          <button
            onClick={onOpenDeletion}
            className="p-6 sm:p-7 rounded-2xl luxury-card hover:border-rose-500/40 text-left transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center mb-3.5">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                Account Deletion
              </h3>
              <p className="text-sm sm:text-[15px] text-[#cbd5e1] mt-1.5 leading-relaxed">
                Delete your account directly in the app via <strong className="text-white">Open the App &rarr; Profile &rarr; Delete Account</strong>.
              </p>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400">
              <span>View Deletion Instructions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>

      {/* Apps Coming Soon Popup Modal */}
      {comingSoonPlatform && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
          onClick={() => setComingSoonPlatform(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-modal-title"
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-[#0d1017] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden text-center p-7 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setComingSoonPlatform(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#94a3b8] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* App Icon & Badge */}
            <div className="relative mx-auto w-16 h-16 mb-5 flex items-center justify-center">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#38bdf8]/40 to-[#34d399]/40 blur-lg" />
              <img
                src="/assets/app_icon_512x512.png"
                alt="SafeCheckinn logo"
                className="relative w-16 h-16 rounded-2xl object-cover border border-white/20 shadow-xl"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{comingSoonPlatform === 'iOS' ? 'Apple App Store' : 'Google Play Store'}</span>
            </div>

            <h3
              id="coming-soon-modal-title"
              className="text-2xl sm:text-3xl font-black text-white tracking-tight"
            >
              Apps Coming Soon
            </h3>

            <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              The <strong className="text-white">SafeCheckinn</strong> mobile app for{' '}
              <strong className="text-white">
                {comingSoonPlatform === 'iOS' ? 'iOS (App Store)' : 'Android (Google Play)'}
              </strong>{' '}
              is launching soon. Stay tuned for paperless guest check-ins, room selection, and watermarked ID verification.
            </p>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => setComingSoonPlatform(null)}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(0,113,227,0.4)] transition-all active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
