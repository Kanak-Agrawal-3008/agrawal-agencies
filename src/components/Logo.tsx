import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full', 
  size = 'md' 
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  // Recreating the iconic metallic angular double-chevron "A" monogram from the catalogue
  const MarkIcon = () => (
    <svg 
      className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="steelGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="steelGradDark" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#3b0764" />
        </linearGradient>
        <filter id="shadowFilter" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#7e22ce" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Outer Purple Accent Rim */}
      <polygon 
        points="10,80 56,18 108,18 78,54 102,54 36,104 52,66 22,66" 
        stroke="url(#purpleGlow)" 
        strokeWidth="4" 
        strokeLinejoin="miter" 
        strokeMiterlimit="4"
        fill="none"
        filter="url(#shadowFilter)"
      />

      {/* Main Upper Metallic Chevron / Diagonal Apex */}
      <polygon 
        points="14,76 56,22 102,22 74,52 94,52 38,98 52,62 24,62" 
        fill="url(#steelGradLight)" 
      />

      {/* Inner Bevel Shading & Metallic Facets */}
      <polygon 
        points="56,22 102,22 74,52 56,22" 
        fill="url(#steelGradDark)" 
        opacity="0.8"
      />
      <polygon 
        points="38,98 94,52 68,68 38,98" 
        fill="url(#steelGradDark)" 
        opacity="0.85"
      />

      {/* Center Razor Cut Line */}
      <polyline 
        points="56,22 68,52 38,98" 
        stroke="#ffffff" 
        strokeWidth="1.5" 
        strokeOpacity="0.8" 
      />
    </svg>
  );

  if (variant === 'mark') {
    return <MarkIcon />;
  }

  return (
    <div className={`flex items-center gap-3.5 group ${className}`}>
      <MarkIcon />
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight text-white uppercase leading-none font-display ${textSizes[size]}`}>
          Agrawal Agencies
        </span>
        {variant === 'full' && (
          <span className="text-[10px] tracking-[0.22em] text-neutral-400 uppercase font-medium mt-1">
            Steel & Plumbing Wholesale
          </span>
        )}
      </div>
    </div>
  );
};
