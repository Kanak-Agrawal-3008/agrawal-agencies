import React from 'react';
import { ProductItem } from '../types';
import { X, CheckCircle2, Shield, FileText, Send, PhoneCall, Layers, Tag } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onEnquire
}) => {
  if (!isOpen || !product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Agrawal Agencies, I am enquiring about ${product.name} (${product.brand}). Please provide standard quotation and availability.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Ribbon */}
        <div className="bg-neutral-950 px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="text-purple-400 font-semibold">{product.brand}</span>
            <span>·</span>
            <span className="capitalize">{product.category.replace('-', ' ')}</span>
            {product.producerType && (
              <>
                <span>·</span>
                <span className="font-mono uppercase">{product.producerType}</span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close specification sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Title & Tagline */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight">
              {product.name}
            </h2>
            {product.tagline && (
              <p className="text-sm text-purple-400 font-medium">
                {product.tagline}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {product.description}
          </p>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            {/* Grades */}
            {product.grades && product.grades.length > 0 && (
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Available Grades
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.grades.map((grade) => (
                    <span 
                      key={grade}
                      className="text-xs font-mono text-white bg-neutral-900 border border-neutral-700/80 px-2.5 py-1 rounded"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Standards & Certifications */}
            {product.standards && product.standards.length > 0 && (
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Compliance & Standards
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.standards.map((std) => (
                    <span 
                      key={std}
                      className="text-xs font-mono text-purple-300 bg-purple-950/50 border border-purple-800/60 px-2.5 py-1 rounded"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Available Dimensions & Sizes */}
          {product.dimensions && product.dimensions.length > 0 && (
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Available Dimensions & Section Sizing
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {product.dimensions.map((dim) => (
                  <div 
                    key={dim}
                    className="text-xs font-mono text-neutral-200 bg-neutral-900/80 px-3 py-1.5 rounded border border-neutral-800 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <span className="truncate">{dim}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Product Features */}
          {product.features && product.features.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Key Engineering Highlights
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feat) => (
                  <div key={feat} className="text-xs text-neutral-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 space-y-2">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Recommended Applications & End Uses
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.applications.map((app) => (
                  <li key={app} className="text-xs text-neutral-300 flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quality & Weighbridge Guarantee Note */}
          <div className="flex items-center gap-3 p-3.5 rounded-lg bg-purple-950/20 border border-purple-900/40 text-xs text-neutral-300">
            <Shield className="w-4 h-4 text-purple-400 shrink-0" />
            <span>
              All deliveries are weighed on our certified <strong>80 MT On-Site Weighbridge</strong> and supplied with original Mill Test Certificates (MTC).
            </span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-neutral-950 px-6 py-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400">
            Unit: <span className="font-mono text-neutral-200">{product.unit || 'Metric Ton / Standard Length'}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 rounded-lg transition-colors"
            >
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950"
            >
              <FileText className="w-4 h-4" />
              <span>Request Price Quote</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
