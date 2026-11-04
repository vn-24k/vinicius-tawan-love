import React, { useState, useRef } from 'react';
import { Utensils, Heart, ChevronLeft, ChevronRight, Sparkles, Flame, Coffee, Star } from 'lucide-react';
import { soundEngine } from '../audio/CinematicAudio';

interface Dish {
  id: number;
  country: 'BR' | 'TH';
  flag: string;
  name: string;
  nativeName?: string;
  category: 'Paulistano' | 'Tailandês' | 'Doces & Sobremesas';
  badge: string;
  desc: string;
  coupleNote: string;
  profile: {
    comfort: number;
    flavor: number;
    spicy?: number;
    sweet?: number;
  };
  initialLikes: number;
}

export const CulinaryShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [likes, setLikes] = useState<{ [key: number]: number }>({
    1: 42, 2: 56, 3: 38, 4: 49, 5: 64, 6: 51, 7: 35, 8: 62, 9: 77, 10: 89
  });
  const [likedDishes, setLikedDishes] = useState<{ [key: number]: boolean }>({});
  const [activeDishModal, setActiveDishModal] = useState<Dish | null>(null);

  const dishes: Dish[] = [
    {
      id: 1,
      country: 'BR',
      flag: '🇧🇷',
      name: 'Feijoada Completa da Pauliceia',
      category: 'Paulistano',
      badge: 'Almoço Tradicional de Sábado',
      desc: 'Feijão preto cozido lentamente com carnes nobres selecionadas, servido com arroz branco, couve refogada no alho dourado, fatias de laranja e farofa amanteigada.',
      coupleNote: 'Vinicius mal pode esperar para reunir a família inteira em São Paulo e apresentar o calor da feijoada brasileira à Tawan.',
      profile: { comfort: 10, flavor: 10, spicy: 2 },
      initialLikes: 42
    },
    {
      id: 2,
      country: 'TH',
      flag: '🇹🇭',
      name: 'Pad Thai Kung Mae Nam',
      nativeName: 'ผัดไทยกุ้งแม่น้ำ',
      category: 'Tailandês',
      badge: 'A Joia das Ruas de Bangkok',
      desc: 'Noodles artesanais de arroz salteados em alta temperatura no wok com camarões graúdos do rio, tofu fresco, broto de feijão, tamarindo agridoce e amendoim torrado.',
      coupleNote: 'Tawan prometeu levar Vinicius ao seu quiosque histórico favorito às margens do Rio Chao Phraya para provar o verdadeiro Pad Thai.',
      profile: { comfort: 9, flavor: 10, spicy: 5 },
      initialLikes: 56
    },
    {
      id: 3,
      country: 'BR',
      flag: '🇧🇷',
      name: 'Pão de Queijo & Café Mogiana',
      category: 'Paulistano',
      badge: 'O Despertar Afetuoso',
      desc: 'Polvilho artesanal com queijo curado, crocante por fora e macio por dentro, servido quentinho acompanhado de café expresso especial da Mantiqueira paulista.',
      coupleNote: 'O café da manhã perfeito nas manhãs ensolaradas em que os fusos horários finalmente dão lugar a um mesmo despertar.',
      profile: { comfort: 10, flavor: 9, sweet: 2 },
      initialLikes: 38
    },
    {
      id: 4,
      country: 'TH',
      flag: '🇹🇭',
      name: 'Tom Yum Goong',
      nativeName: 'ต้มยำกุ้ง',
      category: 'Tailandês',
      badge: 'A Sopa Mais Aromática da Ásia',
      desc: 'Caldo perfumado e elétrico com capim-limão, folhas de kaffir, galanga tailandesa, pimentas frescas, cogumelos e camarões suculentos com toque cítrico de lima.',
      coupleNote: 'Um festival de aromas exóticos que Tawan considera a essência da culinária de sua terra natal.',
      profile: { comfort: 9, flavor: 10, spicy: 8 },
      initialLikes: 49
    },
    {
      id: 5,
      country: 'BR',
      flag: '🇧🇷',
      name: 'Coxinha Cremosa com Catupiry',
      category: 'Paulistano',
      badge: 'A Glória dos Botecos de SP',
      desc: 'Massa aveludada recheada com peito de frango delicadamente desfiado e temperado, generosa camada de Catupiry legítimo, empanada e frita até a perfeição dourada.',
      coupleNote: 'O primeiro petisco paulistano que Vinicius quer colocar nas mãos de Tawan assim que ela descer do voo!',
      profile: { comfort: 10, flavor: 10, spicy: 1 },
      initialLikes: 64
    },
    {
      id: 6,
      country: 'TH',
      flag: '🇹🇭',
      name: 'Khao Soi Gai',
      nativeName: 'ข้าวซอยไก่',
      category: 'Tailandês',
      badge: 'Noodles no Curry Dourado',
      desc: 'Sopa aveludada de curry com leite de coco cremoso, macarrão de ovo macio, coxa de frango desmanchando e coberta por crocantes ninhos de noodles fritos com chalotas.',
      coupleNote: 'O prato reconfortante predileto de Tawan para os dias em que a saudade aperta e pede um abraço no prato.',
      profile: { comfort: 10, flavor: 10, spicy: 6 },
      initialLikes: 51
    },
    {
      id: 7,
      country: 'BR',
      flag: '🇧🇷',
      name: 'Pastel de Feira & Caldo de Cana',
      category: 'Paulistano',
      badge: 'Patrimônio Matinal de São Paulo',
      desc: 'Pastel crocante e cheio de bolhas estaladiças frito na hora com recheio fumegante, acompanhado do clássico caldo de cana geladíssimo batido com gotas de limão.',
      coupleNote: 'Um passeio clássico pelas feiras livres de domingo de São Paulo que o casal planeja vivenciar juntos.',
      profile: { comfort: 9, flavor: 9, sweet: 7 },
      initialLikes: 35
    },
    {
      id: 8,
      country: 'TH',
      flag: '🇹🇭',
      name: 'Massaman Curry',
      nativeName: 'มัสมั่น',
      category: 'Tailandês',
      badge: 'Eleito Prato Nº 1 do Mundo',
      desc: 'Curry aromático e encorpado com canela, cardamomo, anis estrelado, batatas aveludadas, castanhas de caju e carne cozida lentamente por horas.',
      coupleNote: 'Uma sinfonia de sabores complexos que expressa a paciência e a riqueza da cultura do Reino da Tailândia.',
      profile: { comfort: 10, flavor: 10, spicy: 4 },
      initialLikes: 62
    },
    {
      id: 9,
      country: 'BR',
      flag: '🇧🇷',
      name: 'Brigadeiro Gourmet & Beijinho',
      category: 'Doces & Sobremesas',
      badge: 'O Doce Oficial do Afeto',
      desc: 'Leite condensado reduzido lentamente com cacau fino e manteiga nobre, enrolado à mão com granulados crocantes belgas e beijinho de coco fresco ralado.',
      coupleNote: 'O símbolo de carinho doce com que Vinicius vai presentear Tawan para marcar cada aniversário e reencontro.',
      profile: { comfort: 10, flavor: 10, sweet: 10 },
      initialLikes: 77
    },
    {
      id: 10,
      country: 'TH',
      flag: '🇹🇭',
      name: 'Mango Sticky Rice',
      nativeName: 'ข้าวเหนียวมะม่วง',
      category: 'Doces & Sobremesas',
      badge: 'A Doçura Dourada de Bangkok',
      desc: 'Arroz glutinoso morno temperado com leite de coco espesso e sal marinho equilibrado, servido com fatias suculentas de manga Nam Dok Mai doce e sementes de gergelim.',
      coupleNote: 'A sobremesa que ambos amam em uníssono, comemorando que o amor é a fruta mais doce da vida.',
      profile: { comfort: 10, flavor: 10, sweet: 9 },
      initialLikes: 89
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    soundEngine.playHaptic();
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleToggleLike = (id: number) => {
    soundEngine.playHaptic();
    setLikedDishes(prev => {
      const isLiked = !!prev[id];
      setLikes(currentLikes => ({
        ...currentLikes,
        [id]: currentLikes[id] + (isLiked ? -1 : 1)
      }));
      return { ...prev, [id]: !isLiked };
    });
  };

  const filteredDishes = dishes.filter(d => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'BR') return d.country === 'BR';
    if (selectedFilter === 'TH') return d.country === 'TH';
    if (selectedFilter === 'sweet') return d.category === 'Doces & Sobremesas';
    return true;
  });

  return (
    <section className="relative w-full py-24 px-6 bg-[#08080A] text-white overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E5B869]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#E5B869] uppercase">
            03.5 / GASTRONOMIA & SABORES DO CASAL
          </span>
          <span className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-emerald-400">
            SÃO PAULO ⇄ BANGKOK
          </span>
        </div>

        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              O BANQUETE DO AMOR: <br />
              <span className="text-gold-gradient">SABORES DE DOIS MUNDOS</span>.
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mt-3 font-sans leading-relaxed">
              Deslize e explore as 10 iguarias inesquecíveis que compõem o cardápio do casal — do tempero paulistano à poesia gastronômica tailandesa.
            </p>
          </div>

          {/* Filters & Scroll Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleScroll('left')}
              title="Rolar para esquerda"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#E5B869] hover:bg-[#E5B869] hover:text-black text-slate-300 flex items-center justify-center transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              title="Rolar para direita"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#E5B869] hover:bg-[#E5B869] hover:text-black text-slate-300 flex items-center justify-center transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 text-xs font-mono">
          <button
            onClick={() => { setSelectedFilter('all'); soundEngine.playHaptic(); }}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all ${
              selectedFilter === 'all'
                ? 'bg-[#E5B869] text-black font-semibold shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Todos os 10 Sabores
          </button>
          <button
            onClick={() => { setSelectedFilter('BR'); soundEngine.playHaptic(); }}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedFilter === 'BR'
                ? 'bg-emerald-500 text-black font-semibold shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <span>🇧🇷</span>
            <span>São Paulo / Brasil</span>
          </button>
          <button
            onClick={() => { setSelectedFilter('TH'); soundEngine.playHaptic(); }}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedFilter === 'TH'
                ? 'bg-[#E5B869] text-black font-semibold shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <span>🇹🇭</span>
            <span>Bangkok / Tailândia</span>
          </button>
          <button
            onClick={() => { setSelectedFilter('sweet'); soundEngine.playHaptic(); }}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedFilter === 'sweet'
                ? 'bg-rose-500 text-white font-semibold shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <span>✨</span>
            <span>Doces & Afeto</span>
          </button>
        </div>

        {/* Horizontal Carousel Track with Drag / Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredDishes.map((dish) => {
            const isLiked = !!likedDishes[dish.id];
            const currentLikes = likes[dish.id] || dish.initialLikes;

            return (
              <div
                key={dish.id}
                className="group relative flex-shrink-0 w-[320px] sm:w-[360px] rounded-3xl bg-gradient-to-b from-[#12151D] via-[#0E1015] to-[#0A0B0E] border border-white/10 hover:border-[#E5B869]/50 p-6 flex flex-col justify-between transition-all duration-300 snap-start shadow-xl hover:-translate-y-1.5"
              >
                {/* Top Badge Row */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{dish.flag}</span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {dish.country === 'BR' ? 'Brasil' : 'Tailândia'}
                      </span>
                    </div>

                    {/* Like Button */}
                    <button
                      onClick={() => handleToggleLike(dish.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 border ${
                        isLiked
                          ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 shadow-sm'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:border-rose-400/50 hover:text-rose-300'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{currentLikes}</span>
                    </button>
                  </div>

                  {/* Category Pill */}
                  <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#E5B869] bg-[#E5B869]/10 px-2.5 py-0.5 rounded-full mb-3">
                    {dish.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#E5B869] transition-colors leading-snug">
                    {dish.name}
                  </h3>
                  {dish.nativeName && (
                    <span className="block text-xs font-sans text-slate-400 mt-0.5 font-medium">
                      {dish.nativeName}
                    </span>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {dish.desc}
                  </p>
                </div>

                {/* Bottom Couple Note & Metrics */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-3">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#E5B869] mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Nota do Casal:</span>
                    </div>
                    <p className="text-xs text-slate-300 font-serif italic leading-relaxed">
                      "{dish.coupleNote}"
                    </p>
                  </div>

                  {/* Sensory meter bars */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Star className="w-3 h-3 text-[#E5B869] fill-[#E5B869]" />
                      Conforto: {dish.profile.comfort}/10
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      Sabor: {dish.profile.flavor}/10
                    </span>
                    {dish.profile.spicy && (
                      <span className="flex items-center gap-1 text-amber-400">
                        <Flame className="w-3 h-3" />
                        Pimenta: {dish.profile.spicy}/10
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
