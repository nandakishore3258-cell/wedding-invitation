import React from 'react';

// Ornate Lord Ganesha Vector Illustration
export const GaneshaArt: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 110 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-label="Lord Sri Ganesha"
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3d077" />
        <stop offset="40%" stopColor="#d4af37" />
        <stop offset="80%" stopColor="#aa7c11" />
        <stop offset="100%" stopColor="#f3d077" />
      </linearGradient>
      <linearGradient id="magentaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bd1a5d" />
        <stop offset="100%" stopColor="#800c3b" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Radiant Halo / Prabha */}
    <circle cx="80" cy="80" r="72" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="80" cy="80" r="66" stroke="url(#magentaGrad)" strokeWidth="1" opacity="0.4" />

    {/* Halo lotus petals */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <path
          key={i}
          d="M 80 14 C 77 10 74 6 80 2 C 86 6 83 10 80 14 Z"
          fill="url(#goldGrad)"
          transform={`rotate(${angle} 80 80)`}
          opacity="0.8"
        />
      );
    })}

    {/* Lord Ganesha Face Profile / Form */}
    {/* Crown / Mukut */}
    <path
      d="M 68 45 L 80 22 L 92 45 L 86 46 L 90 52 L 70 52 L 74 46 Z"
      fill="url(#goldGrad)"
      stroke="#800c3b"
      strokeWidth="0.8"
    />
    <circle cx="80" cy="30" r="2.5" fill="#800c3b" />
    <path d="M 72 40 Q 80 44 88 40" stroke="#800c3b" strokeWidth="1" fill="none" />

    {/* Forehead and Ears */}
    {/* Left Ear */}
    <path
      d="M 66 58 C 45 52 42 75 58 84 C 64 87 66 82 66 76"
      fill="url(#magentaGrad)"
      stroke="url(#goldGrad)"
      strokeWidth="1.5"
    />
    {/* Right Ear */}
    <path
      d="M 94 58 C 115 52 118 75 102 84 C 96 87 94 82 94 76"
      fill="url(#magentaGrad)"
      stroke="url(#goldGrad)"
      strokeWidth="1.5"
    />

    {/* Head & Cheek */}
    <path
      d="M 66 58 Q 80 54 94 58 Q 98 75 92 90 Q 80 100 78 116"
      stroke="url(#goldGrad)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />

    {/* Trunk (Vakratunda) gracefully turning left towards Modaka */}
    <path
      d="M 80 62 C 85 75 88 95 80 112 C 75 122 62 126 56 120 C 50 114 55 106 62 108 C 66 109 68 113 65 116"
      stroke="url(#magentaGrad)"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M 80 62 C 85 75 88 95 80 112 C 75 122 62 126 56 120 C 50 114 55 106 62 108 C 66 109 68 113 65 116"
      stroke="url(#goldGrad)"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />

    {/* Sacred Tilak / Trishula on Forehead */}
    <path d="M 76 52 L 80 47 L 84 52" stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" />
    <circle cx="80" cy="54" r="2" fill="#e53935" />
    <line x1="74" y1="58" x2="86" y2="58" stroke="url(#goldGrad)" strokeWidth="1.5" />
    <line x1="76" y1="61" x2="84" y2="61" stroke="url(#goldGrad)" strokeWidth="1.2" />

    {/* Auspicious Eye */}
    <path d="M 83 67 Q 88 64 91 69" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="87" cy="67" r="1.2" fill="#222" />

    {/* Modaka (Sacred Sweet) in hand/trunk tip */}
    <path
      d="M 52 118 C 50 114 54 110 58 112 C 60 113 61 116 59 119 C 56 122 52 121 52 118 Z"
      fill="url(#goldGrad)"
      stroke="#800c3b"
      strokeWidth="1"
    />
    <circle cx="56" cy="115" r="1" fill="#fff" />

    {/* Auspicious Bottom Lotus Base */}
    <path
      d="M 45 136 C 60 130 100 130 115 136 C 105 144 55 144 45 136 Z"
      fill="url(#goldGrad)"
      opacity="0.9"
    />
    <path
      d="M 60 134 C 70 128 90 128 100 134"
      stroke="#800c3b"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

