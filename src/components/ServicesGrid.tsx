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
    <section id="services" className="py-20 relative" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
              Populaire diensten
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl rounded-2xl"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kies uit de meest gevraagde services en vind de beste professionals bij jou in de buurt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-3xl perspective-1000">
                {/* 3D Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-2xl transform-gpu transition-all duration-500 group-hover:rotateY-12 group-hover:scale-110 relative z-10`}
                    style={{ boxShadow: `0 20px 40px ${service.color.split(' ')[1]?.replace('to-', '')}30` }}
                  >
                    <div className="transform-gpu transition-all duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* 3D Shadow */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-30 transform translate-y-2 group-hover:translate-y-3 transition-all duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
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
        <div className="text-center">
          <button className="text-blue-600 border border-blue-300 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Bekijk alle 87 diensten
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;