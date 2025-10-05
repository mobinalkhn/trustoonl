import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

const BlogSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "10 tips voor het kiezen van een betrouwbare aannemer",
      excerpt: "Ontdek wat je moet weten voordat je een aannemer inhuurt voor jouw klus. Van vergunningen tot verzekeringen.",
      author: "Sarah van der Berg",
      date: "2 dagen geleden",
      category: "Tips & Advies",
      readTime: "5 min leestijd",
      image: "photo-1560472354-b33ff0c44a43",
      trending: true
    },
    {
      id: 2,
      title: "Gemiddelde kosten schilderwerk in 2025",
      excerpt: "Wat betaal je gemiddeld voor schilderwerk? Een overzicht van de huidige tarieven per m² en per uur.",
      author: "Mark Janssen",
      date: "5 dagen geleden", 
      category: "Kosten",
      readTime: "4 min leestijd",
      image: "photo-1562259949-e8e7689d7828",
      trending: false
    },
    {
      id: 3,
      title: "Duurzame renovatie: wat zijn de mogelijkheden?",
      excerpt: "Leer over energiebesparende renovaties, subsidies en duurzame materialen voor jouw huis.",
      author: "Lisa de Vries",
      date: "1 week geleden",
      category: "Duurzaamheid", 
      readTime: "7 min leestijd",
      image: "photo-1558618666-fcd25c85cd64",
      trending: false
    },
    {
      id: 4,
      title: "Voorjaarsschoonmaak: complete checklist",
      excerpt: "Stap voor stap plan voor een grondige voorjaarsschoonmaak. Inclusief tips van professionele schoonmakers.",
      author: "Emma Bakker",
      date: "1 week geleden",
      category: "Schoonmaken",
      readTime: "6 min leestijd", 
      image: "photo-1558618047-3c8c76ca7d13",
      trending: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tips & Advies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek handige tips, actuele tarieven en praktische adviezen van onze experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg overflow-hidden text-white">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  <TrendingUp size={14} className="inline mr-1" />
                  Trending
                </span>
                <span className="text-blue-100 text-sm">{articles[0].category}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {articles[0].title}
              </h3>
              
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                {articles[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-100 text-sm">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{articles[0].author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{articles[0].date}</span>
                  <span>{articles[0].readTime}</span>
                </div>
                
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2">
                  Lees meer
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Other Articles */}
          {articles.slice(1).map((article) => (
            <div key={article.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={`https://images.unsplash.com/${article.image}?w=600&h=400&fit=crop&auto=format&q=80`}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span className="mr-3">{article.author}</span>
                    <Calendar size={14} className="mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-blue-600 border border-blue-300 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2">
            Bekijk alle artikelen
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;