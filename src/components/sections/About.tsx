import React, { useEffect, useRef, useState } from 'react';
import { Award, Book, Code, Monitor, Server, Shield, Briefcase, GraduationCap, ChevronDown, ChevronUp, User } from 'lucide-react';

const About: React.FC = () => {
  const [showPastEducation, setShowPastEducation] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">À propos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
        </div>
        
        <div 
          ref={aboutRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Section */}
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                  <div className="relative w-48 h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center border-2 border-white/10">
                    <User className="w-24 h-24 text-orange-500" />
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="md:w-2/3">
                {/* About Me Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
                    <User className="w-6 h-6 text-orange-500 mr-2" />
                    Qui suis-je ?
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p className="backdrop-blur-lg bg-white/5 p-4 rounded-xl border border-white/10">
                      Je suis un étudiant passionné en BTS SIO avec une spécialisation en SISR à l'IPSSI de Saint Quentin en Yvelines. 
                      Ma formation me permet d'acquérir des compétences techniques solides dans la conception, le déploiement et la maintenance 
                      d'infrastructures informatiques.
                    </p>
                    <p className="backdrop-blur-lg bg-white/5 p-4 rounded-xl border border-white/10">
                      Mon objectif est de devenir administrateur systèmes & réseaux ou dans plusieurs années pentester, en mettant à profit 
                      ma rigueur, ma logique et mon autonomie.
                    </p>
                  </div>
                </div>

                {/* Education Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
                    <GraduationCap className="w-6 h-6 text-orange-500 mr-2" />
                    Parcours Académique
                  </h3>
                  <div className="space-y-6">
                    {/* BTS SIO */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                      <div className="flex items-center mb-4">
                        <img 
                          src="https://www.ecole-ipssi.com/wp-content/uploads/2020/01/logo-ipssi-1.png"
                          alt="IPSSI"
                          className="w-24 h-auto mr-4 rounded-lg"
                        />
                        <div>
                          <h4 className="text-xl font-semibold text-white">BTS SIO - Option SISR</h4>
                          <p className="text-orange-400">IPSSI, Saint-Quentin-en-Yvelines (2023-2025)</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        Services Informatiques aux Organisations - Solutions d'Infrastructure, Systèmes et Réseaux
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          Administration systèmes et réseaux
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          Sécurité des infrastructures
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          Virtualisation et Cloud Computing
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          Support et maintenance informatique
                        </li>
                      </ul>
                      <div className="mt-4">
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                          En cours
                        </span>
                      </div>
                    </div>

                    {/* Bac STI2D */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                      <div className="flex items-center mb-4">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_JF_Versailles.png/640px-Logo_JF_Versailles.png"
                          alt="Lycée Jules Ferry"
                          className="w-24 h-auto mr-4 rounded-lg"
                        />
                        <div>
                          <h4 className="text-xl font-semibold text-white">Baccalauréat STI2D - Option SIN</h4>
                          <p className="text-orange-400">Lycée Jules Ferry, Versailles (2021-2023)</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        Sciences et Technologies de l'Industrie et du Développement Durable - Systèmes d'Information et Numérique
                      </p>
                      <div className="mt-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                          Mention Bien
                        </span>
                      </div>
                    </div>

                    {/* Brevet */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                      <div className="flex items-center mb-4">
                        <img 
                          src="https://www.education.gouv.fr/sites/default/files/styles/image_bandeau/public/2020-02/college-jean-philippe-rameau-versailles-78000-51585.jpg"
                          alt="Collège Jean-Philippe Rameau"
                          className="w-24 h-auto mr-4 rounded-lg"
                        />
                        <div>
                          <h4 className="text-xl font-semibold text-white">Brevet des Collèges</h4>
                          <p className="text-orange-400">Collège Jean-Philippe Rameau, Versailles (2017-2021)</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                          Mention Très Bien
                        </span>
                      </div>
                    </div>

                    {/* Past Education Toggle */}
                    <button
                      onClick={() => setShowPastEducation(!showPastEducation)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      {showPastEducation ? (
                        <>
                          <ChevronUp size={20} />
                          <span>Masquer les formations non terminées</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={20} />
                          <span>Afficher les formations non terminées</span>
                        </>
                      )}
                    </button>

                    {/* Past Education Content */}
                    <div className={`transition-all duration-300 ${showPastEducation ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                        <div className="flex items-center mb-4">
                          <img 
                            src="https://www.lyc-vaucanson-versailles.ac-versailles.fr/sites/lyc-vaucanson-versailles/local/cache-vignettes/L144xH144/siteon0-e0d79.png"
                            alt="Lycée Vaucanson"
                            className="w-24 h-auto mr-4 rounded-lg"
                          />
                          <div>
                            <h4 className="text-xl font-semibold text-white">BTS SNIR</h4>
                            <p className="text-orange-400">Lycée Vaucanson, Versailles (2022-2023)</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          Systèmes Numériques option Informatique et Réseaux
                        </p>
                        <div className="mt-4">
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                            Non validé
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
                    <Award className="w-6 h-6 text-orange-500 mr-2" />
                    Certifications et Formations
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                      <div className="flex items-center mb-3">
                        <div>
                          <h4 className="text-xl font-semibold text-white">Sauveteur Secouriste du Travail (SST)</h4>
                          <p className="text-orange-400">Mission locale, Guyancourt (78) - Septembre 2023</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">
                        Formation aux premiers secours en milieu professionnel
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                      <div className="flex items-center mb-3">
                        <div>
                          <h4 className="text-xl font-semibold text-white">Prévention et Secours Civiques de niveau 1 (PSC1)</h4>
                          <p className="text-orange-400">Croix-Rouge Française - Juin 2021</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">
                        Formation aux gestes de premiers secours
                      </p>
                    </div>

                    {/* Certifications Toggle */}
                    <button
                      onClick={() => setShowCertifications(!showCertifications)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      {showCertifications ? (
                        <>
                          <ChevronUp size={20} />
                          <span>Masquer les autres formations</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={20} />
                          <span>Afficher les autres formations</span>
                        </>
                      )}
                    </button>

                    {/* Additional Certifications Content */}
                    <div className={`transition-all duration-300 ${showCertifications ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="space-y-4">
                        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                          <div className="flex items-center mb-3">
                            <div>
                              <h4 className="text-xl font-semibold text-white">Introduction aux réseaux (Cisco)</h4>
                              <p className="text-orange-400">Formation en ligne - 2022</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-300">
                            Notions fondamentales des réseaux informatiques, adressage IP, routage et commutation
                          </p>
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                          <div className="flex items-center mb-3">
                            <div>
                              <h4 className="text-xl font-semibold text-white">Permis B</h4>
                              <p className="text-orange-400">Obtenu en 2021</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-300">
                            Mobilité et autonomie dans mes déplacements professionnels
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
                    <Briefcase className="w-6 h-6 text-orange-500 mr-2" />
                    Expérience professionnelle
                  </h3>
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/KNDS_logo.svg/1200px-KNDS_logo.svg.png"
                        alt="KNDS"
                        className="w-24 h-auto mr-4 rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-white">Stage - Support Informatique</h4>
                        <p className="text-orange-400">KNDS, Versailles (Mai - Juin 2023)</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      {[
                        'Support utilisateur niveau 1 et 2',
                        'Gestion du parc informatique',
                        'Administration système et réseau',
                        'Documentation technique',
                        'Participation aux projets d\'infrastructure'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default About;