import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Award, Target, TrendingUp, CheckCircle, Zap, Clock, Users, Star, Download, Eye, MessageCircle, Calendar, Briefcase, Trophy, Rocket, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const highlights = [
    { 
      icon: Trophy, 
      text: "Stage réussi chez KNDS", 
      subtext: "Validation terrain",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      icon: Rocket, 
      text: "15+ projets techniques", 
      subtext: "Portfolio concret",
      color: "from-blue-500 to-purple-500"
    },
    { 
      icon: Heart, 
      text: "Passion cybersécurité", 
      subtext: "Motivation authentique",
      color: "from-red-500 to-pink-500"
    },
    { 
      icon: Zap, 
      text: "Opérationnel immédiatement", 
      subtext: "Prêt à contribuer",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const urgencyFactors = [
    "🔥 Profil rare : Admin sys junior avec expérience",
    "⚡ Disponible maintenant pour alternance",
    "🎯 Déjà formé aux outils entreprise",
    "💎 Motivation exceptionnelle démontrée"
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
      }, 2500);
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      {/* Cursor follower effect */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div 
          ref={heroRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* Urgency Banner */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-red-500/50 text-red-400 text-sm font-medium animate-pulse">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
              OPPORTUNITÉ LIMITÉE - Candidat exceptionnel disponible
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center mb-16">
            {/* Dynamic highlight */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className={`absolute -inset-4 bg-gradient-to-r ${highlights[currentHighlight].color} rounded-2xl blur opacity-30 animate-pulse`}></div>
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-center gap-4">
                    <highlights[currentHighlight].icon className="w-8 h-8 text-white" />
                    <div className="text-left">
                      <div className="text-xl font-bold text-white">{highlights[currentHighlight].text}</div>
                      <div className="text-sm text-gray-400">{highlights[currentHighlight].subtext}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Name with massive impact */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 animate-pulse">
                SÉBASTIEN
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">FERNANDES</span>
            </h1>

            {/* Power statement */}
            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Le <span className="text-orange-400">FUTUR EXPERT</span> en cybersécurité
                <br />
                que votre entreprise recherche
              </h2>
              
              <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                  <span className="text-orange-400 font-bold">Étudiant BTS SIO SISR</span> avec une expertise pratique déjà validée en entreprise.
                  <br />
                  Prêt à révolutionner votre infrastructure IT dès maintenant.
                </p>
                
                {/* Urgency factors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {urgencyFactors.map((factor, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-900/20 to-purple-900/20 rounded-xl border border-orange-500/30"
                    >
                      <span className="text-lg">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-500/50">
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-500 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <blockquote className="text-2xl md:text-3xl text-white mb-6 font-bold leading-relaxed">
                    "Un profil exceptionnel ! Sébastien maîtrise déjà les outils que nous utilisons. 
                    Sa motivation et sa rigueur technique en font un candidat idéal."
                  </blockquote>
                  <div className="border-t border-yellow-500/30 pt-6">
                    <div className="font-bold text-yellow-400 text-xl">Responsable Infrastructure IT</div>
                    <div className="text-orange-400 text-lg">KNDS - Groupe de défense européen</div>
                    <div className="text-gray-400 text-sm mt-2">✅ Témoignage vérifié</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Irresistible CTA Section */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                <span className="text-red-400">ATTENTION :</span> Profil unique disponible
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ne laissez pas passer cette opportunité rare. Un talent comme Sébastien 
                ne reste pas longtemps sur le marché. <span className="text-orange-400 font-bold">Agissez maintenant !</span>
              </p>
            </div>

            {/* Mega CTA Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={scrollToProjects}
                  className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 text-white rounded-2xl
                            hover:opacity-90 transform hover:scale-110
                            transition-all duration-300 shadow-2xl hover:shadow-orange-500/50
                            flex items-center gap-4 font-black text-xl min-w-[320px] justify-center
                            animate-pulse hover:animate-none"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-purple-600 rounded-2xl blur opacity-75"></div>
                  <div className="relative flex items-center gap-4">
                    <Trophy className="w-6 h-6" />
                    <span>DÉCOUVRIR SES EXPLOITS</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
                
                <button 
                  onClick={scrollToContact}
                  className="group relative px-12 py-6 border-4 border-orange-500 text-orange-400 bg-orange-500/10
                            hover:bg-orange-500 hover:text-white rounded-2xl backdrop-blur-xl
                            transform hover:scale-110 transition-all duration-300 shadow-2xl
                            flex items-center gap-4 font-black text-xl min-w-[320px] justify-center"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative flex items-center gap-4">
                    <Rocket className="w-6 h-6" />
                    <span>RECRUTER MAINTENANT</span>
                  </div>
                </button>
              </div>

              {/* Urgency timer effect */}
              <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-4 max-w-md mx-auto">
                <div className="text-red-400 font-bold text-sm">
                  ⏰ Candidature active - Réponse sous 24h garantie
                </div>
              </div>
            </div>

            {/* Quick access */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <a
                href="/public/docs/fernandes-sebastien-cv.pdf"
                download
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl
                          hover:from-orange-900 hover:to-purple-900 transition-all duration-300
                          backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transform hover:scale-105"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span className="font-semibold">CV Complet</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl
                          hover:from-blue-700 hover:to-blue-600 transition-all duration-300
                          backdrop-blur-sm border border-blue-700/50 hover:border-blue-500/50 transform hover:scale-105"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-semibold">Profil LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;