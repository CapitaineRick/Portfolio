import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Wifi } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    { icon: Server, label: 'Infrastructure', color: 'from-orange-500 to-red-500', description: 'Windows & Linux' },
    { icon: Shield, label: 'Sécurité', color: 'from-blue-500 to-cyan-500', description: 'Audit & Protection' },
    { icon: Network, label: 'Réseaux', color: 'from-green-500 to-emerald-500', description: 'Cisco & Config' },
    { icon: Terminal, label: 'Scripts', color: 'from-purple-500 to-pink-500', description: 'Bash & PowerShell' },
    { icon: Code, label: 'DevOps', color: 'from-yellow-500 to-orange-500', description: 'Docker & K8s' },
    { icon: Database, label: 'Données', color: 'from-indigo-500 to-purple-500', description: 'MySQL & NoSQL' },
    { icon: Wifi, label: 'Cloud', color: 'from-teal-500 to-blue-500', description: 'AWS & Azure' }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

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
                <div className="font-bold text-3xl text-orange-400">15+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">7+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div> 
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">2</div>
                <div className="text-sm text-gray-400">Expérience Pro</div>
              </div>
            </div>
          </div>

          {/* Right Column - Version Unique */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50">
              
              {/* Skill Carousel Central */}
              <div className="relative h-80 flex items-center justify-center mb-8">
                {/* Cercle central avec skill actuelle */}
                <div className="relative">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${skills[currentSkill].color} p-1 transition-all duration-500`}>
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      {(() => {
                        const CurrentIcon = skills[currentSkill].icon;
                        return <CurrentIcon className="w-12 h-12 text-white" />;
                      })()}
                    </div>
                  </div>
                  
                  {/* Label de la skill actuelle */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{skills[currentSkill].label}</h3>
                    <p className="text-sm text-gray-400">{skills[currentSkill].description}</p>
                  </div>
                </div>

                {/* Skills en orbite */}
                {skills.map((skill, index) => {
                  if (index === currentSkill) return null;
                  
                  const angle = (index * 360) / skills.length;
                  const radius = 120;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  const SkillIcon = skill.icon;
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-12 h-12 transition-all duration-500 cursor-pointer hover:scale-110"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        opacity: 0.6
                      }}
                      onClick={() => setCurrentSkill(index)}
                    >
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${skill.color} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                          <SkillIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Indicateurs de progression */}
              <div className="flex justify-center gap-2 mb-6">
                {skills.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSkill(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSkill 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Terminal simulé */}
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 ml-2">sebastien@portfolio:~$</span>
                </div>
                <div className="text-green-400">
                  <div className="mb-1">$ whoami</div>
                  <div className="text-white mb-2">Futur expert en cybersécurité</div>
                  <div className="mb-1">$ cat objectifs.txt</div>
                  <div className="text-white">
                    <div>✓ Maîtriser l'infrastructure IT</div>
                    <div>✓ Devenir expert en sécurité</div>
                    <div className="text-orange-400">→ Certification pentesting</div>
                  </div>
                  <div className="mt-2 text-green-400">
                    <span className="animate-pulse">█</span>
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