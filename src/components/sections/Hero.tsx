import React, { useEffect, useRef } from 'react';
import { Server, ArrowRight, Terminal, Shield, Database, Network } from 'lucide-react';

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
          
          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-2xl"></div>
              
              {/* Main content card */}
              <div className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Compétences techniques
                </h2>

                <div className="space-y-6">
                  {/* Infrastructure */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 dark:border-orange-800/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Server className="w-6 h-6 text-orange-500" />
                      <h3 className="font-medium text-gray-900 dark:text-white">Infrastructure</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Windows Server', 'Linux', 'VMware', 'Proxmox'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-white/50 dark:bg-gray-700/50 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sécurité */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 dark:border-blue-800/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-blue-500" />
                      <h3 className="font-medium text-gray-900 dark:text-white">Sécurité</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Pare-feu', 'VPN', 'Audit', 'Monitoring'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-white/50 dark:bg-gray-700/50 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Réseaux */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200 dark:border-green-800/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Network className="w-6 h-6 text-green-500" />
                      <h3 className="font-medium text-gray-900 dark:text-white">Réseaux</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Cisco', 'pfSense', 'VLAN', 'Routage'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-white/50 dark:bg-gray-700/50 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Automatisation */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 dark:border-purple-800/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Terminal className="w-6 h-6 text-purple-500" />
                      <h3 className="font-medium text-gray-900 dark:text-white">Automatisation</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['PowerShell', 'Bash', 'Python', 'Ansible'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-white/50 dark:bg-gray-700/50 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
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