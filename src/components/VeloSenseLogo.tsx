import React from 'react';

interface VeloSenseLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withBackground?: boolean;
  withText?: boolean;
}

export const VeloSenseLogo: React.FC<VeloSenseLogoProps> = ({
  className = '',
  size = 'md',
  withBackground = false,
  withText = false,
}) => {
  const sizeMap = {
    sm: { icon: 24, text: 'text-lg', box: 'w-8 h-8 rounded-lg p-1.5' },
    md: { icon: 32, text: 'text-xl', box: 'w-10 h-10 rounded-xl p-2' },
    lg: { icon: 44, text: 'text-2xl', box: 'w-14 h-14 rounded-2xl p-2.5' },
    xl: { icon: 64, text: 'text-4xl', box: 'w-20 h-20 rounded-3xl p-4' },
  };

  const currentSize = sizeMap[size];

  const svgContent = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      {/* Dynamic Glow Filter */}
      <defs>
        <linearGradient id="veloGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Wheel loop on right */}
      <circle
        cx="68"
        cy="62"
        r="24"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        className="opacity-95"
      />

      {/* Modern athletic V with cutting inner bevel */}
      <path
        d="M20 28L47 80L58 48L68 32H54L48 50L35 28H20Z"
        fill="currentColor"
      />

      {/* Speed slash accent */}
      <path
        d="M52 28L45 42L49 42L57 28H52Z"
        fill="url(#veloGreenGrad)"
      />
    </svg>
  );

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {withBackground ? (
        <div
          className={`flex items-center justify-center bg-black border border-white/15 text-white shadow-lg ${currentSize.box} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
          {svgContent}
        </div>
      ) : (
        <div style={{ width: currentSize.icon, height: currentSize.icon }} className="text-white">
          {svgContent}
        </div>
      )}

      {withText && (
        <div className="flex flex-col">
          <span className={`font-extrabold tracking-tight text-white leading-none ${currentSize.text}`}>
            VELO<span className="text-emerald-400">SENSE</span>
          </span>
        </div>
      )}
    </div>
  );
};
