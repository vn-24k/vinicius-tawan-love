import React, { useState } from 'react';
import { Send, Sparkles, MessageSquareQuote } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

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
      text: 'O amor de vocês é uma bênção cósmica. Que o calor de São Paulo e a serenidade de Bangkok abençoem cada dia dessa união eterna!',
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
      text: '16.540 km só tornam essa história ainda mais grandiosa e inesquecível. Estamos ansiosos para celebrar nos dois continentes!',
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

    setIsSubmitting(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#d4a359', '#F43F5E', '#FFFFFF', '#F59E0B']
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
    <section id="votos" className="relative w-full py-28 px-6 bg-black/40 backdrop-blur-md text-white border-t border-[#d4a359]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-2.5 h-2.5 rotate-45 bg-[#d4a359]" />
          <span className="text-xs font-mono tracking-[0.25em] text-[#d4a359] uppercase">
            {t.vows.badge}
          </span>
          <span className="w-12 h-px bg-[#d4a359]/30" />
          <span className="text-xs font-mono text-stone-400">
            {t.vows.subBadge}
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold uppercase tracking-wide text-white">
            {t.vows.titleLine1} <br />
            <span className="text-gold-gradient">{t.vows.titleHighlight}</span>.
          </h2>
        </div>

        {/* Vows Side-by-Side (Vinicius & Tawan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vow Vinicius */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#181129] to-[#0c0817] border border-amber-500/40 p-8 shadow-2xl group hover:border-amber-400 transition-all duration-500">
            <div className="flex items-center justify-between pb-4 border-b border-[#d4a359]/20 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🇧🇷</span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-bold">
                  {t.vows.viniciusTitle}
                </span>
              </div>
              <span className="text-[11px] font-mono text-amber-300/80">{t.vows.viniciusLocation}</span>
            </div>

            <p className="text-base sm:text-lg text-stone-100 font-serif italic leading-relaxed mb-6">
              {t.vows.viniciusText}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-[#d4a359]/15 text-xs font-mono text-stone-300/80">
              <span className="text-white font-cinzel font-bold">Vinicius Silva</span>
              <span className="text-amber-400">{t.vows.viniciusFromTo}</span>
            </div>
          </div>

          {/* Vow Tawan */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#221535] to-[#0c0817] border border-[#d4a359]/40 p-8 shadow-2xl group hover:border-[#d4a359] transition-all duration-500">
            <div className="flex items-center justify-between pb-4 border-b border-[#d4a359]/20 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🇹🇭</span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4a359] font-bold">
                  {t.vows.tawanTitle}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#d4a359]/80">{t.vows.tawanLocation}</span>
            </div>

            <p className="text-base sm:text-lg text-stone-100 font-serif italic leading-relaxed mb-6">
              {t.vows.tawanText}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-[#d4a359]/15 text-xs font-mono text-stone-300/80">
              <span className="text-white font-cinzel font-bold">Tawan Kannika</span>
              <span className="text-[#d4a359]">{t.vows.tawanFromTo}</span>
            </div>
          </div>
        </div>

        {/* Interactive Guestbook / Mural */}
        <div className="rounded-2xl bg-[#120c22] border border-[#d4a359]/30 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#d4a359]/20 mb-8">
            <div>
              <h3 className="text-lg font-cinzel font-bold text-white flex items-center gap-2">
                <MessageSquareQuote className="w-5 h-5 text-[#d4a359]" />
                {t.vows.muralTitle}
              </h3>
              <p className="text-xs text-stone-300/80 mt-1">
                {t.vows.muralSubtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-[#d4a359] bg-[#1a122e] px-3.5 py-1.5 rounded-full border border-[#d4a359]/30 self-start sm:self-auto font-bold">
              {notes.length} {t.vows.registeredCount}
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-8">
            <div className="sm:col-span-4">
              <label className="block text-[11px] font-mono text-[#d4a359] uppercase tracking-wider mb-1">
                {t.vows.nameLabel}
              </label>
              <input
                type="text"
                required
                placeholder={t.vows.namePlaceholder}
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07050a] border border-[#d4a359]/30 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-[#d4a359] transition-colors"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-[11px] font-mono text-[#d4a359] uppercase tracking-wider mb-1">
                {t.vows.originLabel}
              </label>
              <input
                type="text"
                placeholder={t.vows.originPlaceholder}
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07050a] border border-[#d4a359]/30 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-[#d4a359] transition-colors"
              />
            </div>

            <div className="sm:col-span-5 flex items-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-6 rounded-xl bg-[#d4a359] text-[#090710] font-cinzel font-bold text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.vows.btnSubmit}</span>
              </button>
            </div>

            <div className="sm:col-span-12">
              <label className="block text-[11px] font-mono text-[#d4a359] uppercase tracking-wider mb-1">
                {t.vows.messageLabel}
              </label>
              <textarea
                required
                rows={2}
                placeholder={t.vows.messagePlaceholder}
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07050a] border border-[#d4a359]/30 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-[#d4a359] transition-colors resize-none"
              />
            </div>
          </form>

          {/* List of Messages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="p-5 rounded-xl bg-[#07050a] border border-[#d4a359]/20 flex flex-col justify-between hover:border-[#d4a359]/50 transition-all"
              >
                <p className="text-xs text-stone-200/90 font-sans leading-relaxed mb-4">
                  "{note.text}"
                </p>
                <div className="pt-3 border-t border-[#d4a359]/15 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white font-cinzel font-bold">{note.author}</span>
                  <span className="text-[#d4a359]/80">{note.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
