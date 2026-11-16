import React from 'react';
import { ProductCatalog } from '../components/ProductCatalog';
import { ProductItem, ProductCategory } from '../types';
import { COMPANY_INFO } from '../data/company';
import { FileText, Phone, ArrowRight, ShieldCheck, Scale, Warehouse } from 'lucide-react';

interface ProductsPageProps {
  onEnquireProduct: (product: ProductItem) => void;
  onViewProductDetails: (product: ProductItem) => void;
  cartProductIds: string[];
  onToggleCart: (product: ProductItem) => void;
  selectedCategoryProp?: ProductCategory | 'all';
  onOpenGeneralEnquiry: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onEnquireProduct,
  onViewProductDetails,
  cartProductIds,
  onToggleCart,
  selectedCategoryProp = 'all',
  onOpenGeneralEnquiry
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
            <span>Commercial Product Portfolio</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                Steel & Plumbing Product Portfolio
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                42+ verified product lines covering Primary and Secondary TMT rebars, heavy structural sections (ISMB, ISMC, Angles, Plates), and complete Prince Piping solutions. Real-time availability from our 3.5-acre central warehouse in Raipur with certified MTC compliance.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenGeneralEnquiry}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Submit Bill of Materials (BOM)</span>
              </button>
            </div>
          </div>

          {/* Key Assurance Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800/80">
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">100% Tested MTC</div>
                <div className="text-[10px] text-neutral-400">IS 1786 & IS 2062</div>
              </div>
            </div>

            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800 flex items-center gap-2.5">
              <Scale className="w-4 h-4 text-purple-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">80 MT Weighbridge</div>
                <div className="text-[10px] text-neutral-400">Certified Tonnage</div>
              </div>
            </div>

            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800 flex items-center gap-2.5">
              <Warehouse className="w-4 h-4 text-purple-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">3.5-Acre Depot</div>
                <div className="text-[10px] text-neutral-400">Immediate Ready Stock</div>
              </div>
            </div>

            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800 flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">25-Member Desk</div>
                <div className="text-[10px] text-neutral-400">Immediate Rate Cards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Catalog Component */}
      <ProductCatalog
        onEnquireProduct={onEnquireProduct}
        onViewProductDetails={onViewProductDetails}
        cartProductIds={cartProductIds}
        onToggleCart={onToggleCart}
        selectedCategoryProp={selectedCategoryProp}
      />
    </div>
  );
};

