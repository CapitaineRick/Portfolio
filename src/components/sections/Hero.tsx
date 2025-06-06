import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Cloud, Cpu, HardDrive, Wifi, Lock, Monitor, Zap, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    { 
      icon: Server, 
      label: 'Infrastructure', 
      gradient: 'from-orange-500 to-red-500',
      description: 'Administration système Windows & Linux',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Proxmox']
    },
    { 
      icon: Shield, 
      label: 'Sécurité', 
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Protection et audit des systèmes',
      technologies: ['Pare-feu', 'VPN', 'Wireshark', 'Kali Linux']
    },
    { 
      icon: Network, 
      label: 'Réseaux', 
      gradient: 'from-green-500 to-emerald-500',
      description: 'Configuration et maintenance',
      technologies: ['Cisco', 'TCP/IP', 'VLAN', 'DNS/DHCP']
    },
    { 
      icon: Terminal, 
      label: 'DevOps', 
      gradient: 'from-purple-500 to-pink-500',
      description: 'Automatisation et scripts',
      technologies: ['Bash', 'PowerShell', 'Python', 'Docker']
    },
    { 
      icon: Database, 
      label: 'Bases de données', 
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Gestion et administration',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    { 
      icon: Monitor, 
      label: 'Supervision', 
      gradient: 'from-teal-500 to-green-500',
      description: 'Monitoring et alertes',
      technologies: ['Zabbix', 'Nagios', 'Grafana', 'GLPI']
    }
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
      setActiveSkill((prev) => (prev + 1) % skills.length);
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
      {/* Background Elements Enhanced */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <Code className="w-8 h-8 text-orange-500/30" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <Database className="w-6 h-6 text-blue-500/30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <Cloud className="w-7 h-7 text-purple-500/30" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
            <Wifi className="w-5 h-5 text-green-500/30" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-16 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column - Enhanced */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-900/40 to-purple-900/40 backdrop-blur-sm border border-orange-500/30 text-orange-400 text-sm font-medium">
                <Server className="w-5 h-5" />
                BTS SIO SISR - Administrateur Systèmes & Réseaux
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-400 to-purple-600 leading-tight">
                  Fernandes Sébastien
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Étudiant passionné par l'<span className="text-orange-400 font-semibold">infrastructure IT</span> & la <span className="text-purple-400 font-semibold">cybersécurité</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl
                            hover:opacity-90 transform hover:scale-105
                            transition-all duration-300 shadow-lg hover:shadow-orange-500/25
                            flex items-center gap-3 font-medium relative overflow-hidden"
                >
                  <span className="relative z-10">Découvrir mes projets</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button 
                  onClick={scrollToContact}
                  className="group px-8 py-4 border-2 border-orange-500 text-orange-400 bg-orange-500/5
                            hover:bg-orange-500 hover:text-white rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-3 font-medium backdrop-blur-sm"
                >
                  <span>Me contacter</span>
                  <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                </button>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '2+', label: 'Années d\'études', icon: GraduationCap },
                { value: '15+', label: 'Projets réalisés', icon: Zap },
                { value: '20+', label: 'Technologies', icon: Globe },
                { value: '2', label: 'Expérience Pro', icon: Briefcase }
              ].map((stat, index) => (
                <div key={index} className="group p-6 rounded-xl bg-gray-800/60 backdrop-blur-sm shadow-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-3xl text-orange-400 group-hover:text-orange-300 transition-colors">
                      {stat.value}
                    </div>
                    <stat.icon className="w-6 h-6 text-gray-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Completely Redesigned */}
          <div className="lg:w-1/2 relative">
            {/* Background Effects */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            
            {/* Main Interactive Panel */}
            <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Domaines d'expertise</h3>
                <p className="text-gray-400">Technologies et compétences maîtrisées</p>
              </div>

              {/* Active Skill Display */}
              <div className="mb-8">
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${skills[activeSkill].gradient} bg-opacity-10 border border-white/10`}>
                  <div className="flex items-center gap-6 mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${skills[activeSkill].gradient} shadow-lg`}>
                      <skills[activeSkill].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{skills[activeSkill].label}</h4>
                      <p className="text-gray-300">{skills[activeSkill].description}</p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="grid grid-cols-2 gap-3">
                    {skills[activeSkill].technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skill Navigation */}
              <div className="grid grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSkill(index)}
                    className={`group p-4 rounded-xl transition-all duration-300 ${
                      activeSkill === index
                        ? `bg-gradient-to-br ${skill.gradient} shadow-lg scale-105`
                        : 'bg-gray-700/50 hover:bg-gray-700 hover:scale-105'
                    }`}
                  >
                    <skill.icon className={`w-6 h-6 mx-auto mb-2 ${
                      activeSkill === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    } transition-colors`} />
                    <div className={`text-xs font-medium ${
                      activeSkill === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    } transition-colors`}>
                      {skill.label}
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {skills.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSkill === index ? 'bg-orange-500 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Current Focus */}
              <div className="mt-8 p-6 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-xl border border-gray-700/50">
                <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  Objectifs 2024-2025
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    Certification cybersécurité
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    Spécialisation pentesting
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Expertise cloud computing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;