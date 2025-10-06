import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Paintbrush, 
  Hammer, 
  Wrench, 
  Key, 
  HardHat,
  Zap,
  Leaf,
  Droplets,
  Camera
} from 'lucide-react';

interface Profession {
  name: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  outfit: {
    top: string;
    bottom: string;
    accessory?: string;
  };
}

const professions: Profession[] = [
  {
    name: 'Boekhouder',
    icon: <Calculator size={24} />,
    color: '#3b82f6',
    image: 'photo-1507003211169-0a1dd7228f2d',
    outfit: {
      top: 'bg-blue-600', // Business shirt
      bottom: 'bg-gray-800', // Dress pants
      accessory: 'glasses' // Glasses
    }
  },
  {
    name: 'Schilder',
    icon: <Paintbrush size={24} />,
    color: '#1d4ed8',
    image: 'photo-1472099645785-5658abf4ff4e',
    outfit: {
      top: 'bg-white', // White work shirt
      bottom: 'bg-blue-600', // Work pants
      accessory: 'paint-stains' // Paint stains
    }
  },
  {
    name: 'Dakdekker',
    icon: <Hammer size={24} />,
    color: '#2563eb',
    image: 'photo-1500648767791-00dcc994a43e',
    outfit: {
      top: 'bg-orange-500', // Safety vest
      bottom: 'bg-blue-800', // Work pants
      accessory: 'hard-hat' // Hard hat
    }
  },
  {
    name: 'Loodgieter',
    icon: <Wrench size={24} />,
    color: '#1e40af',
    image: 'photo-1519085360753-af0119f7cbe7',
    outfit: {
      top: 'bg-red-600', // Work shirt
      bottom: 'bg-blue-900', // Heavy duty pants
      accessory: 'tool-belt' // Tool belt
    }
  },
  {
    name: 'Makelaar',
    icon: <Key size={24} />,
    color: '#3730a3',
    image: 'photo-1560250097-0b93528c311a',
    outfit: {
      top: 'bg-gray-800', // Business suit
      bottom: 'bg-gray-800', // Suit pants
      accessory: 'tie' // Tie
    }
  },
  {
    name: 'Aannemer',
    icon: <HardHat size={24} />,
    color: '#4338ca',
    image: 'photo-1507003211169-0a1dd7228f2d',
    outfit: {
      top: 'bg-yellow-400', // High-vis vest
      bottom: 'bg-blue-800', // Work pants
      accessory: 'hard-hat' // Hard hat
    }
  },
  {
    name: 'Elektricien',
    icon: <Zap size={24} />,
    color: '#4f46e5',
    image: 'photo-1472099645785-5658abf4ff4e',
    outfit: {
      top: 'bg-blue-500', // Work shirt
      bottom: 'bg-gray-700', // Work pants
      accessory: 'safety-gear' // Safety equipment
    }
  },
  {
    name: 'Hovenier',
    icon: <Leaf size={24} />,
    color: '#5b21b6',
    image: 'photo-1500648767791-00dcc994a43e',
    outfit: {
      top: 'bg-green-600', // Garden work shirt
      bottom: 'bg-green-800', // Garden pants
      accessory: 'hat' // Sun hat
    }
  },
  {
    name: 'Schoonmaker',
    icon: <Droplets size={24} />,
    color: '#6366f1',
    image: 'photo-1519085360753-af0119f7cbe7',
    outfit: {
      top: 'bg-purple-500', // Cleaning uniform
      bottom: 'bg-purple-700', // Uniform pants
      accessory: 'apron' // Cleaning apron
    }
  },
  {
    name: 'Fotograaf',
    icon: <Camera size={24} />,
    color: '#7c3aed',
    image: 'photo-1560250097-0b93528c311a',
    outfit: {
      top: 'bg-black', // Casual shirt
      bottom: 'bg-gray-600', // Casual pants
      accessory: 'camera-strap' // Camera strap
    }
  }
];

