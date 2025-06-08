import React, { useEffect, useRef, useState } from 'react';
import { Server, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    life: number;
    maxLife: number;
    baseVx: number;
    baseVy: number;
  }>>([]);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  // Système de particules optimisé
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const colors = ['#f97316', '#a855f7', '#3b82f6'];
    let lastTime = 0;
    const targetFPS = 30; // Réduction du FPS pour de meilleures performances
    const frameInterval = 1000 / targetFPS;

    // Suivi de la souris optimisé avec throttling
    let mouseUpdateTimeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseUpdateTimeout);
      mouseUpdateTimeout = setTimeout(() => {
        const rect = canvas.getBoundingClientRect();
        mousePos.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }, 16); // Throttle à 60fps max
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });

    function createParticle(x: number, y: number) {
      if (particles.current.length > 30) return; // Limite le nombre de particules
      
      const baseVx = (Math.random() - 0.5) * 1.5;
      const baseVy = (Math.random() - 0.5) * 1.5;
      
      particles.current.push({
        x,
        y,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        size: Math.random() * 3 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 80 + 60,
      });
    }

    function animate(currentTime: number) {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      if (!ctx || !canvas) return;
      
      // Effacement plus efficace
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Créer des particules moins fréquemment
      if (Math.random() < 0.1 && particles.current.length < 25) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
      }

      // Animer les particules avec optimisations
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        
        // Calcul d'évitement simplifié
        const dx = mousePos.current.x - p.x;
        const dy = mousePos.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80 && distance > 0) {
          const force = (80 - distance) / 80;
          const angle = Math.atan2(dy, dx);
          p.vx = p.baseVx - Math.cos(angle) * force * 2;
          p.vy = p.baseVy - Math.sin(angle) * force * 2;
        } else {
          p.vx = p.baseVx;
          p.vy = p.baseVy;
        }
        
        // Mise à jour position
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Rebond simplifié
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

        // Rendu optimisé
        const alpha = 0.8 * (1 - (p.life / p.maxLife));
        
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Supprimer les particules mortes
        if (p.life >= p.maxLife) {
          particles.current.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseUpdateTimeout);
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
          radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
        `
      }}
    >
      {/* Canvas de particules optimisé */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ zIndex: 1 }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Badge professionnel */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 text-sm font-medium mb-8">
            <Server className="w-5 h-5" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
              BTS SIO SISR • Administrateur Systèmes & Réseaux
            </span>
          </div>
          
          {/* Titre principal */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Fernandes
              </span>
              <span className="block text-white">
                Sébastien
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
              Passionné par l'<span className="text-orange-400 font-medium">infrastructure IT</span> & 
              la <span className="text-purple-400 font-medium">cybersécurité</span>
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Étudiant en BTS SIO SISR, je développe mes compétences en administration système, 
              sécurité réseau et infrastructure informatique.
            </p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-3">
        <div className="text-gray-400 text-sm font-medium tracking-wider uppercase">
          Découvrir
        </div>
        <button 
          onClick={scrollToAbout}
          className="group p-4 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 hover:text-orange-300 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;