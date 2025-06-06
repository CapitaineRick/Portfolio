import React, { useEffect, useRef } from 'react';
import { Server, ArrowRight, Monitor, Shield, Network } from 'lucide-react';

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
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="text-center transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 text-orange-400 text-sm font-medium mb-8">
            <Server className="w-4 h-4" />
            BTS SIO SISR - Administrateur Systèmes & Réseaux
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            Fernandes Sébastien
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Étudiant passionné par l'infrastructure IT et la cybersécurité
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl
                        hover:opacity-90 transform hover:scale-105
                        transition-all duration-300 shadow-lg
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

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { 
                icon: Server, 
                label: 'Infrastructure', 
                description: 'Windows & Linux'
              },
              { 
                icon: Shield, 
                label: 'Sécurité', 
                description: 'Cybersécurité'
              },
              { 
                icon: Network, 
                label: 'Réseaux', 
                description: 'Administration'
              },
              { 
                icon: Monitor, 
                label: 'Supervision', 
                description: 'Monitoring'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700/50
                          hover:bg-gray-800/80 hover:border-orange-500/50 
                          transition-all duration-300 hover:scale-105"
              >
                <item.icon className="w-8 h-8 text-orange-500 mx-auto mb-4 
                                   group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <div className="font-bold text-3xl text-orange-400">2+</div>
              <div className="text-sm text-gray-400">Années d'études</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-orange-400">15+</div>
              <div className="text-sm text-gray-400">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-orange-400">-</div>
              <div className="text-sm text-gray-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-orange-400">2</div>
              <div className="text-sm text-gray-400">Expériences pro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;