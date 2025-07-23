import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import places from '../../data/places';

function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Utilisation des données importées depuis le fichier places.js

  // Trouver le lieu correspondant à l'ID
  const place = places.find(p => p.id === id);

  // Si le lieu n'existe pas, rediriger vers la page des lieux
  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Lieu non trouvé</h1>
          <p className="text-gray-600 mb-6">
            Le lieu que vous recherchez n'existe pas ou a été déplacé.
          </p>
          <button 
            onClick={() => navigate('/lieux')}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Retour à la liste des lieux
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <img 
          src={place.imageUrl} 
          alt={place.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{place.name}</h1>
            <p className="text-xl text-white/90">{place.shortDescription}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Description */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">À propos</h2>
              <div className="prose max-w-none">
                {place.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Galerie</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {place.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${place.name} - image ${index + 1}`} 
                    className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Informations pratiques</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Emplacement</h3>
                <p className="text-gray-600">{place.practicalInfo.location}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Accès</h3>
                <p className="text-gray-600">{place.practicalInfo.accessInfo}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Horaires</h3>
                <p className="text-gray-600">{place.practicalInfo.openingHours}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Tarif</h3>
                <p className="text-gray-600">{place.practicalInfo.entryFee}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Conseils de visite</h2>
              <ul className="space-y-2">
                {place.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/lieux"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Retour à la liste des lieux
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PlaceDetail;
