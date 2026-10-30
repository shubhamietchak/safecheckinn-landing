import React from 'react';
import { ShieldCheck, Lock, EyeOff, UserCheck, X } from 'lucide-react';

interface PrivacyProps {
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#0d1017] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden text-[#f5f5f7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Popover Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-[#34d399] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 id="privacy-policy-title" className="text-lg font-extrabold text-white tracking-tight">
                Privacy Policy
              </h2>
              <p className="text-xs text-[#86868b]">
                SafeCheckinn Data Protection &amp; Guest Identity Security
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#86868b] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Privacy Policy dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Popover Content */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto space-y-6 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
          {/* Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <EyeOff className="w-4 h-4 text-[#38bdf8] mb-1.5" />
              <h3 className="text-sm font-bold text-white">No Data Monetization</h3>
              <p className="text-xs sm:text-[13px] text-[#94a3b8] mt-1">
                We do not sell, rent, or share guest identity documents or check-in records with advertisers.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <Lock className="w-4 h-4 text-[#34d399] mb-1.5" />
              <h3 className="text-sm font-bold text-white">Watermarked Guest IDs</h3>
              <p className="text-xs sm:text-[13px] text-[#94a3b8] mt-1">
                Guest identity documents are stamped with a verification watermark upon capture.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <UserCheck className="w-4 h-4 text-purple-400 mb-1.5" />
              <h3 className="text-sm font-bold text-white">Self-Service Control</h3>
              <p className="text-xs sm:text-[13px] text-[#94a3b8] mt-1">
                Delete your account and property records anytime via <strong>Open the App &rarr; Profile &rarr; Delete Account</strong>.
              </p>
            </div>
          </div>

          <section className="space-y-2">
            <h3 className="text-lg font-bold text-white">1. Scope &amp; Purpose</h3>
            <p className="text-sm sm:text-base">
              SafeCheckinn is designed to help hotels and hospitality teams manage digital guest check-ins and identity document records securely. This Privacy Policy describes how information is collected, processed, and managed within the SafeCheckinn platform.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-bold text-white">2. Information We Collect</h3>
            <p className="text-sm sm:text-base">
              We collect property account information (property name, administrator contact details, and room inventory) along with guest check-in records entered by authorized staff (guest count, assigned room numbers, check-out dates, and watermarked guest identity document images).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-bold text-white">3. Camera Access &amp; Document Watermarking</h3>
            <p className="text-sm sm:text-base">
              SafeCheckinn requests device camera access solely to capture guest identification documents during check-in. Captured document images are automatically stamped with a verification watermark (including property context and check-in date) to help prevent unauthorized reuse.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-bold text-white">4. Account &amp; Data Deletion</h3>
            <p className="text-sm sm:text-base">
              Property administrators can permanently delete their account and all associated check-in records directly within the mobile application by navigating to <strong>Open the App &rarr; Profile &rarr; Delete Account</strong>.
            </p>
          </section>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-[#86868b]">Last Updated: October 2026</span>
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
