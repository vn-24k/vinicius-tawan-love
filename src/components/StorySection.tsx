import React, { useState } from 'react';
import { Heart, Globe, Sparkles, MessageCircle, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../audio/CinematicAudio';
import saoPauloImg from '../assets/cities/sao-paulo.jpg';
import bangkokImg from '../assets/cities/bangkok.jpg';

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
    <section id="historia" className="relative w-full py-28 px-6 bg-[#07050a]/70 backdrop-blur-md text-white overflow-hidden border-t border-[#d4a359]/20">
      {/* Background radial celestial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#d4a359]/10 via-rose-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Top Header */}
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
            <span className="font-serif italic font-normal text-amber-200/90">{t.story.titleItalic}</span> {t.story.titleEnd}
          </h2>

          <p className="text-sm sm:text-base text-stone-300/80 max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            {t.story.subBadge} • {t.story.quote}
          </p>
        </div>

        {/* Central Geometric Composition */}
        <div className="relative py-12 mb-20">
          {/* Vertical Center Axis Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[#d4a359]/60 via-rose-500/30 to-[#d4a359]/60" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {/* Left Card: São Paulo Cosmopolita (Retângulo Grande) */}
            <div className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#18112a] via-[#100a1c] to-[#07050a] border border-[#d4a359]/35 shadow-2xl relative group hover:border-[#d4a359]/80 transition-all duration-500">
              <div>
                {/* Retângulo Grande Panorâmico: São Paulo Skyline e Ponte Estaiada */}
                <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border-2 border-[#d4a359]/50 shadow-2xl mb-6 group-hover:border-[#d4a359] transition-all duration-700 bg-black/80">
                  <img
                    src={saoPauloImg}
                    alt="São Paulo - Ponte Estaiada e Skyline Iluminado"
                    loading="eager"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Badges Flutuantes */}
                  <div className="absolute top-3.5 left-3.5 bg-[#07050a]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4a359]/40 text-[11px] font-mono text-amber-300 flex items-center gap-1.5 shadow-lg">
                    <span className="text-sm">🇧🇷</span>
                    <span className="font-bold tracking-wider">BRASIL</span>
                  </div>

                  <div className="absolute bottom-3 right-3.5 bg-[#07050a]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono text-stone-300 shadow-md">
                    23° 33' S • UTC-3
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4a359] uppercase block mb-1">
                   
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#d4a359] transition-colors">
                    São Paulo 
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300/85 font-sans leading-relaxed">
                    {t.story.p1}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4a359]/20 flex items-center justify-between text-[11px] font-mono text-amber-300/90">
                <span>COORD: 23° 33' S, 46° 38' W</span>
                <span className="text-stone-400">AMÉRICA DO SUL</span>
              </div>
            </div>

            {/* Center Master Card: The Sacred Union & Heartbeat Sync */}
            <div className="flex flex-col justify-between text-center p-8 rounded-3xl bg-gradient-to-b from-[#22153a] via-[#140c24] to-[#07050a] border-2 border-[#d4a359] shadow-[0_25px_70px_rgba(212,163,89,0.3)] relative z-20">
              <div className="flex flex-col items-center">
                {/* Sacred Monogram Crest */}
                <div className="relative my-4">
                  <div className="w-32 h-32 rotate-45 rounded-2xl border-2 border-[#d4a359] flex items-center justify-center bg-[#140e24] shadow-[0_15px_40px_rgba(212,163,89,0.25)] group-hover:rotate-90 transition-transform duration-700">
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

                <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4a359] uppercase block mt-2">
                  {lang === 'th' ? 'หัวใจที่เชื่อมถึงกัน' : 'SINCRONIA TRANSCONTINENTAL'}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                  {lang === 'th' ? 'วินิซิอุส และ ตะวัน' : 'Vinicius & Tawan'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 font-serif italic mt-3 max-w-xs leading-relaxed">
                  "{t.story.quote}"
                </p>
              </div>

              {/* Heartbeat Sync Trigger with Real Lub-Dub Audio */}
              <div className="mt-8 pt-6 border-t border-[#d4a359]/25 flex flex-col items-center">
                <button
                  onClick={handleHeartbeatSync}
                  className={`inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs font-cinzel font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${
                    heartbeatActive
                      ? 'bg-rose-600 text-white border-rose-400 scale-105 shadow-[0_0_35px_rgba(244,63,94,0.75)]'
                      : 'bg-[#d4a359] text-[#090710] border-[#d4a359] hover:bg-white hover:text-black shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${heartbeatActive ? 'fill-white text-white animate-ping' : 'fill-current'}`} />
                  <span>{t.story.syncBtn}</span>
                  <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded-full font-mono">
                    {heartbeatCount}
                  </span>
                </button>
                <span className="block text-[10px] font-mono text-[#d4a359]/80 mt-2.5">
                  {t.story.syncSub}
                </span>
              </div>
            </div>

            {/* Right Card: Bangkok Encantadora (Retângulo Grande) */}
            <div className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#18112a] via-[#100a1c] to-[#07050a] border border-[#d4a359]/35 shadow-2xl relative group hover:border-[#d4a359]/80 transition-all duration-500">
              <div>
                {/* Retângulo Grande Panorâmico: Bangkok Templo Dourado e Rio Chao Phraya */}
                <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border-2 border-[#d4a359]/50 shadow-2xl mb-6 group-hover:border-[#d4a359] transition-all duration-700 bg-black/80">
                  <img
                    src={bangkokImg}
                    alt="Bangkok - Wat Arun e Rio Chao Phraya Iluminado"
                    loading="eager"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Badges Flutuantes */}
                  <div className="absolute top-3.5 left-3.5 bg-[#07050a]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4a359]/40 text-[11px] font-mono text-[#d4a359] flex items-center gap-1.5 shadow-lg">
                    <span className="text-sm">🇹🇭</span>
                    <span className="font-bold tracking-wider">TAILÂNDIA</span>
                  </div>

                  <div className="absolute bottom-3 right-3.5 bg-[#07050a]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono text-stone-300 shadow-md">
                    13° 45' N • UTC+7
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4a359] uppercase block mb-1">
                    
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#d4a359] transition-colors">
                    Bangkok 
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300/85 font-sans leading-relaxed">
                    {t.story.p2}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4a359]/20 flex items-center justify-between text-[11px] font-mono text-[#d4a359]">
                <span>COORD: 13° 45' N, 100° 30' E</span>
                <span className="text-stone-400">SUDESTE ASIÁTICO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bilingual Love Dictionary */}
        <div className="p-8 rounded-3xl bg-[#120d20] border border-[#d4a359]/30 shadow-2xl">
          <div className="flex items-center justify-between mb-6 border-b border-[#d4a359]/20 pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4a359] flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-[#d4a359]" />
              {t.story.dictionaryTitle}
            </span>
            <span className="text-[11px] font-mono text-stone-400">{t.story.dictionarySub}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {bilingualWords.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedWord(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 ${
                  selectedWord === idx
                    ? 'bg-[#d4a359] border-[#d4a359] text-[#090710] shadow-lg font-bold'
                    : 'bg-[#07050a] border-[#d4a359]/20 text-stone-300 hover:border-[#d4a359]/60 hover:text-white'
                }`}
              >
                <span className="block text-xs uppercase tracking-wider truncate">{item.pt}</span>
                <span className={`block text-sm font-bold mt-1 ${selectedWord === idx ? 'text-[#090710]' : 'text-[#d4a359]'}`}>
                  {item.th}
                </span>
              </button>
            ))}
          </div>

          {/* Word Details Box */}
          <div className="p-5 rounded-2xl bg-[#07050a] border border-[#d4a359]/20 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#d4a359]">{bilingualWords[selectedWord].th}</span>
                <span className="text-xs font-mono text-amber-300">[{bilingualWords[selectedWord].pron}]</span>
                <span className="text-sm font-cinzel font-bold text-white">• {bilingualWords[selectedWord].pt}</span>
              </div>
              <p className="text-xs text-stone-200/90 mt-2 font-sans leading-relaxed">
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
