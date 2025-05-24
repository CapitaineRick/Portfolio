import React, { useEffect, useRef } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { techWatchData } from '../../data/techWatchData';

const TechWatch: React.FC = () => {
  const watchRef = useRef<HTMLDivElement>(null);

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
    <section id="techwatch" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Veille Technologique</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Suivi des dernières tendances et innovations dans le domaine des systèmes et réseaux
          </p>
        </div>
        
        <div 
          ref={watchRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techWatchData.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded-full bg-orange-500/80 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Newspaper className="w-4 h-4 mr-1" />
                      {item.date}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
                    >
                      Lire l'article
                      <ExternalLink className="ml-1" size={16} />
                    </a>
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