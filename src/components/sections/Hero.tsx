import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Monitor, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [terminalText, setTerminalText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    'whoami',
    'sebastien@portfolio:~$ Étudiant BTS SIO SISR',
    'ls -la /skills',
    'drwxr-xr-x infrastructure cybersecurity networking',
    'cat /about/passion.txt',
    'Passionné par la sécurité et l\'administration système',
    'sudo systemctl status motivation.service',
    '● motivation.service - Always Learning',
    '   Active: active (running) since 2024',
    'ping future-employer.com',
    'PING successful - Ready for opportunities!'
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
    const typeWriter = () => {
      if (currentCommand < commands.length) {
        const command = commands[currentCommand];
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
          if (charIndex < command.length) {
            setTerminalText(prev => prev + command[charIndex]);
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setTimeout(() => {
              setTerminalText(prev => prev + '\n');
              setCurrentCommand(prev => prev + 1);
            }, 800);
          }
        }, 50);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, [currentCommand]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
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
      {/* Animated Matrix Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-orange-500/20 text-xs font-mono animate-pulse">
          {'{ "role": "sysadmin" }'}
        </div>
        <div className="absolute top-40 right-20 text-blue-500/20 text-xs font-mono animate-pulse animation-delay-2000">
          sudo systemctl start career.service
        </div>
        <div className="absolute bottom-40 left-20 text-purple-500/20 text-xs font-mono animate-pulse animation-delay-4000">
          ping -c 1 opportunity.local
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column - Main Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              {/* Glitch Effect Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-900/30 to-purple-900/30 text-orange-400 text-sm font-medium border border-orange-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 animate-pulse"></div>
                <Server className="w-4 h-4 relative z-10" />
                <span className="relative z-10">BTS SIO SISR - Administrateur Systèmes & Réseaux</span>
              </div>
              
              {/* 3D Text Effect Name */}
              <div className="relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 relative">
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 transform translate-x-1 translate-y-1 opacity-50">
                    Fernandes Sébastien
                  </span>
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                    Fernandes Sébastien
                  </span>
                </h1>
              </div>

              {/* Animated Subtitle */}
              <div className="relative">
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <span className="inline-block animate-pulse">🔐</span> Passionné par l'infrastructure IT & la cybersécurité
                </p>
              </div>

              {/* Holographic Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl
                            hover:opacity-90 transform hover:scale-105 hover:rotate-1
                            transition-all duration-300 shadow-lg hover:shadow-orange-500/25
                            flex items-center gap-2 font-medium overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Découvrir mes projets</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="group relative px-8 py-4 border-2 border-orange-500 text-orange-400
                            hover:bg-orange-900/10 rounded-xl
                            transform hover:scale-105 hover:-rotate-1 transition-all duration-300
                            flex items-center gap-2 font-medium overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Me contacter</span>
                </button>
              </div>
            </div>

            {/* Floating Stats with Parallax */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '2+', label: 'Années d\'études', delay: '0s' },
                { value: '15+', label: 'Projets réalisés', delay: '0.2s' },
                { value: '-', label: 'Certifications', delay: '0.4s' },
                { value: '2', label: 'Expériences pro', delay: '0.6s' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative p-6 rounded-xl bg-gray-800/80 backdrop-blur shadow-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:rotate-1"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="font-bold text-3xl text-orange-400 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Terminal */}
          <div className="lg:w-1/2 relative">
            {/* Holographic Frame */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
            
            <div className="relative bg-gray-900/90 backdrop-blur-lg rounded-2xl p-1 shadow-2xl border border-gray-700/50 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800 rounded-t-xl p-4 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-1000"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-2000"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-400 font-mono">sebastien@portfolio:~</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-80 overflow-hidden">
                <pre className="text-sm font-mono text-green-400 leading-relaxed whitespace-pre-wrap">
                  {terminalText}
                  {showCursor && <span className="bg-green-400 text-gray-900">█</span>}
                </pre>
              </div>

              {/* Skills Showcase */}
              <div className="p-6 border-t border-gray-700/50">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Server, label: 'Infrastructure', color: 'text-orange-500' },
                    { icon: Shield, label: 'Sécurité', color: 'text-blue-500' },
                    { icon: Network, label: 'Réseaux', color: 'text-green-500' },
                    { icon: Database, label: 'Bases de données', color: 'text-purple-500' }
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                    >
                      <skill.icon className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {skill.label}
                      </span>
                    </div>
                  ))}
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