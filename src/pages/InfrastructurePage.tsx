import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { InfrastructureSection } from '../components/InfrastructureSection';
import { Warehouse, Scale, Truck, ShieldCheck, CheckCircle2, Clock, MapPin, FileText } from 'lucide-react';

interface InfrastructurePageProps {
  onOpenGeneralEnquiry: () => void;
  onNavigateToContact: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({
  onOpenGeneralEnquiry,
  onNavigateToContact
}) => {
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
            <span>Physical Yard & Verification</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                Logistics Yard & Physical Infrastructure
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                We do not operate as paper intermediaries. Our commercial strength is anchored by a massive 3.5-acre central distribution hub equipped with twin 15-ton overhead gantry cranes and a calibrated 80 MT electronic weighbridge ensuring 100% verified tonnage.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={onOpenGeneralEnquiry}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Schedule Yard Visit / Inspection</span>
              </button>
            </div>
          </div>

          {/* Logistics Snapshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800/80">
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-white">3.5 Acres</div>
              <div className="text-[11px] text-neutral-400">Covered & Open Stockyard</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-emerald-400">80 MT</div>
              <div className="text-[11px] text-neutral-400">Electronic Weighbridge</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-purple-400">Twin Cranes</div>
              <div className="text-[11px] text-neutral-400">15-Ton Overhead Gantries</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-white">18 Vehicles</div>
              <div className="text-[11px] text-neutral-400">Company Transport Fleet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Pillars and Yard Showcase */}
      <InfrastructureSection />

      {/* Physical Yard Location & Dispatch Timings Box */}
      <section className="py-12 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                <span>Depot Location & Dispatch Timings</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight font-display">
                Survey No. 82 Corridor — Heavy Industrial Estate
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Direct access to National Highway 53 ensures heavy multi-axle trailers enter and depart without city traffic bottlenecks, providing rapid guaranteed dispatch to your site.
              </p>
              <div className="pt-2 text-xs font-mono text-neutral-400">
                <span>Dispatch Hours: <strong className="text-white font-mono">{COMPANY_INFO.warehouse.hours}</strong></span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onNavigateToContact}
                className="w-full py-3 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg text-center cursor-pointer shadow-md shadow-purple-950"
              >
                View Directions & Contact Yard
              </button>
              <button
                onClick={onOpenGeneralEnquiry}
                className="w-full py-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-center cursor-pointer"
              >
                Request Material Dispatch Schedule
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

