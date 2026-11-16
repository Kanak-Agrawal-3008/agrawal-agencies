import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Shield, Building, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="bg-neutral-900 py-12 lg:py-16 xl:py-20 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 lg:pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              <span>Page 01 / Company Background</span>
              <span className="text-neutral-600">·</span>
              <span>Generational Reliability</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white uppercase tracking-tight mt-2 font-display">
              The Foundation of Quality Construction
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              From our humble beginnings in 1988 to a premier building materials enterprise serving over 450 key infrastructure partners across the region.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950/60"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 pt-8 lg:pt-10 items-start">
          
          {/* Main Editorial Story */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-5 text-neutral-300 leading-relaxed text-sm sm:text-base">
            {COMPANY_INFO.aboutParagraphs.map((para, index) => (
              <p key={index} className="text-neutral-300">
                {para}
              </p>
            ))}

            <div className="pt-4 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                  Technical Assistance
                </div>
                <p className="text-xs text-neutral-300">
                  Our sales engineers actively review drawings and BOQs to assist developers in selecting appropriate rebar grades and pipe pressure ratings.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                  Volume Procurement & Scale
                </div>
                <p className="text-xs text-neutral-300">
                  With direct primary mill alliances and extensive warehousing capacity, we handle large institutional bulk orders with stable pricing and priority mill allocations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Industries We Serve */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-neutral-800">
                <span className="font-semibold uppercase tracking-wider text-white">Industries We Serve</span>
                <span className="font-mono text-purple-400">Applications</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Engineered material solutions tailored to diverse civil, structural, and plumbing environments.
              </p>
            </div>

            <div className="space-y-4">
              {COMPANY_INFO.industries.map((ind) => (
                <div 
                  key={ind.id}
                  className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800/70 hover:border-purple-800/50 transition-colors"
                >
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {ind.title}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    {ind.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] font-mono text-purple-400">
                    <span>Key Lines:</span>
                    <span className="text-neutral-400 truncate">{ind.products.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
