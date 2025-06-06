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
          </div>
        </div>
      </div>

      {/* Indicateur de scroll animé - repositionné */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-3">
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