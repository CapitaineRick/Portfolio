import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, Tag, BookOpen, ArrowRight, Bell, TrendingUp, Eye, Clock, Star, Filter, Search, X, Rss, Globe, Bookmark, Monitor, Shield, Users, Zap } from 'lucide-react';
import { techWatchData } from '../../data/techWatchData';

const TechWatch: React.FC = () => {
  const watchRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const categories = Array.from(new Set(techWatchData.map(item => item.category)));

  const filteredArticles = selectedCategory 
    ? techWatchData.filter(article => article.category === selectedCategory)
    : techWatchData;

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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Veille Technologique
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Suivi actif des innovations et tendances technologiques dans les domaines de l'infrastructure, de la sécurité et des systèmes
          </p>
        </div>

        {/* Méthodologie de veille */}
        <div className="mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ma Méthodologie de Veille</h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Approche structurée et systématique pour rester à jour avec les évolutions technologiques
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Sources */}
                <div className="bg-gray-700/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-900/30 rounded-lg">
                      <Rss className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="font-bold text-white">Sources</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Blogs techniques (ZDNet, JDN)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>ANSSI & CERT-FR</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Documentation officielle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Reddit r/sysadmin</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>LinkedIn Tech</span>
                    </li>
                  </ul>
                </div>

                {/* Outils */}
                <div className="bg-gray-700/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-900/30 rounded-lg">
                      <Monitor className="w-5 h-5 text-purple-500" />
                    </div>
                    <h4 className="font-bold text-white">Outils</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>Feedly (agrégateur RSS)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>Google Alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>Notion (organisation)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>Pocket (sauvegarde)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>Twitter/X Tech</span>
                    </li>
                  </ul>
                </div>

                {/* Fréquence */}
                <div className="bg-gray-700/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-900/30 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-white">Fréquence</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Quotidien (30 min/jour)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Synthèse hebdomadaire</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Alertes temps réel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Revue mensuelle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Veille événementielle</span>
                    </li>
                  </ul>
                </div>

                {/* Traitement */}
                <div className="bg-gray-700/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-900/30 rounded-lg">
                      <Zap className="w-5 h-5 text-green-500" />
                    </div>
                    <h4 className="font-bold text-white">Traitement</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Tri par pertinence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Analyse d'impact</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Synthèse structurée</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Archivage organisé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Partage sélectif</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domaines de veille */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-900/30 rounded-xl">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white">Cybersécurité</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Nouvelles vulnérabilités</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Techniques d'attaque</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Solutions de protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Réglementations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-900/30 rounded-xl">
                  <Monitor className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-white">Infrastructure</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Virtualisation & Cloud</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Conteneurisation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Automatisation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-900/30 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-white">Tendances</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Intelligence Artificielle</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Edge Computing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Zero Trust</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">DevSecOps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              !selectedCategory
                ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
            }`}
          >
            Toutes les catégories
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Articles en cartes compactes */}
        <div 
          ref={watchRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((item, index) => (
              <div 
                key={item.title}
                className="relative group cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === item.title ? null : item.title)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden h-full">
                  {/* Header avec image */}
                  <div className="relative h-48">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-purple-500 text-white">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Aperçu de la description */}
                    <div className={`transition-all duration-300 ${
                      expandedCard === item.title ? 'max-h-none' : 'max-h-20 overflow-hidden'
                    }`}>
                      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">
                        {expandedCard === item.title 
                          ? item.description 
                          : item.description.substring(0, 150) + (item.description.length > 150 ? '...' : '')
                        }
                      </pre>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(expandedCard === item.title ? null : item.title);
                        }}
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                      >
                        {expandedCard === item.title ? 'Réduire' : 'Lire plus'}
                      </button>
                      
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-500 
                                 text-white text-sm font-medium rounded-lg transition-all duration-300
                                 hover:opacity-90 hover:scale-105"
                      >
                        <Globe className="w-4 h-4" />
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si aucun article */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-12">
                  <Bookmark className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 mb-2">Aucun article dans cette catégorie</h3>
                  <p className="text-gray-500">La veille continue, de nouveaux contenus arrivent régulièrement</p>
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