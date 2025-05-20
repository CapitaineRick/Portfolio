import React, { useEffect, useRef } from 'react';
import { Server, ArrowRight } from 'lucide-react';

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

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div 
          ref={heroRef}
          className="flex flex-col md:flex-row items-center justify-between transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h1>
              Fernandes Sébastien
            </h1>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Bienvenue sur mon portfolio ! 
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-orange-500 mb-4">
              Étudiant en BTS SIO – Option SISR
            </h3>
            <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-600 dark:text-gray-300">
              Vous trouverez ici une présentation de mes compétences, projets techniques 
              et documentations dans le domaine des systèmes et réseaux.
            </p>
            <button 
              onClick={scrollToProjects}
              className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg
                        hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Voir mes projets
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Server className="w-full h-full text-orange-500" strokeWidth={1} />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;