// Données des lieux touristiques
const places = [
  {
    id: 'gorges-todgha',
    name: 'Gorges du Todgha',
    shortDescription: 'Impressionnantes gorges rocheuses avec des falaises atteignant 300 mètres de hauteur.',
    fullDescription: 'Les Gorges du Todgha sont un ensemble de gorges spectaculaires situées dans les montagnes du Haut Atlas oriental, près de la ville de Tinghir. Ces canyons impressionnants ont été sculptés au fil des millénaires par la rivière Todgha, créant des falaises vertigineuses qui atteignent jusqu\'à 300 mètres de hauteur. Les parois rocheuses, aux teintes ocre et rouge, offrent un contraste saisissant avec le bleu du ciel marocain. L\'étroitesse de certains passages, où les falaises ne sont séparées que de quelques mètres, crée une atmosphère unique et impressionnante. Les Gorges du Todgha sont aujourd\'hui une destination prisée pour les amateurs d\'escalade du monde entier, avec plus de 150 voies équipées. Même pour les non-grimpeurs, une simple promenade le long de la rivière offre une expérience inoubliable, entre fraîcheur de l\'eau et majesté des formations rocheuses.',
    imageUrl: '/images/Gorges du Todghaa.jpeg',
    gallery: [
      '/images/Gorge de Tinghir.jpeg',
      '/images/todra gorges, morocco.jpeg',
      '/images/Gorge1.jpeg',
    ],
    practicalInfo: {
      location: 'À 15 km au nord de Tinghir',
      accessInfo: 'Accessible en voiture, taxi ou dans le cadre d\'une excursion organisée',
      openingHours: 'Accessible toute l\'année, de préférence tôt le matin pour éviter la foule',
      entryFee: 'Gratuit'
    },
    tips: [
      'Portez des chaussures confortables pour marcher sur les terrains rocheux',
      'Apportez suffisamment d\'eau, surtout en été',
      'Visitez tôt le matin pour profiter de la lumière idéale pour les photos',
      'Certaines sections peuvent être inondées après de fortes pluies'
    ]
  },
  {
    id: 'oasis-tinghir',
    name: 'Oasis de Tinghir',
    shortDescription: 'Magnifique palmeraie s\'étendant sur plus de 30 km le long de la vallée du Todgha.',
    fullDescription: 'L\'oasis de Tinghir est l\'une des plus belles et des plus grandes palmeraies du Maroc, s\'étendant sur plus de 30 kilomètres le long de la vallée du Todgha. Cette oasis luxuriante forme un ruban de verdure contrastant magnifiquement avec les paysages désertiques environnants et les montagnes arides de l\'Atlas. Sous l\'ombre des milliers de palmiers dattiers, on trouve un système agricole traditionnel à plusieurs niveaux : les palmiers protègent du soleil les arbres fruitiers (oliviers, amandiers, figuiers, grenadiers) qui à leur tour abritent les cultures maraîchères et céréalières. Ce système ingénieux, développé au fil des siècles, permet une utilisation optimale de l\'eau et de l\'espace. En vous promenant dans l\'oasis, vous découvrirez également le système d\'irrigation traditionnel (khettaras) et pourrez observer les agriculteurs locaux travaillant avec des méthodes ancestrales. Les petits villages en pisé qui bordent l\'oasis témoignent d\'un mode de vie traditionnel qui a su résister au temps.',
    imageUrl: '/images/Oasis de Tinghir.jpeg',
    gallery: [
      '/images/Oasis de Tinghir.jpeg',
      '/images/Oasis de Tinghir2.jpeg',
      '/images/Oasis de Tinghir3.jpg',
      '/images/Oasis de Tinghir1.jpg',
    ],
    practicalInfo: {
      location: 'Entourant la ville de Tinghir',
      accessInfo: 'Accessible à pied depuis le centre-ville, ou en louant un guide local',
      openingHours: 'Accessible toute l\'année, idéal au printemps et en automne',
      entryFee: 'Gratuit, mais un guide local est recommandé (environ 100-200 dirhams)'
    },
    tips: [
      'Respectez les cultures et les propriétés privées lors de votre visite',
      'Un guide local peut vous faire découvrir les aspects culturels et agricoles de l\'oasis',
      'Prévoyez un chapeau et de l\'eau, même si les palmiers offrent de l\'ombre',
      'Le matin ou en fin d\'après-midi offre les meilleures conditions pour la photographie'
    ]
  },
 {
  id: 'gorges-Dades',
  name: 'Gorges du Dadès',
  shortDescription: 'Spectaculaires gorges rocheuses surnommées "la Route des mille kasbahs" avec des formations géologiques impressionnantes.',
  fullDescription: 'Les Gorges du Dadès, situées dans la région de Tinghir, offrent un paysage spectaculaire de formations rocheuses sculptées par l\'érosion au fil des millénaires. Cette route sinueuse traverse des canyons aux parois rougeâtres et ocres, ponctuée de villages berbères traditionnels et de kasbahs anciennes. Le parcours, particulièrement impressionnant entre Boumalne du Dadès et Msemrir, révèle des panoramas à couper le souffle avec des rochers aux formes étranges surnommés "les doigts de singe". La vallée du Dadès est également réputée pour ses cultures en terrasses, ses palmeraies et ses amandiers qui fleurissent au printemps, créant un contraste saisissant avec les roches rouges. Cette région est un paradis pour les randonneurs, les photographes et les amateurs de géologie. De nombreux points de vue permettent d\'admirer les méandres de la rivière Dadès et les villages perchés sur les flancs des montagnes.',
  imageUrl: '/images/dades.jpeg',
  gallery: [
    '/images/dades.jpeg',
    '/images/dades1.jpeg',
    '/images/dades3.jpg',
  ],
  practicalInfo: {
    location: 'Entre Boumalne du Dadès et Msemrir, région de Tinghir',
    accessInfo: 'Accessible en voiture (4x4 recommandé pour certaines sections), ou dans le cadre d\'une excursion organisée',
    openingHours: 'Accessible 24h/24, mais visite recommandée en journée',
    entryFee: 'Gratuit (frais éventuels pour parking dans certains villages)'
  },
  tips: [
    'Prenez un véhicule adapté (4x4 ou SUV) pour les routes les plus escarpées',
    'Visitez de préférence au printemps pour voir les amandiers en fleurs',
    'Prévoyez des vêtements chauds car les températures peuvent chuter rapidement',
    'Respectez les populations locales et demandez avant de photographier les habitants',
    'Combinez avec la visite des gorges du Todra toutes proches'
  ]
}
];

export default places;