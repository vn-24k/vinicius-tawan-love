import React, { useState } from 'react';
import { Send, Sparkles, MessageSquareQuote } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../audio/CinematicAudio';

interface Note {
  id: number;
  author: string;
  location: string;
  text: string;
  date: string;
}

export const VowsAndGuestbook: React.FC = () => {
  const { lang, t } = useLanguage();

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      author: 'Família Silva',
      location: 'São Paulo, Brasil',
      text: 'O amor de vocês é uma inspiração divina. Que a alegria de São Paulo e a paz de Bangkok abençoem cada dia dessa linda jornada!',
      date: 'Hoje'
    },
    {
      id: 2,
      author: 'Kannika Family',
      location: 'Bangkok, Tailândia',
      text: 'ยินดีด้วยจากใจ ขอให้ความรักของทั้งสองคนมั่นคงและเต็มไปด้วยความสุขตลอดไป (Felicidades de coração, que o amor seja sempre firme e repleto de paz!)',
      date: 'Hoje'
    },
    {
      id: 3,
      author: 'Amigos Transcontinentais',
      location: 'GRU ⇄ BKK',
      text: '16.500 km não são nada perto da força desse encontro. Estamos ansiosos para celebrar esse casamento nos dois países!',
      date: 'Hoje'
    }
  ]);

  const [authorInput, setAuthorInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorInput.trim() || !msgInput.trim()) return;

    soundEngine.playHaptic();
    setIsSubmitting(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#E5B869', '#10B981', '#FFFFFF', '#F43F5E']
    });

    const newNote: Note = {
      id: Date.now(),
      author: authorInput.trim(),
      location: locationInput.trim() || (lang === 'th' ? 'บราซิล ⇄ ไทย' : 'Brasil ⇄ Tailândia'),
      text: msgInput.trim(),
      date: lang === 'th' ? 'เมื่อสักครู่' : 'Agora mesmo'
    };

    setNotes([newNote, ...notes]);
    setAuthorInput('');
    setLocationInput('');
    setMsgInput('');
    setIsSubmitting(false);
  };

  return (
    <section id="votos" className="relative w-full py-24 px-6 bg-[#08080A] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#E5B869] uppercase">
            {t.vows.badge}
          </span>
          <span className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-slate-400">
            {t.vows.subBadge}
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            {t.vows.titleLine1} <br />
            <span className="text-gold-gradient">{t.vows.titleHighlight}</span>.
          </h2>
        </div>

        {/* Vows Side-by-Side (Vinicius & Tawan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vow Vinicius */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#12181F] via-[#0E1218] to-black border border-emerald-500/30 p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🇧🇷</span>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  {t.vows.viniciusTitle}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">{t.vows.viniciusLocation}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-100 font-serif italic leading-relaxed mb-6">
              {t.vows.viniciusText}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-slate-400">
              <span className="text-white font-semibold">Vinicius Silva</span>
              <span className="text-emerald-400">{t.vows.viniciusFromTo}</span>
            </div>
          </div>

          {/* Vow Tawan */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1F1B12] via-[#18140E] to-black border border-[#E5B869]/30 p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🇹🇭</span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E5B869] font-bold">
                  {t.vows.tawanTitle}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">{t.vows.tawanLocation}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-100 font-serif italic leading-relaxed mb-6">
              {t.vows.tawanText}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-slate-400">
              <span className="text-white font-semibold">Tawan Kannika</span>
              <span className="text-[#E5B869]">{t.vows.tawanFromTo}</span>
            </div>
          </div>
        </div>

        {/* Interactive Guestbook / Mural */}
        <div className="rounded-3xl bg-[#0D0F14] border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5 mb-8">
            <div>
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <MessageSquareQuote className="w-5 h-5 text-[#E5B869]" />
                {t.vows.muralTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {t.vows.muralSubtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-[#E5B869] bg-[#E5B869]/10 px-3 py-1 rounded-full border border-[#E5B869]/20 self-start sm:self-auto">
              {notes.length} {t.vows.registeredCount}
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-8">
            <div className="sm:col-span-4">
              <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                {t.vows.nameLabel}
              </label>
              <input
                type="text"
                required
                placeholder={t.vows.namePlaceholder}
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5B869] transition-colors"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                {t.vows.originLabel}
              </label>
              <input
                type="text"
                placeholder={t.vows.originPlaceholder}
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5B869] transition-colors"
              />
            </div>

            <div className="sm:col-span-5 flex items-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#E5B869] to-[#C89B48] text-black font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.vows.btnSubmit}</span>
              </button>
            </div>

            <div className="sm:col-span-12">
              <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                {t.vows.messageLabel}
              </label>
              <textarea
                required
                rows={2}
                placeholder={t.vows.messagePlaceholder}
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5B869] transition-colors resize-none"
              />
            </div>
          </form>

          {/* List of Messages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all"
              >
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                  "{note.text}"
                </p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white font-medium">{note.author}</span>
                  <span className="text-slate-500">{note.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
