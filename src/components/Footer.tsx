import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/company';
import { Scale, Phone, Mail, MapPin, ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: () => void;
  onNavigate: (page: string, params?: any) => void;
  onSelectCategory?: (category: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onNavigate, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 lg:py-16">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-10 pb-10 border-b border-neutral-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => onNavigate('home')} className="text-left cursor-pointer">
              <Logo variant="full" size="md" />
            </button>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Established in 1988, Agrawal Agencies is a leading wholesale distributor of reinforcement steel, structural steel, and Prince Piping solutions with extensive inventory and regional logistics infrastructure.
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-purple-300">
                <Scale className="w-3.5 h-3.5 text-purple-400" />
                <span>On-Site 80 MT Weighbridge</span>
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                3.5-Acre Yard
              </span>
            </div>
          </div>

          {/* Product Taxonomy Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">
              Product Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('products', { category: 'reinforcement-steel' })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Reinforcement Steel (Tata, JSW, SAIL, Kalika)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products', { category: 'structural-steel' })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  MS Beams, Channels, Angles & Flats
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products', { category: 'structural-steel' })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Hollow Sections & Roofing Sheets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products', { category: 'plumbing-solutions' })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Prince CPVC, UPVC & SWR Systems
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products', { category: 'plumbing-solutions' })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Corfit DWC, Decilo & Inspection Chambers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products', { category: 'civil-infrastructure' })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Bharat FRP & RCC Covers, Hume Pipes
                </button>
              </li>
            </ul>
          </div>

          {/* Dedicated Section Pages Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">
              Website Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Products Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('brands')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Our Partner Brands
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Steel Weight Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('infrastructure')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Logistics Yard & Pillars
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left cursor-pointer">
                  About Us & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Contact & Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  Agrawal House, Plot No. 14-16, Commercial Complex, Raipur - 492001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-neutral-200 font-mono hover:text-white">
                  {COMPANY_INFO.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-purple-300 font-mono hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              
              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Instant Quotation</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div>
            © {COMPANY_INFO.establishedYear} – {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>IS 1786 · IS 2062 · ASTM Compliant Supply</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
