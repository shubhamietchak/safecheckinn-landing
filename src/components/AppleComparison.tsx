import React from 'react';
import { Check, X, Sparkles, Smartphone, Printer, Shield, ArrowRight } from 'lucide-react';

interface AppleComparisonProps {
  onOpenDownload: () => void;
}

export const AppleComparison: React.FC<AppleComparisonProps> = ({ onOpenDownload }) => {
  return (
    <section id="compare" className="py-24 sm:py-32 relative bg-black border-t border-white/10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563eb]/10 blur-[160px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header in Apple Keynote style */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
            Side-by-Side Spec Comparison
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Compare.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#86868b]">
            Which check-in system belongs in your hotel lobby?
          </p>
        </div>

        {/* Apple Comparison Table Container */}
        <div className="rounded-3xl bg-[#090b10] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Top Column Header */}
          <div className="grid grid-cols-2 p-6 sm:p-10 border-b border-white/10 bg-white/[0.02]">
            
            {/* Col 1: Traditional Paper */}
            <div className="pr-4 border-r border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Traditional Paper &amp; Photocopiers</h3>
              <p className="text-xs sm:text-sm text-[#86868b] mt-1">Physical register books, desktop scanners, and toner refills.</p>
              <div className="mt-4 text-xs font-semibold text-red-400">Manual Overhead &amp; Paper Storage</div>
            </div>

            {/* Col 2: SafeCheckinn */}
            <div className="pl-4 sm:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">SafeCheckinn App</h3>
                <span className="px-2 py-0.5 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] text-[10px] font-bold border border-[#38bdf8]/20">
                  DIGITAL
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#86868b] mt-1">Streamlined digital check-in workflow on iOS &amp; Android.</p>
              <div className="mt-4 text-xs font-semibold text-[#34d399] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Paperless &amp; Watermarked Records
              </div>
            </div>

          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-white/5 text-xs sm:text-sm">
            
            {/* Row 1: Check-in Workflow */}
            <div className="grid grid-cols-2 p-5 sm:p-6 hover:bg-white/[0.01] transition-colors">
              <div className="pr-4 border-r border-white/10">
                <div className="text-[11px] uppercase font-semibold text-[#86868b]">Check-in Process</div>
                <div className="text-base sm:text-lg font-bold text-white/70 mt-1">Manual Entry &amp; Copying</div>
                <div className="text-xs text-[#86868b] mt-0.5">Handwritten ledger entries and physical ID photocopying</div>
              </div>
              <div className="pl-4 sm:pl-8">
                <div className="text-[11px] uppercase font-semibold text-[#38bdf8]">Check-in Process</div>
                <div className="text-base sm:text-lg font-bold text-[#34d399] mt-1">Guided Mobile Workflow</div>
                <div className="text-xs text-[#86868b] mt-0.5">Camera ID capture and instant room selection</div>
              </div>
            </div>

            {/* Row 2: Hardware Required */}
            <div className="grid grid-cols-2 p-5 sm:p-6 hover:bg-white/[0.01] transition-colors">
              <div className="pr-4 border-r border-white/10">
                <div className="text-[11px] uppercase font-semibold text-[#86868b]">Front-Desk Equipment</div>
                <div className="text-base sm:text-lg font-bold text-white/70 mt-1">Printers, Toners &amp; Binders</div>
                <div className="text-xs text-[#86868b] mt-0.5">Dedicated scanner, photocopier, and physical storage cabinets</div>
              </div>
              <div className="pl-4 sm:pl-8">
                <div className="text-[11px] uppercase font-semibold text-[#38bdf8]">Front-Desk Equipment</div>
                <div className="text-base sm:text-lg font-bold text-[#34d399] mt-1">Existing Smartphone or Tablet</div>
                <div className="text-xs text-[#86868b] mt-0.5">Runs directly on your front-desk team's mobile device</div>
              </div>
            </div>

            {/* Row 3: Paper Consumption */}
            <div className="grid grid-cols-2 p-5 sm:p-6 hover:bg-white/[0.01] transition-colors">
              <div className="pr-4 border-r border-white/10">
                <div className="text-[11px] uppercase font-semibold text-[#86868b]">Record Storage</div>
                <div className="text-base sm:text-lg font-bold text-red-400 mt-1">Physical Register Books</div>
                <div className="text-xs text-[#86868b] mt-0.5">Continuous paper consumption and manual archive filing</div>
              </div>
              <div className="pl-4 sm:pl-8">
                <div className="text-[11px] uppercase font-semibold text-[#38bdf8]">Record Storage</div>
                <div className="text-base sm:text-lg font-bold text-[#34d399] mt-1">Digital Check-in Records</div>
                <div className="text-xs text-[#86868b] mt-0.5">Searchable digital guest history with zero paper forms</div>
              </div>
            </div>

            {/* Row 4: ID Security & Watermark */}
            <div className="grid grid-cols-2 p-5 sm:p-6 hover:bg-white/[0.01] transition-colors">
              <div className="pr-4 border-r border-white/10">
                <div className="text-[11px] uppercase font-semibold text-[#86868b]">Identity Document Protection</div>
                <div className="text-base sm:text-lg font-bold text-white/70 mt-1">Unwatermarked Photocopies</div>
                <div className="text-xs text-[#86868b] mt-0.5">Exposed paper copies vulnerable to unauthorized reuse</div>
              </div>
              <div className="pl-4 sm:pl-8">
                <div className="text-[11px] uppercase font-semibold text-[#38bdf8]">Identity Document Protection</div>
                <div className="text-base sm:text-lg font-bold text-[#38bdf8] mt-1">Watermarked Guest IDs</div>
                <div className="text-xs text-[#86868b] mt-0.5">Automatic timestamped verification watermark applied on capture</div>
              </div>
            </div>

            {/* Row 5: Operational Insights */}
            <div className="grid grid-cols-2 p-5 sm:p-6 hover:bg-white/[0.01] transition-colors">
              <div className="pr-4 border-r border-white/10">
                <div className="text-[11px] uppercase font-semibold text-[#86868b]">Occupancy &amp; Activity Tracking</div>
                <div className="text-base sm:text-lg font-bold text-white/70 mt-1">Manual Tallying</div>
                <div className="text-xs text-[#86868b] mt-0.5">Staff counts active rooms and check-outs manually</div>
              </div>
              <div className="pl-4 sm:pl-8">
                <div className="text-[11px] uppercase font-semibold text-[#38bdf8]">Occupancy &amp; Activity Tracking</div>
                <div className="text-base sm:text-lg font-bold text-[#34d399] mt-1">Real-Time Check-in Insights</div>
                <div className="text-xs text-[#86868b] mt-0.5">Live occupancy overview and daily check-in activity trends</div>
              </div>
            </div>

          </div>

          {/* Bottom Call to Action */}
          <div className="p-6 sm:p-8 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-base font-bold text-white">Modernize your front-desk workflow with SafeCheckinn.</div>
              <div className="text-xs text-[#86868b]">Available on the Apple App Store and Google Play.</div>
            </div>
            <button
              onClick={onOpenDownload}
              className="px-6 py-3 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#2563eb]/30 transition-all active:scale-95"
            >
              <span>Download SafeCheckinn</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
