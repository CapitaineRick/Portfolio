import React, { useEffect, useRef, useState } from 'react';
import { Newspaper, ExternalLink, Filter, ChevronDown, ChevronUp, Search, Calendar, Tag, BookOpen, ArrowRight, Bell, Rss, TrendingUp, Eye, Clock, Star } from 'lucide-react';
import { techWatchData } from '../../data/techWatchData';

const TechWatch: React.FC = () => {
  const watchRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedArticles, setExpandedArticles] = useState<{[key: string]: boolean}>({});
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

  const toggleArticle = (title: string) => {
    setExpandedArticles(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

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
            Une veille active et structurée pour rester à la pointe des innovations en cybersécurité, 
            infrastructure et nouvelles technologies
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-orange-900/30 rounded-xl">
                  <TrendingUp className="text-orange-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Surveillance Active</h3>
                  <p className="text-orange-400">Monitoring quotidien</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>Flux RSS spécialisés</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>Alertes Google personnalisées</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>Newsletters techniques</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>Communautés professionnelles</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-purple-900/30 rounded-xl">
                  <Eye className="text-purple-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Sources Diversifiées</h3>
                  <p className="text-purple-400">Multi-canaux</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Blogs d'experts reconnus</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Publications académiques</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Conférences et webinaires</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Réseaux sociaux spécialisés</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-900/30 rounded-xl">
                  <BookOpen className="text-blue-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Analyse Structurée</h3>
                  <p className="text-blue-400">Synthèse experte</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Résumés détaillés</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Impact sur l'infrastructure</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Recommandations pratiques</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Veille concurrentielle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="relative group mb-12">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Filter className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold text-white">Filtres de recherche</h3>
              </div>
              {(selectedCategory || selectedTag || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-xl transition-colors text-sm"
                >
                  Effacer les filtres
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-5 h-5 text-orange-500" />
                  <label className="font-medium text-white">Recherche</label>
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/50 
                           border border-gray-600 
                           focus:ring-2 focus:ring-orange-500 focus:border-transparent 
                           text-white placeholder-gray-400
                           transition-all duration-300"
                />
              </div>

              {/* Categories */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Newspaper className="w-5 h-5 text-orange-500" />
                  <label className="font-medium text-white">Catégories</label>
                </div>
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
              </div>

              {/* Tags */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-5 h-5 text-orange-500" />
                  <label className="font-medium text-white">Tags</label>
                </div>
                <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
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
            </div>

            {/* Results count */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                <span className="text-orange-500 font-medium">{filteredArticles.length}</span> article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
                {(selectedCategory || selectedTag || searchTerm) && (
                  <span> avec les filtres appliqués</span>
                )}
              </p>
            </div>
          </div>
        </div>
        
        {/* Articles */}
        <div 
          ref={watchRef}
          className="space-y-8 transition-all duration-300 opacity-0 translate-y-10"
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
            filteredArticles.map((item, index) => (
              <div 
                key={item.title}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/3 relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg">
                            {item.category}
                          </span>
                        </div>
                        
                        {/* Tags */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.slice(0, 3).map(tag => (
                              <span 
                                key={tag}
                                className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30"
                              >
                                #{tag}
                              </span>
                            ))}
                            {item.tags.length > 3 && (
                              <span className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                                +{item.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-2/3 p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400 ml-4 flex-shrink-0">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Content Preview */}
                      <div className="relative">
                        <div 
                          className={`prose prose-invert max-w-none transition-all duration-500 overflow-hidden ${
                            expandedArticles[item.title] ? 'max-h-[2000px]' : 'max-h-48'
                          }`}
                        >
                          <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                            {item.description}
                          </pre>
                        </div>
                        
                        {/* Gradient overlay for collapsed state */}
                        {!expandedArticles[item.title] && (
                          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700/50">
                        <button
                          onClick={() => toggleArticle(item.title)}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-900/30 
                                   text-orange-400 font-medium transition-all duration-300
                                   hover:bg-orange-900/50 hover:scale-105 group/btn"
                        >
                          <span>{expandedArticles[item.title] ? 'Voir moins' : 'Lire plus'}</span>
                          {expandedArticles[item.title] ? (
                            <ChevronUp className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                          ) : (
                            <ChevronDown className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                          )}
                        </button>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-900/30 
                                   text-purple-400 font-medium transition-all duration-300
                                   hover:bg-purple-900/50 hover:scale-105 group/btn"
                        >
                          <span>Source originale</span>
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        {filteredArticles.length > 0 && (
          <div className="mt-16 text-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Intéressé par ma veille technologique ?</h3>
                <p className="text-gray-300 mb-6">
                  Je partage régulièrement mes analyses et découvertes sur les dernières innovations du secteur
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 
                           text-white rounded-xl font-medium transition-all duration-300
                           hover:opacity-90 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Bell className="w-5 h-5" />
                  <span>Discutons ensemble</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechWatch;