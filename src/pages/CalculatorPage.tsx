import React from 'react';
import { SteelWeightCalculator } from '../components/SteelWeightCalculator';
import { Calculator, Scale, FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface CalculatorPageProps {
  onAddEstimateToEnquiry: (summaryText: string) => void;
  onOpenGeneralEnquiry: () => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onAddEstimateToEnquiry,
  onOpenGeneralEnquiry
}) => {
  // BIS standard unit weights per metre (d^2 / 162.28)
  const bisRebarWeights = [
    { dia: '8 mm', wtPerM: '0.395 kg/m', fullBar12m: '4.74 kg', bundlePcs: '10 pcs' },
    { dia: '10 mm', wtPerM: '0.617 kg/m', fullBar12m: '7.40 kg', bundlePcs: '7 pcs' },
    { dia: '12 mm', wtPerM: '0.888 kg/m', fullBar12m: '10.66 kg', bundlePcs: '5 pcs' },
    { dia: '16 mm', wtPerM: '1.578 kg/m', fullBar12m: '18.94 kg', bundlePcs: '3 pcs' },
    { dia: '20 mm', wtPerM: '2.466 kg/m', fullBar12m: '29.59 kg', bundlePcs: '2 pcs' },
    { dia: '25 mm', wtPerM: '3.853 kg/m', fullBar12m: '46.24 kg', bundlePcs: '1 pc' },
    { dia: '32 mm', wtPerM: '6.313 kg/m', fullBar12m: '75.76 kg', bundlePcs: '1 pc' }
  ];

  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Page Header / Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border-b border-neutral-800 pt-10 pb-12 lg:py-16">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
            <span>Agrawal Agencies</span>
            <span className="text-neutral-600">/</span>
            <span>Engineering Utilities</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                Steel Weight & Tonnage Estimator
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Standard theoretical weight calculations as per Bureau of Indian Standards (BIS IS 1786:2008 & IS 2062:2011). Quickly compute bar tonnage, trailer loading requirements, and BOQ estimates for job-site deliveries.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={onOpenGeneralEnquiry}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Enquire with BOQ</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Component */}
      <SteelWeightCalculator onAddEstimateToEnquiry={onAddEstimateToEnquiry} />

      {/* BIS Standard Nominal Weight Quick Reference Table */}
      <section className="py-12 lg:py-16 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="pb-6 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
                Standard Engineering Specifications
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mt-1 font-display">
                IS 1786 Standard TMT Rebar Weight Chart
              </h2>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              Formula: Weight (kg/m) = d² / 162.28 · Tolerance: ±7% to ±3%
            </p>
          </div>

          <div className="pt-6 overflow-x-auto">
            <table className="w-full text-left text-xs border border-neutral-800 rounded-xl overflow-hidden">
              <thead className="bg-neutral-900 text-neutral-300 font-mono uppercase text-[11px] border-b border-neutral-800">
                <tr>
                  <th className="py-3 px-4">Bar Diameter</th>
                  <th className="py-3 px-4">Nominal Weight per Metre</th>
                  <th className="py-3 px-4">Standard 12m Bar Weight</th>
                  <th className="py-3 px-4">Approx. Mill Bundle Pack</th>
                  <th className="py-3 px-4">Raipur Stock Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 font-mono">
                {bisRebarWeights.map((row) => (
                  <tr key={row.dia} className="hover:bg-neutral-900/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">{row.dia}</td>
                    <td className="py-3 px-4 text-purple-400 font-bold">{row.wtPerM}</td>
                    <td className="py-3 px-4 text-neutral-300">{row.fullBar12m}</td>
                    <td className="py-3 px-4 text-neutral-400">{row.bundlePcs}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Ready in Yard</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
  );
};

