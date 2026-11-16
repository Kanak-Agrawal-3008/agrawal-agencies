import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Warehouse, 
  Scale, 
  Truck, 
  FileText,
  HelpCircle,
  Building
} from 'lucide-react';

interface ContactPageProps {
  onOpenEnquiryModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenEnquiryModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [productType, setProductType] = useState('Reinforcement Steel (TMT)');
  const [siteLocation, setSiteLocation] = useState('');
  const [estimatedTonnage, setEstimatedTonnage] = useState('10 to 50 MT');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setPhone('');
      setEmail('');
      setCompany('');
      setMessage('');
      setSiteLocation('');
    }, 5000);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Agrawal Agencies, I am contacting you from your official website regarding steel and plumbing procurement for our project.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
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
            <span>Commercial Access & Contact</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                Contact Commercial & Dispatch Desk
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Connect directly with our 25-member sales engineering desk in Raipur or visit our central 3.5-acre logistics yard with on-site 80 MT computerized weighbridge. Fast turnaround on BOQs, MTC verification, and trailer dispatches.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 rounded-lg transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Desk</span>
              </button>
            </div>
          </div>

          {/* Contact Fast Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-neutral-800/80">
            <a 
              href={`tel:${COMPANY_INFO.salesHotline}`}
              className="bg-neutral-900/60 hover:bg-neutral-900 p-3.5 rounded-lg border border-neutral-800 transition-colors flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-950 border border-purple-800/80 flex items-center justify-center text-purple-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-neutral-400 uppercase font-mono">Direct Sales Hotline</div>
                <div className="text-sm font-bold font-mono text-white">{COMPANY_INFO.salesHotline}</div>
              </div>
            </a>

            <a 
              href={`tel:${COMPANY_INFO.dispatchPhone}`}
              className="bg-neutral-900/60 hover:bg-neutral-900 p-3.5 rounded-lg border border-neutral-800 transition-colors flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-slate-300 shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-neutral-400 uppercase font-mono">Yard Dispatch & Trailer Loading</div>
                <div className="text-sm font-bold font-mono text-white">{COMPANY_INFO.dispatchPhone}</div>
              </div>
            </a>

            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="bg-neutral-900/60 hover:bg-neutral-900 p-3.5 rounded-lg border border-neutral-800 transition-colors flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-neutral-400 uppercase font-mono">Official Quotations & BOQs</div>
                <div className="text-sm font-bold font-mono text-purple-300 truncate">{COMPANY_INFO.email}</div>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Main Grid: Corporate Locations vs Inbound RFQ Form */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
            
            {/* Left Column: Two Official Facility Cards */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Card 1: Headquarters */}
              <div className="bg-neutral-900/80 p-6 sm:p-7 rounded-2xl border border-neutral-800 space-y-4">
                <div className="flex items-start justify-between gap-3 border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-800 flex items-center justify-center text-purple-300">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                        {COMPANY_INFO.headquarters.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400">Order Booking, Tax Invoicing & Commercial Accounts</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-800/50">
                    Est. 1988
                  </span>
                </div>

                <div className="text-xs text-neutral-300 leading-relaxed">
                  {COMPANY_INFO.headquarters.address}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px] block font-mono">Corporate Landline</span>
                    <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-white font-mono hover:text-purple-400">
                      {COMPANY_INFO.primaryPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px] block font-mono">Billing Inquiries</span>
                    <a href={`mailto:${COMPANY_INFO.corporateEmail}`} className="text-purple-300 font-mono hover:underline">
                      {COMPANY_INFO.corporateEmail}
                    </a>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px] block font-mono">Commercial Desk Timings</span>
                    <span className="text-neutral-300">{COMPANY_INFO.headquarters.hours}</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Central Logistics Yard */}
              <div className="bg-neutral-900/80 p-6 sm:p-7 rounded-2xl border border-neutral-800 space-y-4">
                <div className="flex items-start justify-between gap-3 border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300">
                      <Warehouse className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                        {COMPANY_INFO.warehouse.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400">3.5-Acre Storage Depot, Cranes & Certified Weighbridge</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
                    80 MT Calibrated
                  </span>
                </div>

                <div className="text-xs text-neutral-300 leading-relaxed">
                  {COMPANY_INFO.warehouse.address}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px] block font-mono">Dispatch Supervisor</span>
                    <a href={`tel:${COMPANY_INFO.dispatchPhone}`} className="text-white font-mono hover:text-purple-400">
                      {COMPANY_INFO.dispatchPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px] block font-mono">Direct Sales Hotline</span>
                    <a href={`tel:${COMPANY_INFO.salesHotline}`} className="text-white font-mono hover:text-purple-400">
                      {COMPANY_INFO.salesHotline}
                    </a>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px] block font-mono">Trailer Loading & Dispatch Timings</span>
                    <span className="text-neutral-300">{COMPANY_INFO.warehouse.hours}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800">
                  <div className="text-[11px] text-neutral-400 font-mono">
                    Equipped with twin 15-ton overhead gantry cranes, covered moisture-shielded PVC storage, and computerized weigh slip issuance.
                  </div>
                </div>
              </div>

              {/* Quick Urgent Dial Box */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 shrink-0" />
                  <div className="text-xs">
                    <div className="text-white font-bold">Have an immediate urgent site requirement?</div>
                    <div className="text-neutral-400">Call our central sales engineering hotline directly.</div>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.salesHotline}`}
                  className="px-3.5 py-1.5 text-xs font-mono font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg whitespace-nowrap"
                >
                  {COMPANY_INFO.salesHotline}
                </a>
              </div>

            </div>

            {/* Right Column: Formal Inbound Quotation / RFQ Form */}
            <div className="lg:col-span-6 bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                  <span className="font-semibold uppercase tracking-wider text-white">Official Request for Quotation (RFQ)</span>
                  <span className="font-mono text-purple-400">Response &lt; 2 Hours</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-tight mt-3">
                  Request Rate Card & Stock Dispatch
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your project bill of materials. Our estimation desk will compute tonnage, verify ready batch inventory, and issue a formal GST invoice quote.
                </p>
              </div>

              {sent ? (
                <div className="p-8 text-center space-y-3 bg-neutral-950 rounded-xl border border-emerald-800/60">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">RFQ Received Successfully!</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{name}</strong>. Your enquiry has been assigned to our senior commercial desk. We will reach you on <strong className="text-white font-mono">{phone}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alok Verma"
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
                        placeholder="e.g. +91 98261 12345"
                        className="w-full px-3.5 py-2 text-xs font-mono bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Company / Contractor Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Verma Constructions LLP"
                        className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
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
                        placeholder="e.g. purchase@vermaconstructions.com"
                        className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Product Segment
                      </label>
                      <select
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-purple-600 cursor-pointer"
                      >
                        <option>Reinforcement Steel (TMT Rebar)</option>
                        <option>Structural Steel (Beams / Channels / Angles)</option>
                        <option>Plumbing Solutions (Prince CPVC / UPVC / SWR)</option>
                        <option>Civil Infrastructure (FRP / RCC / Hume Pipes)</option>
                        <option>Complete Multi-Item Project BOQ</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Estimated Volume / Tonnage
                      </label>
                      <select
                        value={estimatedTonnage}
                        onChange={(e) => setEstimatedTonnage(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-purple-600 cursor-pointer"
                      >
                        <option>Under 10 MT / Small Batch</option>
                        <option>10 to 50 MT (Standard Dispatch)</option>
                        <option>50 to 200 MT (Multi-Trailer Phase)</option>
                        <option>200+ MT (Institutional Long-Term Supply)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Delivery Job-Site Location / City
                    </label>
                    <input
                      type="text"
                      value={siteLocation}
                      onChange={(e) => setSiteLocation(e.target.value)}
                      placeholder="e.g. Naya Raipur, Durg, Bilaspur, Bhilai, or project site"
                      className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Requirement Details & Specifications
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify rebar diameters (e.g. 12mm, 16mm, 20mm Fe 550D), structural sizes (ISMB 200, ISMC 100), or Prince CPVC pipe schedule..."
                      className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request for Quotation</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

