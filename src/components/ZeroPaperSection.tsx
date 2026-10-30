import React, { useState } from 'react';
import { 
  FileX, 
  Printer, 
  BookOpen, 
  Trash2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Leaf, 
  TrendingUp, 
  Clock, 
  DollarSign 
} from 'lucide-react';

export const ZeroPaperSection: React.FC = () => {
  const [roomCount, setRoomCount] = useState<number>(35);

  // Approximate calculations
  // Average check-ins per month = roomCount * 22
  const checkInsPerMonth = Math.round(roomCount * 22);
  const paperSheetsSavedPerYear = checkInsPerMonth * 12 * 3; // 3 sheets per traditional guest (ID copy + registration form + bill copy)
  const moneySavedPerYear = Math.round((paperSheetsSavedPerYear * 0.08) + (roomCount * 45)); // Paper, toner, printer maintenance
  const hoursSavedPerYear = Math.round((checkInsPerMonth * 12 * 7) / 60); // 7 min saved per check-in

  return (
    <section id="zero-paper" className="py-24 sm:py-32 relative bg-black/60 border-t border-b border-white/10">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2997ff]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Leaf className="w-3.5 h-3.5" />
            Paperless Front-Desk Operations
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Eliminate Paperwork. <br />
            <span className="bg-gradient-to-r from-[#2997ff] via-[#64b5f6] to-[#30d158] bg-clip-text text-transparent">
              Focus on Guest Hospitality.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed">
            Replace bulky physical register books, desktop printers, toner cartridges, and loose photocopies with a streamlined mobile check-in workflow in SafeCheckinn.
          </p>
        </div>

        {/* Side-by-Side Comparison: Traditional vs SafeCheckinn */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Card 1: Traditional Check-in */}
          <div className="rounded-3xl bg-[#111116] border border-red-500/20 p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-500/10 border-b border-l border-red-500/20 rounded-bl-2xl text-[11px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5" /> Traditional Setup
            </div>

            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-[#86868b] tracking-wider">Before SafeCheckinn</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Manual Paper Workflows</h3>
              <p className="text-sm text-[#86868b] mt-1">Time-consuming, hardware-dependent, and difficult to search.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Printers &amp; Photocopier Maintenance</h4>
                  <p className="text-xs text-[#86868b] mt-0.5">
                    Front desks incur ongoing expenses for paper reams, replacement toner, and copier maintenance that slow down peak arrival queues.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Physical Register Books</h4>
                  <p className="text-xs text-[#86868b] mt-0.5">
                    Handwritten entries are often difficult to read, require physical storage space, and cannot be searched quickly during audits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                  <FileX className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Unwatermarked Document Copies</h4>
                  <p className="text-xs text-[#86868b] mt-0.5">
                    Printed copies of guest identity documents stored in physical trays lack verification watermarks and are difficult to secure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: The SafeCheckinn Way */}
          <div className="rounded-3xl bg-gradient-to-br from-[#121824] via-[#0d1017] to-[#0a0c10] border border-[#2997ff]/40 p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-[#2997ff]/10">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#2997ff]/20 border-b border-l border-[#2997ff]/30 rounded-bl-2xl text-[11px] font-bold text-[#2997ff] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ffd60a]" /> SafeCheckinn Workflow
            </div>

            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-[#2997ff] tracking-wider">With SafeCheckinn</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Digital Check-in Management</h3>
              <p className="text-sm text-[#86868b] mt-1">Built for hotel administrators and receptionists on iOS and Android.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#2997ff]/5 border border-[#2997ff]/20">
                <div className="w-8 h-8 rounded-xl bg-[#2997ff]/20 text-[#2997ff] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Mobile Identity Document Capture</h4>
                  <p className="text-xs text-[#86868b] mt-0.5">
                    Capture front and back sides of guest identity documents directly from your smartphone camera without external scanners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#2997ff]/5 border border-[#2997ff]/20">
                <div className="w-8 h-8 rounded-xl bg-[#30d158]/20 text-[#30d158] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Streamlined Room Assignment</h4>
                  <p className="text-xs text-[#86868b] mt-0.5">
                    Select available rooms, record guest counts, and set check-out dates in a structured digital check-in record.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#2997ff]/5 border border-[#2997ff]/20">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Automatic Verification Watermarking</h4>
                  <p className="text-xs text-[#86868b] mt-0.5">
                    Every captured identity document is automatically stamped with a verification watermark to help prevent unauthorized reuse.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Savings Calculator */}
        <div className="rounded-3xl bg-gradient-to-b from-[#14141a] to-[#0a0a0d] border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#30d158] flex items-center justify-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Operational Efficiency Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Estimate Your Property Savings with SafeCheckinn
            </h3>
            <p className="text-sm text-[#86868b] mt-1">
              Adjust your room count to estimate annual reductions in paper usage and front-desk administration time.
            </p>
          </div>

          {/* Slider */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="flex items-center justify-between text-sm font-semibold mb-2">
              <span className="text-[#86868b]">Rooms / Keys:</span>
              <span className="text-xl font-bold text-[#2997ff]">{roomCount} Rooms</span>
            </div>
            <input
              type="range"
              min="5"
              max="250"
              step="5"
              value={roomCount}
              onChange={(e) => setRoomCount(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#2997ff]"
            />
            <div className="flex justify-between text-[11px] text-[#86868b] mt-1">
              <span>Boutique B&B (5 rooms)</span>
              <span>Resort (250 rooms)</span>
            </div>
          </div>

          {/* Result Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#30d158] flex items-center justify-center mx-auto mb-2">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-white tracking-tight">
                {paperSheetsSavedPerYear.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-[#86868b] mt-1">Paper Sheets Saved / Year</div>
              <div className="text-[10px] text-emerald-400 mt-1">~{Math.round(paperSheetsSavedPerYear / 500)} full paper reams</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-[#2997ff]/10 text-[#2997ff] flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-[#2997ff] tracking-tight">
                ${moneySavedPerYear.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-[#86868b] mt-1">Annual Cost Reduction</div>
              <div className="text-[10px] text-[#2997ff] mt-1">Printers, cartridges & paper</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-white tracking-tight">
                {hoursSavedPerYear.toLocaleString()} hrs
              </div>
              <div className="text-xs font-semibold text-[#86868b] mt-1">Front Desk Hours Reclaimed</div>
              <div className="text-[10px] text-purple-300 mt-1">Faster guest turnaround</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
