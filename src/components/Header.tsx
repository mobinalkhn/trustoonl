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
          <div className="flex-shrink-0 group">
            <img
              src="/api/placeholder/120/40"
              alt="Trustoo"
              className="h-8 w-auto filter brightness-0 saturate-100 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
              style={{ filter: 'brightness(0) saturate(100%) drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))' }}
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
              style={{ boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
            >
              <span className="relative z-10">Bedrijf aanmelden</span>
              <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a
              href="#"
              className="text-blue-600 glass-strong px-6 py-2.5 rounded-xl hover-glass transition-all duration-300 font-medium text-sm shadow-glass hover:shadow-float transform hover:scale-105 hover-tilt border border-blue-200/30"
            >
              Login
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="glass-card p-2 rounded-xl shadow-glass hover:shadow-float transform hover:scale-105 transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-strong shadow-glass border-t border-white/20 rounded-b-2xl overflow-hidden">
            <div className="px-4 py-4 space-y-3">
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