import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import bgFooter from '../assets/atmosphere/bg-section-footer.jpg';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative w-full text-white pt-20 pb-14 px-6 overflow-hidden">
      {/* Floating Golden Subtle Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#d4a359]/35 to-transparent pointer-events-none z-10" />

      {/* Footer Celestial Background with Seamless Vertical Dissolve */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_100%)]">
        <img
          src={bgFooter}
          alt="Skyline da Ponte Estaiada em São Paulo e Wat Arun em Bangkok sob o Céu Estrelado"
          className="w-full h-full object-cover object-[center_60%] filter brightness-[0.92] contrast-[1.12] saturate-[1.28]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />
      </div>

      {/* Atmospheric Vertical Continuous Mist Overlay */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#07050a] via-[#07050a]/60 to-transparent pointer-events-none z-[1]" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-36 bg-[#d4a359]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto bg-black/55 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#d4a359]/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#d4a359]/20">
          {/* Col 1: Brand / Monogram */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rotate-45 border border-[#d4a359] bg-[#140e24] text-[#e5b869] flex items-center justify-center shadow-lg">
                <span className="-rotate-45 font-cinzel font-bold text-xs">V&T</span>
              </div>
              <span className="font-cinzel font-bold text-base tracking-[0.15em] text-white">
                VINICIUS & TAWAN
              </span>
            </div>
            <p className="text-xs text-stone-400 font-sans max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-stone-300">
              <span className="text-amber-400">São Paulo, BR (UTC-3)</span>
              <span>•</span>
              <span className="text-[#d4a359]">Bangkok, TH (UTC+7)</span>
            </div>
          </div>

          {/* Col 2: Coordinates & Telemetry */}
          <div className="md:col-span-4 space-y-2 text-xs font-mono">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4a359] block mb-3 font-bold">
              {t.footer.coordinatesTitle}
            </span>
            <div className="flex items-center justify-between text-stone-300 py-1.5 border-b border-[#d4a359]/15">
              <span>{t.footer.spLabel}</span>
              <span className="text-amber-400 font-semibold">23.5505° S, 46.6333° W</span>
            </div>
            <div className="flex items-center justify-between text-stone-300 py-1.5 border-b border-[#d4a359]/15">
              <span>{t.footer.bkkLabel}</span>
              <span className="text-[#d4a359] font-semibold">13.7563° N, 100.5018° E</span>
            </div>
            <div className="flex items-center justify-between text-stone-300 py-1.5 border-b border-[#d4a359]/15">
              <span>{t.footer.distLabel}</span>
              <span className="text-white font-semibold">16.540 km</span>
            </div>
            <div className="flex items-center justify-between text-stone-300 py-1.5 border-b border-[#d4a359]/15">
              <span>{t.footer.diffLabel}</span>
              <span className="text-white font-semibold">+10 Horas</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="md:col-span-3 space-y-2 text-xs font-mono">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4a359] block mb-3 font-bold">
              {t.footer.navTitle}
            </span>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#historia" className="hover:text-[#d4a359] transition-colors">{t.nav.history}</a></li>
              <li><a href="#clima-fusos" className="hover:text-[#d4a359] transition-colors">{t.nav.weather}</a></li>
              <li><a href="#capitulos" className="hover:text-[#d4a359] transition-colors">{t.nav.chapters}</a></li>
              <li><a href="#culinaria" className="hover:text-[#d4a359] transition-colors">{t.nav.culinary}</a></li>
              <li><a href="#alquimia" className="hover:text-[#d4a359] transition-colors">{t.nav.alchemy}</a></li>
              <li><a href="#votos" className="hover:text-[#d4a359] transition-colors">{t.nav.vows}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <div className="flex items-center gap-1.5">
            <span>{t.footer.craftedWithLove}</span>
            <strong className="text-white font-medium">Vinicius Silva & Tawan Kannika</strong>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 ml-1" />
          </div>
          <div className="text-center sm:text-right">
            <span>{t.footer.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
