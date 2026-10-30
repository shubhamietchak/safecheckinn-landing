import React, { useState } from 'react';
import { ShieldCheck, Lock, AlertTriangle, Check, Sparkles, Eye, ShieldAlert } from 'lucide-react';

export const WatermarkKycDeepDive: React.FC = () => {
  const [showWatermark, setShowWatermark] = useState(true);

  return (
    <section id="camera-control" className="py-24 sm:py-32 relative bg-black overflow-hidden border-t border-white/10">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Document Protection
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Guest Identity Verification. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
              Automatic Verification Watermarking.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed">
            In traditional registers, unwatermarked paper copies of guest identity documents create privacy and security risks. SafeCheckinn automatically stamps every captured document with a clear verification watermark upon capture.
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Watermark Simulator Card */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Interactive Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
              <button
                onClick={() => setShowWatermark(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  !showWatermark
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : 'text-[#86868b] hover:text-white'
                }`}
              >
                Unwatermarked Copy
              </button>
              <button
                onClick={() => setShowWatermark(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  showWatermark
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                    : 'text-[#86868b] hover:text-white'
                }`}
              >
                With SafeCheckinn Watermark
              </button>
            </div>

            {/* Document Frame */}
            <div className="relative w-full max-w-[440px] h-[260px] sm:h-[280px] rounded-3xl bg-gradient-to-br from-[#181a24] via-[#10121a] to-[#08090d] border border-white/20 p-5 shadow-2xl flex flex-col justify-between overflow-hidden group">
              
              {/* Document Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs">
                    ★
                  </div>
                  <span className="text-[11px] font-bold text-white tracking-wider uppercase">
                    GOVERNMENT OF INDIA • AADHAAR / PASSPORT
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  VERIFIED
                </span>
              </div>

              {/* Document Mockup Body */}
              <div className="grid grid-cols-3 gap-3 items-center">
                <div className="w-20 h-24 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center text-xs text-white/40">
                  GUEST PHOTO
                </div>
                <div className="col-span-2 space-y-1.5">
                  <div>
                    <div className="text-[8px] text-[#86868b] uppercase">Full Legal Name</div>
                    <div className="text-sm font-bold text-white">Alexander Wright</div>
                  </div>
                  <div>
                    <div className="text-[8px] text-[#86868b] uppercase">Masked Document ID</div>
                    <div className="text-xs font-mono text-[#38bdf8]">XXXX-XXXX-9402</div>
                  </div>
                  <div>
                    <div className="text-[8px] text-[#86868b] uppercase">Verification Scope</div>
                    <div className="text-[11px] font-semibold text-white/80">Valid for Hotel Check-in</div>
                  </div>
                </div>
              </div>

              {/* DYNAMIC WATERMARK OVERLAY */}
              {showWatermark && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none rotate-[-24deg] select-none opacity-45">
                  <div className="text-center font-black tracking-widest text-xs sm:text-sm text-[#38bdf8] border-2 border-[#38bdf8] px-4 py-2 rounded-xl backdrop-blur-[1px] whitespace-nowrap shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    SAFECHECKINN • HOTEL CHECK-IN ONLY • 25-OCT-2026
                  </div>
                  <div className="text-[9px] font-mono text-emerald-400 mt-1 tracking-wider">
                    CRYPTOGRAPHIC HASH: 8f4a-99b2-3e11
                  </div>
                </div>
              )}

              {/* Status footer inside doc */}
              <div className="flex items-center justify-between text-[10px] text-[#86868b] border-t border-white/5 pt-2">
                <span>Protected Digital Check-in Record</span>
                <span className={showWatermark ? 'text-emerald-400 font-semibold' : 'text-red-400 font-semibold'}>
                  {showWatermark ? '✓ Watermark Applied' : '⚠ Unwatermarked Copy'}
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Security Feature Points */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-[#34d399] flex items-center justify-center font-bold">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">Protective Verification Watermark</h3>
              <p className="text-xs text-[#86868b] leading-relaxed">
                SafeCheckinn applies a diagonal verification watermark across captured guest identity documents to help prevent unauthorized reuse outside the check-in context.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center font-bold">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">Front &amp; Back Document Capture</h3>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Support for Aadhaar Card, Passport, Driving License, and Voter ID with dedicated front and back image capture linked directly to the room assignment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">Organized Verification Records</h3>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Maintain structured digital check-in logs with guest counts, assigned rooms, and watermarked identity documents in one central system.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
