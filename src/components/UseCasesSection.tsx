import React from 'react';
import { 
  Zap, 
  FileX, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  Hotel, 
  Lock 
} from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  return (
    <section id="usecases" className="py-20 sm:py-28 relative bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#38bdf8] uppercase tracking-wider block mb-2">
            SafeCheckinn Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for Modern Front Desks.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#86868b]">
            Streamline guest registration, room assignments, identity document watermarking, and operational reporting with SafeCheckinn.
          </p>
        </div>

        {/* Concise 4-Pillar Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Use Case 1: Digital Check-in */}
          <div className="rounded-3xl bg-gradient-to-b from-[#111522] to-[#090b10] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#38bdf8]/40 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase font-bold text-[#38bdf8] tracking-wider">
                1. Digital Check-in
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Fast Front-Desk Room Assignment
              </h3>
              <p className="text-sm text-[#86868b] mt-2.5 leading-relaxed">
                Register arriving guests, assign single or multi-room bookings, and track active stays or completed check-outs from one central workflow.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-[#38bdf8]" /> Live Room Inventory
              </span>
              <span className="text-[#34d399] font-semibold">Streamlined Registration</span>
            </div>
          </div>

          {/* Use Case 2: No Printer or Paperwork */}
          <div className="rounded-3xl bg-gradient-to-b from-[#101915] to-[#080d0b] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-[#34d399] flex items-center justify-center mb-5">
                <FileX className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase font-bold text-[#34d399] tracking-wider">
                2. Paperless Front-Desk Operations
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                No Photocopiers. No Physical Registers.
              </h3>
              <p className="text-sm text-[#86868b] mt-2.5 leading-relaxed">
                Reduce front-desk spending on desktop printers, toner cartridges, photocopiers, and physical register books by capturing guest identity documents digitally.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#34d399]" /> Digital Check-in Records
              </span>
              <span className="text-[#34d399] font-semibold">No Dedicated Scanners</span>
            </div>
          </div>

          {/* Use Case 3: Check-in Insights */}
          <div id="insights" className="rounded-3xl bg-gradient-to-b from-[#161324] to-[#0a0912] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-purple-500/40 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase font-bold text-purple-400 tracking-wider">
                3. Check-in Insights
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Daily Activity &amp; Occupancy Overview
              </h3>
              <p className="text-sm text-[#86868b] mt-2.5 leading-relaxed">
                Monitor total check-ins, room utilization, active stays, and completed check-outs across daily, weekly, and monthly periods.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-white/80">
              <span>Occupancy Overview &amp; Trends</span>
              <span className="text-purple-400 font-semibold">Real-Time Status Tracking</span>
            </div>
          </div>

          {/* Use Case 4: Watermarked Guest IDs */}
          <div id="security" className="rounded-3xl bg-gradient-to-b from-[#151821] to-[#090b10] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#38bdf8]/40 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase font-bold text-[#38bdf8] tracking-wider">
                4. Watermarked Guest IDs
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Protected Guest Identity Documents
              </h3>
              <p className="text-sm text-[#86868b] mt-2.5 leading-relaxed">
                Capture Aadhaar, Passport, Driving License, or Voter ID documents using your mobile device. SafeCheckinn automatically applies a verification watermark to help prevent unauthorized reuse.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#38bdf8]" /> Protected Document Records
              </span>
              <span className="text-[#38bdf8] font-semibold">Automatic Verification Stamp</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
