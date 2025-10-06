import React from 'react';
import { 
  Calculator, 
  Paintbrush, 
  Home, 
  Wrench, 
  Key, 
  Hammer,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  count: string;
  color: string;
}

const ServicesGrid: React.FC = () => {

  const services: Service[] = [
    {
      id: 'boekhouder',
      name: 'Boekhouders',
      icon: <Calculator size={32} />,
      description: 'Professionele boekhouding voor je bedrijf',
      count: '2.400+ bedrijven',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 'schilder',
      name: 'Schilders',
      icon: <Paintbrush size={32} />,
      description: 'Vakkundige schilders voor binnen en buiten',
      count: '3.200+ bedrijven',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'dakdekker',
      name: 'Dakdekkers',
      icon: <Home size={32} />,
      description: 'Specialist in dakbedekking en reparaties',
      count: '1.800+ bedrijven',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'loodgieter',
      name: 'Loodgieters',
      icon: <Wrench size={32} />,
      description: '24/7 loodgieter service bij jou in de buurt',
      count: '2.100+ bedrijven',
      color: 'from-indigo-400 to-indigo-500'
    },
    {
      id: 'makelaar',
      name: 'Makelaars',
      icon: <Key size={32} />,
      description: 'Ervaren makelaars voor koop en verkoop',
      count: '1.500+ bedrijven',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'aannemer',
      name: 'Aannemers',
      icon: <Hammer size={32} />,
      description: 'Professionele aannemers voor elke klus',
      count: '2.800+ bedrijven',
      color: 'from-indigo-600 to-indigo-700'
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    console.log(`Navigating to ${serviceId} page`);
    // Here you would typically navigate to the service page
  };

  return (
    <section id="services" className="py-12 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)' }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 perspective-1000">
        <div className="text-center mb-12 md:mb-16 transform-3d">
          <div className="relative inline-block mb-4 md:mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 relative z-10 px-4">
              Populaire diensten
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl rounded-2xl"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Kies uit de meest gevraagde services en vind de beste professionals bij jou in de buurt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="group relative glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/20 shadow-glass hover:shadow-float transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover-tilt perspective-1000">
                {/* 3D Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Icon */}
                <div className="relative mb-4 md:mb-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-glass transform-gpu transition-all duration-500 group-hover:rotateY-12 group-hover:scale-110 relative z-10`}
                    style={{ boxShadow: `0 10px 25px ${service.color.split(' ')[1]?.replace('to-', '')}30` }}
                  >
                    <div className="transform-gpu transition-all duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* 3D Shadow */}
                  <div className={`absolute inset-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl blur-xl opacity-30 transform translate-y-1 md:translate-y-2 group-hover:translate-y-2 md:group-hover:translate-y-3 transition-all duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 glass-card text-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium shadow-glass hover:shadow-float transition-all duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    {service.count}
                  </div>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center px-4">
          <button className="glass-strong text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-medium hover-glass shadow-glass hover:shadow-float transition-all duration-300 inline-flex items-center gap-2 md:gap-3 hover:scale-105 hover-tilt border border-blue-200/30">
            <span className="text-sm md:text-base">Bekijk alle 87 diensten</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;