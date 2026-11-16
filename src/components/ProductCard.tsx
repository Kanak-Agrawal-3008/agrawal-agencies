import React from 'react';
import { ProductItem } from '../types';
import { FileText, Plus, Check, ArrowRight, Layers, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onEnquire: (product: ProductItem) => void;
  onViewDetails: (product: ProductItem) => void;
  isInCart?: boolean;
  onToggleCart?: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEnquire,
  onViewDetails,
  isInCart = false,
  onToggleCart
}) => {
  // Category styling helper
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'reinforcement-steel':
        return 'text-purple-400';
      case 'structural-steel':
        return 'text-slate-300';
      case 'plumbing-solutions':
        return 'text-blue-400';
      case 'civil-infrastructure':
        return 'text-amber-400';
      default:
        return 'text-neutral-400';
    }
  };

  // Render authentic geometric industrial profile icon
  const renderProfileIcon = () => {
    if (product.category === 'reinforcement-steel') {
      return (
        <svg className="w-12 h-12 text-purple-400/90" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
          <circle cx="32" cy="32" r="16" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
          {/* Ribs pattern */}
          <line x1="18" y1="20" x2="46" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="28" x2="48" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="36" x2="48" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="18" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    if (product.id.includes('angle')) {
      return (
        <svg className="w-12 h-12 text-slate-300" viewBox="0 0 64 64" fill="none">
          <path d="M14 12V50H52V42H22V12H14Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="miter" />
          <line x1="22" y1="12" x2="22" y2="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );
    }
    if (product.id.includes('channel')) {
      return (
        <svg className="w-12 h-12 text-slate-300" viewBox="0 0 64 64" fill="none">
          <path d="M48 14H16V50H48V42H24V22H48V14Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      );
    }
    if (product.id.includes('beam')) {
      return (
        <svg className="w-12 h-12 text-slate-300" viewBox="0 0 64 64" fill="none">
          <path d="M12 12H52V20H36V44H52V52H12V44H28V20H12V12Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      );
    }
    if (product.id.includes('square')) {
      return (
        <svg className="w-12 h-12 text-slate-300" viewBox="0 0 64 64" fill="none">
          <rect x="14" y="14" width="36" height="36" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" />
          <rect x="22" y="22" width="20" height="20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    }
    if (product.id.includes('pipe') || product.category === 'plumbing-solutions') {
      return (
        <svg className="w-12 h-12 text-blue-400" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="22" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="32" x2="18" y2="32" stroke="currentColor" strokeWidth="2" />
          <line x1="46" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    }
    return (
      <svg className="w-12 h-12 text-neutral-400" viewBox="0 0 64 64" fill="none">
        <polygon points="32,10 54,22 54,46 32,58 10,46 10,22" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    );
  };

  return (
    <div className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:shadow-black/60 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Visual Header with Category & Graphic Profile */}
      <div className="p-5 pb-0">
        
        {/* Zero-Pill Metadata Line */}
        <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-neutral-800/80">
          <div className="flex items-center gap-1.5 font-medium">
            <span className={getCategoryColor(product.category)}>
              {product.brand}
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-300">
              {product.subCategory || (product.category === 'structural-steel' ? 'Structural' : 'Wholesale')}
            </span>
          </div>

          {/* Producer / Specification marker */}
          {product.producerType && (
            <span className="text-[11px] font-mono text-neutral-400 uppercase">
              {product.producerType === 'primary' ? 'Primary' : product.producerType === 'secondary' ? 'Secondary' : 'Standard'}
            </span>
          )}
        </div>

        {/* Profile Graphic & Title */}
        <div className="pt-4 flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/90 shrink-0 group-hover:border-purple-800/60 transition-colors">
            {renderProfileIcon()}
          </div>
          
          <div className="space-y-1">
            <h3 
              onClick={() => onViewDetails(product)}
              className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer leading-snug"
            >
              {product.name}
            </h3>
            <p className="text-xs text-neutral-400 line-clamp-2">
              {product.tagline || product.description}
            </p>
          </div>
        </div>

        {/* Specifications Quick Preview */}
        <div className="pt-4 space-y-2 min-h-[4.75rem]">
          {product.grades && product.grades.length > 0 && (
            <div className="flex items-baseline gap-2 text-xs">
              <span className="text-neutral-500 shrink-0 font-medium">Grades:</span>
              <span className="text-neutral-200 font-mono text-[11px] truncate">
                {product.grades.join(' · ')}
              </span>
            </div>
          )}

          {product.dimensions && product.dimensions.length > 0 && (
            <div className="flex items-baseline gap-2 text-xs">
              <span className="text-neutral-500 shrink-0 font-medium">Sizes:</span>
              <span className="text-neutral-300 font-mono text-[11px] truncate">
                {product.dimensions.slice(0, 3).join(', ')}
                {product.dimensions.length > 3 && ` +${product.dimensions.length - 3} more`}
              </span>
            </div>
          )}

          {product.standards && product.standards.length > 0 && (
            <div className="flex items-baseline gap-2 text-xs">
              <span className="text-neutral-500 shrink-0 font-medium">Standard:</span>
              <span className="text-neutral-300 font-mono text-[11px] truncate">
                {product.standards[0]}
              </span>
            </div>
          )}
        </div>

      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-4 mt-4 border-t border-neutral-800/80 bg-neutral-950/40 flex items-center justify-between gap-2">
        <button
          onClick={() => onViewDetails(product)}
          className="text-xs text-neutral-400 hover:text-white font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>View Specs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {onToggleCart && (
            <button
              onClick={() => onToggleCart(product)}
              className={`p-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                isInCart 
                  ? 'bg-purple-900/60 border-purple-600 text-purple-200' 
                  : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
              title={isInCart ? 'In Quote List' : 'Add to Quote List'}
            >
              {isInCart ? <Check className="w-4 h-4 text-purple-400" /> : <Plus className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={() => onEnquire(product)}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap shadow-sm shadow-purple-950"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>

    </div>
  );
};
