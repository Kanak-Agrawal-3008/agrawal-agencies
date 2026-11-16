import React, { useState } from 'react';
import { BRANDS_DATA } from '../data/products';
import { CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';

interface BrandCollabProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandCollab: React.FC<BrandCollabProps> = ({ onSelectBrand }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'primary' | 'secondary' | 'piping'>('all');

  const filteredBrands = BRANDS_DATA.filter((brand) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'primary') return brand.producerType === 'Primary Producer';
    if (activeTab === 'secondary') return brand.producerType === 'Secondary Producer';
    if (activeTab === 'piping') return brand.producerType === 'Piping Systems' || brand.producerType === 'Precast & Infrastructure';
    return true;
  });

  return (
    <section id="brands" className="bg-neutral-950 py-12 lg:py-16 xl:py-20 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 lg:pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              <span>Page 02 / Strategic Alliances</span>
              <span className="text-neutral-600">·</span>
              <span>Direct Manufacturer Supply</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1.5 font-display">
              Our Collaborations
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400 mt-1.5 max-w-2xl">
              We partner with India's premier primary steelmakers, trusted regional secondary rolling mills, and Prince Piping Systems to guarantee certified origin, chemistry, and continuous supply.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented control) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Brands (8)
            </button>
            <button
              onClick={() => setActiveTab('primary')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'primary'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Primary Steel
            </button>
            <button
              onClick={() => setActiveTab('secondary')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'secondary'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Secondary Steel
            </button>
            <button
              onClick={() => setActiveTab('piping')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'piping'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Plumbing & Drainage
            </button>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 pt-8 lg:pt-10">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-neutral-900/90 rounded-xl border border-neutral-800 hover:border-purple-700/60 p-5 xl:p-6 flex flex-col justify-between transition-all duration-200 group relative overflow-hidden"
            >
              {/* Subtle top indicator line based on category */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 ${
                  brand.producerType === 'Primary Producer' 
                    ? 'bg-purple-600' 
                    : brand.producerType === 'Secondary Producer' 
                    ? 'bg-slate-500' 
                    : 'bg-emerald-600'
                }`}
              />

              <div>
                {/* Brand Name Lockup & Logo presentation */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-purple-400 font-mono">
                      {brand.tagline}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-950 px-2 py-1 rounded border border-neutral-800 shrink-0">
                    {brand.producerType.split(' ')[0]}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {brand.description}
                </p>

                {/* Products supplied */}
                <div className="space-y-1.5 pt-3 border-t border-neutral-800/80">
                  <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Supplied Portfolio
                  </div>
                  <ul className="space-y-1">
                    {brand.productsSupplied.map((prod) => (
                      <li key={prod} className="text-xs text-neutral-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                        <span className="truncate">{prod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with Accreditation & Filter Action */}
              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] text-neutral-400 truncate max-w-[170px]" title={brand.accreditation}>
                  {brand.accreditation || 'Certified Supplier'}
                </span>
                {onSelectBrand && (
                  <button
                    onClick={() => onSelectBrand(brand.name)}
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium cursor-pointer"
                  >
                    <span>View Lines</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Primary vs Secondary Transparency Note */}
        <div className="mt-10 p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 text-xs text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <Shield className="w-5 h-5 text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <strong className="text-white">Commercial Grade Transparency:</strong> We stock both Primary Producer steel (Blast Furnace / Virgin Ore from Tata, SAIL, JSW) for critical engineering infrastructure and certified Secondary Producer steel (Kalika, Uma, SRJ) for high-efficiency cost optimization.
            </div>
          </div>
          <div className="shrink-0 text-neutral-400 font-mono text-[11px]">
            100% Tested MTC Available
          </div>
        </div>

      </div>
    </section>
  );
};
