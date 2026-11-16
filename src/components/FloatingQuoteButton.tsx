import React from 'react';
import { FileText, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FloatingQuoteButtonProps {
  onOpenEnquiry: () => void;
  itemCount: number;
}

export const FloatingQuoteButton: React.FC<FloatingQuoteButtonProps> = ({
  onOpenEnquiry,
  itemCount
}) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
      {/* WhatsApp Quick Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Agrawal Agencies, I would like to get quick product rates and stock status.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-black/50 transition-all hover:scale-105"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
      </a>

      {/* Primary RFQ Button */}
      <button
        onClick={onOpenEnquiry}
        className="inline-flex items-center gap-2.5 px-4 py-3 bg-purple-700 hover:bg-purple-600 active:bg-purple-800 text-white rounded-full shadow-xl shadow-purple-950/80 transition-all hover:scale-105 cursor-pointer text-xs font-bold whitespace-nowrap"
      >
        <FileText className="w-4 h-4" />
        <span className="hidden sm:inline">Send Enquiry / RFQ</span>
        <span className="sm:hidden">Enquire</span>
        {itemCount > 0 && (
          <span className="w-5 h-5 rounded-full bg-white text-purple-900 font-bold flex items-center justify-center text-[10px] tabular-nums">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
};
