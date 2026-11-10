import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import bgChapters from '../assets/atmosphere/bg-section-chapters.jpg';

export const ChaptersSection: React.FC = () => {
  const { t } = useLanguage();

  const chapters = [
    {
      step: '01',
      title: t.chapters.ch1.title,
      subtitle: t.chapters.ch1.subtitle,
      desc: t.chapters.ch1.desc,
      badge: t.chapters.ch1.badge,
      gradient: 'from-black/60 via-black/45 to-black/60 backdrop-blur-md',
      borderColor: 'border-[#d4a359]/35 group-hover:border-[#d4a359]',
      tagColor: 'text-amber-300 bg-amber-950/60 border border-amber-500/40'
    },
    {
      step: '02',
      title: t.chapters.ch2.title,
      subtitle: t.chapters.ch2.subtitle,
      desc: t.chapters.ch2.desc,
      badge: t.chapters.ch2.badge,
      gradient: 'from-black/65 via-black/50 to-black/65 backdrop-blur-md',
      borderColor: 'border-[#d4a359]/50 group-hover:border-[#d4a359]',
      tagColor: 'text-[#d4a359] bg-[#140e24]/80 border border-[#d4a359]/50'
    },
    {
      step: '03',
      title: t.chapters.ch3.title,
      subtitle: t.chapters.ch3.subtitle,
      desc: t.chapters.ch3.desc,
      badge: t.chapters.ch3.badge,
      gradient: 'from-black/60 via-black/45 to-black/60 backdrop-blur-md',
      borderColor: 'border-[#d4a359]/35 group-hover:border-[#d4a359]',
      tagColor: 'text-rose-300 bg-rose-950/60 border border-rose-500/40'
    }
  ];

  return (
    <section id="capitulos" className="relative w-full py-28 px-6 text-white overflow-hidden">
      {/* Floating Golden Subtle Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#d4a359]/35 to-transparent pointer-events-none z-10" />

      {/* Dedicated Section Background with Seamless Vertical Dissolve */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_16%,black_84%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_16%,black_84%,transparent_100%)]">
        <img
          src={bgChapters}
          alt="Cataratas do Iguaçu e Santuário de Elefantes de Chiang Mai"
          className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.12] saturate-[1.28]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Atmospheric Vertical Continuous Mist Overlays */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#07050a] via-[#07050a]/60 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#07050a] via-[#07050a]/60 to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#d4a359]/20 pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#d4a359]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#d4a359] uppercase">
                {t.chapters.badge}
              </span>
              <span className="w-12 h-px bg-[#d4a359]/30" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold uppercase tracking-wide text-white">
              {t.chapters.titleLine1} <br />
              <span className="font-serif italic font-normal text-[#d4a359]">{t.chapters.titleItalic}</span> {t.chapters.titleLine2}
            </h2>
          </div>

          <p className="text-sm text-stone-300/80 max-w-md font-sans leading-relaxed">
            {t.chapters.subtitle}
          </p>
        </div>

        {/* 3 Luxury Itinerary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl bg-gradient-to-b ${ch.gradient} border ${ch.borderColor} p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden`}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a359]/40 to-transparent" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-[0.2em] text-[#d4a359] group-hover:text-white transition-colors">
                    FASE // {ch.step}
                  </span>
                  <span className={`text-[11px] font-mono uppercase px-3 py-1 rounded-full ${ch.tagColor}`}>
                    {ch.badge}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4a359]/80 block mb-2">
                  {ch.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mb-4 group-hover:text-[#d4a359] transition-colors leading-snug">
                  {ch.title}
                </h3>

                <p className="text-sm text-stone-200/90 font-sans leading-relaxed">
                  {ch.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#d4a359]/15 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400 group-hover:text-white transition-colors">
                  {t.chapters.preservedMemory}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#07050b] border border-[#d4a359]/30 group-hover:bg-[#d4a359] group-hover:text-[#090710] text-[#d4a359] flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
