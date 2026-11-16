import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, CATEGORIES_CONFIG } from '../data/products';
import { ProductItem, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Search, Filter, X, Layers, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

interface ProductCatalogProps {
  onEnquireProduct: (product: ProductItem) => void;
  onViewProductDetails: (product: ProductItem) => void;
  cartProductIds: string[];
  onToggleCart: (product: ProductItem) => void;
  selectedCategoryProp?: ProductCategory | 'all';
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onEnquireProduct,
  onViewProductDetails,
  cartProductIds,
  onToggleCart,
  selectedCategoryProp = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(selectedCategoryProp);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  // Sync category prop if updated from external triggers
  React.useEffect(() => {
    if (selectedCategoryProp) {
      setSelectedCategory(selectedCategoryProp);
    }
  }, [selectedCategoryProp]);

  // Extract distinct brand list
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    PRODUCTS_DATA.forEach(p => brandsSet.add(p.brand));
    return Array.from(brandsSet);
  }, []);

  // Filter products by category, brand, and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'all' && !product.brand.toLowerCase().includes(selectedBrand.toLowerCase())) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesTagline = product.tagline?.toLowerCase().includes(query) ?? false;
        const matchesGrades = product.grades?.some(g => g.toLowerCase().includes(query)) ?? false;
        const matchesDimensions = product.dimensions?.some(d => d.toLowerCase().includes(query)) ?? false;
        return matchesName || matchesBrand || matchesDesc || matchesTagline || matchesGrades || matchesDimensions;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  return (
    <section id="products" className="bg-neutral-950 py-12 lg:py-16 xl:py-20 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 lg:pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              <span>Complete Commercial Catalogue</span>
              <span className="text-neutral-600">·</span>
              <span>42+ Verified Product Lines</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1.5 font-display">
              Our Product Portfolio
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400 mt-1.5 max-w-2xl">
              Strictly catalogued across reinforcement steel, heavy structural sections, and complete Prince Piping solutions. Real-time availability from our 3.5-acre warehouse.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 shrink-0">
            <span>Showing <strong className="text-white font-bold">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} products</span>
          </div>
        </div>

        {/* 4 Big Category Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 xl:gap-4 py-6 lg:py-8">
          {CATEGORIES_CONFIG.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                className={`p-4.5 xl:p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-purple-950/40 border-purple-600 shadow-lg shadow-purple-950/50'
                    : 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="font-mono text-purple-400">{cat.itemCount}</span>
                    <span className="text-[11px] uppercase tracking-wider">{isSelected ? 'Active' : 'Click to Filter'}</span>
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-purple-400 font-medium">
                  <span>Explore Items</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Search, Filter Bar & Brand Selectors */}
        <div className="pt-2 pb-6 lg:pb-8 flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3.5">
          
          {/* Category Tabs (Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Categories ({PRODUCTS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('reinforcement-steel')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'reinforcement-steel'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Reinforcement Steel
            </button>
            <button
              onClick={() => setSelectedCategory('structural-steel')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'structural-steel'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Structural Steel
            </button>
            <button
              onClick={() => setSelectedCategory('plumbing-solutions')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'plumbing-solutions'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Plumbing Solutions
            </button>
            <button
              onClick={() => setSelectedCategory('civil-infrastructure')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'civil-infrastructure'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Civil & Precast
            </button>
          </div>

          {/* Search & Brand Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rebar, beams, CPVC, sizes..."
                className="w-full pl-9 pr-8 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white cursor-pointer"
                  title="Clear Search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Brand Filter Dropdown */}
            <div className="w-full sm:w-48 shrink-0">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-purple-600 transition-colors cursor-pointer"
              >
                <option value="all">All Brands ({availableBrands.length})</option>
                {availableBrands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
            {filteredProducts.map((product) => (
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
          <div className="py-16 text-center rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-4">
            <p className="text-neutral-400 text-sm">
              No products match "{searchQuery}" under the selected filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedBrand('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
