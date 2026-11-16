import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenEnquiry: () => void;
  enquiryItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenEnquiry, 
  enquiryItemCount 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'brands', label: 'Brands' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled 
          ? 'bg-neutral-950/95 backdrop-blur-md border-neutral-800/80 shadow-lg shadow-black/40' 
          : 'bg-neutral-950 border-neutral-800'
      }`}
    >
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-16 lg:h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Zone (Single-line wordmark element) */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-white uppercase font-display whitespace-nowrap group shrink-0 text-left cursor-pointer"
        >
          {/* Stylized Angular Steel Monogram */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center shrink-0">
            <svg 
              className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon 
                points="12,78 52,14 90,14 66,48 88,48 32,92 46,58 22,58" 
                stroke="#a855f7" 
                strokeWidth="4" 
                fill="#3b0764"
                opacity="0.8"
              />
              <polygon 
                points="16,74 52,18 84,18 62,48 80,48 34,88 46,54 24,54" 
                fill="url(#navSteelGrad)" 
              />
              <polygon 
                points="52,18 84,18 62,48 52,18" 
                fill="#475569" 
              />
              <defs>
                <linearGradient id="navSteelGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="50%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span>Agrawal Agencies</span>
        </button>

        {/* Zone 2: Navigation Links (Clean text links with active state indicator) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs lg:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors whitespace-nowrap px-2 py-1 rounded cursor-pointer ${
                  isActive 
                    ? 'text-purple-400 font-bold bg-purple-950/40 border border-purple-800/60 shadow-sm' 
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Single-line controls) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 lg:px-3.5 lg:py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors whitespace-nowrap"
            title="Call Sales Desk"
          >
            <PhoneCall className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-mono tabular-nums">{COMPANY_INFO.primaryPhone}</span>
          </a>

          <button
            onClick={onOpenEnquiry}
            className="relative inline-flex items-center gap-1.5 lg:gap-2 px-3.5 py-1.5 lg:px-4 lg:py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-lg transition-colors shadow-sm shadow-purple-950 whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Send Enquiry</span>
            {enquiryItemCount > 0 && (
              <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold bg-white text-purple-900 rounded-full tabular-nums">
                {enquiryItemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-950 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate(link.id);
                  }}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-purple-400 font-bold bg-purple-950/60 border border-purple-800/80' 
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 rounded-lg border border-neutral-800"
            >
              <PhoneCall className="w-3.5 h-3.5 text-purple-400" />
              <span>Call Us: {COMPANY_INFO.primaryPhone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Submit RFQ / Enquiry ({enquiryItemCount} selected)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
