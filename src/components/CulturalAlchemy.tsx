import React, { useState } from 'react';
import { Sparkles, Utensils, Map, HeartHandshake, Music2, Plane } from 'lucide-react';
import { FlightPathCanvas } from './FlightPathCanvas';
import { soundEngine } from '../audio/CinematicAudio';

export const CulturalAlchemy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: 0,
      title: 'Gastronomia & Sabores',
      icon: Utensils,
      brazilTitle: 'Sabor do Brasil (Vinicius)',
      brazilDesc: 'A riqueza reconfortante do Pão de Queijo quentinho, a tradicional Feijoada de sábado e a doçura do Brigadeiro artesanal.',
      thaiTitle: 'Culinária Real Tailandesa (Tawan)',
      thaiDesc: 'O equilíbrio perfeito entre doce, picante e cítrico: Pad Thai aromático, sopa Tom Yum e o clássico Mango Sticky Rice.',
      synergy: 'Na cozinha de Vinicius e Tawan, a pimenta dedo-de-moça brasileira encontra a Thai bird chili em jantares inesquecíveis.'
    },
    {
      id: 1,
      title: 'Cidades & Paisagens',
      icon: Map,
      brazilTitle: 'São Paulo Cosmopolita',
      brazilDesc: 'A imponência da Avenida Paulista, a tranquilidade verde do Parque Ibirapuera e a garoa poética nas tardes da metrópole.',
      thaiTitle: 'Bangkok Encantadora',
      thaiDesc: 'Os templos dourados de Wat Arun, as curvas majestosas do Rio Chao Phraya e a energia vibrante dos mercados noturnos.',
      synergy: 'Duas capitais mundiais gigantescas que pulsam 24 horas por dia, unidas por um mesmo horizonte de sonhos.'
    },
    {
      id: 2,
      title: 'Espiritualidade & Valores',
      icon: HeartHandshake,
      brazilTitle: 'O Calor & Acolhimento Humano',
      brazilDesc: 'O abraço apertado brasileiro, o riso fácil, a empatia e a lealdade inabalável com quem se ama.',
      thaiTitle: 'A Serenidade & Respeito (Wai)',
      thaiDesc: 'O gesto do Sawasdee, a delicadeza de alma, a gratidão budista e a tranquilidade que acalma qualquer tempestade.',
      synergy: 'O calor do coração de Vinicius conforta Tawan; a paz e delicadeza de Tawan trazem serenidade aos dias de Vinicius.'
    },
    {
      id: 3,
      title: 'Música & Frequência',
      icon: Music2,
      brazilTitle: 'Bossa Nova & Sons Brasileiros',
      brazilDesc: 'A melancolia elegante de Tom Jobim e João Gilberto, a sutileza do violão e o compasso do coração.',
      thaiTitle: 'Harmonia Oriental & T-Pop',
      thaiDesc: 'As cordas de Khim tailandês com melodias tradicionais e a leveza moderna das canções de Bangkok.',
      synergy: 'Uma trilha sonora universal onde a língua não é barreira, porque o afeto é o idioma principal.'
    }
  ];

  return (
    <section id="alquimia" className="relative w-full py-24 px-6 bg-[#08080A] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#E5B869] uppercase">
            04 / O ENCONTRO DE DOIS MUNDOS
          </span>
          <span className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-slate-400">
            ALQUIMIA CULTURAL
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            QUANDO O BRASIL ENCONTRA <br />
            <span className="text-gold-gradient">A TAILÂNDIA</span> EM CADA DETALHE.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-4 font-sans leading-relaxed">
            A beleza do amor transcontinental está em celebrar as raízes de cada um, construindo um universo único onde as duas culturas se completam.
          </p>
        </div>

        {/* Interactive Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-4 space-y-2.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    soundEngine.playHaptic();
                  }}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-white/10 to-white/5 border-[#E5B869] text-white shadow-xl'
                      : 'bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/15 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-[#E5B869] text-black' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-white">{tab.title}</span>
                      <span className="block text-[11px] font-mono text-slate-500">Brasil × Tailândia</span>
                    </div>
                  </div>
                  <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-[#E5B869] opacity-100' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Display Card */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#12141C] via-[#0E1015] to-[#0A0C10] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E5B869]">
                  {tabs[activeTab].title}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  Harmonia Transcontinental
                </span>
              </div>

              {/* Dual cultural comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Brazil Side */}
                <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">🇧🇷</span>
                    <h4 className="text-sm font-semibold text-emerald-400">
                      {tabs[activeTab].brazilTitle}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {tabs[activeTab].brazilDesc}
                  </p>
                </div>

                {/* Thailand Side */}
                <div className="p-5 rounded-2xl bg-[#E5B869]/10 border border-[#E5B869]/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">🇹🇭</span>
                    <h4 className="text-sm font-semibold text-[#E5B869]">
                      {tabs[activeTab].thaiTitle}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {tabs[activeTab].thaiDesc}
                  </p>
                </div>
              </div>

              {/* The Synergy / Synthesis */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#E5B869]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                    A Sinergia do Casal:
                  </span>
                </div>
                <p className="text-sm text-slate-200 font-serif italic leading-relaxed">
                  "{tabs[activeTab].synergy}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Flight Path Canvas */}
        <div className="mt-8">
          <FlightPathCanvas />
        </div>
      </div>
    </section>
  );
};
