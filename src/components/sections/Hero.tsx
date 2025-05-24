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

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-300/30 dark:bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 right-0 w-72 h-72 bg-blue-300/30 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium">
                <Server className="w-4 h-4" />
                BTS SIO SISR - Administrateur Systèmes & Réseaux
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                Fernandes Sébastien
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Étudiant passionné par l'infrastructure IT & la cybersécurité
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToProjects}
                  className="px-6 py-3 bg-orange-500 text-white rounded-xl
                            hover:bg-orange-600 transform hover:scale-105
                            transition-all duration-300 shadow-lg hover:shadow-orange-500/25
                            flex items-center gap-2"
                >
                  Découvrir mes projets
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-6 py-3 border-2 border-orange-500 text-orange-500
                            hover:bg-orange-50 dark:hover:bg-orange-900/10 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2"
                >
                  Me contacter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg">
                <div className="font-bold text-2xl text-orange-500">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Années d'études</div>
              </div>
              <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg">
                <div className="font-bold text-2xl text-orange-500">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
              </div>
            </div>
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