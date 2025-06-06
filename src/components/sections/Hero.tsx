import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Monitor, Database, Cpu, Wifi, Lock, Zap, Brain, Rocket, Star, Lightning } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  opacity: number;
  type: 'binary' | 'hex' | 'symbol';
  content: string;
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(0);

  const skills = [
    { icon: Server, text: "Administration Système", color: "#f97316", description: "Windows Server, Linux, VMware" },
    { icon: Shield, text: "Cybersécurité", color: "#3b82f6", description: "Pentesting, Audit, Protection" },
    { icon: Network, text: "Infrastructure Réseau", color: "#10b981", description: "Cisco, Routage, VLAN" },
    { icon: Database, text: "Gestion de Données", color: "#8b5cf6", description: "MySQL, Backup, Recovery" },
    { icon: Terminal, text: "Automatisation", color: "#ef4444", description: "Scripts, DevOps, CI/CD" },
    { icon: Cpu, text: "Virtualisation", color: "#f59e0b", description: "Proxmox, Docker, K8s" },
    { icon: Brain, text: "Intelligence Artificielle", color: "#ec4899", description: "Machine Learning, IA" },
    { icon: Rocket, text: "Innovation Tech", color: "#06b6d4", description: "Blockchain, IoT, Cloud" }
  ];

  // Système de particules ultra-avancé avec physique réaliste
  const createParticle = useCallback((x: number, y: number, type: 'explosion' | 'trail' | 'ambient' = 'ambient'): Particle => {
    const colors = ['#f97316', '#3b82f6', '#10b981', '#8b5cf6', '#ef4444', '#f59e0b', '#ec4899', '#06b6d4'];
    const maxLife = type === 'explosion' ? 60 : type === 'trail' ? 30 : 120;
    
    return {
      id: Math.random(),
      x,
      y,
      vx: type === 'explosion' ? (Math.random() - 0.5) * 8 : (Math.random() - 0.5) * 2,
      vy: type === 'explosion' ? (Math.random() - 0.5) * 8 : (Math.random() - 0.5) * 2,
      size: type === 'explosion' ? Math.random() * 4 + 2 : Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1,
      life: maxLife,
      maxLife
    };
  }, []);

  // Créer des éléments flottants (code, symboles)
  const createFloatingElement = useCallback((): FloatingElement => {
    const types = ['binary', 'hex', 'symbol'] as const;
    const type = types[Math.floor(Math.random() * types.length)];
    
    let content = '';
    switch (type) {
      case 'binary':
        content = Math.random().toString(2).substring(2, 10);
        break;
      case 'hex':
        content = '0x' + Math.random().toString(16).substring(2, 6).toUpperCase();
        break;
      case 'symbol':
        content = ['λ', 'Ω', 'Δ', '∑', '∞', '≈', '≠', '∴'][Math.floor(Math.random() * 8)];
        break;
    }

    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      rotation: 0,
      rotationSpeed: (Math.random() - 0.5) * 2,
      scale: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      type,
      content
    };
  }, []);

  // Animation Matrix Rain ultra-réaliste
  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const matrixInterval = setInterval(drawMatrix, 50);
    return () => clearInterval(matrixInterval);
  }, []);

  // Système de particules principal avec physique avancée
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Créer particules initiales
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      initialParticles.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
    setParticles(initialParticles);

    // Créer éléments flottants
    const initialElements: FloatingElement[] = [];
    for (let i = 0; i < 30; i++) {
      initialElements.push(createFloatingElement());
    }
    setFloatingElements(initialElements);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Animer les particules
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // Attraction vers la souris avec force variable
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.1;
            particle.vy += (dy / distance) * force * 0.1;
          }

          // Physique réaliste
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life--;

          // Rebonds avec amortissement
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.vx *= -0.8;
            particle.x = Math.max(0, Math.min(canvas.width, particle.x));
          }
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.vy *= -0.8;
            particle.y = Math.max(0, Math.min(canvas.height, particle.y));
          }

          // Friction et gravité
          particle.vx *= 0.995;
          particle.vy *= 0.995;
          particle.vy += 0.01; // Légère gravité

          // Calcul de l'opacité basée sur la vie
          particle.opacity = particle.life / particle.maxLife;

          // Dessiner avec effets avancés
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          
          // Gradient radial pour chaque particule
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Effet de glow intense
          ctx.shadowBlur = 20;
          ctx.shadowColor = particle.color;
          ctx.fill();
          ctx.restore();

          return particle;
        }).filter(p => p.life > 0);
      });

      // Animer les éléments flottants
      setFloatingElements(prevElements => {
        return prevElements.map(element => {
          element.x += element.vx;
          element.y += element.vy;
          element.rotation += element.rotationSpeed;

          // Rebonds
          if (element.x < -50 || element.x > canvas.width + 50) element.vx *= -1;
          if (element.y < -50 || element.y > canvas.height + 50) element.vy *= -1;

          // Dessiner les éléments
          ctx.save();
          ctx.globalAlpha = element.opacity;
          ctx.translate(element.x, element.y);
          ctx.rotate(element.rotation);
          ctx.scale(element.scale, element.scale);
          
          ctx.fillStyle = element.type === 'binary' ? '#00ff41' : 
                         element.type === 'hex' ? '#ff6b35' : '#8b5cf6';
          ctx.font = '16px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(element.content, 0, 0);
          
          ctx.restore();

          return element;
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Ajouter de nouvelles particules périodiquement
    const particleInterval = setInterval(() => {
      setParticles(prev => {
        if (prev.length < 150) {
          return [...prev, createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )];
        }
        return prev;
      });
    }, 100);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(particleInterval);
    };
  }, [mousePos, createParticle, createFloatingElement]);

  // Suivi de souris avec explosion de particules
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      
      // Créer des particules de traînée
      if (Math.random() > 0.7) {
        setParticles(prev => [
          ...prev,
          createParticle(newPos.x, newPos.y, 'trail')
        ]);
      }
      
      setMousePos(newPos);
    };

    const handleClick = (e: MouseEvent) => {
      // Explosion de particules au clic
      for (let i = 0; i < 15; i++) {
        setParticles(prev => [
          ...prev,
          createParticle(e.clientX, e.clientY, 'explosion')
        ]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [createParticle]);

  // Rotation des compétences avec effets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % skills.length);
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  // Animation du niveau d'énergie
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyLevel(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Matrix Rain Background */}
      <canvas
        ref={matrixCanvasRef}
        className="absolute inset-0 opacity-20"
        style={{ zIndex: 1 }}
      />

      {/* Particules interactives */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Grille cyber futuriste */}
      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-cyan-500/30"
                style={{ 
                  animationDelay: `${i * 10}ms`,
                  animation: `pulse 2s infinite alternate`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: 4 }}>
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Colonne gauche - Contenu principal */}
          <div className="lg:w-1/2 space-y-8">
            {/* Badge avec effet néon pulsant */}
            <div className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900/90 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 text-sm font-medium overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Server className="w-5 h-5 relative z-10" style={{ 
                animation: 'spin 3s linear infinite, glow 2s ease-in-out infinite alternate' 
              }} />
              <span className="relative z-10">BTS SIO SISR - Expert Cybersécurité du Futur</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
            </div>
            
            {/* Nom avec effet holographique ultra-avancé */}
            <div className="relative">
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 relative ${glitchEffect ? 'animate-pulse' : ''}`}>
                {/* Couches multiples pour effet 3D profond */}
                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 transform translate-x-3 translate-y-3 opacity-20 blur-sm">
                  Fernandes Sébastien
                </span>
                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 transform translate-x-2 translate-y-2 opacity-40">
                  Fernandes Sébastien
                </span>
                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-400 transform translate-x-1 translate-y-1 opacity-60">
                  Fernandes Sébastien
                </span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
                  Fernandes Sébastien
                </span>
                
                {/* Effet de scan laser */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%]" 
                     style={{ animation: 'scan 4s infinite' }} />
                
                {/* Particules autour du nom */}
                <div className="absolute inset-0">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + (i % 3) * 20}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              </h1>
            </div>

            {/* Compétence rotative avec animation ultra-fluide */}
            <div className="relative h-20 flex items-center">
              <div className="text-xl md:text-2xl text-gray-300 flex items-center gap-4">
                <span className="text-cyan-400 font-semibold">Maître en</span>
                <div className="relative overflow-hidden h-16 w-80 bg-gray-900/50 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex flex-col justify-center px-4 transition-all duration-700 ease-in-out ${
                        index === currentSkill 
                          ? 'translate-y-0 opacity-100 scale-100' 
                          : index < currentSkill 
                            ? '-translate-y-full opacity-0 scale-95' 
                            : 'translate-y-full opacity-0 scale-95'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <skill.icon 
                          className="w-6 h-6" 
                          style={{ color: skill.color }}
                        />
                        <span 
                          className="font-bold text-lg"
                          style={{ color: skill.color }}
                        >
                          {skill.text}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 ml-9">
                        {skill.description}
                      </span>
                    </div>
                  ))}
                  
                  {/* Barre de progression énergétique */}
                  <div className="absolute bottom-1 left-1 right-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-100"
                      style={{ width: `${energyLevel}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Boutons avec effets révolutionnaires */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <button 
                onClick={scrollToProjects}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-2xl
                          overflow-hidden transform transition-all duration-500 hover:scale-110 hover:rotate-1
                          shadow-2xl hover:shadow-cyan-500/50"
              >
                {/* Effet de vague électrique */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
                {/* Lightning effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Lightning
                      key={i}
                      className="absolute w-4 h-4 text-yellow-300 animate-ping"
                      style={{
                        left: `${10 + i * 15}%`,
                        top: `${10 + (i % 2) * 60}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Particules explosives sur hover */}
                {isHovered && (
                  <div className="absolute inset-0">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 50}ms`,
                          animationDuration: '0.8s'
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <span className="relative z-10 flex items-center gap-3 font-bold text-lg">
                  <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                  Découvrir mes projets
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                </span>
              </button>

              <button 
                onClick={scrollToContact}
                className="group relative px-10 py-5 border-3 border-cyan-500 text-cyan-400 rounded-2xl
                          overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-rotate-1
                          hover:text-white bg-gray-900/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                <span className="relative z-10 flex items-center gap-3 font-bold text-lg">
                  <Star className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  Me contacter
                  <Zap className="w-6 h-6 group-hover:animate-pulse" />
                </span>
              </button>
            </div>

            {/* Statistiques avec effets néon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Années d\'études', value: '2+', color: 'cyan', icon: GraduationCap },
                { label: 'Projets réalisés', value: '15+', color: 'purple', icon: Code },
                { label: 'Technologies', value: '20+', color: 'pink', icon: Cpu },
                { label: 'Certifications', value: 'En cours', color: 'green', icon: Shield }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="relative group p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10 text-center">
                    <stat.icon className={`w-6 h-6 mx-auto mb-2 text-${stat.color}-400`} />
                    <div className={`font-bold text-2xl text-${stat.color}-400 mb-1`}>{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite - Interface futuriste révolutionnaire */}
          <div className="lg:w-1/2 relative">
            {/* Hologramme central ultra-complexe */}
            <div className="relative w-96 h-96 mx-auto">
              {/* Cercles concentriques avec effets de profondeur */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/40 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
              </div>
              <div className="absolute inset-4 rounded-full border border-purple-500/40 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
              </div>
              <div className="absolute inset-8 rounded-full border border-pink-500/40 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
              </div>
              <div className="absolute inset-12 rounded-full border border-green-500/40 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
              </div>
              
              {/* Centre avec logo personnel animé */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg border-2 border-cyan-500/50 flex items-center justify-center overflow-hidden">
                <div className="relative">
                  {/* Icônes orbitales avec trajectoires complexes */}
                  {[
                    { icon: Server, angle: 0, radius: 70, color: '#f97316', speed: 1 },
                    { icon: Shield, angle: 45, radius: 70, color: '#3b82f6', speed: -1.2 },
                    { icon: Network, angle: 90, radius: 70, color: '#10b981', speed: 0.8 },
                    { icon: Database, angle: 135, radius: 70, color: '#8b5cf6', speed: -0.9 },
                    { icon: Terminal, angle: 180, radius: 70, color: '#ef4444', speed: 1.1 },
                    { icon: Cpu, angle: 225, radius: 70, color: '#f59e0b', speed: -0.7 },
                    { icon: Brain, angle: 270, radius: 70, color: '#ec4899', speed: 1.3 },
                    { icon: Rocket, angle: 315, radius: 70, color: '#06b6d4', speed: -1.4 }
                  ].map((item, index) => {
                    const time = Date.now() * 0.001;
                    const radian = ((item.angle + time * item.speed * 20) * Math.PI) / 180;
                    const x = Math.cos(radian) * item.radius;
                    const y = Math.sin(radian) * item.radius;
                    
                    return (
                      <div
                        key={index}
                        className="absolute w-14 h-14 rounded-full flex items-center justify-center border-2 backdrop-blur-sm transition-all duration-300 hover:scale-125"
                        style={{
                          left: `calc(50% + ${x}px - 28px)`,
                          top: `calc(50% + ${y}px - 28px)`,
                          borderColor: item.color,
                          backgroundColor: `${item.color}30`,
                          boxShadow: `0 0 20px ${item.color}50`,
                          animation: `pulse 2s infinite alternate`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        <item.icon 
                          className="w-7 h-7" 
                          style={{ color: item.color }}
                        />
                      </div>
                    );
                  })}
                  
                  {/* Centre avec initiales et effet holographique */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden">
                    <span className="relative z-10">SF</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400 animate-pulse opacity-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panneau de contrôle futuriste */}
            <div className="absolute top-0 right-0 space-y-3">
              {[
                { label: 'System Status', value: 'ONLINE', color: 'text-green-400', icon: '●' },
                { label: 'Security Level', value: 'MAXIMUM', color: 'text-cyan-400', icon: '🛡️' },
                { label: 'Performance', value: `${energyLevel}%`, color: 'text-purple-400', icon: '⚡' },
                { label: 'Innovation', value: 'ACTIVE', color: 'text-pink-400', icon: '🚀' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 min-w-[120px] hover:border-cyan-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs">{stat.icon}</span>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                  <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="w-full h-1 bg-gray-800 rounded-full mt-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000`}
                      style={{ width: stat.label === 'Performance' ? `${energyLevel}%` : '100%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS ultra-avancés */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%) skewX(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) skewX(-12deg); opacity: 0; }
        }
        
        @keyframes glow {
          0% { filter: drop-shadow(0 0 5px currentColor); }
          100% { filter: drop-shadow(0 0 20px currentColor); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;