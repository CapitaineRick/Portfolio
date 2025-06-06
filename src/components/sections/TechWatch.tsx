import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, ChevronDown, ChevronUp, BookOpen, Rss, Bell } from 'lucide-react';
import { techWatchData } from '../../data/techWatchData';

const TechWatch: React.FC = () => {
  const watchRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const categories = Array.from(new Set(techWatchData.map(item => item.category)));

  const filteredArticles = selectedCategory 
    ? techWatchData.filter(article => article.category === selectedCategory)
    : techWatchData;

  const toggleCard = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (watchRef.current) {
      observer.observe(watchRef.current);
    }

    return () => {
      if (watchRef.current) {
        observer.unobserve(watchRef.current);
      }
    };
  }, []);

  return (
    <section id="techwatch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header avec statistiques */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Veille Technologique
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-medium mb-12">
            Suivi des dernières innovations en cybersécurité, infrastructure et technologies émergentes
          </p>
        </div>

        {/* Filtres par catégorie - Style moderne */}
        <div className="relative group mb-12">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative bg-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Filtrer par domaine</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  !selectedCategory
                    ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                }`}
              >
                Tous les articles
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r h-full from-orange-500 to-purple-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Articles en grille moderne avec hauteurs uniformes */}
        <div 
          ref={watchRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredArticles.map((item, index) => (
              <div 
                key={item.title}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden flex flex-col min-h-[600px]">
                  
                  {/* Image et badges - Hauteur fixe */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 text-sm text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.slice(0, 3).map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 text-xs rounded-lg bg-white/20 backdrop-blur-sm text-white"
                            >
                              #{tag}
                            </span>
                          ))}
                          {item.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-lg bg-white/20 backdrop-blur-sm text-white">
                              +{item.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu - Flex pour remplir l'espace */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Titre - Hauteur fixe avec line-clamp */}
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors mb-4 h-14 flex items-center">
                      <span className="line-clamp-2">{item.title}</span>
                    </h3>

                    {/* Description - Prend l'espace restant */}
                    <div className="flex-grow flex flex-col">
                      <div 
                        className={`text-sm text-gray-300 leading-relaxed transition-all duration-300 overflow-hidden flex-grow ${
                          expandedCard === item.title ? 'max-h-none' : 'max-h-[200px]'
                        }`}
                      >
                        <pre className="whitespace-pre-wrap font-sans">
                          {expandedCard === item.title 
                            ? item.description 
                            : item.description.substring(0, 300) + (item.description.length > 300 ? '...' : '')
                          }
                        </pre>
                      </div>
                    </div>

                    {/* Actions - Toujours en bas */}
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700 flex-shrink-0">
                      <button
                        onClick={() => toggleCard(item.title)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-900/30 
                                 text-orange-400 font-medium transition-all duration-300
                                 hover:bg-orange-900/50 hover:scale-105"
                      >
                        {expandedCard === item.title ? (
                          <>
                            Réduire
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Lire plus
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-900/30 
                                 text-purple-400 font-medium transition-all duration-300
                                 hover:bg-purple-900/50 hover:scale-105"
                      >
                        Source
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechWatch;