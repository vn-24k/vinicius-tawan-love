import React, { useState } from 'react';
import { Sparkles, Utensils, Map, HeartHandshake, Music2 } from 'lucide-react';
import { FlightPathCanvas } from './FlightPathCanvas';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../audio/CinematicAudio';

export const CulturalAlchemy: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: 0,
      title: t.alchemy.tabs.gastronomy.title,
      icon: Utensils,
      brazilTitle: lang === 'th' ? 'รสชาติแบบบราซิล (วินิซิอุส)' : 'Sabor do Brasil (Vinicius)',
      brazilDesc: t.alchemy.tabs.gastronomy.brDesc,
      brazilImg: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
      brazilImgAlt: 'Feijoada e gastronomia paulistana',
      thaiTitle: lang === 'th' ? 'อาหารไทยต้นตำรับ (ตะวัน)' : 'Culinária Real Tailandesa (Tawan)',
      thaiDesc: t.alchemy.tabs.gastronomy.thDesc,
      thaiImg: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
      thaiImgAlt: 'Pad Thai e comida de rua de Bangkok',
      synergy: t.alchemy.tabs.gastronomy.synergy
    },
    {
      id: 1,
      title: t.alchemy.tabs.landscapes.title,
      icon: Map,
      brazilTitle: lang === 'th' ? 'เซาเปาโล มหานครแห่งสีสัน' : 'São Paulo Cosmopolita',
      brazilDesc: t.alchemy.tabs.landscapes.brDesc,
      brazilImg: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80',
      brazilImgAlt: 'Avenida Paulista e skyline de São Paulo',
      thaiTitle: lang === 'th' ? 'กรุงเทพมหานคร เมืองฟ้าอมร' : 'Bangkok Encantadora',
      thaiDesc: t.alchemy.tabs.landscapes.thDesc,
      thaiImg: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
      thaiImgAlt: 'Wat Arun e o Rio Chao Phraya em Bangkok',
      synergy: t.alchemy.tabs.landscapes.synergy
    },
    {
      id: 2,
      title: t.alchemy.tabs.spirit.title,
      icon: HeartHandshake,
      brazilTitle: lang === 'th' ? 'ความอบอุ่นและมิตรภาพบราซิล' : 'O Calor & Acolhimento Humano',
      brazilDesc: t.alchemy.tabs.spirit.brDesc,
      brazilImg: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
      brazilImgAlt: 'Abraço caloroso e carinho brasileiro',
      thaiTitle: lang === 'th' ? 'ความอ่อนน้อมและจิตวิญญาณแห่งสยาม' : 'A Serenidade & Respeito (Wai)',
      thaiDesc: t.alchemy.tabs.spirit.thDesc,
      thaiImg: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      thaiImgAlt: 'Serenidade budista e templos de Bangkok',
      synergy: t.alchemy.tabs.spirit.synergy
    },
    {
      id: 3,
      title: t.alchemy.tabs.music.title,
      icon: Music2,
      brazilTitle: lang === 'th' ? 'บอสซาโนวาและเสียงดนตรีบราซิล' : 'Bossa Nova & Sons Brasileiros',
      brazilDesc: t.alchemy.tabs.music.brDesc,
      brazilImg: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80',
      brazilImgAlt: 'Violão acústico e música brasileira',
      thaiTitle: lang === 'th' ? 'ดนตรีไทยและท่วงทำนองร่วมสมัย' : 'Harmonia Oriental & T-Pop',
      thaiDesc: t.alchemy.tabs.music.thDesc,
      thaiImg: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      thaiImgAlt: 'Harmonia e celebração cultural de Bangkok',
      synergy: t.alchemy.tabs.music.synergy
    }
  ];

  return (
    <section id="alquimia" className="relative w-full py-24 px-6 bg-[#08080A] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#E5B869] uppercase">
            {t.alchemy.badge}
          </span>
          <span className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-slate-400">
            {t.alchemy.subBadge}
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            {t.alchemy.titleLine1} <br />
            <span className="text-gold-gradient">{t.alchemy.titleHighlight}</span> {t.alchemy.titleLine2}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-4 font-sans leading-relaxed">
            {t.alchemy.subtitle}
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

          {/* Right Column: Tab Display Card with Real Photography */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#12141C] via-[#0E1015] to-[#0A0C10] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E5B869]">
                  {tabs[activeTab].title}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {lang === 'th' ? 'ความลงตัวของสองซีกโลก' : 'Harmonia Transcontinental'}
                </span>
              </div>

              {/* Dual cultural photographic cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Brazil Side Card */}
                <div className="rounded-2xl bg-emerald-950/20 border border-emerald-500/20 overflow-hidden group">
                  <div className="relative w-full h-44 overflow-hidden bg-black/40">
                    <img
                      src={tabs[activeTab].brazilImg}
                      alt={tabs[activeTab].brazilImgAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs flex items-center gap-1.5">
                      <span className="text-base">🇧🇷</span>
                      <span className="font-mono text-[10px] text-emerald-400 font-semibold">BRASIL</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                      {tabs[activeTab].brazilTitle}
                    </h4>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {tabs[activeTab].brazilDesc}
                    </p>
                  </div>
                </div>

                {/* Thailand Side Card */}
                <div className="rounded-2xl bg-[#E5B869]/10 border border-[#E5B869]/20 overflow-hidden group">
                  <div className="relative w-full h-44 overflow-hidden bg-black/40">
                    <img
                      src={tabs[activeTab].thaiImg}
                      alt={tabs[activeTab].thaiImgAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15120E] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs flex items-center gap-1.5">
                      <span className="text-base">🇹🇭</span>
                      <span className="font-mono text-[10px] text-[#E5B869] font-semibold">THAILAND</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-sm font-semibold text-[#E5B869] mb-2">
                      {tabs[activeTab].thaiTitle}
                    </h4>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {tabs[activeTab].thaiDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* The Synergy / Synthesis */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#E5B869]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                    {t.alchemy.synergyLabel}
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
