import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'emblem' | 'full';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full'
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const emblemSvg = (
    <div className={`relative ${sizeMap[size]} shrink-0 flex items-center justify-center`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-sm select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular text paths */}
          <path
            id="textPathTop"
            d="M 30,100 A 70,70 0 0,1 170,100"
            fill="none"
          />
          <path
            id="textPathBottom"
            d="M 32,108 A 72,72 0 0,0 168,108"
            fill="none"
          />

          {/* Black & Yellow Gym Gradient */}
          <radialGradient id="blackBgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="85%" stopColor="#09090b" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>

          <linearGradient id="chromePlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        {/* Outer Circular Ring in Black & Yellow */}
        <circle cx="100" cy="100" r="96" fill="url(#blackBgGrad)" stroke="#EAB308" strokeWidth="3.5" />
        <circle cx="100" cy="100" r="91" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="87" fill="none" stroke="#EAB308" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="63" fill="#09090b" stroke="#FFFFFF" strokeWidth="1.8" />

        {/* Top Arched Text: THE PRIME */}
        <text
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="22"
          letterSpacing="4"
        >
          <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
            THE PRIME
          </textPath>
        </text>

        {/* Bottom Arched Text: NUTRITIONS (Corrected Spelling) */}
        <text
          fill="#EAB308"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="17.5"
          letterSpacing="5"
        >
          <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
            NUTRITIONS
          </textPath>
        </text>

        {/* Center Gym Emblem: Barbell + Muscular Fist */}
        <g id="gymCenter" transform="translate(100, 100)">
          {/* Barbell Bar (horizontal shaft) */}
          <rect x="-48" y="-3.5" width="96" height="7" rx="2" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
          
          {/* Left Weight Plates */}
          <rect x="-45" y="-22" width="7" height="44" rx="2" fill="url(#yellowGrad)" stroke="#FFFFFF" strokeWidth="1" />
          <rect x="-37" y="-18" width="5" height="36" rx="1.5" fill="#E2E8F0" stroke="#000000" strokeWidth="0.8" />
          <rect x="-31" y="-12" width="3.5" height="24" rx="1" fill="#94A3B8" />

          {/* Right Weight Plates */}
          <rect x="38" y="-22" width="7" height="44" rx="2" fill="url(#yellowGrad)" stroke="#FFFFFF" strokeWidth="1" />
          <rect x="32" y="-18" width="5" height="36" rx="1.5" fill="#E2E8F0" stroke="#000000" strokeWidth="0.8" />
          <rect x="27.5" y="-12" width="3.5" height="24" rx="1" fill="#94A3B8" />

          {/* Muscular Fist Gripping the Barbell */}
          <g transform="translate(0, -2)">
            {/* Forearm & Wrist base */}
            <path
              d="M -9 18 L -9 9 L 9 9 L 9 18 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.2"
            />
            {/* Palm & 4 Knuckles / Fingers clenched */}
            <path
              d="M -16 -10 C -16 -17 -8 -17 -8 -10 L -8 3 C -8 7 -16 7 -16 3 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.2"
            />
            <path
              d="M -8 -12 C -8 -19 0 -19 0 -12 L 0 4 C 0 8 -8 8 -8 4 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.2"
            />
            <path
              d="M 0 -12 C 0 -19 8 -19 8 -12 L 8 4 C 8 8 0 8 0 4 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.2"
            />
            <path
              d="M 8 -10 C 8 -17 16 -17 16 -10 L 16 3 C 16 7 8 7 8 3 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.2"
            />
            {/* Thumb wrapping over the bar */}
            <path
              d="M -14 0 C -14 -6 -3 -6 0 -1 C 2 3 -5 8 -11 6 C -14 5 -14 2 -14 0 Z"
              fill="#F8FAFC"
              stroke="#000000"
              strokeWidth="1.2"
            />
          </g>

          {/* ESTD 2026 text with stars below the fist */}
          <g transform="translate(0, 24)">
            {/* Left Star */}
            <polygon points="-28,-2 -26,-7 -24,-2 -20,-2 -23,1 -22,6 -26,3 -30,6 -29,1 -32,-2" fill="#EAB308" transform="scale(0.55)" />
            {/* ESTD 2026 */}
            <text
              x="0"
              y="1"
              fill="#FFFFFF"
              fontSize="8"
              fontFamily="system-ui, sans-serif"
              fontWeight="800"
              letterSpacing="1"
              textAnchor="middle"
            >
              ESTD 2026
            </text>
            {/* Right Star */}
            <polygon points="28,-2 30,-7 32,-2 36,-2 33,1 34,6 30,3 26,6 27,1 24,-2" fill="#EAB308" transform="scale(0.55)" />
          </g>
        </g>
      </svg>
    </div>
  );

  if (variant === 'emblem') {
    return emblemSvg;
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {emblemSvg}
      <div className="flex flex-col text-left">
        <span className="font-display font-black tracking-tight text-black leading-none text-base sm:text-lg">
          THE PRIME <span className="text-[#EAB308] drop-shadow-2xs">NUTRITIONS</span>
        </span>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-zinc-800 flex items-center gap-1.5 mt-0.5">
            <span>Whey Protein</span>
            <span className="text-zinc-400">/</span>
            <span>Mass Gainer</span>
          </span>
        )}
      </div>
    </div>
  );
};
