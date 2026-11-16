import React from 'react';
import { LEADERSHIP_TEAM } from '../data/company';
import { Phone, Mail, Award, CheckCircle2 } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="bg-neutral-950 py-12 lg:py-16 xl:py-20 border-b border-neutral-800">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 lg:pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              <span>Organization & Leadership</span>
              <span className="text-neutral-600">·</span>
              <span>Generational Stewards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1.5 font-display">
              The People Behind the Enterprise
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400 mt-1.5 max-w-2xl">
              Led by three generations of building material distributors, supported by an agile and experienced 25-member sales engineering and logistics desk.
            </p>
          </div>

          <div className="text-xs text-neutral-400 font-mono bg-neutral-900 border border-neutral-800 px-3.5 py-2 rounded-lg shrink-0">
            <span>Direct Commercial Accountability</span>
          </div>
        </div>

        {/* 4 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 pt-8 lg:pt-10">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-neutral-900/80 rounded-xl border border-neutral-800 hover:border-purple-800/60 p-5 xl:p-6 flex flex-col justify-between transition-colors group relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-700 to-neutral-700" />

              <div>
                {/* Visual Avatar Monogram */}
                <div className="w-14 h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 font-display font-extrabold text-lg mb-5 group-hover:border-purple-700/80 transition-colors">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-purple-400 font-mono">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {member.experience}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-800/80 space-y-2">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                    Area of Focus
                  </div>
                  <div className="text-xs text-neutral-300 font-medium leading-snug">
                    {member.focus}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mt-3">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer with Direct Contact */}
              {member.phone && (
                <div className="mt-6 pt-4 border-t border-neutral-800/80">
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* 25-Member Team Strength Banner */}
        <div className="mt-12 p-6 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              25-Member Operations, Sales & Technical Desk
            </h4>
            <p className="text-xs text-neutral-400">
              Coordinating instant order invoicing, mill test certifications, weighbridge clearances, and on-site delivery dispatch every working day.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-purple-400 bg-neutral-950 px-3 py-1.5 rounded border border-neutral-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Dedicated Account Managers Assigned</span>
          </div>
        </div>

      </div>
    </section>
  );
};
