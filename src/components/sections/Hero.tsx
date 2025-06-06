import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network } from 'lucide-react';

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
        className="absolute inset-0 opacity-20"
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
                BTS SIO SISR - Administrateur Systèmes & Réseaux
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                    Fernandes
                  </span>
                  <br />
                  <span className="text-white">
                    Sébastien
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
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
                            hover:bg-orange-900/20 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-medium backdrop-blur-sm"
                >
                  Me contacter
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700/50">
                <div className="font-bold text-3xl text-orange-400">2+</div>
                <div className="text-sm text-gray-400">Années d'études</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700/50">
                <div className="font-bold text-3xl text-orange-400">15+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700/50">
                <div className="font-bold text-3xl text-orange-400">-</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div> 
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700/50">
                <div className="font-bold text-3xl text-orange-400">2</div>
                <div className="text-sm text-gray-400">Expériences Pro</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Showcase */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50">
              <div className="space-y-8">
                {/* Featured Skills */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: Server, 
                      label: 'Infrastructure', 
                      gradient: 'from-orange-500 to-red-500',
                      description: 'Administration système Windows & Linux'
                    },
                    { 
                      icon: Shield, 
                      label: 'Sécurité', 
                      gradient: 'from-blue-500 to-cyan-500',
                      description: 'Protection et audit des systèmes'
                    },
                    { 
                      icon: Network, 
                      label: 'Réseaux', 
                      gradient: 'from-green-500 to-emerald-500',
                      description: 'Configuration et maintenance'
                    },
                    { 
                      icon: Terminal, 
                      label: 'DevOps', 
                      gradient: 'from-purple-500 to-pink-500',
                      description: 'Automatisation et scripts'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative group transition-all duration-300"
                    >
                      <div className={`
                        w-full aspect-square rounded-2xl
                        bg-gradient-to-br ${item.gradient}
                        p-0.5 transition-all duration-300
                        group-hover:scale-105 cursor-pointer
                      `}>
                        <div className="w-full h-full rounded-2xl bg-gray-800 p-6
                                      flex flex-col items-center justify-center gap-4
                                      border border-gray-700">
                          <item.icon className="w-12 h-12 text-white transition-transform duration-300
                                              group-hover:scale-110 group-hover:rotate-6" />
                          <div className="text-center">
                            <div className="font-medium text-white mb-1">
                              {item.label}
                            </div>
                            <p className="text-xs text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current Focus */}
                <div className="bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-semibold mb-4 text-white">
                    Objectifs professionnels
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      Devenir expert en sécurité des systèmes
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      Spécialisation en pentesting
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Certification en cybersécurité
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