import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold font-[var(--font-pacifico)] mb-4">Tinghir Guide</h2>
            <p className="text-gray-400 mb-6">
              Découvrez la beauté authentique du Sud marocain avec notre guide interactif de Tinghir.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span className="text-white font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <span className="text-white font-bold">@</span>
              </a>
            </div>
          </div>

          {/* Exploration Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Exploration</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/lieux" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Lieux à visiter
                </Link>
              </li>
              <li>
                <Link to="/itineraires" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Itinéraires
                </Link>
              </li>
              <li>
                <Link to="/carte" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Carte interactive
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Culture & Traditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hebergement" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Hébergement
                </Link>
              </li>
              <li>
                <Link to="/transport" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Transport
                </Link>
              </li>
              <li>
                <Link to="/conseils" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Conseils pratiques
                </Link>
              </li>
              <li>
                <Link to="/meteo" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Météo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <span className="mr-2">📍</span>
                <span>Tinghir, Maroc</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@tinghir-guide.ma" className="hover:text-blue-400 transition-colors">
                  info@tinghir-guide.ma
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-2">📞</span>
                <span>+212 524 XX XX XX</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Tinghir Guide. Tous droits réservés.  par aimrane housni .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;