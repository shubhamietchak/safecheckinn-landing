import React from 'react';
import { Scale, X } from 'lucide-react';

interface TermsProps {
  onClose: () => void;
}

export const TermsAndConditions: React.FC<TermsProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-of-service-title"
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#0d1017] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden text-[#f5f5f7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Popover Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#2563eb]/20 border border-[#38bdf8]/30 text-[#38bdf8] flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 id="terms-of-service-title" className="text-lg font-extrabold text-white tracking-tight">
                Terms of Service
              </h2>
              <p className="text-xs text-[#86868b]">
                SafeCheckinn Platform Terms &amp; Hospitality Usage Agreement
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#86868b] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Terms of Service dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Popover Content */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto space-y-5 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
          <section className="space-y-1.5">
            <h3 className="text-lg font-bold text-white">1. Acceptance of Terms</h3>
            <p className="text-sm sm:text-base">
              By downloading, accessing, or using the <strong>SafeCheckinn</strong> application, you agree to comply with these Terms of Service governing digital guest check-in workflows, room assignments, and guest identity document management.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-lg font-bold text-white">2. Platform Capabilities &amp; Front-Desk Verification</h3>
            <p className="text-sm sm:text-base">
              SafeCheckinn provides digital tools for guest check-in registration, room inventory selection, and automated watermarking of guest identity documents. Property administrators and front-desk staff remain responsible for verifying physical guest identification in accordance with applicable local hospitality regulations.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-lg font-bold text-white">3. Account Administration &amp; Security</h3>
            <p className="text-sm sm:text-base">
              Properties are responsible for maintaining the confidentiality of their account credentials, managing authorized staff access, and ensuring the accuracy of check-in records entered into the platform.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-lg font-bold text-white">4. Account Termination &amp; Deletion</h3>
            <p className="text-sm sm:text-base">
              Administrators may terminate their account and permanently remove associated property records at any time directly within the application via <strong>Open the App &rarr; Profile &rarr; Delete Account</strong>.
            </p>
          </section>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-[#86868b]">Effective Date: October 2026</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
