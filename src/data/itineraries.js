// Données des itinéraires touristiques

const itineraries = [
  {
    id: 'gorges-oasis',
    title: 'Des Gorges à l\'Oasis',
    duration: '1 jour',
    difficulty: 'Facile',
    description: 'Cet itinéraire d\'une journée vous permet de découvrir les deux sites naturels les plus impressionnants de la région : les majestueuses Gorges du Todgha et la luxuriante Oasis de Tinghir.',
    steps: [
      {
        time: '9h00',
        activity: 'Départ de Tinghir en direction des Gorges du Todgha',
        description: 'Prenez un grand taxi ou partez en voiture tôt le matin pour profiter de la fraîcheur et éviter la foule.'
      },
      {
        time: '9h30 - 12h00',
        activity: 'Exploration des Gorges du Todgha',
        description: 'Promenez-vous dans les impressionnantes gorges, admirez les falaises de 300m de haut et observez les grimpeurs venus du monde entier. Possibilité de prendre un café dans l\'un des petits cafés au cœur des gorges.'
      },
      {
        time: '12h30 - 14h00',
        activity: 'Déjeuner dans un restaurant local',
        description: 'Savourez un tajine traditionnel ou une salade berbère dans l\'un des restaurants surplombant la rivière.'
      },
      {
        time: '14h30 - 17h00',
        activity: 'Balade dans l\'Oasis de Tinghir',
        description: 'Retour vers Tinghir pour explorer la palmeraie. Promenez-vous entre les palmiers dattiers, les arbres fruitiers et les cultures maraîchères. Observez le système d\'irrigation traditionnel et la vie quotidienne des agriculteurs locaux.'
      },
      {
        time: '17h30',
        activity: 'Coucher de soleil depuis un point de vue sur l\'oasis',
        description: 'Terminez la journée en admirant le coucher de soleil qui teinte de rouge et d\'or les palmeraies et les montagnes environnantes.'
      }
    ],
    tips: [
      'Portez des chaussures confortables et apportez suffisamment d\'eau',
      'Un chapeau et de la crème solaire sont indispensables, même en hiver',
      'Pour la balade dans l\'oasis, envisagez de prendre un guide local qui pourra vous expliquer les techniques agricoles traditionnelles',
      'Les meilleurs moments pour les photos sont tôt le matin et en fin d\'après-midi'
    ],
    imageUrl: '/images/gorge de tinghir.jpeg'
  },
  
   {
  id: 'gorges-dades',
  title: 'La Route a gorges du Dadès',
  duration: '1 jour',
  difficulty: 'Modérée',
  description: 'Cet itinéraire vous emmène à la découverte des plus belles kasbahs et ksour (villages fortifiés) de la région, témoins de l\'architecture traditionnelle en pisé du sud marocain.',
  steps: [
    {
      time: 'Jour 1 - Matin',
      activity: 'Visite de la Kasbah de Tinghir',
      description: 'Commencez par explorer l\'ancienne kasbah de Tinghir, perchée sur une colline surplombant l\'oasis. Admirez l\'architecture en pisé et les ruelles étroites de cet ancien village fortifié.'
    },
    {
      time: 'Jour 1 - Après-midi',
      activity: 'Exploration des Gorges du Dadès',
      description: 'Découvrez les impressionnantes formations rocheuses des Gorges du Dadès, avec leurs falaises rougeâtres spectaculaires et leurs kasbahs perchées qui jalonnent la vallée, surnommée "la vallée des mille kasbahs".'
    },
    {
      time: 'Jour 1 - Soir',
      activity: 'Nuit à Boumalne Dadès',
      description: 'Installez-vous dans un hébergement local, idéalement une ancienne kasbah reconvertie en maison d\'hôtes avec vue sur les gorges.'
    }
    
  ],
  tips: [
    'Louez une voiture pour plus de flexibilité, ou rejoignez un circuit organisé',
    'Prévoyez des vêtements adaptés aux variations de température entre le jour et la nuit',
    'Réservez vos hébergements à l\'avance, surtout en haute saison',
    'N\'hésitez pas à négocier pour l\'artisanat local, mais toujours avec respect',
    'Les meilleures lumières pour photographier les kasbahs sont au lever et au coucher du soleil'
  ],
  imageUrl: '/images/dades.jpeg'
},
  {
    id: 'randonnee-montagne',
    title: 'Randonnée dans le Haut Atlas',
    duration: '1-5 jours',
    difficulty: 'Difficile',
    description: 'Pour les amateurs de trekking, cet itinéraire propose une immersion dans les paysages montagneux du Haut Atlas, à la rencontre des communautés berbères et de leurs traditions.',
    steps: [
      {
        time: 'Préparation',
        activity: 'Organisation à Tinghir',
        description: 'Recrutez un guide local expérimenté et préparez votre équipement. Plusieurs agences à Tinghir proposent des circuits de randonnée adaptés à tous les niveaux.'
      },
      {
        time: 'Jour 1',
        activity: 'Départ pour Aït Hani',
        description: 'Transfert vers ce village berbère situé à 1500m d\'altitude, point de départ de nombreux trekkings. Première randonnée d\'acclimatation dans les environs.'
      },
      {
        time: 'Jour 2',
        activity: 'Randonnée vers Ameskar',
        description: 'Marche à travers des paysages lunaires et des gorges étroites jusqu\'au village d\'Ameskar. Rencontre avec les habitants et découverte de leur mode de vie traditionnel.'
      },
      {
        time: 'Jour 3',
        activity: 'Ascension vers le plateau d\'Iknioul',
        description: 'Montée progressive vers ce haut plateau à 2800m d\'altitude, offrant des panoramas spectaculaires sur les sommets environnants. Nuit en bivouac ou chez l\'habitant.'
      },
      {
        time: 'Jour 4',
        activity: 'Traversée du plateau',
        description: 'Journée de marche à travers les pâturages d\'altitude, à la rencontre des bergers nomades et de leurs troupeaux. Observation possible de la faune locale (aigles, renards, chacals).'
      },
      {
        time: 'Jour 5',
        activity: 'Descente vers Tinghir',
        description: 'Retour progressif vers la vallée en passant par des villages isolés et des cultures en terrasses. Arrivée à Tinghir en fin de journée.'
      }
    ],
    tips: [
      'Ce trek nécessite une bonne condition physique et une préparation adéquate',
      'Un guide local est indispensable pour la sécurité et les contacts avec les populations',
      'Les nuits en altitude peuvent être très froides, même en été',
      'Respectez les coutumes locales et demandez toujours la permission avant de photographier les personnes',
      'L\'itinéraire peut être raccourci ou allongé selon votre niveau et vos envies'
    ],
    imageUrl: '/images/montagne.jpeg'
  }
];

export default itineraries;