import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Données des points d'intérêt de la carte
const mapPoints = [
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
  }
];

// Catégories de points d'intérêt
const mapCategories = [
  { id: 'all', name: 'Tous les lieux', icon: '🗺️' },
  { id: 'nature', name: 'Nature & Paysages', icon: '🌿' },
  { id: 'culture', name: 'Culture & Heritage', icon: '🏛️' },
  { id: 'shopping', name: 'Shopping & Souks', icon: '🛍️' }
];

function Carte() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showMap, setShowMap] = useState(true);
  
  // Filtrer les points d'intérêt en fonction de la catégorie sélectionnée
  const filteredPoints = selectedCategory === 'all' 
    ? mapPoints 
    : mapPoints.filter(point => point.category === selectedCategory);

  // Fonction pour obtenir la couleur de la catégorie
  const getCategoryColor = (category) => {
    const colors = {
      nature: 'bg-green-500',
      culture: 'bg-purple-500',
      shopping: 'bg-orange-500'
    };
    return colors[category] || 'bg-blue-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Carte de Tinghir</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les merveilles de Tinghir et de ses environs. Des gorges spectaculaires 
            aux kasbahs historiques, explorez tous les trésors de cette région exceptionnelle.
          </p>
        </div>
        
        {/* Section carte et contrôles */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900">Carte Interactive</h2>
              <button
                onClick={() => setShowMap(!showMap)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showMap ? 'Masquer la carte' : 'Afficher la carte'}
              </button>
            </div>
          </div>

          {/* Carte */}
          {showMap && (
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <div className="w-full h-[500px] lg:h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54560.48574819185!2d-5.563301168750001!3d31.516700000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdbd6a2b8e0fc1db%3A0x1b1b1b1b1b1b1b1b!2sTinghir%2C%20Morocco!5e0!3m2!1sen!2sma!4v1640995200000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de Tinghir et ses environs"
                />
              </div>
            </div>
          )}
          
          {/* Informations sur la carte */}
          <div className="p-6 bg-gray-50">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📍 Position</h4>
                <p className="text-gray-600">
                  Latitude: 31.5167°N<br />
                  Longitude: 5.5333°W<br />
                  Altitude: 1,342 m
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🗺️ Navigation</h4>
                <p className="text-gray-600">
                  Utilisez les filtres ci-dessous<br />
                  Cliquez sur les points d'intérêt<br />
                  Zoom disponible sur la carte
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📊 Statistiques</h4>
                <p className="text-gray-600">
                  {mapPoints.length} lieux répertoriés<br />
                  {filteredPoints.length} lieux affichés<br />
                  3 catégories disponibles
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section points d'intérêt */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Points d'intérêt</h2>
            
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-3 mb-6">
              {mapCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                  <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">
                    {category.id === 'all' 
                      ? mapPoints.length 
                      : mapPoints.filter(p => p.category === category.id).length
                    }
                  </span>
                </button>
              ))}
            </div>

            {/* Message si aucun résultat */}
            {filteredPoints.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucun lieu trouvé pour cette catégorie.</p>
              </div>
            )}
            
            {/* Grille des points d'intérêt */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPoints.map(point => (
                <div 
                  key={point.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={point.imageUrl} 
                      alt={point.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format';
                      }}
                    />
                    <div className={`absolute top-3 left-3 w-3 h-3 rounded-full ${getCategoryColor(point.category)}`}></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{point.name}</h3>
                    <p className="text-gray-600 text-sm mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {point.location}
                    </p>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{point.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500 font-mono">
                        {point.coordinates.lat}°, {point.coordinates.lng}°
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Voir sur la carte →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Informations pratiques */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Informations pratiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Transport</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Des taxis collectifs relient Tinghir aux villes voisines</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Location de voitures disponible dans le centre-ville</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Des excursions organisées partent régulièrement vers les gorges</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Hébergement</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Plusieurs hôtels et riads dans le centre de Tinghir</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Auberges et gîtes près des gorges du Todgha</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Camping possible dans des zones désignées</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Carte;