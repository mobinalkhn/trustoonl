import React from 'react';
import { Search, FileText, Users, ArrowRight } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: '1',
      title: 'Zoek een dienst',
      description: 'Kies uit 87 verschillende diensten en vind bedrijven bij jou in de buurt',
      icon: <Search size={40} />
    },
    {
      number: '2',
      title: 'Ontvang offertes',
      description: 'Beschrijf je project en ontvang gratis offertes van maximaal 4 bedrijven',
      icon: <FileText size={40} />
    },
    {
      number: '3',
      title: 'Maak je keuze',
      description: 'Vergelijk bedrijven op basis van prijs, reviews en kies het beste bedrijf',
      icon: <Users size={40} />
    }
  ];

  const startComparison = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zo werkt het
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In 3 eenvoudige stappen vind je de perfecte dienstverlener.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative text-center">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transform translate-x-6 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              )}
              
              {/* Step Container */}
              <div className="relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* 3D Number Badge */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mx-auto shadow-2xl transform-gpu transition-all duration-500 group-hover:rotateY-12 group-hover:scale-110 shadow-blue-500/25">
                    {step.number}
                  </div>
                  {/* 3D Shadow */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-blue-500 rounded-2xl blur-xl opacity-20 transform translate-y-2 group-hover:translate-y-3 transition-all duration-500"></div>
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-6 text-blue-600 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D CTA Section */}
        <div className="relative text-center perspective-1000">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-white shadow-2xl transform-gpu transition-all duration-500 hover:rotateX-2 hover:scale-105 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 animate-pulse"></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Klaar om te beginnen?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Vind binnen 2 minuten de beste dienstverlener voor jouw project
              </p>
              
              <button
                onClick={startComparison}
                className="group relative bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:-translate-y-1 inline-flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <span className="relative z-10">Start met vergelijken</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
              </button>
            </div>
            
            {/* 3D Shadow */}
            <div className="absolute inset-0 bg-black/10 rounded-3xl transform translate-y-2 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;