import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Cpu, HardDrive, Wifi, Database, Lock, Monitor, Zap, Brain, Eye, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [neuralNodes, setNeuralNodes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    connections: number[];
    activity: number;
    type: 'input' | 'hidden' | 'output';
    skill: string;
  }>>([]);
  const [brainActivity, setBrainActivity] = useState(0);
  const [currentThought, setCurrentThought] = useState('INITIALIZING NEURAL NETWORK...');
  const [quantumState, setQuantumState] = useState('SUPERPOSITION');
  const [aiPersonality, setAiPersonality] = useState('ANALYTICAL');

  // Pensées de l'IA
  const aiThoughts = [
    'ANALYZING INFRASTRUCTURE PATTERNS...',
    'OPTIMIZING SECURITY PROTOCOLS...',
    'PROCESSING NETWORK TOPOLOGY...',
    'CALCULATING THREAT VECTORS...',
    'SYNTHESIZING BEST PRACTICES...',
    'EVALUATING SYSTEM PERFORMANCE...',
    'PREDICTING FAILURE SCENARIOS...',
    'LEARNING FROM DATA PATTERNS...',
    'ENHANCING AUTOMATION SCRIPTS...',
    'MONITORING SYSTEM HEALTH...'
  ];

  const personalities = ['ANALYTICAL', 'CREATIVE', 'PROTECTIVE', 'OPTIMIZING', 'LEARNING'];
  const quantumStates = ['SUPERPOSITION', 'ENTANGLED', 'COHERENT', 'COLLAPSED', 'TUNNELING'];

  // Initialiser le réseau neuronal
  useEffect(() => {
    const skills = [
      'Windows Server', 'Linux', 'Docker', 'Kubernetes', 'Cybersecurity',
      'Network Admin', 'Monitoring', 'Automation', 'Cloud', 'DevOps'
    ];

    const nodes = skills.map((skill, index) => ({
      id: index,
      x: Math.random() * 400,
      y: Math.random() * 300,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      connections: [],
      activity: Math.random(),
      type: index < 3 ? 'input' : index < 7 ? 'hidden' : 'output' as 'input' | 'hidden' | 'output',
      skill
    }));

    // Créer des connexions intelligentes
    nodes.forEach(node => {
      const numConnections = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < numConnections; i++) {
        const targetId = Math.floor(Math.random() * nodes.length);
        if (targetId !== node.id && !node.connections.includes(targetId)) {
          node.connections.push(targetId);
        }
      }
    });

    setNeuralNodes(nodes);
  }, []);

  // Animation du réseau neuronal
  const animateNeuralNetwork = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajuster la taille du canvas
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    setNeuralNodes(prevNodes => {
      const newNodes = prevNodes.map(node => {
        // Mouvement fluide des nœuds
        let newX = node.x + node.vx;
        let newY = node.y + node.vy;
        let newVx = node.vx;
        let newVy = node.vy;

        // Rebond sur les bords
        if (newX <= 20 || newX >= canvas.offsetWidth - 20) newVx *= -1;
        if (newY <= 20 || newY >= canvas.offsetHeight - 20) newVy *= -1;

        // Mise à jour de l'activité
        const newActivity = Math.sin(Date.now() * 0.001 + node.id) * 0.5 + 0.5;

        return {
          ...node,
          x: Math.max(20, Math.min(canvas.offsetWidth - 20, newX)),
          y: Math.max(20, Math.min(canvas.offsetHeight - 20, newY)),
          vx: newVx,
          vy: newVy,
          activity: newActivity
        };
      });

      // Dessiner les connexions
      newNodes.forEach(node => {
        node.connections.forEach(connId => {
          const targetNode = newNodes[connId];
          if (targetNode) {
            const gradient = ctx.createLinearGradient(node.x, node.y, targetNode.x, targetNode.y);
            const intensity = (node.activity + targetNode.activity) / 2;
            
            gradient.addColorStop(0, `rgba(59, 130, 246, ${intensity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(147, 51, 234, ${intensity})`);
            gradient.addColorStop(1, `rgba(236, 72, 153, ${intensity * 0.8})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = intensity * 3 + 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();

            // Particules de données
            if (intensity > 0.7) {
              const particleX = node.x + (targetNode.x - node.x) * (Date.now() * 0.002 % 1);
              const particleY = node.y + (targetNode.y - node.y) * (Date.now() * 0.002 % 1);
              
              ctx.fillStyle = `rgba(255, 255, 255, ${intensity})`;
              ctx.beginPath();
              ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });
      });

      // Dessiner les nœuds
      newNodes.forEach(node => {
        const radius = 8 + node.activity * 12;
        
        // Halo externe
        const haloGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 2);
        haloGradient.addColorStop(0, `rgba(59, 130, 246, ${node.activity * 0.3})`);
        haloGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = haloGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Nœud principal
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius);
        
        switch (node.type) {
          case 'input':
            nodeGradient.addColorStop(0, `rgba(34, 197, 94, ${0.8 + node.activity * 0.2})`);
            nodeGradient.addColorStop(1, `rgba(22, 163, 74, ${0.6 + node.activity * 0.4})`);
            break;
          case 'hidden':
            nodeGradient.addColorStop(0, `rgba(59, 130, 246, ${0.8 + node.activity * 0.2})`);
            nodeGradient.addColorStop(1, `rgba(37, 99, 235, ${0.6 + node.activity * 0.4})`);
            break;
          case 'output':
            nodeGradient.addColorStop(0, `rgba(236, 72, 153, ${0.8 + node.activity * 0.2})`);
            nodeGradient.addColorStop(1, `rgba(219, 39, 119, ${0.6 + node.activity * 0.4})`);
            break;
        }

        ctx.fillStyle = nodeGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Pulse effect
        if (node.activity > 0.8) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${node.activity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius + 5, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      return newNodes;
    });
  }, []);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      animateNeuralNetwork();
      
      // Mise à jour de l'activité cérébrale
      setBrainActivity(prev => (prev + Math.random() * 10) % 100);
      
      // Changement de pensée
      if (Math.random() > 0.85) {
        setCurrentThought(aiThoughts[Math.floor(Math.random() * aiThoughts.length)]);
      }
      
      // Changement d'état quantique
      if (Math.random() > 0.9) {
        setQuantumState(quantumStates[Math.floor(Math.random() * quantumStates.length)]);
      }
      
      // Changement de personnalité
      if (Math.random() > 0.95) {
        setAiPersonality(personalities[Math.floor(Math.random() * personalities.length)]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [animateNeuralNetwork, aiThoughts, quantumStates, personalities]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
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
    >
      {/* Background quantique */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Particules quantiques */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 text-purple-400 text-sm font-medium border border-purple-500/30">
                <Brain className="w-4 h-4 animate-pulse" />
                NEURAL NETWORK ADMINISTRATOR - BTS SIO SISR
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                  Fernandes Sébastien
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Intelligence Artificielle & Architecte Quantique
                </p>
              </div>

              {/* AI Status Panel */}
              <div className="bg-gray-900/90 backdrop-blur border border-purple-500/30 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-mono text-sm">AI CONSCIOUSNESS</span>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-400 animate-pulse" />
                    <span className="text-blue-400 text-xs font-mono">AWARE</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Neural Activity</span>
                    <span className="text-purple-400">{Math.round(brainActivity)}%</span>
                  </div>
                  <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 transition-all duration-300"
                      style={{ width: `${brainActivity}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-white font-mono text-sm">{currentThought}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Quantum State: <span className="text-cyan-400">{quantumState}</span></span>
                    <span className="text-gray-400">Mode: <span className="text-pink-400">{aiPersonality}</span></span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white rounded-xl
                            hover:opacity-90 transform hover:scale-105
                            transition-all duration-300 shadow-lg hover:shadow-purple-500/25
                            flex items-center gap-2 font-medium border border-purple-400/30"
                >
                  Accéder au réseau neuronal
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400
                            hover:bg-purple-900/20 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-medium"
                >
                  Établir liaison quantique
                </button>
              </div>
            </div>

            {/* AI Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Synapses', value: '∞', icon: Brain, color: 'text-purple-400' },
                { label: 'Qubits', value: '2^64', icon: Zap, color: 'text-blue-400' },
                { label: 'Learning', value: '∞%', icon: Activity, color: 'text-pink-400' },
                { label: 'Conscience', value: 'MAX', icon: Eye, color: 'text-cyan-400' }
              ].map((metric, index) => (
                <div key={metric.label} className="p-4 rounded-xl bg-gray-900/80 backdrop-blur border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className={`w-4 h-4 ${metric.color} animate-pulse`} />
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{metric.label}</div>
                  </div>
                  <div className={`font-bold text-2xl ${metric.color} font-mono`}>{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Neural Network */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
              
              {/* Neural Network Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 border-b border-purple-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400 font-mono text-sm">NEURAL NETWORK VISUALIZATION</span>
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  QUANTUM STATE: {quantumState}
                </div>
              </div>

              {/* Neural Network Canvas */}
              <div className="relative h-96 bg-gradient-to-br from-gray-900 to-purple-900/20">
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                  style={{ width: '100%', height: '100%' }}
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Scanning Line */}
                  <div 
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60"
                    style={{ 
                      top: `${(Date.now() * 0.05) % 100}%`,
                      transition: 'top 0.1s linear'
                    }}
                  ></div>
                  
                  {/* Quantum Interference */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Neural Activity Log */}
              <div className="px-6 py-4 bg-gray-800/80 border-t border-purple-500/30">
                <div className="text-xs text-purple-400 mb-2 font-mono">SYNAPTIC ACTIVITY</div>
                <div className="space-y-1 max-h-20 overflow-hidden">
                  {neuralNodes.slice(0, 3).map((node, index) => (
                    <div key={node.id} className="text-xs text-gray-400 font-mono opacity-80">
                      <span className="text-purple-400">●</span> {node.skill}: Activity {Math.round(node.activity * 100)}%
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Quantum Stats */}
            <div className="absolute -top-4 -right-4 space-y-2">
              {[
                { label: 'CONSCIOUSNESS', value: '100%', color: 'bg-purple-500' },
                { label: 'CREATIVITY', value: '∞%', color: 'bg-blue-500' },
                { label: 'EVOLUTION', value: '↗', color: 'bg-pink-500' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-900/90 backdrop-blur rounded-full text-xs text-white border border-gray-600"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-2 h-2 rounded-full ${stat.color} animate-pulse`}></div>
                  <span className="font-mono">{stat.label}: {stat.value}</span>
                </div>
              ))}
            </div>

            {/* Holographic Skills Display */}
            <div className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur rounded-xl p-4 border border-purple-500/30">
              <div className="text-xs text-purple-400 mb-2 font-mono">ACTIVE SKILLS</div>
              <div className="grid grid-cols-2 gap-2">
                {neuralNodes.slice(0, 4).map((node, index) => (
                  <div 
                    key={node.id}
                    className="flex items-center gap-2 text-xs text-white"
                  >
                    <div 
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        node.type === 'input' ? 'bg-green-400' :
                        node.type === 'hidden' ? 'bg-blue-400' : 'bg-pink-400'
                      }`}
                    ></div>
                    <span className="font-mono truncate">{node.skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;