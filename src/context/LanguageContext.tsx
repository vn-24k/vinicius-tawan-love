import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'th';

export interface Translations {
  // Navigation
  nav: {
    history: string;
    weather: string;
    chapters: string;
    culinary: string;
    alchemy: string;
    vows: string;
    soundActive: string;
    soundInactive: string;
    switchLang: string;
  };
  // Hero
  hero: {
    badge: string;
    liveConnection: string;
    titleLine1: string;
    titleItalic: string;
    titleLine2: string;
    description: string;
    btnJourney: string;
    btnFlavors: string;
    metricDistance: string;
    metricSub: string;
    weatherSectionBadge: string;
    weatherSectionTitle: string;
    weatherSectionDesc: string;
  };
  // Clocks & Weather
  clocks: {
    spHome: string;
    bkkHome: string;
    humidity: string;
    wind: string;
    dayAlive: string;
    nightGentle: string;
    dayGolden: string;
    nightLit: string;
    timeDelta: string;
    poeticDay: string;
    poeticNight: string;
  };
  // Story
  story: {
    badge: string;
    subBadge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    titleItalic: string;
    titleEnd: string;
    p1: string;
    p2: string;
    syncBtn: string;
    syncSub: string;
    connectionStarted: string;
    permanent: string;
    quote: string;
    tagSP: string;
    tagBKK: string;
    tagLove: string;
    dictionaryTitle: string;
    dictionarySub: string;
  };
  // Chapters
  chapters: {
    badge: string;
    titleLine1: string;
    titleItalic: string;
    titleLine2: string;
    subtitle: string;
    preservedMemory: string;
    ch1: {
      subtitle: string;
      title: string;
      desc: string;
      badge: string;
    };
    ch2: {
      subtitle: string;
      title: string;
      desc: string;
      badge: string;
    };
    ch3: {
      subtitle: string;
      title: string;
      desc: string;
      badge: string;
    };
  };
  // Culinary
  culinary: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    filterAll: string;
    filterSP: string;
    filterBKK: string;
    filterSweet: string;
    coupleNoteLabel: string;
    comfort: string;
    flavor: string;
    spicy: string;
  };
  // Cultural Alchemy
  alchemy: {
    badge: string;
    subBadge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    synergyLabel: string;
    tabs: {
      gastronomy: { title: string; brDesc: string; thDesc: string; synergy: string };
      landscapes: { title: string; brDesc: string; thDesc: string; synergy: string };
      spirit: { title: string; brDesc: string; thDesc: string; synergy: string };
      music: { title: string; brDesc: string; thDesc: string; synergy: string };
    };
  };
  // Vows & Guestbook
  vows: {
    badge: string;
    subBadge: string;
    titleLine1: string;
    titleHighlight: string;
    viniciusTitle: string;
    viniciusLocation: string;
    viniciusText: string;
    viniciusFromTo: string;
    tawanTitle: string;
    tawanLocation: string;
    tawanText: string;
    tawanFromTo: string;
    muralTitle: string;
    muralSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    originLabel: string;
    originPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    btnSubmit: string;
    registeredCount: string;
  };
  // Footer
  footer: {
    desc: string;
    coordinatesTitle: string;
    spLabel: string;
    bkkLabel: string;
    distLabel: string;
    diffLabel: string;
    navTitle: string;
    craftedWithLove: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      history: 'História',
      weather: 'Fusos & Clima',
      chapters: 'Capítulos',
      culinary: 'Gastronomia',
      alchemy: 'Alquimia Cultural',
      vows: 'Votos',
      soundActive: 'Som Ativo',
      soundInactive: 'Trilha Sonora',
      switchLang: 'ภาษาไทย (TH)',
    },
    hero: {
      badge: '01 / AMOR TRANSCONTINENTAL',
      liveConnection: 'CONEXÃO VIVA',
      titleLine1: 'DOIS CONTINENTES,',
      titleItalic: 'uma só',
      titleLine2: 'FREQUÊNCIA.',
      description: 'A celebração do amor transcontinental entre Vinicius Silva (São Paulo, Brasil) e Tawan Kannika (Bangkok, Tailândia). Separados por 16.540 km e 10 horas de fuso no mapa, mas unidos por uma devoção que não reconhece oceanos.',
      btnJourney: 'Nossa Jornada',
      btnFlavors: 'Sabores do Casal',
      metricDistance: 'DISTÂNCIA GEODÉSICA',
      metricSub: 'Do Atlântico Sul ao Golfo da Tailândia. O fuso de 10 horas vira ritmo e cumplicidade.',
      weatherSectionBadge: 'HORÁRIOS EM TEMPO REAL & ESTAÇÃO METEOROLÓGICA',
      weatherSectionTitle: 'O Ritmo de São Paulo e as Cores de Bangkok',
      weatherSectionDesc: 'Horários exatos segundo a segundo e dados climáticos ao vivo via satélite.',
    },
    clocks: {
      spHome: 'CASA DO VINICIUS • UTC-3',
      bkkHome: 'CASA DA TAWAN • UTC+7',
      humidity: 'Umidade',
      wind: 'Vento',
      dayAlive: 'Dia Vivo',
      nightGentle: 'Noite Suave',
      dayGolden: 'Sol Dourado',
      nightLit: 'Noite Iluminada',
      timeDelta: 'Diferença: +10 horas (Bangkok à frente de São Paulo)',
      poeticDay: 'Quando Vinicius acorda em São Paulo, Tawan ilumina o entardecer de Bangkok.',
      poeticNight: 'Enquanto São Paulo descansa sob a noite, Bangkok desperta para um novo dia de luz.',
    },
    story: {
      badge: '02 / A TRAVESSIA DO AMOR',
      subBadge: 'SÃO PAULO & BANGKOK',
      titleLine1: 'A HARMONIA ENTRE O',
      titleHighlight: 'CALOR BRASILEIRO',
      titleLine2: 'E A',
      titleItalic: 'serenidade',
      titleEnd: 'TAILANDESA.',
      p1: 'Quando o destino cruzou as vidas de Vinicius Silva e Tawan Kannika, um mapa mundi inteiro separava seus passos: quase metade do globo terrestre, oceanos profundos e 10 horas de diferença entre os relógios.',
      p2: 'O que para muitos pareceria uma barreira intransponível transformou-se no alicerce mais poético de sua união. Cada amanhecer de Vinicius no Brasil encontra o pôr do sol dourado de Tawan na Tailândia. As conversas que atravessam fusos, o aprendizado diário das palavras e tradições de cada país e o carinho mútuo criaram uma ponte inquebrável.',
      syncBtn: 'Sincronizar Batimentos',
      syncSub: 'Toque para enviar pulso cardíaco pelo Atlântico',
      connectionStarted: 'Conexão Iniciada',
      permanent: 'Permanente',
      quote: '"O amor não consiste em olhar um para o outro, mas em olhar juntos na mesma direção através do mundo."',
      tagSP: 'São Paulo (Brasil)',
      tagBKK: 'Bangkok (Tailândia)',
      tagLove: 'Amor Sem Fronteiras',
      dictionaryTitle: 'PALAVRAS DO CORAÇÃO (PORTUGUÊS ⇄ TAILANDÊS)',
      dictionarySub: 'Toque para ouvir',
    },
    chapters: {
      badge: '03 / CAPÍTULOS DA NOSSA JORNADA',
      titleLine1: 'A LINHA DO TEMPO',
      titleItalic: 'de uma',
      titleLine2: 'GRANDE PAIXÃO.',
      subtitle: 'Cada marco da história de Vinicius e Tawan foi forjado com paciência, carinho diário e a certeza de que nenhuma fronteira é eterna.',
      preservedMemory: 'Memória Preservada',
      ch1: {
        subtitle: '16.540 KM & 10 HORAS DE FUSO',
        title: 'A Ponte Digital & Fusos',
        desc: 'Noites no Brasil que encontravam as manhãs em Bangkok. Cada mensagem enviada era uma certeza de que o amor é a única força capaz de dobrar o espaço-tempo.',
        badge: 'Origem',
      },
      ch2: {
        subtitle: 'QUANDO A DISTÂNCIA VIROU ZERO',
        title: 'O Encontro & O Abraço',
        desc: 'O portão de desembarque que se abre. Os olhares que se reconhecem antes mesmo das palavras. O abraço mais esperado da história entre o Brasil e o Sudeste Asiático.',
        badge: 'O Marco',
      },
      ch3: {
        subtitle: 'DOIS LARES, UMA SÓ VIDA',
        title: 'O Futuro Compartilhado',
        desc: 'Planos, viagens e a celebração de um futuro onde a feijoada e o pad thai, o samba e as danças tradicionais tailandesas coexistem em pura harmonia.',
        badge: 'Eternidade',
      },
    },
    culinary: {
      badge: '03.5 / GASTRONOMIA & SABORES DO CASAL',
      titleLine1: 'O BANQUETE DO AMOR:',
      titleHighlight: 'SABORES DE DOIS MUNDOS',
      subtitle: 'Deslize e explore as 10 iguarias inesquecíveis que compõem o cardápio do casal — do tempero paulistano à poesia gastronômica tailandesa.',
      filterAll: 'Todos os 10 Sabores',
      filterSP: 'São Paulo / Brasil',
      filterBKK: 'Bangkok / Tailândia',
      filterSweet: 'Doces & Afeto',
      coupleNoteLabel: 'Nota do Casal:',
      comfort: 'Conforto',
      flavor: 'Sabor',
      spicy: 'Pimenta',
    },
    alchemy: {
      badge: '04 / O ENCONTRO DE DOIS MUNDOS',
      subBadge: 'ALQUIMIA CULTURAL',
      titleLine1: 'QUANDO O BRASIL ENCONTRA',
      titleHighlight: 'A TAILÂNDIA',
      titleLine2: 'EM CADA DETALHE.',
      subtitle: 'A beleza do amor transcontinental está em celebrar as raízes de cada um, construindo um universo único onde as duas culturas se completam.',
      synergyLabel: 'A Sinergia do Casal:',
      tabs: {
        gastronomy: {
          title: 'Gastronomia & Sabores',
          brDesc: 'A riqueza reconfortante do Pão de Queijo quentinho, a tradicional Feijoada de sábado e a doçura do Brigadeiro artesanal.',
          thDesc: 'O equilíbrio perfeito entre doce, picante e cítrico: Pad Thai aromático, sopa Tom Yum e o clássico Mango Sticky Rice.',
          synergy: 'Na cozinha de Vinicius e Tawan, a pimenta dedo-de-moça brasileira encontra a Thai bird chili em jantares inesquecíveis.',
        },
        landscapes: {
          title: 'Cidades & Paisagens',
          brDesc: 'A imponência da Avenida Paulista, a tranquilidade verde do Parque Ibirapuera e a garoa poética nas tardes da metrópole.',
          thDesc: 'Os templos dourados de Wat Arun, as curvas majestosas do Rio Chao Phraya e a energia vibrante dos mercados noturnos.',
          synergy: 'Duas capitais mundiais gigantescas que pulsam 24 horas por dia, unidas por um mesmo horizonte de sonhos.',
        },
        spirit: {
          title: 'Espiritualidade & Valores',
          brDesc: 'O abraço apertado brasileiro, o riso fácil, a empatia e a lealdade inabalável com quem se ama.',
          thDesc: 'O gesto do Sawasdee, a delicadeza de alma, a gratidão budista e a tranquilidade que acalma qualquer tempestade.',
          synergy: 'O calor do coração de Vinicius conforta Tawan; a paz e delicadeza de Tawan trazem serenidade aos dias de Vinicius.',
        },
        music: {
          title: 'Música & Frequência',
          brDesc: 'A melancolia elegante de Tom Jobim e João Gilberto, a sutileza do violão e o compasso do coração.',
          thDesc: 'As cordas de Khim tailandês com melodias tradicionais e a leveza moderna das canções de Bangkok.',
          synergy: 'Uma trilha sonora universal onde a língua não é barreira, porque o afeto é o idioma principal.',
        },
      },
    },
    vows: {
      badge: '05 / VOTOS & MURAL DO CORAÇÃO',
      subBadge: 'PALAVRAS ETERNAS',
      titleLine1: 'PROMESSAS QUE ATRAVESSAM',
      titleHighlight: 'O TEMPO & O ESPAÇO',
      viniciusTitle: 'VOTOS DO VINICIUS',
      viniciusLocation: 'São Paulo, Brasil',
      viniciusText: '"Tawan, quando olho para você, vejo meu lar. Não importa se nossos relógios marcam dez horas de diferença ou se os oceanos nos separam no mapa: meu coração só bate em sincronia com o seu. Prometo honrar seu sorriso, cuidar dos seus sonhos e fazer de cada dia nosso maior milagre."',
      viniciusFromTo: 'Para Tawan Kannika',
      tawanTitle: 'คำสาบานของตะวัน (VOTOS DA TAWAN)',
      tawanLocation: 'Bangkok, Tailândia',
      tawanText: '"Vinicius, você trouxe a alegria mais luminosa para minha vida. Mesmo com o mundo inteiro entre nós, nunca me senti longe do seu abraço. Prometo segurar sua mão em todas as estações, cultivar nossa paz e caminhar ao seu lado para sempre, com todo o meu amor e devoção."',
      tawanFromTo: 'Para Vinicius Silva',
      muralTitle: 'Mural de Bênçãos & Votos do Casal',
      muralSubtitle: 'Deixe uma mensagem, um voto de carinho ou uma memória para Vinicius & Tawan.',
      nameLabel: 'Seu Nome',
      namePlaceholder: 'Ex: Família & Amigos',
      originLabel: 'Sua Cidade / Origem',
      originPlaceholder: 'Ex: São Paulo, Bangkok...',
      messageLabel: 'Sua Palavra ou Voto',
      messagePlaceholder: 'Escreva seus votos de amor, felicidade e prosperidade para o casal...',
      btnSubmit: 'Registrar Mensagem & Celebrar',
      registeredCount: 'Mensagens Registradas',
    },
    footer: {
      desc: 'O registro vivo de um amor que atravessa continentes. Do pulsar da Avenida Paulista aos canais iluminados do Rio Chao Phraya, uma única história contada a dois.',
      coordinatesTitle: 'COORDENADAS GEODÉSICAS',
      spLabel: 'São Paulo (Vinicius)',
      bkkLabel: 'Bangkok (Tawan)',
      distLabel: 'Distância Transcontinental',
      diffLabel: 'Diferença de Fuso',
      navTitle: 'NAVEGAÇÃO',
      craftedWithLove: 'Criado com amor para',
      rights: '© 2026 Vinicius & Tawan. Todos os direitos reservados.',
    },
  },
  th: {
    nav: {
      history: 'เรื่องราวของเรา',
      weather: 'เวลาและสภาพอากาศ',
      chapters: 'บันทึกบทชีวิต',
      culinary: 'อาหารสองวัฒนธรรม',
      alchemy: 'การผสานสองวัฒนธรรม',
      vows: 'คำมั่นสัญญา',
      soundActive: 'เปิดเสียงดนตรี',
      soundInactive: 'ดนตรีบรรเลง',
      switchLang: 'Português (BR)',
    },
    hero: {
      badge: '01 / ความรักข้ามทวีปอันยิ่งใหญ่',
      liveConnection: 'เชื่อมต่อแบบเรียลไทม์',
      titleLine1: 'สองทวีปอันไกลโพ้น,',
      titleItalic: 'รวมเป็นหนึ่ง',
      titleLine2: 'จังหวะหัวใจ.',
      description: 'เรื่องราวความรักอันงดงามข้ามทวีปของ วินิซิอุส ซิลวา (เซาเปาโล, บราซิล) และ ตะวัน กรรณิการ์ (กรุงเทพฯ, ประเทศไทย) แม้จะห่างกัน 16,540 กิโลเมตร และเวลาต่างกัน 10 ชั่วโมง แต่หัวใจทั้งสองไม่เคยมีระยะทาง',
      btnJourney: 'เรื่องราวความรัก',
      btnFlavors: 'เมนูโปรดของทั้งสอง',
      metricDistance: 'ระยะทางภูมิศาสตร์จริง',
      metricSub: 'จากมหาสมุทรแอตแลนติกใต้สู่อ่าวไทย ความต่างของเวลา 10 ชั่วโมงกลับกลายเป็นความผูกพันที่ลงตัว',
      weatherSectionBadge: 'เวลาปัจจุบันตามจริงและสภาพอากาศสดผ่านดาวเทียม',
      weatherSectionTitle: 'จังหวะชีวิตแห่งเซาเปาโลและสีสันแห่งกรุงเทพฯ',
      weatherSectionDesc: 'เวลาเดินตรงทุกวินาทีและรายงานสภาพภูมิอากาศแบบเรียลไทม์',
    },
    clocks: {
      spHome: 'บ้านของวินิซิอุส • UTC-3',
      bkkHome: 'บ้านของตะวัน • UTC+7',
      humidity: 'ความชื้น',
      wind: 'ความเร็วลม',
      dayAlive: 'กลางวันอบอุ่น',
      nightGentle: 'กลางคืนสงบเงียบ',
      dayGolden: 'แสงแดดทองผ่องอำไพ',
      nightLit: 'แสงราตรีเมืองหลวง',
      timeDelta: 'ความต่างของเวลา: +10 ชั่วโมง (กรุงเทพฯ เร็วกว่าเซาเปาโล)',
      poeticDay: 'เมื่อวินิซิอุสตื่นนอนที่เซาเปาโล ตะวันก็กำลังชมแสงอาทิตย์อัสดงที่กรุงเทพฯ',
      poeticNight: 'ขณะที่เซาเปาโลกำลังหลับใหล กรุงเทพฯ ก็ตื่นขึ้นมารับแสงอรุณวันใหม่',
    },
    story: {
      badge: '02 / เส้นทางแห่งรักข้ามขอบฟ้า',
      subBadge: 'เซาเปาโล และ กรุงเทพมหานคร',
      titleLine1: 'การบรรจบกันอย่างลงตัวระหว่าง',
      titleHighlight: 'ความอบอุ่นแบบบราซิล',
      titleLine2: 'และ',
      titleItalic: 'ความอ่อนโยนสงบสุข',
      titleEnd: 'แบบไทย.',
      p1: 'เมื่อพรหมลิขิตนำพาวินิซิอุส ซิลวา และ ตะวัน กรรณิการ์ มาพบกัน เกือบครึ่งหนึ่งของโลก มหาสมุทรที่กว้างใหญ่ และเวลาที่ต่างกัน 10 ชั่วโมง ขวางกั้นอยู่ระหว่างทั้งสองคน',
      p2: 'แต่อุปสรรคที่ใครหลายคนมองว่ายากยิ่ง กลับกลายเป็นบทกวีที่งดงามที่สุดในความสัมพันธ์ ทุกยามเช้าของวินิซิอุสที่บราซิลพบกับยามเย็นสีทองของตะวันในประเทศไทย การเรียนรู้วัฒนธรรม ภาษา และความเคารพซึ่งกันและกัน ได้สร้างสะพานใจที่มั่นคงแข็งแกร่งตลอดไป',
      syncBtn: 'ส่งจังหวะการเต้นของหัวใจ',
      syncSub: 'แตะเพื่อส่งสัญญาณชีพจรแห่งรักข้ามมหาสมุทร',
      connectionStarted: 'จุดเริ่มต้นความผูกพัน',
      permanent: 'นิรันดร์',
      quote: '"ความรักไม่ได้อยู่ที่การจ้องมองกันและกัน แต่อยู่ที่การมองไปยังทิศทางเดียวกันข้ามผ่านโลกทั้งใบ"',
      tagSP: 'เซาเปาโล (บราซิล)',
      tagBKK: 'กรุงเทพฯ (ไทย)',
      tagLove: 'รักแท้ไร้พรมแดน',
      dictionaryTitle: 'คำศัพท์แทนใจ (โปรตุเกส ⇄ ไทย)',
      dictionarySub: 'แตะเพื่อฟังและเรียนรู้',
    },
    chapters: {
      badge: '03 / บันทึกบทชีวิตแห่งการเดินทาง',
      titleLine1: 'ไทม์ไลน์ความทรงจำ',
      titleItalic: 'ของ',
      titleLine2: 'ความรักอันยิ่งใหญ่.',
      subtitle: 'ทุกย่างก้าวในเรื่องราวของวินิซิอุสและตะวัน ถูกถักทอด้วยความอดทน ความเอาใจใส่ในทุกๆ วัน และความเชื่อมั่นว่าไม่มีพรมแดนใดขวางกั้นรักแท้ได้',
      preservedMemory: 'ความทรงจำที่เก็บรักษาไว้',
      ch1: {
        subtitle: '16,540 กม. & เวลาต่างกัน 10 ชั่วโมง',
        title: 'สะพานดิจิทัลและกาลเวลา',
        desc: 'ค่ำคืนในบราซิลที่พบกับยามเช้าที่กรุงเทพฯ ทุกข้อความที่ส่งถึงกันคือคำยืนยันว่าความรักสามารถเอาชนะกาลเวลาและระยะทางได้เสมอ',
        badge: 'จุดเริ่มต้น',
      },
      ch2: {
        subtitle: 'เมื่อระยะทางกลายเป็นศูนย์',
        title: 'การพบกันและการสวมกอดครั้งแรก',
        desc: 'ประตูผู้โดยสารขาเข้าที่เปิดออก สายตาสองคู่ที่สบกันก่อนคำพูดใดๆ และอ้อมกอดที่รอคอยมาแสนนานระหว่างบราซิลและเอเชียตะวันออกเฉียงใต้',
        badge: 'ช่วงเวลาสำคัญ',
      },
      ch3: {
        subtitle: 'สองแผ่นดิน รวมเป็นหนึ่งชีวิต',
        title: 'อนาคตร่วมกันอันสดใส',
        desc: 'แผนการเดินทาง การใช้ชีวิตร่วมกันที่ซึ่งเฟโจอาดากับผัดไทย จังหวะแซมบ้าและการร่ายรำไทยอยู่ร่วมกันอย่างกลมกลืนและงดงาม',
        badge: 'ตราบชั่วนิรันดร์',
      },
    },
    culinary: {
      badge: '03.5 / อาหารและรสชาติที่ทั้งสองหลงรัก',
      titleLine1: 'งานเลี้ยงแห่งความรัก:',
      titleHighlight: 'รสชาติจากสองซีกโลก',
      subtitle: 'เลื่อนชม 10 เมนูอาหารและขนมหวานในตำนานของทั้งสองประเทศ ตั้งแต่รสชาติต้นตำรับของเซาเปาโลไปจนถึงเสน่ห์ปลายจวักอาหารไทย',
      filterAll: 'อาหารทั้ง 10 เมนู',
      filterSP: 'เซาเปาโล / บราซิล',
      filterBKK: 'กรุงเทพฯ / ประเทศไทย',
      filterSweet: 'ขนมหวานและของว่างแห่งรัก',
      coupleNoteLabel: 'บันทึกจากคู่รัก:',
      comfort: 'ความอิ่มเอมใจ',
      flavor: 'รสชาติ',
      spicy: 'ระดับความเผ็ด',
    },
    alchemy: {
      badge: '04 / การพบกันของสองวัฒนธรรม',
      subBadge: 'มนต์เสน่ห์แห่งการผสมผสาน',
      titleLine1: 'เมื่อบราซิลผสานเป็นหนึ่งกับ',
      titleHighlight: 'ประเทศไทย',
      titleLine2: 'ในทุกรายละเอียด.',
      subtitle: 'ความงดงามของความรักข้ามทวีปคือการเฉลิมฉลองรากเหง้าของแต่ละคน และสร้างโลกใบใหม่ที่สมบูรณ์แบบร่วมกัน',
      synergyLabel: 'ความลงตัวของทั้งสอง:',
      tabs: {
        gastronomy: {
          title: 'อาหารและรสชาติ',
          brDesc: 'ขนมปังชีสปาวจิกีโจ้อบใหม่ๆ ร้อนๆ สตูถั่วดำเฟโจอาดาดั้งเดิม และบริกาเดโรช็อกโกแลตเข้มข้น',
          thDesc: 'รสชาติที่สมดุลครบรส ทั้งเปรี้ยว หวาน เค็ม เผ็ด จากผัดไทยกุ้งแม่น้ำ ต้มยำกุ้งรสเลิศ และข้าวเหนียวมะม่วงหวานมัน',
          synergy: 'ในห้องครัวของวินิซิอุสและตะวัน พริกของบราซิลและพริกขี้หนูสวนไทยจะร่วมกันสร้างสรรค์มื้อค่ำที่ไม่มีวันลืม',
        },
        landscapes: {
          title: 'เมืองหลวงและทิวทัศน์',
          brDesc: 'ความยิ่งใหญ่ของถนนเปาลิสตา ความร่มรื่นของสวนอิบิราปูเอรา และสายฝนพรำยามบ่ายของเมืองใหญ่',
          thDesc: 'ความงดงามสีทองของวัดอรุณฯ โค้งน้ำเจ้าพระยาอันสง่างาม และแสงสีของตลาดยามค่ำคืนในกรุงเทพฯ',
          synergy: 'สองเมืองหลวงระดับโลกที่ไม่เคยหลับใหล เชื่อมโยงกันด้วยขอบฟ้าแห่งความฝันอันเดียวกัน',
        },
        spirit: {
          title: 'จิตวิญญาณและคุณค่าชีวิต',
          brDesc: 'อ้อมกอดอันอบอุ่นแบบชาวบราซิล รอยยิ้มที่จริงใจ และความซื่อสัตย์มั่นคงต่อคนที่รัก',
          thDesc: 'การไหว้ทักทายสวัสดี ความอ่อนโยนทางจิตใจ ความกตัญญู และความสงบเย็นที่ดับทุกความร้อนรุ่ม',
          synergy: 'ความอบอุ่นของวินิซิอุสคอยปลอบประโลมใจให้ตะวัน และความอ่อนโยนสงบสุขของตะวันนำความสุขสงบมาสู่วินิซิอุส',
        },
        music: {
          title: 'ดนตรีและท่วงทำนอง',
          brDesc: 'ท่วงทำนองบอสซาโนวาอันไพเราะของ ทอม โจบิม เสียงกีตาร์คลาสสิกที่เต้นตามจังหวะหัวใจ',
          thDesc: 'เสียงระนาดและขิมไทยอันพริ้วไหว ผสานกับความสดใสร่วมสมัยของดนตรีทีป๊อปเมืองไทย',
          synergy: 'บทเพลงสากลที่ภาษาไม่ใช่กำแพง เพราะภาษาหัวใจและความรักสื่อถึงกันได้เสมอ',
        },
      },
    },
    vows: {
      badge: '05 / คำมั่นสัญญาและกระดานอวยพร',
      subBadge: 'ถ้อยคำนิรันดร์',
      titleLine1: 'คำมั่นสัญญาที่ก้าวข้าม',
      titleHighlight: 'กาลเวลาและระยะทาง',
      viniciusTitle: 'คำมั่นสัญญาจากวินิซิอุส',
      viniciusLocation: 'เซาเปาโล, บราซิล',
      viniciusText: '"ตะวัน เมื่อผมมองตาคุณ ผมเห็นบ้านที่แท้จริงของผม ไม่สำคัญว่านาฬิกาของเราจะต่างกัน 10 ชั่วโมง หรือมหาสมุทรจะกว้างใหญ่เพียงใด หัวใจของผมเต้นเป็นจังหวะเดียวกับคุณเสมอ ผมสัญญาว่าจะดูแลรอยยิ้มของคุณ ประคับประคองความฝัน และทำให้ทุกวันของเราเป็นดั่งปาฏิหาริย์ที่สวยงามที่สุด"',
      viniciusFromTo: 'มอบให้แด่ ตะวัน กรรณิการ์',
      tawanTitle: 'คำสาบานของตะวัน (คำมั่นสัญญาจากตะวัน)',
      tawanLocation: 'กรุงเทพมหานคร, ประเทศไทย',
      tawanText: '"วินิซิอุส คุณนำพาความสุขและแสงสว่างอันเจิดจ้าเข้ามาในชีวิตของฉัน แม้โลกทั้งใบจะอยู่ระหว่างเรา แต่ฉันไม่เคยรู้สึกห่างไกลจากอ้อมกอดของคุณเลย ฉันสัญญาว่าจะจับมือคุณไว้ในทุกฤดูกาล สร้างความสงบสุขร่วมกัน และเดินเคียงข้างคุณตลอดไป ด้วยรักและความจริงใจทั้งหมดที่มี"',
      tawanFromTo: 'มอบให้แด่ วินิซิอุส ซิลวา',
      muralTitle: 'กระดานอวยพรและคำยินดีสำหรับคู่รัก',
      muralSubtitle: 'ร่วมเขียนข้อความอวยพรและส่งความปรารถนาดีแด่ วินิซิอุส และ ตะวัน',
      nameLabel: 'ชื่อของคุณ',
      namePlaceholder: 'เช่น: ครอบครัว, เพื่อนสนิท',
      originLabel: 'เมือง / ประเทศของคุณ',
      originPlaceholder: 'เช่น: เซาเปาโล, กรุงเทพฯ...',
      messageLabel: 'ข้อความอวยพร',
      messagePlaceholder: 'เขียนคำอวยพรแห่งความสุข ความรัก และความเจริญรุ่งเรืองแด่คู่รัก...',
      btnSubmit: 'บันทึกคำอวยพรและร่วมเฉลิมฉลอง',
      registeredCount: 'ข้อความอวยพรที่ได้รับ',
    },
    footer: {
      desc: 'บันทึกเรื่องราวความรักข้ามทวีปอันงดงาม จากจังหวะชีวิตแห่งถนนเปาลิสตา สู่สายน้ำเจ้าพระยาอันสว่างไสว เรื่องราวหนึ่งเดียวที่ถูกบอกเล่าโดยคนสองคน',
      coordinatesTitle: 'พิกัดทางภูมิศาสตร์',
      spLabel: 'เซาเปาโล (วินิซิอุส)',
      bkkLabel: 'กรุงเทพฯ (ตะวัน)',
      distLabel: 'ระยะทางข้ามทวีป',
      diffLabel: 'ความต่างของเวลา',
      navTitle: 'เมนูนำทาง',
      craftedWithLove: 'สร้างขึ้นด้วยความรักแด่',
      rights: '© 2026 วินิซิอุส และ ตะวัน. สงวนลิขสิทธิ์ทั้งหมด.',
    },
  },
};

interface LanguageContextProps {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('site_lang');
    return (saved === 'th' || saved === 'pt') ? saved : 'pt';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('site_lang', newLang);
  };

  const toggleLang = () => {
    const newLang: Language = lang === 'pt' ? 'th' : 'pt';
    setLang(newLang);
  };

  const value: LanguageContextProps = {
    lang,
    t: translations[lang],
    toggleLang,
    setLang,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
