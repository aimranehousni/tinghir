// Points d'intérêt pour la carte de Tinghir
export const mapPoints = [
  {
    id: 1,
    name: "Gorges du Todgha",
    location: "15 km au nord-est de Tinghir",
    description: "Impressionnantes gorges avec des falaises atteignant 300 mètres de hauteur.",
    coordinates: { lat: 31.5906, lng: -5.5686 },
    category: "nature",
    imageUrl: "/images/gorges du Todghaa.jpeg"
  },
  {
    id: 2,
    name: "Palmeraie de Tinghir",
    location: "Centre de Tinghir",
    description: "Oasis luxuriante avec des milliers de palmiers dattiers et des jardins traditionnels.",
    coordinates: { lat: 31.5175, lng: -5.5322 },
    category: "nature",
    imageUrl: "/images/oasis de tinghirr.jpeg"
  },
  {
    id: 3,
    name: "kasbah du Cheikh Bassou",
    location: "Centre historique",
    description: "Ancienne forteresse berbère avec une architecture traditionnelle en pisé.",
    coordinates: { lat: 31.5150, lng: -5.5300 },
    category: "culture",
    imageUrl: "/images/kasbah.jpg"
  },
  {
    id: 4,
    name: "Souk de Tinghir(la rue des femmes)",
    location: "Centre-ville",
    description: "Marché traditionnel où vous pouvez acheter des produits locaux et de l'artisanat.",
    coordinates: { lat: 31.5160, lng: -5.5310 },
    category: "shopping",
    imageUrl: "/images/souk.png"
  },
  {
    id: 5,
    name: "mosquée ikelane",
    location: "Quartier culturel",
    description: "Collection d'objets traditionnels et d'œuvres d'art berbères de la région.",
    coordinates: { lat: 31.5170, lng: -5.5320 },
    category: "culture",
    imageUrl: "/images/mosque.jpg"
  },
  {
    id: 6,
    name: "Vallée du Dadès",
    location: "30 km à l'ouest",
    description: "Vallée spectaculaire connue pour ses formations rocheuses et ses kasbahs.",
    coordinates: { lat: 31.5500, lng: -5.9200 },
    category: "nature",
    imageUrl: '/images/dades.jpeg'
  },
 
  {
    id: 8,
    name: "Haut Atlas",
    location: "Au sud de Tinghir",
    description: "Chaîne de montagnes offrant de magnifiques possibilités de randonnée et des villages berbères traditionnels.",
    coordinates: { lat: 31.3000, lng: -5.6000 },
    category: "nature",
    imageUrl: "/images/montagne.jpeg"
  },
 
  
];

// Catégories pour filtrer les points d'intérêt
export const mapCategories = [
  { id: "all", name: "Tous les points d'intérêt" },
  { id: "nature", name: "Nature et paysages" },
  { id: "culture", name: "Culture et patrimoine" },
  { id: "shopping", name: "Shopping et marchés" },
  { id: "event", name: "Événements" }
];
