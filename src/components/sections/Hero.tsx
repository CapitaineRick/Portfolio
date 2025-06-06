import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Play, Pause, RotateCcw } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const commands = [
    {
      command: 'whoami',
      output: ['sebastien@portfolio:~$ whoami', 'Sébastien Fernandes - Étudiant BTS SIO SISR', 'Passionné par l\'infrastructure et la cybersécurité', '']
    },
    {
      command: 'ls -la /skills/',
      output: [
        'sebastien@portfolio:~$ ls -la /skills/',
        'total 42',
        'drwxr-xr-x  7 sebastien sebastien 4096 Jan 15 14:30 .',
        'drwxr-xr-x  3 sebastien sebastien 4096 Jan 15 14:30 ..',
        '-rw-r--r--  1 sebastien sebastien  85% Jan 15 14:30 infrastructure.skill',
        '-rw-r--r--  1 sebastien sebastien  82% Jan 15 14:30 reseaux.skill',
        '-rw-r--r--  1 sebastien sebastien  78% Jan 15 14:30 cybersecurite.skill',
        '-rw-r--r--  1 sebastien sebastien  75% Jan 15 14:30 scripting.skill',
        '-rw-r--r--  1 sebastien sebastien  70% Jan 15 14:30 devops.skill',
        ''
      ]
    },
    {
      command: 'cat /etc/motivation.conf',
      output: [
        'sebastien@portfolio:~$ cat /etc/motivation.conf',
        '# Configuration de motivation personnelle',
        'OBJECTIF_PRINCIPAL="Devenir expert en cybersécurité"',
        'PASSION="Administration système et réseaux"',
        'APPRENTISSAGE_CONTINU=true',
        'CURIOSITE_LEVEL=maximum',
        'DETERMINATION=100%',
        ''
      ]
    },
    {
      command: 'systemctl status passion.service',
      output: [
        'sebastien@portfolio:~$ systemctl status passion.service',
        '● passion.service - Service de passion pour l\'informatique',
        '   Loaded: loaded (/etc/systemd/system/passion.service; enabled)',
        '   Active: active (running) since 2020-09-01 08:00:00 CEST; 4 years ago',
        '   Main PID: 1337 (passion-daemon)',
        '   Memory: ∞ MB',
        '   CGroup: /system.slice/passion.service',
        '           └─1337 /usr/bin/passion-daemon --mode=cybersecurity',
        ''
      ]
    },
    {
      command: 'ping -c 3 futur-emploi.com',
      output: [
        'sebastien@portfolio:~$ ping -c 3 futur-emploi.com',
        'PING futur-emploi.com (192.168.1.100): 56 data bytes',
        '64 bytes from 192.168.1.100: icmp_seq=0 time=1.337ms',
        '64 bytes from 192.168.1.100: icmp_seq=1 time=0.420ms',
        '64 bytes from 192.168.1.100: icmp_seq=2 time=0.069ms',
        '',
        '--- futur-emploi.com ping statistics ---',
        '3 packets transmitted, 3 packets received, 0.0% packet loss',
        'Connection établie avec succès! 🚀',
        ''
      ]
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
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const currentCmd = commands[commandIndex];
      
      if (!isTyping) {
        // Commencer à taper la commande
        setIsTyping(true);
        setCurrentCommand('');
        setCharIndex(0);
      } else if (charIndex < currentCmd.command.length) {
        // Continuer à taper la commande
        setCurrentCommand(currentCmd.command.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        // Commande terminée, afficher la sortie
        setTerminalLines(prev => [...prev, ...currentCmd.output]);
        setCurrentCommand('');
        setIsTyping(false);
        setCharIndex(0);
        setCommandIndex((commandIndex + 1) % commands.length);
        
        // Si on a fait tous les commands, attendre un peu avant de recommencer
        if (commandIndex === commands.length - 1) {
          setTimeout(() => {
            setTerminalLines([]);
          }, 3000);
        }
      }
    }, isTyping ? 100 : 1500);

    return () => clearInterval(interval);
  }, [commandIndex, charIndex, isTyping, isPlaying]);

  const resetTerminal = () => {
    setTerminalLines([]);
    setCurrentCommand('');
    setCommandIndex(0);
    setCharIndex(0);
    setIsTyping(false);
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

          {/* Right Column - Interactive Terminal */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400 font-mono">sebastien@portfolio</span>
                  </div>
                </div>
                
                {/* Terminal Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded hover:bg-gray-700 transition-colors"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Play className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  <button
                    onClick={resetTerminal}
                    className="p-1 rounded hover:bg-gray-700 transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 h-96 overflow-y-auto font-mono text-sm">
                <div className="space-y-1">
                  {/* Welcome Message */}
                  <div className="text-green-400 mb-4">
                    <div>Bienvenue dans mon environnement de travail!</div>
                    <div className="text-gray-500">Tapez 'help' pour voir les commandes disponibles</div>
                    <div className="text-gray-500">─────────────────────────────────────────</div>
                  </div>

                  {/* Previous Commands Output */}
                  {terminalLines.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${
                        line.startsWith('sebastien@portfolio') 
                          ? 'text-green-400' 
                          : line.includes('●') || line.includes('PING') || line.includes('64 bytes')
                            ? 'text-blue-400'
                            : line.includes('=') || line.includes('%') || line.includes('🚀')
                              ? 'text-yellow-400'
                              : line.includes('active') || line.includes('enabled') || line.includes('success')
                                ? 'text-green-400'
                                : 'text-gray-300'
                      }`}
                    >
                      {line}
                    </div>
                  ))}

                  {/* Current Command Being Typed */}
                  {isTyping && (
                    <div className="flex items-center">
                      <span className="text-green-400">sebastien@portfolio:~$ </span>
                      <span className="text-white">{currentCommand}</span>
                      <span className="animate-pulse text-white">|</span>
                    </div>
                  )}

                  {/* Cursor when waiting */}
                  {!isTyping && terminalLines.length > 0 && (
                    <div className="flex items-center">
                      <span className="text-green-400">sebastien@portfolio:~$ </span>
                      <span className="animate-pulse text-white">|</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Terminal Footer with System Info */}
              <div className="px-4 py-2 bg-gray-800 border-t border-gray-700 text-xs text-gray-400 font-mono">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <span>CPU: 🔥 Passion 100%</span>
                    <span>RAM: 💡 Créativité ∞GB</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-400">●</span>
                    <span>En ligne</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Skills Indicators */}
            <div className="absolute -top-4 -right-4 space-y-2">
              {[
                { label: 'Linux', color: 'bg-yellow-500' },
                { label: 'Network', color: 'bg-blue-500' },
                { label: 'Security', color: 'bg-red-500' }
              ].map((skill, index) => (
                <div 
                  key={skill.label}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-800/90 backdrop-blur rounded-full text-xs text-white border border-gray-600"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-2 h-2 rounded-full ${skill.color} animate-pulse`}></div>
                  <span>{skill.label}</span>
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