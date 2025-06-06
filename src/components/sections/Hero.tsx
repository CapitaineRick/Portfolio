import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Users, Zap, Target, Rocket, Star, Brain, Eye, Heart, Sparkles, Crown, Trophy, Lightning, Flame } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [particleCount, setParticleCount] = useState(0);

  const dynamicTexts = [
    { text: "🔥 Futur Expert Cybersécurité", color: "from-red-400 via-orange-500 to-yellow-400" },
    { text: "⚡ Administrateur Systèmes Elite", color: "from-blue-400 via-purple-500 to-pink-400" },
    { text: "🚀 Spécialiste Infrastructure", color: "from-green-400 via-teal-500 to-blue-400" },
    { text: "🎯 Pentester en Formation", color: "from-purple-400 via-pink-500 to-red-400" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Système de particules avancé
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const colors = ['#f97316', '#a855f7', '#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'];

    function createParticle(x: number, y: number) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 100 + 50
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Créer des particules aléatoirement
      if (Math.random() < 0.3) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
      }

      // Animer les particules
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const alpha = 1 - (p.life / p.maxLife);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
      setParticleCount(particles.length);
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
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
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
        `
      }}
    >
      {/* Canvas de particules */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ zIndex: 1 }}
      />

      {/* Gradient interactif ultra-dynamique */}
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out pointer-events-none"
        style={{ 
          zIndex: 2,
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(249, 115, 22, 0.4), 
              rgba(168, 85, 247, 0.3), 
              rgba(59, 130, 246, 0.2),
              transparent 60%),
            conic-gradient(from ${mousePosition.x * 0.1}deg at 50% 50%, 
              rgba(249, 115, 22, 0.1), 
              rgba(168, 85, 247, 0.1), 
              rgba(59, 130, 246, 0.1),
              rgba(249, 115, 22, 0.1))
          `
        }} 
      />

      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 && <Sparkles className="w-4 h-4 text-yellow-400" />}
            {i % 4 === 1 && <Star className="w-3 h-3 text-purple-400" />}
            {i % 4 === 2 && <Zap className="w-3 h-3 text-blue-400" />}
            {i % 4 === 3 && <Crown className="w-4 h-4 text-orange-400" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: 3 }}>
        <div className={`transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          
          {/* Header spectaculaire avec animations */}
          <div className="text-center mb-20">
            {/* Badge d'introduction ultra-dynamique */}
            <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-orange-500/30 via-purple-500/30 to-blue-500/30 backdrop-blur-2xl border-2 border-orange-500/50 text-white text-xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-all duration-700 hover:scale-110 hover:rotate-1 mb-12 group">
              <Brain className="w-8 h-8 animate-pulse text-yellow-400 group-hover:animate-spin" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-yellow-300 to-purple-300 animate-pulse">
                ✨ Bienvenue dans l'Excellence Tech ✨
              </span>
              <Eye className="w-8 h-8 animate-bounce text-cyan-400 group-hover:animate-ping" />
            </div>

            {/* Titre principal avec effet glitch */}
            <div className="relative mb-12">
              <h1 className={`text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none transition-all duration-500 ${glitchActive ? 'animate-pulse' : ''}`}>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 hover:from-red-500 hover:via-yellow-400 hover:to-orange-600 transition-all duration-700 transform hover:scale-105 cursor-default">
                  Sébastien
                </span>
                <span className="block text-white relative transform hover:scale-105 transition-all duration-700 cursor-default">
                  Fernandes
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-orange-500 via-yellow-400 via-purple-500 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-ping"></div>
                </span>
              </h1>
              
              {/* Texte dynamique avec transitions spectaculaires */}
              <div className="h-20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse rounded-2xl"></div>
                <p className={`text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${dynamicTexts[currentText].color} transition-all duration-1000 transform ${glitchActive ? 'scale-110' : 'scale-100'} relative z-10`}>
                  {dynamicTexts[currentText].text}
                </p>
              </div>
            </div>

            {/* Description ultra-engageante */}
            <div className="relative mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
              <p className="relative text-2xl md:text-3xl text-gray-200 leading-relaxed max-w-5xl mx-auto font-medium bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                🚀 <span className="text-orange-400 font-bold">Étudiant BTS SIO SISR</span> avec une passion dévorante pour 
                <span className="text-purple-400 font-bold"> l'infrastructure IT</span> et 
                <span className="text-blue-400 font-bold"> la cybersécurité</span>.
                <br />
                <span className="text-yellow-400 font-bold">🎯 Mission :</span> Devenir un expert reconnu en pentesting et sécurité des systèmes !
              </p>
            </div>

            {/* Boutons d'action ultra-spectaculaires */}
            <div className="flex flex-wrap gap-8 justify-center mb-20">
              <button 
                onClick={scrollToProjects}
                className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-2xl
                          hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transform hover:scale-125 hover:-translate-y-4 hover:rotate-2
                          transition-all duration-500 shadow-2xl hover:shadow-orange-500/60
                          flex items-center gap-4 font-black text-xl overflow-hidden border-2 border-orange-400/50"
              >
                <Rocket className="w-8 h-8 group-hover:rotate-45 group-hover:scale-125 transition-all duration-500" />
                <span className="relative z-10">🚀 Découvrir mes Projets</span>
                <Lightning className="w-8 h-8 group-hover:-rotate-12 group-hover:scale-125 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              </button>
              
              <button 
                onClick={scrollToContact}
                className="group relative px-12 py-6 border-4 border-purple-500 text-purple-400 bg-gray-900/50
                          hover:bg-purple-500 hover:text-white hover:border-purple-400 rounded-2xl backdrop-blur-xl
                          transform hover:scale-125 hover:-translate-y-4 hover:-rotate-2 transition-all duration-500
                          flex items-center gap-4 font-black text-xl shadow-2xl hover:shadow-purple-500/60 overflow-hidden"
              >
                <Target className="w-8 h-8 group-hover:rotate-180 group-hover:scale-125 transition-all duration-500" />
                <span className="relative z-10">💼 Collaborons !</span>
                <Heart className="w-8 h-8 group-hover:scale-125 group-hover:animate-pulse transition-all duration-500 text-red-400" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              </button>
            </div>
          </div>

          {/* Grille de compétences ultra-interactive */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-20">
            {/* Compétences principales */}
            <div className="xl:col-span-3">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
                <div className="relative bg-gray-900/70 backdrop-blur-2xl rounded-3xl p-10 border-2 border-gray-700/50 hover:border-gray-600/70 transition-all duration-700">
                  <h3 className="text-4xl font-black text-white mb-8 flex items-center gap-6">
                    <Code className="w-12 h-12 text-orange-500 animate-pulse" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
                      🔥 Arsenal Technique
                    </span>
                    <Flame className="w-12 h-12 text-red-500 animate-bounce" />
                  </h3>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { 
                        icon: Server, 
                        label: '⚡ Infrastructure', 
                        color: 'from-orange-500 to-red-500',
                        skills: ['Windows Server 2025', 'Linux Ubuntu/Debian', 'Proxmox VE'],
                        emoji: '🏗️'
                      },
                      { 
                        icon: Shield, 
                        label: '🛡️ Cybersécurité', 
                        color: 'from-blue-500 to-cyan-500',
                        skills: ['Kali Linux', 'Wireshark', 'Audit Sécurité'],
                        emoji: '🔒'
                      },
                      { 
                        icon: Network, 
                        label: '🌐 Réseaux', 
                        color: 'from-green-500 to-emerald-500',
                        skills: ['Cisco Packet Tracer', 'TCP/IP', 'VLAN'],
                        emoji: '📡'
                      },
                      { 
                        icon: Terminal, 
                        label: '🤖 DevOps', 
                        color: 'from-purple-500 to-pink-500',
                        skills: ['Bash/PowerShell', 'Docker', 'Automation'],
                        emoji: '⚙️'
                      }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group/card relative p-8 rounded-2xl bg-gray-800/60 border-2 border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 hover:scale-110 hover:-translate-y-4 cursor-pointer overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover/card:opacity-20 transition-all duration-500`}></div>
                        <div className="relative z-10">
                          <div className="text-4xl mb-4 text-center">{item.emoji}</div>
                          <item.icon className={`w-16 h-16 mb-6 mx-auto transition-all duration-500 group-hover/card:scale-125 group-hover/card:rotate-12 bg-gradient-to-br ${item.color} p-3 rounded-xl text-white`} />
                          <h4 className="font-black text-white text-center mb-4 text-lg group-hover/card:text-orange-300 transition-colors">
                            {item.label}
                          </h4>
                          <div className="space-y-2">
                            {item.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="text-sm text-gray-300 text-center bg-gray-900/50 px-3 py-2 rounded-xl group-hover/card:bg-gray-700/70 group-hover/card:text-white transition-all duration-300 font-medium">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats et objectifs */}
            <div className="space-y-8">
              {/* Stats dynamiques */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-70 transition-all duration-700"></div>
                <div className="relative bg-gray-900/70 backdrop-blur-2xl rounded-3xl p-8 border-2 border-gray-700/50 hover:border-gray-600/70 transition-all duration-700">
                  <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-yellow-500 animate-bounce" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
                      📊 Achievements
                    </span>
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { value: "2+", label: "Années BTS SIO", color: "from-orange-400 to-red-500", icon: "🎓", progress: 85 },
                      { value: "25+", label: "Projets Tech", color: "from-purple-400 to-pink-500", icon: "🚀", progress: 92 },
                      { value: "15+", label: "Technologies", color: "from-blue-400 to-cyan-500", icon: "⚡", progress: 78 },
                      { value: "2", label: "Expériences Pro", color: "from-green-400 to-emerald-500", icon: "💼", progress: 100 }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className="group/stat relative p-6 rounded-2xl bg-gray-800/60 hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-700/50 hover:border-gray-600/70 overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover/stat:opacity-10 transition-all duration-500`}></div>
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="text-3xl">{stat.icon}</div>
                          <div className="flex-1">
                            <div className={`font-black text-3xl bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-1`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-300 group-hover/stat:text-white transition-colors font-medium">
                              {stat.label}
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                              <div 
                                className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                                style={{ width: `${stat.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Objectif 2025 */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
                <div className="relative bg-gray-900/70 backdrop-blur-2xl rounded-3xl p-8 border-2 border-gray-700/50 hover:border-gray-600/70 transition-all duration-700 text-center">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center justify-center gap-3">
                    <Target className="w-8 h-8 text-pink-500 animate-spin" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                      🎯 Mission 2025
                    </span>
                  </h3>
                  <p className="text-gray-200 mb-6 font-medium text-lg">
                    🔥 Décrocher une alternance en <span className="text-orange-400 font-bold">cybersécurité</span> pour devenir 
                    <span className="text-purple-400 font-bold"> expert pentester</span> !
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <span className="px-6 py-3 bg-green-900/40 text-green-300 rounded-full text-sm border-2 border-green-500/50 flex items-center gap-3 font-bold">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      ✅ Disponible Immédiatement
                    </span>
                    <span className="px-6 py-3 bg-blue-900/40 text-blue-300 rounded-full text-sm border-2 border-blue-500/50 font-bold">
                      📍 Île-de-France
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateur de scroll ultra-stylé */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4 text-gray-300 hover:text-orange-400 transition-all duration-500 cursor-pointer group">
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400 group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-500">
                ⬇️ Explorez mon univers tech ⬇️
              </span>
              <div className="relative">
                <ArrowRight className="w-8 h-8 rotate-90 animate-bounce group-hover:animate-pulse group-hover:scale-125 transition-all duration-500" />
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              </div>
              <div className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                {particleCount} particules actives
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;