// Auspicious Kalash with Mango Leaves, Coconut & Swastika
export const KalashArt: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-label="Auspicious Kalash"
  >
    <defs>
      <linearGradient id="kalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f7dc8c" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#996515" />
      </linearGradient>
      <linearGradient id="coconutBrown" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9c6644" />
        <stop offset="100%" stopColor="#582f0e" />
      </linearGradient>
      <linearGradient id="leafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#588157" />
        <stop offset="100%" stopColor="#283618" />
      </linearGradient>
    </defs>

    {/* Coconut Top */}
    <ellipse cx="50" cy="32" rx="14" ry="18" fill="url(#coconutBrown)" />
    <path d="M 50 14 L 48 8 L 52 8 Z" fill="#582f0e" />

    {/* Mango Leaves (Amrapali) */}
    {/* Left leaf */}
    <path d="M 50 40 C 35 34 22 25 24 16 C 30 22 42 32 50 40 Z" fill="url(#leafGreen)" />
    {/* Right leaf */}
    <path d="M 50 40 C 65 34 78 25 76 16 C 70 22 58 32 50 40 Z" fill="url(#leafGreen)" />
    {/* Center Left leaf */}
    <path d="M 50 40 C 40 28 34 16 38 10 C 44 18 48 30 50 40 Z" fill="#606c38" />
    {/* Center Right leaf */}
    <path d="M 50 40 C 60 28 66 16 62 10 C 56 18 52 30 50 40 Z" fill="#606c38" />

    {/* Kalash Pot Neck */}
    <path d="M 38 42 L 62 42 L 58 48 L 42 48 Z" fill="url(#kalashGold)" stroke="#800c3b" strokeWidth="1" />
    {/* Pot Rim */}
    <rect x="36" y="40" width="28" height="4" rx="2" fill="url(#kalashGold)" stroke="#800c3b" strokeWidth="0.8" />

    {/* Kalash Pot Body */}
    <path
      d="M 42 48 C 30 52 24 64 26 76 C 28 86 38 90 50 90 C 62 90 72 86 74 76 C 76 64 70 52 58 48 Z"
      fill="url(#kalashGold)"
      stroke="#800c3b"
      strokeWidth="1.2"
    />

    {/* Sacred Red Thread / Mouli around Neck */}
    <rect x="40" y="46" width="20" height="3" fill="#b71c1c" />

    {/* Auspicious Kumkum Tilak & Swastika on pot */}
    <circle cx="50" cy="68" r="8" fill="#a0144f" opacity="0.15" />
    <path
      d="M 50 63 L 50 73 M 45 68 L 55 68 M 50 63 L 54 63 M 55 68 L 55 72 M 50 73 L 46 73 M 45 68 L 45 64"
      stroke="#a0144f"
      strokeWidth="1.5"
      strokeLinecap="square"
    />

    {/* Pot Base */}
    <path d="M 38 88 L 62 88 L 60 93 L 40 93 Z" fill="url(#kalashGold)" stroke="#800c3b" strokeWidth="1" />
  </svg>
);

