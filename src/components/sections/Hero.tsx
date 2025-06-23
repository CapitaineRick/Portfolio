import React, { useEffect, useRef, useState } from 'react';
import { Server, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  // Système de particules avec évitement de la souris
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
      pulse: number;
      trail: Array<{ x: number; y: number; age: number }>;
      baseVx: number;
      baseVy: number;
    }> = [];

    const colors = ['#f97316', '#a855f7', '#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'];

    // Suivi de la souris
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    function createParticle(x: number, y: number) {
      const baseVx = (Math.random() - 0.5) * 2;
      const baseVy = (Math.random() - 0.5) * 2;
      
      particles.push({
        x,
        y,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 100,
        pulse: Math.random() * Math.PI * 2,
        trail: []
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      // Effacement progressif du canvas pour créer l'effet de traînée qui s'estompe
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Créer des particules aléatoirement
      if (Math.random() < 0.3) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
      }

      // Animer les particules
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Calcul de la distance à la souris
        const dx = mousePos.current.x - p.x;
        const dy = mousePos.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const avoidanceRadius = 100; // Rayon d'évitement
        
        // Force d'évitement
        let avoidanceForceX = 0;
        let avoidanceForceY = 0;
        
        if (distance < avoidanceRadius && distance > 0) {
          const force = (avoidanceRadius - distance) / avoidanceRadius;
          const angle = Math.atan2(dy, dx);
          
          // Force qui repousse la particule de la souris
          avoidanceForceX = -Math.cos(angle) * force * 3;
          avoidanceForceY = -Math.sin(angle) * force * 3;
        }
        
        // Application des forces
        p.vx = p.baseVx + avoidanceForceX;
        p.vy = p.baseVy + avoidanceForceY;
        
        // Limitation de la vitesse
        const maxSpeed = 5;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }
        
        // Ajouter la position actuelle à la traînée
        p.trail.push({ x: p.x, y: p.y, age: 0 });
        
        // Limiter la longueur de la traînée et vieillir les points
        if (p.trail.length > 30) {
          p.trail.shift();
        }
        
        // Vieillir tous les points de la traînée
        p.trail.forEach(point => point.age++);
        
        // Mettre à jour la position
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.pulse += 0.1;

        // Rebond sur les bords
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
          p.baseVx *= -1;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.baseVy *= -1;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        // Dessiner la particule principale
        const alpha = Math.sin(p.pulse) * 0.3 + 0.7 * (1 - (p.life / p.maxLife));
        const size = p.size * (Math.sin(p.pulse * 0.5) * 0.3 + 1);
        
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Effet de lueur autour de la particule
        ctx.globalAlpha = alpha * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2, 0, Math.PI * 2);
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
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 60%),
          radial-gradient(circle at 60% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 60%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0f172a 70%, #1e293b 100%)
        `
      }}
    >
      {/* Canvas de particules */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70"
        style={{ zIndex: 1 }}
      />

      {/* Contenu principal centré */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Animation d'entrée spectaculaire */}
        <div className={`transition-all duration-2000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-20 scale-95'
        }`}>
          
          {/* Badge professionnel */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-xl border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-2xl">
            <Server className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
              <span className="hidden sm:inline">BTS SIO SISR • </span>Administrateur Systèmes & Réseaux
            </span>
          </div>
          
          {/* Titre principal spectaculaire */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-2xl">
                Fernandes
              </span>
              <span className="block text-white drop-shadow-2xl">
                Sébastien
              </span>
            </h1>
            
            {/* Sous-titre élégant */}
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto px-2">
              Passionné par l'<span className="text-orange-400 font-medium">infrastructure IT</span> & 
              la <span className="text-purple-400 font-medium">cybersécurité</span>
            </p>
          </div>

          {/* Contenu simple */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-4">
              Étudiant en BTS SIO SISR a l'IPSSI Saint Quentin, je développe mes compétences en administration système, 
              sécurité réseau et infrastructure informatique.
            </p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll animé - repositionné */}
      <div className="absolute size-height-10% bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2 sm:space-y-3">

        <button 
          onClick={scrollToAbout}
          className="group relative p-3 sm:p-4 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-xl border border-orange-500/30 text-orange-400 hover:text-orange-300 transition-all duration-500 shadow-2xl hover:shadow-orange-500/25 hover:scale-110"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
          
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