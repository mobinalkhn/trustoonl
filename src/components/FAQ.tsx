import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Hoe werkt Trustoo precies?",
      answer: "Trustoo is een gratis platform waar je eenvoudig lokale dienstverleners kunt vinden. Je vult een aanvraagformulier in, wij matchen je met geschikte professionals, en je ontvangt gratis offertes. Zo kun je eenvoudig prijzen en diensten vergelijken."
    },
    {
      question: "Is Trustoo echt gratis voor particulieren?", 
      answer: "Ja, Trustoo is 100% gratis voor particulieren. Je betaalt niets voor het gebruik van ons platform, het ontvangen van offertes of het vergelijken van dienstverleners. We verdienen geld via bedrijven die zich bij ons aanmelden."
    },
    {
      question: "Hoe worden bedrijven gescreend?",
      answer: "Alle bedrijven doorlopen een uitgebreid verificatieproces. We controleren KvK-registraties, verzekeringen, referenties en beoordelingen. Alleen bedrijven die aan onze kwaliteitseisen voldoen worden toegelaten tot het platform."
    },
    {
      question: "Hoeveel offertes ontvang ik?",
      answer: "Je ontvangt maximaal 4 offertes van verschillende bedrijven. Dit aantal zorgt voor voldoende keuze zonder overweldigend te zijn. De exacte aantal hangt af van beschikbaarheid in jouw regio en type dienst."
    },
    {
      question: "Hoe snel krijg ik reacties?",
      answer: "Gemiddeld ontvang je binnen 2 uur de eerste reacties van bedrijven. In veel gevallen al binnen 30 minuten. De snelheid hangt af van het type dienst en de tijd waarop je je aanvraag indient."
    },
    {
      question: "Wat als ik niet tevreden ben met een dienstverlener?",
      answer: "Bij problemen kun je contact opnemen met onze klantenservice. We helpen bij het oplossen van geschillen en kunnen in uiterste gevallen bedrijven uitsluiten van ons platform. Jouw tevredenheid staat voorop."
    },
    {
      question: "Kan ik reviews van andere klanten bekijken?",
      answer: "Ja, bij elk bedrijfsprofiel vind je uitgebreide reviews en beoordelingen van andere klanten. Deze zijn geverifieerd en geven je een goed beeld van de kwaliteit en betrouwbaarheid van de dienstverlener."
    },
    {
      question: "In welke regio's is Trustoo actief?",
      answer: "Trustoo is actief in heel Nederland. Van grote steden tot kleine dorpen - overal hebben we een netwerk van lokale dienstverleners. Vul je postcode in om te zien welke professionals beschikbaar zijn in jouw gebied."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-gray-600">
            Hier vind je antwoorden op de meest gestelde vragen over Trustoo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openItem === index ? (
                  <ChevronUp size={20} className="text-gray-500 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500 flex-shrink-0 ml-4" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Heb je nog andere vragen?
          </h3>
          <p className="text-gray-600 mb-6">
            Ons klantenservice team staat voor je klaar om je te helpen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Chat met ons
            </button>
            <button className="text-blue-600 border border-blue-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
              Stuur een e-mail
            </button>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-3">
            Blijf op de hoogte
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Ontvang maandelijks handige tips, actuele tarieven en het laatste nieuws 
            over dienstverleners in jouw regio.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Jouw e-mailadres"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Aanmelden
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-3">
              Geen spam, uitschrijven kan altijd. Privacy gegarandeerd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;