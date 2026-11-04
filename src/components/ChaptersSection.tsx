import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ChaptersSection: React.FC = () => {
  const { t } = useLanguage();

  const chapters = [
    {
      step: '01',
      title: t.chapters.ch1.title,
      subtitle: t.chapters.ch1.subtitle,
      desc: t.chapters.ch1.desc,
      badge: t.chapters.ch1.badge,
      gradient: 'from-[#0f2218] via-[#091510] to-[#060c09]',
      borderColor: 'border-[#d4a359]/30 group-hover:border-[#d4a359]',
      tagColor: 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30'
    },
    {
      step: '02',
      title: t.chapters.ch2.title,
      subtitle: t.chapters.ch2.subtitle,
      desc: t.chapters.ch2.desc,
      badge: t.chapters.ch2.badge,
      gradient: 'from-[#1a2e22] via-[#0d1c14] to-[#060c09]',
      borderColor: 'border-[#d4a359]/50 group-hover:border-[#d4a359]',
      tagColor: 'text-[#d4a359] bg-[#0c1a13] border border-[#d4a359]/40'
    },
    {
      step: '03',
      title: t.chapters.ch3.title,
      subtitle: t.chapters.ch3.subtitle,
      desc: t.chapters.ch3.desc,
      badge: t.chapters.ch3.badge,
      gradient: 'from-[#0f2218] via-[#091510] to-[#060c09]',
      borderColor: 'border-[#d4a359]/30 group-hover:border-[#d4a359]',
      tagColor: 'text-emerald-300 bg-emerald-950/60 border border-emerald-500/30'
    }
  ];

  return (
    <section id="capitulos" className="relative w-full py-28 px-6 bg-[#08130e] text-white border-t border-[#d4a359]/20">
      <div className="max-w-7xl mx-auto">
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

          <p className="text-sm text-emerald-200/70 max-w-md font-sans leading-relaxed">
            {t.chapters.subtitle}
          </p>
        </div>

        {/* 3 Luxury Itinerary Cards Inspired by Reference Template Tours */}
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

                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300/60 block mb-2">
                  {ch.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mb-4 group-hover:text-[#d4a359] transition-colors leading-snug">
                  {ch.title}
                </h3>

                <p className="text-sm text-emerald-100/80 font-sans leading-relaxed">
                  {ch.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#d4a359]/15 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-300/70 group-hover:text-white transition-colors">
                  {t.chapters.preservedMemory}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#060c09] border border-[#d4a359]/30 group-hover:bg-[#d4a359] group-hover:text-[#060c09] text-[#d4a359] flex items-center justify-center transition-all duration-300 shadow-md">
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
