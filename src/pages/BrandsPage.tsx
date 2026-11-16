import React, { useState, useEffect } from 'react';
import { BRANDS_DATA, PRODUCTS_DATA } from '../data/products';
import { ProductItem, BrandPartner } from '../types';
import { ProductCard } from '../components/ProductCard';
import { COMPANY_INFO } from '../data/company';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  PhoneCall, 
  Warehouse, 
  ExternalLink, 
  Layers, 
  Award,
  Filter,
  Building2,
  ChevronRight
} from 'lucide-react';

interface BrandsPageProps {
  onEnquireProduct: (product: ProductItem) => void;
  onViewProductDetails: (product: ProductItem) => void;
  cartProductIds: string[];
  onToggleCart: (product: ProductItem) => void;
  onOpenGeneralEnquiry: () => void;
  initialSelectedBrand?: string;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({
  onEnquireProduct,
  onViewProductDetails,
  cartProductIds,
  onToggleCart,
  onOpenGeneralEnquiry,
  initialSelectedBrand
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'primary' | 'secondary' | 'piping' | 'civil'>('all');
  const [selectedBrandId, setSelectedBrandId] = useState<string>(initialSelectedBrand || 'all');

  useEffect(() => {
    if (initialSelectedBrand) {
      setSelectedBrandId(initialSelectedBrand);
      // scroll to brand section
      const elem = document.getElementById(`brand-${initialSelectedBrand}`);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialSelectedBrand]);

  // Filter brands based on producer type
  const filteredBrands = BRANDS_DATA.filter((brand) => {
    if (selectedBrandId !== 'all') {
      return brand.id === selectedBrandId;
    }
    if (activeCategoryFilter === 'all') return true;
    if (activeCategoryFilter === 'primary') return brand.producerType === 'Primary Producer';
    if (activeCategoryFilter === 'secondary') return brand.producerType === 'Secondary Producer';
    if (activeCategoryFilter === 'piping') return brand.producerType === 'Piping Systems';
    if (activeCategoryFilter === 'civil') return brand.producerType === 'Precast & Infrastructure';
    return true;
  });

  // Helper to fetch all matching products for a brand
  const getProductsForBrand = (brand: BrandPartner): ProductItem[] => {
    const brandName = brand.name.toLowerCase();
    const brandId = brand.id.toLowerCase();

    return PRODUCTS_DATA.filter((product) => {
      const pBrand = product.brand.toLowerCase();
      const pName = product.name.toLowerCase();
      
      if (brandId === 'tata-tiscon') return pBrand.includes('tata');
      if (brandId === 'jsw-neosteel') return pBrand.includes('jsw');
      if (brandId === 'sail-tmt') return pBrand.includes('sail');
      if (brandId === 'kalika-steel') return pBrand.includes('kalika');
      if (brandId === 'uma-tmt') return pBrand.includes('uma');
      if (brandId === 'srj-steel') return pBrand.includes('srj');
      if (brandId === 'prince-pipes') return pBrand.includes('prince');
      if (brandId === 'bharat-precast') return pBrand.includes('bharat');

      return pBrand.includes(brandName) || pName.includes(brandName);
    });
  };

  // Helper for brand badge styling
  const getBrandAccentColor = (producerType: string) => {
    switch (producerType) {
      case 'Primary Producer':
        return {
          border: 'border-purple-600/60',
          badge: 'bg-purple-950/80 text-purple-300 border-purple-700/60',
          indicator: 'bg-purple-600'
        };
      case 'Secondary Producer':
        return {
          border: 'border-slate-700/60',
          badge: 'bg-slate-900 text-slate-300 border-slate-700/60',
          indicator: 'bg-slate-500'
        };
      case 'Piping Systems':
        return {
          border: 'border-blue-700/60',
          badge: 'bg-blue-950/80 text-blue-300 border-blue-700/60',
          indicator: 'bg-blue-600'
        };
      case 'Precast & Infrastructure':
        return {
          border: 'border-amber-700/60',
          badge: 'bg-amber-950/80 text-amber-300 border-amber-700/60',
          indicator: 'bg-amber-600'
        };
      default:
        return {
          border: 'border-neutral-800',
          badge: 'bg-neutral-900 text-neutral-300 border-neutral-800',
          indicator: 'bg-neutral-500'
        };
    }
  };

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
            <span>Manufacturer Alliances</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                Our Collaborations & Partner Brands
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Direct authorized wholesale relationships with India’s top primary steelmakers, certified regional secondary rolling mills, and Prince Piping Systems. Every ton and every length is authenticated with official Mill Test Certificates (MTC) and inspected at our central 3.5-acre logistics yard.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenGeneralEnquiry}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Brand Rate Card</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Pill Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800/80">
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-white">8 Brands</div>
              <div className="text-[11px] text-neutral-400">Primary, Secondary & Piping</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-purple-400">100% MTC</div>
              <div className="text-[11px] text-neutral-400">IS 1786 & IS 2062 Tested</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-white">80 MT</div>
              <div className="text-[11px] text-neutral-400">Computerized Weighbridge</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-emerald-400">3.5 Acres</div>
              <div className="text-[11px] text-neutral-400">Ready Stock Depot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Navigation & Filter Bar */}
      <section className="sticky top-16 lg:top-18 z-30 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 py-3 shadow-md shadow-black/30">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Category Type Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
            <button
              onClick={() => {
                setActiveCategoryFilter('all');
                setSelectedBrandId('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'all' && selectedBrandId === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Brands (8)
            </button>
            <button
              onClick={() => {
                setActiveCategoryFilter('primary');
                setSelectedBrandId('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'primary' && selectedBrandId === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Primary Steel (3)
            </button>
            <button
              onClick={() => {
                setActiveCategoryFilter('secondary');
                setSelectedBrandId('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'secondary' && selectedBrandId === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Secondary Steel (3)
            </button>
            <button
              onClick={() => {
                setActiveCategoryFilter('piping');
                setSelectedBrandId('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'piping' && selectedBrandId === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Plumbing & Piping (1)
            </button>
            <button
              onClick={() => {
                setActiveCategoryFilter('civil');
                setSelectedBrandId('all');
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'civil' && selectedBrandId === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Civil & Precast (1)
            </button>
          </div>

          {/* Direct Brand Selector Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <span className="text-neutral-500 font-mono text-[11px] whitespace-nowrap hidden lg:inline">Jump to:</span>
            {BRANDS_DATA.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBrandId(b.id);
                  const elem = document.getElementById(`brand-${b.id}`);
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer border ${
                  selectedBrandId === b.id
                    ? 'bg-purple-900/60 border-purple-500 text-purple-200 font-bold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Content: Dedicated Section for EACH Brand */}
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 lg:py-16 space-y-16 lg:space-y-20">
        {filteredBrands.map((brand) => {
          const products = getProductsForBrand(brand);
          const styling = getBrandAccentColor(brand.producerType);

          return (
            <article 
              key={brand.id}
              id={`brand-${brand.id}`}
              className="bg-neutral-900/60 rounded-2xl border border-neutral-800 overflow-hidden shadow-xl"
            >
              {/* Colored Category Top Header Line */}
              <div className={`h-1.5 w-full ${styling.indicator}`} />

              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Brand Header & Overview */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-neutral-800">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className={`px-2.5 py-0.5 rounded font-mono uppercase text-[11px] border ${styling.badge}`}>
                        {brand.producerType}
                      </span>
                      <span className="text-neutral-600">·</span>
                      <span className="text-neutral-400 font-medium">{brand.category}</span>
                      {brand.accreditation && (
                        <>
                          <span className="text-neutral-600">·</span>
                          <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            {brand.accreditation}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
                      {brand.name}
                    </h2>
                    
                    <p className="text-sm font-semibold text-purple-400 font-mono">
                      "{brand.tagline}"
                    </p>

                    <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
                      {brand.description}
                    </p>
                  </div>

                  {/* Brand Action & Hotlines */}
                  <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5 lg:w-64">
                    <button
                      onClick={() => {
                        onOpenGeneralEnquiry();
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-sm shadow-purple-950"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Enquire for {brand.name}</span>
                    </button>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Agrawal Agencies, I am looking for current rates and ready availability for ${brand.name} products.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 rounded-lg transition-colors"
                    >
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>

                {/* Brand Capabilities & Material Metallurgy Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                      Key Lines Supplied
                    </div>
                    <ul className="text-xs text-neutral-200 space-y-1 font-medium">
                      {brand.productsSupplied.map((prod, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                          <span>{prod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                      Quality Standards & Metallurgy
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {brand.producerType === 'Primary Producer' && '100% Virgin iron ore blast furnace production ensuring minimal tramp elements, high elongation and superior seismic resistance.'}
                      {brand.producerType === 'Secondary Producer' && 'Advanced automated thermo-mechanical treatment providing high tensile yield with cost-efficiency for residential and commercial framing.'}
                      {brand.producerType === 'Piping Systems' && 'Certified compound polymer formulations with NSF potable water certification, high burst ratings, and zero lead content.'}
                      {brand.producerType === 'Precast & Infrastructure' && 'Machine-vibrated and centrifugally spun precast components adhering to IS 458:2003 and BS EN 124 load classes.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                      Warehouse & Logistics Fulfillment
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Physical ready stock stored at our Survey No. 82 Corridor 3.5-Acre Logistics Yard in Raipur. Outbound dispatches weighed and certified on our computerized 80 MT weighbridge.
                    </p>
                  </div>
                </div>

                {/* Products Available from this Brand */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-display">
                        Available Products ({products.length > 0 ? products.length : brand.productsSupplied.length} Lines)
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Select any item to view detailed chemical & physical specifications or add to your project quote list.
                      </p>
                    </div>
                  </div>

                  {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onEnquire={onEnquireProduct}
                          onViewDetails={onViewProductDetails}
                          isInCart={cartProductIds.includes(product.id)}
                          onToggleCart={onToggleCart}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 text-center space-y-3">
                      <p className="text-xs text-neutral-300">
                        Multiple specification grades ({brand.productsSupplied.join(', ')}) are stocked directly in our yard.
                      </p>
                      <button
                        onClick={onOpenGeneralEnquiry}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Request Specific Size & Rate Card for {brand.name}</span>
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

