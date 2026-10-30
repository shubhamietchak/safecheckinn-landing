import React, { useState, useRef, useEffect } from 'react';
import { 
  Scan, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  CreditCard, 
  UserCheck, 
  Key, 
  ShieldCheck, 
  PenTool, 
  Hotel,
  ArrowRight
} from 'lucide-react';

interface SampleGuest {
  id: string;
  name: string;
  country: string;
  docType: string;
  docNumber: string;
  room: string;
  avatar: string;
}

const SAMPLE_GUESTS: SampleGuest[] = [
  {
    id: '1',
    name: 'Alexander Wright',
    country: 'United Kingdom',
    docType: 'Passport',
    docNumber: 'P89218402',
    room: 'Suite 408 (Ocean View)',
    avatar: '👨‍💼',
  },
  {
    id: '2',
    name: 'Sophie Martin',
    country: 'France',
    docType: 'National ID',
    docNumber: 'FR-902341-X',
    room: 'Deluxe Room 215',
    avatar: '👩‍🎨',
  },
  {
    id: '3',
    name: 'Rajesh Patel',
    country: 'India',
    docType: 'Driving License',
    docNumber: 'DL-0420190023412',
    room: 'Executive Suite 501',
    avatar: '👨‍💻',
  },
];

export const InteractiveCheckinDemo: React.FC = () => {
  const [selectedGuest, setSelectedGuest] = useState<SampleGuest>(SAMPLE_GUESTS[0]);
  const [step, setStep] = useState<'idle' | 'scanning' | 'signing' | 'completed'>('idle');
  const [hasSigned, setHasSigned] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  // Canvas signature handling
  useEffect(() => {
    if (step === 'signing' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#2997ff';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [step]);

  const handleStartScan = () => {
    setStep('scanning');
    setHasSigned(false);
    setTimeout(() => {
      setStep('signing');
    }, 1800);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    setHasSigned(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
  };

  const autoSign = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#2997ff';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(30, 45);
    ctx.bezierCurveTo(60, 10, 100, 60, 150, 25);
    ctx.bezierCurveTo(180, 50, 220, 20, 280, 40);
    ctx.stroke();
    setHasSigned(true);
  };

  const handleFinishCheckin = () => {
    setStep('completed');
  };

  const handleReset = () => {
    setStep('idle');
    setHasSigned(false);
  };

  return (
    <section id="interactive-demo" className="py-24 sm:py-32 relative bg-[#040406]">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#2997ff]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2997ff]/10 border border-[#2997ff]/20 text-[#2997ff] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd60a]" /> Interactive Workflow Preview
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Preview the Digital Check-in Flow
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#86868b]">
            Explore how hotel front-desk teams replace manual paper forms with a guided digital check-in workflow.
          </p>
        </div>

        {/* The Interactive Sandbox Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#121217] via-[#0d0d12] to-[#07070a] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Guest Selector Ribbon */}
          <div className="mb-8">
            <div className="text-xs uppercase font-semibold text-[#86868b] tracking-wider mb-3 text-center sm:text-left">
              Step 1: Choose a Sample Guest Profile
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SAMPLE_GUESTS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => {
                    setSelectedGuest(g);
                    handleReset();
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                    selectedGuest.id === g.id
                      ? 'bg-[#2997ff]/10 border-[#2997ff] shadow-md shadow-[#2997ff]/20'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="text-2xl">{g.avatar}</div>
                  <div>
                    <div className="text-xs font-bold text-white">{g.name}</div>
                    <div className="text-[10px] text-[#86868b]">{g.country} • {g.docType}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Interactive Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Virtual ID Document Display */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="text-xs uppercase font-semibold text-[#86868b] tracking-wider mb-2 self-start">
                Guest Identification Document
              </div>

              <div className="relative w-full max-w-[340px] h-[200px] sm:h-[220px] rounded-2xl bg-gradient-to-br from-[#1a1b24] via-[#14151c] to-[#0d0e14] border border-white/20 p-4 shadow-xl flex flex-col justify-between overflow-hidden group">
                
                {/* ID Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{selectedGuest.avatar}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                      {selectedGuest.country} • {selectedGuest.docType}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    OFFICIAL
                  </span>
                </div>

                {/* Body Details */}
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="w-16 h-20 rounded-xl bg-white/10 border border-white/20 flex flex-col items-center justify-center text-xs text-white/40">
                    PHOTO
                  </div>
                  <div className="col-span-2 space-y-1">
                    <div>
                      <div className="text-[8px] text-[#86868b] uppercase">Legal Name</div>
                      <div className="text-xs font-bold text-white tracking-wide">{selectedGuest.name}</div>
                    </div>
                    <div>
                      <div className="text-[8px] text-[#86868b] uppercase">Document Number</div>
                      <div className="text-xs font-mono text-[#2997ff]">{selectedGuest.docNumber}</div>
                    </div>
                    <div>
                      <div className="text-[8px] text-[#86868b] uppercase">Allocated Room</div>
                      <div className="text-xs font-semibold text-white/90">{selectedGuest.room}</div>
                    </div>
                  </div>
                </div>

                {/* Machine Readable Zone (MRZ) */}
                <div className="font-mono text-[8px] text-[#86868b] tracking-tighter truncate bg-black/40 p-1 rounded">
                  P&lt;{selectedGuest.country.substring(0, 3).toUpperCase()}{selectedGuest.name.replace(' ', '&lt;')}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
                </div>

                {/* Laser scan animation when in scanning state */}
                {step === 'scanning' && (
                  <div className="absolute inset-0 bg-[#2997ff]/10 backdrop-blur-[1px] flex flex-col justify-between pointer-events-none">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2997ff] to-transparent shadow-[0_0_15px_#2997ff] animate-scan"></div>
                    <div className="p-2 text-center text-xs font-bold text-[#2997ff] bg-black/80">
                      AI OCR Extracting Biometric Fields...
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Interaction Work Area */}
            <div className="lg:col-span-7 flex flex-col">
              
              {/* STATE 1: IDLE */}
              {step === 'idle' && (
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2997ff]/20 text-[#2997ff] flex items-center justify-center mx-auto">
                    <Scan className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Step 2: Simulate Identity Document Capture</h4>
                    <p className="text-xs text-[#86868b] mt-1 max-w-md mx-auto">
                      Click below to preview how SafeCheckinn captures guest identity document details for the check-in record.
                    </p>
                  </div>
                  <button
                    onClick={handleStartScan}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#2997ff] to-[#0071e3] hover:from-[#3ca3ff] hover:to-[#0a7ff5] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 mx-auto shadow-lg shadow-[#2997ff]/30 active:scale-95 transition-all"
                  >
                    <Scan className="w-4 h-4" />
                    <span>Capture ID Document</span>
                  </button>
                </div>
              )}

              {/* STATE 2: SCANNING */}
              {step === 'scanning' && (
                <div className="p-8 rounded-2xl bg-[#2997ff]/5 border border-[#2997ff]/30 text-center space-y-3">
                  <div className="inline-block animate-spin text-[#2997ff]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Processing Identity Document...</h4>
                  <p className="text-xs text-[#86868b]">
                    Applying verification watermark • Attaching to room assignment
                  </p>
                </div>
              )}

              {/* STATE 3: SIGNING */}
              {step === 'signing' && (
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#30d158]">Document Captured</span>
                      <h4 className="text-base font-bold text-white">Step 3: Confirm Guest Check-in</h4>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={autoSign}
                        className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-[11px] text-[#2997ff] font-medium"
                      >
                        Sample Signature
                      </button>
                      <button
                        onClick={clearCanvas}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-[#86868b]"
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  {/* HTML5 Signature Canvas */}
                  <div className="relative w-full h-[120px] rounded-xl bg-black border border-dashed border-white/20 cursor-crosshair overflow-hidden">
                    <canvas
                      ref={canvasRef}
                      width={480}
                      height={120}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={stopDrawing}
                      className="w-full h-full"
                    />
                    {!hasSigned && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs text-[#86868b] gap-1.5">
                        <PenTool className="w-3.5 h-3.5" />
                        <span>Sign here or click Sample Signature above</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={handleReset}
                      className="text-xs text-[#86868b] hover:text-white flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Reset Preview
                    </button>
                    <button
                      onClick={handleFinishCheckin}
                      disabled={!hasSigned}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${
                        hasSigned
                          ? 'bg-[#30d158] text-black shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 active:scale-95'
                          : 'bg-white/10 text-[#86868b] cursor-not-allowed'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Complete Check-in</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STATE 4: COMPLETED */}
              {step === 'completed' && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#0a1510] to-[#050b08] border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-[#30d158] flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                      Check-in Completed • Digital Record Saved
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      Guest Checked In: {selectedGuest.name}
                    </h3>
                    <p className="text-xs text-[#86868b] mt-1">
                      Assigned to <span className="text-white font-semibold">{selectedGuest.room}</span>.
                      Digital check-in record and watermarked ID saved.
                    </p>
                  </div>

                  {/* Digital Guest Pass Card */}
                  <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/20 max-w-sm mx-auto flex items-center justify-between text-left text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        <Key className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Active Stay Record</div>
                        <div className="text-[10px] text-[#86868b]">Reference: #9402</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      VERIFIED
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs text-white font-medium inline-flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Preview Another Guest Check-in</span>
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
