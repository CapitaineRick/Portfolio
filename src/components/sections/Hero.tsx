import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F4C75';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillStyle = i % 3 === 0 ? '#f97316' : i % 5 === 0 ? '#a855f7' : '#0F4C75';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
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
      {/* Matrix Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-15"
        style={{ zIndex: 1 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-orange-900/10 to-purple-900/10" style={{ zIndex: 2 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: 3 }}>
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 text-orange-400 text-sm font-medium border border-orange-500/30">
                <Server className="w-4 h-4" />
                BTS SIO SISR • Futur Expert en Cybersécurité
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                    Sébastien
                  </span>
                  <br />
                  <span className="text-white">
                    Fernandes
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
                  Administrateur Systèmes & Réseaux passionné par la cybersécurité
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Spécialisé en infrastructure IT, sécurisation des systèmes et administration réseau. 
                  En formation pour devenir expert en pentesting et audit de sécurité.
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
                  Découvrir mes réalisations
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-orange-500 text-orange-400
                            hover:bg-orange-900/20 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-medium backdrop-blur-sm"
                >
                  Opportunités pro
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700/50 hover:border-orange-500/50 transition-colors">
                <div className="font-bold text-3xl text-orange-400">2+</div>
                <div className="text-sm text-gray-400">Années BTS SIO</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700/50 hover:border-orange-500/50 transition-colors">
                <div className="font-bold text-3xl text-orange-400">20+</div>
                <div className="text-sm text-gray-400">Projets techniques</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700/50 hover:border-orange-500/50 transition-colors">
                <div className="font-bold text-3xl text-orange-400">5+</div>
                <div className="text-sm text-gray-400">Technologies maîtrisées</div>
              </div> 
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700/50 hover:border-orange-500/50 transition-colors">
                <div className="font-bold text-3xl text-orange-400">2</div>
                <div className="text-sm text-gray-400">Expériences pro</div>
              </div>
            </div>
          </div>

          {/* Right Column - Expertise Showcase */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Domaines d'expertise</h3>
                  <p className="text-gray-400">Technologies et compétences techniques</p>
                </div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: Server, 
                      label: 'Infrastructure', 
                      gradient: 'from-orange-500 to-red-500',
                      description: 'Windows Server, Linux, Virtualisation',
                      skills: ['Active Directory', 'Proxmox', 'VMware']
                    },
                    { 
                      icon: Shield, 
                      label: 'Cybersécurité', 
                      gradient: 'from-blue-500 to-cyan-500',
                      description: 'Audit, Pentesting, Sécurisation',
                      skills: ['Kali Linux', 'Wireshark', 'VPN']
                    },
                    { 
                      icon: Network, 
                      label: 'Réseaux', 
                      gradient: 'from-green-500 to-emerald-500',
                      description: 'Cisco, TCP/IP, Supervision',
                      skills: ['Routage', 'VLAN', 'Zabbix']
                    },
                    { 
                      icon: Terminal, 
                      label: 'Automatisation', 
                      gradient: 'from-purple-500 to-pink-500',
                      description: 'Scripts, DevOps, Monitoring',
                      skills: ['Bash', 'PowerShell', 'Python']
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative group transition-all duration-300 hover:scale-105"
                    >
                      <div className={`
                        w-full rounded-2xl
                        bg-gradient-to-br ${item.gradient}
                        p-0.5 transition-all duration-300
                        cursor-pointer
                      `}>
                        <div className="w-full h-full rounded-2xl bg-gray-800 p-6
                                      flex flex-col items-center justify-center gap-4
                                      border border-gray-700 hover:border-gray-600 transition-colors">
                          <item.icon className="w-10 h-10 text-white transition-transform duration-300
                                              group-hover:scale-110" />
                          <div className="text-center">
                            <div className="font-bold text-white mb-2 text-lg">
                              {item.label}
                            </div>
                            <p className="text-xs text-gray-400 mb-3 leading-tight">
                              {item.description}
                            </p>
                            <div className="space-y-1">
                              {item.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Objectifs professionnels */}
                <div className="bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-xl p-6 border border-gray-700/50">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    Objectifs de carrière
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span><strong>Court terme :</strong> Administrateur systèmes & réseaux</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span><strong>Moyen terme :</strong> Expert en cybersécurité</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span><strong>Long terme :</strong> Pentester / Consultant sécurité</span>
                    </li>
                  </ul>
                </div>

                {/* Call to action secondaire */}
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-3">
                    Recherche d'opportunités en alternance ou stage
                  </p>
                  <div className="flex justify-center gap-3">
                    <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs">
                      Disponible immédiatement
                    </span>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs">
                      Mobilité Île-de-France
                    </span>
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