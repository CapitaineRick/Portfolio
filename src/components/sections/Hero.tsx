import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Users, Zap, Target, Rocket, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const dynamicTexts = [
    "Administrateur Systèmes & Réseaux",
    "Futur Expert en Cybersécurité", 
    "Spécialiste Infrastructure IT",
    "Passionné de Pentesting"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Matrix Rain Effect amélioré
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 12;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        
        // Couleurs variées pour plus de dynamisme
        const colors = ['#f97316', '#a855f7', '#3b82f6', '#10b981', '#ef4444'];
        ctx.fillStyle = colors[i % colors.length];
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Matrix Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
        style={{ zIndex: 1 }}
      />

      {/* Gradient interactif qui suit la souris */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
        style={{ 
          zIndex: 2,
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(249, 115, 22, 0.15), 
            rgba(168, 85, 247, 0.1), 
            rgba(59, 130, 246, 0.05),
            transparent 70%)`
        }} 
      />

      {/* Particules flottantes */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#f97316', '#a855f7', '#3b82f6', '#10b981'][i % 4],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: 3 }}>
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header central avec animation spectaculaire */}
          <div className="text-center mb-16">
            {/* Badge d'introduction animé */}
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-xl border border-orange-500/30 text-orange-400 text-lg font-medium shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 mb-8">
              <Zap className="w-6 h-6 animate-pulse text-yellow-400" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-purple-400">
                Bienvenue dans mon univers tech
              </span>
              <Star className="w-6 h-6 animate-spin text-purple-400" />
            </div>

            {/* Titre principal avec effet wow */}
            <div className="relative mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 animate-pulse">
                  Sébastien
                </span>
                <span className="block text-white relative">
                  Fernandes
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-purple-500 rounded-full animate-pulse"></div>
                </span>
              </h1>
              
              {/* Texte dynamique qui change */}
              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500">
                  {dynamicTexts[currentText]}
                </p>
              </div>
            </div>

            {/* Description captivante */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 font-medium">
              🚀 Étudiant BTS SIO SISR passionné par l'infrastructure IT et la cybersécurité. 
              <br />
              <span className="text-orange-400">En quête d'excellence technique</span> et 
              <span className="text-purple-400"> d'innovation constante</span>.
            </p>

            {/* Boutons d'action spectaculaires */}
            <div className="flex flex-wrap gap-6 justify-center mb-16">
              <button 
                onClick={scrollToProjects}
                className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-2xl
                          hover:from-orange-600 hover:to-purple-600 transform hover:scale-110 hover:-translate-y-2
                          transition-all duration-300 shadow-2xl hover:shadow-orange-500/50
                          flex items-center gap-4 font-bold text-lg overflow-hidden"
              >
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explorer mes projets</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={scrollToContact}
                className="group relative px-10 py-5 border-3 border-orange-500 text-orange-400 bg-gray-900/50
                          hover:bg-orange-500 hover:text-white rounded-2xl backdrop-blur-xl
                          transform hover:scale-110 hover:-translate-y-2 transition-all duration-300
                          flex items-center gap-4 font-bold text-lg shadow-2xl hover:shadow-orange-500/50"
              >
                <Target className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                <span>Collaborons ensemble</span>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>

          {/* Grille de compétences interactive */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Expertise technique */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <Code className="w-8 h-8 text-orange-500" />
                    <span>Expertise Technique</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Server, label: 'Infrastructure', color: 'orange', skills: ['Windows Server', 'Linux', 'Virtualisation'] },
                      { icon: Shield, label: 'Cybersécurité', color: 'blue', skills: ['Pentesting', 'Audit', 'Sécurisation'] },
                      { icon: Network, label: 'Réseaux', color: 'green', skills: ['Cisco', 'TCP/IP', 'VLAN'] },
                      { icon: Terminal, label: 'DevOps', color: 'purple', skills: ['Scripts', 'Automation', 'Monitoring'] }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group/card relative p-6 rounded-2xl bg-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                      >
                        <item.icon className={`w-12 h-12 mb-4 mx-auto transition-all duration-300 group-hover/card:scale-125 group-hover/card:rotate-6 ${
                          item.color === 'orange' ? 'text-orange-500' :
                          item.color === 'blue' ? 'text-blue-500' :
                          item.color === 'green' ? 'text-green-500' : 'text-purple-500'
                        }`} />
                        <h4 className="font-bold text-white text-center mb-3 group-hover/card:text-orange-300 transition-colors">
                          {item.label}
                        </h4>
                        <div className="space-y-1">
                          {item.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="text-xs text-gray-400 text-center bg-gray-800/50 px-2 py-1 rounded-lg group-hover/card:bg-gray-700/50 group-hover/card:text-gray-300 transition-all duration-300">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats impressionnantes */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Database className="w-7 h-7 text-blue-500" />
                    <span>En chiffres</span>
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { value: "2+", label: "Années BTS SIO", color: "orange", icon: "🎓" },
                      { value: "20+", label: "Projets réalisés", color: "purple", icon: "🚀" },
                      { value: "10+", label: "Technologies", color: "blue", icon: "⚡" },
                      { value: "2", label: "Expériences pro", color: "green", icon: "💼" }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className="group/stat flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <div className="text-2xl">{stat.icon}</div>
                        <div className="flex-1">
                          <div className={`font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r ${
                            stat.color === 'orange' ? 'from-orange-400 to-orange-600' :
                            stat.color === 'purple' ? 'from-purple-400 to-purple-600' :
                            stat.color === 'blue' ? 'from-blue-400 to-blue-600' :
                            'from-green-400 to-green-600'
                          }`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-400 group-hover/stat:text-gray-300 transition-colors">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">🎯 Objectif 2025</h3>
                  <p className="text-gray-300 mb-6">
                    Décrocher une alternance en cybersécurité pour devenir expert en pentesting
                  </p>
                  <div className="flex justify-center gap-3">
                    <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm border border-green-500/30 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Disponible
                    </span>
                    <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      Île-de-France
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator animé */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer animate-bounce">
              <span className="text-sm font-medium">Découvrir la suite</span>
              <ArrowRight className="w-5 h-5 rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;