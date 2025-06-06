import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, Tag, BookOpen, ArrowRight, Bell, TrendingUp, Eye, Clock, Star, Filter, Search, X } from 'lucide-react';
import { techWatchData } from '../../data/techWatchData';

const TechWatch: React.FC = () => {
  const watchRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Array.from(new Set(techWatchData.map(item => item.category)));
  const tags = Array.from(new Set(techWatchData.flatMap(item => item.tags)));

  const filteredArticles = techWatchData.filter(article => {
    if (selectedCategory && article.category !== selectedCategory) return false;
    if (selectedTag && !article.tags.includes(selectedTag)) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return article.title.toLowerCase().includes(term) ||
             article.description.toLowerCase().includes(term) ||
             article.tags.some(tag => tag.toLowerCase().includes(term));
    }
    return true;
  });

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchTerm('');
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
    <section id="techwatch" className="py-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-rose-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-pink-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Veille Technologique
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Une approche structurée pour suivre les évolutions technologiques et anticiper les tendances du secteur IT
          </p>
        </div>

        {/* Methodology Overview */}
        <div className="relative group mb-16">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ma méthodologie de veille</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Une approche systématique pour identifier, analyser et synthétiser les informations pertinentes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="font-semibold text-white mb-2">Surveillance</h4>
                <p className="text-sm text-gray-400">Monitoring continu des sources spécialisées</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="font-semibold text-white mb-2">Collecte</h4>
                <p className="text-sm text-gray-400">Agrégation multi-sources et validation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="font-semibold text-white mb-2">Analyse</h4>
                <p className="text-sm text-gray-400">Synthèse et évaluation de l'impact</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-semibold text-white mb-2">Diffusion</h4>
                <p className="text-sm text-gray-400">Partage des insights et recommandations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Filters */}
        <div className="relative group mb-12">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              {/* Search */}
              <div className="flex-1 min-w-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher dans les articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-700/50 
                             border border-gray-600 
                             focus:ring-2 focus:ring-orange-500 focus:border-transparent 
                             text-white placeholder-gray-400
                             transition-all duration-300"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Clear filters */}
              {(selectedCategory || selectedTag || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-xl transition-colors text-sm"
                >
                  <X className="w-4 h-4" />
                  Effacer
                </button>
              )}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                        selectedTag === tag
                          ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results count */}
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm">
                <span className="text-orange-500 font-medium">{filteredArticles.length}</span> article{filteredArticles.length > 1 ? 's' : ''} 
                {(selectedCategory || selectedTag || searchTerm) && ' correspondant aux critères'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Articles Grid */}
        <div 
          ref={watchRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-12">
                  <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 mb-2">Aucun article trouvé</h3>
                  <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.map((item, index) => (
                <div 
                  key={item.title}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Image Header */}
                    <div className="relative h-48">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg">
                            {item.category}
                          </span>
                        </div>
                        
                        {/* Date */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.slice(0, 3).map(tag => (
                              <span 
                                key={tag}
                                className="px-2 py-1 text-xs rounded-md bg-white/20 backdrop-blur-sm text-white border border-white/30"
                              >
                                #{tag}
                              </span>
                            ))}
                            {item.tags.length > 3 && (
                              <span className="px-2 py-1 text-xs rounded-md bg-white/20 backdrop-blur-sm text-white border border-white/30">
                                +{item.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors leading-tight mb-4">
                        {item.title}
                      </h3>

                      {/* Description Preview */}
                      <div className="flex-1">
                        <div className="relative">
                          <div className="text-sm text-gray-300 leading-relaxed bg-gray-900/50 p-4 rounded-xl border border-gray-700/50 max-h-32 overflow-hidden">
                            <pre className="whitespace-pre-wrap font-sans">
                              {item.description.substring(0, 200)}...
                            </pre>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-6 pt-4 border-t border-gray-700/50">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-purple-500 
                                   text-white font-medium transition-all duration-300
                                   hover:opacity-90 hover:scale-105 group/btn"
                        >
                          <span>Lire l'article complet</span>
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action */}
          {filteredArticles.length > 0 && (
            <div className="mt-16 text-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8">
                  <Bell className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Restons connectés</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Ma veille technologique m'aide à anticiper les évolutions du secteur et à proposer des solutions innovantes. 
                    Discutons de vos projets et des tendances qui vous intéressent.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 
                             text-white rounded-xl font-medium transition-all duration-300
                             hover:opacity-90 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>Échanger sur les tendances tech</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechWatch;