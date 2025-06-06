import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Folder, File, Play, Pause, RotateCcw } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [terminalLines, setTerminalLines] = useState<Array<{
    id: number;
    text: string;
    type: 'command' | 'output' | 'error' | 'success';
    timestamp: string;
  }>>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [matrixRain, setMatrixRain] = useState<Array<{
    id: number;
    x: number;
    y: number;
    speed: number;
    char: string;
    opacity: number;
  }>>([]);
  const [fileSystem, setFileSystem] = useState({
    currentPath: '/home/sebastien',
    files: [
      { name: 'skills.txt', type: 'file', size: '2.4KB' },
      { name: 'projects/', type: 'folder', size: '15 items' },
      { name: 'certifications/', type: 'folder', size: '3 items' },
      { name: 'cv.pdf', type: 'file', size: '1.2MB' },
      { name: 'scripts/', type: 'folder', size: '8 items' }
    ]
  });

  // Commandes disponibles
  const commands = [
    'whoami',
    'ls -la',
    'cat skills.txt',
    'ps aux | grep admin',
    'netstat -tulpn',
    'systemctl status network',
    'docker ps',
    'kubectl get pods',
    'nmap -sS localhost',
    'tail -f /var/log/security.log'
  ];

  // Réponses aux commandes
  const commandResponses = {
    'whoami': 'sebastien-fernandes\n> BTS SIO SISR Student\n> System Administrator\n> Cybersecurity Enthusiast',
    'ls -la': `total 42
drwxr-xr-x  5 sebastien sebastien 4096 Mar 15 14:30 .
drwxr-xr-x  3 root      root      4096 Mar 15 14:30 ..
-rw-r--r--  1 sebastien sebastien 2458 Mar 15 14:30 skills.txt
drwxr-xr-x  2 sebastien sebastien 4096 Mar 15 14:30 projects
drwxr-xr-x  2 sebastien sebastien 4096 Mar 15 14:30 certifications
-rw-r--r--  1 sebastien sebastien 1234567 Mar 15 14:30 cv.pdf
drwxr-xr-x  2 sebastien sebastien 4096 Mar 15 14:30 scripts`,
    'cat skills.txt': `=== TECHNICAL SKILLS ===
• Windows Server 2019/2022 ⭐⭐⭐⭐
• Linux (Debian, Ubuntu, Arch) ⭐⭐⭐⭐
• Docker & Kubernetes ⭐⭐⭐
• Network Administration ⭐⭐⭐⭐
• Cybersecurity & Monitoring ⭐⭐⭐
• Scripting (Bash, PowerShell) ⭐⭐⭐
• Virtualization (Proxmox, VMware) ⭐⭐⭐⭐`,
    'ps aux | grep admin': `sebastien  1234  0.1  2.3  45678  12345 ?  S  14:30  0:01 /usr/bin/admin-daemon
sebastien  5678  0.0  1.2  23456   6789 ?  S  14:30  0:00 network-admin
sebastien  9012  0.2  3.4  67890  23456 ?  R  14:30  0:02 system-monitor`,
    'netstat -tulpn': `Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address    Foreign Address  State    PID/Program
tcp        0      0 0.0.0.0:22       0.0.0.0:*        LISTEN   1234/sshd
tcp        0      0 0.0.0.0:80       0.0.0.0:*        LISTEN   5678/apache2
tcp        0      0 0.0.0.0:443      0.0.0.0:*        LISTEN   5678/apache2`,
    'systemctl status network': `● networking.service - Raise network interfaces
   Loaded: loaded (/lib/systemd/system/networking.service; enabled)
   Active: active (exited) since Mon 2024-03-15 14:30:00 CET
   Process: 1234 ExecStart=/sbin/ifup -a --read-environment (code=exited, status=0/SUCCESS)
   Main PID: 1234 (code=exited, status=0/SUCCESS)`,
    'docker ps': `CONTAINER ID   IMAGE          COMMAND                  STATUS         PORTS                    NAMES
a1b2c3d4e5f6   nginx:latest   "/docker-entrypoint.…"   Up 2 hours     0.0.0.0:80->80/tcp      web-server
f6e5d4c3b2a1   mysql:8.0      "docker-entrypoint.s…"   Up 2 hours     3306/tcp                database`,
    'kubectl get pods': `NAME                    READY   STATUS    RESTARTS   AGE
web-app-7d4b8c9f-xyz    1/1     Running   0          2h
database-5f6g7h8i-abc   1/1     Running   0          2h
monitoring-9j0k1l2m     1/1     Running   0          1h`,
    'nmap -sS localhost': `Starting Nmap scan on localhost (127.0.0.1)
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql`,
    'tail -f /var/log/security.log': `[2024-03-15 14:30:15] INFO: User sebastien logged in successfully
[2024-03-15 14:30:20] INFO: SSH connection established from 192.168.1.100
[2024-03-15 14:30:25] INFO: Firewall rule applied: ALLOW port 443
[2024-03-15 14:30:30] INFO: System security scan completed - No threats detected`
  };

  // Initialiser la pluie Matrix
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const newRain = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 1,
      char: chars[Math.floor(Math.random() * chars.length)],
      opacity: Math.random()
    }));
    setMatrixRain(newRain);
  }, []);

  // Animation de la pluie Matrix
  useEffect(() => {
    const interval = setInterval(() => {
      setMatrixRain(prev => prev.map(drop => ({
        ...drop,
        y: (drop.y + drop.speed) % 100,
        char: Math.random() > 0.95 ? 
          'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'[Math.floor(Math.random() * 64)] : 
          drop.char,
        opacity: Math.random() * 0.8 + 0.2
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Simulation de frappe automatique
  const typeCommand = useCallback(async (command: string) => {
    setIsTyping(true);
    setCurrentCommand('');
    
    for (let i = 0; i <= command.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50));
      setCurrentCommand(command.slice(0, i));
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Ajouter la commande et sa réponse
    const timestamp = new Date().toLocaleTimeString();
    const newLines = [
      {
        id: Date.now(),
        text: `sebastien@portfolio:${fileSystem.currentPath}$ ${command}`,
        type: 'command' as const,
        timestamp
      },
      {
        id: Date.now() + 1,
        text: commandResponses[command as keyof typeof commandResponses] || 'Command not found',
        type: 'output' as const,
        timestamp
      }
    ];
    
    setTerminalLines(prev => [...prev.slice(-8), ...newLines]);
    setCurrentCommand('');
    setIsTyping(false);
  }, [fileSystem.currentPath]);

  // Exécuter des commandes automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        typeCommand(randomCommand);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTyping, typeCommand, commands]);

  // Initialiser avec une commande
  useEffect(() => {
    setTimeout(() => {
      typeCommand('whoami');
    }, 1000);
  }, [typeCommand]);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixRain.map(drop => (
          <div
            key={drop.id}
            className="absolute text-green-400 font-mono text-sm pointer-events-none select-none"
            style={{
              left: `${drop.x}%`,
              top: `${drop.y}%`,
              opacity: drop.opacity * 0.3,
              textShadow: '0 0 5px #00ff00'
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-green-400/20"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-green-900/30 text-green-400 text-sm font-mono border border-green-500/30">
                <Terminal className="w-4 h-4 animate-pulse" />
                root@matrix:~# ACCESS GRANTED
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono text-green-400" style={{ textShadow: '0 0 10px #00ff00' }}>
                  FERNANDES_SEBASTIEN.exe
                </h1>
                <p className="text-xl md:text-2xl text-green-300 font-mono">
                  &gt; SYSTEM_ADMINISTRATOR.SISR
                </p>
                <p className="text-lg text-green-500 font-mono">
                  &gt; CYBERSECURITY_SPECIALIST.init()
                </p>
              </div>

              {/* System Status */}
              <div className="bg-black/80 border border-green-500/50 rounded p-6 font-mono text-sm">
                <div className="text-green-400 mb-4">[SYSTEM STATUS]</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-300">CPU_SKILLS:</span>
                    <span className="text-green-400">████████████ 95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-300">MEMORY_KNOWLEDGE:</span>
                    <span className="text-green-400">████████████ 87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-300">NETWORK_ADMIN:</span>
                    <span className="text-green-400">████████████ 92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-300">SECURITY_LEVEL:</span>
                    <span className="text-red-400">████████████ MAX</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-green-600/20 border border-green-500 text-green-400 rounded
                            hover:bg-green-600/30 transform hover:scale-105
                            transition-all duration-300 font-mono
                            flex items-center gap-2"
                  style={{ textShadow: '0 0 5px #00ff00' }}
                >
                  ./execute_projects.sh
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 border border-green-500 text-green-400
                            hover:bg-green-900/20 rounded
                            transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2 font-mono"
                >
                  ssh contact@sebastien.dev
                </button>
              </div>
            </div>

            {/* File System Browser */}
            <div className="bg-black/90 border border-green-500/50 rounded p-4 font-mono text-sm">
              <div className="text-green-400 mb-3 flex items-center gap-2">
                <Folder className="w-4 h-4" />
                {fileSystem.currentPath}
              </div>
              <div className="space-y-1">
                {fileSystem.files.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 text-green-300 hover:text-green-400 cursor-pointer">
                    {file.type === 'folder' ? 
                      <Folder className="w-4 h-4 text-blue-400" /> : 
                      <File className="w-4 h-4 text-green-400" />
                    }
                    <span className="flex-1">{file.name}</span>
                    <span className="text-green-600 text-xs">{file.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="lg:w-1/2 relative">
            <div className="bg-black border border-green-500/50 rounded-lg shadow-2xl overflow-hidden">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-green-900/20 border-b border-green-500/30">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-green-400 font-mono text-sm">sebastien@portfolio-terminal</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs font-mono">LIVE</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div 
                ref={terminalRef}
                className="h-96 p-4 overflow-y-auto bg-black font-mono text-sm"
                style={{ 
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#00ff00 #000000'
                }}
              >
                {/* Welcome Message */}
                <div className="text-green-400 mb-4">
                  <div>Welcome to Sebastien's Portfolio Terminal v2.0</div>
                  <div>Type 'help' for available commands</div>
                  <div className="text-green-600">Last login: {new Date().toLocaleString()}</div>
                  <div>═══════════════════════════════════════════</div>
                </div>

                {/* Terminal Lines */}
                <div className="space-y-1">
                  {terminalLines.map((line) => (
                    <div key={line.id} className="animate-fadeIn">
                      {line.type === 'command' ? (
                        <div className="text-green-400">{line.text}</div>
                      ) : line.type === 'error' ? (
                        <div className="text-red-400">{line.text}</div>
                      ) : line.type === 'success' ? (
                        <div className="text-blue-400">{line.text}</div>
                      ) : (
                        <div className="text-green-300 whitespace-pre-line">{line.text}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Current Command Line */}
                <div className="flex items-center text-green-400 mt-2">
                  <span>sebastien@portfolio:{fileSystem.currentPath}$ </span>
                  <span>{currentCommand}</span>
                  <span className="animate-pulse">█</span>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-green-900/20 border-t border-green-500/30 flex justify-between items-center">
                <div className="text-green-400 font-mono text-xs">
                  Lines: {terminalLines.length} | Status: {isTyping ? 'EXECUTING' : 'READY'}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs">ONLINE</span>
                </div>
              </div>
            </div>

            {/* Floating System Info */}
            <div className="absolute -top-4 -right-4 space-y-2">
              {[
                { label: 'UPTIME', value: '24/7', color: 'bg-green-500' },
                { label: 'LOAD', value: '0.85', color: 'bg-blue-500' },
                { label: 'SECURITY', value: 'HIGH', color: 'bg-red-500' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="flex items-center gap-2 px-3 py-1 bg-black/90 border border-green-500/30 rounded text-xs text-green-400 font-mono"
                >
                  <div className={`w-2 h-2 rounded-full ${stat.color} animate-pulse`}></div>
                  <span>{stat.label}: {stat.value}</span>
                </div>
              ))}
            </div>

            {/* Matrix Code Overlay */}
            <div className="absolute -bottom-4 -left-4 bg-black/90 border border-green-500/30 rounded p-3">
              <div className="text-green-400 font-mono text-xs mb-2">MATRIX_CODE.exe</div>
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-green-400 rounded-sm animate-pulse"
                    style={{ 
                      animationDelay: `${i * 50}ms`,
                      opacity: Math.random() * 0.8 + 0.2
                    }}
                  />
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