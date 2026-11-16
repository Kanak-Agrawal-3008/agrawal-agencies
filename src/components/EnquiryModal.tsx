import React, { useState, useEffect } from 'react';
import { ProductItem, EnquiryItem } from '../types';
import { COMPANY_INFO } from '../data/company';
import { X, Send, CheckCircle2, MessageSquare, Trash2, Plus, PhoneCall, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: ProductItem | null;
  enquiryList?: ProductItem[];
  onRemoveFromList?: (productId: string) => void;
  initialCustomText?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  enquiryList = [],
  onRemoveFromList,
  initialCustomText = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [customMessage, setCustomMessage] = useState(initialCustomText);
  const [quantity, setQuantity] = useState('10 MT');
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  useEffect(() => {
    if (initialCustomText) {
      setCustomMessage(prev => prev ? `${prev}\n${initialCustomText}` : initialCustomText);
    }
  }, [initialCustomText]);

  if (!isOpen) return null;

  // Determine items to enquire about
  const itemsToEnquire = selectedProduct ? [selectedProduct] : enquiryList;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const generatedId = `AA-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(generatedId);
    setSubmitted(true);
  };

  const handleWhatsAppEnquiry = () => {
    const productNames = itemsToEnquire.map(p => `${p.name} (${p.brand})`).join(', ') || 'Building Materials';
    const message = `*NEW B2B ENQUIRY — AGRAWAL AGENCIES*
*Name:* ${fullName || 'Buyer'}
*Company:* ${companyName || 'Not Specified'}
*Phone:* ${phone || 'Not Specified'}
*Email:* ${email || 'Not Specified'}
*Project Location:* ${projectLocation || 'Raipur / Central India'}
*Required Products:* ${productNames}
*Estimated Quantity:* ${quantity}
*Requirement Details:* ${customMessage || 'Please provide rates and dispatch timeline.'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-neutral-950 px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight">
              Request Price Quotation / RFQ
            </h3>
            <p className="text-xs text-neutral-400">
              Direct Wholesale Desk · Agrawal Agencies (Est. 1988)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close Enquiry Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h4 className="text-2xl font-bold text-white font-display uppercase tracking-tight">
              Enquiry Received Successfully
            </h4>
            
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{fullName}</strong>. Your quotation request has been assigned reference ID:
            </p>

            <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg max-w-xs mx-auto text-sm font-mono text-purple-400 font-bold tracking-wider">
              {rfqNumber}
            </div>

            <p className="text-xs text-neutral-400 max-w-md mx-auto">
              Our 25-member sales engineering desk is reviewing your specifications and will respond with certified mill rates and freight timeline within 2 business hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Follow Up on WhatsApp</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
              >
                <span>Close Window</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {/* Selected Products List */}
            {itemsToEnquire.length > 0 && (
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  <span>Selected Products ({itemsToEnquire.length})</span>
                  <span className="text-[11px] font-mono text-purple-400">Ready for Quotation</span>
                </div>
                
                <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  {itemsToEnquire.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-center justify-between gap-2 p-2 rounded bg-neutral-900/90 text-xs border border-neutral-800"
                    >
                      <div className="truncate">
                        <span className="font-bold text-white">{item.name}</span>
                        <span className="text-neutral-400 ml-1.5 font-mono text-[11px]">({item.brand})</span>
                      </div>
                      {onRemoveFromList && itemsToEnquire.length > 1 && (
                        <button
                          type="button"
                          onClick={() => onRemoveFromList(item.id)}
                          className="text-neutral-500 hover:text-red-400 p-1 cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rajesh Agrawal / Project Engineer"
                  className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Company / Contracting Firm
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Infra & Construction Pvt Ltd"
                  className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-purple-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98261 00000"
                  className="w-full px-3.5 py-2 text-xs font-mono bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. purchase@company.com"
                  className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Project Site Location
                </label>
                <input
                  type="text"
                  value={projectLocation}
                  onChange={(e) => setProjectLocation(e.target.value)}
                  placeholder="e.g. Naya Raipur / Bilaspur Highway / Durg"
                  className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 25 Metric Tons / Full Trailer Load"
                  className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                />
              </div>
            </div>

            {/* Requirement / Message */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Requirement Details / Specifications
              </label>
              <textarea
                rows={3}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Mention required grades (e.g. Fe 550D / Fe 500D), sizes (8mm, 12mm, 16mm), schedule of delivery, or test certificate needs..."
                className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
              />
            </div>

            {/* Weighbridge Transparency Banner */}
            <div className="flex items-center gap-2.5 text-xs text-neutral-400 p-3 rounded-lg bg-neutral-950 border border-neutral-800">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Weighbridge Certified: Stamped 80 MT computer slip + MTC issued with all dispatches.</span>
            </div>

            {/* Submit Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 rounded-lg transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950"
              >
                <Send className="w-4 h-4" />
                <span>Submit Official RFQ</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