// Traditional South Indian Mango Leaves & Marigold Garland Toran
export const FloralToran: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full overflow-hidden leading-none select-none ${className}`}>
    <svg
      viewBox="0 0 600 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-12"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="marigoldOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb703" />
          <stop offset="100%" stopColor="#fb8500" />
        </linearGradient>
        <linearGradient id="marigoldYellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff3b0" />
          <stop offset="100%" stopColor="#ffd166" />
        </linearGradient>
      </defs>

      {/* Main Hanging Garland Strings */}
      <path
        d="M 0 4 Q 50 20 100 4 Q 150 20 200 4 Q 250 20 300 4 Q 350 20 400 4 Q 450 20 500 4 Q 550 20 600 4"
        stroke="#996515"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0 8 Q 50 32 100 8 Q 150 32 200 8 Q 250 32 300 8 Q 350 32 400 8 Q 450 32 500 8 Q 550 32 600 8"
        stroke="#d4af37"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Mango Leaves & Marigold Flowers repeating */}
      {Array.from({ length: 12 }).map((_, i) => {
        const x = i * 50 + 25;
        return (
          <g key={i}>
            {/* Mango leaf pointing down */}
            <path
              d={`M ${x - 6} 4 C ${x - 8} 16 ${x - 4} 30 ${x} 38 C ${x + 4} 30 ${x + 8} 16 ${x + 6} 4 Z`}
              fill="#2d6a4f"
              stroke="#1b4332"
              strokeWidth="0.5"
            />
            {/* Center vein */}
            <line x1={x} y1="4" x2={x} y2="35" stroke="#40916c" strokeWidth="0.6" />

            {/* Marigold flower bud */}
            <circle cx={x} cy="7" r="4" fill="url(#marigoldOrange)" />
            <circle cx={x} cy="7" r="2.5" fill="url(#marigoldYellow)" />
          </g>
        );
      })}
    </svg>
  </div>
);

// Traditional Ornamental Divider Line
export const OrnamentalDivider: React.FC<{ className?: string; text?: string }> = ({
  className = '',
  text
}) => (
  <div className={`flex items-center justify-center gap-3 my-4 select-none ${className}`}>
    <div className="flex-1 flex items-center justify-end">
      <div className="h-[1px] w-full max-w-[120px] bg-gradient-to-r from-transparent to-[#b8860b]" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#981249] mx-1" />
      <span className="w-2.5 h-2.5 rotate-45 border border-[#b8860b] bg-[#fffdf9]" />
    </div>

    {text ? (
      <span className="font-serif text-[#981249] text-sm tracking-widest px-2 font-medium">
        {text}
      </span>
    ) : (
      <div className="flex items-center gap-1.5 text-[#981249]">
        <span className="text-xs">✦</span>
        <span className="text-base text-[#b8860b]">❖</span>
        <span className="text-xs">✦</span>
      </div>
    )}

    <div className="flex-1 flex items-center justify-start">
      <span className="w-2.5 h-2.5 rotate-45 border border-[#b8860b] bg-[#fffdf9]" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#981249] mx-1" />
      <div className="h-[1px] w-full max-w-[120px] bg-gradient-to-l from-transparent to-[#b8860b]" />
    </div>
  </div>
);

// Traditional Corner Flourish for Cards & Frames
export const CornerFlourish: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  className?: string;
}> = ({ position, size = 36, className = '' }) => {
  const rotateClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90'
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${rotateClass} pointer-events-none ${className}`}
    >
      <path
        d="M 2 38 L 2 12 C 2 6.5 6.5 2 12 2 L 38 2"
        stroke="#b8860b"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 6 36 L 6 14 C 6 9.5 9.5 6 14 6 L 36 6"
        stroke="#981249"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />
      <circle cx="14" cy="14" r="3" fill="#b8860b" />
      <circle cx="14" cy="14" r="1.5" fill="#981249" />
      <path d="M 2 2 L 6 6" stroke="#b8860b" strokeWidth="1.2" />
    </svg>
  );
};

