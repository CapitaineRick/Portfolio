import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

      {/* Interactive Gradient Overlay */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{ 
          zIndex: 2,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(249, 115, 22, 0.1), 
            rgba(168, 85, 247, 0.05), 
            rgba(17, 24, 39, 0.9))`
        }} 
      />

      {/* Floating Elements */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: 3 }}>
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge animé */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-900/40 to-purple-900/40 backdrop-blur-md border border-orange-500/30 text-orange-400 text-sm font-medium shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
                <Server className="w-5 h-5 animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
                  BTS SIO SISR • Futur Expert en Cybersécurité
                </span>
              </div>
              
              {/* Titre avec effet de typing */}
              <div className="relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 animate-pulse">
                    Sébastien
                  </span>
                  <span className="block text-white relative">
                    Fernandes
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-in-out_1s_forwards]"></div>
                  </span>
                </h1>
                
                {/* Descriptions avec animations décalées */}
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards]">
                    Administrateur Systèmes & Réseaux passionné par la cybersécurité
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-2xl opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]">
                    Spécialisé en infrastructure IT, sécurisation des systèmes et administration réseau. 
                    En formation pour devenir expert en pentesting et audit de sécurité.
                  </p>
                </div>
              </div>

              {/* Boutons avec animations */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start opacity-0 animate-[fadeInUp_1s_ease-out_2.5s_forwards]">
                <button 
                  onClick={scrollToProjects}
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl
                            hover:from-orange-600 hover:to-purple-600 transform hover:scale-105 hover:-translate-y-1
                            transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/25
                            flex items-center gap-3 font-medium relative overflow-hidden"
                >
                  <span className="relative z-10">Découvrir mes réalisations</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button 
                  onClick={scrollToContact}
                  className="group px-8 py-4 border-2 border-orange-500 text-orange-400 bg-gray-900/50
                            hover:bg-orange-500 hover:text-white rounded-xl backdrop-blur-md
                            transform hover:scale-105 hover:-translate-y-1 transition-all duration-300
                            flex items-center gap-3 font-medium shadow-lg hover:shadow-orange-500/25"
                >
                  <span>Opportunités pro</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </button>
              </div>
            </div>

            {/* Stats Grid améliorées */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_3s_forwards]">
              {[
                { value: "2+", label: "Années BTS SIO", color: "orange" },
                { value: "20+", label: "Projets techniques", color: "purple" },
                { value: "5+", label: "Technologies maîtrisées", color: "blue" },
                { value: "2", label: "Expériences pro", color: "green" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-gray-800/60 backdrop-blur-md shadow-lg border border-gray-700/50 
                           hover:border-orange-500/50 hover:bg-gray-800/80 transition-all duration-300 
                           hover:scale-105 hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`font-bold text-3xl mb-2 bg-clip-text text-transparent bg-gradient-to-r 
                    ${stat.color === 'orange' ? 'from-orange-400 to-orange-600' : 
                      stat.color === 'purple' ? 'from-purple-400 to-purple-600' :
                      stat.color === 'blue' ? 'from-blue-400 to-blue-600' :
                      'from-green-400 to-green-600'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Expertise Showcase améliorée */}
          <div className="lg:w-1/2 relative opacity-0 animate-[fadeInRight_1s_ease-out_1s_forwards]">
            {/* Effet de glow autour de la carte */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
            
            <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
              <div className="space-y-8">
                {/* Header avec animation */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Domaines d'expertise
                  </h3>
                  <p className="text-gray-400">Technologies et compétences techniques</p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Expertise Grid avec animations staggerées */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: Server, 
                      label: 'Infrastructure', 
                      gradient: 'from-orange-500 to-red-500',
                      description: 'Windows Server, Linux, Virtualisation',
                      skills: ['Active Directory', 'Proxmox', 'VMware'],
                      delay: '0.2s'
                    },
                    { 
                      icon: Shield, 
                      label: 'Cybersécurité', 
                      gradient: 'from-blue-500 to-cyan-500',
                      description: 'Audit, Pentesting, Sécurisation',
                      skills: ['Kali Linux', 'Wireshark', 'VPN'],
                      delay: '0.4s'
                    },
                    { 
                      icon: Network, 
                      label: 'Réseaux', 
                      gradient: 'from-green-500 to-emerald-500',
                      description: 'Cisco, TCP/IP, Supervision',
                      skills: ['Routage', 'VLAN', 'Zabbix'],
                      delay: '0.6s'
                    },
                    { 
                      icon: Terminal, 
                      label: 'Automatisation', 
                      gradient: 'from-purple-500 to-pink-500',
                      description: 'Scripts, DevOps, Monitoring',
                      skills: ['Bash', 'PowerShell', 'Python'],
                      delay: '0.8s'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative group transition-all duration-500 hover:scale-110 hover:-translate-y-2 opacity-0"
                      style={{ animation: `fadeInUp 0.8s ease-out ${item.delay} forwards` }}
                    >
                      <div className={`
                        w-full rounded-2xl
                        bg-gradient-to-br ${item.gradient}
                        p-0.5 transition-all duration-300
                        cursor-pointer shadow-lg group-hover:shadow-2xl
                      `}>
                        <div className="w-full h-full rounded-2xl bg-gray-900/90 backdrop-blur-sm p-6
                                      flex flex-col items-center justify-center gap-4
                                      border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                          <item.icon className="w-10 h-10 text-white transition-all duration-300
                                              group-hover:scale-125 group-hover:rotate-6" />
                          <div className="text-center">
                            <div className="font-bold text-white mb-2 text-lg group-hover:text-orange-300 transition-colors">
                              {item.label}
                            </div>
                            <p className="text-xs text-gray-400 mb-3 leading-tight group-hover:text-gray-300 transition-colors">
                              {item.description}
                            </p>
                            <div className="space-y-1">
                              {item.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-lg
                                                                 group-hover:bg-gray-700/50 group-hover:text-gray-400 transition-all duration-300">
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

                {/* Objectifs professionnels avec design amélioré */}
                <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300">
                  <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span>Objectifs de carrière</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { term: "Court terme", goal: "Administrateur systèmes & réseaux", color: "orange" },
                      { term: "Moyen terme", goal: "Expert en cybersécurité", color: "blue" },
                      { term: "Long terme", goal: "Pentester / Consultant sécurité", color: "purple" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-4 text-sm text-gray-300 group hover:text-white transition-colors">
                        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                          item.color === 'orange' ? 'bg-orange-500' :
                          item.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                        } group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="font-medium text-gray-400">{item.term} :</span>
                        <span className="flex-1">{item.goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action avec badges animés */}
                <div className="text-center space-y-4">
                  <p className="text-sm text-gray-400 mb-4">
                    Recherche d'opportunités en alternance ou stage
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-xs border border-green-500/30 
                                   hover:bg-green-900/50 hover:scale-105 transition-all duration-300 cursor-default flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Disponible immédiatement
                    </span>
                    <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-xs border border-blue-500/30
                                   hover:bg-blue-900/50 hover:scale-105 transition-all duration-300 cursor-default">
                      Mobilité Île-de-France
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour les animations personnalisées */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;