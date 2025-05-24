import React, { useEffect, useRef } from 'react';
import { Server, ArrowRight, Terminal, Shield, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Animate icons sequentially
          iconRefs.current.forEach((icon, index) => {
            if (icon) {
              setTimeout(() => {
                icon.classList.add('opacity-100', 'scale-100', 'translate-y-0');
                icon.classList.remove('opacity-0', 'scale-95', 'translate-y-10');
              }, index * 200);
            }
          });
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

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent dark:from-orange-900/10 dark:to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative">
        <div 
          ref={heroRef}
          className="flex flex-col md:flex-row items-center justify-between transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="md:w-2/3 mb-12 md:mb-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
                Portfolio BTS SIO SISR
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                Fernandes Sébastien
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Administrateur Systèmes & Réseaux
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
                Étudiant passionné en BTS SIO spécialité SISR, je me spécialise dans la conception,
                le déploiement et la maintenance d'infrastructures informatiques sécurisées.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={scrollToProjects}
                className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg
                          hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir mes projets
                <ArrowRight className="ml-2" size={18} />
              </button>
              <a 
                href="#contact"
                className="flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500
                         hover:bg-orange-50 dark:hover:bg-orange-900/10 rounded-lg transition-all transform hover:scale-105"
              >
                Me contacter
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="font-bold text-2xl text-orange-500">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Années d'études</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="font-bold text-2xl text-orange-500">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="font-bold text-2xl text-orange-500">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="font-bold text-2xl text-orange-500">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Stages effectués</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Server, color: 'orange' },
                { icon: Shield, color: 'blue' },
                { icon: Terminal, color: 'green' },
                { icon: Database, color: 'purple' }
              ].map((item, index) => (
                <div
                  key={index}
                  ref={el => iconRefs.current[index] = el}
                  className={`w-32 h-32 flex items-center justify-center rounded-2xl
                            bg-gradient-to-br from-${item.color}-100 to-${item.color}-50
                            dark:from-${item.color}-900/30 dark:to-${item.color}-800/10
                            shadow-lg backdrop-blur-sm
                            opacity-0 scale-95 translate-y-10 transition-all duration-500`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <item.icon className={`w-16 h-16 text-${item.color}-500`} strokeWidth={1.5} />
                </div>
              ))}
            </div>
            
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-200 dark:bg-orange-800/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;