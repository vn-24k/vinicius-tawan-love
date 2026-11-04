import React, { useState } from 'react';
import { Heart, Globe, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../audio/CinematicAudio';

export const StorySection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedWord, setSelectedWord] = useState<number>(0);
  const [heartbeatActive, setHeartbeatActive] = useState<boolean>(false);
  const [heartbeatCount, setHeartbeatCount] = useState<number>(108);

  const bilingualWords = [
    { pt: 'Amor Verdadeiro', th: 'ความรักแท้', pron: 'Khwam Rak Thae', meaningPt: 'O laço que transcende oceanos e fusos horários.', meaningTh: 'สายใยรักอันมั่นคงที่อยู่เหนือกาลเวลาและระยะทาง' },
    { pt: 'Saudades', th: 'คิดถึง', pron: 'Khit-theung', meaningPt: 'A lembrança doce e constante a cada respirar do dia.', meaningTh: 'ความคำนึงหาอันแสนอบอุ่นในทุกลมหายใจ' },
    { pt: 'Meu Coração', th: 'หัวใจของฉัน', pron: 'Hua-jai Khong Chan', meaningPt: 'Onde quer que você esteja, ali habita minha paz.', meaningTh: 'ไม่ว่าคุณจะอยู่ที่ใด ที่นั่นคือความสงบสุขของหัวใจฉัน' },
    { pt: 'Para Sempre', th: 'ตลอดไป', pron: 'Ta-lot Pai', meaningPt: 'Uma promessa inquebrável, selada no tempo e no espaço.', meaningTh: 'คำมั่นสัญญาที่ไม่มีวันเปลี่ยนแปลง ตราบชั่วนิรันดร์' },
  ];

  const handleHeartbeatSync = () => {
    soundEngine.playHeartbeat();
    setHeartbeatActive(true);
    setHeartbeatCount(prev => prev + 1);

    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#F43F5E', '#E5B869', '#10B981', '#FFFFFF'],
      shapes: ['circle'],
      scalar: 1.2
    });

    setTimeout(() => setHeartbeatActive(false), 800);
  };

  return (
    <section id="historia" className="relative w-full py-24 px-6 bg-[#08080A] text-white overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E5B869]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#E5B869] uppercase">
            {t.story.badge}
          </span>
          <span className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-slate-400">
            {t.story.subBadge}
          </span>
        </div>

        {/* Asymmetrical Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Artwork Frame (Dual Emblem & World Rings) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#181B24] via-[#101218] to-[#0A0C10] border border-white/10 p-8 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/5 relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono text-slate-300">BRASIL</span>
                </div>
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-[#E5B869]">TAILÂNDIA</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5B869] animate-ping" />
                </div>
              </div>

              {/* Central Couple Graphic Frame */}
              <div className="py-10 text-center relative z-10">
                <div className="relative inline-block mb-6">
                  {/* Outer Pulsing Golden Ring */}
                  <div className="w-36 h-36 rounded-full border border-[#E5B869]/30 flex items-center justify-center animate-spin" style={{ animationDuration: '40s' }}>
                    <div className="w-32 h-32 rounded-full border border-dashed border-emerald-500/40" />
                  </div>
                  {/* Center Emblem */}
                  <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-tr from-[#1B1E28] to-[#2E2922] border border-[#E5B869]/60 flex flex-col items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-2xl text-white tracking-widest">
                      V <span className="text-[#E5B869]">&</span> T
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 mt-0.5">
                      16.540 KM
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white tracking-wide">
                  {lang === 'th' ? 'วินิซิอุส และ ตะวัน' : 'Vinicius & Tawan'}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  São Paulo (UTC-3) ⇄ Bangkok (UTC+7)
                </p>

                {/* Interactive Heartbeat Synchronizer */}
                <div className="mt-5">
                  <button
                    onClick={handleHeartbeatSync}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                      heartbeatActive
                        ? 'bg-rose-500 text-white border-rose-400 scale-105 shadow-[0_0_25px_rgba(244,63,94,0.6)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-rose-400/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${heartbeatActive ? 'fill-white text-white animate-ping' : 'text-rose-400'}`} />
                    <span>{t.story.syncBtn}</span>
                    <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full font-mono text-[#E5B869]">
                      {heartbeatCount}
                    </span>
                  </button>
                  <span className="block text-[10px] font-mono text-slate-500 mt-1.5">
                    {t.story.syncSub}
                  </span>
                </div>
              </div>

              {/* Bottom Telemetry Card */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-xs relative z-10">
                <div className="flex items-center justify-between text-slate-400 mb-1 font-mono">
                  <span>{t.story.connectionStarted}</span>
                  <span className="text-emerald-400">{t.story.permanent}</span>
                </div>
                <p className="text-slate-300 text-xs italic font-serif">
                  {t.story.quote}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Bilingual Micro-Dictionary */}
          <div className="lg:col-span-7">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-emerald-400">
                {t.story.tagSP}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-[#E5B869]">
                {t.story.tagBKK}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                {t.story.tagLove}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight text-white">
              {t.story.titleLine1} <br />
              <span className="text-gold-gradient">{t.story.titleHighlight}</span> {t.story.titleLine2}{' '}
              <span className="font-serif italic font-normal text-slate-200">{t.story.titleItalic}</span> {t.story.titleEnd}
            </h2>

            <div className="mt-6 space-y-4 text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
            </div>

            {/* Bilingual Love Dictionary */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E5B869] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.story.dictionaryTitle}
                </span>
                <span className="text-[11px] font-mono text-slate-500">{t.story.dictionarySub}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {bilingualWords.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedWord(idx);
                      soundEngine.playHaptic();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                      selectedWord === idx
                        ? 'bg-[#E5B869]/15 border-[#E5B869] text-white shadow-md'
                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200'
                    }`}
                  >
                    <span className="block text-xs font-medium truncate">{item.pt}</span>
                    <span className="block text-sm font-bold text-[#E5B869] font-sans mt-0.5">{item.th}</span>
                  </button>
                ))}
              </div>

              {/* Word Details Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-[#E5B869]">{bilingualWords[selectedWord].th}</span>
                    <span className="text-xs font-mono text-slate-400">[{bilingualWords[selectedWord].pron}]</span>
                    <span className="text-sm font-semibold text-white">• {bilingualWords[selectedWord].pt}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {lang === 'th' ? bilingualWords[selectedWord].meaningTh : bilingualWords[selectedWord].meaningPt}
                  </p>
                </div>
                <div className="text-right text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden sm:block">
                  {lang === 'th' ? 'สองภาษา สองใจ' : 'Cultura & Conexão'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
