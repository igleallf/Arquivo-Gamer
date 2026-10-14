// src/data.js

export const platforms = [
  { 
    id: 'playstation', 
    title: "PlayStation", 
    desc: "Da revolução do primeiro console em 3D até os modernos gráficos imersivos do PS5, sinônimo de narrativas épicas e franquias inesquecíveis.",
    mainOverview: "Criada pela Sony sob a liderança do visionário Ken Kutaragi e lançada no Japão ao fim de 1994, a marca PlayStation redefiniu para sempre a indústria dos videogames ao introduzir mídias em CD-ROM de baixo custo, gráficos poligonais tridimensionais revolucionários e uma abordagem madura que atraiu tanto os jogadores adolescentes quanto os adultos da época, mudando os rumos do entretenimento digital.",
    consoles: [
      {
        id: 'ps1',
        name: 'PlayStation 1 (1994)',
        history: 'Desafiando a hegemonia absoluta dos cartuchos caros, o PS1 apostou na capacidade revolucionária e no baixo custo de fabricação dos discos CD-ROM. Isso permitiu trilhas sonoras orquestradas em CD de áudio, dublagens completas e cutscenes cinematográficas em computação gráfica que transformaram a narrativa dos jogos.',
        games: ['Crash Bandicoot', 'Resident Evil', 'Silent Hill', 'Metal Gear Solid'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKg868HLLkrBXbfaWYOwW2CbptiRsZECX-hoXDXqgOYg&s=10'
      },
      {
        id: 'ps2',
        name: 'PlayStation 2 (2000)',
        history: 'Lançado na virada do milênio, o PlayStation 2 consagrou-se como o console mais vendido de toda a história dos videogames. Equipado com a inovadora mídia de reprodução de filmes DVD e uma biblioteca colossal de milhares de títulos inesquecíveis, ele dominou gerações inteiras e definiu a infância e adolescência de milhões de jogadores.',
        games: ['God of War', 'GTA: San Andreas', 'Shadow of the Colossus', 'Gran Turismo 4'],
        image: 'https://cdn.awsli.com.br/2500x2500/2443/2443989/produto/190441800f3d61e1c11.jpg'
      },
      {
        id: 'ps3',
        name: 'PlayStation 3 (2006)',
        history: 'Apesar de enfrentar um início de geração desafiador devido à complexa e exótica arquitetura do seu processador Cell, o PS3 deu a volta por cima apostando em fortes investimentos em estúdios first-party, introduzindo gráficos em alta definição (HD), serviços online consolidados e narrativas dramáticas profundas que moldaram o padrão moderno dos blockbusters.',
        games: ['The Last of Us', 'Uncharted 2', 'God of War III', 'Demon’s Souls'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5wJi0qvtxVKzG-0KEiKFKuu-Jj9pcVZxGkt8ePAZxw&s=10'
      },
      {
        id: 'ps4',
        name: 'PlayStation 4 (2013)',
        history: 'Projetado com foco cirúrgico nas necessidades reais dos desenvolvedores e da comunidade, o PlayStation 4 focou em experiências single-player imersivas de altíssima qualidade visual. Tornou-se o lar definitivo de grandes épicos cinematográficos e revolucionou a forma como compartilhamos clipes e momentos marcantes através do botão Share.',
        games: ['Marvel’s Spider-Man', 'Bloodborne', 'God of War (2018)', 'Horizon Zero Dawn'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/PS4-Console-wDS4.jpg'
      },
      {
        id: 'ps5',
        name: 'PlayStation 5 (2020)',
        history: 'Representando o ápice tecnológico da marca, o PlayStation 5 quebrou barreiras físicas com o uso de um SSD ultrarrápido customizado que praticamente eliminou as telas de carregamento. Além disso, introduziu o inovador controle DualSense com gatilhos adaptativos e resposta háptica avançada, oferecendo um nível inédito de tato e imersão nos mundos virtuais.',
        games: ['Demon’s Souls Remake', 'Ratchet & Clank: Rift Apart', 'God of War Ragnarök'],
        image: 'https://cdn.awsli.com.br/2487/2487672/produto/243743613/console-sony-playstation-5_1634132556_gg-uu9l8xcqcv.jpg'
      }
    ]
  },
  { 
    id: 'xbox', 
    title: "Xbox", 
    desc: "A potência da Microsoft que revolucionou o cenário multiplayer com a Xbox Live e redefiniu a indústria com o Game Pass.",
    mainOverview: "A marca Xbox nasceu em 2001 da forte determinação da Microsoft em assegurar uma posição de destaque na sala de estar digital, trazendo para o mercado de consoles uma arquitetura robusta baseada em PC, discos rígidos embutidos de fábrica e a criação da Xbox Live, que moldou para sempre o padrão global das jogatinas competitivas e cooperativas online.",
    consoles: [
      {
        id: 'xbox-orig',
        name: 'Xbox Original (2001)',
        history: 'A estreia corajosa da Microsoft no mercado de hardware surpreendeu o mundo com um console robusto, pesado e incrivelmente potente para a sua época. Com porta ethernet embutida e disco rígido interno, ele pavimentou o caminho para o sucesso estrondoso do fenômeno Halo e established as bases do ecossistema online que conhecemos hoje.',
        games: ['Halo: Combat Evolved', 'Fable', 'Star Wars: Knights of the Old Republic'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uw-iS5CfYAYuc2s1fX6DtmJc2H14reqNJi5CDtsP6g&s=10'
      },
      {
        id: 'xbox-360',
        name: 'Xbox 360 (2005)',
        history: 'O console que definiu a sétima geração com maestria incontestável. O Xbox 360 popularizou as conquistas (achievements), trouxe uma interface moderna baseada em painéis e revolucionou os jogos de tiro em primeira pessoa e ação cooperativa. Apesar do infame problema técnico das Três Luzes Vermelhas, conquistou uma legião apaixonada de fãs.',
        games: ['Halo 3', 'Gears of War', 'Alan Wake', 'Mass Effect'],
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft-Xbox-360-E-wController.jpg/250px-Microsoft-Xbox-360-E-wController.jpg'
      },
      {
        id: 'xbox-one',
        name: 'Xbox One (2013)',
        history: 'Superando os desafios iniciais de um lançamento polêmico focado em centrais multimídia de TV, o ecossistema do Xbox One deu uma guinada histórica brilhante ao focar em serviços voltados ao consumidor, introduzindo a retrocompatibilidade robusta com gerações passadas e a semente do revolucionário modelo de assinatura.',
        games: ['Forza Horizon 3', 'Sunset Overdrive', 'Gears 5'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvAOcwLhgT3aBDHPpA62cKK1PzJvrqplcMccWw58MoXLo21z7plzV_Y46&s=10'
      },
      {
        id: 'xbox-series',
        name: 'Xbox Series X/S (2020)',
        history: 'Representando a geração atual do ecossistema Microsoft, o projeto apostou em duas vertentes inteligentes: o poderoso Series X voltado para máxima performance em 4K, e o compacto Series S voltado para alta eficiência e custo-benefício. Ambos integrados profundamente ao Xbox Game Pass, democratizando o acesso a centenas de jogos.',
        games: ['Halo Infinite', 'Forza Horizon 5', 'Starfield'],
        image: 'https://files.tecnoblog.net/wp-content/uploads/2020/10/Xbox-Series-X-e-S.jpg'
      }
    ]
  },
  { 
    id: 'nintendo', 
    title: "Nintendo", 
    desc: "A pioneira que moldou a história dos videogames com inovação contínua, criatividade incomparável e personagens icônicos.",
    mainOverview: "Fundada originalmente em Quioto no ano de 1889 como uma fabricante de cartas de baralho artesanais hanafuda, a Nintendo evoluiu ao longo das décadas para se tornar a empresa mais influente e criativa da história dos brinquedos eletrônicos, priorizando sempre a diversão mecânica pura, o design de level impecável e a magia atemporal de suas franquias.",
    consoles: [
      {
        id: 'nes',
        name: 'NES / Nintendinho (1983)',
        history: 'O console histórico que salvou por completo a indústria ocidental de videogames após o grande colapso de mercado de 1983. O NES estabeleceu as regras fundamentais do level design moderno através de saltos precisos, mundos secretos e progressão de fases que influenciam criadores até os dias atuais.',
        games: ['Super Mario Bros.', 'The Legend of Zelda', 'Metroid', 'Mega Man'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Ep3Gv3HNvFab4QkrGtOTRJNo6acMBu_8Uzxkxy7jFQ&s=10'
      },
      {
        id: 'snes',
        name: 'Super Nintendo / SNES (1990)',
        history: 'Aclamado por entusiastas e críticos como o ápice dourado da era dos 16-bits, o Super Nintendo elevou o padrão artístico dos videogames com cores vibrantes, efeitos de rotação de tela em hardware (Mode 7) e trilhas sonoras em chip de som especializado que emocionam gerações até hoje.',
        games: ['Super Mario World', 'Chrono Trigger', 'Donkey Kong Country', 'Super Metroid'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82VJiSwqaUDn9gSKN-l8A5o0ERcfx93ZEXVoxvWn-xQ&s=10'
      },
      {
        id: 'n64',
        name: 'Nintendo 64 (1996)',
        history: 'Com a difícil e corajosa missão de transitar da arte em pixel art bidimensional para os desafiadores ambientes tridimensionais, o Nintendo 64 inventou soluções brilhantes de controle com o analógico e inventou a câmera livre em 3D, redefinindo para sempre como exploramos mundos virtuais.',
        games: ['Super Mario 64', 'The Legend of Zelda: Ocarina of Time', 'GoldenEye 007', 'Mario Kart 64'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEErJGNl2SDPEPN7yUGuL7-QA1kntKLTui1nnmhWyWnrPhk34SU-UEw2K&s=10'
      },
      {
        id: 'nds',
        name: 'Nintendo DS (2004)',
        history: 'Lançado sob um conceito inovador de duas telas (sendo uma delas sensível ao toque) e microfone embutido, o Nintendo DS quebrou recordes estrondosos de vendas pelo mundo, atraindo tanto o público hardcore quanto pessoas que nunca haviam jogado videogame na vida através de experiências criativas e dinâmicas.',
        games: ['New Super Mario Bros.', 'Pokémon Diamond & Pearl', 'Mario Kart DS', 'Phoenix Wright: Ace Attorney'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3nQUxhKeKocovmi05a-WWnfuEaPehOTFNR3EK6iEz_68DKamukqa3pct8&s=10'
      },
      {
        id: 'wii',
        name: 'Nintendo Wii (2006)',
        history: 'Lançado sob o codinome Revolution, o Wii quebrou todos os paradigms da indústria ao introduzir controles por sensores de movimento intuitivos. Ele tirou milhões de pessoas do sofá, uniu famílias em salas de estar e provou que gráficos ultra-realistas não são o único fator determinante para o sucesso de um console.',
        games: ['Wii Sports', 'Super Mario Galaxy', 'The Legend of Zelda: Twilight Princess', 'Mario Kart Wii'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQD7HdoYKSMEAGKmyqlX8PgS7nOsiEMN8fNGZg-wNxA&s=10'
      },
      {
        id: 'switch',
        name: 'Nintendo Switch (2017)',
        history: 'Uma das maiores revoluções tecnológicas recentes, o Nintendo Switch uniu com maestria incomparável o conceito de console de mesa com a portabilidade total de um dispositivo de bolso. Com controles destacáveis Joy-Con e uma biblioteca repleta de obras-primas aclamadas, tornou-se um marco cultural absoluto.',
        games: ['The Legend of Zelda: Breath of the Wild', 'Super Mario Odyssey', 'Animal Crossing: New Horizons'],
        image: 'https://cdn.awsli.com.br/1385/1385452/produto/399462207/c58ee2fff71a445991ccf52d9615cf17-ni3yg45gvi.jpg'
      }
    ]
  },
  { 
    id: 'pc', 
    title: "PC Gaming", 
    desc: "O berço do dinamismo, da evolução gráfica contínua, dos MMORPGs, MOBAs e da liberdade de customização sem limites.",
    mainOverview: "Sem as restrições rígidas de ciclos de gerações fechadas impostas pelos consoles tradicionais, os Computadores Pessoais sempre funcionaram como a plataforma definitiva da inovação tecnológica, permitindo modificações profundas (mods), taxas de quadros ilimitadas, resoluções extremas e a experimentação livre de novos gêneros de jogos.",
    consoles: [
      {
        id: 'pc-dos',
        name: 'Microcomputadores MS-DOS & Monitores CRT (Anos 80 - Meados dos Anos 90)',
        history: 'A fase clássica dos computadores de gabinete bege e monitores de tubo CRT pesados. Era o reino sagrado dos disquetes pesados, jogos estratégicos complexos baseados em turnos e a introdução revolucionária dos primeiros jogos de tiro em primeira pessoa que moldaram a cultura pop.',
        games: ['Doom', 'Prince of Persia', 'Monkey Island', 'SimCity 2000'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV29VD5_QT8lyApOHXQt-BQLlddpUkqGcQqrE7ir3p8wF5zyKH1J5LuM&s=10'
      },
      {
        id: 'pc-3d-lan',
        name: 'Placas de Vídeo 3D & Jogatina em Rede (LAN) (Anos 90 - Anos 2010)',
        history: 'A explosão comercial das placas aceleradoras 3D dedicadas e o surgimento das inesquecíveis LAN houses de bairro. Essa era consolidou as comunidades virtuais, servidores dedicados de jogos de tiro tático e os primeiros mundos persistentes online em massa.',
        games: ['Half-Life', 'Counter-Strike 1.6', 'Quake III Arena', 'Diablo II'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRir2aZMGV4_cmpS7pobGwQJl3xS6XWRyg_zaJTHAefoPtuIF3iIMM04Tw&s=10'
      },
      {
        id: 'pc-modern',
        name: 'Setups Customizados: RGB, Ray Tracing & eSports (Atualidade)',
        history: 'Os computadores modernos transformaram-se em verdadeiras obras de arte tecnológicas de alta performance, equipados com iluminação RGB personalizada, tecnologias avançadas de iluminação por inteligência artificial (Ray Tracing) e plataformas digitais unificadas de distribuição de jogos.',
        games: ['League of Legends', 'Valorant', 'Cyberpunk 2077', 'Counter-Strike 2'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzLf1TGAouEuREaW8GSuVq2bDluiRp4CdMXyqXJUvJA&s=10'
      }
    ]
  },
  { 
    id: 'mobile', 
    title: "Mobile", 
    desc: "A praticidade e o alcance global dos smartphones, levando o entretenimento gamer para a palma da mão.",
    mainOverview: "Evoluindo rapidamente de experiências simples e pixeladas em telas monocromáticas de celulares antigos para se tornar atualmente a maior e mais lucrativa plataforma de jogos do planeta, conectando bilhões de usuários instantaneamente com controles por toque e conectividade 5G ultrarrápida.",
    consoles: [
      {
        id: 'mobile-classic',
        name: 'Celulares Físicos & Jogos em Tecnologia Java (Fim dos Anos 90 - Anos 2000)',
        history: 'A semente nostálgica do entretenimento portátil de bolso nasceu nos clássicos aparelhos celulares monocromáticos e coloridos da virada do século. Quem não passou horas tentando bater recordes no clássico jogo da cobrinha ou em games leves desenvolvidos em tecnologia Java?',
        games: ['Snake (Jogo da Cobrinha)', 'Bounce', 'Gravity Defied', 'Diamond Rush', 'Tetris Mobile'],
        image: 'https://i.ytimg.com/vi/cjh7mMdTulk/hqdefault.jpg'
      },
      {
        id: 'mobile-modern',
        name: 'Smartphones Touchscreen & eSports de Bolso (Atualidade)',
        history: 'A revolução total das telas sensíveis ao toque de alta definição, aliada a poderosos processadores gráficos de oito núcleos. Hoje, os smartphones rodam jogos pesados de mundo aberto e competições globais de eSports de nível profissional diretamente na palma da mão.',
        games: ['Genshin Impact', 'PUBG Mobile', 'Clash Royale', 'Call of Duty: Mobile', 'Free Fire'],
        image: 'https://s.zst.com.br/cms-assets/2022/09/pubg_mobile.webp'
      }
    ]
  }
]

export const characters = [
  { 
    id: 'mario', 
    title: "Super Mario", 
    company: "Nintendo",
    desc: "O mascote mundial dos games, sinônimo de inovação, gameplay perfeita e diversão pura em cada salto.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8AcHstT7wbZ5o9RJlHMvJCys3jeDv8MFPNiy2QjEjQ&s=10",
    history: "Criado pelo lendário Shigeru Miyamoto em 1981, Mario estreou originalmente sob o nome de 'Jumpman' no clássico jogo de arcade Donkey Kong. Mais do que apenas um encanador italiano de bigode marcante no Reino dos Cogumelos, o personagem tornou-se a cara pública dos videogames em todo o planeta, estrelando transições revolucionárias do pixel art bidimensional para os mundos tridimensionais expansivos e redefinindo gêneros a cada geração.",
    impact: "Definiu os padrões fundamentais de design de fases em 2D com Super Mario Bros. e inventou o padrão de movimentação e câmera analógica em 3D com Super Mario 64, servindo de molde até hoje para qualquer jogo de plataforma moderno.",
    mainGames: ["Super Mario Bros. (1985)", "Super Mario World (1990)", "Super Mario 64 (1996)", "Super Mario Galaxy (2007)", "Super Mario Odyssey (2017)"]
  },
  { 
    id: 'sonic', 
    title: "Sonic the Hedgehog", 
    company: "SEGA",
    desc: "O ouriço azul que se tornou o símbolo de velocidade máxima e atitude nos videogames.",
    image: "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/03/09/1237563807-sonic.png",
    history: "Concebido por Naoto Ohshima e Yuji Naka em 1991 para ser o mascote oficial da SEGA na era dos 16-bits, Sonic nasceu para desafiar o domínio do Super Mario com um design focado em velocidade frenética, atitude jovem e trilhas sonoras marcantes de pop e rock. O ouriço azul superou a barreira dos consoles para se tornar uma força da cultura pop mundial, estrelando séries de TV, quadrinhos e grandes produções de cinema.",
    impact: "Demonstrou a força do marketing focado em atitude e velocidade, provando que um mascote bem desenhado com jogabilidade rápida podia rivalizar de igual pra igual com a maior gigante da época e expandir o público gamer para os adolescentes.",
    mainGames: ["Sonic the Hedgehog (1991)", "Sonic the Hedgehog 2 (1992)", "Sonic CD (1993)", "Sonic Adventure (1998)", "Sonic Mania (2017)"]
  },
  { 
    id: 'kratos', 
    title: "Kratos", 
    company: "PlayStation / Sony",
    desc: "O lendário Fantasma de Esparta de God of War, símbolo de evolução narrativa.",
    image: "https://i.redd.it/kgwfz8yzbs791.jpg",
    history: "Estreando no PlayStation 2 em 2005 sob a visão criativa de David Jaffe e Cory Barlog, Kratos iniciou sua jornada como o impiedoso Fantasma de Esparta, movido pela vingança visceral contra os deuses do Olimpo grego. Anos mais tarde, a franquia passou por uma reinvenção histórica no PS4 ao mudar de mitologia para a nórdica, mostrando Kratos como um pai protetor tentando ensinar seu filho Atreus e buscando redenção por seu passado sangrento.",
    impact: "Redefiniu o combate Hack and Slash nos anos 2000 com sequências de ação colossais e Quick Time Events (QTEs), e posteriormente revolucionou a narrativa madura nos jogos com a câmera sem cortes no plano-sequência do God of War de 2018.",
    mainGames: ["God of War (2005)", "God of War II (2007)", "God of War III (2010)", "God of War (2018)", "God of War Ragnarök (2022)"]
  },
  { 
    id: 'masterchief', 
    title: "Master Chief", 
    company: "Xbox / Microsoft",
    desc: "O icônico supersoldado Spartan de Halo, pilar do ecossistema Xbox.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Halo_4_-_Master_Chief.jpg",
    history: "John-117, amplamente conhecido como Master Chief, é o supersoldado Spartan-II protegido pela inteligência artificial Cortana. Surgido no lançamento do primeiro Xbox em 2001 pela Bungie, ele tornou-se a linha de frente da esperança da humanidade na guerra galáctica contra a aliança alienígena Covenant. Seu capacete verde oliva é um dos ícones mais reconhecíveis de toda a história dos videogames.",
    impact: "Pioneiro absoluto na adaptação perfeita dos controles de jogos de tiro em primeira pessoa (FPS) para os joysticks de console com dois analógicos, além de estabelecer a Xbox Live como o padrão da indústria para multiplayer online em grande escala.",
    mainGames: ["Halo: Combat Evolved (2001)", "Halo 2 (2004)", "Halo 3 (2007)", "Halo 4 (2012)", "Halo Infinite (2021)"]
  },
  { 
    id: 'laracroft', 
    title: "Lara Croft", 
    company: "Multiplataforma / Eidos / Crystal Dynamics",
    desc: "A destemida arqueóloga de Tomb Raider, pioneira no 3D.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVv9OFpZF2KOJ4L8efPlSOTak_DKfyse7bGUH7n68038ECBMjxfrBZvE&s=10",
    history: "Criada por Toby Gard e lançada pela Core Design/Eidos em 1996, Lara Croft é uma destemida arqueóloga britânica britânica que viaja pelos cantos mais remotos e perigosos do planeta explorando ruínas antigas, decifrando enigmas e enfrentando ameaças lendárias. Com múltiplas reinvenções bem-sucedidas ao longo das décadas, Lara estabeleceu-se como a maior heroína da história da mídia.",
    impact: "Quebrou para sempre os estereótipos de gênero nos videogames ao provar que uma protagonista feminina podia liderar uma grande franquia global de ação 3D, vendendo milhões de cópias e estampando capas de revistas culturais no mundo todo.",
    mainGames: ["Tomb Raider (1996)", "Tomb Raider II (1997)", "Tomb Raider: Legend (2006)", "Tomb Raider (2013)", "Rise of the Tomb Raider (2015)"]
  }
]

export const gamerProducts = [
  {
    id: 1,
    name: "Action Figure Kratos - God of War Ragnarök (20cm)",
    category: "Bonecos & Collectibles",
    price: "R$ 397,99",
    image: "https://http2.mlstatic.com/D_Q_NP_652922-MLB110761210399_042026-F.webp",
    desc: "Action figure articulado de 20cm com acabamento premium, incluindo o Machado Leviatã e o Escudo Guardião.",
    buyUrl: "https://www.mercadolivre.com.br/kratos-god-of-war-colecao-jogo-action-figure-articulado-20cm/p/MLB2024869959"
  },
  {
    id: 2,
    name: "Estátua Amiibo Link - The Legend of Zelda: Tears of the Kingdom",
    category: "Bonecos & Collectibles",
    price: "R$ 152,05",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGpWPK0YQCBrD0HfNny7-DQkyS6iD3BDZP82vaF9Uzg&s=10",
    desc: "Amiibo oficial da Nintendo retratando Link com seu braço direito corrompido, desbloqueando recompensas no Switch.",
    buyUrl: "https://pt.aliexpress.com/item/1005012132504150.html"
  },
  {
    id: 3,
    name: "RedMagic 9 Pro 512GB",
    category: "Celulares Gamer",
    price: "R$ 5.832,16",
    image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/535129/Smartphone-N-bia-Red-Magic-9-Pro-512GB-16GB-RAM_1709726290_gg.jpg",
    desc: "Potência extrema com Snapdragon 8 Gen 3, 16GB RAM, cooler interno ativo com iluminação RGB e gatilhos de 520Hz.",
    buyUrl: "https://shopee.com.br/product/1502011524/23493965902"
  },
  {
    id: 4,
    name: "Xiaomi POCO M6 Pro 256GB",
    category: "Celulares Gamer",
    price: "R$ 1.699,90",
    image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/657093/xlarge/Smartphone-Xiaomi-Poco-M6-Pro-256gb-8GB-Ram-Dual-Sim-4g-Tela-Fhd-Nfc-Vers-o-Global-Azul_1738790433.jpg",
    desc: "Tela Flow AMOLED de 120Hz, processador Helio G99-Ultra, 8GB RAM e carregamento ultrarrápido de 67W.",
    buyUrl: "https://www.kabum.com.br/produto/657093/smartphone-xiaomi-poco-m6-pro-256gb-8gb-ram-dual-sim-4g-tela-fhd-nfc-versao-global-azul"
  },
  {
    id: 5,
    name: "Placa de Vídeo Palit RTX 5060 Infinity 2 OC 8GB GDDR7",
    category: "Peças de PC",
    price: "R$ 2.799,99",
    image: "https://images.kabum.com.br/produtos/fotos/988706/placa-de-video-palit-geforce-rtx-5060-8gb-infinity-2-oc-gddr7-128bits-ne75060v19p1-gb2063l_1771874345_gg.jpg",
    desc: "Arquitetura gráfica de última geração com overclock de fábrica, suporte a Ray Tracing e memória GDDR7 ultra-rápida.",
    buyUrl: "https://www.kabum.com.br/produto/988706/placa-de-video-palit-geforce-rtx-5060-8gb-infinity-2-oc-gddr7-128bits-ne75060v19p1-gb2063l"
  },
  {
    id: 6,
    name: "Processador AMD Ryzen 7 7800X3D (AM5)",
    category: "Peças de PC",
    price: "R$ 1.999,99",
    image: "https://images.kabum.com.br/produtos/fotos/426262/processador-amd-ryzen-7-7800x3d-5-0ghz-max-turbo-cache-104mb-am5-8-nucleos-video-integrado-100-100000910wof_1680784502_gg.jpg",
    desc: "O melhor processador para jogos do mundo com tecnologia 3D V-Cache, 8 núcleos, 16 threads e clock até 5.0GHz.",
    buyUrl: "https://www.kabum.com.br/produto/426262/processador-amd-ryzen-7-7800x3d-4-2ghz-5-0ghz-max-turbo-cache-104mb-8-nucleos-16-threads-am5-com-video-integrado-100-100000910wof"
  },
  {
    id: 7,
    name: "Teclado Mecânico Redragon Surara Pro",
    category: "Periféricos",
    price: "R$ 215,00",
    image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/399624/xlarge/Teclado-Mec-nico-Redragon-Surara-Pro-RGB-Branco-Switch-Azul-ptico-Abnt2-K582W-RGB-PRO_1789673921.jpg",
    desc: "Teclado ABNT2 completo na cor branca com switches ópticos azuis, resposta ultrarrápida e iluminação RGB Redragon.",
    buyUrl: "https://www.kabum.com.br/produto/399624/teclado-mecanico-redragon-surara-pro-rgb-branco-switch-azul-optico-abnt2-k582w-rgb-pro"
  },
  {
    id: 8,
    name: "Headset HyperX Cloud III Wireless Preto/Vermelho",
    category: "Periféricos",
    price: "R$ 949,00",
    image: "https://http2.mlstatic.com/D_Q_NP_689682-MLA99938933541_112025-F.webp",
    desc: "Conexão sem fio de 2.4GHz com bateria épica de até 120 horas, drivers angulados de 53mm e áudio espacial DTS Headphone:X.",
    buyUrl: "https://www.mercadolivre.com.br/headset-hyperx-cloud-iii-wireless-preto-vermelho-120-horas-preto/p/MLB35343298"
  }
]

export const initialCommunities = [
  {
    id: 'geral',
    name: 'Praça Gamer',
    icon: '🎮',
    desc: 'O ponto de encontro de todos os jogadores. Converse sobre qualquer assunto do mundo dos games.',
    isPrivate: false
  },
  {
    id: 'nostalgia',
    name: 'Nostalgia Retrô',
    icon: '🕹️',
    desc: 'Para quem viveu a era das locadoras, dos cartuchos e dos fliperamas.',
    isPrivate: false
  },
  {
    id: 'hardware',
    name: 'Hardware e PC Build',
    icon: '🖥️',
    desc: 'Monte seu setup, tire dúvidas sobre peças e troque ideias sobre desempenho.',
    isPrivate: false
  },
  {
    id: 'mobile',
    name: 'Mobile Gamers',
    icon: '📱',
    desc: 'Dicas, builds e novidades dos jogos de celular.',
    isPrivate: false
  },
  {
    id: 'colecionadores',
    name: 'Clube dos Colecionadores',
    icon: '📦',
    desc: 'Espaço exclusivo para colecionadores. Envie solicitação para o Administrador aprovar.',
    isPrivate: true
  },
  {
    id: 'speedrun',
    name: 'Sala dos Speedrunners',
    icon: '⚡',
    desc: 'Comunidade exclusiva para recordistas de tempo. Envie solicitação de acesso.',
    isPrivate: true
  }
]

export const initialForumPosts = [
  { 
    id: 101, 
    communityId: 'geral',
    author: "Bruno Alcantara", 
    text: "Galera, qual foi o jogo que mais marcou a vida de vocês na infância? Pra mim foi Chrono Trigger.",
    replies: [
      { id: 1001, author: "Camila Souza", text: "Nossa, Chrono Trigger é obra-prima! Para mim foi Pokémon Red." },
      { id: 1002, author: "Rodrigo Mendes", text: "Joguei muito Mario Kart 64 com os amigos na infância, épico demais." },
      { id: 1003, author: "Juliana Rocha", text: "The Sims 1 roubou centenas de horas da minha adolescência risos." },
      { id: 1004, author: "Felipe Bastos", text: "Crash Bandicoot no PS1, sem dúvidas!" }
    ]
  },
  { 
    id: 102, 
    communityId: 'geral',
    author: "Renata Duarte", 
    text: "Vocês preferem curtir um RPG gigante de mundo aberto ou um jogo focado em história linear curta?",
    replies: [
      { id: 1005, author: "Diego Martins", text: "Sou 100% mundo aberto, adoro explorar cada cantinho do mapa." },
      { id: 1006, author: "Larissa Farias", text: "Prefiro história linear! Trabalho o dia todo, não tenho 200 horas para farmar." },
      { id: 1007, author: "Matheus Vinícius", text: "Depende do meu humor, mas campanhas lineares bem escritas me prendem mais." }
    ]
  },
  { 
    id: 201, 
    communityId: 'nostalgia',
    author: "Carlos Alberto", 
    text: "Quem lembra de assoprar a fita do Nintendinho ou do Mega Drive quando o jogo não pegava de primeira?",
    replies: [
      { id: 2001, author: "Vanessa Lima", text: "Clássico absoluto! A gente achava que resolvia tudo assoprando risos." },
      { id: 2002, author: "Marcelo Ramos", text: "Era ritual sagrado antes de começar a jogatina." },
      { id: 2003, author: "Tatiane Souza", text: "Lembro do cheiro de eletrônico novo quando abria cartucho alugado na locadora." },
      { id: 2004, author: "Eduardo Costa", text: "E funcionava! Na nossa cabeça de criança, era ciência pura." }
    ]
  },
  { 
    id: 202, 
    communityId: 'nostalgia',
    author: "Patricia Gomes", 
    text: "As locadoras de bairro nos anos 2000 eram o melhor lugar do mundo. Alugar jogo de PS2 no sábado era sagrado.",
    replies: [
      { id: 2005, author: "Thiago Silva", text: "Nossa, sim! Ficar folheando a revista Dicas & Truques pra ver os macetes." },
      { id: 2006, author: "Fernanda Dias", text: "Dava R$ 2,00 pra jogar 1 horinha de Winning Eleven com a galera." },
      { id: 2007, author: "Alexandre Nogueira", text: "Época em que a gente conhecia os amigos fisicamente jogando no sofá." }
    ]
  },
  { 
    id: 301, 
    communityId: 'hardware',
    author: "Gabriel Tech", 
    text: "Montei meu primeiro PC com um Ryzen 7 7800X3D e uma RTX 5060. O bicho voa em qualquer jogo em Quad HD!",
    replies: [
      { id: 3001, author: "Lucas Hardware", text: "Configuração monstra! Esse processador da AMD é o rei absoluto dos games." },
      { id: 3002, author: "Beatriz Mota", text: "Parabéns pelo setup! Quanto gastou no total na brincadeira?" },
      { id: 3003, author: "Igor Peças", text: "Bela máquina, agora é só aproveitar a taxa de quadros nas alturas." },
      { id: 3004, author: "Samuel Azevedo", text: "Tenho um setup parecido e roda tudo liso, excelente escolha de peças." }
    ]
  },
  { 
    id: 302, 
    communityId: 'hardware',
    author: "Priscilla Souza", 
    text: "Pessoal, vale a pena investir em water cooler ou o bom e velho air cooler dá conta do recado?",
    replies: [
      { id: 3005, author: "Roberto PC", text: "Air cooler top de linha hoje em dia briga de igual pra igual com water cooler e é mais seguro." },
      { id: 3006, author: "Caio Mendes", text: "Water cooler é mais pela estética e limpeza visual do gabinete, mas air cooler robusto resolve." },
      { id: 3007, author: "Natália Freitas", text: "Uso air cooler há anos e nunca tive dor de cabeça com vazamento." }
    ]
  },
  { 
    id: 401, 
    communityId: 'mobile',
    author: "Alexandre Mobile", 
    text: "Qual é o melhor jogo mobile de mundo aberto atualmente para vocês? Genshin Impact ainda reina?",
    replies: [
      { id: 4001, author: "Bianca Lima", text: "Genshin e Honkai Star Rail estão em outro patamar de qualidade gráfica no celular." },
      { id: 4002, author: "Renan Costa", text: "Jaço muito Call of Duty Mobile no competitivo, otimização dele é perfeita." },
      { id: 4003, author: "Mariana Cell", text: "PUBG Mobile continua sendo meu favorito pra jogar com os amigos à noite." },
      { id: 4004, author: "Leonardo Ramos", text: "Esperando ansioso por novidades de otimização nos celulares gamer com cooler." }
    ]
  },
  { 
    id: 402, 
    communityId: 'mobile',
    author: "Jessica Almeida", 
    text: "Alguém aqui joga no RedMagic ou Pocophone? Sinto que o aquecimento do celular atrapalhava muito antes de usar gatilhos.",
    replies: [
      { id: 4005, author: "Vinicius Gamer", text: "O cooler ativo do RedMagic muda a vida de quem joga competitivo no celular." },
      { id: 4006, author: "Sabrina Melo", text: "Poco M6 Pro quebra um galho enorme pro custo-benefício intermediário." },
      { id: 4007, author: "Otávio Santos", text: "Gatilhos magnéticos embutidos no celular deviam ser obrigatórios em todos os modelos." }
    ]
  },
  { 
    id: 501, 
    communityId: 'colecionadores',
    author: "Ricardo Coleções", 
    text: "Consegui finalmente fechar a minha coleção de Amiibos de The Legend of Zelda com a estátua do Link Tears of the Kingdom!",
    replies: [
      { id: 5001, author: "Flávia Antunes", text: "Que inveja saudável! Essa estátua do Link corrompido é linda demais na estante." },
      { id: 5002, author: "Wagner Collector", text: "Parabéns! Manter caixas originais empoeiradas longe da luz solar é o maior desafio." },
      { id: 5003, author: "Simone Prado", text: "Colecionar action figures hoje em dia exige um planejamento financeiro sério risos." },
      { id: 5004, author: "Hélio Ramos", text: "Show demais! Tem foto da prateleira montada pra gente ver?" }
    ]
  },
  { 
    id: 502, 
    communityId: 'colecionadores',
    author: "Jonathan Toy", 
    text: "Vocês tiram os bonecos da caixa (abrir blister) ou mantêm tudo lacrado para valorizar no futuro?",
    replies: [
      { id: 5005, author: "Alice Toymaker", text: "Eu abro tudo! O boneco foi feito para ser posado e admirado de perto." },
      { id: 5006, author: "Breno Colecionador", text: "Guardo os mais raros lacrados na caixa acrílica protetora, mania de colecionador." },
      { id: 5007, author: "Débora Souza", text: "Depende muito da raridade da peça, mas a tentação de abrir é grande." }
    ]
  },
  { 
    id: 601, 
    communityId: 'speedrun',
    author: "SpeedMaster BR", 
    text: "Consegui quebrar meu recorde pessoal no Any% de Super Mario 64! Abaixou para 1h 42m.",
    replies: [
      { id: 6001, author: "Dani Speed", text: "Brabo demais! Aquele pulo na escada infinita foi limpo?" },
      { id: 6002, author: "Klaus Runner", text: "Parabéns! O sub-1h40 tá logo ali, continua treinando o BLJ." },
      { id: 6003, author: "Melissa R.:", text: "Speedrun exige uma paciência mental absurda com os RNGs." },
      { id: 6004, author: "Paulo Chrono", text: "Vou conferir o VOD da run depois para pegar dicas de rota!" }
    ]
  },
  { 
    id: 602, 
    communityId: 'speedrun',
    author: "Victor Glitch", 
    text: "Qual é o glitch mais satisfatório de executar em jogos clássicos na opinião de vocês?",
    replies: [
      { id: 6005, author: "Stela Fast", text: "Manipulação de memória em Pokémon Red para zerar em minutos é mágica pura." },
      { id: 6006, author: "Hugo Speed", text: "Wall clip em jogos da geração PS2 é sempre muito satisfatório quando encaixa." },
      { id: 6007, author: "Rebeca Lima", text: "Qualquer glitch que salve mais de 5 minutos de cutscene vale ouro." }
    ]
  }
]