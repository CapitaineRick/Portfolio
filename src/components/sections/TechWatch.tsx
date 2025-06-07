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
    <section id="techwatch" className="py-16 md:py-24 relative overflow-hidden">
      {/* Éléments flottants décoratifs */}
      <div className="floating-elements"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Veille Technologique
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-medium mb-12">
            Suivi des dernières innovations en cybersécurité, infrastructure et technologies émergentes
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-12">
          <div className="relative group">
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
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg transform scale-105'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Articles Grid avec Masonry Layout */}
        <div 
          ref={watchRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          <div className="columns-1 lg:columns-2 gap-8 space-y-8">
            {filteredArticles.map((item, index) => (
              <article 
                key={item.title}
                className={`relative group break-inside-avoid mb-8 transition-all duration-500 ease-in-out ${
                  expandedCard === item.title ? 'transform scale-[1.02]' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Background Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                
                {/* Card Content */}
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
                  
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 text-sm text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="absolute bottom-4 left-4 right-4">
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
                  
                  {/* Card Body */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors mb-4">
                      {item.title}
                    </h3>

                    {/* Description avec hauteur dynamique */}
                    <div className="mb-6">
                      <div 
                        className={`text-sm text-gray-300 leading-relaxed transition-all duration-500 ease-in-out overflow-hidden ${
                          expandedCard === item.title 
                            ? 'max-h-none opacity-100' 
                            : 'max-h-24 opacity-90'
                        }`}
                      >
                        <div className="whitespace-pre-wrap font-sans">
                          {expandedCard === item.title 
                            ? item.description 
                            : item.description.substring(0, 150) + (item.description.length > 150 ? '...' : '')
                          }
                        </div>
                      </div>
                      
                      {/* Fade effect pour le texte tronqué */}
                      {expandedCard !== item.title && item.description.length > 150 && (
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechWatch;