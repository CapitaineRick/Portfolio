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
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium">
                  <Server className="w-4 h-4 mr-2" />
                  BTS SIO SISR
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="block text-gray-900 dark:text-white">Fernandes</span>
                <span className="block mt-1 text-orange-500">Sébastien</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Étudiant passionné en administration systèmes & réseaux, 
                spécialisé dans la mise en place et la sécurisation d'infrastructures IT.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToProjects}
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg
                            hover:bg-orange-600 transform hover:-translate-y-1
                            transition-all duration-300 shadow-lg hover:shadow-xl
                            flex items-center gap-2"
                >
                  Voir mes projets
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-6 py-3 border-2 border-orange-500 text-orange-500
                            rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10
                            transform hover:-translate-y-1 transition-all duration-300"
                >
                  Me contacter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-orange-500">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-orange-500">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Années d'études</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>

              {/* Main content card */}
              <div className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Compétences principales
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Server,
                      title: "Infrastructure",
                      desc: "Administration Windows Server & Linux",
                      skills: ["Active Directory", "VMware", "Proxmox"]
                    },
                    {
                      icon: Shield,
                      title: "Sécurité",
                      desc: "Protection et audit des systèmes",
                      skills: ["Pare-feu", "VPN", "Monitoring"]
                    },
                    {
                      icon: Network,
                      title: "Réseaux",
                      desc: "Configuration et maintenance",
                      skills: ["Cisco", "pfSense", "VLAN"]
                    },
                    {
                      icon: Terminal,
                      title: "Automatisation",
                      desc: "Scripts et déploiement",
                      skills: ["PowerShell", "Bash", "Python"]
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-orange-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-2 py-1 text-xs bg-orange-100/50 dark:bg-orange-900/30 
                                       text-orange-700 dark:text-orange-300 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
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