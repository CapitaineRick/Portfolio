import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Award, Target, TrendingUp, CheckCircle, Zap, Clock, Users, Star, Download, Eye, MessageCircle, Calendar, Briefcase, Trophy, Rocket, Heart, AlertTriangle, Timer, Flame } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState(86400); // 24h en secondes

  const highlights = [
    { 
      icon: Trophy, 
      text: "VALIDÉ EN ENTREPRISE", 
      subtext: "Stage réussi chez KNDS",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      icon: Zap, 
      text: "OPÉRATIONNEL J+1", 
      subtext: "Pas de formation nécessaire",
      color: "from-green-400 to-emerald-500"
    },
    { 
      icon: Flame, 
      text: "PASSION DÉVORANTE", 
      subtext: "Cybersécurité 24/7",
      color: "from-red-400 to-pink-500"
    },
    { 
      icon: Rocket, 
      text: "15+ PROJETS CONCRETS", 
      subtext: "Portfolio technique solide",
      color: "from-blue-400 to-purple-500"
    }
  ];

  const urgencyMessages = [
    "🚨 PROFIL EXCEPTIONNEL DÉTECTÉ",
    "⚡ DISPONIBLE IMMÉDIATEMENT",
    "🎯 DÉJÀ FORMÉ AUX OUTILS PRO",
    "💎 MOTIVATION HORS NORMES"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentHighlight((prev) => (prev + 1) % highlights.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, highlights.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 86400));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900"
    >
      {/* Cursor follower effect */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div 
          ref={heroRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* MEGA Urgency Banner */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur animate-pulse"></div>
              <div className="relative bg-red-900/90 backdrop-blur-xl border-2 border-red-500 rounded-2xl px-8 py-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400 animate-bounce" />
                  <span className="text-2xl md:text-3xl font-black text-red-400 tracking-wider">
                    ALERTE TALENT RARE
                  </span>
                  <AlertTriangle className="w-8 h-8 text-red-400 animate-bounce" />
                </div>
                <div className="flex items-center justify-center gap-6 text-white">
                  <Timer className="w-6 h-6 text-orange-400" />
                  <span className="text-xl font-bold">Candidature active encore</span>
                  <div className="bg-black/50 px-4 py-2 rounded-lg font-mono text-2xl text-orange-400">
                    {formatTime(timeLeft)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic highlight showcase */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-12">
              <div className={`absolute -inset-6 bg-gradient-to-r ${highlights[currentHighlight].color} rounded-3xl blur-xl opacity-60 animate-pulse`}></div>
              <div className="relative bg-gray-900/95 backdrop-blur-2xl rounded-3xl p-8 border-2 border-gray-700/50">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  {(() => {
                    const IconComponent = highlights[currentHighlight].icon;
                    return <IconComponent className="w-16 h-16 text-white animate-pulse" />;
                  })()}
                  <div className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">
                      {highlights[currentHighlight].text}
                    </div>
                    <div className="text-xl text-gray-300">
                      {highlights[currentHighlight].subtext}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MASSIVE Name Impact */}
          <div className="text-center mb-16">
            <div className="relative">
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-none mb-8">
                <div className="relative inline-block">
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 blur-sm animate-pulse">
                    SÉBASTIEN
                  </span>
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
                    SÉBASTIEN
                  </span>
                </div>
                <br />
                <span className="text-white drop-shadow-2xl animate-pulse">FERNANDES</span>
              </h1>
            </div>

            {/* Power tagline */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                LE <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">DIAMANT BRUT</span>
                <br />
                QUE VOUS CHERCHEZ
              </h2>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-10 border border-gray-700/50">
                  <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8 font-bold">
                    <span className="text-orange-400">Étudiant BTS SIO SISR</span> avec validation terrain en entreprise.
                    <br />
                    <span className="text-purple-400">Prêt à transformer votre infrastructure IT</span> dès le premier jour.
                  </p>
                  
                  {/* Urgency grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {urgencyMessages.map((message, index) => (
                      <div 
                        key={index}
                        className="relative group/item"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-50 group-hover/item:opacity-100 transition duration-300"></div>
                        <div className="relative flex items-center gap-4 p-6 bg-gray-800/80 backdrop-blur-xl rounded-xl border border-gray-700/50">
                          <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                          <span className="text-lg font-bold text-white">{message}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof MEGA Section */}
          <div className="mb-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-2xl rounded-3xl p-12 border-2 border-yellow-500/50">
                <div className="text-center">
                  <div className="flex justify-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-12 h-12 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    ))}
                  </div>
                  <blockquote className="text-3xl md:text-4xl text-white mb-8 font-black leading-relaxed">
                    "EXCEPTIONNEL ! Sébastien maîtrise déjà nos outils. 
                    Sa motivation et sa rigueur technique en font 
                    <span className="text-yellow-400"> LE candidat idéal</span> que nous recherchions."
                  </blockquote>
                  <div className="border-t-2 border-yellow-500/30 pt-8">
                    <div className="font-black text-yellow-400 text-2xl mb-2">Responsable Infrastructure IT</div>
                    <div className="text-orange-400 text-xl font-bold mb-4">KNDS - Groupe de défense européen</div>
                    <div className="inline-flex items-center gap-3 bg-green-900/30 border border-green-500/50 rounded-full px-6 py-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-green-400 font-bold text-lg">Témoignage vérifié</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ULTIMATE CTA Section */}
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                <span className="text-red-400 animate-pulse">DERNIÈRE CHANCE</span>
                <br />
                <span className="text-orange-400">DE LE RECRUTER</span>
              </h3>
              <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-bold">
                Un profil comme Sébastien ne reste pas longtemps disponible. 
                <br />
                <span className="text-orange-400 animate-pulse">Les meilleurs partent vite !</span>
              </p>
            </div>

            {/* MEGA CTA Buttons */}
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                <button 
                  onClick={scrollToProjects}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                  <div className="relative px-16 py-8 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 text-white rounded-3xl
                                transform hover:scale-110 transition-all duration-300 shadow-2xl
                                flex items-center gap-6 font-black text-2xl min-w-[400px] justify-center">
                    <Trophy className="w-8 h-8 animate-bounce" />
                    <span>VOIR SES EXPLOITS</span>
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
                  </div>
                </button>
                
                <button 
                  onClick={scrollToContact}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative px-16 py-8 border-4 border-orange-500 text-orange-400 bg-orange-500/10
                                hover:bg-orange-500 hover:text-white rounded-3xl backdrop-blur-xl
                                transform hover:scale-110 transition-all duration-300 shadow-2xl
                                flex items-center gap-6 font-black text-2xl min-w-[400px] justify-center">
                    <Rocket className="w-8 h-8 group-hover:animate-bounce" />
                    <span>RECRUTER MAINTENANT</span>
                  </div>
                </button>
              </div>

              {/* Urgency countdown */}
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur animate-pulse"></div>
                <div className="relative bg-red-900/90 border-2 border-red-500 rounded-2xl px-8 py-4">
                  <div className="text-red-400 font-black text-xl">
                    ⏰ RÉPONSE GARANTIE SOUS 2H - PROFIL ACTIF
                  </div>
                </div>
              </div>
            </div>

            {/* Quick access enhanced */}
            <div className="flex flex-wrap justify-center gap-6 pt-12">
              <a
                href="/public/docs/fernandes-sebastien-cv.pdf"
                download
                className="group relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl
                              hover:from-orange-900 hover:to-purple-900 transition-all duration-300
                              backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transform hover:scale-110 shadow-xl">
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  <span className="font-black text-lg">CV COMPLET</span>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl
                              hover:from-blue-700 hover:to-blue-600 transition-all duration-300
                              backdrop-blur-sm border border-blue-700/50 hover:border-blue-500/50 transform hover:scale-110 shadow-xl">
                  <svg className="w-6 h-6 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-black text-lg">PROFIL LINKEDIN</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;