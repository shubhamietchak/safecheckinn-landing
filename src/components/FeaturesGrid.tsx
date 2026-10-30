import React from 'react';
import { 
  Scan, 
  QrCode, 
  FileSpreadsheet, 
  Lock, 
  Users, 
  WifiOff, 
  Sparkles, 
  Smartphone, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 relative bg-black">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2997ff]/5 blur-[160px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" /> Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Purpose-Built for <br />
            <span className="bg-gradient-to-r from-white via-[#2997ff] to-[#9055ff] bg-clip-text text-transparent">
              Hospitality Operations.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868b]">
            SafeCheckinn turns standard iOS and Android devices into mobile front-desk stations for guest registration, room assignment, and identity document management.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          
          {/* Bento 1: Large Card (2 Cols on lg) - ID Document Capture */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-[#12131a] to-[#0a0a0f] border border-white/10 p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group hover:border-[#2997ff]/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2997ff]/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#2997ff]/20 text-[#2997ff] flex items-center justify-center mb-6">
                <Scan className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-[#2997ff] tracking-wider">Mobile Document Capture</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Guest Identity Document Collection
              </h3>
              <p className="text-sm sm:text-base text-[#86868b] mt-3 max-w-lg leading-relaxed">
                Capture front and back views of official guest identity documents directly from your smartphone camera and attach them to structured digital check-in records.
              </p>
            </div>

            {/* Visual preview strip */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90">
                Aadhaar Card
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90">
                Passport
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90">
                Driving License
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90">
                Voter ID
              </span>
            </div>
          </div>

          {/* Bento 2: Express Check-in */}
          <div className="rounded-3xl bg-gradient-to-br from-[#14141c] to-[#0b0c10] border border-white/10 p-8 relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-[#30d158] flex items-center justify-center mb-6">
                <QrCode className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-[#30d158] tracking-wider">Front-Desk Workflow</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Digital Check-in
              </h3>
              <p className="text-sm text-[#86868b] mt-3 leading-relaxed">
                Register guests with SafeCheckinn by selecting guest count, assigning available rooms, setting check-out dates, and capturing identity documents in one workflow.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-[#30d158] flex items-center justify-center font-bold text-xs">
                ID
              </div>
              <div className="text-xs">
                <div className="text-white font-semibold">Faster Reception Desk</div>
                <div className="text-[#86868b]">Streamlined arrival experience</div>
              </div>
            </div>
          </div>

          {/* Bento 3: Digital Record Management */}
          <div className="rounded-3xl bg-gradient-to-br from-[#15151e] to-[#0c0d12] border border-white/10 p-8 relative overflow-hidden flex flex-col justify-between group hover:border-amber-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-6">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">Record Management</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Searchable Check-in History
              </h3>
              <p className="text-sm text-[#86868b] mt-3 leading-relaxed">
                Maintain organized digital guest logs with timestamps, room assignments, and checkout statuses without sorting through handwritten register binders.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-amber-300 bg-amber-400/10 px-3 py-2 rounded-xl border border-amber-400/20">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Timestamped Check-in Logs</span>
            </div>
          </div>

          {/* Bento 4: Document Watermarking */}
          <div className="rounded-3xl bg-gradient-to-br from-[#13151f] to-[#0a0c14] border border-white/10 p-8 relative overflow-hidden flex flex-col justify-between group hover:border-[#2997ff]/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2997ff]/20 text-[#2997ff] flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-[#2997ff] tracking-wider">Document Security</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Watermarked Guest IDs
              </h3>
              <p className="text-sm text-[#86868b] mt-3 leading-relaxed">
                Unlike unwatermarked paper copies left on a front desk, SafeCheckinn automatically stamps captured ID documents with a verification watermark.
              </p>
            </div>

            <div className="mt-6 text-xs text-[#86868b] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#30d158]"></div>
              <span>Protected Guest Identity Records</span>
            </div>
          </div>

          {/* Bento 5: Insights */}
          <div className="rounded-3xl bg-gradient-to-br from-[#16121f] to-[#0d0914] border border-white/10 p-8 relative overflow-hidden flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                <WifiOff className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">Operational Visibility</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Check-in Insights
              </h3>
              <p className="text-sm text-[#86868b] mt-3 leading-relaxed">
                Track active stays, room occupancy percentages, and daily check-in activity trends directly from the SafeCheckinn mobile dashboard.
              </p>
            </div>

            <div className="mt-6 text-xs text-purple-300 bg-purple-500/10 px-3 py-2 rounded-xl border border-purple-500/20">
              <span>Real-time occupancy &amp; activity metrics</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
