import React, { useRef, useEffect } from 'react';

interface MagneticMarqueeProps {
  text?: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

export const MagneticMarquee: React.FC<MagneticMarqueeProps> = ({
  speed = 1.2,
  direction = 'left'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const defaultItems = [
    'SÃO PAULO ⇄ BANGKOK',
    '🇧🇷 VINICIUS & TAWAN 🇹🇭',
    '16.540 KM DE AMOR',
    'UTC-3 ⇄ UTC+7',
    'ความรักไม่มีพรมแดน (AMOR SEM FRONTEIRAS)',
    'DOIS CONTINENTES, UMA SÓ FREQUÊNCIA',
    'O ATLÂNTICO ENCONTRA O GOLFO DA TAILÂNDIA',
    'DISTÂNCIA ZERO NO CORAÇÃO',
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-[#d4a359]/20 bg-black/25 backdrop-blur-sm select-none z-10">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07050a]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07050a]/90 to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex whitespace-nowrap animate-marquee items-center space-x-8"
        style={{
          display: 'inline-flex',
          animation: `marquee 35s linear infinite ${direction === 'right' ? 'reverse' : 'normal'}`
        }}
      >
        {[...defaultItems, ...defaultItems, ...defaultItems].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 text-xs font-mono uppercase tracking-[0.2em]">
            <span className="text-stone-300 font-medium hover:text-[#d4a359] transition-colors cursor-default">
              {item}
            </span>
            <span className="text-[#d4a359] text-sm">◆</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
