import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Cpu, HardDrive, Wifi, Database, Lock, Monitor, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [scanningProgress, setScanningProgress] = useState(0);
  const [systemStatus, setSystemStatus] = useState('INITIALIZING');
  const [networkActivity, setNetworkActivity] = useState<Array<{id: number, from: number, to: number, type: string}>>([]);

  // Données des nœuds du datacenter
  const datacenterNodes = [
    { id: 1, name: 'Windows Server', icon: Server, x: 20, y: 30, status: 'active', load: 85, type: 'server' },
    { id: 2, name: 'Linux Ubuntu', icon: Terminal, x: 80, y: 25, status: 'active', load: 72, type: 'server' },
    { id: 3, name: 'Firewall', icon: Shield, x: 50, y: 15, status: 'secure', load: 45, type: 'security' },
    { id: 4, name: 'Switch Core', icon: Network, x: 50, y: 50, status: 'active', load: 90, type: 'network' },
    { id: 5, name: 'Database', icon: Database, x: 25, y: 70, status: 'active', load: 68, type: 'storage' },
    { id: 6, name: 'Monitoring', icon: Monitor, x: 75, y: 65, status: 'scanning', load: 55, type: 'monitoring' },
    { id: 7, name: 'Backup', icon: HardDrive, x: 15, y: 55, status: 'backup', load: 30, type: 'storage' },
    { id: 8, name: 'VPN Gateway', icon: Lock, x: 85, y: 45, status: 'secure', load: 40, type: 'security' }
  ];

  // Connexions réseau entre les nœuds
  const connections = [
    { from: 3, to: 4, type: 'secure' },
    { from: 4, to: 1, type: 'data' },
    { from: 4, to: 2, type: 'data' },
    { from: 4, to: 5, type: 'database' },
    { from: 4, to: 6, type: 'monitoring' },
    { from: 4, to: 7, type: 'backup' },
    { from: 4, to: 8, type: 'vpn' },
    { from: 1, to: 5, type: 'database' },
    { from: 2, to: 5, type: 'database' }
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

  // Animation du scanning et des activités réseau
  useEffect(() => {
    const interval = setInterval(() => {
      setScanningProgress(prev => (prev + 1) % 100);
      
      // Changer le statut système
      const statuses = ['SCANNING NETWORK', 'MONITORING TRAFFIC', 'ANALYZING SECURITY', 'OPTIMIZING PERFORMANCE'];
      setSystemStatus(statuses[Math.floor(Date.now() / 3000) % statuses.length]);

      // Générer activité réseau aléatoire
      if (Math.random() > 0.7) {
        const connection = connections[Math.floor(Math.random() * connections.length)];
        const activity = {
          id: Date.now(),
          from: connection.from,
          to: connection.to,
          type: connection.type
        };
        setNetworkActivity(prev => [...prev.slice(-5), activity]);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (node: any) => {
    switch (node.status) {
      case 'active': return 'from-green-400 to-emerald-600';
      case 'secure': return 'from-blue-400 to-cyan-600';
      case 'scanning': return 'from-orange-400 to-yellow-600';
      case 'backup': return 'from-purple-400 to-violet-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getConnectionColor = (type: string) => {
    switch (type) {
      case 'secure': return 'stroke-blue-400';
      case 'data': return 'stroke-green-400';
      case 'database': return 'stroke-purple-400';
      case 'monitoring': return 'stroke-orange-400';
      case 'backup': return 'stroke-violet-400';
      case 'vpn': return 'stroke-cyan-400';
      default: return 'stroke-gray-400';
    }
  };

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
      {/* Background avec effet holographique */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.1)_60deg,transparent_120deg)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium border border-blue-500/30">
                <Zap className="w-4 h-4 animate-pulse" />
                DATACENTER ADMINISTRATOR - BTS SIO SISR
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                  Fernandes Sébastien
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Architecte d'infrastructures & Expert en cybersécurité
                </p>
              </div>

              {/* Status Panel */}
              <div className="bg-gray-900/80 backdrop-blur border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 font-mono text-sm">SYSTEM STATUS</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-mono">ONLINE</span>
                  </div>
                </div>
                <div className="text-white font-mono text-lg">{systemStatus}</div>
                <div className="mt-2 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                    style={{ width: `${scanningProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl
                            hover:opacity-90 transform hover:scale-105
                            transition-all duration-300 shadow-lg hover:shadow-blue-500/25
                            flex items-center gap-2 font-medium border border-blue-400/30"
                >
                  Explorer l'infrastructure
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400
                            hover:bg-blue-900/20 rounded-xl
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-medium"
                >
                  Établir connexion
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Serveurs', value: '8+', icon: Server, color: 'text-green-400' },
                { label: 'Uptime', value: '99.9%', icon: Zap, color: 'text-blue-400' },
                { label: 'Sécurité', value: 'MAX', icon: Shield, color: 'text-purple-400' },
                { label: 'Projets', value: '15+', icon: Database, color: 'text-cyan-400' }
              ].map((metric, index) => (
                <div key={metric.label} className="p-4 rounded-xl bg-gray-900/80 backdrop-blur border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className={`w-4 h-4 ${metric.color}`} />
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{metric.label}</div>
                  </div>
                  <div className={`font-bold text-2xl ${metric.color}`}>{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 3D Datacenter */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-500/30 overflow-hidden">
              
              {/* Datacenter Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 border-b border-blue-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 font-mono text-sm">DATACENTER OVERVIEW</span>
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>

              {/* 3D Datacenter Visualization */}
              <div className="relative h-96 p-6 bg-gradient-to-br from-gray-900 to-blue-900/20">
                
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-400" />
                  </svg>
                </div>

                {/* Connexions réseau */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {connections.map((conn, index) => {
                    const fromNode = datacenterNodes.find(n => n.id === conn.from);
                    const toNode = datacenterNodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;

                    const x1 = (fromNode.x / 100) * 100;
                    const y1 = (fromNode.y / 100) * 100;
                    const x2 = (toNode.x / 100) * 100;
                    const y2 = (toNode.y / 100) * 100;

                    return (
                      <g key={index}>
                        <line
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          className={`${getConnectionColor(conn.type)} opacity-60`}
                          strokeWidth="2"
                          strokeDasharray="5,5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;10"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </line>
                      </g>
                    );
                  })}
                </svg>

                {/* Nœuds du datacenter */}
                {datacenterNodes.map((node, index) => (
                  <div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ 
                      left: `${node.x}%`, 
                      top: `${node.y}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Node Glow Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getNodeColor(node)} opacity-30 blur-lg scale-150 animate-pulse`}></div>
                    
                    {/* Node Core */}
                    <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${getNodeColor(node)} p-0.5 transition-all duration-300 group-hover:scale-125`}>
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <node.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Load Indicator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getNodeColor(node)} transition-all duration-1000`}
                          style={{ width: `${node.load}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Node Info Tooltip */}
                    {activeNode === node.id && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 border border-blue-500/30 rounded-lg text-xs text-white whitespace-nowrap z-10">
                        <div className="font-semibold">{node.name}</div>
                        <div className="text-gray-400">Load: {node.load}%</div>
                        <div className="text-gray-400">Type: {node.type}</div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Scanning Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div 
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"
                    style={{ 
                      top: `${(scanningProgress / 100) * 100}%`,
                      transition: 'top 0.1s linear'
                    }}
                  ></div>
                </div>
              </div>

              {/* Network Activity Log */}
              <div className="px-6 py-4 bg-gray-800/80 border-t border-blue-500/30">
                <div className="text-xs text-blue-400 mb-2 font-mono">NETWORK ACTIVITY</div>
                <div className="space-y-1 max-h-20 overflow-hidden">
                  {networkActivity.slice(-3).map((activity, index) => (
                    <div key={activity.id} className="text-xs text-gray-400 font-mono opacity-80">
                      <span className="text-green-400">●</span> {activity.type.toUpperCase()} transfer: Node{activity.from} → Node{activity.to}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating System Stats */}
            <div className="absolute -top-4 -right-4 space-y-2">
              {[
                { label: 'CPU', value: '85%', color: 'bg-green-500' },
                { label: 'RAM', value: '72%', color: 'bg-blue-500' },
                { label: 'NET', value: '90%', color: 'bg-purple-500' }
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;