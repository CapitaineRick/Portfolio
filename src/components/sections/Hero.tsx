import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Award, Target, TrendingUp, CheckCircle, Zap, Clock, Users, Star, Download, Eye, MessageCircle, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "2+", label: "Années d'études", desc: "BTS SIO SISR" },
    { number: "15+", label: "Projets réalisés", desc: "Infrastructure & Sécurité" },
    { number: "100%", label: "Motivation", desc: "Passion pour l'IT" },
    { number: "24/7", label: "Disponibilité", desc: "Veille technologique" }
  ];

  const keyStrengths = [
    {
      icon: Shield,
      title: "Sécurité & Infrastructure",
      desc: "Expertise en administration système Windows/Linux, virtualisation et cybersécurité",
      highlight: "Compétence clé recherchée"
    },
    {
      icon: Target,
      title: "Résolution de problèmes",
      desc: "Approche méthodique pour diagnostiquer et résoudre les incidents techniques",
      highlight: "Autonomie prouvée"
    },
    {
      icon: TrendingUp,
      title: "Évolution continue",
      desc: "Veille technologique active et formation permanente aux nouvelles technologies",
      highlight: "Adaptabilité"
    }
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
        setCurrentStat((prev) => (prev + 1) % stats.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, stats.length]);

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
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* Header avec impact immédiat */}
          <div className="text-center mb-16">
            {/* Badge de disponibilité */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/50 text-green-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Disponible immédiatement pour alternance
            </div>

            {/* Titre principal avec impact */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-purple-500">
                Fernandes
              </span>
              <br />
              <span className="text-white">Sébastien</span>
            </h1>

            {/* Proposition de valeur claire */}
            <div className="max-w-4xl mx-auto mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Votre futur <span className="text-orange-400">Administrateur Systèmes & Réseaux</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Étudiant BTS SIO SISR avec une expertise pratique en infrastructure IT, 
                prêt à apporter de la valeur à votre équipe dès le premier jour.
              </p>
            </div>

            {/* Stats dynamiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                    currentStat === index 
                      ? 'bg-gradient-to-br from-orange-500/20 to-purple-500/20 border-orange-500/50 scale-105' 
                      : 'bg-gray-800/60 border-gray-700/50'
                  }`}
                >
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                    currentStat === index ? 'text-orange-400' : 'text-white'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section de crédibilité */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {keyStrengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl">
                        <IconComponent className="w-8 h-8 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{strength.title}</h3>
                        <span className="text-sm text-orange-400 font-medium">{strength.highlight}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{strength.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Témoignage et social proof */}
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-gray-700/50">
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 italic leading-relaxed">
                "Sébastien a démontré une excellente maîtrise technique et une grande autonomie 
                lors de son stage. Sa capacité d'adaptation et sa rigueur en font un profil très prometteur."
              </blockquote>
              <div className="border-t border-gray-700 pt-6">
                <div className="font-bold text-white text-lg">Responsable IT - KNDS</div>
                <div className="text-orange-400">Maître de stage</div>
              </div>
            </div>
          </div>

          {/* Call to Action principal */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Prêt à renforcer votre équipe IT ?
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Découvrez comment mes compétences peuvent contribuer au succès de vos projets d'infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl
                          hover:opacity-90 transform hover:scale-105
                          transition-all duration-300 shadow-lg hover:shadow-orange-500/25
                          flex items-center gap-3 font-medium text-lg min-w-[250px] justify-center"
              >
                <Eye className="w-5 h-5" />
                <span>Voir mes réalisations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 border-2 border-orange-500 text-orange-400 bg-orange-500/5
                          hover:bg-orange-500 hover:text-white rounded-xl
                          transform hover:scale-105 transition-all duration-300
                          flex items-center gap-3 font-medium text-lg min-w-[250px] justify-center backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Planifier un entretien</span>
              </button>
            </div>

            {/* Quick actions */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <a
                href="/public/docs/fernandes-sebastien-cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gray-800/60 text-gray-300 rounded-xl
                          hover:bg-gray-700 hover:text-white transition-all duration-300
                          backdrop-blur-sm border border-gray-700/50"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger CV</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800/60 text-gray-300 rounded-xl
                          hover:bg-gray-700 hover:text-white transition-all duration-300
                          backdrop-blur-sm border border-gray-700/50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;