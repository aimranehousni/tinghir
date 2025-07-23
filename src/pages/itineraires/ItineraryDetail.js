import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import itineraries from '../../data/itineraries';

function ItineraryDetail() {
  const { id } = useParams();
  const itinerary = itineraries.find(i => i.id === id);

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Itinéraire non trouvé</h1>
          <p className="text-lg mb-6">L'itinéraire que vous recherchez n'existe pas.</p>
          <Link to="/itineraires" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors">
            Retour aux itinéraires
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={itinerary.imageUrl} 
          alt={itinerary.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">{itinerary.title}</h1>
            <div className="flex justify-center space-x-4 mb-4">
              <span className="bg-blue-600 bg-opacity-80 text-white px-3 py-1 rounded-full">
                {itinerary.duration}
              </span>
              <span className={`px-3 py-1 rounded-full ${itinerary.difficulty === 'Facile' ? 'bg-green-600 bg-opacity-80 text-white' : itinerary.difficulty === 'Modéré' ? 'bg-yellow-600 bg-opacity-80 text-white' : 'bg-red-600 bg-opacity-80 text-white'}`}>
                {itinerary.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Description</h2>
          <p className="text-gray-700 mb-6">{itinerary.description}</p>

          {/* Étapes de l'itinéraire */}
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Étapes de l'itinéraire</h2>
          <div className="space-y-6">
            {itinerary.steps.map((step, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2">{step.time} - {step.activity}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conseils pratiques */}
        <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Conseils pratiques</h2>
          <ul className="space-y-3">
            {itinerary.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            to="/itineraires" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux itinéraires
          </Link>
          
          {/* Bouton de téléchargement (fictif) */}
          <button 
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors"
            onClick={() => alert('Fonctionnalité de téléchargement à implémenter')}
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger l'itinéraire
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ItineraryDetail;
