import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// CityOverview Component
function CityOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tinghir : Oasis de Culture et d'Histoire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Située au cœur de la vallée du Todgha, Tinghir est une ville berbère authentique qui fascine par sa richesse culturelle et ses paysages à couper le souffle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Histoire et Patrimoine</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Tinghir, dont le nom signifie "montagne" en berbère, est une ancienne cité caravanière qui a prospéré grâce à sa position stratégique sur la route des épices reliant le Sahara au nord du Maroc.
              </p>
              <p>
                La ville est célèbre pour ses kasbahs ancestrales, témoins d'une architecture berbère millénaire, et ses palmeraies qui s'étendent sur plus de 30 kilomètres le long de l'oued Todgha.
              </p>
              <p>
                Le patrimoine culturel de Tinghir se manifeste à travers ses traditions artisanales, notamment le tissage des tapis berbères et la bijouterie traditionnelle en argent.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src='/images/home.jpeg'
              alt="Architecture traditionnelle de Tinghir"
              className="rounded-lg shadow-lg w-full object-cover object-top"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 md:order-1 relative">
            <img 
              src='/images/tinghir.png'
              alt="Géographie de Tinghir"
              className="rounded-lg shadow-lg w-full object-cover object-top"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Géographie et Environnement</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Tinghir se dresse à 1 342 mètres d'altitude, au pied du Haut Atlas, dans une oasis verdoyante contrastant avec l'aridité du désert environnant.
              </p>
              <p>
                La ville bénéficie d'un climat semi-aride avec des étés chauds et des hivers doux, idéal pour la culture des palmiers dattiers et des jardins luxuriants.
              </p>
              <p>
                Les gorges du Todgha, situées à proximité, offrent des formations rocheuses spectaculaires hautes de 300 mètres, attirant des visiteurs du monde entier.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Altitude</h4>
              <p className="text-gray-600">1 342 mètres</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2C8.9 2 8 2.9 8 4c0 .5.2 1 .6 1.4L10 6.8l1.4-1.4c.4-.4.6-.9.6-1.4 0-1.1-.9-2-2-2zm0 12c-2.2 0-4-1.8-4-4 0-.8.2-1.5.7-2.1L10 4.2l3.3 3.7c.5.6.7 1.3.7 2.1 0 2.2-1.8 4-4 4z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Climat</h4>
              <p className="text-gray-600">Semi-aride</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Population</h4>
              <p className="text-gray-600">~50 000 habitants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/background.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-16">
          <div className="w-full max-w-6xl px-6 text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-[var(--font-pacifico)]">
              Tinghir
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez la perle du Sud marocain, entre les gorges du Todgha et les palmeraies luxuriantes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/lieux">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Explorer les lieux
                </button>
              </Link>
              <Link to="/itineraires">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Voir les itinéraires
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* City Overview Section */}
      <CityOverview />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;