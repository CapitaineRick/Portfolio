import React, { useEffect, useRef } from 'react';
import { techWatchData } from '../../data/techWatchData';
import { ExternalLink, Calendar, Tag, Search } from 'lucide-react';

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
    <section id="techwatch" className="py-16 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Veille Technologique
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Restez à jour avec les dernières tendances et innovations dans le domaine des systèmes, réseaux et de la cybersécurité
          </p>
        </div>
        
        <div 
          ref={watchRef}
          className="grid grid-cols-1 gap-8 transition-all duration-1000 opacity-0 translate-y-10"
        >
          {techWatchData.map((article, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-4 left-4">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 text-xs rounded-lg bg-white/20 backdrop-blur-sm text-white"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                      <pre className="whitespace-pre-wrap font-sans text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        {article.description}
                      </pre>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 
                                 text-orange-600 dark:text-orange-400 font-medium transition-all duration-300
                                 hover:bg-orange-100 dark:hover:bg-orange-900/50"
                      >
                        Article original
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWatch;