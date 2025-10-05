import React from 'react';
import { Star, MessageCircle, Shield, Clock } from 'lucide-react';

const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: "Sarah van der Berg",
      location: "Amsterdam",
      service: "Schilder",
      rating: 5,
      text: "Binnen een uur had ik 3 offertes van lokale schilders. Super handig en volledig gratis!",
      date: "2 dagen geleden"
    },
    {
      name: "Marco Jansen",
      location: "Rotterdam", 
      service: "Loodgieter",
      rating: 5,
      text: "Mijn lekkage was binnen 24 uur opgelost dankzij Trustoo. Eerlijke prijzen en betrouwbare vakmannen.",
      date: "1 week geleden"
    },
    {
      name: "Linda Bakker",
      location: "Utrecht",
      service: "Hovenier",
      rating: 5,
      text: "Geweldige service! De hovenier die ik vond via Trustoo heeft mijn tuin prachtig gemaakt.",
      date: "2 weken geleden"
    },
    {
      name: "Peter de Vries",
      location: "Den Haag",
      service: "Elektricien",
      rating: 5,
      text: "Professionele elektricien gevonden voor het vervangen van mijn groepenkast. Top service!",
      date: "3 weken geleden"
    },
    {
      name: "Emma Visser",
      location: "Eindhoven",
      service: "Schoonmaker",
      rating: 5,
      text: "Betrouwbare schoonmaakservice gevonden. Mijn huis blinkt weer als nieuw!",
      date: "1 maand geleden"
    },
    {
      name: "Tom Hendriks",
      location: "Tilburg",
      service: "Dakdekker",
      rating: 5,
      text: "Daklekkage snel en vakkundig opgelost. Dankzij Trustoo vond ik de juiste specialist.",
      date: "1 maand geleden"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wat klanten zeggen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Duizenden tevreden klanten gingen je voor. Lees hun ervaringen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              {/* Stars */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current drop-shadow-sm" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500 font-medium">{review.date}</span>
              </div>
              
              {/* Review Text */}
              <blockquote className="text-gray-700 mb-6 text-sm leading-relaxed font-medium relative">
                <div className="absolute -top-2 -left-2 text-4xl text-blue-200 opacity-50 font-serif">"</div>
                <p className="relative italic">{review.text}</p>
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                </div>
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                  {review.service}
                </span>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Uitstekend beoordeeld op</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-green-500 fill-current" />
                ))}
              </div>
              <span className="font-semibold">4.8</span>
              <span className="text-gray-500">Trustpilot</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-blue-500 fill-current" />
                ))}
              </div>
              <span className="font-semibold">4.9</span>
              <span className="text-gray-500">Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;