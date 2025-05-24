import React, { useEffect, useRef, useState } from 'react';
import { Newspaper, ExternalLink, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { techWatchData } from '../../data/techWatchData';

const TechWatch: React.FC = () => {
  const watchRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedArticles, setExpandedArticles] = useState<{[key: string]: boolean}>({});

  const categories = Array.from(new Set(techWatchData.map(item => item.category)));
  const tags = Array.from(new Set(techWatchData.flatMap(item => item.tags)));

  const filteredArticles = techWatchData.filter(article => {
    if (selectedCategory && article.category !== selectedCategory) return false;
    if (selectedTag && !article.tags.includes(selectedTag)) return false;
    return true;
  });

  const toggleArticle = (title: string) => {
    setExpandedArticles(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
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
    <section id="techwatch" className="py-16 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Veille Technologique</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Suivi des dernières tendances et innovations dans le domaine des systèmes, réseaux et de la cybersécurité
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-orange-500" />
              <span className="font-medium">Filtrer par :</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                  selectedTag === tag
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          ref={watchRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 gap-8">
            {filteredArticles.map((item, index) => (
              <div 
                key={item.title}
                className="group relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden transform group-hover:scale-[1.01] transition duration-500">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500 text-white shadow-lg">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Newspaper className="w-4 h-4 mr-1" />
                          {item.date}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="prose dark:prose-invert max-w-none">
                        <pre 
                          className={`whitespace-pre-wrap font-mono text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-hidden transition-all duration-500 ${
                            expandedArticles[item.title] ? 'max-h-[2000px]' : 'max-h-[300px]'
                          }`}
                        >
                          {item.description}
                        </pre>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <button
                          onClick={() => toggleArticle(item.title)}
                          className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
                        >
                          {expandedArticles[item.title] ? (
                            <>
                              Voir moins
                              <ChevronUp className="ml-1" size={16} />
                            </>
                          ) : (
                            <>
                              Lire plus
                              <ChevronDown className="ml-1" size={16} />
                            </>
                          )}
                        </button>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
                        >
                          Voir l'article original
                          <ExternalLink className="ml-1" size={16} />
                        </a>
                      </div>
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