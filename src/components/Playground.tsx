import React, { useState } from 'react';
import { 
  FlaskConical, Upload, AlertTriangle, 
  RefreshCw, Scan, Search, MapPin, Radio, BellRing
} from 'lucide-react';

export const Playground: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'currency' | 'scam' | 'campus'>('currency');

  // Demo 1: Fake Currency Detector State
  const [selectedCurrencySample, setSelectedCurrencySample] = useState<'authentic' | 'suspicious' | 'custom'>('authentic');
  const [currencyCustomImage, setCurrencyCustomImage] = useState<string | null>(null);
  const [isScanningCurrency, setIsScanningCurrency] = useState(false);
  const [currencyResult, setCurrencyResult] = useState<{
    processed: boolean;
    authenticScore: number;
    threadFound: boolean;
    watermarkMatch: number;
    status: 'Authentic (Simulated)' | 'Potentially Suspect (Simulated)';
  } | null>(null);

  // Demo 2: ScamShield Analyzer State
  const [scamInput, setScamInput] = useState('http://secure-bank-login-verify-account-urgent.com/login');
  const [isEvaluatingScam, setIsEvaluatingScam] = useState(false);
  const [scamResult, setScamResult] = useState<{
    evaluated: boolean;
    riskScore: number;
    riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
    flags: string[];
  } | null>(null);

  // Demo 3: CampusGuard AI State
  const [sosStatus, setSosStatus] = useState<'idle' | 'triggering' | 'active'>('idle');
  const [sosLocation] = useState('Block B - Computer Science Lab 3 (Lat: 17.981, Long: 79.531)');
  const [sosLogs, setSosLogs] = useState<string[]>([]);

  // Currency Scan Action
  const handleScanCurrency = () => {
    setIsScanningCurrency(true);
    setCurrencyResult(null);

    setTimeout(() => {
      setIsScanningCurrency(false);
      if (selectedCurrencySample === 'authentic') {
        setCurrencyResult({
          processed: true,
          authenticScore: 96.4,
          threadFound: true,
          watermarkMatch: 94.2,
          status: 'Authentic (Simulated)'
        });
      } else {
        setCurrencyResult({
          processed: true,
          authenticScore: 48.1,
          threadFound: false,
          watermarkMatch: 52.6,
          status: 'Potentially Suspect (Simulated)'
        });
      }
    }, 1500);
  };

  // ScamShield Evaluate Action
  const handleEvaluateScam = () => {
    if (!scamInput.trim()) return;
    setIsEvaluatingScam(true);
    setScamResult(null);

    setTimeout(() => {
      setIsEvaluatingScam(false);
      const lower = scamInput.toLowerCase();
      const flags: string[] = [];

      if (lower.includes('urgent') || lower.includes('verify') || lower.includes('alert')) {
        flags.push('High-urgency psychological pressure text detected');
      }
      if (lower.includes('bank') || lower.includes('login') || lower.includes('secure')) {
        flags.push('Deceptive keyword mimicry of financial institutions');
      }
      if (lower.includes('http:') || lower.includes('.com/login')) {
        flags.push('Unencrypted or non-official domain URL structure');
      }

      const score = Math.min(98, Math.max(15, flags.length * 30 + 20));
      const riskLevel = score > 60 ? 'HIGH' : score > 35 ? 'MEDIUM' : 'LOW';

      setScamResult({
        evaluated: true,
        riskScore: score,
        riskLevel,
        flags: flags.length > 0 ? flags : ['No standard phishing signatures detected']
      });
    }, 1200);
  };

  // CampusGuard Trigger Action
  const handleTriggerSOS = () => {
    setSosStatus('triggering');
    setSosLogs(['[0.0s] Emergency SOS sequence initiated by user...']);

    setTimeout(() => {
      setSosLogs(prev => [...prev, '[0.4s] Geolocation captured: Vaagdevi Campus Block B (Lab 3)']);
    }, 400);

    setTimeout(() => {
      setSosLogs(prev => [...prev, '[0.8s] AI Risk Categorizer: HIGH URGENCY (Medical / Security Dispatch)']);
    }, 800);

    setTimeout(() => {
      setSosLogs(prev => [...prev, '[1.2s] Alert broadcast sent to Campus Security Control Desk & Nearest Warden']);
      setSosStatus('active');
    }, 1300);
  };

  const sampleCurrencyImages = {
    authentic: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80',
    suspicious: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <section id="playground" className="py-20 relative z-10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Interactive Demo Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Project <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">Playground 🧪</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Experience functional client-side interactive simulations of Bindhu's AI & web projects.
          </p>

          {/* Mandatory Transparency Banner */}
          <div className="mt-4 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-medium inline-flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>Interactive Demo — Demonstration only (Client-side simulation)</span>
          </div>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveDemo('currency')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeDemo === 'currency'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-950/50 border border-sky-400'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Scan className="w-4 h-4" />
            <span>Fake Currency Detector Demo</span>
          </button>

          <button
            onClick={() => setActiveDemo('scam')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeDemo === 'scam'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-950/50 border border-purple-400'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>ScamShield Threat Analyzer</span>
          </button>

          <button
            onClick={() => setActiveDemo('campus')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeDemo === 'campus'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 border border-emerald-400'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Radio className="w-4 h-4" />
            <span>CampusGuard AI SOS Simulator</span>
          </button>
        </div>

        {/* DEMO 1: Fake Currency Detection */}
        {activeDemo === 'currency' && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Scan className="w-5 h-5 text-sky-400" />
                  <span>Fake Currency Detection Simulator</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Computer vision feature extraction & security thread alignment scanner.
                </p>
              </div>
              <span className="text-[10px] font-mono font-semibold px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800">
                OpenCV Feature Extraction Demo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Controls */}
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">
                  1. SELECT SAMPLE BANKNOTE IMAGE
                </label>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => {
                      setSelectedCurrencySample('authentic');
                      setCurrencyCustomImage(null);
                      setCurrencyResult(null);
                    }}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      selectedCurrencySample === 'authentic'
                        ? 'bg-sky-950/80 border-sky-500 text-sky-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span className="block font-semibold text-white">Sample A: Authentic Note</span>
                    <span className="text-[10px] text-slate-400">Valid security thread & watermark</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedCurrencySample('suspicious');
                      setCurrencyCustomImage(null);
                      setCurrencyResult(null);
                    }}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      selectedCurrencySample === 'suspicious'
                        ? 'bg-rose-950/80 border-rose-500 text-rose-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span className="block font-semibold text-white">Sample B: Altered Note</span>
                    <span className="text-[10px] text-slate-400">Degraded alignment features</span>
                  </button>
                </div>

                <div className="mb-6">
                  <label className="text-xs font-mono text-slate-400 block mb-2">
                    OR UPLOAD CUSTOM IMAGE FILE
                  </label>
                  <label className="flex items-center justify-center gap-2 p-4 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 text-slate-400 hover:text-white hover:border-sky-500 cursor-pointer transition-colors text-xs font-medium">
                    <Upload className="w-4 h-4 text-sky-400" />
                    <span>{currencyCustomImage ? 'Image Uploaded!' : 'Click to Upload Banknote Image'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          setCurrencyCustomImage(url);
                          setSelectedCurrencySample('custom');
                          setCurrencyResult(null);
                        }
                      }}
                    />
                  </label>
                </div>

                <button
                  onClick={handleScanCurrency}
                  disabled={isScanningCurrency}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-sky-950/50 transition-all disabled:opacity-50"
                >
                  {isScanningCurrency ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Processing Canny Edge & Watermark Scan...</span>
                    </>
                  ) : (
                    <>
                      <Scan className="w-4 h-4" />
                      <span>Run Feature Extraction Analysis</span>
                    </>
                  )}
                </button>
              </div>

              {/* Preview & Diagnostic Display */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                    IMAGE CANNY OVERLAY PREVIEW
                  </span>

                  <div className="relative h-44 rounded-xl overflow-hidden border border-slate-800 mb-4 bg-slate-900 flex items-center justify-center">
                    <img
                      src={
                        currencyCustomImage ||
                        (selectedCurrencySample === 'authentic'
                          ? sampleCurrencyImages.authentic
                          : sampleCurrencyImages.suspicious)
                      }
                      alt="Banknote scan preview"
                      className={`w-full h-full object-cover ${isScanningCurrency ? 'opacity-40 blur-xs' : ''}`}
                    />
                    {isScanningCurrency && (
                      <div className="absolute inset-0 bg-sky-500/10 flex flex-col items-center justify-center gap-2">
                        <div className="w-full h-1 bg-sky-400 animate-pulse absolute top-1/2 -translate-y-1/2 shadow-lg shadow-sky-400" />
                        <span className="text-xs font-mono font-bold text-sky-400 bg-slate-950/90 px-3 py-1 rounded-full border border-sky-500">
                          EXTRACTING SECURITY THREAD...
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {currencyResult ? (
                  <div className={`p-4 rounded-xl border animate-in fade-in ${
                    currencyResult.authenticScore > 80
                      ? 'bg-emerald-950/80 border-emerald-700 text-emerald-200'
                      : 'bg-rose-950/80 border-rose-700 text-rose-200'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase font-mono">
                        {currencyResult.status}
                      </span>
                      <span className="text-xs font-extrabold font-mono">
                        {currencyResult.authenticScore}% MATCH
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-slate-800">
                      <div>Security Thread: {currencyResult.threadFound ? '✓ DETECTED' : '✗ SUSPECT'}</div>
                      <div>Watermark Match: {currencyResult.watermarkMatch}%</div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-500 text-center text-xs">
                    Click "Run Feature Extraction Analysis" to process image features.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* DEMO 2: ScamShield Analyzer */}
        {activeDemo === 'scam' && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Search className="w-5 h-5 text-purple-400" />
                  <span>SCAMSHIELD Real-Time Phishing Analyzer</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Natural language & URL risk evaluation heuristics.
                </p>
              </div>
              <span className="text-[10px] font-mono font-semibold px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                NLP Rule Engine Demo
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">
                  ENTER SUSPICIOUS URL OR SMS TEXT MESSAGE
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={scamInput}
                    onChange={e => setScamInput(e.target.value)}
                    placeholder="e.g. http://secure-verify-account.com or Urgent! Win $1000 prize"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                  />
                  <button
                    onClick={handleEvaluateScam}
                    disabled={isEvaluatingScam}
                    className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg shadow-purple-950/50 transition-all shrink-0"
                  >
                    {isEvaluatingScam ? 'Analyzing...' : 'Analyze Threat'}
                  </button>
                </div>
              </div>

              {/* Sample Quick Inputs */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[10px] text-slate-500 font-mono">Try preset sample:</span>
                <button
                  onClick={() => setScamInput('http://secure-bank-login-verify-account-urgent.com/login')}
                  className="text-[10px] px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-800"
                >
                  Suspicious Bank Link
                </button>
                <button
                  onClick={() => setScamInput('URGENT: Your account password expires in 2 hours. Verify at http://bit.ly/fake')}
                  className="text-[10px] px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-800"
                >
                  Urgent SMS Phishing
                </button>
                <button
                  onClick={() => setScamInput('https://github.com/bindhu-aiml/portfolio')}
                  className="text-[10px] px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-800"
                >
                  Safe GitHub URL
                </button>
              </div>

              {/* Result output */}
              {scamResult && (
                <div className="mt-6 p-6 rounded-2xl bg-slate-950 border border-slate-800 animate-in fade-in">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold font-mono ${
                        scamResult.riskLevel === 'HIGH'
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : scamResult.riskLevel === 'MEDIUM'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      }`}>
                        RISK LEVEL: {scamResult.riskLevel}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Threat Score: {scamResult.riskScore}/100
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    FLAGGED HEURISTIC SIGNATURES
                  </span>
                  <ul className="space-y-2">
                    {scamResult.flags.map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* DEMO 3: CampusGuard AI */}
        {activeDemo === 'campus' && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Radio className="w-5 h-5 text-emerald-400" />
                  <span>CAMPUSGUARD AI SOS Alert Dispatch Simulator</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Emergency alert broadcast & campus security dispatch triage.
                </p>
              </div>
              <span className="text-[10px] font-mono font-semibold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                Safety Intelligence Demo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
                    CURRENT SIMULATED LOCATION
                  </span>
                  <p className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>{sosLocation}</span>
                  </p>
                </div>

                <button
                  onClick={handleTriggerSOS}
                  disabled={sosStatus === 'triggering'}
                  className={`w-full py-4 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
                    sosStatus === 'active'
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/50'
                      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-950/50 animate-pulse'
                  }`}
                >
                  <BellRing className="w-5 h-5" />
                  <span>{sosStatus === 'active' ? 'SOS Active - Trigger Again' : 'TRIGGER EMERGENCY SOS ALERT'}</span>
                </button>
              </div>

              {/* Real-time Simulated Log Feed */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs h-64 overflow-y-auto custom-scrollbar flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-2 border-b border-slate-800 pb-1">
                    CAMPUS SECURITY DISPATCH SEQUENCE LOG
                  </span>
                  {sosLogs.length === 0 ? (
                    <div className="text-slate-600 italic text-center py-10">
                      Press "TRIGGER EMERGENCY SOS ALERT" to test dispatch sequence.
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {sosLogs.map((log, i) => (
                        <li key={i} className="text-emerald-300/90 leading-relaxed">
                          {log}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
