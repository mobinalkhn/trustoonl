import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-white/90 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/api/placeholder/120/40"
              alt="Trustoo"
              className="h-8 w-auto filter brightness-0 saturate-100"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Voor particulieren
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Voor bedrijven
            </a>
            <a
              href="#"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Bedrijf aanmelden</span>
              <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></div>
            </a>
            <a
              href="#"
              className="text-blue-600 border border-blue-200 bg-white/80 backdrop-blur-sm px-6 py-2.5 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Login
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-2">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Voor particulieren
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Voor bedrijven
              </a>
              <div className="pt-2 space-y-2">
                <a
                  href="#"
                  className="block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bedrijf aanmelden
                </a>
                <a
                  href="#"
                  className="block text-blue-600 border border-blue-300 px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium text-center text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;