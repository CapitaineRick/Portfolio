import React, { useEffect, useRef, useState } from 'react';
import { Award, Book, Code, Monitor, Server, Shield, Briefcase, GraduationCap, ChevronDown, ChevronUp, User, MapPin, Calendar, Mail, Phone, Globe, FileText } from 'lucide-react';

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
    <section id="about" className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
        </div>
        
        <div 
          ref={aboutRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
                  {/* Profile Image */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                      <img 
                        src="/images/profile.webp"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Fernandes Sébastien</h3>
                    <p className="text-orange-700 dark:text-orange-400 font-medium">
                      Étudiant en BTS SIO SISR
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <MapPin className="w-4 h-4 text-orange-700 dark:text-orange-500" />
                      </div>
                      <span>Versailles, France</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <Mail className="w-4 h-4 text-orange-700 dark:text-orange-500" />
                      </div>
                      <a href="mailto:sebastien.78.fernandes@outlook.fr" className="hover:text-orange-500">
                        sebastien.78.fernandes@outlook.fr
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <Globe className="w-4 h-4 text-orange-700 dark:text-orange-500" />
                      </div>
                      <a href="https://github.com/CapitaineRick" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                        github.com/CapitaineRick
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-orange-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-700 dark:text-orange-500">2+</div>
                      <div className="text-sm text-gray-700 dark:text-gray-400">Années d'études</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-700 dark:text-orange-500">15+</div>
                      <div className="text-sm text-gray-700 dark:text-gray-400">Projets</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-700 dark:text-orange-500">3+</div>
                      <div className="text-sm text-gray-700 dark:text-gray-400">Certifications</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-700 dark:text-orange-500">2</div>
                      <div className="text-sm text-gray-700 dark:text-gray-400">Stages</div>
                    </div>
                  </div>

                  {/* Download CV Button */}
                  <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <FileText className="w-5 h-5" />
                    Télécharger mon CV
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* About Me Section */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                      <User className="w-6 h-6 text-orange-700 dark:text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Qui suis-je ?</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Je suis un étudiant passionné en BTS SIO avec une spécialisation en SISR à l'IPSSI de Saint Quentin en Yvelines. 
                      Ma formation me permet d'acquérir des compétences techniques solides dans la conception, le déploiement et la maintenance 
                      d'infrastructures informatiques.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Mon objectif est de devenir administrateur systèmes & réseaux ou dans plusieurs années pentester, en mettant à profit 
                      ma rigueur, ma logique et mon autonomie.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700/50 dark:to-gray-700/30 p-6 rounded-xl">
                        <h4 className="font-semibold text-lg mb-4 text-orange-700 dark:text-orange-400">Points forts</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">Autonomie</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">Rigueur</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">Esprit d'équipe</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">Capacité d'adaptation</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700/50 dark:to-gray-700/30 p-6 rounded-xl">
                        <h4 className="font-semibold text-lg mb-4 text-purple-700 dark:text-purple-400">Centres d'intérêt</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">Cybersécurité</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">Nouvelles technologies</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">Veille technologique</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">Administration système</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-blue-700 dark:text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Parcours Académique</h3>
                  </div>

                  <div className="relative">
                    <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                    {/* BTS SIO */}
                    <div className="relative pl-16 pb-8">
                      <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <img 
                              src="https://www.ecole-ipssi.com/wp-content/uploads/2020/01/logo-ipssi-1.png"
                              alt="IPSSI"
                              className="w-24 h-auto"
                            />
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white">BTS SIO - Option SISR</h4>
                              <p className="text-gray-700 dark:text-gray-400">IPSSI, Saint-Quentin-en-Yvelines</p>
                            </div>
                          </div>
                          <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-sm">
                            2023-2025
                          </span>
                        </div>
                        <div className="space-y-4">
                          <p className="text-sm text-gray-700 dark:text-gray-400">
                            Services Informatiques aux Organisations - Solutions d'Infrastructure, Systèmes et Réseaux
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Server className="w-4 h-4 text-blue-700 dark:text-blue-500" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Administration systèmes</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-blue-700 dark:text-blue-500" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Sécurité des infrastructures</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Monitor className="w-4 h-4 text-blue-700 dark:text-blue-500" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Virtualisation</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Code className="w-4 h-4 text-blue-700 dark:text-blue-500" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Support technique</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Past Education Toggle */}
                    <div className="relative pl-16">
                      <button
                        onClick={() => setShowPastEducation(!showPastEducation)}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-orange-500 transition-colors"
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

                      {showPastEducation && (
                        <div className="mt-8 space-y-8">
                          {/* BTS SNIR (Non terminé) */}
                          <div>
                            <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-red-500 border-4 border-white dark:border-gray-800"></div>
                            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                  <img 
                                    src="https://www.lyc-vaucanson-versailles.ac-versailles.fr/sites/lyc-vaucanson-versailles/local/cache-vignettes/L144xH144/siteon0-e0d79.png"
                                    alt="Lycée Vaucanson"
                                    className="w-24 h-auto"
                                  />
                                  <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">BTS SNIR</h4>
                                    <p className="text-gray-700 dark:text-gray-400">Lycée Vaucanson, Versailles</p>
                                  </div>
                                </div>
                                <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
                                  2022-2023
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 dark:text-gray-400">
                                Systèmes Numériques option Informatique et Réseaux
                              </p>
                              <div className="mt-4 inline-flex px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
                                Non validé - Réorientation
                              </div>
                            </div>
                          </div>

                          {/* BTS SN (Non terminé) */}
                          <div>
                            <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-red-500 border-4 border-white dark:border-gray-800"></div>
                            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                  <img 
                                    src="https://www.lyc-vaucanson-versailles.ac-versailles.fr/sites/lyc-vaucanson-versailles/local/cache-vignettes/L144xH144/siteon0-e0d79.png"
                                    alt="Lycée Vaucanson"
                                    className="w-24 h-auto"
                                  />
                                  <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">BTS SN</h4>
                                    <p className="text-gray-700 dark:text-gray-400">Lycée Vaucanson, Versailles</p>
                                  </div>
                                </div>
                                <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
                                  2021-2022
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 dark:text-gray-400">
                                Systèmes Numériques option Électronique et Communication
                              </p>
                              <div className="mt-4 inline-flex px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
                                Non validé - Réorientation
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bac STI2D */}
                    <div className="relative pl-16 pb-8">
                      <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-gray-800"></div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_JF_Versailles.png/640px-Logo_JF_Versailles.png"
                              alt="Lycée Jules Ferry"
                              className="w-24 h-auto"
                            />
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bac STI2D - Option SIN</h4>
                              <p className="text-gray-700 dark:text-gray-400">Lycée Jules Ferry, Versailles</p>
                            </div>
                          </div>
                          <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm">
                            2021-2023
                          </span>
                        </div>
                        <div className="space-y-4">
                          <p className="text-sm text-gray-700 dark:text-gray-400">
                            Sciences et Technologies de l'Industrie et du Développement Durable - Systèmes d'Information et Numérique
                          </p>
                          <div className="inline-flex px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                            Mention Bien
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                      <Award className="w-6 h-6 text-green-700 dark:text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700/50 dark:to-gray-700/30 rounded-xl p-6 transform transition-transform hover:scale-105">
                      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Sauveteur Secouriste du Travail (SST)</h4>
                      <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                        Mission locale, Guyancourt (78) - Septembre 2023
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Formation aux premiers secours en milieu professionnel</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700/50 dark:to-gray-700/30 rounded-xl p-6 transform transition-transform hover:scale-105">
                      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">PSC1</h4>
                      <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                        Croix-Rouge Française - Juin 2021
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Formation aux gestes de premiers secours</p>
                    </div>
                  </div>

                  {/* Additional Certifications Toggle */}
                  <div className="mt-6">
                    <button
                      onClick={() => setShowCertifications(!showCertifications)}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-green-500 transition-colors"
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

                    {showCertifications && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700/50 dark:to-gray-700/30 rounded-xl p-6 transform transition-transform hover:scale-105">
                          <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Introduction aux réseaux (Cisco)</h4>
                          <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                            Formation en ligne - 2022
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">Notions fondamentales des réseaux informatiques</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700/50 dark:to-gray-700/30 rounded-xl p-6 transform transition-transform hover:scale-105">
                          <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Permis B</h4>
                          <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                            Obtenu en 2021
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">Mobilité et autonomie dans mes déplacements</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                      <Briefcase className="w-6 h-6 text-orange-700 dark:text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Expérience Professionnelle</h3>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700/50 dark:to-gray-700/30 rounded-xl p-6">
                    <div className="flex items-center gap-6 mb-6">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/KNDS_logo.svg/1200px-KNDS_logo.svg.png"
                        alt="KNDS"
                        className="w-32 h-auto"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">Stage - Support Informatique</h4>
                        <p className="text-gray-700 dark:text-gray-400">KNDS, Vers
                        ailles</p>
                        <p className="text-sm text-orange-700 dark:text-orange-400">Mai -  Juin 2023</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Missions principales</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Support utilisateur niveau 1 et 2
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Gestion du parc informatique
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Administration système et réseau
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Réalisations</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Documentation technique
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Participation aux projets d'infrastructure
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Mise en place d'outils de supervision
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                      <h5 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Compétences développées</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm">
                          Support technique
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">
                          Administration AD
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                          Gestion de parc
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">
                          Documentation
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
    </section>
  );
};

export default About;