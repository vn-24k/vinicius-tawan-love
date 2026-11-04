import React from 'react';
import { ArrowUpRight, Compass, Heart, Globe, Sparkles } from 'lucide-react';
import { soundEngine } from '../audio/CinematicAudio';

export const ChaptersSection: React.FC = () => {
  const chapters = [
    {
      step: '01',
      title: 'A Ponte Digital & Fusos',
      subtitle: '16.540 KM & 10 HORAS DE FUSO',
      desc: 'Noites no Brasil que encontravam as manhãs em Bangkok. Cada mensagem enviada era uma certeza de que o amor é a única força capaz de dobrar o espaço-tempo.',
      badge: 'Origem',
      gradient: 'from-emerald-950/40 via-[#101218] to-black',
      borderColor: 'group-hover:border-emerald-500/50',
      tagColor: 'text-emerald-400 bg-emerald-500/10'
    },
    {
      step: '02',
      title: 'O Encontro & O Abraço',
      subtitle: 'QUANDO A DISTÂNCIA VIROU ZERO',
      desc: 'O portão de desembarque que se abre. Os olhares que se reconhecem antes mesmo das palavras. O abraço mais esperado da história entre o Brasil e o Sudeste Asiático.',
      badge: 'O Marco',
      gradient: 'from-[#2A2315]/40 via-[#101218] to-black',
      borderColor: 'group-hover:border-[#E5B869]/50',
      tagColor: 'text-[#E5B869] bg-[#E5B869]/10'
    },
    {
      step: '03',
      title: 'O Futuro Compartilhado',
      subtitle: 'DOIS LARES, UMA SÓ VIDA',
      desc: 'Planos, viagens e a celebração de um futuro onde a feijoada e o pad thai, o samba e as danças tradicionais tailandesas coexistem em pura harmonia.',
      badge: 'Eternidade',
      gradient: 'from-indigo-950/40 via-[#101218] to-black',
      borderColor: 'group-hover:border-indigo-400/50',
      tagColor: 'text-indigo-400 bg-indigo-500/10'
    }
  ];

  return (
    <section id="capitulos" className="relative w-full py-24 px-6 bg-[#08080A] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-[#E5B869] uppercase">
                03 / CAPÍTULOS DA NOSSA JORNADA
              </span>
              <span className="w-12 h-px bg-white/20" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              A LINHA DO TEMPO <br />
              <span className="font-serif italic font-normal text-slate-300">de uma</span> GRANDE PAIXÃO.
            </h2>
          </div>

          <p className="text-sm text-slate-400 max-w-md font-sans">
            Cada marco da história de Vinicius e Tawan foi forjado com paciência, carinho diário e a certeza de que nenhuma fronteira é eterna.
          </p>
        </div>

        {/* 3 Luxury Cards (Exact proportion & visual rhythm from reference template) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundEngine.playHaptic()}
              className={`group relative rounded-3xl bg-gradient-to-b ${ch.gradient} border border-white/10 ${ch.borderColor} p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-widest text-slate-400 group-hover:text-white transition-colors">
                    FASE // {ch.step}
                  </span>
                  <span className={`text-[11px] font-mono uppercase px-3 py-1 rounded-full ${ch.tagColor} border border-white/5`}>
                    {ch.badge}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                  {ch.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 group-hover:text-[#E5B869] transition-colors">
                  {ch.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {ch.desc}
                </p>
              </div>

              {/* Bottom interactive link */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  Memória Preservada
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#E5B869] group-hover:text-black text-slate-300 flex items-center justify-center transition-all duration-300">
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
