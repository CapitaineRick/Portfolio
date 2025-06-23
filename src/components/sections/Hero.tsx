import React, { useEffect, useRef, useState } from 'react';
import { Server, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Reporter les particules jusqu'à après le LCP
    const startParticles = () => {
      setReady(true);
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(startParticles, { timeout: 1000 });
    } else {
      setTimeout(startParticles, 1000);
    }
  }, []);

  // Particules (exécutées après LCP)
  useEffect(() => {
    if (!ready) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const colors = ['#f97316', '#a855f7', '#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const createParticle = (x: number, y: number) => {
      const baseVx = (Math.random() - 0.5) * 2;
      const baseVy = (Math.random() - 0.5) * 2;
      particles.push({
        x, y, vx: baseVx, vy: baseVy, baseVx, baseVy,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 100,
        pulse: Math.random() * Math.PI * 2,
        trail: []
      });
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.3) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const dx = mousePos.current.x - p.x;
        const dy = mousePos.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const avoidanceRadius = 100;

        let avoidanceForceX = 0, avoidanceForceY = 0;
        if (distance < avoidanceRadius && distance > 0) {
          const force = (avoidanceRadius - distance) / avoidanceRadius;
          const angle = Math.atan2(dy, dx);
          avoidanceForceX = -Math.cos(angle) * force * 3;
          avoidanceForceY = -Math.sin(angle) * force * 3;
        }

        p.vx = p.baseVx + avoidanceForceX;
        p.vy = p.baseVy + avoidanceForceY;

        const maxSpeed = 5;
        const speed = Math.sqrt(p.vx ** 2 + p.vy ** 2);
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.trail.push({ x: p.x, y: p.y, age: 0 });
        if (p.trail.length > 30) p.trail.shift();
        p.trail.forEach(point => point.age++);

        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.pulse += 0.1;

        if (p.x < 0 || p.x > canvas.width) { p.vx *= -1; p.baseVx *= -1; }
        if (p.y < 0 || p.y > canvas.height) { p.vy *= -1; p.baseVy *= -1; }

        const alpha = Math.sin(p.pulse) * 0.3 + 0.7 * (1 - (p.life / p.maxLife));
        const size = p.size * (Math.sin(p.pulse * 0.5) * 0.3 + 1);

        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, size, 0, Math.PI * 2); ctx.fill();

        ctx.globalAlpha = alpha * 0.3;
        ctx.beginPath(); ctx.arc(p.x, p.y, size * 2, 0, Math.PI * 2); ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

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
  }, [ready]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 60%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
        `
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60 will-change-transform"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-fade-in-fast">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium mb-6 shadow-lg">
          <Server className="w-5 h-5" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
            BTS SIO SISR • Administrateur Systèmes & Réseaux
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-md mb-4">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Fernandes
          </span>
          <span className="block">Sébastien</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl mx-auto">
          Passionné par l'<span className="text-orange-400 font-medium">infrastructure IT</span> & la <span className="text-purple-400 font-medium">cybersécurité</span>.
        </p>

        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Étudiant en BTS SIO SISR à l’IPSSI Saint-Quentin, je développe mes compétences en administration système, sécurité réseau et infrastructure informatique.
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToAbout}
          className="group relative p-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:scale-110 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
