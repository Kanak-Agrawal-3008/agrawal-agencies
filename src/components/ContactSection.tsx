import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Shield, Warehouse } from 'lucide-react';

interface ContactSectionProps {
  onOpenEnquiryModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEnquiryModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [productType, setProductType] = useState('Reinforcement Steel (TMT)');
  const [siteLocation, setSiteLocation] = useState('');
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
      setMessage('');
      setSiteLocation('');
    }, 4000);
  };

  return (
    <section id="contact" className="bg-neutral-900 py-12 lg:py-16 xl:py-20 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 lg:pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              <span>Direct Commercial Access</span>
              <span className="text-neutral-600">·</span>
              <span>Fast Quotation Turnaround</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1.5 font-display">
              Contact Agrawal Agencies
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400 mt-1.5 max-w-2xl">
              Connect directly with our sales engineering desk or visit our 3.5-acre logistics yard with on-site 80 MT weighbridge for verified dispatches.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Agrawal Agencies, I would like to get in touch regarding steel and piping requirements.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* 2-Column Layout: Contact Locations & Quick Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 pt-8 lg:pt-10 items-start">
          
          {/* Left Column: Headquarters & Warehouse Info */}
          <div className="lg:col-span-6 space-y-5 xl:space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <div className="flex items-start justify-between gap-3 border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-800 flex items-center justify-center text-purple-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {COMPANY_INFO.headquarters.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400">Order Booking & Commercial Accounts</p>
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
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Corporate Desk</span>
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-white font-mono hover:text-purple-400">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Billing & Quotes Email</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-purple-300 font-mono hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Office Hours</span>
                  <span className="text-neutral-300">{COMPANY_INFO.headquarters.hours}</span>
                </div>
              </div>
            </div>

            {/* Warehouse & Weighbridge Card */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <div className="flex items-start justify-between gap-3 border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300">
                    <Warehouse className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {COMPANY_INFO.warehouse.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400">3.5-Acre Storage Depot & Crane Operations</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
                  80 MT Weighbridge
                </span>
              </div>

              <div className="text-xs text-neutral-300 leading-relaxed">
                {COMPANY_INFO.warehouse.address}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Dispatch Supervisor</span>
                  <a href={`tel:${COMPANY_INFO.dispatchPhone}`} className="text-white font-mono hover:text-purple-400">
                    {COMPANY_INFO.dispatchPhone}
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Direct Sales Hotline</span>
                  <a href={`tel:${COMPANY_INFO.salesHotline}`} className="text-white font-mono hover:text-purple-400">
                    {COMPANY_INFO.salesHotline}
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">Trailer Loading & Dispatch Timings</span>
                  <span className="text-neutral-300">{COMPANY_INFO.warehouse.hours}</span>
                </div>
              </div>
            </div>

            {/* Direct Dial Banner */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/50 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 shrink-0" />
                <div className="text-xs">
                  <div className="text-white font-bold">Have an immediate urgent site requirement?</div>
                  <div className="text-neutral-400">Call our central sales engineering hotline.</div>
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

          {/* Right Column: Quick Inbound Lead Form */}
          <div className="lg:col-span-6 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                <span className="font-semibold uppercase tracking-wider text-white">Instant Enquiry Form</span>
                <span className="font-mono text-purple-400">Response &lt; 2 Hrs</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight mt-3">
                Request Rate Card & Immediate Stock
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Enter your project specifications below. Our estimators will compute tonnage and issue formal quotes with tax breakdown.
              </p>
            </div>

            {sent ? (
              <div className="p-8 text-center space-y-3 bg-neutral-900/60 rounded-xl border border-emerald-800/60">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Thank You, {name}!</h4>
                <p className="text-xs text-neutral-300">
                  Your enquiry has been routed to our commercial desk. We will call you back on <strong className="text-white font-mono">{phone}</strong> shortly.
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
                      className="w-full px-3.5 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
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
                      className="w-full px-3.5 py-2 text-xs font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
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
                      className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-purple-600 cursor-pointer"
                    >
                      <option>Reinforcement Steel (TMT)</option>
                      <option>Structural Steel (Beams / Channels / Angles)</option>
                      <option>Plumbing Solutions (Prince CPVC / UPVC / SWR)</option>
                      <option>Civil Infrastructure (FRP / RCC / Hume Pipes)</option>
                      <option>Full Project Bill of Materials (Mixed)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Delivery Location / City
                    </label>
                    <input
                      type="text"
                      value={siteLocation}
                      onChange={(e) => setSiteLocation(e.target.value)}
                      placeholder="e.g. Industrial Area / Raipur Site"
                      className="w-full px-3.5 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Requirement & Quantities
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify rebar diameters, beam dimensions, pipe schedules, or total expected tonnage..."
                    className="w-full px-3.5 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-lg transition-colors cursor-pointer shadow-md shadow-purple-950 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Commercial Enquiry</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={onOpenEnquiryModal}
                className="text-xs text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4 cursor-pointer"
              >
                Or Open Multi-Item Bill of Quantities (BOQ) Builder
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
