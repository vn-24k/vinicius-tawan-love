import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="relative w-full bg-[#050608] text-white border-t border-white/10 pt-16 pb-12 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#E5B869]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand / Monogram */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display font-bold text-sm text-[#E5B869]">
                V&T
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">
                VINICIUS & TAWAN
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="text-emerald-400">São Paulo, BR (UTC-3)</span>
              <span>•</span>
              <span className="text-[#E5B869]">Bangkok, TH (UTC+7)</span>
            </div>
          </div>

          {/* Col 2: Coordenadas & Telemetria */}
          <div className="md:col-span-4 space-y-2 text-xs font-mono">
            <span className="text-[11px] uppercase tracking-widest text-slate-400 block mb-3">
              {t.footer.coordinatesTitle}
            </span>
            <div className="flex items-center justify-between text-slate-300 py-1 border-b border-white/5">
              <span>{t.footer.spLabel}</span>
              <span className="text-emerald-400">23.5505° S, 46.6333° W</span>
            </div>
            <div className="flex items-center justify-between text-slate-300 py-1 border-b border-white/5">
              <span>{t.footer.bkkLabel}</span>
              <span className="text-[#E5B869]">13.7563° N, 100.5018° E</span>
            </div>
            <div className="flex items-center justify-between text-slate-300 py-1 border-b border-white/5">
              <span>{t.footer.distLabel}</span>
              <span className="text-white">16.540 km</span>
            </div>
            <div className="flex items-center justify-between text-slate-300 py-1 border-b border-white/5">
              <span>{t.footer.diffLabel}</span>
              <span className="text-white">+10 Horas</span>
            </div>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div className="md:col-span-3 space-y-2 text-xs font-mono">
            <span className="text-[11px] uppercase tracking-widest text-slate-400 block mb-3">
              {t.footer.navTitle}
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#historia" className="hover:text-white transition-colors">{t.nav.history}</a></li>
              <li><a href="#clima-fusos" className="hover:text-white transition-colors">{t.nav.weather}</a></li>
              <li><a href="#capitulos" className="hover:text-white transition-colors">{t.nav.chapters}</a></li>
              <li><a href="#culinaria" className="hover:text-white transition-colors">{t.nav.culinary}</a></li>
              <li><a href="#alquimia" className="hover:text-white transition-colors">{t.nav.alchemy}</a></li>
              <li><a href="#votos" className="hover:text-white transition-colors">{t.nav.vows}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
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
