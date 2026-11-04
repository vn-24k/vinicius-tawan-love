import React, { useState } from 'react';
import { X, Sliders, Heart, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import {
  UivSwitchTranscontinental,
  UivSwitchNocturnal,
  UivSwitchAurora,
  UivSwitchTimezone,
  UivBtnConnectHearts,
  UivBtnSealPromise,
  UivBtnSendVow,
  UivBtnLightBangkok,
  UivInputSearchMemories,
  UivInputLoveLetter,
  UivInputCoordinate,
  UivLoaderAtlantic,
  UivLoaderFlightStream,
  UivLoaderSoulOrbit,
  UivTooltipSaoPaulo,
  UivTooltipBangkok,
  UivCardFlightPass,
  UivCardAmulet,
  UivRadioSeasonSummer,
  UivRadioSeasonBreeze,
  UivCheckEverpresent,
  UivCheckDistanceZero,
  LOVE_INSTRUMENTS_MANIFEST
} from './uiverse-elements';
import { soundEngine } from '../audio/CinematicAudio';

interface ConnectionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectionDrawer: React.FC<ConnectionDrawerProps> = ({ isOpen, onClose }) => {
  const [filterCat, setFilterCat] = useState<string>('all');
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const triggerFeedback = (name: string) => {
    setActiveNotification(`Instrumento ativado: ${name}`);
    setTimeout(() => setActiveNotification(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0B0D12] border-l border-white/10 text-white shadow-2xl h-full flex flex-col transform transition-transform duration-300 animate-in slide-in-from-right">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#10131A]">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-[#E5B869]/10 text-[#E5B869] border border-[#E5B869]/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                Instrumentos de Conexão Transcontinental
                <span className="text-[10px] font-mono bg-white/10 text-[#E5B869] px-2 py-0.5 rounded-full">
                  22 Módulos
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Módulos táteis, seletores de sintonia e controles do amor entre São Paulo e Bangkok.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="px-6 py-3 border-b border-white/5 bg-[#0C0E14] flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setFilterCat('all')}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              filterCat === 'all'
                ? 'bg-[#E5B869] text-black font-semibold'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Todos os 22
          </button>
          <button
            onClick={() => setFilterCat('switches')}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              filterCat === 'switches'
                ? 'bg-[#E5B869] text-black font-semibold'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Comutadores & Fusos (4)
          </button>
          <button
            onClick={() => setFilterCat('buttons')}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              filterCat === 'buttons'
                ? 'bg-[#E5B869] text-black font-semibold'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Botões de Pulso (4)
          </button>
          <button
            onClick={() => setFilterCat('inputs')}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              filterCat === 'inputs'
                ? 'bg-[#E5B869] text-black font-semibold'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Entradas de Frequência (3)
          </button>
          <button
            onClick={() => setFilterCat('loaders')}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              filterCat === 'loaders'
                ? 'bg-[#E5B869] text-black font-semibold'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Ressonância e Marés (3)
          </button>
          <button
            onClick={() => setFilterCat('cards')}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
              filterCat === 'cards'
                ? 'bg-[#E5B869] text-black font-semibold'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Passaportes & Amuletos (8)
          </button>
        </div>

        {/* Live Notification Pill */}
        {activeNotification && (
          <div className="bg-emerald-500/10 border-b border-emerald-500/30 px-6 py-2 text-xs text-emerald-400 font-mono flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{activeNotification}</span>
          </div>
        )}

        {/* Content Body: The 22 Scoped Components in Responsive Grid */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Section: Comutadores */}
          {(filterCat === 'all' || filterCat === 'switches') && (
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5B869]">
                  01 // COMUTADORES & SINCRONIZADORES DE FUSO
                </span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UivSwitchTranscontinental onClick={() => triggerFeedback('Comutador Brasil ⇄ Tailândia')} />
                <UivSwitchNocturnal onClick={() => triggerFeedback('Frequência Noturna Compartilhada')} />
                <UivSwitchAurora onClick={() => triggerFeedback('Ponte de Luz BKK-GRU')} />
                <UivSwitchTimezone onClick={() => triggerFeedback('Calibrador de Fuso Horário')} />
              </div>
            </div>
          )}

          {/* Section: Botões de Pulso */}
          {(filterCat === 'all' || filterCat === 'buttons') && (
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                  02 // BOTÕES DE PULSO & TRANSMISSÃO
                </span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UivBtnConnectHearts onClick={() => triggerFeedback('União de Almas')} />
                <UivBtnSealPromise onClick={() => triggerFeedback('Selo da Promessa Eterna')} />
                <UivBtnSendVow onClick={() => triggerFeedback('Transmissor de Afeto')} />
                <UivBtnLightBangkok onClick={() => triggerFeedback('Luzes do Chao Phraya')} />
              </div>
            </div>
          )}

          {/* Section: Entradas & Cartas */}
          {(filterCat === 'all' || filterCat === 'inputs') && (
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400">
                  03 // CAMPOS DE AFETO & SINTONIA
                </span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UivInputSearchMemories onClick={() => triggerFeedback('Busca no Álbum de Memórias')} />
                <UivInputLoveLetter onClick={() => triggerFeedback('Cápsula de Mensagem Privada')} />
                <UivInputCoordinate onClick={() => triggerFeedback('Sintonia de Frequência Afetiva')} />
              </div>
            </div>
          )}

          {/* Section: Ressonância & Loaders */}
          {(filterCat === 'all' || filterCat === 'loaders') && (
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400">
                  04 // RESSONÂNCIA CELULAR & MARÉS
                </span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UivLoaderAtlantic onClick={() => triggerFeedback('Ondas do Atlântico & Pacífico')} />
                <UivLoaderFlightStream onClick={() => triggerFeedback('Trajetória de Voo Contínua')} />
                <UivLoaderSoulOrbit onClick={() => triggerFeedback('Órbita das Almas Gêmeas')} />
              </div>
            </div>
          )}

          {/* Section: Passaportes, Selos & Amuletos */}
          {(filterCat === 'all' || filterCat === 'cards') && (
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5B869]">
                  05 // PASSAPORTES, MARCOS & PACTOS SELADOS
                </span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UivCardFlightPass onClick={() => triggerFeedback('Passaporte do Coração')} />
                <UivCardAmulet onClick={() => triggerFeedback('Amuleto de Proteção Budista & Axé')} />
                <UivTooltipSaoPaulo onClick={() => triggerFeedback('Marco de São Paulo')} />
                <UivTooltipBangkok onClick={() => triggerFeedback('Marco de Bangkok')} />
                <UivRadioSeasonSummer onClick={() => triggerFeedback('Estação: Calor Tropical Brasileiro')} />
                <UivRadioSeasonBreeze onClick={() => triggerFeedback('Estação: Brisa Dourada de Bangkok')} />
                <UivCheckEverpresent onClick={() => triggerFeedback('Pacto: Nunca Esquecer o Sorriso')} />
                <UivCheckDistanceZero onClick={() => triggerFeedback('Pacto: Distância Zero no Sentir')} />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0C0E14] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Vinicius Silva & Tawan Kannika</span>
          <span className="text-[#E5B869]">São Paulo ⇄ Bangkok</span>
        </div>
      </div>
    </div>
  );
};
