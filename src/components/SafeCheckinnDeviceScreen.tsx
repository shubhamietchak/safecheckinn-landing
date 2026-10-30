import React from 'react';
import {
  ArrowLeft,
  Calendar,
  ChevronDown,
  Camera,
  Check,
  Search,
  X,
  BedDouble,
  BarChart2,
  User,
  Building2,
  LogOut,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Minus,
} from 'lucide-react';

export type SafeCheckinnScreenType = 'create' | 'rooms' | 'watermark' | 'insights';

interface SafeCheckinnDeviceScreenProps {
  screen: SafeCheckinnScreenType;
  compact?: boolean;
}

/**
 * Renders the 4 authentic SafeCheckinn mobile screens with crisp Retina precision
 * and 3D floating pop-out highlight cards.
 */
export const SafeCheckinnDeviceScreen: React.FC<SafeCheckinnDeviceScreenProps> = ({
  screen,
  compact = false,
}) => {
  return (
    <div className="relative w-full h-full select-none flex flex-col">
      {/* Outer Titanium Phone Bezel */}
      <div className="relative w-full h-full rounded-[40px] p-[8px] bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#0f172a] shadow-[0_30px_80px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.25)] border border-white/15">
        {/* Inner Screen Viewport */}
        <div className="relative w-full h-full rounded-[33px] bg-[#f8fafc] text-slate-900 overflow-hidden flex flex-col">
          {/* Top Royal Navy Header (#162d68) */}
          <div className="bg-[#162d68] text-white px-4 pt-3 pb-3.5 shrink-0">
            {/* Status Bar */}
            <div className="flex items-center justify-between text-[10px] font-medium text-white/80 mb-2.5">
              <span>9:41</span>
              <div className="w-3 h-3 rounded-full bg-black/80 border border-white/10" />
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-semibold">5G</span>
                <div className="w-4 h-2 rounded-[2px] border border-white/70 p-[1px]">
                  <div className="w-full h-full bg-white rounded-[1px]" />
                </div>
              </div>
            </div>

            {screen === 'insights' ? (
              <div>
                <div className="text-base font-extrabold tracking-tight">
                  Insights &amp; Analytics
                </div>
                <div className="flex items-center gap-1 text-[11px] text-blue-200 mt-0.5">
                  <Building2 className="w-3 h-3" />
                  <span>The Taj Mahal Palace</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <ArrowLeft className="w-4 h-4 text-white" />
                <span className="text-base font-extrabold tracking-tight">
                  Create Check-in
                </span>
              </div>
            )}
          </div>

          {/* ── SCREEN 1: CREATE CHECK-IN ── */}
          {screen === 'create' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between bg-[#f8fafc]">
              <div className="space-y-2.5">
                {/* Guest Count Stepper */}
                <div className="flex items-center justify-between bg-[#f1f5f9] rounded-xl px-3 py-2 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500">
                    <Minus className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-extrabold text-slate-900">1 Guest</span>
                  <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700">
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Room Assignment */}
                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-slate-600">
                    Room Assignment <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center justify-between bg-[#f1f5f9] rounded-xl px-3 py-2.5 border border-slate-200/80 text-xs font-semibold text-slate-800">
                    <span>Room 0004 selected</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                </div>

                {/* Checkout Date */}
                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-slate-600">
                    Checkout Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center justify-between bg-[#f1f5f9] rounded-xl px-3 py-2.5 border border-slate-200/80 text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#1d4ed8]" />
                      <span>Oct 19, 2026</span>
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                </div>
              </div>

              {/* Bottom Add ID Button */}
              <div className="pt-2">
                <div className="w-full py-2.5 rounded-xl bg-[#f1f5f9] border border-slate-200 text-slate-600 text-[11px] font-bold flex items-center justify-center gap-1.5">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add ID for Another Guest</span>
                </div>
              </div>
            </div>
          )}

          {/* ── SCREEN 2: SELECT ROOMS MODAL ── */}
          {screen === 'rooms' && (
            <div className="flex-1 bg-[#0f172a]/20 pt-2 flex flex-col">
              <div className="flex-1 bg-white rounded-t-3xl p-3.5 flex flex-col justify-between shadow-lg">
                <div>
                  {/* Sheet Handle */}
                  <div className="w-8 h-1 bg-slate-400 rounded-full mx-auto mb-2.5" />
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-sm font-extrabold text-slate-900">
                      Select Rooms (Up to 1)
                    </span>
                    <X className="w-4 h-4 text-slate-500" />
                  </div>

                  {/* Filter Chips */}
                  <div className="flex items-center gap-1.5 mb-2.5 text-[10px] font-bold">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                      All (16)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-600/40 text-emerald-700 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      13 Available
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      3 Occupied
                    </span>
                  </div>

                  {/* Search Input */}
                  <div className="flex items-center gap-2 bg-[#f1f5f9] rounded-xl px-3 py-2 text-[11px] text-slate-400 mb-16">
                    <Search className="w-3.5 h-3.5 text-slate-500" />
                    <span>Search by room number or type...</span>
                  </div>

                  {/* Remaining Room List */}
                  <div className="space-y-2 pt-3 text-left">
                    {[
                      { num: 'Room 1001', type: 'Standard · Floor 1' },
                      { num: 'Room 1002', type: 'Standard · Floor 1' },
                      { num: 'Room 1003', type: 'Deluxe · Floor 1' },
                    ].map((rm) => (
                      <div
                        key={rm.num}
                        className="flex items-center justify-between py-1.5 px-1 border-b border-slate-100"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-extrabold text-slate-800">
                              {rm.num}
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[9px] font-bold">
                              Available
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-400">{rm.type}</div>
                        </div>
                        <div className="w-4 h-4 rounded border border-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Confirm Selection Button */}
                <div className="w-full py-2.5 rounded-xl bg-[#1a56db] text-white text-xs font-bold text-center shadow-md">
                  Confirm Selection
                </div>
              </div>
            </div>
          )}

          {/* ── SCREEN 3: WATERMARKED GUEST ID VIEW ── */}
          {screen === 'watermark' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between bg-[#f8fafc]">
              <div className="space-y-2 opacity-60">
                <div className="flex items-center justify-between bg-[#f1f5f9] rounded-xl px-3 py-2 border border-slate-200 text-xs font-semibold text-slate-700">
                  <span>Room 0004 selected</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center justify-between bg-[#f1f5f9] rounded-xl px-3 py-2 border border-slate-200 text-xs font-semibold text-slate-700">
                  <span>Oct 19, 2026</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-left">
                <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Document Watermark Protection</span>
                </div>
                <div className="text-[9px] text-emerald-700 mt-0.5">
                  Every captured guest ID is automatically watermarked with your property name and check-in date.
                </div>
              </div>
            </div>
          )}

          {/* ── SCREEN 4: INSIGHTS & ANALYTICS ── */}
          {screen === 'insights' && (
            <div className="flex-1 flex flex-col justify-between bg-[#f8fafc]">
              <div className="p-3 space-y-3">
                {/* Period Switcher */}
                <div className="grid grid-cols-3 bg-white rounded-xl p-1 border border-slate-200 text-[10px] font-bold">
                  <div className="py-1.5 rounded-lg bg-[#162d68] text-white text-center shadow-sm">
                    Weekly
                  </div>
                  <div className="py-1.5 text-slate-600 text-center">Monthly</div>
                  <div className="py-1.5 text-slate-600 text-center">Custom</div>
                </div>

                {/* Spacer for 3D Pop-Out Card */}
                <div className="h-[168px]" />

                {/* Daily Activity Trend Chart */}
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">
                        Daily Activity Trend
                      </div>
                      <div className="text-[9px] text-slate-400">
                        Check-in volume per day (Mon – Sun)
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#1d4ed8] text-[9px] font-extrabold">
                      Peak: 8
                    </span>
                  </div>

                  {/* Bars */}
                  <div className="flex items-end justify-between gap-2 h-20 pt-3 px-1">
                    {[
                      { day: 'Mon', val: 8, h: 'h-12' },
                      { day: 'Tue', val: 3, h: 'h-5' },
                      { day: 'Wed', val: 0, h: 'h-1' },
                      { day: 'Thu', val: 4, h: 'h-7' },
                      { day: 'Fri', val: 2, h: 'h-3.5' },
                      { day: 'Sat', val: 3, h: 'h-5' },
                      { day: 'Sun', val: 0, h: 'h-1' },
                    ].map((b) => (
                      <div key={b.day} className="flex flex-col items-center gap-1 flex-1">
                        {b.val > 0 && (
                          <span className="text-[8px] font-bold text-[#1d4ed8] bg-blue-50 px-1 rounded">
                            {b.val}
                          </span>
                        )}
                        <div
                          className={`w-full rounded-t-md ${b.h} ${
                            b.val > 0
                              ? 'bg-gradient-to-t from-[#2563eb] to-[#3b82f6]'
                              : 'bg-slate-100'
                          }`}
                        />
                        <span className="text-[8px] font-semibold text-slate-500">
                          {b.day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Navigation Bar */}
              <div className="bg-[#162d68] text-white py-2 px-4 grid grid-cols-3 items-center text-[9px] font-medium shrink-0">
                <div className="flex flex-col items-center gap-0.5 text-white/70">
                  <BedDouble className="w-3.5 h-3.5" />
                  <span>Check-ins</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="px-3 py-0.5 rounded-full bg-white/20">
                    <BarChart2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-bold text-white">Insights</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-white/70">
                  <User className="w-3.5 h-3.5" />
                  <span>Profile</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          3D FLOATING POP-OUT HIGHLIGHT CARDS (Breaking Outside the Phone Frame)
         ════════════════════════════════════════════════════════════════════════ */}

      {/* POP-OUT 1: CREATE CHECK-IN — GUEST #1 ID CAPTURE CARD */}
      {screen === 'create' && (
        <div
          className={`absolute ${
            compact ? '-left-1.5 -right-1.5 sm:-left-3 sm:-right-3 bottom-12' : '-left-2 -right-2 sm:-left-5 sm:-right-5 bottom-14'
          } z-30 bg-white text-slate-900 rounded-2xl p-3 sm:p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.75),0_0_0_1px_rgba(15,23,42,0.08)] text-left transition-all duration-500`}
        >
          <div className="text-xs font-extrabold text-slate-900 mb-1.5">Guest #1</div>
          <div className="text-[10px] font-semibold text-slate-500 mb-1">ID Document Type</div>
          <div className="flex items-center justify-between bg-[#f1f5f9] rounded-xl px-3 py-2 border border-slate-200 text-xs font-bold text-slate-800 mb-3">
            <span>Aadhaar Card</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Front Captured with Watermarked ID Thumbnail */}
            <div className="flex flex-col items-center">
              <div className="relative w-full h-20 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/assets/watermarked_id_card_preview.png"
                  alt="Captured Front ID Document"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 mt-1.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>Front Side</span>
              </div>
              <span className="text-[9px] text-emerald-600 font-medium">Captured</span>
            </div>

            {/* Back Optional */}
            <div className="flex flex-col items-center">
              <div className="w-full h-20 rounded-xl bg-[#f1f5f9] border border-slate-200 flex items-center justify-center text-slate-600">
                <Camera className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold text-slate-800 mt-1.5">Back Side</div>
              <span className="text-[9px] text-slate-400 font-medium">Optional</span>
            </div>
          </div>
        </div>
      )}

      {/* POP-OUT 2: ROOMS MODAL — SELECTED ROOM 0004 CARD */}
      {screen === 'rooms' && (
        <div
          className={`absolute ${
            compact ? '-left-1.5 -right-1.5 sm:-left-3 sm:-right-3 top-[44%]' : '-left-2 -right-2 sm:-left-5 sm:-right-5 top-[44%]'
          } z-30 bg-white text-slate-900 rounded-2xl p-3.5 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.75),0_0_0_1px_rgba(59,130,246,0.25)] flex items-center justify-between text-left transition-all duration-500`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-slate-900">Room 0004</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-extrabold">
                Available
              </span>
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">
              Deluxe · Floor 0
            </div>
          </div>
          <div className="w-6 h-6 rounded-md bg-[#1a56db] text-white flex items-center justify-center shadow-sm">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        </div>
      )}

      {/* POP-OUT 3: WATERMARKED GUEST ID VIEW */}
      {screen === 'watermark' && (
        <div
          className={`absolute ${
            compact ? '-left-1.5 -right-1.5 sm:-left-3 sm:-right-3 top-[28%]' : '-left-2 -right-2 sm:-left-5 sm:-right-5 top-[26%]'
          } z-30 bg-white text-slate-900 rounded-2xl p-3 sm:p-3.5 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_0_2px_rgba(16,185,129,0.45)] text-left space-y-2.5 transition-all duration-500`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#162d68]">
                Guest #1 • Identity Document
              </div>
              <div className="text-xs font-black text-slate-900">
                Watermarked Guest ID Preview
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-500/30 text-emerald-700 text-[9px] font-extrabold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Watermarked
            </span>
          </div>

          {/* High-Clarity Watermarked ID Card Display */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 h-36 flex items-center justify-center">
            <img
              src="/assets/watermarked_id_card_preview.png"
              alt="Watermarked Guest Identity Document"
              className="w-full h-full object-contain"
            />
            {/* Crisp Legible Watermark Stamp Callout */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="rotate-[-22deg] bg-[#162d68]/90 text-white px-2.5 py-1 rounded border border-sky-400/60 shadow-md text-[9px] font-extrabold tracking-wide whitespace-nowrap">
                Valid for check-in at The Taj Mahal Palace on 18 Oct 2026
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-600 font-medium leading-snug bg-slate-100 rounded-lg px-2.5 py-1.5">
            Diagonal watermark stamps your property name and date to prevent unauthorized reuse.
          </div>
        </div>
      )}

      {/* POP-OUT 4: INSIGHTS & ANALYTICS — TOTAL CHECK-INS CARD */}
      {screen === 'insights' && (
        <div
          className={`absolute ${
            compact ? '-left-1.5 -right-1.5 sm:-left-3 sm:-right-3 top-[27%]' : '-left-2 -right-2 sm:-left-5 sm:-right-5 top-[27%]'
          } z-30 bg-white text-slate-900 rounded-2xl p-3 sm:p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.75),0_0_0_1px_rgba(15,23,42,0.08)] text-left space-y-2.5 transition-all duration-500`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1d4ed8] flex items-center justify-center">
              <BedDouble className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                TOTAL CHECK-INS
              </div>
              <div className="text-2xl font-black text-slate-900 leading-none mt-0.5">
                20
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden flex">
            <div className="w-[15%] h-full bg-emerald-600" />
            <div className="w-[85%] h-full bg-[#0284c7]" />
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between text-[9px] font-bold text-slate-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Checked-In: 15% (3)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              Checked Out: 85% (17)
            </span>
          </div>

          {/* 2 Sub-Cards */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-700">Checked-In</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[8px] font-extrabold">
                  15%
                </span>
              </div>
              <div className="text-sm font-black text-slate-900 mt-1">
                3 <span className="text-[9px] font-medium text-slate-400">Active stays</span>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-700 flex items-center gap-1">
                  <LogOut className="w-2.5 h-2.5 text-sky-600" />
                  Checked Out
                </span>
                <span className="px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 text-[8px] font-extrabold">
                  85%
                </span>
              </div>
              <div className="text-sm font-black text-slate-900 mt-1">
                17 <span className="text-[9px] font-medium text-slate-400">Completed</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
