import React from 'react';
import {
  Trash2,
  ShieldCheck,
  Smartphone,
  User,
  ArrowRight,
  X,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

interface AccountDeletionProps {
  onClose: () => void;
}

export const AccountDeletion: React.FC<AccountDeletionProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="account-deletion-title"
    >
      <div
        className="relative w-full max-w-xl rounded-3xl bg-[#0d1017] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden text-[#f5f5f7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Popover Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <h2 id="account-deletion-title" className="text-xl font-extrabold text-white tracking-tight">
                Account Deletion
              </h2>
              <p className="text-xs sm:text-sm text-[#94a3b8]">
                Self-service account and data removal instructions
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#86868b] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Account Deletion dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Popover Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Highlighted 3-Step Visual Path: Open the App -> Profile -> Delete Account */}
          <div className="rounded-2xl bg-gradient-to-b from-[#151926] to-[#0b0e16] border border-white/10 p-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              How to Delete Your Account in SafeCheckinn
            </div>

            {/* Visual Breadcrumb Pill Flow */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-2xl bg-black/60 border border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#38bdf8]" />
                  Open the App
                </span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#86868b] shrink-0" />

              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#38bdf8]" />
                  Profile
                </span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#86868b] shrink-0" />

              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-xs sm:text-sm font-bold text-red-400 flex items-center gap-1.5">
                  <Trash2 className="w-4 h-4 text-red-400" />
                  Delete Account
                </span>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <ol className="space-y-3 text-sm sm:text-base text-white/95 pt-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
                <span>
                  <strong>Step 1:</strong> Open the <strong>SafeCheckinn</strong> mobile application and sign in to your property account.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
                <span>
                  <strong>Step 2:</strong> Navigate to <strong>Profile</strong> in the bottom navigation bar.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Step 3:</strong> Select <strong>Delete Account</strong> and confirm the prompt to permanently remove your account and associated records.
                </span>
              </li>
            </ol>
          </div>

          {/* Data Deletion Details */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5 space-y-2 text-sm">
            <div className="flex items-center gap-2 font-bold text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>Data Removal Notice</span>
            </div>
            <p className="text-[#cbd5e1] leading-relaxed">
              Deleting your account permanently removes your administrator profile, property configuration, room inventory, and stored digital check-in records from SafeCheckinn. This action is irreversible.
            </p>
          </div>

          {/* Support Contact Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs sm:text-sm text-[#94a3b8]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#34d399]" />
              <span>Immediate self-service removal</span>
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
