import React, { useState } from 'react';
import { Sparkles, Utensils, Map, HeartHandshake, Music2 } from 'lucide-react';
import { FlightPathCanvas } from './FlightPathCanvas';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../audio/CinematicAudio';
import saoPauloImg from '../assets/cities/sao-paulo.jpg';
import bangkokImg from '../assets/cities/bangkok.jpg';

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
      brazilImg: '/dishes/feijoada.jpg',
      brazilImgAlt: 'Feijoada legítima e gastronomia paulistana',
      thaiTitle: lang === 'th' ? 'อาหารไทยต้นตำรับ (ตะวัน)' : 'Culinária Real Tailandesa (Tawan)',
      thaiDesc: t.alchemy.tabs.gastronomy.thDesc,
      thaiImg: '/dishes/pad_thai.jpg',
      thaiImgAlt: 'Pad Thai e comida de rua de Bangkok',
      synergy: t.alchemy.tabs.gastronomy.synergy
    },
    {
      id: 1,
      title: t.alchemy.tabs.landscapes.title,
      icon: Map,
      brazilTitle: lang === 'th' ? 'เซาเปาโล มหานครแห่งสีสัน' : 'São Paulo Cosmopolita',
      brazilDesc: t.alchemy.tabs.landscapes.brDesc,
      brazilImg: saoPauloImg,
      brazilImgAlt: 'Ponte Estaiada e skyline iluminado de São Paulo',
      thaiTitle: lang === 'th' ? 'กรุงเทพมหานคร เมืองฟ้าอมร' : 'Bangkok Encantadora',
      thaiDesc: t.alchemy.tabs.landscapes.thDesc,
      thaiImg: bangkokImg,
      thaiImgAlt: 'Wat Arun e o Rio Chao Phraya iluminado em Bangkok',
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
    <section id="alquimia" className="relative w-full py-28 px-6 bg-[#07050a]/75 backdrop-blur-md text-white border-t border-[#d4a359]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-2.5 h-2.5 rotate-45 bg-[#d4a359]" />
          <span className="text-xs font-mono tracking-[0.25em] text-[#d4a359] uppercase">
            {t.alchemy.badge}
          </span>
          <span className="w-12 h-px bg-[#d4a359]/30" />
          <span className="text-xs font-mono text-stone-400">
            {t.alchemy.subBadge}
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold uppercase tracking-wide text-white">
            {t.alchemy.titleLine1} <br />
            <span className="text-gold-gradient">{t.alchemy.titleHighlight}</span> {t.alchemy.titleLine2}
          </h2>
          <p className="text-sm sm:text-base text-stone-300/80 max-w-2xl mt-4 font-sans leading-relaxed">
            {t.alchemy.subtitle}
          </p>
        </div>

        {/* Interactive Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-4 space-y-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#221535] to-[#120b1f] border-[#d4a359] text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                      : 'bg-[#120c20] border-[#d4a359]/20 text-stone-400 hover:border-[#d4a359]/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-[#d4a359] text-[#090710]' : 'bg-[#181128] text-[#d4a359]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-white">{tab.title}</span>
                      <span className="block text-[11px] font-mono text-[#d4a359]/70">Brasil × Tailândia</span>
                    </div>
                  </div>
                  <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-[#d4a359] opacity-100' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Display Card with Real Photography */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#18112a] via-[#100a1c] to-[#07050a] border border-[#d4a359]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-[#d4a359]/20 mb-6">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4a359] font-bold">
                  {tabs[activeTab].title}
                </span>
                <span className="text-[11px] font-mono text-[#d4a359] bg-[#07050a]/80 px-3 py-1 rounded-full border border-[#d4a359]/30">
                  {lang === 'th' ? 'ความลงตัวของสองซีกโลก' : 'Harmonia Transcontinental'}
                </span>
              </div>

              {/* Dual cultural photographic cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Brazil Side Card */}
                <div className="rounded-2xl bg-[#1c1228] border border-amber-500/25 overflow-hidden group">
                  <div className="relative w-full h-52 overflow-hidden bg-black/40">
                    <img
                      src={tabs[activeTab].brazilImg}
                      alt={tabs[activeTab].brazilImgAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1228] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs flex items-center gap-1.5">
                      <span className="text-base">🇧🇷</span>
                      <span className="font-mono text-[10px] text-amber-400 font-semibold">BRASIL</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-sm font-semibold text-amber-400 mb-2">
                      {tabs[activeTab].brazilTitle}
                    </h4>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {tabs[activeTab].brazilDesc}
                    </p>
                  </div>
                </div>

                {/* Thailand Side Card */}
                <div className="rounded-2xl bg-[#E5B869]/10 border border-[#E5B869]/25 overflow-hidden group">
                  <div className="relative w-full h-52 overflow-hidden bg-black/40">
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
