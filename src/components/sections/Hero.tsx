import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Monitor, Database, Cpu, Wifi, Lock, Zap } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    { icon: Server, text: "Administration Système", color: "#f97316" },
    { icon: Shield, text: "Cybersécurité", color: "#3b82f6" },
    { icon: Network, text: "Infrastructure Réseau", color: "#10b981" },
    { icon: Database, text: "Gestion de Données", color: "#8b5cf6" },
    { icon: Terminal, text: "Automatisation", color: "#ef4444" },
    { icon: Cpu, text: "Virtualisation", color: "#f59e0b" }
  ];

  // Système de particules avancé
  const createParticle = useCallback((x: number, y: number): Particle => {
    const colors = ['#f97316', '#3b82f6', '#10b981', '#8b5cf6', '#ef4444', '#f59e0b'];
    return {
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2
    };
  }, []);

  // Animation des particules
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Créer des particules initiales
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      initialParticles.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
    setParticles(initialParticles);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // Attraction vers la souris
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            particle.vx += dx * 0.0001;
            particle.vy += dy * 0.0001;
          }

          // Mise à jour position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Rebond sur les bords
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          // Friction
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Dessiner la particule
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Effet de glow
          ctx.shadowBlur = 10;
          ctx.shadowColor = particle.color;
          ctx.fill();
          ctx.restore();

          return particle;
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mousePos, createParticle]);

  // Suivi de la souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotation des compétences
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % skills.length);
    }, 2000);
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
      {/* Canvas pour les particules */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Grille futuriste en arrière-plan */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-orange-500/20 animate-pulse"
                style={{ animationDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: 3 }}>
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Colonne gauche - Contenu principal */}
          <div className="lg:w-1/2 space-y-8">
            {/* Badge avec effet néon */}
            <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-orange-500/50 text-orange-400 text-sm font-medium overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Server className="w-4 h-4 relative z-10 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="relative z-10">BTS SIO SISR - Futur Expert Cybersécurité</span>
            </div>
            
            {/* Nom avec effet holographique */}
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 relative">
                {/* Couches multiples pour effet 3D */}
                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 transform translate-x-2 translate-y-2 opacity-30 blur-sm">
                  Fernandes Sébastien
                </span>
                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 transform translate-x-1 translate-y-1 opacity-60">
                  Fernandes Sébastien
                </span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
                  Fernandes Sébastien
                </span>
                
                {/* Effet de scan */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] animate-pulse" 
                     style={{ animation: 'scan 3s infinite' }} />
              </h1>
            </div>

            {/* Compétence rotative avec animation */}
            <div className="relative h-16 flex items-center">
              <div className="text-xl md:text-2xl text-gray-300 flex items-center gap-4">
                <span>Spécialisé en</span>
                <div className="relative overflow-hidden h-8 w-64">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center gap-2 transition-all duration-500 ${
                        index === currentSkill 
                          ? 'translate-y-0 opacity-100' 
                          : index < currentSkill 
                            ? '-translate-y-full opacity-0' 
                            : 'translate-y-full opacity-0'
                      }`}
                    >
                      <skill.icon 
                        className="w-6 h-6" 
                        style={{ color: skill.color }}
                      />
                      <span 
                        className="font-bold"
                        style={{ color: skill.color }}
                      >
                        {skill.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Boutons avec effets avancés */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToProjects}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl
                          overflow-hidden transform transition-all duration-300 hover:scale-105
                          shadow-lg hover:shadow-orange-500/50"
              >
                {/* Effet de vague */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Particules sur hover */}
                {isHovered && (
                  <div className="absolute inset-0">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <span className="relative z-10 flex items-center gap-2 font-medium">
                  Découvrir mes projets
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              <button 
                onClick={scrollToContact}
                className="group relative px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-xl
                          overflow-hidden transform transition-all duration-300 hover:scale-105
                          hover:text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                <span className="relative z-10 flex items-center gap-2 font-medium">
                  Me contacter
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Colonne droite - Interface futuriste */}
          <div className="lg:w-1/2 relative">
            {/* Hologramme central */}
            <div className="relative w-96 h-96 mx-auto">
              {/* Cercles concentriques animés */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-8 rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: '10s' }}></div>
              
              {/* Centre avec icônes flottantes */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 flex items-center justify-center">
                <div className="relative">
                  {/* Icônes orbitales */}
                  {[
                    { icon: Server, angle: 0, radius: 60, color: '#f97316' },
                    { icon: Shield, angle: 60, radius: 60, color: '#3b82f6' },
                    { icon: Network, angle: 120, radius: 60, color: '#10b981' },
                    { icon: Database, angle: 180, radius: 60, color: '#8b5cf6' },
                    { icon: Terminal, angle: 240, radius: 60, color: '#ef4444' },
                    { icon: Cpu, angle: 300, radius: 60, color: '#f59e0b' }
                  ].map((item, index) => {
                    const radian = (item.angle * Math.PI) / 180;
                    const x = Math.cos(radian) * item.radius;
                    const y = Math.sin(radian) * item.radius;
                    
                    return (
                      <div
                        key={index}
                        className="absolute w-12 h-12 rounded-full flex items-center justify-center border-2 backdrop-blur-sm animate-pulse"
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                          borderColor: item.color,
                          backgroundColor: `${item.color}20`,
                          animationDelay: `${index * 0.5}s`
                        }}
                      >
                        <item.icon 
                          className="w-6 h-6" 
                          style={{ color: item.color }}
                        />
                      </div>
                    );
                  })}
                  
                  {/* Centre avec logo personnel */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl animate-pulse">
                    SF
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiques flottantes */}
            <div className="absolute top-0 right-0 space-y-4">
              {[
                { label: 'Uptime', value: '99.9%', color: 'text-green-400' },
                { label: 'Skills', value: '15+', color: 'text-blue-400' },
                { label: 'Projects', value: '20+', color: 'text-purple-400' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 min-w-[100px] animate-pulse"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Code matrix en arrière-plan */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-green-400 font-mono text-xs animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  {Math.random().toString(36).substring(7)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;