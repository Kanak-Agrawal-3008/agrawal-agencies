import React, { useState } from 'react';
import { Calculator, ArrowRight, Copy, Check, Scale } from 'lucide-react';

interface SteelWeightCalculatorProps {
  onAddEstimateToEnquiry?: (summaryText: string) => void;
}

export const SteelWeightCalculator: React.FC<SteelWeightCalculatorProps> = ({
  onAddEstimateToEnquiry
}) => {
  const [calcType, setCalcType] = useState<'rebar' | 'flat' | 'square' | 'round'>('rebar');

  // Rebar state
  const [rebarDia, setRebarDia] = useState<number>(12);
  const [rebarPieces, setRebarPieces] = useState<number>(100);
  const [rebarLengthM, setRebarLengthM] = useState<number>(12);

  // Flat & Sheet state
  const [flatLengthM, setFlatLengthM] = useState<number>(6);
  const [flatWidthMm, setFlatWidthMm] = useState<number>(50);
  const [flatThickMm, setFlatThickMm] = useState<number>(6);
  const [flatPieces, setFlatPieces] = useState<number>(50);

  // Square / Round bar state
  const [barSideMm, setBarSideMm] = useState<number>(20);
  const [barLengthM, setBarLengthM] = useState<number>(6);
  const [barPieces, setBarPieces] = useState<number>(20);

  const [copied, setCopied] = useState(false);

  // Calculations
  const calculateResult = () => {
    if (calcType === 'rebar') {
      const wtPerMetre = (rebarDia * rebarDia) / 162.28;
      const totalMetres = rebarPieces * rebarLengthM;
      const totalKg = wtPerMetre * totalMetres;
      const totalMT = totalKg / 1000;
      return {
        unitWt: wtPerMetre.toFixed(3) + ' kg/m',
        totalKg: totalKg.toFixed(1) + ' kg',
        totalMT: totalMT.toFixed(3) + ' MT',
        summary: `Rebar TMT ${rebarDia}mm — ${rebarPieces} bars of ${rebarLengthM}m = ${totalMT.toFixed(3)} MT (${totalKg.toFixed(1)} kg)`
      };
    }
    if (calcType === 'flat') {
      // Density of steel = 7850 kg/m3 = 0.00785 kg/(mm * mm * m)
      const wtPerPiece = (flatWidthMm * flatThickMm * flatLengthM * 0.00785);
      const totalKg = wtPerPiece * flatPieces;
      const totalMT = totalKg / 1000;
      return {
        unitWt: (wtPerPiece / flatLengthM).toFixed(3) + ' kg/m',
        totalKg: totalKg.toFixed(1) + ' kg',
        totalMT: totalMT.toFixed(3) + ' MT',
        summary: `MS Flat ${flatWidthMm}x${flatThickMm}mm — ${flatPieces} pcs of ${flatLengthM}m = ${totalMT.toFixed(3)} MT (${totalKg.toFixed(1)} kg)`
      };
    }
    if (calcType === 'round') {
      const wtPerMetre = (barSideMm * barSideMm) / 162.28;
      const totalKg = wtPerMetre * barLengthM * barPieces;
      const totalMT = totalKg / 1000;
      return {
        unitWt: wtPerMetre.toFixed(3) + ' kg/m',
        totalKg: totalKg.toFixed(1) + ' kg',
        totalMT: totalMT.toFixed(3) + ' MT',
        summary: `MS Round ${barSideMm}mm dia — ${barPieces} pcs of ${barLengthM}m = ${totalMT.toFixed(3)} MT (${totalKg.toFixed(1)} kg)`
      };
    }
    // square
    const wtPerMetre = (barSideMm * barSideMm * 0.00785);
    const totalKg = wtPerMetre * barLengthM * barPieces;
    const totalMT = totalKg / 1000;
    return {
      unitWt: wtPerMetre.toFixed(3) + ' kg/m',
      totalKg: totalKg.toFixed(1) + ' kg',
      totalMT: totalMT.toFixed(3) + ' MT',
      summary: `MS Square Bar ${barSideMm}x${barSideMm}mm — ${barPieces} pcs of ${barLengthM}m = ${totalMT.toFixed(3)} MT (${totalKg.toFixed(1)} kg)`
    };
  };

  const result = calculateResult();

  const handleCopy = () => {
    navigator.clipboard.writeText(result.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="calculator" className="bg-neutral-900 py-12 lg:py-16 xl:py-20 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 lg:pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              <Calculator className="w-3.5 h-3.5" />
              <span>Engineering Utility Tool</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mt-1 font-display">
              Steel Weight & Tonnage Estimator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Calculate exact standard weights as per IS 1786 and IS 2062 for BOQ bill preparation and truck dispatch estimations.
            </p>
          </div>

          {/* Segmented Type Switcher */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-950 border border-neutral-800 rounded-lg shrink-0">
            <button
              onClick={() => setCalcType('rebar')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                calcType === 'rebar' ? 'bg-purple-700 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              TMT Rebar (d²/162)
            </button>
            <button
              onClick={() => setCalcType('flat')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                calcType === 'flat' ? 'bg-purple-700 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              MS Flat / Plate
            </button>
            <button
              onClick={() => setCalcType('round')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                calcType === 'round' ? 'bg-purple-700 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Round Bar
            </button>
            <button
              onClick={() => setCalcType('square')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                calcType === 'square' ? 'bg-purple-700 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Square Bar
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 pt-6 lg:pt-8 items-stretch">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-neutral-950/80 p-5 xl:p-6 rounded-xl border border-neutral-800 space-y-5 flex flex-col justify-between">
            
            {calcType === 'rebar' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Select Rebar Diameter (mm)
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {[8, 10, 12, 16, 20, 25, 32].map((dia) => (
                      <button
                        key={dia}
                        onClick={() => setRebarDia(dia)}
                        className={`py-2 text-xs font-mono font-bold rounded-lg border transition-colors cursor-pointer ${
                          rebarDia === dia
                            ? 'bg-purple-700 border-purple-500 text-white'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                        }`}
                      >
                        {dia} mm
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Number of Rebar Bars / Pieces
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={rebarPieces}
                      onChange={(e) => setRebarPieces(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Standard Bar Length (Metres)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.5"
                      value={rebarLengthM}
                      onChange={(e) => setRebarLengthM(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                    />
                    <span className="text-[10px] text-neutral-500 mt-1 block">Standard factory length is 12m</span>
                  </div>
                </div>
              </>
            )}

            {calcType === 'flat' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Width (mm)
                  </label>
                  <input
                    type="number"
                    value={flatWidthMm}
                    onChange={(e) => setFlatWidthMm(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Thickness (mm)
                  </label>
                  <input
                    type="number"
                    value={flatThickMm}
                    onChange={(e) => setFlatThickMm(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Length (Metres)
                  </label>
                  <input
                    type="number"
                    value={flatLengthM}
                    onChange={(e) => setFlatLengthM(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Pieces
                  </label>
                  <input
                    type="number"
                    value={flatPieces}
                    onChange={(e) => setFlatPieces(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>
            )}

            {(calcType === 'round' || calcType === 'square') && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    {calcType === 'round' ? 'Diameter (mm)' : 'Side Size (mm)'}
                  </label>
                  <input
                    type="number"
                    value={barSideMm}
                    onChange={(e) => setBarSideMm(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Length (Metres)
                  </label>
                  <input
                    type="number"
                    value={barLengthM}
                    onChange={(e) => setBarLengthM(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Pieces
                  </label>
                  <input
                    type="number"
                    value={barPieces}
                    onChange={(e) => setBarPieces(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3 py-2 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>
            )}

            <div className="text-[11px] text-neutral-500 font-mono">
              Theoretical formula as per Bureau of Indian Standards (BIS): Nominal Weight = (d² / 162.28) kg/m · Density of Steel = 7.85 g/cm³.
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 rounded-xl border border-neutral-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-neutral-800">
                <span className="font-semibold uppercase tracking-wider">Calculated Output</span>
                <span className="font-mono text-purple-400">Unit: {result.unitWt}</span>
              </div>

              <div className="pt-6 space-y-4">
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">
                    Total Estimated Tonnage
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mt-1">
                    {result.totalMT}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    Equivalent to <strong className="text-purple-300">{result.totalKg}</strong>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800/80 text-xs text-neutral-300 font-mono">
                  {result.summary}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Estimate'}</span>
                </button>

                {onAddEstimateToEnquiry && (
                  <button
                    onClick={() => onAddEstimateToEnquiry(result.summary)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-sm shadow-purple-950"
                  >
                    <span>Add to Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <p className="text-[11px] text-neutral-500 text-center">
                Verified on our 80 MT weighbridge upon physical dispatch.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
