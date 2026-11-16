import React from 'react';
import { Calendar, TrendingUp, Warehouse, Scale, Users, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const KeyMetrics: React.FC = () => {
  const stats = [
    {
      label: 'Years of Excellence',
      value: '35+',
      subtext: 'Established in 1988',
      icon: Calendar
    },
    {
      label: 'Ready Inventory',
      value: 'High-Volume',
      subtext: 'Immediate Site Dispatch',
      icon: TrendingUp
    },
    {
      label: 'Central Logistics Yard',
      value: '3.5 Acres',
      subtext: 'Immediate Ready Stock',
      icon: Warehouse
    },
    {
      label: 'On-Site Weighbridge',
      value: '80 MT',
      subtext: '100% Certified Tonnage',
      icon: Scale
    },
    {
      label: 'Dedicated Team',
      value: '25 Pros',
      subtext: 'Technical & Sales Desk',
      icon: Users
    },
    {
      label: 'Active Clients',
      value: '450+',
      subtext: 'Contractors to Developers',
      icon: Building2
    }
  ];

  return (
    <section className="bg-neutral-900 border-b border-neutral-800 py-10 lg:py-14">
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Quiet Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 lg:pb-8 border-b border-neutral-800/80">
          <div>
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              Certified Scale & Capability
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mt-1 font-display">
              Scale Built on Three Decades of Operational Rigor
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            Authenticated by certified commercial compliance and extensive physical logistics infrastructure.
          </p>
        </div>

        {/* 6 Grid Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 lg:gap-4 xl:gap-5 pt-6 lg:pt-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="bg-neutral-950/70 p-4 lg:p-4.5 xl:p-5 rounded-xl border border-neutral-800/80 hover:border-purple-800/50 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-purple-400 mb-2.5 lg:mb-3 group-hover:text-purple-300 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-neutral-800/50">
                  <div className="text-[11px] xl:text-xs font-semibold text-neutral-200 uppercase tracking-wide leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[10px] xl:text-[11px] text-neutral-400 mt-0.5 truncate">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
