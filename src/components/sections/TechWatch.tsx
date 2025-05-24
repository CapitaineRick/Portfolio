import React, { useEffect, useRef, useState } from 'react';
import { Newspaper, ExternalLink, Filter, ChevronDown, ChevronUp, Search, Calendar, Tag, BookOpen, ArrowRight, Bell, Rss } from 'lucide-react';
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
    <section id="techwatch" className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/20 to-purple-50/20 dark:from-orange-900/20 dark:to-purple-900/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Veille Technologique
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Restez à jour avec les dernières tendances et innovations dans le domaine des systèmes, réseaux et de la cybersécurité
          </p>
        </div>

        {/* Tech Watch Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                  <Bell className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Surveillance Active</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Veille quotidienne</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                  <span>Actualités tech</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                  <span>Bulletins de sécurité</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                  <span>Nouvelles vulnérabilités</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <Rss className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sources Variées</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Multi-sources</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span>Blogs techniques</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span>Forums spécialisés</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span>Réseaux professionnels</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Analyse Approfondie</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Synthèse régulière</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <span>Résumés détaillés</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <span>Impact technologique</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <span>Recommandations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 
                            border border-gray-200 dark:border-gray-700 
                            focus:ring-2 focus:ring-orange-500 focus:border-transparent
                            text-gray-900 dark:text-white placeholder-gray-500"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row justify-center gap-6">
                {/* Categories */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="w-5 h-5 text-orange-500" />
                    <h3 className="font-semibold">Catégories</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                          ${selectedCategory === category
                            ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                            : 'bg-orange-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-5 h-5 text-orange-500" />
                    <h3 className="font-semibold">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-all duration-300
                          ${selectedTag === tag
                            ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                            : 'bg-orange-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                          }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Articles Grid */}
        <div 
          ref={watchRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 gap-8">
            {filteredArticles.map((item) => (
              <div 
                key={item.title}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Article Image */}
                    <div className="md:w-1/3 relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="absolute bottom-4 left-4">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
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
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Article Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>

                      <div className="prose dark:prose-invert max-w-none">
                        <pre 
                          className={`whitespace-pre-wrap font-sans text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-hidden transition-all duration-300 ${
                            expandedArticles[item.title] ? 'max-h-[2000px]' : 'max-h-[200px]'
                          }`}
                        >
                          {item.description}
                        </pre>
                      </div>

                      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <button
                          onClick={() => toggleArticle(item.title)}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 
                                   text-orange-600 dark:text-orange-400 font-medium transition-all duration-300
                                   hover:bg-orange-100 dark:hover:bg-orange-900/50"
                        >
                          {expandedArticles[item.title] ? (
                            <>
                              Voir moins
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
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/50 
                                   text-purple-600 dark:text-purple-400 font-medium transition-all duration-300
                                   hover:bg-purple-100 dark:hover:bg-purple-900/50"
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
      </div>
    </section>
  );
};

export default TechWatch;