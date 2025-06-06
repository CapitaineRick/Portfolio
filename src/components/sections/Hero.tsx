import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  // Système de particules spectaculaire
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
    }> = [];

    const colors = ['#f97316', '#a855f7', '#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'];

    function createParticle(x: number, y: number) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 120 + 80,
        pulse: Math.random() * Math.PI * 2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Créer des particules aléatoirement
      if (Math.random() < 0.4) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
      }

      // Animer les particules
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.pulse += 0.1;

        const alpha = Math.sin(p.pulse) * 0.3 + 0.7 * (1 - (p.life / p.maxLife));
        const size = p.size * (Math.sin(p.pulse * 0.5) * 0.3 + 1);
        
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Effet de traînée
        ctx.globalAlpha = alpha * 0.3;
        ctx.beginPath();
        ctx.arc(p.x - p.vx * 3, p.y - p.vy * 3, size * 0.5, 0, Math.PI * 2);
        ctx.fill();

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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-xl border border-orange-500/30 text-orange-300 text-sm font-medium mb-8 shadow-2xl">
            <Server className="w-5 h-5" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
              BTS SIO SISR • Administrateur Systèmes & Réseaux
            </span>
          </div>
          
          {/* Titre principal spectaculaire */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-2xl">
                Fernandes
              </span>
              <span className="block text-white drop-shadow-2xl">
                Sébastien
              </span>
            </h1>
            
            {/* Sous-titre élégant */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
              Passionné par l'<span className="text-orange-400 font-medium">infrastructure IT</span> & 
              la <span className="text-purple-400 font-medium">cybersécurité</span>
            </p>
          </div>

          {/* Remplace tout le contenu en dessous par quelque chose de simple */}
          <div className="space-y-8">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Étudiant en BTS SIO SISR, je développe mes compétences en administration système, 
              sécurité réseau et infrastructure informatique.
            </p>
            
            {/* Bouton animé avec effet de mouvement */}
            <div className="relative inline-block">
              <button 
                onClick={scrollToAbout}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl font-semibold text-lg
                          transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/30
                          flex items-center gap-3 mx-auto
                          before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity before:duration-500
                          hover:before:opacity-100 hover:scale-110 hover:-translate-y-1
                          after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] after:skew-x-12 after:transition-transform after:duration-700
                          hover:after:translate-x-[100%]"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                  Découvrir mon portfolio
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                
                {/* Particules qui s'échappent au hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-300 rounded-full animate-ping"></div>
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-bounce"></div>
                </div>
              </button>
              
              {/* Effet de halo autour du bouton */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll animé */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-orange-400 hover:text-orange-300 hover:scale-110 transition-all duration-300 shadow-xl"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;