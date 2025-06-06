import React, { useEffect, useRef, useState } from 'react';
import { Server, ArrowRight, Terminal, Shield, Network, Code, Database, Cloud, Cpu, HardDrive, Wifi, Lock, Monitor, Zap, Globe, GraduationCap, Briefcase, Award, Target, TrendingUp, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Sébastien a démontré une excellente maîtrise technique et une grande autonomie lors de son stage.",
      author: "Responsable IT - KNDS",
      role: "Maître de stage"
    },
    {
      text: "Étudiant rigoureux avec une approche méthodique des problématiques système et réseau.",
      author: "Formateur IPSSI",
      role: "Enseignant BTS SIO"
    }
  ];

  const achievements = [
    { icon: Award, label: "BTS SIO SISR", desc: "En cours - IPSSI" },
    { icon: Target, label: "Stage KNDS", desc: "Support & Infrastructure" },
    { icon: TrendingUp, label: "15+ Projets", desc: "Techniques réalisés" },
    { icon: CheckCircle, label: "Certifications", desc: "En préparation" }
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
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-16 transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Left Column - Value Proposition */}
          <div className="lg:w-1/2 space-y-8">
            {/* Badge professionnel */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-900/40 to-purple-900/40 backdrop-blur-sm border border-orange-500/30 text-orange-400 text-sm font-medium">
              <Server className="w-5 h-5" />
              Futur Administrateur Systèmes & Réseaux
            </div>
            
            {/* Proposition de valeur principale */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-400 to-purple-600">
                  Fernandes Sébastien
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Votre prochain talent en <span className="text-orange-400">infrastructure IT</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Étudiant BTS SIO SISR passionné, je transforme les défis techniques en solutions robustes. 
                  Spécialisé en administration système, sécurité réseau et support utilisateur.
                </p>
              </div>
            </div>

            {/* Proposition de valeur unique */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" />
                Pourquoi me choisir ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Formation technique solide</div>
                    <div className="text-sm text-gray-400">BTS SIO SISR + expérience terrain</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Autonomie & rigueur</div>
                    <div className="text-sm text-gray-400">Gestion de projets complexes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Veille technologique</div>
                    <div className="text-sm text-gray-400">Toujours à jour des innovations</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Passion cybersécurité</div>
                    <div className="text-sm text-gray-400">Objectif : expert sécurité</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl
                          hover:opacity-90 transform hover:scale-105
                          transition-all duration-300 shadow-lg hover:shadow-orange-500/25
                          flex items-center gap-3 font-medium relative overflow-hidden"
              >
                <span className="relative z-10">Voir mes réalisations</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 border-2 border-orange-500 text-orange-400 bg-orange-500/5
                          hover:bg-orange-500 hover:text-white rounded-xl
                          transform hover:scale-105 transition-all duration-300
                          flex items-center gap-3 font-medium backdrop-blur-sm"
              >
                <span>Discutons de votre projet</span>
                <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Crédibilité & Social Proof */}
          <div className="lg:w-1/2 relative">
            <div className="space-y-8">
              
              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group p-6 rounded-xl bg-gray-800/60 backdrop-blur-sm shadow-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                    <achievement.icon className="w-8 h-8 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-white mb-1">{achievement.label}</div>
                    <div className="text-sm text-gray-400">{achievement.desc}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial Carousel */}
              <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <div className="text-center">
                  <div className="text-4xl text-orange-500 mb-4">"</div>
                  <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </blockquote>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-sm text-orange-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentTestimonial === index ? 'bg-orange-500 w-8' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Compétences clés */}
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Compétences techniques</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Server, label: 'Windows Server', level: 85 },
                    { icon: Shield, label: 'Cybersécurité', level: 75 },
                    { icon: Network, label: 'Réseaux Cisco', level: 80 },
                    { icon: Terminal, label: 'Scripting', level: 70 }
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-white">{skill.label}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disponibilité */}
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-semibold text-white">Disponible pour alternance</span>
                </div>
                <p className="text-sm text-gray-300">
                  Recherche active d'une alternance en administration système/réseau pour septembre 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;