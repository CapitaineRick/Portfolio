import React, { useEffect, useRef } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network } from 'lucide-react';

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
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 grid-bg"
    >
      {/* Animated network lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent
                         animate-network`}
              style={{
                top: `${20 * i}%`,
                left: '-100%',
                width: '200%',
                animationDelay: `${i * 1.6}s`
              }}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent
                         animate-network`}
              style={{
                left: `${20 * i}%`,
                top: '-100%',
                height: '200%',
                animationDelay: `${i * 1.6}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-orange-500/10 text-orange-400 text-sm font-medium
                            border border-orange-500/20">
                <Server className="w-4 h-4" />
                BTS SIO SISR - Administrateur Systèmes & Réseaux
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
                  Fernandes{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                    Sébastien
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Étudiant passionné par l'infrastructure IT & la cybersécurité
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-orange-500 text-white rounded-xl
                            hover:bg-orange-600 transform hover:scale-105
                            transition-all duration-300 shadow-lg hover:shadow-orange-500/25
                            flex items-center gap-2 font-medium"
                >
                  Découvrir mes projets
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-orange-500/50 text-orange-400
                            hover:bg-orange-500/10 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-medium"
                >
                  Me contacter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
                <div className="font-bold text-3xl text-orange-400">2+</div>
                <div className="text-sm text-gray-400">Années d'études</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
                <div className="font-bold text-3xl text-orange-400">15+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
                <div className="font-bold text-3xl text-orange-400">3+</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
                <div className="font-bold text-3xl text-orange-400">2</div>
                <div className="text-sm text-gray-400">Stages effectués</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                {/* Featured Skills */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: Server, 
                      label: 'Infrastructure', 
                      gradient: 'from-orange-500 to-red-500',
                      description: 'Administration système Windows & Linux'
                    },
                    { 
                      icon: Shield, 
                      label: 'Sécurité', 
                      gradient: 'from-blue-500 to-cyan-500',
                      description: 'Protection et audit des systèmes'
                    },
                    { 
                      icon: Network, 
                      label: 'Réseaux', 
                      gradient: 'from-green-500 to-emerald-500',
                      description: 'Configuration et maintenance'
                    },
                    { 
                      icon: Terminal, 
                      label: 'DevOps', 
                      gradient: 'from-purple-500 to-pink-500',
                      description: 'Automatisation et scripts'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative group animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`
                        w-full aspect-square rounded-2xl
                        bg-gradient-to-br ${item.gradient}
                        p-0.5 transition-all duration-300
                        group-hover:scale-105 cursor-pointer
                      `}>
                        <div className="w-full h-full rounded-2xl bg-gray-900/50 p-6
                                      flex flex-col items-center justify-center gap-4
                                      backdrop-blur-lg">
                          <item.icon className="w-12 h-12 transition-transform duration-300
                                              group-hover:scale-110 group-hover:rotate-6
                                              text-white" />
                          <div className="text-center">
                            <div className="font-medium text-white mb-1">
                              {item.label}
                            </div>
                            <p className="text-xs text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current Focus */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-lg">
                  <h3 className="text-lg font-semibold mb-4 text-white">
                    Objectifs professionnels
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-slow"></div>
                      Devenir expert en sécurité des systèmes
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow"></div>
                      Spécialisation en pentesting
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></div>
                      Certification en cybersécurité
                    </li>
                  </ul>
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