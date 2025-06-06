import React, { useEffect, useRef } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements harmonisés et renforcés */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500/15 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-purple-500/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        
        {/* Particules flottantes harmonisées */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500/60 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/60 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500/60 rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-400/60 rounded-full animate-pulse animation-delay-1000"></div>
        
        {/* Lignes de connexion subtiles */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column - Contenu principal */}
          <div className="lg:w-2/5 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 text-orange-400 text-sm font-medium backdrop-blur-sm border border-orange-500/20">
                <Server className="w-4 h-4" />
                BTS SIO SISR - Administrateur Systèmes & Réseaux
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                  Fernandes Sébastien
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Étudiant passionné par l'infrastructure IT & la cybersécurité
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl
                            hover:opacity-90 transform hover:scale-105
                            transition-all duration-300 shadow-lg hover:shadow-orange-500/25
                            flex items-center gap-2 font-medium"
                >
                  Découvrir mes projets
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-orange-500 text-orange-400
                            hover:bg-orange-900/10 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-medium backdrop-blur-sm"
                >
                  Me contacter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="font-bold text-3xl text-orange-400">2+</div>
                <div className="text-sm text-gray-400">Années d'études</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="font-bold text-3xl text-orange-400">15+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="font-bold text-3xl text-orange-400">-</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div> 
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="font-bold text-3xl text-orange-400">2</div>
                <div className="text-sm text-gray-400">Expérience Pro</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interface futuriste harmonisée et agrandie */}
          <div className="lg:w-3/5 relative">
            {/* Effets de fond améliorés */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/5 rounded-full filter blur-2xl animate-pulse animation-delay-4000"></div>
            
            <div className="relative bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
              <div className="space-y-8">
                {/* Featured Skills avec couleurs harmonisées */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: Server, 
                      label: 'Infrastructure', 
                      gradient: 'from-orange-500 to-orange-600',
                      description: 'Administration système Windows & Linux',
                      bgColor: 'bg-orange-500/10'
                    },
                    { 
                      icon: Shield, 
                      label: 'Sécurité', 
                      gradient: 'from-purple-500 to-purple-600',
                      description: 'Protection et audit des systèmes',
                      bgColor: 'bg-purple-500/10'
                    },
                    { 
                      icon: Network, 
                      label: 'Réseaux', 
                      gradient: 'from-blue-500 to-blue-600',
                      description: 'Configuration et maintenance',
                      bgColor: 'bg-blue-500/10'
                    },
                    { 
                      icon: Terminal, 
                      label: 'DevOps', 
                      gradient: 'from-green-500 to-green-600',
                      description: 'Automatisation et scripts',
                      bgColor: 'bg-green-500/10'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative group transition-all duration-500 hover:scale-105"
                    >
                      <div className={`
                        w-full aspect-square rounded-2xl
                        bg-gradient-to-br ${item.gradient}
                        p-0.5 transition-all duration-500
                        group-hover:shadow-lg group-hover:shadow-current/25
                        cursor-pointer
                      `}>
                        <div className={`w-full h-full rounded-2xl bg-gray-800/90 p-6
                                      flex flex-col items-center justify-center gap-4
                                      border border-gray-700 group-hover:border-gray-600
                                      ${item.bgColor} group-hover:bg-opacity-20
                                      transition-all duration-500`}>
                          <item.icon className="w-12 h-12 text-white transition-all duration-500
                                              group-hover:scale-110 group-hover:rotate-6" />
                          <div className="text-center">
                            <div className="font-medium text-white mb-1 group-hover:text-current transition-colors duration-300">
                              {item.label}
                            </div>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Effet de lueur au hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                    </div>
                  ))}
                </div>

                {/* Current Focus avec couleurs harmonisées */}
                <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-orange-500" />
                    Objectifs professionnels
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-gray-200 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                      Devenir expert en sécurité des systèmes
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-gray-200 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse animation-delay-1000"></div>
                      Spécialisation en pentesting
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-gray-200 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse animation-delay-2000"></div>
                      Certification en cybersécurité
                    </li>
                  </ul>
                </div>

                {/* Indicateur de scroll subtil */}
                <div className="flex justify-center">
                  <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;