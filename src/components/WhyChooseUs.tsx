import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Heart } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <Shield size={24} />,
      title: "100% Betrouwbaar",
      description: "Alle bedrijven worden gescreend en geverifieerd voordat ze zich kunnen aanmelden."
    },
    {
      icon: <Award size={24} />,
      title: "Kwaliteitsgarantie", 
      description: "We werken alleen samen met hoogst gewaardeerde professionals in hun vakgebied."
    },
    {
      icon: <Users size={24} />,
      title: "Persoonlijke matching",
      description: "Ons algoritme koppelt je aan de meest geschikte dienstverleners in jouw regio."
    },
    {
      icon: <Clock size={24} />,
      title: "Snelle reactie",
      description: "Gemiddeld binnen 2 uur reactie van bedrijven, vaak al binnen 30 minuten."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Geen verplichtingen",
      description: "Volledig vrijblijvend. Je betaalt alleen als je daadwerkelijk een opdracht plaatst."
    },
    {
      icon: <Heart size={24} />,
      title: "Nederlandse service",
      description: "Lokale focus met persoonlijke service en begrip van Nederlandse normen."
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Waarom kiezen voor Trustoo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nederland's meest betrouwbare platform voor het vinden van lokale dienstverleners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">50.000+</div>
              <div className="text-gray-600 text-sm">Geverifieerde bedrijven</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">2.9M+</div>
              <div className="text-gray-600 text-sm">Klantbeoordelingen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Jaar ervaring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Klantenservice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;