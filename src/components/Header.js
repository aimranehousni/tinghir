import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/lieux', label: 'Lieux' },
    { path: '/itineraires', label: 'Itinéraires' },
    { path: '/carte', label: 'Carte' }
  ];

  return (
    <header className="bg-white/70 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       <Link
  to="/"
  className="inline-block px-4 py-1 rounded-xl shadow-sm bg-white border border-gray-200 hover:shadow-md transition"
>
  <img
    src="/images/logo.png"
    alt="Logo"
    className="h-10 w-auto"
  />
</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative text-sm font-medium px-2 py-1 transition duration-200 ${
                isActive(path)
                  ? 'text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded-full'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-4 pt-2 pb-4 bg-white shadow-inner space-y-2">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 px-3 rounded-lg text-sm font-medium transition ${
                isActive(path)
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
