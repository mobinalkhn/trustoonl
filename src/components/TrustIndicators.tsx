import React from 'react';
import { Building, Star, TrendingDown, Crown } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const stats = [
    {
      icon: <Building size={32} />,
      number: '50.000+',
      label: 'Betrouwbare bedrijven',
      description: 'Direct contact met bedrijven bij jou in de buurt'
    },
    {
      icon: <Star size={32} />,
      number: '2.900.000+',
      label: 'Reviews van klanten',
      description: 'Objectieve Trustoo Score gebaseerd op alle reviews'
    },
    {
      icon: <TrendingDown size={32} />,
      number: '40%',
      label: 'Gemiddelde besparing',
      description: 'Vergelijk prijzen en bespaar aanzienlijk'
    },
    {
      icon: <Crown size={32} />,
      number: '#1',
      label: 'Platform Nederland',
      description: 'Het grootste dienstenplatform van Nederland'
    }
  ];

  return (
    <section className="py-16 relative" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* 3D Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl transform-gpu transition-all duration-500 group-hover:rotateY-12 group-hover:scale-110 shadow-blue-500/25">
                  {stat.icon}
                </div>
                {/* 3D Shadow */}
                <div className="absolute inset-0 w-16 h-16 mx-auto bg-blue-500 rounded-2xl blur-xl opacity-20 transform translate-y-2 group-hover:translate-y-3 transition-all duration-500"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;