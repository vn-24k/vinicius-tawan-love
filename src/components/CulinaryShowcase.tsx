import React, { useState, useRef } from 'react';
import { Utensils, Heart, ChevronLeft, ChevronRight, Sparkles, Flame, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../audio/CinematicAudio';

interface Dish {
  id: number;
  country: 'BR' | 'TH';
  flag: string;
  namePt: string;
  nameTh: string;
  nativeName?: string;
  category: 'Paulistano' | 'Tailandês' | 'Doces & Sobremesas';
  badgePt: string;
  badgeTh: string;
  image: string;
  descPt: string;
  descTh: string;
  coupleNotePt: string;
  coupleNoteTh: string;
  profile: {
    comfort: number;
    flavor: number;
    spicy?: number;
    sweet?: number;
  };
  initialLikes: number;
}

export const CulinaryShowcase: React.FC = () => {
  const { lang, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [likes, setLikes] = useState<{ [key: number]: number }>({
    1: 42, 2: 56, 3: 38, 4: 49, 5: 64, 6: 51, 7: 35, 8: 62, 9: 77, 10: 89
  });
  const [likedDishes, setLikedDishes] = useState<{ [key: number]: boolean }>({});

  const dishes: Dish[] = [
    {
      id: 1,
      country: 'BR',
      flag: '🇧🇷',
      namePt: 'Feijoada Completa da Pauliceia',
      nameTh: 'เฟโจอาดาสูตรเซาเปาโลดั้งเดิม',
      category: 'Paulistano',
      badgePt: 'Almoço Tradicional de Sábado',
      badgeTh: 'มื้อกลางวันวันเสาร์สุดคลาสสิก',
      image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
      descPt: 'Feijão preto cozido lentamente com carnes nobres selecionadas, servido com arroz branco, couve refogada no alho dourado, fatias de laranja e farofa amanteigada.',
      descTh: 'สตูถั่วดำเคี่ยวช้าๆ พร้อมเนื้อคัดพิเศษ เสิร์ฟพร้อมข้าวสวย คะน้าผัดกระเทียม ส้มสด และฟารอฟาหอมเนย',
      coupleNotePt: 'Vinicius mal pode esperar para reunir a família inteira em São Paulo e apresentar o calor da feijoada brasileira à Tawan.',
      coupleNoteTh: 'วินิซิอุสรอคอยที่จะชวนครอบครัวมาพร้อมหน้าในเซาเปาโลเพื่อแนะนำรสชาติเฟโจอาดาที่อบอุ่นให้ตะวันได้ลิ้มลอง',
      profile: { comfort: 10, flavor: 10, spicy: 2 },
      initialLikes: 42
    },
    {
      id: 2,
      country: 'TH',
      flag: '🇹🇭',
      namePt: 'Pad Thai Kung Mae Nam',
      nameTh: 'ผัดไทยกุ้งแม่น้ำ',
      nativeName: 'ผัดไทยกุ้งแม่น้ำ',
      category: 'Tailandês',
      badgePt: 'A Joia das Ruas de Bangkok',
      badgeTh: 'สุดยอดอาหารริมทางกรุงเทพฯ',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
      descPt: 'Noodles artesanais de arroz salteados em alta temperatura no wok com camarões graúdos do rio, tofu fresco, broto de feijão, tamarindo agridoce e amendoim torrado.',
      descTh: 'ก๋วยเตี๋ยวเส้นจันทน์ผัดในกระทะเหล็กร้อนจัด กุ้งแม่น้ำตัวโต เต้าหู้ ถั่วงอก น้ำซอสมะขามเปียกหวานอมเปรี้ยว โรยถั่วลิสงคั่วบด',
      coupleNotePt: 'Tawan prometeu levar Vinicius ao seu quiosque histórico favorito às margens do Rio Chao Phraya para provar o verdadeiro Pad Thai.',
      coupleNoteTh: 'ตะวันสัญญาว่าจะพาวินิซิอุสไปนั่งทานผัดไทยร้านโปรดริมแม่น้ำเจ้าพระยา เพื่อสัมผัสรสชาติต้นตำรับที่แท้จริง',
      profile: { comfort: 9, flavor: 10, spicy: 5 },
      initialLikes: 56
    },
    {
      id: 3,
      country: 'BR',
      flag: '🇧🇷',
      namePt: 'Pão de Queijo & Café Mogiana',
      nameTh: 'ขนมปังชีสปาวจิกีโจ้ & กาแฟเปาลิสตา',
      category: 'Paulistano',
      badgePt: 'O Despertar Afetuoso',
      badgeTh: 'อาหารเช้าแห่งความอบอุ่น',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80',
      descPt: 'Polvilho artesanal com queijo curado, crocante por fora e macio por dentro, servido quentinho acompanhado de café expresso especial da Mantiqueira paulista.',
      descTh: 'ขนมปังแป้งมันสำปะหลังชีสบราซิลแท้ กรอบนอกนุ่มหนึบใน อบใหม่ๆ ทานคู่กับกาแฟคั่วบดหอมกรุ่นจากเซาเปาโล',
      coupleNotePt: 'O café da manhã perfeito nas manhãs ensolaradas em que os fusos horários finalmente dão lugar a um mesmo despertar.',
      coupleNoteTh: 'มื้อเช้าที่สมบูรณ์แบบในวันที่ทั้งสองตื่นนอนพร้อมกันใต้แสงแดดอันอบอุ่น',
      profile: { comfort: 10, flavor: 9, sweet: 2 },
      initialLikes: 38
    },
    {
      id: 4,
      country: 'TH',
      flag: '🇹🇭',
      namePt: 'Tom Yum Goong',
      nameTh: 'ต้มยำกุ้งน้ำข้น',
      nativeName: 'ต้มยำกุ้ง',
      category: 'Tailandês',
      badgePt: 'A Sopa Mais Aromática da Ásia',
      badgeTh: 'ต้มยำกุ้งรสเลิศระดับโลก',
      image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80',
      descPt: 'Caldo perfumado e elétrico com capim-limão, folhas de kaffir, galanga tailandesa, pimentas frescas, cogumelos e camarões suculentos com toque cítrico de lima.',
      descTh: 'ซุปสมุนไพรหอมกรุ่น ทั้งตะไคร้ ใบมะกรูด ข่าแก่ พริกขี้หนูสวนสด เห็ดฟาง และกุ้งสดเนื้อแน่น รสชาติจัดจ้านถึงใจ',
      coupleNotePt: 'Um festival de aromas exóticos que Tawan considera a essência da culinária de sua terra natal.',
      coupleNoteTh: 'มนต์เสน่ห์แห่งสมุนไพรไทยที่ตะวันภูมิใจนำเสนอให้เป็นตัวแทนรสชาติอันทรงพลังของบ้านเกิด',
      profile: { comfort: 9, flavor: 10, spicy: 8 },
      initialLikes: 49
    },
    {
      id: 5,
      country: 'BR',
      flag: '🇧🇷',
      namePt: 'Coxinha Cremosa com Catupiry',
      nameTh: 'โคชินญาไก่ฉีกครีมชีส',
      category: 'Paulistano',
      badgePt: 'A Glória dos Lanches de SP',
      badgeTh: 'ของว่างยอดนิยมแห่งเซาเปาโล',
      image: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=800&q=80',
      descPt: 'Massa aveludada recheada com peito de frango delicadamente desfiado e temperado, generosa camada de Catupiry legítimo, empanada e frita até a perfeição dourada.',
      descTh: 'แป้งนุ่มเนียนสอดไส้อกไก่ฉีกปรุงรสและชีสคาตูปีรีแท้ ชุบเกล็ดขนมปังทอดกรอบสีทองอร่าม',
      coupleNotePt: 'O primeiro petisco paulistano que Vinicius quer colocar nas mãos de Tawan assim que ela descer do voo!',
      coupleNoteTh: 'ของว่างอย่างแรกที่วินิซิอุสอยากยื่นให้ตะวันได้ชิมทันทีที่ก้าวออกจากสนามบินกัวรูลโฮส!',
      profile: { comfort: 10, flavor: 10, spicy: 1 },
      initialLikes: 64
    },
    {
      id: 6,
      country: 'TH',
      flag: '🇹🇭',
      namePt: 'Khao Soi Gai',
      nameTh: 'ข้าวซอยไก่แม่สาย',
      nativeName: 'ข้าวซอยไก่',
      category: 'Tailandês',
      badgePt: 'Noodles no Curry Dourado',
      badgeTh: 'ข้าวซอยไก่รสละมุน',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
      descPt: 'Sopa aveludada de curry com leite de coco cremoso, macarrão de ovo macio, coxa de frango desmanchando e coberta por crocantes ninhos de noodles fritos com chalotas.',
      descTh: 'แกงกะหรี่กะทิหอมนวล เส้นบะหมี่ไข่เหนียวนุ่ม น่องไก่ตุ๋นเปื่อย ท็อปด้วยหมี่กรอบ หอมแดง และมะนาวสด',
      coupleNotePt: 'O prato reconfortante predileto de Tawan para os dias em que a saudade aperta e pede um abraço no prato.',
      coupleNoteTh: 'เมนูปลอบประโลมใจอันดับหนึ่งของตะวัน ในวันที่ความคิดถึงต้องการอ้อมกอดอุ่นๆ',
      profile: { comfort: 10, flavor: 10, spicy: 6 },
      initialLikes: 51
    },
    {
      id: 7,
      country: 'BR',
      flag: '🇧🇷',
      namePt: 'Pastel de Feira & Caldo de Cana',
      nameTh: 'ปาสแตลทอดกรอบ & น้ำอ้อยมะนาว',
      category: 'Paulistano',
      badgePt: 'Patrimônio Matinal de São Paulo',
      badgeTh: 'วิถีตลาดนัดวันอาทิตย์เซาเปาโล',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
      descPt: 'Pastel crocante e cheio de bolhas estaladiças frito na hora com recheio fumegante, acompanhado do clássico caldo de cana geladíssimo batido com gotas de limão.',
      descTh: 'พายทอดกรอบพองฟู ไส้เนื้อสับหรือชีสร้อนๆ ทานคู่กับน้ำอ้อยคั้นสดเย็นเฉียบบีบมะนาวตัดรส',
      coupleNotePt: 'Um passeio clássico pelas feiras livres de domingo de São Paulo que o casal planeja vivenciar juntos.',
      coupleNoteTh: 'กิจกรรมเดินตลาดนัดเช้าวันอาทิตย์สุดคลาสสิกที่ทั้งสองวางแผนจะเดินจูงมือไปด้วยกัน',
      profile: { comfort: 9, flavor: 9, sweet: 7 },
      initialLikes: 35
    },
    {
      id: 8,
      country: 'TH',
      flag: '🇹🇭',
      namePt: 'Massaman Curry',
      nameTh: 'แกงมัสมั่นเนื้อน่องลาย',
      nativeName: 'มัสมั่น',
      category: 'Tailandês',
      badgePt: 'Eleito Prato Nº 1 do Mundo',
      badgeTh: 'แกงมัสมั่นยอดเยี่ยมระดับโลก',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      descPt: 'Curry aromático e encorpado com canela, cardamomo, anis estrelado, batatas aveludadas, castanhas de caju e carne cozida lentamente por horas.',
      descTh: 'แกงกะหรี่เครื่องเทศหอมหวาน อบเชย ลูกกระวาน มันฝรั่งเนื้อเนียน เม็ดมะม่วงหิมพานต์ และเนื้อตุ๋นเปื่อยนุ่ม',
      coupleNotePt: 'Uma sinfonia de sabores complexos que expressa a paciência e a riqueza da cultura do Reino da Tailândia.',
      coupleNoteTh: 'ความลงตัวของเครื่องเทศที่สะท้อนถึงความประณีตและความลึกซึ้งของวัฒนธรรมไทย',
      profile: { comfort: 10, flavor: 10, spicy: 4 },
      initialLikes: 62
    },
    {
      id: 9,
      country: 'BR',
      flag: '🇧🇷',
      namePt: 'Brigadeiro Gourmet & Beijinho',
      nameTh: 'บริกาเดโรช็อกโกแลต & เบจินโญมะพร้าว',
      category: 'Doces & Sobremesas',
      badgePt: 'O Doce Oficial do Afeto',
      badgeTh: 'ขนมหวานแทนใจแห่งบราซิล',
      image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
      descPt: 'Leite condensado reduzido lentamente com cacau fino e manteiga nobre, enrolado à mão com granulados crocantes belgas e beijinho de coco fresco ralado.',
      descTh: 'นมข้นหวานกวนช้าๆ กับโกโก้ชั้นเลิศและเนยฝรั่งเศส ปั้นกลมคลุกเกล็ดช็อกโกแลต และขนมเบจินโญมะพร้าวขูดหวานหอม',
      coupleNotePt: 'O símbolo de carinho doce com que Vinicius vai presentear Tawan para marcar cada aniversário e reencontro.',
      coupleNoteTh: 'ขนมหวานที่วินิซิอุสจะมอบให้ตะวันในทุกวันครบรอบและทุกครั้งที่ได้กลับมาพบกัน',
      profile: { comfort: 10, flavor: 10, sweet: 10 },
      initialLikes: 77
    },
    {
      id: 10,
      country: 'TH',
      flag: '🇹🇭',
      namePt: 'Mango Sticky Rice',
      nameTh: 'ข้าวเหนียวมะม่วงน้ำดอกไม้',
      nativeName: 'ข้าวเหนียวมะม่วง',
      category: 'Doces & Sobremesas',
      badgePt: 'A Doçura Dourada de Bangkok',
      badgeTh: 'ของหวานยอดนิยมอันดับหนึ่ง',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
      descPt: 'Arroz glutinoso morno temperado com leite de coco espesso e sal marinho equilibrado, servido com fatias suculentas de manga Nam Dok Mai doce e sementes de gergelim.',
      descTh: 'ข้าวเหนียวมูนกะทิหวานมัน หอมใบเตย เสิร์ฟเคียงมะม่วงน้ำดอกไม้สุกสีทองฉ่ำหวาน โรยถั่วทองกรุบกรอบ',
      coupleNotePt: 'A sobremesa que ambos amam em uníssono, comemorando que o amor é a fruta mais doce da vida.',
      coupleNoteTh: 'ของหวานที่ทั้งสองคนรักตรงกันอย่างไม่มีข้อสงสัย เพราะความรักคือสิ่งที่หอมหวานที่สุดในชีวิต',
      profile: { comfort: 10, flavor: 10, sweet: 9 },
      initialLikes: 89
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleToggleLike = (id: number) => {
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
    <section id="culinaria" className="relative w-full py-24 px-6 bg-[#08080A] text-white overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E5B869]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#E5B869] uppercase">
            {t.culinary.badge}
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
              {t.culinary.titleLine1} <br />
              <span className="text-gold-gradient">{t.culinary.titleHighlight}</span>.
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mt-3 font-sans leading-relaxed">
              {t.culinary.subtitle}
            </p>
          </div>

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
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all ${
              selectedFilter === 'all'
                ? 'bg-[#E5B869] text-black font-semibold shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            {t.culinary.filterAll}
          </button>
          <button
            onClick={() => setSelectedFilter('BR')}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedFilter === 'BR'
                ? 'bg-emerald-500 text-black font-semibold shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <span>🇧🇷</span>
            <span>{t.culinary.filterSP}</span>
          </button>
          <button
            onClick={() => setSelectedFilter('TH')}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedFilter === 'TH'
                ? 'bg-[#E5B869] text-black font-semibold shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <span>🇹🇭</span>
            <span>{t.culinary.filterBKK}</span>
          </button>
          <button
            onClick={() => setSelectedFilter('sweet')}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedFilter === 'sweet'
                ? 'bg-rose-500 text-white font-semibold shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <span>✨</span>
            <span>{t.culinary.filterSweet}</span>
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
            const name = lang === 'th' ? dish.nameTh : dish.namePt;
            const badge = lang === 'th' ? dish.badgeTh : dish.badgePt;
            const desc = lang === 'th' ? dish.descTh : dish.descPt;
            const coupleNote = lang === 'th' ? dish.coupleNoteTh : dish.coupleNotePt;

            return (
              <div
                key={dish.id}
                className="group relative flex-shrink-0 w-[320px] sm:w-[360px] rounded-3xl bg-gradient-to-b from-[#12151D] via-[#0E1015] to-[#0A0B0E] border border-white/10 hover:border-[#E5B869]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 snap-start shadow-xl hover:-translate-y-1.5"
              >
                {/* Real Food Photography Banner */}
                <div className="relative w-full h-44 overflow-hidden bg-black/40">
                  <img
                    src={dish.image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-transparent to-black/40" />

                  {/* Top Flag & Likes Badge Over Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs">
                      <span className="text-base">{dish.flag}</span>
                      <span className="font-mono text-[10px] uppercase text-white font-medium">
                        {dish.country === 'BR' ? (lang === 'th' ? 'บราซิล' : 'Brasil') : (lang === 'th' ? 'ไทย' : 'Tailândia')}
                      </span>
                    </div>

                    <button
                      onClick={() => handleToggleLike(dish.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md transition-all duration-300 border ${
                        isLiked
                          ? 'bg-rose-500 text-white border-rose-400 shadow-md'
                          : 'bg-black/60 text-white border-white/15 hover:border-rose-400/50'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white text-white' : ''}`} />
                      <span>{currentLikes}</span>
                    </button>
                  </div>

                  {/* Category Pill Over Image Bottom */}
                  <div className="absolute bottom-2 left-3">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#E5B869] bg-black/70 backdrop-blur-md border border-[#E5B869]/30 px-2.5 py-0.5 rounded-full">
                      {badge}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#E5B869] transition-colors leading-snug">
                      {name}
                    </h3>
                    {dish.nativeName && lang !== 'th' && (
                      <span className="block text-xs font-sans text-slate-400 mt-0.5 font-medium">
                        {dish.nativeName}
                      </span>
                    )}

                    <p className="mt-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                  </div>

                  {/* Bottom Couple Note & Metrics */}
                  <div className="mt-5 pt-4 border-t border-white/5 space-y-3">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#E5B869] mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{t.culinary.coupleNoteLabel}</span>
                      </div>
                      <p className="text-xs text-slate-300 font-serif italic leading-relaxed">
                        "{coupleNote}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Star className="w-3 h-3 text-[#E5B869] fill-[#E5B869]" />
                        {t.culinary.comfort}: {dish.profile.comfort}/10
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        {t.culinary.flavor}: {dish.profile.flavor}/10
                      </span>
                      {dish.profile.spicy && (
                        <span className="flex items-center gap-1 text-amber-400">
                          <Flame className="w-3 h-3" />
                          {t.culinary.spicy}: {dish.profile.spicy}/10
                        </span>
                      )}
                    </div>
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
