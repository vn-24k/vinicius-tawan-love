import React, { useState, useEffect } from 'react';
import rioImg from '../assets/atmosphere/rio-sunset.jpg';
import watArunImg from '../assets/atmosphere/wat-arun.jpg';
import lanternsImg from '../assets/atmosphere/yi-peng-lanterns.jpg';
import amazoniaImg from '../assets/atmosphere/amazonia-sanctuary.jpg';
import buddhaImg from '../assets/atmosphere/buddha-temple.jpg';
import saoPauloImg from '../assets/cities/sao-paulo.jpg';
import bangkokImg from '../assets/cities/bangkok.jpg';
import { Sparkles, Compass, Moon, Sun, Trees } from 'lucide-react';

export type AtmosphereMode = 'fusion' | 'lanterns' | 'sanctuary' | 'metropolis';

interface AtmosphereOption {
  id: AtmosphereMode;
  namePt: string;
  nameTh: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ATMOSPHERES: AtmosphereOption[] = [
  {
    id: 'fusion',
    namePt: 'Fusão Dourada (Rio ⇄ Bangkok)',
    nameTh: 'ทไวไลท์ ริโอ ⇄ กรุงเทพฯ',
    subtitle: 'Pão de Açúcar & Wat Arun no crepúsculo dourado',
    icon: Sun,
  },
  {
    id: 'lanterns',
    namePt: 'Noite das Lanternas (Yi Peng)',
    nameTh: 'เทศกาลยี่เป็ง',
    subtitle: 'Milhares de lanternas sagradas no céu noturno',
    icon: Sparkles,
  },
  {
    id: 'sanctuary',
    namePt: 'Amazônia & Buda Sagrado',
    nameTh: 'ป่าอเมซอน & วัดศักดิ์สิทธิ์',
    subtitle: 'Florestas tropicais e templos milenares',
    icon: Trees,
  },
  {
    id: 'metropolis',
    namePt: 'São Paulo ⇄ Bangkok Noturna',
    nameTh: 'แสงไฟเซาเปาโล & กรุงเทพฯ',
    subtitle: 'A vibração luminosa das duas capitais',
    icon: Moon,
  },
];

export const TranscontinentalAtmosphere: React.FC = () => {
  const [mode, setMode] = useState<AtmosphereMode>('fusion');
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vt_atmosphere_mode') as AtmosphereMode | null;
    if (saved && ['fusion', 'lanterns', 'sanctuary', 'metropolis'].includes(saved)) {
      setMode(saved);
    }
  }, []);

  const handleSelectMode = (newMode: AtmosphereMode) => {
    setMode(newMode);
    localStorage.setItem('vt_atmosphere_mode', newMode);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* =========================================================================
          CAMADA 1: FUSÃO DOURADA (RIO DE JANEIRO ⇄ BANGKOK WAT ARUN)
      ========================================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          mode === 'fusion' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Lado Esquerdo: Rio de Janeiro / Pão de Açúcar no Entardecer */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden">
          <img
            src={rioImg}
            alt="Rio de Janeiro e Pão de Açúcar ao Entardecer"
            className="w-full h-full object-cover object-center transform scale-105 animate-[pulse_24s_ease-in-out_infinite]"
          />
          {/* Blend Gradient para a direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-[#07050a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07050a] via-transparent to-black/60" />
        </div>

        {/* Lado Direito: Bangkok Wat Arun ao Pôr do Sol Dourado */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden">
          <img
            src={watArunImg}
            alt="Wat Arun e o Rio Chao Phraya em Bangkok"
            className="w-full h-full object-cover object-center transform scale-105 animate-[pulse_28s_ease-in-out_infinite]"
          />
          {/* Blend Gradient para a esquerda */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-[#07050a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07050a] via-transparent to-black/60" />
        </div>

        {/* Luz Áurea Central Unificadora */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,163,89,0.18)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* =========================================================================
          CAMADA 2: FESTIVAL DAS LANTERNAS YI PENG & CÉU NOTURNO
      ========================================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          mode === 'lanterns' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={lanternsImg}
          alt="Festival das Lanternas Yi Peng na Tailândia"
          className="w-full h-full object-cover object-center transform scale-105 animate-[pulse_30s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#07050a]/40 to-[#07050a]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(229,184,105,0.25)_0%,transparent_60%)]" />
      </div>

      {/* =========================================================================
          CAMADA 3: AMAZÔNIA & BUDA SAGRADO
      ========================================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          mode === 'sanctuary' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] overflow-hidden">
          <img
            src={amazoniaImg}
            alt="Floresta Amazônica Tropical"
            className="w-full h-full object-cover object-center transform scale-105 animate-[pulse_26s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-[#07050a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07050a] via-transparent to-black/60" />
        </div>
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] overflow-hidden">
          <img
            src={buddhaImg}
            alt="Grande Buda Dourado e Templos Sagrados da Tailândia"
            className="w-full h-full object-cover object-center transform scale-105 animate-[pulse_28s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-[#07050a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07050a] via-transparent to-black/60" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.12)_0%,transparent_65%)]" />
      </div>

      {/* =========================================================================
          CAMADA 4: SÃO PAULO ⇄ BANGKOK NOTURNA
      ========================================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          mode === 'metropolis' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] overflow-hidden">
          <img
            src={saoPauloImg}
            alt="São Paulo Skyline Noturno"
            className="w-full h-full object-cover object-center transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-[#07050a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07050a] via-transparent to-black/70" />
        </div>
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] overflow-hidden">
          <img
            src={bangkokImg}
            alt="Bangkok Metrópole Iluminada"
            className="w-full h-full object-cover object-center transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-[#07050a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07050a] via-transparent to-black/70" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,163,89,0.15)_0%,transparent_70%)]" />
      </div>

      {/* =========================================================================
          CAMADA DE PARTÍCULAS DE LANTERNAS FLUTUANTES (YI PENG FLOATING EMBERS)
      ========================================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="lantern-particle lp-1" />
        <div className="lantern-particle lp-2" />
        <div className="lantern-particle lp-3" />
        <div className="lantern-particle lp-4" />
        <div className="lantern-particle lp-5" />
        <div className="lantern-particle lp-6" />
        <div className="lantern-particle lp-7" />
        <div className="lantern-particle lp-8" />
      </div>

      {/* =========================================================================
          CONTROLE INTERATIVO FLUTUANTE DE AMBIENTES (ATMOSPHERE SELECTOR PILL)
      ========================================================================== */}
      <aside aria-label="Controle de Cenário Atmosférico" className="fixed bottom-6 left-6 z-50 pointer-events-auto flex flex-col items-start gap-2">
        {isSelectorOpen && (
          <div className="p-3 rounded-2xl bg-[#090710]/95 backdrop-blur-xl border border-[#d4a359]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-1.5 w-72 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="px-2 py-1 flex items-center justify-between border-b border-[#d4a359]/20 pb-2">
              <span className="text-[11px] font-mono tracking-widest text-[#d4a359] uppercase font-bold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#d4a359]" />
                Atmosferas 8K
              </span>
              <span className="text-[10px] font-mono text-stone-400">BR ⇄ TH</span>
            </div>
            {ATMOSPHERES.map((atm) => {
              const Icon = atm.icon;
              const isSelected = mode === atm.id;
              return (
                <button
                  key={atm.id}
                  onClick={() => handleSelectMode(atm.id)}
                  className={`w-full px-3 py-2 rounded-xl text-left transition-all flex items-start gap-2.5 ${
                    isSelected
                      ? 'bg-[#d4a359]/20 border border-[#d4a359] text-white shadow-sm'
                      : 'hover:bg-white/5 text-stone-300 border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-[#d4a359]' : 'text-stone-400'}`} />
                  <div>
                    <div className="text-xs font-semibold leading-tight">{atm.namePt}</div>
                    <div className="text-[10px] text-stone-400 font-mono mt-0.5">{atm.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Botão de Toggle do Menu de Cenários */}
        <button
          onClick={() => setIsSelectorOpen(!isSelectorOpen)}
          title="Alternar atmosfera e cenário cinematográfico de fundo"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#090710]/85 hover:bg-[#140e24] backdrop-blur-md border border-[#d4a359]/40 hover:border-[#d4a359] text-stone-200 text-xs font-mono shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 group"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4a359] animate-spin group-hover:rotate-180 transition-transform duration-700" />
          <span className="hidden sm:inline">Cenário:</span>
          <span className="text-[#e5b869] font-semibold">
            {ATMOSPHERES.find((a) => a.id === mode)?.namePt.split('(')[0].trim()}
          </span>
        </button>
      </aside>
    </div>
  );
};
