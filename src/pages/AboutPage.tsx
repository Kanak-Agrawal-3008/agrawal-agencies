import React from 'react';
import { COMPANY_INFO, LEADERSHIP_TEAM } from '../data/company';
import { 
  Building2, 
  Calendar, 
  Warehouse, 
  Scale, 
  Users, 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Building, 
  Truck, 
  Award, 
  FileText,
  ChevronRight 
} from 'lucide-react';

interface AboutPageProps {
  onOpenEnquiry: () => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry, onNavigateToContact }) => {
  const iconMap: Record<string, React.ElementType> = {
    'Family-Owned Enterprise': HeartHandshake,
    'On-Site 80 MT Weighbridge': Scale,
    'Uncompromising Quality Assurance': ShieldCheck,
    'Dedicated Administrative Headquarters': Building,
    'Expert Sales Professionals': Users,
    'Integrated In-House Logistics': Truck
  };

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
            <span>About Us</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                Generational Reliability in Steel & Plumbing Wholesale
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Founded in 1988, Agrawal Agencies has spent over 35 years building the region's most dependable wholesale supply chain for primary reinforcement steel, heavy structural steel, and complete Prince Piping systems.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Credential Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800/80">
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-purple-400">1988</div>
              <div className="text-[11px] text-neutral-400">Year Founded (35+ Yrs)</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-white">450+</div>
              <div className="text-[11px] text-neutral-400">Active Commercial Clients</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-white">3.5 Acres</div>
              <div className="text-[11px] text-neutral-400">Central Logistics Yard</div>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <div className="text-lg font-bold font-mono text-emerald-400">80 MT</div>
              <div className="text-[11px] text-neutral-400">On-Site Weighbridge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Company Story */}
      <section className="py-12 lg:py-16 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
                  Company Heritage
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-display">
                  Built on Trust, Verification & Physical Scale
                </h2>
              </div>

              <div className="space-y-4 text-neutral-300 leading-relaxed text-sm sm:text-base">
                {COMPANY_INFO.aboutParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Two Editorial Highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                    Technical Selection Assistance
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Our sales engineers actively review structural drawings, Bar Bending Schedules (BBS), and BOQs to assist developers in selecting optimal rebar grades and pipe pressure ratings.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                    Volume Procurement & Scale
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    With direct primary mill alliances and extensive warehousing capacity, we handle large institutional bulk orders with stable pricing and priority mill allocations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Industries Column */}
            <div className="lg:col-span-5 bg-neutral-900/80 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-neutral-800">
                  <span className="font-semibold uppercase tracking-wider text-white">Industries We Serve</span>
                  <span className="font-mono text-purple-400">Applications</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  Engineered material solutions tailored to diverse civil, structural, and plumbing environments across Central India.
                </p>
              </div>

              <div className="space-y-3.5">
                {COMPANY_INFO.industries.map((ind) => (
                  <div 
                    key={ind.id}
                    className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-purple-800/50 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {ind.title}
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 leading-snug">
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

      {/* The 6 Core Company Pillars */}
      <section className="py-12 lg:py-16 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="pb-8 border-b border-neutral-800">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              Foundational Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-1 font-display">
              The 6 Company Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 pt-8">
            {COMPANY_INFO.companyPillars.map((pillar) => {
              const Icon = iconMap[pillar.title] || ShieldCheck;
              return (
                <div 
                  key={pillar.title}
                  className="bg-neutral-900/80 rounded-xl border border-neutral-800 hover:border-purple-700/60 p-5 xl:p-6 flex flex-col justify-between transition-colors group relative overflow-hidden"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-800/80 transition-colors mb-3.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                      {pillar.subtitle}
                    </span>
                    
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>Operational Standard</span>
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Executive Team */}
      <section className="py-12 lg:py-16 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
                Organization & Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1 font-display">
                The People Behind the Enterprise
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
                Led by three generations of building material distributors, supported by an agile and experienced 25-member sales engineering and logistics desk.
              </p>
            </div>

            <button
              onClick={onNavigateToContact}
              className="text-xs text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>View Corporate Locations</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 pt-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.id}
                className="bg-neutral-950/80 rounded-xl border border-neutral-800 hover:border-purple-800/60 p-5 xl:p-6 flex flex-col justify-between transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-700 to-neutral-700" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400 font-display font-extrabold text-base mb-4 group-hover:border-purple-700/80 transition-colors">
                    {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-purple-400 font-mono">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      {member.experience}
                    </div>
                  </div>

                  <div className="mt-3.5 pt-3.5 border-t border-neutral-800/80 space-y-1">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                      Area of Focus
                    </div>
                    <div className="text-xs text-neutral-300 font-medium leading-snug">
                      {member.focus}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mt-2.5">
                    {member.bio}
                  </p>
                </div>

                {member.phone && (
                  <div className="mt-5 pt-3.5 border-t border-neutral-800/80">
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-purple-400" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 25-Member Desk Strip */}
          <div className="mt-10 p-5 sm:p-6 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                25-Member Operations, Sales & Technical Desk
              </h4>
              <p className="text-xs text-neutral-400">
                Coordinating instant order invoicing, mill test certifications, weighbridge clearances, and on-site delivery dispatch every working day.
              </p>
            </div>
            <button
              onClick={onOpenEnquiry}
              className="shrink-0 px-4 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg cursor-pointer"
            >
              Contact Technical Desk
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

