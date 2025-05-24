import React, { useEffect, useRef } from 'react';
import { Award, Book, Code, Monitor, Server, Shield, Briefcase, GraduationCap, ChevronDown, ChevronUp, User } from 'lucide-react';

const About: React.FC = () => {
  const [showPastEducation, setShowPastEducation] = React.useState(false);
  const [showCertifications, setShowCertifications] = React.useState(false);
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
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200/30 dark:bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div 
          ref={aboutRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-xl p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Section */}
              <div className="md:w-1/3">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600">
                    <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-800">
                      <User className="w-24 h-24 text-orange-500" />
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 space-y-4">
                  <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-orange-500" />
                      <div>
                        <h4 className="font-medium">Formation</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">BTS SIO SISR</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-orange-500" />
                      <div>
                        <h4 className="font-medium">Expérience</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">2 stages professionnels</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-orange-500" />
                      <div>
                        <h4 className="font-medium">Certifications</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">3+ certifications techniques</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="md:w-2/3">
                {/* About Me Section */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-orange-500 to-purple-500 p-[1px] rounded-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <User className="w-6 h-6 text-orange-500 mr-2" />
                        Qui suis-je ?
                      </h3>
                      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        Je suis un étudiant passionné en BTS SIO avec une spécialisation en SISR à l'IPSSI de Saint Quentin en Yvelines. 
                        Ma formation me permet d'acquérir des compétences techniques solides dans la conception, le déploiement et la maintenance 
                        d'infrastructures informatiques.
                      </p>
                      <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                        Mon objectif est de devenir administrateur systèmes & réseaux ou dans plusieurs années pentester, en mettant à profit 
                        ma rigueur, ma logique et mon autonomie.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 text-orange-600 dark:text-orange-400">Points forts</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                              Autonomie
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                              Rigueur
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                              Esprit d'équipe
                            </li>
                          </ul>
                        </div>
                        <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 text-orange-600 dark:text-orange-400">Centres d'intérêt</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                              Cybersécurité
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                              Nouvelles technologies
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                              Veille technologique
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <GraduationCap className="w-6 h-6 text-orange-500 mr-2" />
                        Parcours Académique
                      </h3>
                      <div className="space-y-6">
                        {/* BTS SIO */}
                        <div className="relative">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 to-purple-500"></div>
                          <div className="pl-6">
                            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-orange-500"></div>
                            <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6">
                              <div className="flex items-center mb-4">
                                <img 
                                  src="https://www.ecole-ipssi.com/wp-content/uploads/2020/01/logo-ipssi-1.png"
                                  alt="IPSSI"
                                  className="w-24 h-auto mr-4"
                                />
                                <div>
                                  <h4 className="text-xl font-semibold">BTS SIO - Option SISR</h4>
                                  <p className="text-gray-600 dark:text-gray-400">IPSSI, Saint-Quentin-en-Yvelines (2023-2025)</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                Services Informatiques aux Organisations - Solutions d'Infrastructure, Systèmes et Réseaux
                              </p>
                              <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                <li className="flex items-center gap-2">
                                  <Server className="w-4 h-4 text-orange-500" />
                                  Administration systèmes et réseaux
                                </li>
                                <li className="flex items-center gap-2">
                                  <Shield className="w-4 h-4 text-orange-500" />
                                  Sécurité des infrastructures
                                </li>
                                <li className="flex items-center gap-2">
                                  <Monitor className="w-4 h-4 text-orange-500" />
                                  Virtualisation et Cloud Computing
                                </li>
                                <li className="flex items-center gap-2">
                                  <Code className="w-4 h-4 text-orange-500" />
                                  Support et maintenance informatique
                                </li>
                              </ul>
                              <div className="mt-3 flex items-center">
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
                                  En cours
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bac STI2D */}
                        <div className="relative">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 to-purple-500"></div>
                          <div className="pl-6">
                            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-orange-500"></div>
                            <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6">
                              <div className="flex items-center mb-4">
                                <img 
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_JF_Versailles.png/640px-Logo_JF_Versailles.png"
                                  alt="Lycée Jules Ferry"
                                  className="w-24 h-auto mr-4"
                                />
                                <div>
                                  <h4 className="text-xl font-semibold">Baccalauréat STI2D - Option SIN</h4>
                                  <p className="text-gray-600 dark:text-gray-400">Lycée Jules Ferry, Versailles (2021-2023)</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                Sciences et Technologies de l'Industrie et du Développement Durable - Systèmes d'Information et Numérique
                              </p>
                              <div className="mt-3 flex items-center">
                                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                                  Mention Bien
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Brevet */}
                        <div className="relative">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 to-purple-500"></div>
                          <div className="pl-6">
                            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-orange-500"></div>
                            <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6">
                              <div className="flex items-center mb-4">
                                <img 
                                  src="https://www.education.gouv.fr/sites/default/files/styles/image_bandeau/public/2020-02/college-jean-philippe-rameau-versailles-78000-51585.jpg"
                                  alt="Collège Jean-Philippe Rameau"
                                  className="w-24 h-auto mr-4 rounded"
                                />
                                <div>
                                  <h4 className="text-xl font-semibold">Brevet des Collèges</h4>
                                  <p className="text-gray-600 dark:text-gray-400">Collège Jean-Philippe Rameau, Versailles (2017-2021)</p>
                                </div>
                              </div>
                              <div className="mt-3 flex items-center">
                                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                                  Mention Très Bien
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Collapsible Past Education */}
                        <div className="relative">
                          <button
                            onClick={() => setShowPastEducation(!showPastEducation)}
                            className="w-full flex items-center justify-center gap-2 py-2 text-orange-500 hover:text-orange-600 transition-colors"
                          >
                            {showPastEducation ? (
                              <>
                                <ChevronUp size={20} />
                                <span>Masquer les formations non terminé</span>
                              </>
                            ) : (
                              <>
                                <ChevronDown size={20} />
                                <span>Afficher les formations non terminé</span>
                              </>
                            )}
                          </button>

                          <div className={`transition-all duration-300 ${showPastEducation ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                            {/* BTS SNIR - Non validé */}
                            <div className="relative">
                              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 to-purple-500"></div>
                              <div className="pl-6">
                                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-orange-500"></div>
                                <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6">
                                  <div className="flex items-center mb-4">
                                    <img 
                                      src="https://www.lyc-vaucanson-versailles.ac-versailles.fr/sites/lyc-vaucanson-versailles/local/cache-vignettes/L144xH144/siteon0-e0d79.png"
                                      alt="Lycée Vaucanson"
                                      className="w-24 h-auto mr-4"
                                    />
                                    <div>
                                      <h4 className="text-xl font-semibold">BTS SNIR</h4>
                                      <p className="text-gray-600 dark:text-gray-400">Lycée Vaucanson, Versailles (2022-2023)</p>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Systèmes Numériques option Informatique et Réseaux
                                  </p>
                                  <div className="mt-3 flex items-center">
                                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-medium">
                                      Non validé
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-[1px] rounded-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <Award className="w-6 h-6 text-orange-500 mr-2" />
                        Certifications et Formations
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02]">
                          <div className="flex items-center mb-3">
                            <div>
                              <h4 className="text-xl font-semibold">Sauveteur Secouriste du Travail (SST)</h4>
                              <p className="text-gray-600 dark:text-gray-400">Mission locale, Guyancourt (78) - Septembre 2023</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Formation aux premiers secours en milieu professionnel
                          </p>
                        </div>

                        <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02]">
                          <div className="flex items-center mb-3">
                            <div>
                              <h4 className="text-xl font-semibold">Prévention et Secours Civiques de niveau 1 (PSC1)</h4>
                              <p className="text-gray-600 dark:text-gray-400">Croix-Rouge Française - Juin 2021</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Formation aux gestes de premiers secours
                          </p>
                        </div>

                        {/* Collapsible Additional Certifications */}
                        <div className="relative">
                          <button
                            onClick={() => setShowCertifications(!showCertifications)}
                            className="w-full flex items-center justify-center gap-2 py-2 text-orange-500 hover:text-orange-600 transition-colors"
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

                          <div className={`transition-all duration-300 ${showCertifications ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                            <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6 mb-4 transform transition-all duration-300 hover:scale-[1.02]">
                              <div className="flex items-center mb-3">
                                <div>
                                  <h4 className="text-xl font-semibold">Introduction aux réseaux (Cisco)</h4>
                                  <p className="text-gray-600 dark:text-gray-400">Formation en ligne - 2022</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Notions fondamentales des réseaux informatiques, adressage IP, routage et commutation
                              </p>
                            </div>
                            
                            <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02]">
                              <div className="flex items-center mb-3">
                                <div>
                                  <h4 className="text-xl font-semibold">Permis B</h4>
                                  <p className="text-gray-600 dark:text-gray-400">Obtenu en 2021</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Mobilité et autonomie dans mes déplacements professionnels
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] rounded-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <Briefcase className="w-6 h-6 text-orange-500 mr-2" />
                        Expérience professionnelle
                      </h3>
                      <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center mb-4">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/KNDS_logo.svg/1200px-KNDS_logo.svg.png"
                            alt="KNDS"
                            className="w-24 h-auto mr-4"
                          />
                          <div>
                            <h4 className="text-xl font-semibold">Stage - Support Informatique</h4>
                            <p className="text-gray-600 dark:text-gray-400">KNDS, Versailles (Mai - Juin 2023)</p>
                          </div>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Support utilisateur niveau 1 et 2
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Gestion du parc informatique
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Administration système et réseau
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Documentation technique
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Participation aux projets d'infrastructure
                          </li>
                        </ul>
                      </div>
                    </div>
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