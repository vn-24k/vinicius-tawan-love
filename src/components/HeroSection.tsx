import React from 'react';
import { Volume2, VolumeX, Heart, Compass, Languages, ArrowRight, Utensils } from 'lucide-react';
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
    <header className="relative w-full bg-[#FAF8F5] text-[#121316] overflow-hidden transition-colors duration-700">
      {/* Top Floating Glass Navigation */}
      <nav className="relative z-30 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-black/[0.06]">
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
        {/* Top Minimal Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#888D9B] uppercase">
            {t.hero.badge}
          </span>
          <span className="w-12 h-px bg-black/15" />
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t.hero.liveConnection}
          </span>
        </div>

        {/* Hero Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111317] uppercase leading-[1.08]">
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
                className="px-6 py-3 rounded-full bg-[#111317] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#252830] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>{t.hero.btnJourney}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#culinaria"
                className="px-6 py-3 rounded-full bg-white/90 text-[#111317] border border-black/10 hover:border-black/30 text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-sm"
              >
                <Utensils className="w-3.5 h-3.5 text-[#966723]" />
                <span>{t.hero.btnFlavors}</span>
              </a>
            </div>
          </div>

          {/* Right Editorial Stamp / Metric Pill */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#777C8C]">
                  {t.hero.metricDistance}
                </span>
                <Compass className="w-4 h-4 text-[#966723]" />
              </div>
              <div className="text-3xl font-display font-extrabold text-[#111317]">
                16.540 <span className="text-base font-normal font-sans text-slate-500">km</span>
              </div>
              <p className="text-xs text-[#555A67] mt-1">
                {t.hero.metricSub}
              </p>
              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-700 font-medium">🇧🇷 Brasil (SP)</span>
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                <span className="text-[#966723] font-medium">🇹🇭 Tailândia (BKK)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transitional Wave / Gradient into Deep Dark Luxury */}
      <div className="relative z-10 w-full bg-gradient-to-b from-[#FAF8F5] via-[#111318] to-[#08080A] pt-12 pb-16 px-6">
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
