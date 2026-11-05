import React from 'react';
import { Volume2, VolumeX, Heart, Compass, Languages, ArrowRight, Utensils, Sparkles, Plane } from 'lucide-react';
import { DualClockWeather } from './DualClockWeather';
import { useLanguage } from '../context/LanguageContext';
import heroCoupleImg from '../assets/hero-couple.jpg';

interface HeroSectionProps {
  audioActive: boolean;
  onToggleAudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  audioActive,
  onToggleAudio
}) => {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <header className="relative w-full bg-gradient-to-b from-[#090710] via-[#0e0918] to-[#07050b] text-[#FAF8F5] overflow-hidden border-b border-[#d4a359]/20">
      {/* Background Sacred Geometry & Atmospheric Mist */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4a35912_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-rose-500/10 via-[#d4a359]/15 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#d4a359]/20 via-rose-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Top Floating Temple Glass Navigation */}
      <nav className="relative z-30 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#d4a359]/20 backdrop-blur-md bg-[#090710]/75">
        {/* Monogram Crest */}
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rotate-45 border border-[#d4a359] bg-[#140e24] text-[#e5b869] flex items-center justify-center shadow-lg transition-transform hover:rotate-90 duration-700">
            <span className="-rotate-45 font-cinzel font-bold text-xs tracking-wider">V&T</span>
          </div>
          <div>
            <span className="font-cinzel font-bold tracking-[0.15em] text-sm text-white block">
              VINICIUS & TAWAN
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4a359] uppercase block">
              SÃO PAULO ⇄ BANGKOK
            </span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-mono tracking-[0.2em] uppercase text-stone-300">
          <a href="#historia" className="hover:text-[#d4a359] transition-colors">{t.nav.history}</a>
          <a href="#clima-fusos" className="hover:text-[#d4a359] transition-colors">{t.nav.weather}</a>
          <a href="#capitulos" className="hover:text-[#d4a359] transition-colors">{t.nav.chapters}</a>
          <a href="#culinaria" className="hover:text-[#d4a359] transition-colors">{t.nav.culinary}</a>
          <a href="#alquimia" className="hover:text-[#d4a359] transition-colors">{t.nav.alchemy}</a>
          <a href="#votos" className="hover:text-[#d4a359] transition-colors">{t.nav.vows}</a>
        </div>

        {/* Actions: Bilingual Toggle & Solo Piano */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            title={lang === 'pt' ? 'Mudar para Tailandês (ภาษาไทย)' : 'Mudar para Português (Brasil)'}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-[#140e24] text-stone-200 border border-[#d4a359]/30 hover:border-[#d4a359] shadow-sm transition-all duration-300 group"
          >
            <Languages className="w-3.5 h-3.5 text-[#d4a359] group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-semibold text-white">
              {lang === 'pt' ? '🇹🇭 ภาษาไทย' : '🇧🇷 Português'}
            </span>
          </button>

          {/* Piano Soundtrack Toggle */}
          <button
            onClick={onToggleAudio}
            title={audioActive ? 'Pausar Piano' : 'Ouvir Trilha Sonora de Piano (Erik Satie - Gymnopédie No. 1)'}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border shadow-md ${
              audioActive
                ? 'bg-[#d4a359] text-[#090710] border-[#d4a359] font-bold'
                : 'bg-[#140e24] text-[#d4a359] border-[#d4a359]/30 hover:border-[#d4a359]'
            }`}
          >
            {audioActive ? (
              <>
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-[#090710] animate-[bounce_1s_infinite] h-2.5" />
                  <span className="w-0.5 bg-[#090710] animate-[bounce_1.2s_infinite_200ms] h-3" />
                  <span className="w-0.5 bg-[#090710] animate-[bounce_0.8s_infinite_400ms] h-2" />
                </div>
                <Volume2 className="w-3.5 h-3.5 text-[#090710]" />
                <span className="text-[11px] font-semibold tracking-tight">
                  {lang === 'th' ? 'เพลงเปียโน' : 'Gymnopédie No. 1'}
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#d4a359]" />
                <span className="text-[11px] text-stone-300 hidden sm:inline">
                  {lang === 'th' ? 'เปิดเพลงบรรเลง' : 'Tocar Piano'}
                </span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Main Hero Showcase */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-28">
        {/* Top Minimal Coordinates Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rotate-45 bg-[#d4a359]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#d4a359] uppercase">
              {t.hero.badge}
            </span>
          </div>
          <span className="w-8 h-px bg-[#d4a359]/30 hidden sm:inline-block" />
          <span className="text-xs font-mono text-amber-300 bg-amber-950/50 border border-amber-500/30 px-3.5 py-1 rounded-full flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {t.hero.liveConnection}
          </span>
          <span className="text-[11px] font-mono text-stone-400 hidden md:inline-block">
            LAT: 23° S ⇄ 13° N • FUSO: 10H • 16.540 KM
          </span>
        </div>

        {/* Hero Grid: Sacred Typography Left & Grand Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (7 cols): Classical Imperial Typography */}
          <div className="lg:col-span-7">
            <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.08]">
              {t.hero.titleLine1} <br />
              <span className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-6xl text-[#d4a359] lowercase tracking-normal">
                {t.hero.titleItalic}
              </span>{' '}
              {t.hero.titleLine2}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-stone-200/90 max-w-2xl font-sans leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#historia"
                className="px-8 py-3.5 rounded-full bg-[#d4a359] text-[#090710] text-xs font-cinzel font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-[0_10px_30px_rgba(212,163,89,0.3)] hover:-translate-y-0.5"
              >
                <span>{t.hero.btnJourney}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#culinaria"
                className="px-8 py-3.5 rounded-full bg-[#140e24] text-[#d4a359] border border-[#d4a359]/40 hover:border-[#d4a359] text-xs font-cinzel font-bold uppercase tracking-[0.15em] transition-all flex items-center gap-2 shadow-md hover:-translate-y-0.5"
              >
                <Utensils className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>{t.hero.btnFlavors}</span>
              </a>
            </div>

            {/* Telemetry VIP Strip */}
            <div className="mt-12 pt-6 border-t border-[#d4a359]/20 flex flex-wrap items-center gap-6 text-xs font-mono text-stone-300/80">
              <div className="flex items-center gap-2">
                <Plane className="w-3.5 h-3.5 text-[#d4a359] transform rotate-45" />
                <span>GRU ✈ BKK</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>16.540 KM</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>UTC-3 ⇄ UTC+7</span>
              </div>
            </div>
          </div>

          {/* Photo Column: Majestic Photo Frame of Vinicius & Tawan */}
          <div className="lg:col-span-5 relative order-first lg:order-last mb-6 lg:mb-0">
            {/* Ambient Halo Glow */}
            <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-[#d4a359]/30 via-rose-600/25 to-amber-500/15 rounded-[3rem] blur-2xl pointer-events-none transform -rotate-2" />

            {/* The Main Editorial Portrait Card */}
            <div className="relative rounded-[2.2rem] bg-gradient-to-b from-[#18112a] via-[#100a1c] to-[#07050b] p-3 sm:p-4 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-[#d4a359]/45 overflow-hidden group">
              {/* Photo Frame */}
              <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-[1.8rem] overflow-hidden bg-black/80">
                <img
                  src={heroCoupleImg}
                  alt="Vinicius Silva e Tawan Kannika"
                  loading="eager"
                  className="w-full h-full object-cover object-[center_25%] transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07050b] via-transparent to-black/25" />

                {/* Floating Glass Pill Top Left */}
                <div className="absolute top-4 left-4 bg-[#090710]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d4a359]/40 shadow-lg flex items-center gap-2 text-xs font-mono text-white">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="font-bold text-[#d4a359]">16.540 KM</span>
                  <span className="text-[10px] text-stone-300">| 78° NE</span>
                </div>

                {/* Floating Glass Pill Top Right */}
                <div className="absolute top-4 right-4 bg-[#090710]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4a359]/40 text-[10px] font-mono text-[#d4a359] tracking-wider uppercase">
                  GRU ⇄ BKK
                </div>

                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#090710]/90 backdrop-blur-md p-4 rounded-xl border border-[#d4a359]/35 text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-base">🇧🇷</span>
                      <span className="text-xs font-cinzel font-bold tracking-wide text-white">Vinicius Silva</span>
                    </div>
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-cinzel font-bold tracking-wide text-white">Tawan Kannika</span>
                      <span className="text-base">🇹🇭</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-200/90 font-serif italic text-center leading-snug">
                    {lang === 'th' ? '"สองหัวใจที่เชื่อมถึงกันอย่างไร้พรมแดน"' : '"Dois oceanos, duas capitais, um só destino."'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DUAL CLOCKS & LIVE OPEN-METEO WEATHER SECTION */}
      <div className="relative z-10 w-full bg-gradient-to-b from-[#0e0a19] via-[#090710] to-[#07050a] pt-14 pb-16 px-6 border-t border-[#d4a359]/20">
        <div className="max-w-7xl mx-auto" id="clima-fusos">
          {/* Section Indicator */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4a359] bg-[#140e24] border border-[#d4a359]/30 px-4 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d4a359]" />
              {t.hero.weatherSectionBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white mt-3">
              {t.hero.weatherSectionTitle}
            </h2>
            <p className="text-sm text-stone-300/80 max-w-xl mx-auto mt-2 font-sans">
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
