import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const PopularCities: React.FC = () => {
  const cities = [
    { name: 'Amsterdam', professionals: '12.500+', popular: ['Schilders', 'Loodgieters', 'Elektriciens'] },
    { name: 'Rotterdam', professionals: '8.900+', popular: ['Aannemers', 'Dakdekkers', 'Hoveniers'] },
    { name: 'Den Haag', professionals: '7.200+', popular: ['Schoonmakers', 'Makelaars', 'Boekhouders'] },
    { name: 'Utrecht', professionals: '6.800+', popular: ['Fotografen', 'Cateraars', 'Schilders'] },
    { name: 'Eindhoven', professionals: '5.100+', popular: ['Elektriciens', 'Aannemers', 'Hoveniers'] },
    { name: 'Tilburg', professionals: '3.400+', popular: ['Loodgieters', 'Dakdekkers', 'Schilders'] },
    { name: 'Groningen', professionals: '3.200+', popular: ['Schoonmakers', 'Fotografen', 'Boekhouders'] },
    { name: 'Almere', professionals: '2.800+', popular: ['Makelaars', 'Aannemers', 'Hoveniers'] },
    { name: 'Breda', professionals: '2.600+', popular: ['Schilders', 'Elektriciens', 'Loodgieters'] },
    { name: 'Nijmegen', professionals: '2.400+', popular: ['Dakdekkers', 'Cateraars', 'Fotografen'] },
    { name: 'Enschede', professionals: '2.100+', popular: ['Hoveniers', 'Schoonmakers', 'Aannemers'] },
    { name: 'Haarlem', professionals: '1.900+', popular: ['Makelaars', 'Boekhouders', 'Schilders'] }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Actief in heel Nederland
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Van grote steden tot kleine dorpen - overal vind je de beste lokale dienstverleners.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-200 cursor-pointer">
              <div className="flex items-center mb-3">
                <MapPin size={16} className="text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{city.name}</h3>
              </div>
              
              <p className="text-blue-600 font-medium text-sm mb-3">
                {city.professionals} professionals
              </p>
              
              <div className="space-y-1">
                <p className="text-xs text-gray-500 mb-1">Populair:</p>
                {city.popular.map((service, idx) => (
                  <span key={idx} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Niet jouw stad erbij? Geen probleem!
          </p>
          <button className="text-blue-600 border border-blue-300 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
            Zoek in jouw postcode
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCities;