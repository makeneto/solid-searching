// Array que armazena os dados dos jogos para o mapeamento
const gameData = [
    {
        id: crypto.randomUUID(),
        link: '',
        image: 'images/call-od-duty-warzone__edition.jpg',
        title: 'Call of Duty®: Warzone BO6 Vault',
        description: 'Forçado a agir na clandestinidade. Caçado a partir de dentro. Este é o Call of Duty®: Warzone BO6 Vault',
        publisher: `Activision Blizzard Int'l BV`,
        rating: 4,
        numRatings: 1463,
        date: '13/4/2023',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Call of Duty®: Black Ops 6 - Edição Vault',
        image: 'images/call-of-duty--card1.jpg',
        description: 'Forçado a agir na clandestinidade. Caçado a partir de dentro. Este é o Call of Duty®: Black Ops 6 - Edição Vault',
        publisher: `Activision Blizzard Int'l BV`,
        rating: 4.7,
        numRatings: 6823,
        date: '25/10/2024',
        newPrice: '68.000 AOA',
        oldPrice: '80.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        image: 'images/call-of-duty--card2.jpg',
        title: 'Call of Duty®: Modern Warfare III',
        description: 'Forçado a agir na clandestinidade. Caçado a partir de dentro. Este é o Call of Duty®: Modern Warfare III',
        publisher: `Activision Blizzard Int'l BV`,
        rating: 4.7,
        numRatings: 6823,
        date: '25/10/2022',
        newPrice: '68.000 AOA',
        oldPrice: '80.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '',
        image: 'images/call-of-duty--card3.jpg',
        title: 'Call of Duty®: MWII Cross-Gen',
        description: 'Forçado a agir na clandestinidade. Caçado a partir de dentro. Este é o Call of Duty®: MWII Cross-Gen',
        publisher: `Activision Blizzard Int'l BV`,
        rating: 4.5,
        numRatings: 13390,
        date: '28/10/2022',
        newPrice: '59.500 AOA',
        oldPrice: '70.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Call of Duty®: Black Ops 6 - Bundle Cross Gen',
        image: 'images/call-of-duty--card1.jpg',
        description: 'Forçado a agir na clandestinidade. Caçado a partir de dentro. Este é o Call of Duty®: Black Ops 6',
        publisher: `Activision Blizzard Int'l BV`,
        rating: 4.1,
        numRatings: 6823,
        date: '25/10/2024',
        newPrice: '59.500 AOA',
        oldPrice: '70.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'yes',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'EA SPORTS FC™ 25 Ultimate Edition',
        image: 'images/fc-25-ultimate__edition.jpg',
        description: 'O EA SPORTS FC™ 25 dá-te mais formas de ganhar pelo teu clube',
        publisher: 'EA Swiss Sarl',
        rating: 3.1,
        numRatings: 38263,
        date: '27/9/2024',
        newPrice: '93.499 AOA',
        oldPrice: '109.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'EA SPORTS FC™ 25 Standard Edition',
        image: 'images/fc25-standard__edition.jpg',
        description: 'O EA SPORTS FC™ 25 dá-te mais formas de ganhar pelo teu clube',
        publisher: 'EA Swiss Sarl',
        rating: 4.6,
        numRatings: 60263,
        date: '27/9/2024',
        newPrice: '34.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'yes',
        initialSearch: 'yes',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'God of War Ragnarök',
        image: 'images/gow-standard__edition.jpg',
        description: ' Kratos e a Atreus numa demanda mítica para obter respostas antes da chegada do Ragnarök',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.6,
        numRatings: 100295,
        date: '9/11/2022',
        newPrice: '34.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'yes',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'God of War Ragnarök',
        image: 'images/gow-deluxure__edition.jpg',
        description: ' Kratos e a Atreus numa demanda mítica para obter respostas antes da chegada do Ragnarök',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.3,
        numRatings: 90274,
        date: '9/11/2022',
        newPrice: '76.499 AOA',
        oldPrice: '89.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Gran Turismo™ 7 (PS4™)',
        image: 'images/gt-standard__edition.jpg',
        description: 'Descobre o Verdadeiro Simulador de Condução completo numa edição que celebra os 25 anos da série',
        publisher: 'Polyphony Digital Inc.',
        rating: 4.3,
        numRatings: 28499,
        date: '4/3/2022',
        newPrice: '51.999 AOA',
        oldPrice: '60.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Gran Turismo™ 7 (PS4™ & PS5™)',
        image: 'images/gt-standard__edition.jpg',
        description: 'Descobre o Verdadeiro Simulador de Condução completo numa edição que celebra os 25 anos da série',
        publisher: 'Polyphony Digital Inc.',
        rating: 4.3,
        numRatings: 23559,
        date: '4/3/2022',
        newPrice: '59.500 AOA',
        oldPrice: '70.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Gran Turismo™ 7 - Edição Digital Deluxe',
        image: 'images/gt-deluxure__edition.jpg',
        description: 'Descobre o Verdadeiro Simulador de Condução completo numa edição que celebra os 25 anos da série',
        publisher: 'Polyphony Digital Inc.',
        rating: 4.7,
        numRatings: 25659,
        date: '4/3/2022',
        newPrice: '80.750 AOA',
        oldPrice: '75.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_aEUbJXb9afTC5nq6oW',
        title: 'Marvel’s Spider-Man 2',
        image: 'images/spider-man2-standard__edition.jpg',
        description: 'Os Spider-Man Peter Parker e Miles Morales enfrentam a derradeira prova de força dentro e fora da máscara',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.8,
        numRatings: 159295,
        date: '20/10/2023',
        newPrice: '35.999 AOA',
        oldPrice: '59.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'yes',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_00g9BPdhiaziaHK5kT',
        title: 'Marvel’s Spider-Man 2 - Edição Digital Deluxe',
        image: 'images/spider-man2-deluxure__edition.jpg',
        description: 'Os Spider-Man Peter Parker e Miles Morales enfrentam a derradeira prova de força dentro e fora da máscara',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 5,
        numRatings: 653289,
        date: '20/10/2023',
        newPrice: '59.599 AOA',
        oldPrice: '89.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'NBA 2K25 Standard Edition',
        image: 'images/nba-standard__edition.jpg',
        description: 'Inspira a próxima geração de estrelas da NBA com a NBA 2K25 Standard Edition',
        publisher: '2K',
        rating: 3.7,
        numRatings: 8789,
        date: '28/10/2024',
        newPrice: '35.000 AOA',
        oldPrice: '70.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'yes',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'NBA 2K25 Tournament Edition',
        image: 'images/nba-tounament__edition.jpg',
        description: 'Inspira a próxima geração de estrelas da NBA com a NBA 2K25 Tournament Edition',
        publisher: '2K',
        rating: 3.1,
        numRatings: 9789,
        date: '28/10/2024',
        newPrice: '59.500 AOA',
        oldPrice: '70.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'NBA 2K25 All-Star Edition',
        image: 'images/nba-all-star__edition.jpg',
        description: 'Inspira a próxima geração de estrelas da NBA com a NBA 2K25 Tournament Edition',
        publisher: '2K',
        rating: 4.1,
        numRatings: 3515,
        date: '28/10/2024',
        newPrice: '84.999 AOA',
        oldPrice: '99.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'NBA 2K25 x WWE 2K24 Bundle',
        image: 'images/nba-x-wwe-2k25-bundle.jpg',
        description: 'Inspira a próxima geração de estrelas da NBA com a NBA 2K25 Tournament Edition',
        publisher: '2K',
        rating: 3.4,
        numRatings: 6516,
        date: '28/10/2024',
        newPrice: '84.999 AOA',
        oldPrice: '99.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'NBA 2K25 x TopSpin 2K25',
        image: 'images/nba-2k25-x-topSpin-2k25.jpg',
        description: 'Inspira a próxima geração de estrelas da NBA com a NBA 2K25 Tournament Edition',
        publisher: '2K',
        rating: 4.4,
        numRatings: 5621,
        date: '28/10/2024',
        newPrice: '35.000 AOA',
        oldPrice: '70.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'NBA 2K25 Bundle',
        image: 'images/2K-bundle__edition.jpg',
        description: 'Inspira a próxima geração de estrelas da NBA com a NBA 2K25 Tournament Edition',
        publisher: '2K',
        rating: 4.3,
        numRatings: 6412,
        date: '28/10/2024',
        newPrice: '99.000 AOA',
        oldPrice: '130.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_eVag0d912gXG8zC6pK',
        title: 'Red Dead Redemption 2',
        image: 'images/red-dead__bg-small.jpeg',
        description: 'Vencedor de mais de 175 prémios de Jogo do Ano e galardoado com mais de 250 pontuações perfeitas',
        publisher: 'Rockstar Games',
        rating: 5,
        numRatings: 446000,
        date: '26/10/2018',
        newPrice: '19.999 AOA',
        oldPrice: '59.999 AOA',
        type: 'paid',
        bestSeller: 'yes',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_9AQ3drgtudLu2beeWh',
        title: 'Red Dead Redemption 2 Online',
        image: 'images/red-dead-online__edition.jpg',
        description: 'Inclui Red Dead Redemption 2: Story Mode e Red Dead Online',
        publisher: 'Rockstar Games',
        rating: 4.7,
        numRatings: 235322,
        date: '26/10/2018',
        newPrice: '9.999 AOA',
        oldPrice: '19.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Fortnite',
        image: 'images/fortnite-standard__edition.jpg',
        description: 'Jogue Fortnite do seu jeito',
        publisher: 'Epic Games',
        rating: 4.1,
        numRatings: 446000,
        date: '21/7/2017',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'eFootball™',
        image: 'images/efootball-standard__edition.jpg',
        description: 'É uma era totalmente nova do futebol digital: "PES" agora evoluiu para "eFootball™"!',
        publisher: 'Konami',
        rating: 4.3,
        numRatings: 373146,
        date: '12/8/2024',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'eFootball™ Edição Leo Messi',
        image: 'images/efootball-messi__edition.jpg',
        description: 'É uma era totalmente nova do futebol digital: "PES" agora evoluiu para "eFootball™"!',
        publisher: 'Konami',
        rating: 4.5,
        numRatings: 526541,
        date: '12/8/2024',
        newPrice: '11.000 AOA',
        oldPrice: '15.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'eFootball™ Edição Neymar Jr.',
        image: 'images/efootball-neymar__edition.jpg',
        description: 'É uma era totalmente nova do futebol digital: "PES" agora evoluiu para "eFootball™"!',
        publisher: 'Konami',
        rating: 4.4,
        numRatings: 65841,
        date: '12/8/2024',
        newPrice: '11.000 AOA',
        oldPrice: '15.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Grand Theft Auto V',
        image: 'images/gta-v__edition.jpg',
        description: 'Grand Theft Auto V: Story Mode e Grand Theft Auto Online',
        publisher: 'Rockstar Games',
        rating: 5,
        numRatings: 749832,
        date: '18/11/2014',
        newPrice: '19.999 AOA',
        oldPrice: '39.999 AOA',
        type: 'paid',
        bestSeller: 'yes',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Bundle Grand Theft Auto V: Edição Premium & Pacote Tubarão-Branco',
        image: 'images/gta-v-great-white__edition.jpg',
        description: 'Grand Theft Auto V: Story Mode e Grand Theft Auto Online',
        publisher: 'Rockstar Games',
        rating: 4.7,
        numRatings: 326541,
        date: '18/11/2014',
        newPrice: '32.000 AOA',
        oldPrice: '55.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Grand Theft Auto V: Premium Edition',
        image: 'images/gta-v-premium__edition.jpg',
        description: 'Grand Theft Auto V: Story Mode e Grand Theft Auto Online',
        publisher: 'Rockstar Games',
        rating: 4.3,
        numRatings: 236541,
        date: '18/11/2014',
        newPrice: '14.000 AOA',
        oldPrice: '34.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Roblox',
        image: 'images/roblox__bg-small.jpg',
        description: 'Roblox é o universo virtual definitivo que permite que você jogue, crie e seja tudo que puder imaginar',
        publisher: 'ROBLOX Corporation',
        rating: 4.1,
        numRatings: 527219,
        date: '1/9/2006',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Minecraft',
        image: 'images/minecraft__bg-small.jpg',
        description: 'Construa tudo o que você puder imaginar no seu próprio mundo infinito, exclusivo em cada jogo',
        publisher: 'Mojang AB',
        rating: 4.3,
        numRatings: 1669798,
        date: '18/11/2011',
        newPrice: '16.000 AOA',
        oldPrice: '30.000 AOA',
        type: 'paid',
        bestSeller: 'yes',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'TEKKEN 8',
        image: 'images/tekken8-standard__edition.jpg',
        description: 'Prepara-te para o próximo capítulo da lendária série de jogos de luta, o TEKKEN 8',
        publisher: 'BANDAI NAMCO ENTERTAINMENT EUROPE',
        rating: 4.5,
        numRatings: 13000,
        date: '26/1/2024',
        newPrice: '36.925 AOA',
        oldPrice: '76.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'TEKKEN 8 - Edição Deluxe',
        image: 'images/tekken8-deluxure__edition.jpg',
        description: 'Prepara-te para o próximo capítulo da lendária série de jogos de luta, o TEKKEN 8',
        publisher: 'BANDAI NAMCO ENTERTAINMENT EUROPE',
        rating: 4.3,
        numRatings: 11200,
        date: '26/1/2024',
        newPrice: '45.000 AOA',
        oldPrice: '80.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'The Last of Us™ Parte II Remastered',
        image: 'images/the-last-of-us-part2-remastered-standard__edition.jpg',
        description: 'O jogo completo The Last of Us™ Parte II Remastered para a consola PS5®',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.4,
        numRatings: 13000,
        date: '19/1/2024',
        newPrice: '25.999 AOA',
        oldPrice: '49.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'The Last of Us™ Parte II - Deluxe Edition',
        image: 'images/the-last-of-us-part1__edition.jpg',
        description: 'O jogo completo The Last of Us™ Parte II Edição Deluxe para PS5®',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.8,
        numRatings: 16000,
        date: '20/7/2020',
        newPrice: '19.999 AOA',
        oldPrice: '30.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'The Last of Us™ Parte II',
        image: 'images/the-last-of-us-part2__edition.jpg',
        description: 'O jogo completo The Last of Us™ Parte II PS4® & PS5®',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.8,
        numRatings: 16000,
        date: '20/7/2020',
        newPrice: '25.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'yes',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Dragon Age™: The Veilguard',
        image: 'images/dragon-age-standard__edition.jpg',
        description: 'Entra no mundo de Thedas, uma terra fascinante de natureza selvagem agreste',
        publisher: 'EA Swiss Sarl',
        rating: 4.1,
        numRatings: 9772,
        date: '31/10/2024',
        newPrice: '25.999 AOA',
        oldPrice: '49.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'Dragon Age™: The Veilguard - Edição Deluxe',
        image: 'images/dragon-age-deluxe__edition.jpg',
        description: 'Entra no mundo de Thedas, uma terra fascinante de natureza selvagem agreste',
        publisher: 'EA Swiss Sarl',
        rating: 4.2,
        numRatings: 3652,
        date: '31/10/2024',
        newPrice: '25.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'DRAGON BALL: Sparking! ZERO',
        image: 'images/dragon-ball-standard__edition.jpg',
        description: 'Torna-te um Super Guerreiro e vive as batalhas destrutivas e sem limites que celebrizaram o Dragon Ball!',
        publisher: 'BANDAI NAMCO ENTERTAINMENT EUROPE',
        rating: 4.6,
        numRatings: 38532,
        date: '10/10/2024',
        newPrice: '25.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '#',
        title: 'DRAGON BALL: Sparking! ZERO - Edição Deluxe',
        image: 'images/dragon-ball-deluxe__edition.jpg',
        description: 'Torna-te um Super Guerreiro e vive as batalhas destrutivas e sem limites que celebrizaram o Dragon Ball!',
        publisher: 'BANDAI NAMCO ENTERTAINMENT EUROPE',
        rating: 4.4,
        numRatings: 32654,
        date: '10/10/2024',
        newPrice: '22.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_4gw8xLfpqazi17aeVK',
        title: 'Horizon Zero Dawn™ Remastered',
        image: 'images/horizon-zero-dawn-remastered__edition.jpg',
        description: 'A Terra já não é nossa. Mergulha no aclamado Horizon Zero Dawn™ com impressionantes visuais renovados e funcionalidades melhoradas',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.7,
        numRatings: 189483,
        date: '31/10/2024',
        newPrice: '22.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_4gweW96SUbDm5nq28Z',
        title: 'Horizon Zero Dawn™ - Edição Completa',
        image: 'images/horizon-zero-dawn-complete__edition.jpg',
        description: 'A Terra já não é nossa. Mergulha no aclamado Horizon Zero Dawn™ com impressionantes visuais renovados e funcionalidades melhoradas',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.3,
        numRatings: 632541,
        date: '31/10/2023',
        newPrice: '15.999 AOA',
        oldPrice: '35.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_dR6aFTdhi5eY2bebJA',
        title: 'Horizon Forbidden West™ Edição Completa',
        image: 'images/horizon-forbidden-west-complete__edition.jpg',
        description: 'A Terra já não é nossa. Mergulha no aclamado Horizon Zero Dawn™ com impressionantes visuais renovados e funcionalidades melhoradas',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.5,
        numRatings: 3625,
        date: '31/10/2023',
        newPrice: '19.999 AOA',
        oldPrice: '45.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_6oE15jb9a22MdTW9Bt',
        title: 'LEGO® Horizon Adventures™',
        image: 'images/horizon-adventures__editions.jpg',
        description: 'A Terra já não é nossa. Mergulha no aclamado Horizon Zero Dawn™ com impressionantes visuais renovados e funcionalidades melhoradas',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.6,
        numRatings: 3625,
        date: '31/10/2024',
        newPrice: '19.999 AOA',
        oldPrice: '45.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_6oEdS53GI22MeY0cNG',
        title: 'Sonic X Shadow Generations PS4 & PS5',
        image: 'images/sonic-x-shadow-standard__edition.jpg',
        description: 'Shadow the Hedgehog voltou com o Sonic clássico e moderno no SONIC X SHADOW GENERATIONS',
        publisher: 'SEGA of America, Inc.',
        rating: 4.8,
        numRatings: 3685,
        date: '25/10/2024',
        newPrice: '16.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_9AQdS55OQ7n63fi14Z',
        title: 'Sonic X Shadow Generations - Digital Deluxe Edition',
        image: 'images/sonic-x-shadow-deluxe__edition.jpg',
        description: 'Shadow the Hedgehog voltou com o Sonic clássico e moderno no SONIC X SHADOW GENERATIONS',
        publisher: 'SEGA of America, Inc.',
        rating: 4.4,
        numRatings: 63254,
        date: '25/10/2024',
        newPrice: '29.999 AOA',
        oldPrice: '59.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_3cs8xLelm6j28zC8xs',
        title: 'Metal Gear Solid V: The Phantom Pain',
        image: 'images/metal-gear__bg-small.jpg',
        description: 'Nove anos após MGSV: Ground Zeroes e a queda de Mother Base, Snake (Big Boss) acorda de um coma de quase dez anos',
        publisher: 'Konami',
        rating: 4.6,
        numRatings: 91035,
        date: '1/9/2024',
        newPrice: '17.999 AOA',
        oldPrice: '29.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_00g6pD0uw22M036dRN',
        title: `Dragon's Dogma 2`,
        image: 'images/dragons-dogma-standard__edition.jpg',
        description: 'Parte numa grande aventura, Arisen!',
        publisher: 'CE EUROPE LIMITED',
        rating: 4,
        numRatings: 31214,
        date: '22/3/2024',
        newPrice: '17.480 AOA',
        oldPrice: '30.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_bIYg0dgtu0YI8zC5li',
        title: `Dragon's Dogma 2 - Deluxe Edition`,
        image: 'images/dragons-dogma-deluxe__edition.jpg',
        description: 'Parte numa grande aventura, Arisen!',
        publisher: 'CE EUROPE LIMITED',
        rating: 4.4,
        numRatings: 3325,
        date: '22/3/2024',
        newPrice: '28.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_eVa3dra565eYaHK297',
        title: `Rise of the Ronin™`,
        image: 'images/rise-of-the-ronnin-standard__edition.jpg',
        description: 'Entra no Japão do século XIX com todos os recursos da PlayStation®5',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.2,
        numRatings: 18000,
        date: '22/3/2024',
        newPrice: '17.480 AOA',
        oldPrice: '30.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_fZe4hv4KM4aU3fi154',
        title: `Rise of the Ronin™ - Deluxe Edition`,
        image: 'images/rise-of-the-ronnin-deluxe__edition.jpg',
        description: 'Entra no Japão do século XIX com todos os recursos da PlayStation®5',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.6,
        numRatings: 14732,
        date: '22/3/2024',
        newPrice: '28.000 AOA',
        oldPrice: '40.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_fZeeW9gtuazibLO3dd',
        title: `Granblue Fantasy: Relink Standard Edition`,
        image: 'images/granblue-fantasy-standard__edition.jpg',
        description: 'Conteúdo da Edição Standard Granblue Fantasy: Relink',
        publisher: 'CYGAMES, INC.',
        rating: 4.6,
        numRatings: 14732,
        date: '29/1/2024',
        newPrice: '19.500 AOA',
        oldPrice: '40.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_fZeeW9gtuazibLO3dd',
        title: `Granblue Fantasy: Relink Special Edition`,
        image: 'images/granblue-fantasy-special__edition.jpg',
        description: 'Conteúdo da Edição Especial Granblue Fantasy: Relink',
        publisher: 'CYGAMES, INC.',
        rating: 4.5,
        numRatings: 16023,
        date: '29/1/2024',
        newPrice: '23.000 AOA',
        oldPrice: '50.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_bIY8xLb9a36Q6rudRT',
        title: `FINAL FANTASY XVI`,
        image: 'images/final-fantasy-standard__edition.jpg',
        description: 'Um universo de fantasia sombrio onde o destino do mundo é decidido pelos poderosos Eikons',
        publisher: 'Square Enix LTD',
        rating: 4.5,
        numRatings: 31000,
        date: '22/6/2023',
        newPrice: '19.500 AOA',
        oldPrice: '40.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_9AQ6pDdhi36QdTW6ps',
        title: `FINAL FANTASY XVI - COMPLETE EDITION`,
        image: 'images/final-fantasy-complete__edition.jpg',
        description: 'Um universo de fantasia sombrio onde o destino do mundo é decidido pelos poderosos Eikons',
        publisher: 'Square Enix LTD',
        rating: 4.6,
        numRatings: 36520,
        date: '22/9/2023',
        newPrice: '23.000 AOA',
        oldPrice: '50.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_9AQ6pDdhi36QdTW6ps',
        title: `FINAL FANTASY VII REMAKE INTERGRADE`,
        image: 'images/final-fantasy-vii-standard__edition.jpg',
        description: 'Um universo de fantasia sombrio onde o destino do mundo é decidido pelos poderosos Eikons',
        publisher: 'Square Enix LTD',
        rating: 4.4,
        numRatings: 2562,
        date: '22/10/2023',
        newPrice: '23.000 AOA',
        oldPrice: '50.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_bIYaFTa566j20363dk',
        title: `Resident Evil Remake Trilogy`,
        image: 'images/resident-evil-standard__edition.jpg',
        description: 'Este pacote fantástico inclui remakes de três jogos Resident Evil e conteúdo extra',
        publisher: 'CE EUROPE LIMITED',
        rating: 4.7,
        numRatings: 80000,
        date: '11/10/2024',
        newPrice: '18.000 AOA',
        oldPrice: '30.000 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_aEU7tHdhi5eY6ru4hn',
        title: `Resident Evil 4 - Gold Edition`,
        image: 'images/resident-evil-gold__edition.jpg',
        description: 'Este pacote fantástico inclui apenas o Resident Evil 4 - Gold Edition',
        publisher: 'CE EUROPE LIMITED',
        rating: 4.5,
        numRatings: 63254,
        date: '11/10/2023',
        newPrice: '25.500 AOA',
        oldPrice: '45.500 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '',
        title: `VILLAGE - Resident Evil`,
        image: 'images/resident-evil-village__edition.jpg',
        description: 'Este pacote fantástico inclui apenas o VILLAGE - Resident Evil',
        publisher: 'CE EUROPE LIMITED',
        rating: 4.6,
        numRatings: 3562,
        date: '11/10/2023',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: 'https://buy.stripe.com/test_7sIaFT91236Q9DG4hp',
        title: `Ratchet & Clank™`,
        image: 'images/ratchet-&-clank__bg-small.jpeg',
        description: 'Junta-te ao Lombax preferido de todos nós e ao seu ajudante robótico num jogo totalmente novo',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.5,
        numRatings: 108202,
        date: '20/4/2016',
        newPrice: '12.999 AOA',
        oldPrice: '19.999 AOA',
        type: 'paid',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '',
        title: `Madden NFL 21 PS4™ & PS5™`,
        image: 'images/madden-nfl__bg-small.jpeg',
        description: 'Decide o jogo e apodera-te do teu próprio legado',
        publisher: 'EA Swiss Sarl',
        rating: 3.3,
        numRatings: 10000,
        date: '20/4/2016',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '',
        title: `Cyberpunk 2077`,
        image: 'images/cyber-punk__bg-small.jpg',
        description: 'Joga como um mercenário fora da lei e torna-te num mercenário urbano cyberpunk',
        publisher: 'CD PROJEKT',
        rating: 4.4,
        numRatings: 124000,
        date: '10/12/2020',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '',
        title: `Demonstração do Destiny`,
        image: 'images/demo-destiny__bg-small.jpeg',
        description: 'Uma combinação de modos cooperativos com uma modificação das personagens',
        publisher: 'CD PROJEKT',
        rating: 4.5,
        numRatings: 274000,
        date: '3/12/2014',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
    {
        id: crypto.randomUUID(),
        link: '',
        title: `DEATH STRANDING DIRECTOR’S CUT`,
        image: 'images/death__bg-small copy.jpg',
        description: 'Do lendário criador de jogos Hideo Kojima chega uma experiência que desafia qualquer definição',
        publisher: 'Sony Interactive Entertainment Europe',
        rating: 4.5,
        numRatings: 61000,
        date: '24/9/2021',
        newPrice: 'Grátis',
        type: 'free',
        bestSeller: 'no',
        initialSearch: 'none',
    },
]

export default gameData