import React from 'react';
import { Volume2, VolumeX, Heart, Compass, Languages, ArrowRight, Utensils, Sparkles, Plane, ShieldCheck } from 'lucide-react';
import { DualClockWeather } from './DualClockWeather';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../audio/CinematicAudio';

interface HeroSectionProps {
  audioActive: boolean;
  onToggleAudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  audioActive,
  onToggleAudio
}) => {
  const { lang, t, toggleLang } = useLanguage();

  const handleLangClick = () => {
    soundEngine.playHaptic();
    toggleLang();
  };

  return (
    <header className="relative w-full bg-gradient-to-b from-[#FCFBF8] via-[#F7F3EB] to-[#ECE5D8] text-[#121316] overflow-hidden transition-colors duration-700">
      {/* Delicate Micro-Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1213160a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Luminescent Glows */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gradient-to-br from-[#E5B869]/20 to-rose-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-emerald-100/30 to-[#E5B869]/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Top Floating Glass Navigation */}
      <nav className="relative z-30 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-black/[0.06] backdrop-blur-sm">
        {/* Logo / Monogram */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#121316] text-[#FAF8F5] flex items-center justify-center font-display font-bold text-sm tracking-widest shadow-md">
            V&T
          </div>
          <div>
            <span className="font-display font-bold tracking-tight text-sm text-[#121316] block">
              VINICIUS & TAWAN
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#666B7A] uppercase block">
              SÃO PAULO ⇄ BANGKOK
            </span>
          </div>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase text-[#4A4D57]">
          <a href="#historia" className="hover:text-black transition-colors">{t.nav.history}</a>
          <a href="#clima-fusos" className="hover:text-black transition-colors">{t.nav.weather}</a>
          <a href="#capitulos" className="hover:text-black transition-colors">{t.nav.chapters}</a>
          <a href="#culinaria" className="hover:text-black transition-colors">{t.nav.culinary}</a>
          <a href="#alquimia" className="hover:text-black transition-colors">{t.nav.alchemy}</a>
          <a href="#votos" className="hover:text-black transition-colors">{t.nav.vows}</a>
        </div>

        {/* Actions: Language Switcher & Audio Toggle */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher Button */}
          <button
            onClick={handleLangClick}
            title={lang === 'pt' ? 'Mudar para Tailandês (ภาษาไทย)' : 'Switch to Portuguese (Português)'}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white/90 text-[#111317] border border-black/10 hover:border-black/30 shadow-sm transition-all duration-300 group"
          >
            <Languages className="w-3.5 h-3.5 text-[#966723] group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-semibold text-slate-800">
              {lang === 'pt' ? '🇹🇭 ภาษาไทย' : '🇧🇷 Português'}
            </span>
          </button>

          {/* Audio Engine Button */}
          <button
            onClick={onToggleAudio}
            title={audioActive ? 'Silenciar Trilha Procedural' : 'Ouvir Trilha Sonora Procedural'}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
              audioActive
                ? 'bg-black text-[#FAF8F5] border-black shadow-sm'
                : 'bg-white/80 text-[#333] border-black/10 hover:border-black/30'
            }`}
          >
            {audioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#E5B869] animate-pulse" />
                <span className="hidden sm:inline">{t.nav.soundActive}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">{t.nav.soundInactive}</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Main Editorial Hero Frame */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Top Minimal Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#777C8A] uppercase">
            {t.hero.badge}
          </span>
          <span className="w-8 h-px bg-black/15 hidden sm:inline-block" />
          <span className="text-xs font-mono text-emerald-800 bg-emerald-500/10 border border-emerald-400/40 px-3 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t.hero.liveConnection}
          </span>
          <span className="text-[11px] font-mono text-slate-500 hidden md:inline-block">
            LAT: 23° S ⇄ 13° N • FUSO: 10H
          </span>
        </div>

        {/* Hero Grid: Monumental Typography Left / Grand Visual Composition Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (8 cols on lg): Monumental Editorial Copy */}
          <div className="lg:col-span-7 xl:col-span-7">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111317] uppercase leading-[1.06]">
              {t.hero.titleLine1} <br />
              <span className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-6xl text-[#966723] lowercase tracking-normal">
                {t.hero.titleItalic}
              </span>{' '}
              {t.hero.titleLine2}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#555A67] max-w-2xl font-sans leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#historia"
                className="px-7 py-3.5 rounded-full bg-[#111317] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#252830] transition-all flex items-center gap-2 shadow-xl hover:-translate-y-0.5"
              >
                <span>{t.hero.btnJourney}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#culinaria"
                className="px-7 py-3.5 rounded-full bg-white/95 text-[#111317] border border-black/10 hover:border-black/30 text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-md hover:-translate-y-0.5"
              >
                <Utensils className="w-3.5 h-3.5 text-[#966723]" />
                <span>{t.hero.btnFlavors}</span>
              </a>
            </div>

            {/* Telemetry VIP Strip */}
            <div className="mt-10 pt-6 border-t border-black/[0.08] flex flex-wrap items-center gap-6 text-xs font-mono text-[#555A67]">
              <div className="flex items-center gap-2">
                <Plane className="w-3.5 h-3.5 text-[#966723] transform rotate-45" />
                <span>GRU ✈ BKK</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-emerald-700" />
                <span>16.540 KM</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#966723]" />
                <span>UTC-3 ⇄ UTC+7</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols on lg): The Showstopper Luxury Portrait Composition */}
          <div className="lg:col-span-5 xl:col-span-5 relative">
            {/* Ambient Halo behind portrait */}
            <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-[#E5B869]/30 via-rose-100/40 to-emerald-100/30 rounded-[3rem] blur-2xl pointer-events-none transform -rotate-2" />

            {/* The Main Editorial Portrait Card */}
            <div className="relative rounded-[2.5rem] bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,0.12)] border border-black/[0.06] overflow-hidden group">
              {/* Photo Frame */}
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-[2rem] overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80"
                  alt="Vinicius e Tawan - Amor Transcontinental"
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                {/* Floating Glass Pill Top Left: Geodesic Metric */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-lg flex items-center gap-2 text-xs font-mono text-[#111317]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold">16.540 KM</span>
                  <span className="text-[10px] text-slate-500">| 78° NE</span>
                </div>

                {/* Floating Glass Pill Top Right: VIP Pass */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-[#E5B869] tracking-wider uppercase">
                  GRU ⇄ BKK
                </div>

                {/* Floating Bottom Card Over Image: Couple Monogram & Vows */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-base">🇧🇷</span>
                      <span className="text-xs font-display font-bold tracking-wide">Vinicius Silva</span>
                    </div>
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-display font-bold tracking-wide">Tawan Kannika</span>
                      <span className="text-base">🇹🇭</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-300 font-serif italic text-center leading-snug">
                    {lang === 'th' ? '"สองหัวใจที่เชื่อมถึงกันอย่างไร้พรมแดน"' : '"Dois oceanos, duas capitais, um só destino."'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transitional Wave / Gradient into Deep Dark Luxury */}
      <div className="relative z-10 w-full bg-gradient-to-b from-[#ECE5D8] via-[#111318] to-[#08080A] pt-14 pb-16 px-6">
        <div className="max-w-7xl mx-auto" id="clima-fusos">
          {/* Section Indicator */}
          <div className="text-center mb-8">
            <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#E5B869] bg-white/5 border border-white/10 px-4 py-1 rounded-full backdrop-blur-md">
              {t.hero.weatherSectionBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3">
              {t.hero.weatherSectionTitle}
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mt-1">
              {t.hero.weatherSectionDesc}
            </p>
          </div>

          {/* DUAL CLOCK & WEATHER COMPONENT */}
          <DualClockWeather />
        </div>
      </div>
    </header>
  );
};
