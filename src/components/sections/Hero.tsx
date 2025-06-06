import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Wifi, Zap, Lock, Monitor } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState(0);
  const [connectionProgress, setConnectionProgress] = useState(0);

  const networkNodes = [
    { 
      id: 0, 
      icon: Server, 
      label: 'Infrastructure', 
      level: 85, 
      color: 'from-orange-500 to-red-500',
      position: { x: 50, y: 20 },
      connections: [1, 2, 3]
    },
    { 
      id: 1, 
      icon: Shield, 
      label: 'Cybersécurité', 
      level: 78, 
      color: 'from-blue-500 to-cyan-500',
      position: { x: 80, y: 40 },
      connections: [0, 4, 5]
    },
    { 
      id: 2, 
      icon: Network, 
      label: 'Réseaux', 
      level: 82, 
      color: 'from-green-500 to-emerald-500',
      position: { x: 20, y: 50 },
      connections: [0, 3, 6]
    },
    { 
      id: 3, 
      icon: Terminal, 
      label: 'Scripting', 
      level: 75, 
      color: 'from-purple-500 to-pink-500',
      position: { x: 30, y: 80 },
      connections: [0, 2, 4]
    },
    { 
      id: 4, 
      icon: Code, 
      label: 'DevOps', 
      level: 70, 
      color: 'from-yellow-500 to-orange-500',
      position: { x: 70, y: 75 },
      connections: [1, 3, 5]
    },
    { 
      id: 5, 
      icon: Database, 
      label: 'Données', 
      level: 68, 
      color: 'from-indigo-500 to-purple-500',
      position: { x: 85, y: 65 },
      connections: [1, 4]
    },
    { 
      id: 6, 
      icon: Wifi, 
      label: 'Cloud', 
      level: 60, 
      color: 'from-teal-500 to-blue-500',
      position: { x: 15, y: 25 },
      connections: [2]
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % networkNodes.length);
      setConnectionProgress(0);
    }, 4000);

    const progressInterval = setInterval(() => {
      setConnectionProgress((prev) => (prev + 2) % 100);
    }, 80);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [networkNodes.length]);

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

  const currentNode = networkNodes[activeNode];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 text-orange-400 text-sm font-medium">
                <Server className="w-4 h-4" />
                BTS SIO SISR - Administrateur Systèmes & Réseaux
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                  Fernandes Sébastien
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
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
                            hover:bg-orange-900/10 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-medium"
                >
                  Me contacter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">2+</div>
                <div className="text-sm text-gray-400">Années d'études</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">15+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">7+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div> 
              <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700">
                <div className="font-bold text-3xl text-orange-400">2</div>
                <div className="text-sm text-gray-400">Expérience Pro</div>
              </div>
            </div>
          </div>

          {/* Right Column - Network Topology Visualization */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50">
              
              {/* Network Topology */}
              <div className="relative h-96 mb-8">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" className="text-gray-600">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Connections */}
                <svg className="absolute inset-0 w-full h-full">
                  {networkNodes.map(node => 
                    node.connections.map(connId => {
                      const targetNode = networkNodes.find(n => n.id === connId);
                      if (!targetNode) return null;
                      
                      const isActiveConnection = node.id === activeNode || connId === activeNode;
                      
                      return (
                        <line
                          key={`${node.id}-${connId}`}
                          x1={`${node.position.x}%`}
                          y1={`${node.position.y}%`}
                          x2={`${targetNode.position.x}%`}
                          y2={`${targetNode.position.y}%`}
                          stroke={isActiveConnection ? '#f97316' : '#374151'}
                          strokeWidth={isActiveConnection ? '3' : '1'}
                          strokeDasharray={isActiveConnection ? '5,5' : 'none'}
                          className={isActiveConnection ? 'animate-pulse' : ''}
                          opacity={isActiveConnection ? 1 : 0.3}
                        />
                      );
                    })
                  )}
                </svg>

                {/* Network Nodes */}
                {networkNodes.map((node) => {
                  const NodeIcon = node.icon;
                  const isActive = node.id === activeNode;
                  
                  return (
                    <div
                      key={node.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500"
                      style={{
                        left: `${node.position.x}%`,
                        top: `${node.position.y}%`,
                        transform: `translate(-50%, -50%) scale(${isActive ? 1.2 : 1})`
                      }}
                      onClick={() => setActiveNode(node.id)}
                    >
                      {/* Node Pulse Effect */}
                      {isActive && (
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${node.color} animate-ping opacity-75`} />
                      )}
                      
                      {/* Node */}
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${node.color} p-0.5 transition-all duration-300`}>
                        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                          <NodeIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Node Label */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                        <div className={`text-xs font-medium transition-colors duration-300 ${
                          isActive ? 'text-orange-400' : 'text-gray-400'
                        }`}>
                          {node.label}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Data Flow Animation */}
                {currentNode.connections.map((connId, index) => {
                  const targetNode = networkNodes.find(n => n.id === connId);
                  if (!targetNode) return null;
                  
                  return (
                    <div
                      key={`flow-${connId}`}
                      className="absolute w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                      style={{
                        left: `${currentNode.position.x + (targetNode.position.x - currentNode.position.x) * (connectionProgress / 100)}%`,
                        top: `${currentNode.position.y + (targetNode.position.y - currentNode.position.y) * (connectionProgress / 100)}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  );
                })}
              </div>

              {/* Active Node Info Panel */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentNode.color} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      {(() => {
                        const CurrentIcon = currentNode.icon;
                        return <CurrentIcon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{currentNode.label}</h3>
                    <p className="text-sm text-gray-400">Niveau de maîtrise</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progression</span>
                    <span>{currentNode.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${currentNode.color} transition-all duration-1000`}
                      style={{ width: `${currentNode.level}%` }}
                    />
                  </div>
                </div>

                {/* Network Status */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-400">{currentNode.connections.length}</div>
                    <div className="text-xs text-gray-400">Connexions</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">Active</div>
                    <div className="text-xs text-gray-400">Statut</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-400">
                      <Zap className="w-5 h-5 mx-auto" />
                    </div>
                    <div className="text-xs text-gray-400">En ligne</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;