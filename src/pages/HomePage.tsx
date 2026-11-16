import React from 'react';
import { Hero } from '../components/Hero';
import { KeyMetrics } from '../components/KeyMetrics';
import { BrandPartner, ProductCategory } from '../types';
import { BRANDS_DATA, CATEGORIES_CONFIG } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Scale, 
  Warehouse, 
  Calculator, 
  Building2, 
  CheckCircle2, 
  Phone, 
  FileText 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, params?: any) => void;
  onOpenGeneralEnquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenGeneralEnquiry }) => {
  return (
    <div className="bg-neutral-950">
      {/* 1. Hero Section */}
      <Hero
        onOpenEnquiry={onOpenGeneralEnquiry}
        onExploreProducts={() => onNavigate('products')}
      />

      {/* 2. Key Metrics Bar */}
      <KeyMetrics />

      {/* 3. Brands Teaser Showcase */}
      <section className="py-12 lg:py-16 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
                <span>Tier-1 Alliances</span>
                <span className="text-neutral-600">·</span>
                <span>Direct Mill Partners</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1 font-display">
                Our Collaborations & Brands
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                Direct authorized primary steel mills, proven secondary rolling facilities, and Prince Piping Systems.
              </p>
            </div>

            <button
              onClick={() => onNavigate('brands')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md shadow-purple-950"
            >
              <span>View All Brands & Sections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Featured Brands Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 pt-8">
            {BRANDS_DATA.slice(0, 4).map((brand) => (
              <div
                key={brand.id}
                onClick={() => onNavigate('brands', { brandId: brand.id })}
                className="bg-neutral-900/90 rounded-xl border border-neutral-800 hover:border-purple-600/60 p-5 xl:p-6 flex flex-col justify-between transition-all duration-200 group cursor-pointer relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-800">
                    <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                      {brand.producerType}
                    </span>
                    <span className="text-neutral-500 font-mono text-[10px]">MTC Certified</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mt-3">
                    {brand.name}
                  </h3>
                  <div className="text-xs text-purple-400/90 font-mono mt-0.5">
                    "{brand.tagline}"
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-3 mt-2 leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-purple-400 font-medium">
                  <span>Explore Brand Section</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Products Portfolio Preview */}
      <section className="py-12 lg:py-16 border-b border-neutral-800 bg-neutral-900/40">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
                <span>Wholesale Catalogue</span>
                <span className="text-neutral-600">·</span>
                <span>42+ Verified Lines</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1 font-display">
                Commercial Products Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                Ready physical inventory stocked across primary rebar, heavy structural sections, and complete Prince polymer plumbing.
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md shadow-purple-950"
            >
              <span>Explore Full Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            {CATEGORIES_CONFIG.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onNavigate('products', { category: cat.id })}
                className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:border-purple-600/70 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="font-mono text-purple-400">{cat.itemCount}</span>
                    <span className="text-[11px] text-neutral-500 uppercase">Catalogue Line</span>
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-tight group-hover:text-purple-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-purple-400 font-medium">
                  <span>View Items</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Steel Weight Calculator Teaser Strip */}
      <section className="py-12 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800 flex items-center justify-center text-purple-400 shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase font-display">
                  Steel Weight & Tonnage Estimator
                </h3>
                <p className="text-xs text-neutral-400 max-w-xl">
                  Calculate nominal standard rebar, flat, square, and round weights as per IS 1786 formula (d²/162) for accurate truck tonnage planning.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('calculator')}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950 whitespace-nowrap"
            >
              <span>Launch Calculator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Physical Infrastructure & Weighbridge Highlight */}
      <section className="py-12 lg:py-16 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
                <Warehouse className="w-4 h-4" />
                <span>Physical Logistics & Certified Tonnage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-display">
                Central 3.5-Acre Logistics Yard & 80 MT Weighbridge
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                Every metric ton dispatched from Agrawal Agencies is weighed on our computerized, automated 80 MT weighbridge with digital calibration slips. We maintain physical stock with twin 15-ton overhead gantry cranes for instant turnaround.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Twin 15-Ton Gantry Cranes</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Covered PVC & CPVC Storage</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>18 Dedicated Heavy Trailers</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('infrastructure')}
                className="w-full py-3 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg text-center cursor-pointer shadow-md shadow-purple-950"
              >
                Explore Infrastructure & 6 Pillars
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-center cursor-pointer"
              >
                Visit Yard & Weighbridge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Corporate Heritage / About Teaser */}
      <section className="py-12 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">Established 1988 · Raipur, Chhattisgarh</span>
              <h3 className="text-xl font-bold text-white uppercase font-display">
                Over 35 Years of Generational Integrity
              </h3>
              <p className="text-xs text-neutral-400 max-w-xl">
                Learn more about our founders, leadership team, and the 25-member sales engineering desk serving 450+ contractors and developers.
              </p>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>About Us & Leadership</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Direct Commercial Contact Strip */}
      <section className="py-12 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white uppercase font-display">
              Ready to Order or Need an Instant Rate Card?
            </h3>
            <p className="text-xs text-neutral-400">
              Call our central sales hotline <strong className="text-white font-mono">{COMPANY_INFO.salesHotline}</strong> or send your BOQ for immediate mill quotation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg cursor-pointer shadow-md shadow-purple-950"
            >
              Contact Us & Locations
            </button>
            <button
              onClick={onOpenGeneralEnquiry}
              className="px-5 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-lg cursor-pointer"
            >
              Send Online RFQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

