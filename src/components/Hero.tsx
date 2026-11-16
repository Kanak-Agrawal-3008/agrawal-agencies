import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Scale, Truck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreProducts }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 border-b border-neutral-800 pt-6 pb-12 lg:py-16 xl:py-20">
      {/* Background Architectural Grid & Purple Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Architectural technical grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Dynamic purple polygon angular backdrop matching catalogue cover */}
        <div 
          className="absolute -top-24 -right-24 w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] bg-gradient-to-br from-purple-900/35 via-purple-950/20 to-transparent transform rotate-12 blur-3xl"
        />
        <div 
          className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-gradient-to-tr from-purple-950/40 via-neutral-900/20 to-transparent blur-2xl"
        />

        {/* Subtle diagonal structural beam accent lines */}
        <svg 
          className="absolute top-0 right-0 w-full h-full opacity-10" 
          viewBox="0 0 1440 800" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <line x1="800" y1="0" x2="1440" y2="640" stroke="#c084fc" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="900" y1="0" x2="1440" y2="540" stroke="#e2e8f0" strokeWidth="1.5" />
          <line x1="1000" y1="0" x2="1440" y2="440" stroke="#c084fc" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-5 xl:space-y-6">
            
            {/* Trust Signal Kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs text-purple-300 font-medium tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>Established 1988 · 35+ Years of Industry Trust</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400 font-mono">Central Logistics Hub</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white font-display uppercase leading-[1.12] text-balance">
                The Cornerstone of Every Great Project
              </h1>
              
              {/* Product Segment Pillars (from catalogue cover) */}
              <div className="pt-1.5 text-xs sm:text-sm font-semibold tracking-wider text-purple-400 uppercase font-mono flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>Reinforced Steel</span>
                <span className="text-neutral-600 font-light">|</span>
                <span>Structural Steel</span>
                <span className="text-neutral-600 font-light">|</span>
                <span>Plumbing Solutions</span>
              </div>
            </div>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base lg:text-base xl:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Premier building materials wholesaler supplying verified primary and secondary TMT rebars, heavy structural sections, and complete Prince Piping systems. Supported by an on-site <strong className="text-white font-semibold">80 MT weighbridge</strong> and our massive <strong className="text-white font-semibold">3.5-acre central warehouse</strong> for rapid job-site delivery.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-lg transition-all shadow-md shadow-purple-950 cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>Send an Enquiry</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800/90 border border-neutral-700/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore Products (42+ Lines)</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Agrawal Agencies, I would like to enquire about steel and piping prices for our project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/60 rounded-lg transition-colors whitespace-nowrap"
                title="Direct WhatsApp Enquiry"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Proof Trust Badges */}
            <div className="pt-3 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-purple-400 shrink-0" />
                <span>80 MT Computerized Weighbridge</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>In-House Heavy Fleet & Yard</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>100% Tested Mill Certificates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Industrial Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 xl:p-6 shadow-2xl backdrop-blur-sm overflow-hidden">
              
              {/* Subtle angular purple header bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-700 via-purple-500 to-slate-400" />
              
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-950/80 border border-purple-800/80 flex items-center justify-center text-purple-300 font-bold font-mono text-sm">
                    AA
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Agrawal Agencies
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-neutral-400">
                      Central Distribution Hub & Depot
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-2 py-0.5 rounded">
                  Stock Ready
                </span>
              </div>

              {/* 3 Core Product Columns Preview */}
              <div className="py-4 space-y-3">
                <div className="p-2.5 xl:p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 hover:border-purple-800/60 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      Reinforcement Steel (TMT)
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400">Fe 500D / 550D</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-1">
                    Tata Tiscon · JSW Neosteel · SAIL · Kalika · Uma · SRJ
                  </p>
                </div>

                <div className="p-2.5 xl:p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 hover:border-purple-800/60 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      Structural Steel Sections
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400">IS 2062 Tested</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-1">
                    MS Beams (ISMB) · Channels (ISMC) · Angles · Plates · SHS Pipes
                  </p>
                </div>

                <div className="p-2.5 xl:p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 hover:border-purple-800/60 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Plumbing Solutions
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400">Prince Piping</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-1">
                    CPVC Smartfit Plus · UPVC Easyfit · SWR Ultrafit · DWC Corfit · Tanks
                  </p>
                </div>
              </div>

              {/* Verified Metrics Footer */}
              <div className="pt-3.5 border-t border-neutral-800 grid grid-cols-2 gap-2.5 text-center">
                <div className="bg-neutral-950/40 p-2 xl:p-2.5 rounded-lg border border-neutral-800/50">
                  <div className="text-lg xl:text-xl font-bold font-mono text-white tabular-nums">3.5 Acres</div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Logistics Depot</div>
                </div>
                <div className="bg-neutral-950/40 p-2 xl:p-2.5 rounded-lg border border-neutral-800/50">
                  <div className="text-lg xl:text-xl font-bold font-mono text-purple-400 tabular-nums">450+ Clients</div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Builders & Govt.</div>
                </div>
              </div>

              <div className="mt-3 pt-2 text-center">
                <a 
                  href={`tel:${COMPANY_INFO.salesHotline}`} 
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>Call Direct Dispatch: <strong className="text-white font-mono">{COMPANY_INFO.salesHotline}</strong></span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
