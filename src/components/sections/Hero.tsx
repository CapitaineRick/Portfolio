import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  // Fonction pour assombrir une couleur hexadécimale
  const darkenColor = (color: string, factor: number = 0.3): string => {
    // Convertir la couleur hex en RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Assombrir chaque composante
    const darkR = Math.floor(r * factor);
    const darkG = Math.floor(g * factor);
    const darkB = Math.floor(b * factor);
    
    // Reconvertir en hex
    return `#${darkR.toString(16).padStart(2, '0')}${darkG.toString(16).padStart(2, '0')}${darkB.toString(16).padStart(2, '0')}`;
  };

  // Système de particules avec traînées qui s'effacent
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
      darkColor: string;
      life: number;
      maxLife: number;
      pulse: number;
      trail: Array<{ x: number; y: number; age: number }>;
    }> = [];

    const colors = ['#f97316', '#a855f7', '#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'];

    function createParticle(x: number, y: number) {
      const baseColor = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: Math.random() * 5 + 3,
        color: baseColor,
        darkColor: darkenColor(baseColor, 0.3), // Version plus foncée pour la traînée
        life: 0,
        maxLife: Math.random() * 150 + 100,
        pulse: Math.random() * Math.PI * 2,
        trail: []
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      // Effacement progressif du canvas pour créer l'effet de traînée qui s'estompe
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Créer des particules aléatoirement
      if (Math.random() < 0.4) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
      }

      // Animer les particules
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Ajouter la position actuelle à la traînée
        p.trail.push({ x: p.x, y: p.y, age: 0 });
        
        // Limiter la longueur de la traînée et vieillir les points
        if (p.trail.length > 20) {
          p.trail.shift();
        }
        
        // Vieillir tous les points de la traînée
        p.trail.forEach(point => point.age++);
        
        // Mettre à jour la position
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.pulse += 0.1;

        // Dessiner la traînée avec la couleur plus foncée
        for (let j = 0; j < p.trail.length; j++) {
          const trailPoint = p.trail[j];
          const trailAlpha = (1 - (trailPoint.age / 20)) * (1 - (p.life / p.maxLife)) * 0.8;
          const trailSize = p.size * (1 - (trailPoint.age / 20)) * 0.6;
          
          if (trailAlpha > 0.02) {
            ctx.globalAlpha = trailAlpha;
            ctx.fillStyle = p.darkColor; // Utiliser la couleur plus foncée pour la traînée
            ctx.beginPath();
            ctx.arc(trailPoint.x, trailPoint.y, trailSize, 0, Math.PI * 2);
            ctx.fill();
            
            // Ajouter un effet de lueur pour la traînée
            ctx.globalAlpha = trailAlpha * 0.3;
            ctx.fillStyle = p.darkColor;
            ctx.beginPath();
            ctx.arc(trailPoint.x, trailPoint.y, trailSize * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Dessiner la particule principale avec la couleur originale
        const alpha = Math.sin(p.pulse) * 0.3 + 0.8 * (1 - (p.life / p.maxLife));
        const size = p.size * (Math.sin(p.pulse * 0.5) * 0.3 + 1);
        
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color; // Couleur originale pour la particule principale
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Effet de lueur autour de la particule avec la couleur originale
        ctx.globalAlpha = alpha * 0.4;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Supprimer les particules mortes
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
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

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Canvas de particules */}
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
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-100 translate-y-0"
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

      {/* Indicateur de scroll animé */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-3">
        <div className="text-gray-400 text-sm font-medium tracking-wider uppercase">
          Découvrir
        </div>
        <button 
          onClick={scrollToAbout}
          className="group relative p-4 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-xl border border-orange-500/30 text-orange-400 hover:text-orange-300 transition-all duration-500 shadow-2xl hover:shadow-orange-500/25 hover:scale-110"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
          
          {/* Effet de halo */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          {/* Cercles animés */}
          <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border border-purple-500/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;