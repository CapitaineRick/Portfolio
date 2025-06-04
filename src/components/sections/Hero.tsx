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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 text-orange-400 text-sm font-medium">
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
                            flex items-center gap-2 font-medium"
                >
                  Me contacter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">2+</div>
                <div className="text-sm text-gray-400">Années d'études</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">10+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">-</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div> 
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">2</div>
                <div className="text-sm text-gray-400">Expérience Professionel</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50">
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
                      className="relative group transition-all duration-300"
                    >
                      <div className={`
                        w-full aspect-square rounded-2xl
                        bg-gradient-to-br ${item.gradient}
                        p-0.5 transition-all duration-300
                        group-hover:scale-105 cursor-pointer
                      `}>
                        <div className="w-full h-full rounded-2xl bg-gray-800 p-6
                                      flex flex-col items-center justify-center gap-4
                                      border border-gray-700">
                          <item.icon className="w-12 h-12 text-white transition-transform duration-300
                                              group-hover:scale-110 group-hover:rotate-6" />
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
                <div className="bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-semibold mb-4 text-white">
                    Objectifs professionnels
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      Devenir expert en sécurité des systèmes
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      Spécialisation en pentesting
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
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