// Traditional Bride & Groom Silhouette / Attire Art
export const CoupleArt: React.FC<{ type: 'groom' | 'bride'; size?: number; className?: string }> = ({
  type,
  size = 140,
  className = ''
}) => {
  if (type === 'groom') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Traditional Indian Groom"
      >
        <defs>
          <linearGradient id="groomGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3d077" />
            <stop offset="100%" stopColor="#aa7c11" />
          </linearGradient>
        </defs>

        {/* Aura / Frame */}
        <circle cx="60" cy="70" r="54" stroke="url(#groomGold)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="60" cy="70" r="48" fill="#fff9f0" />

        {/* Traditional Turban / Peta */}
        <path
          d="M 40 42 C 40 28 78 26 80 40 C 82 48 76 52 60 52 C 46 52 40 48 40 42 Z"
          fill="#981249"
          stroke="url(#groomGold)"
          strokeWidth="1.5"
        />
        {/* Turban kalgi / brooch */}
        <path d="M 60 26 L 62 18 L 58 18 Z" fill="url(#groomGold)" />
        <circle cx="60" cy="28" r="2.5" fill="#f3d077" />
        <path d="M 60 18 C 64 12 70 14 66 22" stroke="url(#groomGold)" strokeWidth="1" fill="none" />

        {/* Groom Face */}
        <path
          d="M 46 50 C 46 64 54 74 60 74 C 66 74 74 64 74 50"
          fill="#fcd5b5"
          stroke="#981249"
          strokeWidth="1"
        />
        {/* Tilak */}
        <line x1="60" y1="52" x2="60" y2="58" stroke="#b71c1c" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="60" cy="60" r="1" fill="#f3d077" />

        {/* Traditional Kurta & Kanduva (Silk Stole) */}
        <path
          d="M 32 108 L 44 76 C 52 82 68 82 76 76 L 88 108 C 76 112 44 112 32 108 Z"
          fill="#fff"
          stroke="url(#groomGold)"
          strokeWidth="1.2"
        />
        {/* Royal Silk Angavastram / Kanduva with Gold Border */}
        <path
          d="M 40 76 Q 60 92 82 86 L 86 108 Q 60 102 36 94 Z"
          fill="#981249"
          opacity="0.95"
        />
        <path d="M 40 76 Q 60 92 82 86" stroke="url(#groomGold)" strokeWidth="2.5" fill="none" />
        <path d="M 36 94 Q 60 102 86 108" stroke="url(#groomGold)" strokeWidth="2" fill="none" />

        {/* Wedding Pearl / Gold Mala */}
        <path
          d="M 48 76 Q 60 96 72 76"
          stroke="url(#groomGold)"
          strokeWidth="2"
          strokeDasharray="2 2"
          fill="none"
        />
      </svg>
    );
  }

  // Bride illustration
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Traditional Indian Bride"
    >
      <defs>
        <linearGradient id="brideGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3d077" />
          <stop offset="100%" stopColor="#aa7c11" />
        </linearGradient>
      </defs>

      {/* Aura / Frame */}
      <circle cx="60" cy="70" r="54" stroke="url(#brideGold)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="60" cy="70" r="48" fill="#fff9f0" />

      {/* Traditional Hair Bun with Jasmine Flowers (Mallepoolu) */}
      <circle cx="60" cy="42" r="22" fill="#2b2d42" />
      <circle cx="60" cy="42" r="24" stroke="#fff" strokeWidth="3" strokeDasharray="3 3" />
      <circle cx="60" cy="42" r="26" stroke="#ffd166" strokeWidth="1" strokeDasharray="2 2" />

      {/* Bride Face */}
      <path
        d="M 48 46 C 48 62 54 70 60 70 C 66 70 72 62 72 46"
        fill="#fcd5b5"
        stroke="#981249"
        strokeWidth="1"
      />

      {/* Maang Tikka (Nethichutti / Papidi Billa) */}
      <line x1="60" y1="32" x2="60" y2="44" stroke="url(#brideGold)" strokeWidth="1.5" />
      <circle cx="60" cy="45" r="2.5" fill="url(#brideGold)" />
      <circle cx="60" cy="45" r="1" fill="#b71c1c" />

      {/* Bindi */}
      <circle cx="60" cy="52" r="1.5" fill="#b71c1c" />

      {/* Traditional Nose Ring (Mukhutti) */}
      <circle cx="56" cy="58" r="1" fill="url(#brideGold)" />

      {/* Kanjeevaram Silk Saree (Pattu Saree) */}
      <path
        d="M 32 108 L 44 74 C 52 80 68 80 76 74 L 88 108 C 76 112 44 112 32 108 Z"
        fill="#981249"
      />
      {/* Golden Zari Border (Zari Pallu) */}
      <path
        d="M 40 76 Q 60 94 82 86 L 86 108 Q 60 102 36 96 Z"
        fill="#d4af37"
        opacity="0.85"
      />
      <path d="M 40 76 Q 60 94 82 86" stroke="#800c3b" strokeWidth="1.5" fill="none" />

      {/* Temple Jewelry Choker & Kasu Mala */}
      <path
        d="M 50 72 Q 60 78 70 72"
        stroke="url(#brideGold)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 46 76 Q 60 88 74 76"
        stroke="url(#brideGold)"
        strokeWidth="2.5"
        strokeDasharray="2 2"
        fill="none"
      />
      {/* Mangalsutra medallion */}
      <polygon points="60,88 57,93 63,93" fill="url(#brideGold)" />
    </svg>
  );
};

// Auspicious Tirupati Balaji (Sri Venkateswara) Namam & Symbols
export const BalajiTilak: React.FC<{ size?: number; className?: string }> = ({
  size = 50,
  className = ''
}) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 100 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-label="Sri Venkateswara Thirumann Tilak"
  >
    {/* Shankha (Conch) on Left */}
    <path
      d="M 22 25 C 16 20 12 28 16 38 C 20 46 28 42 26 34 C 24 28 26 26 22 25 Z"
      stroke="#b8860b"
      strokeWidth="1.5"
      fill="#fffdf9"
    />
    {/* Chakra (Discus) on Right */}
    <circle cx="78" cy="32" r="10" stroke="#b8860b" strokeWidth="1.5" fill="#fffdf9" />
    <circle cx="78" cy="32" r="3" fill="#b8860b" />
    <path d="M 78 22 L 78 42 M 68 32 L 88 32" stroke="#b8860b" strokeWidth="1" />

    {/* Center Sacred Thirumann (White U & Red Kasturi line) */}
    {/* White U shape */}
    <path
      d="M 40 15 L 44 48 C 46 54 54 54 56 48 L 60 15 L 54 15 L 52 44 C 51 46 49 46 48 44 L 46 15 Z"
      fill="#ffffff"
      stroke="#b8860b"
      strokeWidth="1"
    />
    {/* Center Red Vermilion Tilak (Sri Churnam) */}
    <path
      d="M 49 20 L 51 20 L 50.5 54 L 49.5 54 Z"
      fill="#d00000"
    />
  </svg>
);
