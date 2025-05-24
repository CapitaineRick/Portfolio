import React, { useEffect, useRef } from 'react';
import { Server, ArrowRight, Terminal, Shield, Database, Code } from 'lucide-react';

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
              }, index * 150);
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

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -top-8 right-1/3 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="lg:w-3/5">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium">
                Portfolio BTS SIO SISR
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                  Fernandes Sébastien
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Administrateur Systèmes & Réseaux
                </h2>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Passionné par les infrastructures IT et la cybersécurité, je me spécialise dans la conception,
                le déploiement et la sécurisation des systèmes d'information modernes.
              </p>

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
                  className="px-8 py-4 border-2 border-orange-500 text-orange-500
                            hover:bg-orange-50 dark:hover:bg-orange-900/10 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-medium"
                >
                  Me contacter
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg">
                  <div className="font-bold text-2xl text-orange-500">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Années d'études</div>
                </div>
                <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg">
                  <div className="font-bold text-2xl text-orange-500">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
                </div>
                <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg">
                  <div className="font-bold text-2xl text-orange-500">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                </div>
                <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg">
                  <div className="font-bold text-2xl text-orange-500">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Stages effectués</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="grid grid-cols-2 gap-6 p-4">
              {[
                { icon: Server, label: 'Infrastructure', gradient: 'from-orange-500 to-red-500' },
                { icon: Shield, label: 'Sécurité', gradient: 'from-blue-500 to-cyan-500' },
                { icon: Terminal, label: 'DevOps', gradient: 'from-green-500 to-emerald-500' },
                { icon: Code, label: 'Automatisation', gradient: 'from-purple-500 to-pink-500' }
              ].map((item, index) => (
                <div
                  key={index}
                  ref={el => iconRefs.current[index] = el}
                  className="relative group"
                >
                  <div className={`
                    w-full aspect-square rounded-2xl
                    bg-gradient-to-br ${item.gradient}
                    p-0.5 transition-all duration-300
                    opacity-0 scale-95 translate-y-10
                    group-hover:scale-105 cursor-pointer
                  `}>
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 p-6
                                  flex flex-col items-center justify-center gap-4">
                      <item.icon className="w-12 h-12 transition-transform duration-300
                                          group-hover:scale-110 group-hover:rotate-6" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;