import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Scale, ShieldCheck, Truck, Users, Building, HeartHandshake, Warehouse, CheckCircle2 } from 'lucide-react';

export const InfrastructureSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    'Family-Owned Enterprise': HeartHandshake,
    'On-Site 80 MT Weighbridge': Scale,
    'Uncompromising Quality Assurance': ShieldCheck,
    'Dedicated Administrative Headquarters': Building,
    'Expert Sales Professionals': Users,
    'Integrated In-House Logistics': Truck
  };

  return (
    <section id="infrastructure" className="bg-neutral-950 py-12 lg:py-16 xl:py-20 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 lg:pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              <span>Page 02 / Corporate Infrastructure</span>
              <span className="text-neutral-600">·</span>
              <span>Physical Yard & Verification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1.5 font-display">
              The Company Pillars
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400 mt-1.5 max-w-2xl">
              Anchored by physical assets, automated weighing, in-house logistics, and generational integrity. We do not operate as paper brokers; every metric ton is physically inventoried in our yard.
            </p>
          </div>

          <div className="p-2.5 lg:p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Warehouse Status: Fully Operational</span>
          </div>
        </div>

        {/* 6 Core Pillars from Catalogue Page 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 pt-8 lg:pt-10">
          {COMPANY_INFO.companyPillars.map((pillar) => {
            const Icon = iconMap[pillar.title] || ShieldCheck;
            return (
              <div 
                key={pillar.title}
                className="bg-neutral-900/90 rounded-xl border border-neutral-800 hover:border-purple-700/60 p-6 flex flex-col justify-between transition-colors group relative overflow-hidden"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-800/80 transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                    {pillar.subtitle}
                  </span>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2.5">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>Standard Operating Protocol</span>
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 3.5-Acre Logistics Facility Highlight Box */}
        <div className="mt-10 lg:mt-12 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 xl:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest font-mono">
                <Warehouse className="w-4 h-4" />
                <span>Central Logistics Hub</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight">
                3.5-Acre Logistics Yard & Weighbridge Facility
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Our massive central facility is engineered for high-throughput heavy steel and piping logistics. Operating dedicated overhead gantry cranes, covered weather-shielded racking for PVC and sheets, and a computerized 80 MT weighbridge, we turn around trailers and site deliveries within hours of order confirmation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {COMPANY_INFO.warehouse.facilities.map((fac) => (
                  <div key={fac} className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-950 p-6 rounded-xl border border-neutral-800/90 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-3 flex items-center justify-between">
                <span>Facility Timings & Verification</span>
                <span className="font-mono text-purple-400 text-[11px]">80 MT Certified</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px]">Dispatch Operations</div>
                  <div className="text-white font-mono mt-0.5">{COMPANY_INFO.warehouse.hours}</div>
                </div>

                <div>
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px]">Administrative Order Clearance</div>
                  <div className="text-white font-mono mt-0.5">{COMPANY_INFO.headquarters.hours}</div>
                </div>

                <div>
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px]">Weighbridge Certification</div>
                  <div className="text-neutral-300 mt-0.5">
                    Automated calibration with stamped digital weigh slips issued for every outbound trailer.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <span className="text-[11px] text-neutral-400 font-mono">
                  Location: {COMPANY_INFO.warehouse.address}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
