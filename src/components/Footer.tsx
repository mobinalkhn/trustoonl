import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/api/placeholder/120/40" alt="Trustoo" className="h-8 mb-4 filter brightness-0 invert" />
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Nederland's grootste platform voor het vinden van betrouwbare lokale dienstverleners. 
              Meer dan 50.000 professionals, 2.9 miljoen reviews.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Voor Particulieren */}
          <div>
            <h3 className="font-semibold mb-4">Voor particulieren</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Hoe werkt het?</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Alle diensten</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Kostenoverzichten</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Klantenservice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Veelgestelde vragen</a></li>
            </ul>
          </div>

          {/* Voor Bedrijven */}
          <div>
            <h3 className="font-semibold mb-4">Voor bedrijven</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Bedrijf aanmelden</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Trustoo Pro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Tarieven</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Marketing tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Success stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Ondersteuning</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>085 - 130 5000</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>info@trustoo.nl</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Trustoo Nederland B.V.</div>
                  <div>Herengracht 124</div>
                  <div>1015 BT Amsterdam</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2 text-sm">Openingstijden</h4>
              <div className="text-gray-400 text-sm">
                <div>Ma-Vr: 08:00 - 18:00</div>
                <div>Za: 09:00 - 17:00</div>
                <div>Zo: Gesloten</div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="py-8 border-t border-gray-800">
          <h3 className="font-semibold mb-4">Populaire diensten</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Schilders</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Loodgieters</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Elektriciens</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Hoveniers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Schoonmakers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Dakdekkers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Aannemers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Makelaars</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Boekhouders</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Fotografen</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cateraars</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Alle diensten</a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Trustoo Nederland B.V. Alle rechten voorbehouden.</p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Algemene voorwaarden</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;