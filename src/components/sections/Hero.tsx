import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Cloud, Cpu, HardDrive, Wifi, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    { 
      icon: Server, 
      label: 'Infrastructure', 
      gradient: 'from-orange-500 to-red-500',
      description: 'Administration système Windows & Linux',
      details: ['Windows Server 2019/2022', 'Ubuntu/Debian', 'Active Directory', 'Virtualisation']
    },
    { 
      icon: Shield, 
      label: 'Sécurité', 
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Protection et audit des systèmes',
      details: ['Pare-feu', 'VPN', 'Monitoring', 'Audit sécurité']
    },
    { 
      icon: Network, 
      label: 'Réseaux', 
      gradient: 'from-green-500 to-emerald-500',
      description: 'Configuration et maintenance',
      details: ['Cisco', 'VLAN', 'Routage', 'DNS/DHCP']
    },
    { 
      icon: Terminal, 
      label: 'DevOps', 
      gradient: 'from-purple-500 to-pink-500',
      description: 'Automatisation et scripts',
      details: ['Bash/PowerShell', 'Docker', 'Ansible', 'CI/CD']
    }
  ];

  const techIcons = [
    { icon: Database, delay: 0 },
    { icon: Cloud, delay: 200 },
    { icon: Cpu, delay: 400 },
    { icon: HardDrive, delay: 600 },
    { icon: Wifi, delay: 800 },
    { icon: Lock, delay: 1000 },
    { icon: Code, delay: 1200 },
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

    // Auto-rotate skills
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      clearInterval(interval);
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
                <div className="font-bold text-3xl text-orange-400">15+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div> 
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">2</div>
                <div className="text-sm text-gray-400">Expérience Pro</div>
              </div>
            </div>
          </div>

          {/* Right Column - Amélioré */}
          <div className="lg:w-1/2 relative">
            {/* Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {techIcons.map((item, index) => (
                <div
                  key={index}
                  className="absolute animate-pulse"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${item.delay}ms`,
                    animationDuration: `${2000 + Math.random() * 1000}ms`
                  }}
                >
                  <item.icon className="w-6 h-6 text-orange-500/30" />
                </div>
              ))}
            </div>

            {/* Main Card */}
            <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-purple-500/5 to-blue-500/5 animate-pulse"></div>
              
              <div className="relative space-y-8">
                {/* Interactive Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`relative group transition-all duration-500 cursor-pointer ${
                        activeSkill === index ? 'scale-105' : 'hover:scale-102'
                      }`}
                      onMouseEnter={() => setActiveSkill(index)}
                    >
                      <div className={`
                        w-full aspect-square rounded-2xl
                        bg-gradient-to-br ${skill.gradient}
                        p-0.5 transition-all duration-500
                        ${activeSkill === index ? 'shadow-2xl shadow-orange-500/25' : ''}
                      `}>
                        <div className="w-full h-full rounded-2xl bg-gray-800/90 p-4
                                      flex flex-col items-center justify-center gap-3
                                      border border-gray-700/50">
                          <skill.icon className={`w-8 h-8 text-white transition-all duration-500 ${
                            activeSkill === index ? 'scale-110 rotate-6' : ''
                          }`} />
                          <div className="text-center">
                            <div className="font-medium text-white text-sm mb-1">
                              {skill.label}
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active Skill Details */}
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    {React.createElement(skills[activeSkill].icon, {
                      className: "w-6 h-6 text-orange-500"
                    })}
                    <h3 className="text-lg font-semibold text-white">
                      {skills[activeSkill].label}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {skills[activeSkill].details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 rounded-lg p-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2">
                  {skills.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSkill(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeSkill === index 
                          ? 'bg-orange-500 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                {/* Current Focus */}
                <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    Objectifs 2024-2025
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
                      <span>Certification cybersécurité</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-6 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                      <span>Spécialisation pentesting</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-6 h-1 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
                      <span>Expertise infrastructure cloud</span>
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