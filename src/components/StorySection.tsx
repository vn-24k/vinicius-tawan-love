import React, { useState } from 'react';
import { Heart, Globe, Sparkles, MessageCircle, Compass } from 'lucide-react';
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
      colors: ['#F43F5E', '#d4a359', '#10B981', '#FFFFFF'],
      shapes: ['circle'],
      scalar: 1.2
    });

    setTimeout(() => setHeartbeatActive(false), 800);
  };

  return (
    <section id="historia" className="relative w-full py-28 px-6 bg-[#060c09] text-white overflow-hidden border-t border-[#d4a359]/20">
      {/* Background radial jungle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#d4a359]/5 via-emerald-600/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Top Header Inspired by Template "REASONS" */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rotate-45 bg-[#d4a359]" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4a359] uppercase">
              {t.story.badge}
            </span>
            <span className="w-2.5 h-2.5 rotate-45 bg-[#d4a359]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold uppercase tracking-wide text-white leading-tight max-w-4xl mx-auto">
            {t.story.titleLine1} <br />
            <span className="text-gold-gradient">{t.story.titleHighlight}</span> {t.story.titleLine2}{' '}
            <span className="font-serif italic font-normal text-emerald-200/90">{t.story.titleItalic}</span> {t.story.titleEnd}
          </h2>

          <p className="text-sm sm:text-base text-emerald-200/70 max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            {t.story.subBadge} • {t.story.quote}
          </p>
        </div>

        {/* Central Rhombus/Diamond Geometric Composition from Reference Template */}
        <div className="relative py-12 mb-20">
          {/* Vertical Center Axis Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[#d4a359]/60 via-emerald-500/30 to-[#d4a359]/60" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left Diamond Card: São Paulo Origin */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#091510] border border-[#d4a359]/30 shadow-xl relative group hover:border-[#d4a359]/70 transition-all duration-500">
              {/* Tilted Diamond Frame */}
              <div className="w-28 h-28 my-4 rotate-45 rounded-xl border-2 border-[#d4a359] overflow-hidden shadow-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=500&q=80"
                  alt="São Paulo Skyline"
                  className="-rotate-45 scale-150 w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4a359] uppercase block mt-2">
                ORIGEM BRASIL
              </span>
              <h3 className="font-cinzel text-lg font-bold text-white mt-1">
                São Paulo Cosmopolita
              </h3>
              <p className="text-xs text-emerald-100/70 font-sans mt-2 max-w-xs leading-relaxed">
                {t.story.p1}
              </p>
              <div className="mt-4 px-3 py-1 rounded-full bg-[#060c09] border border-[#d4a359]/25 text-[10px] font-mono text-emerald-300">
                LAT: 23° 33' S // UTC-3
              </div>
            </div>

            {/* Center Master Diamond: The Sacred Union & Heartbeat Sync */}
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-[#12281e] via-[#0a1711] to-[#060c09] border-2 border-[#d4a359] shadow-[0_20px_60px_rgba(212,163,89,0.2)] relative z-20">
              {/* Pulsing Sacred Ring */}
              <div className="relative my-4">
                <div className="w-32 h-32 rotate-45 rounded-2xl border border-[#d4a359]/50 flex items-center justify-center bg-[#0c1a13] shadow-2xl">
                  <div className="-rotate-45 text-center">
                    <span className="font-cinzel font-extrabold text-2xl text-white tracking-widest block">
                      V <span className="text-[#d4a359]">&</span> T
                    </span>
                    <span className="text-[9px] font-mono text-[#d4a359] tracking-widest uppercase block mt-0.5">
                      16.540 KM
                    </span>
                  </div>
                </div>
              </div>

              <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4a359] uppercase block">
                {lang === 'th' ? 'หัวใจที่เชื่อมถึงกัน' : 'SINCRONIA TRANSCONTINENTAL'}
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white mt-1">
                {lang === 'th' ? 'วินิซิอุส และ ตะวัน' : 'Vinicius & Tawan'}
              </h3>
              <p className="text-xs text-emerald-100/80 font-serif italic mt-2 max-w-xs">
                "{t.story.quote}"
              </p>

              {/* Heartbeat Sync Trigger with Real Lub-Dub Audio */}
              <div className="mt-6">
                <button
                  onClick={handleHeartbeatSync}
                  className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-cinzel font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${
                    heartbeatActive
                      ? 'bg-rose-600 text-white border-rose-400 scale-105 shadow-[0_0_30px_rgba(244,63,94,0.7)]'
                      : 'bg-[#d4a359] text-[#060c09] border-[#d4a359] hover:bg-white hover:text-black shadow-lg'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${heartbeatActive ? 'fill-white text-white animate-ping' : 'fill-current'}`} />
                  <span>{t.story.syncBtn}</span>
                  <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded-full font-mono">
                    {heartbeatCount}
                  </span>
                </button>
                <span className="block text-[10px] font-mono text-[#d4a359]/80 mt-2">
                  {t.story.syncSub}
                </span>
              </div>
            </div>

            {/* Right Diamond Card: Bangkok Golden Light */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#091510] border border-[#d4a359]/30 shadow-xl relative group hover:border-[#d4a359]/70 transition-all duration-500">
              {/* Tilted Diamond Frame */}
              <div className="w-28 h-28 my-4 rotate-45 rounded-xl border-2 border-[#d4a359] overflow-hidden shadow-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=500&q=80"
                  alt="Bangkok Wat Arun"
                  className="-rotate-45 scale-150 w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4a359] uppercase block mt-2">
                ORIGEM TAILÂNDIA
              </span>
              <h3 className="font-cinzel text-lg font-bold text-white mt-1">
                Bangkok Encantadora
              </h3>
              <p className="text-xs text-emerald-100/70 font-sans mt-2 max-w-xs leading-relaxed">
                {t.story.p2}
              </p>
              <div className="mt-4 px-3 py-1 rounded-full bg-[#060c09] border border-[#d4a359]/25 text-[10px] font-mono text-[#d4a359]">
                LAT: 13° 45' N // UTC+7
              </div>
            </div>
          </div>
        </div>

        {/* Bilingual Love Dictionary */}
        <div className="p-8 rounded-3xl bg-[#091510] border border-[#d4a359]/30 shadow-2xl">
          <div className="flex items-center justify-between mb-6 border-b border-[#d4a359]/20 pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4a359] flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-[#d4a359]" />
              {t.story.dictionaryTitle}
            </span>
            <span className="text-[11px] font-mono text-emerald-200/60">{t.story.dictionarySub}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {bilingualWords.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedWord(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 ${
                  selectedWord === idx
                    ? 'bg-[#d4a359] border-[#d4a359] text-[#060c09] shadow-lg font-bold'
                    : 'bg-[#060c09] border-[#d4a359]/20 text-emerald-200/70 hover:border-[#d4a359]/60 hover:text-white'
                }`}
              >
                <span className="block text-xs uppercase tracking-wider truncate">{item.pt}</span>
                <span className={`block text-sm font-bold mt-1 ${selectedWord === idx ? 'text-[#060c09]' : 'text-[#d4a359]'}`}>
                  {item.th}
                </span>
              </button>
            ))}
          </div>

          {/* Word Details Box */}
          <div className="p-5 rounded-2xl bg-[#060c09] border border-[#d4a359]/20 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#d4a359]">{bilingualWords[selectedWord].th}</span>
                <span className="text-xs font-mono text-emerald-300">[{bilingualWords[selectedWord].pron}]</span>
                <span className="text-sm font-cinzel font-bold text-white">• {bilingualWords[selectedWord].pt}</span>
              </div>
              <p className="text-xs text-emerald-100/80 mt-2 font-sans leading-relaxed">
                {lang === 'th' ? bilingualWords[selectedWord].meaningTh : bilingualWords[selectedWord].meaningPt}
              </p>
            </div>
            <div className="text-right text-[10px] font-mono text-[#d4a359] uppercase tracking-widest hidden sm:block">
              {lang === 'th' ? 'สองภาษา สองใจ' : 'Cultura & Conexão'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
