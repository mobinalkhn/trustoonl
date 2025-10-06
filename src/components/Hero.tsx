import React, { useState } from 'react';
import { MapPin, Search, Play } from 'lucide-react';
import AnimatedCharacter from './AnimatedCharacter';
import LocationDetector from './LocationDetector';

const Hero: React.FC = () => {
  const [userLocation, setUserLocation] = useState<string>('Nederland');

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const showHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 md:pt-16" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 30%, #e2e8f0 70%, #f8fafc 100%)' }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-blue-600/15 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-2xl animate-particles"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transform-3d">
        <div className="text-center relative perspective-1000">
          {/* Location Display */}
          <LocationDetector onLocationUpdate={setUserLocation} />
          
          <div className="inline-flex items-center gap-3 glass-strong shadow-glass px-4 md:px-6 py-2 md:py-3 rounded-full text-gray-700 text-xs md:text-sm font-medium mb-6 md:mb-8 transform-gpu hover:scale-105 hover:shadow-float hover-tilt transition-all duration-300 border border-white/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            <MapPin size={14} className="text-blue-600 md:w-4 md:h-4" />
            <span className="font-semibold">{userLocation}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 rounded-full transition-opacity duration-500"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight relative px-4 md:px-0">
            <span className="relative inline-block group">
              Vind de beste{' '}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </span>
            <br className="hidden sm:block" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">
              dienstverleners
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </span>
            <br />
            <span className="text-gray-700">bij jou in de buurt</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            Meer dan 50.000 betrouwbare bedrijven, 2.9 miljoen reviews.
            <span className="text-blue-600 font-medium"> 100% gratis vergelijken.</span>
          </p>

          {/* Animated Character */}
          <div className="mb-8 md:mb-12 relative">
            <div className="glass-card p-4 md:p-6 rounded-3xl shadow-glass hover:shadow-float transition-all duration-500 inline-block hover-tilt">
              <AnimatedCharacter />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 px-4">
            <button
              onClick={scrollToServices}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-medium text-sm md:text-base shadow-glass hover:shadow-float transform-gpu transition-all duration-300 hover:scale-105 hover-tilt flex items-center gap-3 overflow-hidden w-full sm:w-auto glass-card border border-white/20 animate-pulse-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Search size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300 md:w-5 md:h-5" />
              <span className="relative z-10">Zoek een dienstverlener</span>
              <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <button
              onClick={showHowItWorks}
              className="group relative px-6 md:px-8 py-3 md:py-4 text-blue-600 glass-strong rounded-2xl font-medium text-sm md:text-base shadow-glass hover:shadow-float transform-gpu transition-all duration-300 hover:scale-105 hover-tilt hover-glass flex items-center gap-3 overflow-hidden w-full sm:w-auto border border-blue-200/30"
            >
              <Play size={18} className="group-hover:scale-110 transition-transform duration-300 md:w-5 md:h-5" />
              <span>Hoe werkt het?</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-gray-600 text-xs md:text-sm px-4">
            <div className="glass-card px-3 md:px-4 py-2 rounded-full shadow-glass hover:shadow-float transition-all duration-300 hover:scale-105 border border-white/20">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Altijd gratis
              </span>
            </div>
            <div className="glass-card px-3 md:px-4 py-2 rounded-full shadow-glass hover:shadow-float transition-all duration-300 hover:scale-105 border border-white/20">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Geen verplichtingen
              </span>
            </div>
            <div className="glass-card px-3 md:px-4 py-2 rounded-full shadow-glass hover:shadow-float transition-all duration-300 hover:scale-105 border border-white/20">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Binnen 2 minuten
              </span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;