const AnimatedCharacter: React.FC = () => {
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const renderAccessory = (accessory: string | undefined) => {
    switch (accessory) {
      case 'glasses':
        return <div className="absolute top-3.5 left-2.5 right-2.5 h-3 border-2 border-black rounded-full bg-transparent opacity-80"></div>;
      case 'hard-hat':
        return <div className="absolute -top-2 left-0 right-0 h-5 bg-yellow-400 rounded-t-full border-2 border-yellow-600"></div>;
      case 'hat':
        return <div className="absolute -top-2 left-0 right-0 h-4 bg-green-700 rounded-full"></div>;
      default:
        return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentProfessionIndex((prev) => (prev + 1) % professions.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 200);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentProfession = professions[currentProfessionIndex];

  return (
    <div className="flex flex-col items-center px-4">
      {/* Professional Person */}
      <div className={`relative group transition-all duration-700 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
        {/* 3D Card Container */}
        <div className="relative perspective-1000">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto transform-gpu transition-all duration-700 hover:rotateY-5 hover:rotateX-5 hover:scale-105 preserve-3d">
            {/* Main Photo */}
            <div className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden glass-card shadow-glass">
              <img 
                src={`https://images.unsplash.com/${currentProfession.image}?w=300&h=300&fit=crop&crop=face&auto=format&q=80`}
                alt={currentProfession.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* 3D Tool Badge */}
            <div className={`absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl glass-strong shadow-glass border border-white/20 flex items-center justify-center transition-all duration-700 transform-gpu ${
              isAnimating ? 'opacity-0 scale-50 rotateY-180' : 'opacity-100 scale-100 rotateY-0'
            } hover:rotateY-12 hover:scale-110`}
              style={{ 
                background: `linear-gradient(135deg, ${currentProfession.color}15, ${currentProfession.color}30)`,
                boxShadow: `0 10px 25px ${currentProfession.color}20`
              }}
            >
              <div className="text-sm sm:text-base md:text-lg" style={{ color: currentProfession.color }}>
                {currentProfession.icon}
              </div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full animate-ping"
                  style={{
                    backgroundColor: currentProfession.color,
                    top: `${20 + i * 25}%`,
                    left: `${10 + i * 30}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* 3D Shadow */}
          <div className="absolute inset-0 top-1 left-1 sm:top-2 sm:left-2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-black/5 rounded-xl md:rounded-2xl blur-lg md:blur-xl transform-gpu transition-all duration-700 group-hover:blur-2xl group-hover:scale-110 -z-10"></div>
        </div>
      </div>

      {/* 3D Profession Label */}
      <div className="mt-4 md:mt-8 text-center">
        <div className="relative inline-block perspective-1000">
          <div 
            className="px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl glass-strong shadow-glass border border-white/20 transform-gpu transition-all duration-700 hover:rotateX-5 hover:scale-105 preserve-3d hover-tilt"
            style={{ 
              background: `linear-gradient(135deg, ${currentProfession.color}10, ${currentProfession.color}05)`,
              boxShadow: `0 10px 25px ${currentProfession.color}15, 0 0 0 1px ${currentProfession.color}10`
            }}
          >
            <span 
              className="font-medium text-sm md:text-lg tracking-wide transition-all duration-500"
              style={{ color: currentProfession.color }}
            >
              {currentProfession.name}
            </span>
            
            {/* 3D Background */}
            <div 
              className="absolute inset-0 rounded-2xl transform translateZ--2 transition-all duration-700"
              style={{ 
                background: `linear-gradient(135deg, ${currentProfession.color}05, transparent)`,
                transform: 'translateZ(-2px) scale(1.1)'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* 3D Progress Indicator */}
      <div className="flex gap-2 md:gap-3 mt-4 md:mt-6 justify-center px-4">
        {professions.map((_, index) => (
          <div
            key={index}
            className={`relative transition-all duration-700 cursor-pointer ${
              index === currentProfessionIndex 
                ? 'w-6 h-1.5 md:w-8 md:h-2' 
                : 'w-1.5 h-1.5 md:w-2 md:h-2'
            }`}
            onClick={() => setCurrentProfessionIndex(index)}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-700 transform-gpu hover-tilt glass-card ${
                index === currentProfessionIndex 
                  ? 'scale-100 shadow-glass' 
                  : 'scale-75 hover:scale-90'
              }`}
              style={{
                background: index === currentProfessionIndex 
                  ? `linear-gradient(90deg, ${professions[index].color}, ${professions[index].color}80)`
                  : 'rgba(229, 231, 235, 0.8)',
                backdropFilter: 'blur(10px)',
                boxShadow: index === currentProfessionIndex 
                  ? `0 4px 15px ${professions[index].color}40`
                  : '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            ></div>
            
            {/* 3D Depth */}
            {index === currentProfessionIndex && (
              <div 
                className="absolute inset-0 rounded-full blur-sm -z-10 transition-all duration-700"
                style={{
                  background: professions[index].color,
                  transform: 'translateY(1px) scale(1.2)',
                  opacity: 0.3
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCharacter;