import React, { useState } from 'react';
import { Award, Book, Code, Monitor, Server, Shield, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const [showPastEducation, setShowPastEducation] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div 
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Section */}
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <User className="w-24 h-24 text-white" />
                </div>
              </div>
              
              {/* Main Content */}
              <div className="md:w-2/3">
                {/* About Me Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <User className="w-6 h-6 text-orange-500 mr-2" />
                    Qui suis-je ?
                  </h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Je suis un étudiant passionné en BTS SIO avec une spécialisation en SISR à l'IPSSI de Saint Quentin en Yvelines. 
                    Ma formation me permet d'acquérir des compétences techniques solides dans la conception, le déploiement et la maintenance 
                    d'infrastructures informatiques.
                  </p>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    Mon objectif est de devenir administrateur systèmes & réseaux ou dans plusieurs années pentester, en mettant à profit 
                    ma rigueur, ma logique et mon autonomie.
                  </p>
                </div>

                {/* Education Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <GraduationCap className="w-6 h-6 text-orange-500 mr-2" />
                    Parcours Académique
                  </h3>
                  <div className="space-y-6">
                    {/* BTS SIO */}
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
                        <li>• Administration systèmes et réseaux</li>
                        <li>• Sécurité des infrastructures</li>
                        <li>• Virtualisation et Cloud Computing</li>
                        <li>• Support et maintenance informatique</li>
                      </ul>
                      <div className="mt-3 flex items-center">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
                          En cours
                        </span>
                      </div>
                    </div>

                    {/* Bac STI2D */}
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

                    {/* Brevet */}
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
                        <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6 mb-6">
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

                {/* Certifications Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Award className="w-6 h-6 text-orange-500 mr-2" />
                    Certifications et Formations
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6">
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

                    <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6">
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
                        <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6 mb-4">
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
                        
                        <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6">
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

                {/* Skills Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Code className="w-6 h-6 text-orange-500 mr-2" />
                    Domaines de compétences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg flex flex-col items-center text-center transition-all hover:shadow-md">
                      <Server className="w-10 h-10 text-orange-500 mb-2" />
                      <h4 className="font-medium">Infrastructure</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Systèmes & Réseaux</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg flex flex-col items-center text-center transition-all hover:shadow-md">
                      <Shield className="w-10 h-10 text-orange-500 mb-2" />
                      <h4 className="font-medium">Sécurité</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Protection des données</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg flex flex-col items-center text-center transition-all hover:shadow-md">
                      <Code className="w-10 h-10 text-orange-500 mb-2" />
                      <h4 className="font-medium">Automatisation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Scripts & Déploiement</p>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Briefcase className="w-6 h-6 text-orange-500 mr-2" />
                    Expérience professionnelle
                  </h3>
                  <div className="bg-orange-50 dark:bg-gray-700/50 rounded-lg p-6">
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
                      <li>• Support utilisateur niveau 1 et 2</li>
                      <li>• Gestion du parc informatique</li>
                      <li>• Administration système et réseau</li>
                      <li>• Documentation technique</li>
                      <li>• Participation aux projets d'infrastructure</li>
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

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export default About;